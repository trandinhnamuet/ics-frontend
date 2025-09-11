import { Typography } from "antd";
import ProductSideBar from "../components/ProductSideBar";

const { Title, Paragraph } = Typography;

export default function DashboardPage() {
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
					SMART DASHBOARD
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
						Smart Dashboard: “Tháp Điều Khiển Không Lưu” Cho Toàn Bộ Hạ Tầng IT Của Bạn
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						<b>Smart Dashboard : Người Hùng Dọn Dẹp Sự Hỗn Loạn</b><br />
						Smart dashboard không phải là một công cụ giám sát thông thường. Chúng tôi định nghĩa Smart dashboard là một nền tảng vận hành trung tâm, nơi mọi dữ liệu từ toàn bộ hạ tầng IT của bạn – từ máy chủ vật lý, máy ảo, mạng, database cho đến các ứng dụng đám mây – đều được hội tụ về một nơi duy nhất. Smart dashboard giúp bạn chuyển từ trạng thái bị động phản ứng với sự cố sang chủ động dự báo và ngăn chặn chúng.
					</Paragraph>
					<Title level={4} style={{ color: "#0984c7" }}>
						Các Tính Năng Chính và Lợi Ích Vượt Trội
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Chúng tôi hiểu rằng bạn không cần thêm một công cụ, bạn cần một giải pháp mang lại kết quả. Dưới đây là cách Smart dashboard thay đổi cuộc chơi:
					</Paragraph>
					<ol style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Tính năng 1: Bảng điều khiển Hợp nhất (Unified Dashboard)</b><br />Hãy tưởng tượng bạn có thể thấy tình trạng của toàn bộ hệ thống trên một màn hình duy nhất, từ hiệu năng của máy chủ, băng thông mạng, cho đến lỗi ứng dụng.<br /><b>LỢI ÍCH:</b> Thay vì phải chuyển đổi giữa hàng chục công cụ khác nhau, bạn có được tầm nhìn 360 độ theo thời gian thực. Điều này giúp bạn tiết kiệm hàng giờ đồng hồ mỗi ngày, và quan trọng hơn, giảm thời gian trung bình để xác định sự cố (MTTR) ít nhất 50%.<br /><img src="https://icss.com.vn/wp-content/uploads/2025/07/112-768x433.png" alt="Unified Dashboard" style={{ maxWidth: "100%", borderRadius: "8px", margin: "16px 0" }} /></li>
						<li><b>Tính năng 2: Tự động hóa Vận hành & Cảnh báo Thông minh (IT Automation & Smart Alerts)</b><br />Smart dashboard không chỉ cảnh báo, nó còn có thể hành động. Bạn có thể thiết lập các quy trình tự động như khởi động lại dịch vụ khi gặp lỗi, hoặc tự động tạo ticket báo cáo sự cố. Hệ thống cảnh báo sử dụng AI để lọc nhiễu và chỉ thông báo cho bạn những vấn đề thực sự quan trọng.<br /><b>LỢI ÍCH:</b> Giải phóng đội ngũ của bạn khỏi những tác vụ thủ công lặp đi lặp lại, cho phép họ tập trung vào các dự án chiến lược mang lại giá trị cao hơn. Hơn hết, nó chấm dứt hoàn toàn tình trạng “ngập lụt” cảnh báo (alert fatigue) và giúp bạn tập trung vào những gì đáng quan tâm nhất.<br /><img src="https://icss.com.vn/wp-content/uploads/2025/07/113-768x433.png" alt="Smart Alerts" style={{ maxWidth: "100%", borderRadius: "8px", margin: "16px 0" }} /></li>
						<li><b>Tính năng 3: Phân tích Nguyên nhân Gốc rễ bằng AI (AIOps-Powered Root Cause Analysis)</b><br />Khi một sự cố xảy ra, Smart dashboard tự động phân tích các sự kiện và dữ liệu liên quan từ nhiều nguồn để tìm ra mối tương quan.<br /><b>LỢI ÍCH:</b> Thay vì phải dò dẫm trong bóng tối, AIOps của Smart dashboard hoạt động như một chuyên gia phân tích dày dạn kinh nghiệm, chỉ ra chính xác vấn đề gốc rễ chỉ trong vài phút. Điều này mang lại sự tự tin và an tâm cho bạn và đội nhóm, rằng bạn luôn kiểm soát được tình hình.<br /><img src="https://icss.com.vn/wp-content/uploads/2025/07/111-768x431.png" alt="Root Cause Analysis" style={{ maxWidth: "100%", borderRadius: "8px", margin: "16px 0" }} /></li>
					</ol>
					<Title level={4} style={{ color: "#0984c7" }}>
						Điểm Khác Biệt Độc Nhất Của Smart dashboard
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Trong khi các giải pháp khác trên thị trường thường mạnh về một mảng riêng lẻ (chỉ giám sát mạng hoặc máy chủ), sức mạnh độc nhất của Smart dashboard nằm ở khả năng HỢP NHẤT TOÀN DIỆN. Smart dashboard là một trong số ít các nền tảng có khả năng tích hợp và quản lý mượt mà cả hạ tầng IT truyền thống và OT (Công nghệ Vận hành), từ máy chủ trong Data Center cho đến các cảm biến IoT trong nhà máy thông minh, tất cả trên một nền tảng duy nhất.
					</Paragraph>
					<Title level={4} style={{ color: "#0984c7" }}>
						Hãy Để Smart dashboard Giải Phóng Bạn Khỏi Sự Hỗn Loạn
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Đừng để sự phức tạp của hạ tầng IT làm chậm bước tiến của bạn. Đã đến lúc sở hữu một công cụ mang lại sự rõ ràng, hiệu quả và quyền kiểm soát thực sự.
						<br />
						Đăng ký dùng thử Smart dashboard miễn phí trong 14 ngày và tự mình trải nghiệm sự khác biệt!
						<br />
						Hoặc, yêu cầu một buổi demo cá nhân hóa để xem Smart dashboard giải quyết chính xác vấn đề của bạn như thế nào.
					</Paragraph>
				</div>
			</div>
		</div>
	);
}
