import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Spin } from "antd";
import { getArticleBySlug } from "../services/articles.services";
import NewsSideBar from "../components/NewsSideBar";

export default function ArticlesDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Slug from URL:", slug);
    if (slug) {
      getArticleBySlug(slug).then((data) => {
        setArticle(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) return <Spin style={{ margin: "40px auto", display: "block" }} />;
  if (!article) return <Typography.Text>Không tìm thấy bài viết.</Typography.Text>;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 32, display: "flex", gap: 40 }}>
      {/* Sidebar */}
      <NewsSideBar />
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <Typography.Title level={2}>{article.title}</Typography.Title>
        <hr style={{
          border: 'none',
          borderTop: '3px solid #e0dedeff',
          margin: '12px 0 10px 0',
          width: '120px',
          borderRadius: '2px',
        }} />
        <Typography.Text 
          style={{ 
            color: "#666", 
            fontSize: "14px", 
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: 16,
            display: "block"
          }}
        >
          POSTED ON {new Date(article.created_at).getDate()} THÁNG {String(new Date(article.created_at).getMonth() + 1)}, {new Date(article.created_at).getFullYear()}
        </Typography.Text>

        <div 
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            wordWrap: "break-word",
            lineHeight: 1.6,
          }}
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
        <style>{`
          .article-content img {
            max-width: 100% !important;
            height: auto !important;
          }
          .article-content table {
            max-width: 100% !important;
            overflow-x: auto !important;
            display: block !important;
          }
          .article-content pre {
            max-width: 100% !important;
            overflow-x: auto !important;
            white-space: pre-wrap !important;
          }
          .article-content iframe,
          .article-content video {
            max-width: 100% !important;
            height: auto !important;
          }
          .article-content p {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
        `}</style>
      </div>
    </div>
  );
}
