import { Row, Col, Card, Typography, Image, Space } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text, Link } = Typography;

const products = [
  {
    name: "VietGuard",
    img: "https://icss.com.vn/wp-content/uploads/2025/08/Screenshot-2025-08-07-174127-300x167.png",
    link: "/vietguard",
  },
  {
    name: "Oracle",
    img: "https://icss.com.vn/wp-content/uploads/2025/06/oracle_2_ac4dac9f3d.jpg",
    link: "/oracle",
  },
  {
    name: "Dashboard",
    img: "https://icss.com.vn/wp-content/uploads/2025/06/Thiet-ke-chua-co-ten-39.jpg",
    link: "/smart-dashboard",
  },
  {
    name: "EMS",
    img: "https://icss.com.vn/wp-content/uploads/2025/08/Thiet-ke-chua-co-ten.png",
    link: "/news/he-thong-quan-ly-nang-luong-ems-chia-khoa-toi-uu-chi-phi-van-hanh-cho-doanh-nghiep-thoi-dai-4-0",
  },
];

const solutions = [
  {
    name: "Giải pháp tòa nhà thông minh",
    img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-2-2.jpg",
    link: "/giai-phap-toa-nha-thong-minh",
  },
  {
    name: "Giải pháp AI SOC",
    img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-4-3.jpg",
    link: "/ai-soc",
  },
  {
    name: "Giải pháp ESG",
    img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-5-1.jpg",
    link: "/giai-phap-esg",
  },
  {
    name: "Giải pháp nhà máy thông minh",
    img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-3-2.jpg",
    link: "/giai-phap-nha-may-thong-minh",
  },
];

export default function ProductSolutionGrid() {
  const navigate = useNavigate();
  return (
    <Row gutter={[32, 32]} style={{ maxWidth: 1400, margin: "32px auto", padding: "0 16px" }}>
      {/* Sản phẩm */}
      <Col xs={24} md={12}>
        <Space
          align="center"
          style={{ width: "100%", justifyContent: "space-between", marginBottom: 8 }}
        >
          <Title
            level={4}
            style={{ color: "#f37021", fontWeight: "bold", letterSpacing: 0.5, margin: 0 }}
          >
            SẢN PHẨM
          </Title>
          <Link
            href="#"
            style={{ color: "#2176ae", fontSize: 15 }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#f37021")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2176ae")}
          >
            Xem tất cả &gt;
          </Link>
        </Space>
        <Row gutter={[24, 24]}>
          {products.map((item, idx) => (
            <Col key={item.name} span={12}>
              <Card
                hoverable
                cover={
                  <Image
                    src={item.img}
                    alt={item.name}
                    preview={false}
                    style={{
                      height: 180,
                      objectFit: "cover",
                      borderRadius: 8,
                      marginBottom: idx < 2 ? 32 : 8,
                    }}
                  />
                }
                bodyStyle={{ textAlign: "center", padding: "8px 0" }}
                onClick={() => navigate(item.link)}
              >
                <Text strong style={{ fontSize: 16, color: "#222" }}>
                  {item.name}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>

      {/* Giải pháp */}
      <Col xs={24} md={12}>
        <Space
          align="center"
          style={{ width: "100%", justifyContent: "space-between", marginBottom: 8 }}
        >
          <Title
            level={4}
            style={{ color: "#f37021", fontWeight: "bold", letterSpacing: 0.5, margin: 0 }}
          >
            GIẢI PHÁP
          </Title>
          <Link
            href="#"
            style={{ color: "#2176ae", fontSize: 15 }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#f37021")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2176ae")}
          >
            Xem tất cả &gt;
          </Link>
        </Space>
        <Row gutter={[24, 24]}>
          {solutions.map((item, idx) => (
            <Col key={item.name} span={12}>
              <Card
                hoverable
                cover={
                  <Image
                    src={item.img}
                    alt={item.name}
                    preview={false}
                    style={{
                      height: 180,
                      objectFit: "cover",
                      borderRadius: 8,
                      marginBottom: idx < 2 ? 32 : 8,
                    }}
                  />
                }
                bodyStyle={{ textAlign: "center", padding: "8px 0" }}
                onClick={() => navigate(item.link)}
              >
                <Text strong style={{ fontSize: 16, color: "#222" }}>
                  {item.name}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
