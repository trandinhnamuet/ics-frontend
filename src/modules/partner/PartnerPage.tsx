import { Typography } from "antd";
import SideIntro from "../about-us/components/SideIntro";

const { Title, Paragraph } = Typography;

export default function PartnerPage() {
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
          ĐỐI TÁC CỦA CHÚNG TÔI
        </Title>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", gap: "40px" }}>
        {/* Left Sidebar */}
        <SideIntro />
        {/* Right Content */}
        <div style={{ flex: 1 }}>
          <Title level={2} style={{ fontWeight: 500, marginBottom: 24 }}>VỀ ĐỐI TÁC CỦA CHÚNG TÔI</Title>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px", marginBottom: 32 }}>
            {/* HyperG */}
            <div style={{ textAlign: "center" }}>
              <Paragraph style={{ fontSize: "15px", marginBottom: 12 }}>
                HyperG Security cung cấp giải pháp an ninh mạng ứng dụng AI và Cloud. Bảo vệ doanh nghiệp trước mọi rủi ro số.
              </Paragraph>
              <img
                src="https://icss.com.vn/wp-content/uploads/2025/06/z6603220865281_a8751c9cd03f48ec5ef9b82d700917d8.jpg"
                alt="HyperG"
                style={{ width: "100%", maxWidth: "220px", height: "auto", objectFit: "contain", margin: "0 auto" }}
              />
            </div>
            {/* Oracle */}
            <div style={{ textAlign: "center" }}>
              <Paragraph style={{ fontSize: "15px", marginBottom: 12 }}>
                Oracle là tập đoàn công nghệ hàng đầu, cung cấp hệ quản trị cơ sở dữ liệu, phần mềm doanh nghiệp, đồng thời phát triển điện toán đám mây, AI và an ninh mạng.
              </Paragraph>
              <img
                src="https://icss.com.vn/wp-content/uploads/2025/08/Webo.OracleProfile-696x696-1.png"
                alt="Oracle"
                style={{ width: "100%", maxWidth: "220px", height: "auto", objectFit: "contain", margin: "0 auto" }}
              />
            </div>
            {/* Gamania */}
            <div style={{ textAlign: "center" }}>
              <Paragraph style={{ fontSize: "15px", marginBottom: 12 }}>
                Gamania là công ty giải trí số hàng đầu, chuyên phát triển và phát hành game trực tuyến, đồng thời mở rộng sang thanh toán điện tử, cloud và an ninh mạng.
              </Paragraph>
              <img
                src="https://icss.com.vn/wp-content/uploads/2025/06/z6603219309871_c0cf6fdc0c2ede77ee4a3920f5b54e4f.jpg"
                alt="Gamania"
                style={{ width: "100%", maxWidth: "220px", height: "auto", objectFit: "contain", margin: "0 auto" }}
              />
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <span style={{ fontWeight: 500, fontSize: 28, padding: "6px 18px", borderRadius: 4, letterSpacing: 1 }}>
              ĐĂNG KÝ ĐỂ TRỞ THÀNH ĐỐI TÁC CỦA CHÚNG TÔI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
