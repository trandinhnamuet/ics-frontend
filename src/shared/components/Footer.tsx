import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FaFacebook,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

export default function AppFooter() {
  return (
    <Footer style={{ backgroundColor: "#2d3238", color: "white", padding: 0 }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px" }}>
        <Row gutter={[32, 32]} justify="space-between">
          {/* Cột 1: Thông tin công ty */}
          <Col xs={24} md={10}>
            <Title
              level={4}
              style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
            >
              CÔNG TY CỔ PHẦN AN NINH MẠNG QUỐC TẾ - ICS
            </Title>
            <Text
              style={{
                display: "block",
                fontSize: 14,
                marginBottom: 8,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Trụ sở: Đường Vũ Văn Cẩn, Phường Bần Yên Nhân, Thị Xã Mỹ Hào, Hưng
              Yên
            </Text>
            <Text
              style={{
                display: "block",
                fontSize: 14,
                marginBottom: 8,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Văn phòng: TT3-5 Khu đô thị Đại Kim mới, Định Công, Hà Nội
            </Text>
            <Text
              style={{
                display: "block",
                fontSize: 14,
                marginBottom: 8,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Điện thoại: 0931.487.231 - Hotline: 0931.487.231
            </Text>
            <Text
              style={{
                display: "block",
                fontSize: 14,
                marginBottom: 24,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              E-mail: info@icss.com.vn - www.icss.com.vn
            </Text>

            <div>
              <Text
                strong
                style={{
                  color: "white",
                  display: "block",
                  marginBottom: 12,
                  fontSize: 16,
                }}
              >
                Kết nối tới ICS
              </Text>
              <Space size="middle">
                <Link
                  href="https://www.facebook.com/profile.php?id=61575247001986"
                  target="_blank"
                >
                  <div
                    style={{
                      background: "#2563eb",
                      padding: 8,
                      borderRadius: "50%",
                    }}
                  >
                    <FaFacebook color="white" size={16} />
                  </div>
                </Link>
                <Link href="https://www.tiktok.com/@ics_anm" target="_blank">
                  <div
                    style={{
                      background: "#1f2937",
                      padding: 8,
                      borderRadius: "50%",
                    }}
                  >
                    <FaTiktok color="white" size={16} />
                  </div>
                </Link>
                <Link href="mailto:info@icss.com.vn">
                  <div
                    style={{
                      background: "#16a34a",
                      padding: 8,
                      borderRadius: "50%",
                    }}
                  >
                    <FaEnvelope color="white" size={16} />
                  </div>
                </Link>
                <Link href="tel:0931487231">
                  <div
                    style={{
                      background: "#16a34a",
                      padding: 8,
                      borderRadius: "50%",
                    }}
                  >
                    <FaPhone color="white" size={16} />
                  </div>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCpOn4kxyTtzmUldsDZoxLHg"
                  target="_blank"
                >
                  <div
                    style={{
                      background: "#dc2626",
                      padding: 8,
                      borderRadius: "50%",
                    }}
                  >
                    <FaYoutube color="white" size={16} />
                  </div>
                </Link>
              </Space>
            </div>
          </Col>

          {/* Cột 2: Sản phẩm */}
          <Col xs={24} md={4}>
            <Title level={5} style={{ color: "white", fontSize: 16 }}>
              Sản phẩm
            </Title>
            <Space direction="vertical">
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Oracle
              </Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • VietGuard
              </Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Dashboard
              </Link>
            </Space>
          </Col>

          {/* Cột 3: Tư vấn */}
          <Col xs={24} md={5}>
            <Title level={5} style={{ color: "white", fontSize: 16 }}>
              Tư vấn
            </Title>
            <Space direction="vertical">
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Giải pháp tòa nhà thông minh
              </Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Giải pháp ESG
              </Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Giải pháp AI SOC
              </Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Giải pháp nhà máy thông minh
              </Link>
            </Space>
          </Col>

          {/* Cột 4: Giới thiệu */}
          <Col xs={24} md={5}>
            <Title level={5} style={{ color: "white", fontSize: 16 }}>
              Giới thiệu
            </Title>
            <Space direction="vertical">
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Giới thiệu về ICS
              </Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Tin tức
              </Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Liên hệ
              </Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.85)" }}>
                • Tuyển dụng
              </Link>
            </Space>
          </Col>
        </Row>
      </div>

      {/* Footer dưới */}
      <div
        style={{
          borderTop: "1px solid #4b5563",
          padding: "16px",
          textAlign: "center",
        }}
      >
        <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
          © ICS 2024. All rights reserved.
        </Text>
      </div>
    </Footer>
  );
}
