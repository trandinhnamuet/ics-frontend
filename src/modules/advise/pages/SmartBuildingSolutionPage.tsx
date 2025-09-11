import { Typography } from "antd";
import SolutionSideBar from "../components/SolutionSideBar";

const { Title, Paragraph } = Typography;

export default function SmartBuildingSolutionPage() {
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
					GIẢI PHÁP TÒA NHÀ THÔNG MINH
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
				<SolutionSideBar />
				{/* Right Content */}
				<div style={{ flex: 1 }}>
					<Title level={3} style={{ color: "#0984c7" }}>
						Giải pháp Tòa nhà thông minh thế hệ mới
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Hệ thống của chúng tôi sử dụng Trí tuệ nhân tạo (AI) và Internet vạn vật (IoT) để thu thập dữ liệu vận hành theo thời gian thực, tự động phân tích và đưa ra các quyết định thông minh. Kết quả là một tòa nhà không chỉ biết “phản ứng” mà còn có khả năng “thích ứng” và “dự báo”, mang lại hiệu quả vượt trội trên mọi phương diện.
					</Paragraph>
					<Title level={4} style={{ color: "#0984c7" }}>
						Các Tính năng Cốt lõi và Lợi ích Vượt trội
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Giải pháp Smart Building được xây dựng trên các trụ cột công nghệ vững chắc, mỗi trụ cột đều mang lại những giá trị kinh tế và trải nghiệm rõ rệt.
					</Paragraph>
					<ol style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Hệ thống Quản lý Năng lượng Thông minh (EMS)</b><br />Hệ thống sử dụng các thuật toán AI để phân tích thói quen sử dụng, điều kiện thời tiết và sự hiện diện của con người. Từ đó, nó tự động tối ưu hóa hoạt động của hệ thống điều hòa và chiếu sáng – tắt các thiết bị ở khu vực không có người, điều chỉnh nhiệt độ theo lịch trình, và tận dụng tối đa ánh sáng tự nhiên.<br /><i>Lợi ích:</i> Đây là đòn bẩy tài chính mạnh mẽ nhất. Giải pháp của chúng tôi giúp tiết kiệm từ 30-40% chi phí điện năng hàng tháng, một con số khổng lồ đối với các tòa nhà quy mô lớn. Hơn nữa, việc tiết kiệm năng lượng cho tòa nhà còn giúp giảm dấu chân carbon, là một điểm cộng lớn cho các chứng chỉ công trình xanh và nâng cao hình ảnh thương hiệu bền vững.</li>
						<li><b>An ninh Tích hợp và Kiểm soát ra vào Thông minh</b><br />Chúng tôi hợp nhất hệ thống camera giám sát AI, kiểm soát cửa ra vào bằng nhận diện khuôn mặt, thẻ từ hoặc ứng dụng điện thoại. Hệ thống có thể tự động nhận diện các hành vi bất thường, cảnh báo ngay lập tức cho đội ngũ an ninh và lưu trữ dữ liệu để dễ dàng truy vết khi cần.<br /><i>Lợi ích:</i> Mang lại một môi trường an toàn tuyệt đối và an ninh thông minh 24/7. Việc quản lý truy cập trở nên liền mạch và dễ dàng, loại bỏ các quy trình thủ công phức tạp. Đối với ban quản lý, việc truy vết và xuất báo cáo an ninh chỉ mất vài cú nhấp chuột.</li>
						<li><b>Tự động hóa Tiện ích (Điều hòa, Chiếu sáng, Rèm cửa)</b><br />Người dùng có thể cá nhân hóa không gian làm việc hoặc sinh sống của mình chỉ bằng một vài thao tác trên ứng dụng di động. Hơn thế nữa, hệ thống có thể tự động điều chỉnh rèm cửa dựa trên hướng nắng, điều chỉnh ánh sáng và nhiệt độ dựa trên số lượng người trong phòng.<br /><i>Lợi ích:</i> Mang lại sự tiện nghi và thoải mái tối đa, trực tiếp nâng cao trải nghiệm và sự hài lòng của người sử dụng tòa nhà. Đối với các văn phòng cho thuê, đây là một yếu tố cạnh tranh đắt giá để thu hút các công ty hàng đầu.</li>
						<li><b>Nền tảng Quản lý Tòa nhà Tập trung (BMS)</b><br />Toàn bộ thông tin từ các hệ thống con (năng lượng, an ninh, PCCC, HVAC…) đều được hiển thị trực quan trên một dashboard duy nhất. Từ đây, đội ngũ vận hành có thể giám sát, điều khiển và nhận báo cáo về mọi hoạt động của tòa nhà.<br /><i>Lợi ích:</i> Giúp quản lý tòa nhà hiệu quả hơn bao giờ hết. Ban quản lý có thể giảm thiểu nhân sự vận hành, ra quyết định nhanh chóng và chính xác hơn. Đặc biệt, hệ thống có khả năng phát hiện sớm các dấu hiệu bất thường của thiết bị, giúp ngăn chặn sự cố trước khi chúng xảy ra.</li>
						<li><b>Phân tích Dữ liệu và Báo cáo Thông minh</b><br />Dữ liệu là vàng. Hệ thống của chúng tôi liên tục thu thập và phân tích dữ liệu vận hành, từ đó tạo ra các báo cáo thông minh và đưa ra những đề xuất cải tiến cụ thể (ví dụ: “Khu vực tầng 5 có xu hướng tiêu thụ năng lượng cao bất thường vào cuối tuần”).<br /><i>Lợi ích:</i> Giúp chủ đầu tư và ban quản lý ra quyết định dựa trên dữ liệu chứ không phải cảm tính. Đây là chìa khóa để liên tục tối ưu hóa hiệu quả vận hành và cắt giảm chi phí trong dài hạn.</li>
					</ol>
					<Title level={4} style={{ color: "#0984c7" }}>
						Tại sao chọn Giải pháp từ ICS?
					</Title>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Công nghệ AI độc quyền:</b> Chúng tôi không chỉ tự động hóa theo kịch bản, mà còn sử dụng AI để hệ thống tự học hỏi và ngày càng thông minh hơn.</li>
						<li><b>Đội ngũ chuyên gia giàu kinh nghiệm:</b> Chúng tôi cung cấp một giải pháp toàn diện từ tư vấn, thiết kế, triển khai cho đến bảo trì.</li>
						<li><b>Dịch vụ hỗ trợ 24/7:</b> Đảm bảo hệ thống của bạn luôn hoạt động ổn định và được hỗ trợ kịp thời.</li>
						<li><b>Khả năng tùy biến và mở rộng linh hoạt:</b> Giải pháp của chúng tôi được thiết kế theo dạng module, dễ dàng tùy chỉnh và nâng cấp theo quy mô phát triển của tòa nhà.</li>
					</ul>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						<b>Kiến tạo Tương lai cho Tòa nhà của bạn</b><br />
						Một tòa nhà thông minh không chỉ là một công trình xây dựng – đó là một môi trường sống và làm việc thông minh, bền vững và đầy cảm hứng. Nó giúp cắt giảm chi phí, tăng cường an ninh, nâng cao giá trị tài sản và thu hút những khách hàng tốt nhất. Đầu tư vào một giải pháp smart building hôm nay chính là đầu tư cho sự thành công của ngày mai.
					</Paragraph>
				</div>
			</div>
		</div>
	);
}
