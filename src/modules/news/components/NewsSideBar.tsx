import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../services/articles.services";

function NewsSideBar() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<{ title: string; slug: string }[]>([]);

  useEffect(() => {
    getArticles(1, 9).then((res) => {
      setArticles(res.data.map((a: any) => ({ title: a.title, slug: a.slug })));
    });
  }, []);

  return (
    <div style={{ width: 220, flexShrink: 0 }}>
      <Typography.Title level={5} style={{ marginBottom: 8, fontWeight: 700, fontSize: 15 }}>
        BÀI VIẾT MỚI
      </Typography.Title>
      <div style={{ borderBottom: "1px solid #eee", marginBottom: 12, width: 32 }} />
      <div>
        {articles.map((article, idx) => (
          <div key={idx}>
            <div
              style={{
                fontSize: 13,
                color: "#555",
                marginBottom: 8,
                cursor: "pointer",
                lineHeight: "18px",
                fontWeight: 350,
              }}
              title={article.title}
              onClick={() => navigate(`/news/${article.slug}`)}
            >
              {article.title}
            </div>
            {idx < articles.length - 1 && (
              <div style={{ borderBottom: "1px solid #eee", margin: "4px 0" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSideBar;
