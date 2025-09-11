import { Typography } from "antd";
import SideIntro from "../components/SideIntro";

const { Title, Paragraph   } = Typography;

export default function AUSocialActivity() {
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
          HOẠT ĐỘNG XÃ HỘI
        </Title>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", gap: "40px" }}>
        {/* Left Sidebar */}
        <SideIntro />
        {/* Right Content */}
        <div style={{ flex: 1 }}>
          <Paragraph style={{ textAlign: "justify", marginBottom: "30px", fontSize: "16px" }}>
            Nội dung đang được cập nhật…
          </Paragraph>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px", alignItems: "end" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://icss.com.vn/wp-content/uploads/2018/09/img1.jpg"
                alt="img1"
                style={{ width: "100%", maxWidth: "300px", height: "180px", objectFit: "cover", borderRadius: "8px", marginBottom: "8px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://icss.com.vn/wp-content/uploads/2018/09/img2.jpg"
                alt="img2"
                style={{ width: "100%", maxWidth: "300px", height: "180px", objectFit: "cover", borderRadius: "8px", marginBottom: "8px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://icss.com.vn/wp-content/uploads/2018/09/img3.jpg"
                alt="img3"
                style={{ width: "100%", maxWidth: "300px", height: "180px", objectFit: "cover", borderRadius: "8px", marginBottom: "8px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
