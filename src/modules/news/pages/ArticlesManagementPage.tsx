import { useEffect, useState } from "react";
import { Table, Button, Space, Pagination, Typography, Popconfirm, message } from "antd";
import { getArticles, deleteArticle } from "../services/articles.services";
import { useNavigate } from "react-router-dom";
import { EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

export default function ArticlesManagementPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const [articles, setArticles] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const fetchArticles = async (pageNum = page, limit = pageSize) => {
    setLoading(true);
    try {
      const res = await getArticles(pageNum, limit);
      setArticles(res.data);
      setTotal(res.total);
    } catch (err) {
      messageApi.error("Lỗi khi tải danh sách bài viết!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles(page, pageSize);
    // eslint-disable-next-line
  }, [page, pageSize]);

  const handleDelete = async (id: number | string) => {
    setLoading(true);
    try {
      await deleteArticle(id);
      messageApi.success("Đã xóa bài viết!");
      fetchArticles();
    } catch (err) {
      messageApi.error("Lỗi khi xóa bài viết!");
    }
    setLoading(false);
  };

  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      render: (text: string) => (
        <Typography.Text strong>{text}</Typography.Text>
      ),
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "Tóm tắt",
      dataIndex: "excerpt",
      key: "excerpt",
      ellipsis: true,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail_url",
      key: "thumbnail_url",
      render: (url: string) => url ? <a href={url} target="_blank" rel="noopener noreferrer">{url}</a> : <span style={{color:'#aaa'}}>Không có</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space>
          <Button type="text" icon={<EyeOutlined />} onClick={() => navigate(`/news/${record.slug}`)} />
          <Button type="text" icon={<EditOutlined />} onClick={() => navigate(`/new-articles?edit=${record.id}`)} />
          <Popconfirm title="Xác nhận xóa bài viết?" onConfirm={() => handleDelete(record.id)}>
            <Button type="text" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 1300, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8 }}>
      {contextHolder}
      <Typography.Title level={2}>Quản lý bài viết</Typography.Title>
      <Button type="primary" icon={<PlusOutlined />} style={{ marginBottom: 16 }} onClick={() => navigate("/new-articles")}>Thêm bài viết</Button>
      <Table
        columns={columns}
        dataSource={articles}
        rowKey="id"
        loading={loading}
        pagination={false}
      />
      <Pagination
        style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}
        current={page}
        pageSize={pageSize}
        total={total}
        showSizeChanger
        onChange={(p, ps) => { setPage(p); setPageSize(ps); }}
      />
    </div>
  );
}
