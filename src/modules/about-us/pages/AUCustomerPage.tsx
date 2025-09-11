import { Typography } from "antd";
import SideIntro from "../components/SideIntro";

const { Title, Paragraph, Text } = Typography;

export default function AUCustomerPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <div
        style={{
          backgroundImage: "url('https://icss.com.vn/wp-content/uploads/2018/09/bg-gioi-thieu.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          padding: "60px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Title level={1} style={{ color: "#fff", margin: 0, fontSize: "2.5rem", fontWeight: "bold", textShadow: "0 2px 8px #000" }}>
          KHÁCH HÀNG
        </Title>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", gap: "40px" }}>
        {/* Left Sidebar */}
        <SideIntro />
        {/* Right Content */}
        <div style={{ flex: 1 }}>
          <Paragraph style={{ textAlign: "justify", marginBottom: "30px", fontSize: "16px" }}>
            Khách hàng của chúng tôi trải rộng từ <Text strong>ngân hàng, chính phủ, các doanh nghiệp vừa và nhỏ đến các tập đoàn lớn</Text>, hoạt động trong nhiều ngành nghề khác nhau. Họ đang chuyển đổi số, coi an ninh mạng là nền tảng để phát triển bền vững và giữ vững lợi thế cạnh tranh trên thị trường.
          </Paragraph>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px", alignItems: "end" }}>
            {/* Ngành tài chính */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://icss.com.vn/wp-content/uploads/2025/08/cong-nghe-tai-chinh-la-nganh-gi-hinh-anh1-300x180.jpg"
                alt="Ngành tài chính"
                style={{ width: "100%", maxWidth: "300px", height: "180px", objectFit: "cover", borderRadius: "8px", marginBottom: "8px" }}
              />
              <Text style={{ fontWeight: 500, fontSize: "15px", color: "#222", display: "block" }}>NGÀNH TÀI CHÍNH</Text>
            </div>
            {/* Chính phủ */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://icss.com.vn/wp-content/uploads/2025/08/pngtree-government-building-with-columns-icon-png-image_1806612-e1754988700564-300x180.jpg"
                alt="Chính phủ"
                style={{ width: "100%", maxWidth: "300px", height: "180px", objectFit: "cover", borderRadius: "8px", marginBottom: "8px" }}
              />
              <Text style={{ fontWeight: 500, fontSize: "15px", color: "#222", display: "block" }}>CHÍNH PHỦ</Text>
            </div>
            {/* Ngành viễn thông */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://icss.com.vn/wp-content/uploads/2025/08/cong-nghe-vien-thong-e1754988927184-300x190.jpg"
                alt="Ngành viễn thông"
                style={{ width: "100%", maxWidth: "300px", height: "190px", objectFit: "cover", borderRadius: "8px", marginBottom: "8px" }}
              />
              <Text style={{ fontWeight: 500, fontSize: "15px", color: "#fff", background: "#1e40af", padding: "2px 12px", borderRadius: "4px", display: "inline-block" }}>NGÀNH VIỄN THÔNG</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
