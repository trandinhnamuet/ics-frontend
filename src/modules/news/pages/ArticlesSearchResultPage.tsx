import { useEffect, useState } from "react";
import { Row, Col, Pagination, Typography, Spin } from "antd";
import { getArticles } from "../services/articles.services";
import { useNavigate, useLocation } from "react-router-dom";
import NewsSideBar from "../components/NewsSideBar";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ArticlesSearchResultPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const query = useQuery();
  const searchText = query.get("search") || "";

  useEffect(() => {
    setLoading(true);
    getArticles(page, 9, searchText).then((res) => {
      setArticles(res.data);
      setTotal(res.total);
      setLoading(false);
    });
  }, [page, searchText]);

  if (loading) return <Spin style={{ margin: "40px auto", display: "block" }} />;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 0", display: "flex", gap: 40 }}>
      {/* Sidebar */}
      <NewsSideBar />
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <Typography.Title level={4} style={{ marginBottom: 24, fontWeight: 500, color: '#0984c7' }}>
          Kết quả tìm kiếm:
        </Typography.Title>
        <Row gutter={[32, 32]} justify="start">
          {articles.map((article) => (
            <Col key={article.id} xs={24} sm={12} md={8}>
              <div
                style={{ cursor: "pointer", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee", padding: 16, height: 420 }}
                onClick={() => navigate(`/news/${article.slug}`)}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={article.thumbnail_url}
                    alt={article.title}
                    style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 6 }}
                    draggable={false}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      background: "#009fe3",
                      color: "#fff",
                      borderRadius: 4,
                      width: 40,
                      height: 40,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {String(new Date(article.created_at).getDate()).padStart(2, '0')}
                    <span style={{ fontSize: 12, fontWeight: 400 }}>
                      Th{String(new Date(article.created_at).getMonth() + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <Typography.Title level={5} style={{ margin: "16px 0 8px 0", fontWeight: 600, fontSize: 18, minHeight: 48 }}>
                  {article.title}
                </Typography.Title>
                <Typography.Text style={{ color: "#666", fontSize: 15, minHeight: 48, display: "block" }}>
                  {article.excerpt.length > 142
                    ? article.excerpt.slice(0, 139) + "..."
                    : article.excerpt}
                </Typography.Text>
              </div>
            </Col>
          ))}
        </Row>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32 }}>
          <Pagination
            current={page}
            pageSize={9}
            total={total}
            onChange={setPage}
            showSizeChanger={false}
            style={{ fontSize: 20 }}
          />
        </div>
      </div>
    </div>
  );
}
