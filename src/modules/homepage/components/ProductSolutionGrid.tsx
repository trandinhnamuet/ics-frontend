import { Row, Col, Card, Typography, Image, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Text, Link, Paragraph } = Typography;

const products = [
  {
    name: "VietGuard",
    description: "Hệ thống bảo mật toàn diện với công nghệ AI tiên tiến, bảo vệ dữ liệu và hạ tầng số của doanh nghiệp.",
    img: "https://icss.com.vn/wp-content/uploads/2025/08/Screenshot-2025-08-07-174127-300x167.png",
    link: "/vietguard",
  },
  {
    name: "Oracle",
    description: "Giải pháp cơ sở dữ liệu Oracle với hiệu suất cao, đáng tin cậy cho các ứng dụng doanh nghiệp.",
    img: "https://icss.com.vn/wp-content/uploads/2025/06/oracle_2_ac4dac9f3d.jpg",
    link: "/oracle",
  },
  {
    name: "Dashboard",
    description: "Bảng điều khiển thông minh giúp theo dõi và quản lý hiệu quả các hoạt động kinh doanh.",
    img: "https://icss.com.vn/wp-content/uploads/2025/06/Thiet-ke-chua-co-ten-39.jpg",
    link: "/smart-dashboard",
  },
  {
    name: "EMS",
    description: "Hệ thống quản lý năng lượng thông minh, tối ưu hóa chi phí vận hành cho doanh nghiệp thời đại 4.0.",
    img: "https://icss.com.vn/wp-content/uploads/2025/08/Thiet-ke-chua-co-ten.png",
    link: "/news/he-thong-quan-ly-nang-luong-ems-chia-khoa-toi-uu-chi-phi-van-hanh-cho-doanh-nghiep-thoi-dai-4-0",
  },
];

const solutions = [
  {
    name: "Giải pháp tòa nhà thông minh",
    description: "Tự động hóa và tối ưu hóa vận hành tòa nhà với công nghệ IoT và AI tiên tiến.",
    img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-2-2.jpg",
    link: "/giai-phap-toa-nha-thong-minh",
  },
  {
    name: "Giải pháp AI SOC",
    description: "Trung tâm vận hành bảo mật với AI, phát hiện và ứng phó tự động các mối đe dọa.",
    img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-4-3.jpg",
    link: "/ai-soc",
  },
  {
    name: "Giải pháp ESG",
    description: "Quản lý và báo cáo ESG toàn diện, hỗ trợ doanh nghiệp phát triển bền vững.",
    img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-5-1.jpg",
    link: "/giai-phap-esg",
  },
  {
    name: "Giải pháp nhà máy thông minh",
    description: "Số hóa và tự động hóa quy trình sản xuất, nâng cao hiệu quả và chất lượng sản phẩm.",
    img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-3-2.jpg",
    link: "/giai-phap-nha-may-thong-minh",
  },
];

export default function ProductSolutionGrid() {
  const navigate = useNavigate();

  const renderCard = (item: any) => (
    <Card
      hoverable
      style={{
        height: "100%",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
      bodyStyle={{ 
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
      cover={
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src={item.img}
            alt={item.name}
            preview={false}
            style={{
              height: 200,
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      }
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Title level={5} style={{ margin: "0 0 8px 0", color: "#222", lineHeight: 1.4 }}>
          {item.name}
        </Title>
        <Paragraph 
          style={{ 
            color: "#666", 
            fontSize: 14, 
            lineHeight: 1.5, 
            margin: "0 0 16px 0",
            flex: 1
          }}
        >
          {item.description}
        </Paragraph>
        <Button
          type="primary"
          style={{
            backgroundColor: "#f37021",
            borderColor: "#f37021",
            borderRadius: 6,
            fontWeight: 500,
            alignSelf: "flex-start"
          }}
          icon={<ArrowRightOutlined />}
          onClick={() => navigate(item.link)}
        >
          Tìm hiểu thêm
        </Button>
      </div>
    </Card>
  );

  return (
    <div style={{ maxWidth: 1400, margin: "48px auto", padding: "0 16px" }}>
      {/* Sản phẩm Section */}
      <div style={{ marginBottom: 64 }}>
        <Space
          align="center"
          style={{ width: "100%", justifyContent: "space-between", marginBottom: 24 }}
        >
          <Title
            level={3}
            style={{ color: "#f37021", fontWeight: "bold", letterSpacing: 0.5, margin: 0 }}
          >
            SẢN PHẨM
          </Title>
          <Link
            href="#"
            style={{ color: "#2176ae", fontSize: 16, fontWeight: 500 }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#f37021")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2176ae")}
          >
            Xem tất cả →
          </Link>
        </Space>
        <Row gutter={[24, 24]}>
          {products.map((item) => (
            <Col key={item.name} xs={24} sm={12} md={6}>
              {renderCard(item)}
            </Col>
          ))}
        </Row>
      </div>

      {/* Giải pháp Section */}
      <div>
        <Space
          align="center"
          style={{ width: "100%", justifyContent: "space-between", marginBottom: 24 }}
        >
          <Title
            level={3}
            style={{ color: "#f37021", fontWeight: "bold", letterSpacing: 0.5, margin: 0 }}
          >
            GIẢI PHÁP
          </Title>
          <Link
            href="#"
            style={{ color: "#2176ae", fontSize: 16, fontWeight: 500 }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#f37021")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2176ae")}
          >
            Xem tất cả →
          </Link>
        </Space>
        <Row gutter={[24, 24]}>
          {solutions.map((item) => (
            <Col key={item.name} xs={24} sm={12} md={6}>
              {renderCard(item)}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
