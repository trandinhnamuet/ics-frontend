import { Typography } from "antd";

export default function AboutUsPage() {
  return (
    <div style={{ background: "#fff" }}>
      <div
        style={{
          background: `url('https://icss.com.vn/wp-content/uploads/2018/09/bg-gioi-thieu.jpg') center/cover no-repeat`,
          minHeight: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography.Title
          level={2}
          style={{ color: "#fff", textAlign: "center", fontWeight: 700, margin: 0 }}
        >
          ĐÔI NÉT VỀ CHÚNG TÔI
        </Typography.Title>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 0 0 0" }}>
        <Typography.Paragraph style={{ color: "#009fe3", fontWeight: 600, fontSize: 18 }}>
          CÔNG TY CỔ PHẦN AN NINH MẠNG QUỐC TẾ – ICS
          <span style={{ color: "#222", fontWeight: 400, fontSize: 16 }}>
            &nbsp;là đơn vị tiên phong trong lĩnh vực an ninh mạng tại Việt Nam và khu vực, chuyên cung cấp các giải pháp bảo mật toàn diện cho thời đại công nghệ số. Với sứ mệnh bảo vệ hệ sinh thái số một cách an toàn, hiệu quả và bền vững, ICS không ngừng nghiên cứu, phát triển và ứng dụng các công nghệ hiện đại nhằm giúp doanh nghiệp, tổ chức và chính phủ đối phó với các mối đe dọa an ninh ngày càng tinh vi.
          </span>
        </Typography.Paragraph>
        <Typography.Paragraph style={{ color: "#222", fontSize: 16, marginTop: 16 }}>
          ICS tập trung vào các giải pháp bảo mật cho nhiều lĩnh vực trọng yếu, bao gồm: bảo vệ ứng dụng (app protection), an ninh cho nhà máy thông minh (smart factory security), tòa nhà thông minh (smart building) và đặc biệt là hệ thống điều hành trung tâm AI SOC (Artificial Intelligence Security Operations Center) – một bước đột phá trong việc giám sát và phản ứng nhanh trước các cuộc tấn công mạng. Với AI SOC, ICS giúp khách hàng phát hiện sớm các rủi ro, chủ động phòng ngừa, đồng thời giảm thiểu tổn thất trong thời gian thực.
        </Typography.Paragraph>
      </div>
      <div style={{ width: "100%", height: 60, background: "#19c2e6", marginTop: 40 }} />
    </div>
  );
}
