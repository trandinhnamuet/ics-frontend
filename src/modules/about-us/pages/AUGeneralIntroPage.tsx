import { Typography } from "antd";
import SideIntro from "../components/SideIntro";

const { Title, Paragraph, Text } = Typography;

export default function AUGeneralIntroPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)",
          backgroundImage: "url('https://icss.com.vn/wp-content/uploads/2018/09/bg-gioi-thieu.jpg')",
          color: "#fff",
          textAlign: "center",
          padding: "60px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="3" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="2" fill="rgba(255,255,255,0.1)"/></svg>')`,
            backgroundSize: "100px 100px",
          }}
        />
        <Title level={1} style={{ color: "#fff", margin: 0, fontSize: "2.5rem", fontWeight: "bold" }}>
          GIỚI THIỆU CHUNG
        </Title>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", gap: "40px" }}>
  {/* Left Sidebar */}
  <SideIntro />

        {/* Right Content */}
        <div style={{ flex: 1 }}>
          <div style={{ lineHeight: "1.8", fontSize: "15px", color: "#333" }}>
            <Paragraph style={{ textAlign: "justify", marginBottom: "20px" }}>
              <Text strong>CÔNG TY CỔ PHẦN AN NINH MẠNG QUỐC TẾ – ICS</Text> là đơn vị tiên phong trong lĩnh vực an ninh mạng tại Việt Nam và khu vực, chuyên cung cấp các giải pháp bảo mật toàn diện cho thời đại công nghệ số. Với sứ mệnh bảo vệ hệ sinh thái số một cách an toàn, hiệu quả và bền vững, ICS không ngừng nghiên cứu, phát triển và ứng dụng các công nghệ hiện đại nhằm giúp doanh nghiệp, tổ chức và chính phủ đối phó với các mối đe dọa an ninh ngày càng tinh vi.
            </Paragraph>

            <Paragraph style={{ textAlign: "justify", marginBottom: "20px" }}>
              ICS tập trung vào các giải pháp bảo mật cho nhiều lĩnh vực trọng yếu, bao gồm: bảo vệ ứng dụng (app protection), an ninh cho nhà máy thông minh (smart factory security), tòa nhà thông minh (smart building) và đặc biệt là hệ thống điều hành trung tâm AI SOC (Artificial Intelligence Security Operations Center) – một bước đột phá trong việc giám sát và phản ứng nhanh trước các cuộc tấn công mạng. Với AI SOC, ICS giúp khách hàng phát hiện sớm các rủi ro, chủ động phòng ngừa, đồng thời giảm thiểu tổn thất trong thời gian thực.
            </Paragraph>

            <Paragraph style={{ textAlign: "justify", marginBottom: "20px" }}>
              Bằng việc ứng dụng công nghệ trí tuệ nhân tạo (AI), học máy (machine learning) và các chuẩn bảo mật tiên tiến quốc tế, ICS mang đến những giải pháp bảo mật mang tính cá nhân hóa, đáp ứng nhu cầu đặc thù của từng tổ chức. Từ việc bảo vệ dữ liệu nội bộ, hệ thống vận hành đến các thiết bị IoT trong tòa nhà hay nhà máy, ICS luôn đảm bảo tính toàn vẹn, sẵn sàng và bảo mật thông tin ở mức cao nhất.
            </Paragraph>

            <Paragraph style={{ textAlign: "justify", marginBottom: "20px" }}>
              Với đội ngũ chuyên gia có nhiều năm kinh nghiệm trong lĩnh vực an ninh mạng, từng triển khai thành công hàng trăm dự án lớn trong và ngoài nước, ICS cam kết đồng hành cùng khách hàng trên hành trình chuyển đổi số an toàn và bền vững. Không chỉ là nhà cung cấp giải pháp, ICS còn là đối tác chiến lược, góp phần nâng cao nhận thức và năng lực phòng thủ không gian mạng cho cộng đồng và doanh nghiệp.
            </Paragraph>

            <Paragraph style={{ textAlign: "justify", marginBottom: "30px" }}>
              Trong thời đại mà không gian số là yếu tố sống còn của mọi hoạt động kinh tế – xã hội, ICS khẳng định vị thế là lá chắn tin cậy, bảo vệ giá trị số của tổ chức và doanh nghiệp trước mọi hiểm họa mạng.
            </Paragraph>

            {/* Product/Service Images Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginTop: "30px" }}>
              {/* VietGuard */}
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-4-2.jpg"
                  alt="VietGuard"
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }}
                />
                <Text style={{ fontSize: "13px", color: "#666", textAlign: "justify", display: "block" }}>
                  VietGuard là một giải pháp bảo mật tiên tiến, được thiết kế để ngăn chặn các mối đe dọa mạng bằng cách áp dụng nguyên tắc "Zero Trust" ngay tại điểm cuối, giúp bảo vệ hệ thống mà không cần nhận diện phần mềm độc hại.
                </Text>
              </div>

              {/* ESG */}
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-5-1.jpg"
                  alt="ESG"
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }}
                />
                <Text style={{ fontSize: "13px", color: "#666", textAlign: "justify", display: "block" }}>
                  ESG (Environmental, Social, and Governance) giúp các doanh nghiệp phát triển bền vững bằng cách tối ưu hóa tác động môi trường, đảm bảo trách nhiệm xã hội và xây dựng hệ thống quản trị minh bạch. Đây là yếu tố quan trọng giúp nâng cao uy tín và thu hút đầu tư trong kỷ nguyên chuyển đổi số.
                </Text>
              </div>

              {/* IoT */}
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-28.jpg"
                  alt="IoT"
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }}
                />
                <Text style={{ fontSize: "13px", color: "#666", textAlign: "justify", display: "block" }}>
                  IoT (Internet of Things) là một mạng lưới các thiết bị và đối tượng vật lý được tích hợp cảm biến, phần mềm và công nghệ kết nối, cho phép chúng thu thập, trao đổi dữ liệu và tương tác với nhau thông qua internet mà không cần sự can thiệp trực tiếp của con người.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
