import { useState, useEffect } from "react";
import { Input, Button, Typography, message } from "antd";
import QuillEditor from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { createArticle, getArticleById, updateArticle } from "../services/articles.services";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function WriteArticlesPage() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("edit");

  function toSlug(str: string) {
    return str
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .toLowerCase();
  }

  useEffect(() => {
    if (editId) {
      (async () => {
        try {
          const data = await getArticleById(editId);
          setTitle(data.title || "");
          setExcerpt(data.excerpt || "");
          setThumbnailUrl(data.thumbnailUrl || data.thumbnail_url || "");
          setContent(data.content || "");
        } catch {
          messageApi.error("Không lấy được dữ liệu bài viết!");
        }
      })();
    }
  }, [editId]);

  const handleSubmit = async () => {
    if (!title || !content || !excerpt || !thumbnailUrl) {
      messageApi.error("Vui lòng nhập đầy đủ tiêu đề, tóm tắt, thumbnail và nội dung!");
      return;
    }
    setLoading(true);
    try {
      if (editId) {
        await updateArticle(editId, {
          title,
          excerpt,
          thumbnail_url: thumbnailUrl,
          slug: toSlug(title),
          content,
        });
        messageApi.success("Đã cập nhật bài viết!");
        navigate("/quan-ly-bai-viet");
      } else {
        await createArticle({
          title,
          excerpt,
          thumbnail_url: thumbnailUrl,
          slug: toSlug(title),
          content, // HTML
        });
  messageApi.success("Đã đăng bài viết!");
      }
      setTitle("");
      setExcerpt("");
      setThumbnailUrl("");
      setContent("");
    } catch (err) {
  messageApi.error(editId ? "Lỗi khi cập nhật bài!" : "Lỗi khi đăng bài!");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8 }}>
      {contextHolder}
      <Typography.Title level={2}>{editId ? "Chỉnh sửa bài viết" : "Viết bài mới"}</Typography.Title>
      <Input
        placeholder="Tiêu đề bài viết"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ marginBottom: 16, fontSize: 18 }}
      />
      <Input.TextArea
        placeholder="Tóm tắt bài viết"
        value={excerpt}
        onChange={e => setExcerpt(e.target.value)}
        style={{ marginBottom: 16, fontSize: 16 }}
        rows={3}
      />
      <Input
        placeholder="URL ảnh thumbnail"
        value={thumbnailUrl}
        onChange={e => setThumbnailUrl(e.target.value)}
        style={{ marginBottom: 16, fontSize: 16 }}
      />
      <QuillEditor
        value={content}
        onChange={setContent}
        style={{ height: 300, marginBottom: 24 }}
        placeholder="Nhập nội dung bài viết (có thể chèn ảnh, bảng, video...)"
      />
      <Button type="primary" onClick={handleSubmit} loading={loading}>
        {editId ? "Lưu" : "Đăng bài"}
      </Button>

      <Button onClick={() => console.log(content)}>Print</Button>
    </div>
  );
}
