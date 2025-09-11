import { useState } from "react";
import { Input, Button, Typography, message } from "antd";
import { createArticle } from "../services/articles.services";

import { Editor } from '@tinymce/tinymce-react';

export default function WriteArticlesPage2() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !content || !summary || !thumbnailUrl) {
      message.error("Vui lòng nhập đầy đủ tiêu đề, tóm tắt, thumbnail và nội dung!");
      return;
    }
    setLoading(true);
    try {
      await createArticle({
        title,
        summary,
        thumbnailUrl,
        content, // HTML
      });
      message.success("Đã đăng bài viết!");
      setTitle("");
      setSummary("");
      setThumbnailUrl("");
      setContent("");
    } catch (err) {
      message.error("Lỗi khi đăng bài!");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8 }}>
      <Typography.Title level={2}>Viết bài mới (TinyMCE)</Typography.Title>
      <Input
        placeholder="Tiêu đề bài viết"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        style={{ marginBottom: 16, fontSize: 18 }}
      />
      <Input.TextArea
        placeholder="Tóm tắt bài viết"
        value={summary}
        onChange={e => setSummary(e.target.value)}
        style={{ marginBottom: 16, fontSize: 16 }}
        rows={3}
      />
      <Input
        placeholder="URL ảnh thumbnail"
        value={thumbnailUrl}
        onChange={e => setThumbnailUrl(e.target.value)}
        style={{ marginBottom: 16, fontSize: 16 }}
      />
      <div style={{ marginBottom: 24 }}>
        <Editor
          apiKey="cpg0ixns1b0oyk3ywtunflwhd0j68frh1ueqr4tq0do3mp6f"
          value={content}
          onEditorChange={(newValue: string) => setContent(newValue)}
          init={{
            height: 300,
            menubar: true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'help', 'wordcount', 'fontfamily', 'fontsize'
              ],
              toolbar: 'undo redo | blocks fontfamily fontsize | ' +
                  'bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'link image table | removeformat | help',
              toolbar_mode: 'wrap',
              font_family_formats:
                  'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva',
              fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            placeholder: 'Nhập nội dung bài viết (có thể chèn ảnh, bảng, video...)',
          }}
        />
      </div>
      <Button type="primary" onClick={handleSubmit} loading={loading}>
        Đăng bài
      </Button>
    </div>
  );
}
