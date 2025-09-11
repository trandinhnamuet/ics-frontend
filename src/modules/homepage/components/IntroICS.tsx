
import { Card, Button } from "antd";

export default function IntroICS() {
  return (
    <div style={{ background: '#ededed', width: '100%', padding: '40px 0' }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: 24 }}>
        <Card style={{ borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32 }}>
          {/* Left: Text */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <h2 style={{ color: "#f37021", fontSize: 22, fontWeight: 700, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              ĐÔI NÉT VỀ ICS
            </h2>
            <div style={{ color: "#222", fontSize: 15, marginBottom: 24, lineHeight: 1.7, whiteSpace: 'pre-line' }}>
              {`Là đơn vị hàng đầu trong lĩnh vực cung cấp các giải pháp an ninh mạng, nhà máy thông minh, tòa nhà thông minh và các giải pháp ESG, chúng tôi không ngừng đổi mới để mang đến những công nghệ tiên tiến nhất, đáp ứng yêu cầu ngày càng cao của thị trường và khách hàng trong thời đại chuyển đổi số.

Với thế mạnh về năng lực kỹ thuật, đội ngũ chuyên gia giàu kinh nghiệm và hệ sinh thái đối tác công nghệ toàn cầu, chúng tôi tự tin cung cấp các giải pháp toàn diện – từ bảo vệ hệ thống CNTT khỏi các mối đe dọa mạng tinh vi, đến xây dựng mô hình vận hành tự động hóa cho nhà máy, hay triển khai hệ thống quản lý tòa nhà thông minh tích hợp các yếu tố an toàn, tiết kiệm năng lượng và tiện nghi cho người dùng.

Không chỉ dừng lại ở hiệu quả công nghệ, chúng tôi đặc biệt chú trọng đến giá trị bền vững thông qua các giải pháp ESG (Môi trường – Xã hội – Quản trị). Các sản phẩm và dịch vụ của chúng tôi đều được thiết kế nhằm tối ưu hiệu quả năng lượng, giảm phát thải carbon, đồng thời thúc đẩy vận hành minh bạch, có trách nhiệm.

Chúng tôi cam kết là đối tác đồng hành đáng tin cậy, cùng doanh nghiệp hướng đến một tương lai thông minh, an toàn và phát triển bền vững.`}
            </div>
            <Button
              type="primary"
              size="middle"
              href="https://icss.com.vn/gioi-thieu-chung/"
              target="_blank"
              style={{ background: "#00b0f0", borderColor: "#00b0f0", fontSize: 15, borderRadius: 999, padding: '0 28px', height: 36 }}
            >
              Xem chi tiết
            </Button>
          </div>
          {/* Right: Video */}
          <div style={{ flex: 1, minWidth: 320, display: "flex", justifyContent: "center" }}>
            <div style={{ width: 600, maxWidth: "100%", aspectRatio: "16/9", background: "#000", borderRadius: 12, overflow: "hidden" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/p36bcLDgLeM"
                title="ICS Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: "block" }}
              ></iframe>
            </div>
          </div>
          </div>
        </Card>
      </div>
    </div>
  );
}