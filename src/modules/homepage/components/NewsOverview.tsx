import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Typography, Button, Carousel } from "antd";
import { getArticles } from "../../news/services/articles.services";

export default function NewsOverview() {
  const [articles, setArticles] = useState<any[]>([]);
  const carouselRef = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles(1, 9).then((res) => {
      setArticles(res.data);
    });
  }, []);

  // Tạo mảng các nhóm 3 bài
  const groups = [];
  for (let i = 0; i < articles.length; i += 3) {
    groups.push(articles.slice(i, i + 3));
  }

  const handlePrev = () => {
    if (carouselRef.current) carouselRef.current.prev();
  };

  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.next();
  };

  return (
    <div style={{ width: "100%", background: "#fff", padding: "32px 0" }}>
      <div style={{ maxWidth: 1500, margin: "0 auto", padding: "0 48px" }}>
        <Typography.Title
          level={2}
          style={{
            color: "#ff6600",
            fontWeight: 600,
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: 0,
          }}
        >
          <span style={{ color: "#009fe3" }}>ICS </span>TIN TỨC
        </Typography.Title>
        <Typography.Text
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: 32,
            marginTop: 8,
            color: "#666",
            fontSize: 16,
          }}
        >
          Đừng bỏ lỡ bất kỳ chuyển động nào trên thế giới công nghệ – cập nhật tin tức mới nhất cùng ICS và dẫn đầu mọi xu hướng
        </Typography.Text>
        <div style={{ position: "relative" }}>
          <Carousel
            ref={carouselRef}
            dots={false}
            effect="scrollx"
            autoplay
            autoplaySpeed={5000}
          >
            {groups.map((group, idx) => (
              <div key={idx}>
                <Row justify="center" gutter={48}>
                  {group.map((news: any, i: number) => (
                    <Col key={news.id || i} xs={24} sm={12} md={8} style={{ marginBottom: 24 }}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ position: "relative", display: "inline-block", cursor: "pointer" }}
                          onClick={() => navigate(`/news/${news.slug}`)}
                        >
                          <img
                            src={news.thumbnail_url}
                            alt={news.title}
                            style={{
                              width: 350,
                              height: 200,
                              objectFit: "cover",
                              borderRadius: 4,
                            }}
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
                            {String(new Date(news.created_at).getDate()).padStart(2, '0')}
                            <span style={{ fontSize: 12, fontWeight: 400 }}>
                              Th{String(new Date(news.created_at).getMonth() + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                        <Typography.Title
                          level={4}
                          style={{
                            margin: "16px 0 8px 0",
                            fontWeight: 500,
                            fontSize: 20,
                            minHeight: 48,
                            cursor: "pointer",
                          }}
                          onClick={() => navigate(`/${news.slug}`)}
                        >
                          {news.title}
                        </Typography.Title>
                        <Typography.Text style={{ color: "#666", fontSize: 15 }}>{news.excerpt}</Typography.Text>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Carousel>
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <Button
              type="default"
              style={{
                color: "#009fe3",
                borderColor: "#009fe3",
                borderRadius: 20,
                padding: "0 32px",
                fontWeight: 500,
                marginRight: 16,
              }}
              onClick={handlePrev}
            >
              &lt;
            </Button>
            <Button
              type="default"
              style={{
                color: "#009fe3",
                borderColor: "#009fe3",
                borderRadius: 20,
                padding: "0 32px",
                fontWeight: 500,
              }}
              onClick={handleNext}
            >
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}