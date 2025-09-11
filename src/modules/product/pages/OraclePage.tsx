import { Typography } from "antd";
import ProductSideBar from "../components/ProductSideBar";

const { Title, Paragraph } = Typography;

export default function OraclePage() {
	return (
		<div style={{ minHeight: "100vh" }}>
			{/* Header Section */}
			<div
				style={{
					backgroundImage:
						"url('https://icss.com.vn/wp-content/uploads/2018/09/bg-gioi-thieu.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					color: "#fff",
					textAlign: "center",
					padding: "60px 0",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<Title
					level={1}
					style={{
						color: "#fff",
						margin: 0,
						fontSize: "2.5rem",
						fontWeight: "bold",
						textShadow: "0 2px 8px #000",
					}}
				>
					ORACLE
				</Title>
			</div>

			{/* Main Content */}
			<div
				style={{
					display: "flex",
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "40px 20px",
					gap: "40px",
				}}
			>
				{/* Left Sidebar */}
				<ProductSideBar />
				{/* Right Content */}
				<div style={{ flex: 1 }}>
					<Title level={3} style={{ color: "#0984c7" }}>
						Oracle – Ứng dụng đám mây và dịch vụ nền tảng tích hợp
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Trong hành trình chuyển đổi số, việc sở hữu một nền tảng công nghệ mạnh mẽ, ổn định và có khả năng mở rộng là yếu tố sống còn. Oracle, với vị thế là giải pháp công nghệ hàng đầu thế giới, chính là xương sống cho hoạt động của hàng ngàn tập đoàn lớn, giúp họ vận hành hiệu quả, bảo mật dữ liệu và bứt phá trên thị trường.
						<br />
						Là đối tác chính thức của Oracle tại Việt Nam, ICS thấu hiểu sâu sắc cả về sức mạnh công nghệ lẫn những trăn trở của doanh nghiệp khi quyết định đầu tư. Chúng tôi biết rằng Oracle cung cấp một bộ giải pháp toàn diện để giải quyết các bài toán phức tạp nhất, từ quản trị cơ sở dữ liệu (Database), hạ tầng đám mây (OCI) cho đến các ứng dụng quản trị doanh nghiệp (ERP). Tuy nhiên, chúng tôi cũng hiểu rằng rào cản lớn nhất khiến nhiều doanh nghiệp chần chừ chính là chi phí bản quyền và sự phức tạp trong việc lựa chọn đúng cấu hình.
						<br />
						Đó là lý do ICS mang đến một giải pháp “Win-Win”. Chúng tôi là cây cầu nối giúp doanh nghiệp Việt Nam tiếp cận công nghệ đỉnh cao của Oracle với một chiến lược đầu tư thông minh và hiệu quả nhất.
						<br />
						Khi mua bản quyền Oracle qua ICS, bạn không chỉ mua một sản phẩm, bạn nhận được một giải pháp toàn diện:
					</Paragraph>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Mức Chiết Khấu Tốt Nhất Thị Trường:</b> Với vị thế là đối tác chiến lược, chúng tôi mang đến cho bạn một chính sách giá ưu đãi độc quyền. Chúng tôi cam kết giúp bạn tối ưu hóa ngân sách với mức chiết khấu cạnh tranh nhất.</li>
						<li><b>Tư Vấn Chuyên Sâu & Miễn Phí:</b> Đội ngũ chuyên gia của chúng tôi sẽ phân tích kỹ lưỡng nhu cầu của bạn để xây dựng một cấu hình tối ưu. Chúng tôi đảm bảo bạn chỉ trả tiền cho những gì bạn thực sự cần, tránh tuyệt đối tình trạng lãng phí hay đầu tư không hiệu quả.</li>
						<li><b>Hỗ Trợ Kỹ Thuật và Triển Khai Tận Tình:</b> Sự đồng hành của ICS kéo dài xuyên suốt quá trình từ triển khai, tích hợp hệ thống cho đến hỗ trợ kỹ thuật sau này, giúp doanh nghiệp của bạn yên tâm vận hành và khai thác tối đa giá trị của Oracle.</li>
					</ul>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Đừng để chi phí trở thành rào cản trên con đường chuyển đổi số của bạn. Hãy để khoản đầu tư vào Oracle trở thành một quyết định chiến lược và thông thái.
						<br />
						Liên hệ với ICS ngay hôm nay để nhận được báo giá miễn phí và chính sách ưu đãi độc quyền dành riêng cho doanh nghiệp của bạn!
					</Paragraph>
				</div>
			</div>
		</div>
	);
}
