import { Typography } from "antd";
import ProductSideBar from "../components/ProductSideBar";

const { Title, Paragraph } = Typography;

export default function VietGuardPage() {
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
					VIETGUARD
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
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Trong kỷ nguyên số, ứng dụng di động không còn chỉ là một kênh tương tác mà đã trở thành xương sống của nhiều doanh nghiệp. Từ tài chính, bán lẻ đến y tế, chúng ta đang đặt niềm tin và dữ liệu vào những ứng dụng này. Nhưng bạn có biết, theo một báo cáo gần đây của Statista, các cuộc tấn công mạng nhắm vào ứng dụng di động đã tăng hơn 150% chỉ trong hai năm qua?
						<br />
						Một ứng dụng với giao diện bóng bẩy và tính năng vượt trội có thể chiếm được cảm tình của người dùng, nhưng chỉ một sự cố bảo mật duy nhất cũng đủ để phá hủy tất cả. Việc mất dữ liệu khách hàng, thất thoát doanh thu do gian lận, hay tổn hại uy tín thương hiệu là những kịch bản không một doanh nghiệp nào mong muốn. Vấn đề không còn là “liệu” ứng dụng của bạn có bị tấn công hay không, mà là “khi nào” và bạn đã “chuẩn bị” đến đâu.
						<br />
						Trước thực tế đó, VietGuard – một nền tảng bảo mật được thiết kế để trở thành tấm khiên vững chắc, bảo vệ ứng dụng của bạn từ bên trong trước những mối đe dọa tinh vi nhất.
					</Paragraph>
					<div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
						<img src="https://icss.com.vn/wp-content/uploads/2025/07/ChatGPT-Image-15_31_22-31-thg-7-2025.png" alt="VietGuard" style={{ maxWidth: "48%", width: "100%", borderRadius: "8px" }} />
						<img src="https://icss.com.vn/wp-content/uploads/2025/06/Thiet-ke-chua-co-ten-36.jpg" alt="VietGuard" style={{ maxWidth: "48%", width: "100%", borderRadius: "8px" }} />
					</div>
					<Title level={4} style={{ color: "#0984c7" }}>
						Các Tính Năng Cốt Lõi Làm Nên Sức Mạnh Của VietGuard
					</Title>
					<ol style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Code Obfuscation (Làm rối mã nguồn)</b><br />Đây là tuyến phòng thủ đầu tiên chống lại hành vi chống dịch ngược mã. VietGuard biến mã nguồn của bạn thành một mê cung phức tạp, khiến cho tin tặc dù có được mã cũng không thể hiểu được logic hoạt động, thuật toán hay các bí mật kinh doanh bên trong.<br /><img src="https://icss.com.vn/wp-content/uploads/2025/06/Chua-co-ten-1200-x-600-px.jpg" alt="Code Obfuscation" style={{ maxWidth: "100%", borderRadius: "8px", margin: "16px 0" }} /></li>
						<li><b>Anti-Tampering (Chống can thiệp)</b><br />VietGuard tạo ra một “dấu niêm phong số” cho ứng dụng của bạn. Bất kỳ nỗ lực nào nhằm sửa đổi, vá lỗi, hay đóng gói lại tệp APK/IPA sẽ bị phát hiện ngay lập tức. Khi phát hiện sự can thiệp, ứng dụng sẽ không thể khởi chạy, ngăn chặn hoàn toàn các phiên bản ứng dụng giả mạo.<br /><img src="https://icss.com.vn/wp-content/uploads/2025/06/Chua-co-ten-1200-x-600-px-1.jpg" alt="Anti-Tampering" style={{ maxWidth: "100%", borderRadius: "8px", margin: "16px 0" }} /></li>
						<li><b>Runtime Application Self-Protection (RASP)</b><br />Đây là “hệ miễn dịch tự thân” của ứng dụng. RASP cho phép ứng dụng tự bảo vệ mình trong thời gian thực khi đang chạy trên thiết bị của người dùng. VietGuard liên tục giám sát môi trường hoạt động và có thể tự động vô hiệu hóa các mối đe dọa như:<br />Phát hiện và ngăn chặn các trình gỡ lỗi (debuggers) và công cụ phân tích động.<br />Phát hiện môi trường không an toàn như trình giả lập (emulators).<br />Nhận diện các thiết bị đã bị root (Android) hoặc jailbreak (iOS).<br /><img src="https://icss.com.vn/wp-content/uploads/2025/06/Chua-co-ten-1200-x-600-px-2.jpg" alt="RASP" style={{ maxWidth: "100%", borderRadius: "8px", margin: "16px 0" }} /></li>
						<li><b>Data Encryption (Mã hóa dữ liệu người dùng)</b><br />Mọi dữ liệu nhạy cảm mà ứng dụng lưu trữ trên thiết bị (ví dụ: file preferences, cơ sở dữ liệu SQLite, thông tin người dùng) đều được VietGuard mã hóa bằng các thuật toán mạnh mẽ. Điều này đảm bảo rằng ngay cả khi kẻ tấn công có quyền truy cập vật lý vào thiết bị, chúng cũng không thể đọc được các dữ liệu quan trọng này.<br /><img src="https://icss.com.vn/wp-content/uploads/2025/06/Chua-co-ten-1200-x-600-px-3.jpg" alt="Data Encryption" style={{ maxWidth: "100%", borderRadius: "8px", margin: "16px 0" }} /></li>
					</ol>
					<Title level={4} style={{ color: "#0984c7" }}>
						Lợi Ích Vượt Trội Mà VietGuard Mang Lại
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Việc tích hợp VietGuard không chỉ là một khoản đầu tư vào công nghệ, mà còn là một khoản đầu tư vào sự bền vững của doanh nghiệp.
					</Paragraph>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Đối với Doanh nghiệp và các Giám đốc (CTO/CPO):</b>
							<ul>
								<li>Bảo vệ Tài sản Trí tuệ: Ngăn chặn hành vi đánh cắp thuật toán và logic kinh doanh cốt lõi.</li>
								<li>Ngăn chặn Thất thoát Doanh thu: Chặn đứng các ứng dụng “mod” gian lận, đảm bảo mô hình kinh doanh của bạn được thực thi đúng cách.</li>
								<li>Tăng cường Uy tín Thương hiệu: Xây dựng niềm tin với khách hàng rằng dữ liệu của họ luôn được an toàn.</li>
								<li>Đáp ứng Tiêu chuẩn Tuân thủ: Giúp doanh nghiệp đáp ứng các tiêu chuẩn bảo mật khắt khe như GDPR, PCI-DSS.</li>
							</ul>
						</li>
						<li><b>Đối với Nhà phát triển:</b>
							<ul>
								<li>Tích hợp Nhanh chóng: Không cần kinh nghiệm sâu về bảo mật hay thay đổi code gốc.</li>
								<li>Giảm Gánh nặng: Cho phép đội ngũ phát triển tập trung vào việc xây dựng tính năng mới thay vì phải lo lắng về các lỗ hổng bảo mật phức tạp.</li>
								<li>Bảo vệ Liên tục: Cung cấp một lớp bảo vệ nhất quán qua các phiên bản cập nhật của ứng dụng.</li>
							</ul>
						</li>
					</ul>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Thế giới di động đầy rẫy những rủi ro, nhưng điều đó không có nghĩa là bạn phải chấp nhận chúng. Bằng cách trang bị một giải pháp bảo mật đa tầng, chuyên sâu như VietGuard, bạn không chỉ bảo vệ ứng dụng của mình mà còn bảo vệ toàn bộ doanh nghiệp. Đừng chờ đợi cho đến khi một sự cố xảy ra mới hành động. Đầu tư vào bảo mật hôm nay là bảo vệ cho thành công của ngày mai.
					</Paragraph>
				</div>
			</div>
		</div>
	);
}
