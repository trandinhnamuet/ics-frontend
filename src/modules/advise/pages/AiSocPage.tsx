import { Typography } from "antd";
import SolutionSideBar from "../components/SolutionSideBar";

const { Title, Paragraph, Text } = Typography;

export default function AiSocPage() {
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
					AI SOC
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
						AI SOC: Tái Định Nghĩa An Ninh Mạng – Từ Phản Ứng Bị Động Đến Phòng Thủ Tiên Đoán
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Một thống kê đáng báo động từ IBM cho thấy một chuyên gia an ninh mạng phải xử lý trung bình hơn 11,000 cảnh báo bảo mật mỗi ngày. Giữa “cơn bão” thông tin đó, liệu đội ngũ an ninh của bạn có đang kiệt sức vì những cảnh báo sai (false positives)? Và quan trọng hơn, bạn có tự tin rằng mình không bỏ lọt các mối đe dọa tinh vi đang âm thầm ẩn mình trong hệ thống?
						<br />
						Nếu những câu hỏi này khiến bạn phải suy ngẫm, bạn không hề đơn độc. Đây chính là thực tế phũ phàng mà các Trung tâm Điều hành An ninh (SOC) truyền thống đang phải đối mặt. Trong cuộc chiến không cân sức với các mối đe dọa mạng ngày càng tinh vi và tự động hóa, việc dựa vào sức người đơn thuần cũng giống như dùng một chiếc khiên gỗ để chống lại tên lửa. Đã đến lúc chúng ta cần một cuộc cách mạng.
					</Paragraph>
					<Title level={4} style={{ color: "#0984c7" }}>
						Điểm Yếu Chết Người Của Trung Tâm Điều Hành An Ninh (SOC) Truyền Thống
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						SOC truyền thống, dù đã và đang là nền tảng của an ninh doanh nghiệp, đang dần bộc lộ những giới hạn không thể vượt qua trong bối cảnh mới:
					</Paragraph>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Dựa trên Quy tắc (Rule-based):</b> Hoạt động chủ yếu dựa trên các quy tắc và chữ ký đã được định sẵn. Điều này khiến chúng gần như “bó tay” trước các cuộc tấn công zero-day hoặc các kỹ thuật tấn công mới lạ chưa từng có trong cơ sở dữ liệu.</li>
						<li><b>Quá tải Cảnh báo (Alert Fatigue):</b> Hàng ngàn cảnh báo được tạo ra mỗi ngày, nhưng phần lớn là nhiễu hoặc cảnh báo sai. Điều này làm các nhà phân tích kiệt sức, mất tập trung và dễ dàng bỏ qua những dấu hiệu quan trọng của một cuộc tấn công thực sự.</li>
						<li><b>Phản ứng Chậm:</b> Quá trình điều tra một sự cố đòi hỏi nhiều bước thủ công, từ thu thập log, phân tích, đối chiếu… khiến thời gian phản ứng (Mean Time To Respond – MTTR) kéo dài hàng giờ, thậm chí hàng ngày. Đây là “thời gian vàng” để hacker leo thang đặc quyền và gây thiệt hại.</li>
						<li><b>Chi phí Nhân sự Cao:</b> Vận hành một SOC 24/7 đòi hỏi một đội ngũ chuyên gia an ninh mạng đông đảo và có tay nghề cao – một nguồn nhân lực vừa đắt đỏ vừa khan hiếm trên thị trường.</li>
					</ul>
					<div style={{ textAlign: "center", marginBottom: "32px" }}>
						<img src="https://icss.com.vn/wp-content/uploads/2025/08/Chua-co-ten-23-x-32-cm-23-x-23-cm-768x768.png" alt="AI SOC" style={{ maxWidth: "350px", width: "100%", borderRadius: "8px" }} />
					</div>
					<Title level={4} style={{ color: "#0984c7" }}>
						AI SOC: Kỷ nguyên mới của Trung tâm Điều hành An ninh
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Trước những thách thức đó, AI SOC ra đời không phải để thay thế SOC truyền thống, mà là một bước tiến hóa tất yếu. Đây là sự cộng hưởng sức mạnh giữa con người và máy móc, nơi Trí tuệ nhân tạo (AI) đóng vai trò một nhà phân tích an ninh siêu việt, không biết mệt mỏi, làm việc 24/7 để khuếch đại năng lực của các chuyên gia.
						<br />
						Nền tảng an ninh mạng AI này sử dụng các thuật toán Machine Learning và Deep Learning để tự động phân tích một lượng dữ liệu khổng lồ, học hỏi các hành vi thông thường, và từ đó phát hiện những bất thường dù là nhỏ nhất. Nó biến SOC từ một trung tâm phản ứng bị động thành một bộ não phòng thủ chủ động và thông minh.
					</Paragraph>
					<Title level={4} style={{ color: "#0984c7" }}>
						Sức mạnh vượt trội của AI SOC: Tính năng và Giá trị Kinh doanh
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Giải pháp của chúng tôi mang lại sức mạnh vượt trội thông qua các công nghệ cốt lõi, giải quyết triệt để các vấn đề của SOC truyền thống.
					</Paragraph>
					<div style={{ textAlign: "center", marginBottom: "32px" }}>
						<img src="https://icss.com.vn/wp-content/uploads/2025/08/Chua-co-ten-23-x-32-cm-23-x-23-cm-1-768x768.png" alt="AI SOC" style={{ maxWidth: "350px", width: "100%", borderRadius: "8px" }} />
					</div>
					<ol style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Phân tích Hành vi Người dùng và Thực thể (UEBA)</b><br />AI xây dựng một “đường cơ sở” (baseline) về hành vi bình thường cho mọi người dùng và thiết bị trong hệ thống: ai thường truy cập vào đâu, vào lúc nào, từ thiết bị nào. Bất kỳ sai lệch nào so với hành vi này, ví dụ một nhân viên kế toán đột nhiên truy cập vào máy chủ mã nguồn vào lúc 3 giờ sáng, sẽ ngay lập tức bị gắn cờ.<br /><i>Lợi ích:</i> Đây là vũ khí tối thượng để phát hiện mối đe dọa từ bên trong (insider threats) và các cuộc tấn công có chủ đích tinh vi (APTs) mà các hệ thống dựa trên quy tắc thường bỏ lọt.</li>
						<li><b>Tự động hóa Điều tra và Phản ứng (SOAR)</b><br />Khi một mối đe dọa được xác thực, nền tảng SOAR sẽ tự động thực thi các kịch bản ứng phó (playbook) đã được định sẵn: tự động cô lập máy tính bị nhiễm mã độc khỏi mạng, vô hiệu hóa tài khoản bị xâm phạm, chặn địa chỉ IP của kẻ tấn công…<br /><i>Lợi ích:</i> Tự động hóa an ninh giúp giảm thời gian phản ứng sự cố (MTTR) từ hàng giờ xuống chỉ còn vài phút. Điều này giải phóng các chuyên gia khỏi các tác vụ lặp đi lặp lại, cho phép họ tập trung vào các nhiệm vụ chiến lược hơn như phân tích các mối đe dọa phức tạp.</li>
						<li><b>Săn lùng Mối đe dọa Chủ động (Proactive Threat Hunting)</b><br />Thay vì chờ cảnh báo xuất hiện, AI liên tục “quét” qua toàn bộ dữ liệu mạng và hệ thống để tìm kiếm các dấu hiệu tấn công tiềm ẩn (Indicators of Compromise – IOCs) mà có thể đã vượt qua các lớp phòng thủ ban đầu.<br /><i>Lợi ích:</i> Giúp đội ngũ an ninh chuyển từ thế bị động sang chủ động, chặn đứng hacker trước khi chúng kịp gây ra thiệt hại đáng kể, giảm thiểu rủi ro cho toàn bộ doanh nghiệp.</li>
						<li><b>Giảm thiểu Cảnh báo sai (False Positive Reduction)</b><br />Với khả năng học hỏi và phân tích ngữ cảnh, các mô hình AI/Machine Learning giúp sàng lọc và xếp hạng mức độ ưu tiên của các cảnh báo. Nó có thể phân biệt một cảnh báo nguy hiểm thực sự với một hoạt động bất thường nhưng vô hại.<br /><i>Lợi ích:</i> Giải quyết triệt để tình trạng “mệt mỏi vì cảnh báo”. Đội ngũ an ninh có thể tập trung nguồn lực vào những gì quan trọng nhất, tăng hiệu suất làm việc và không bỏ lọt các mối nguy thực sự.</li>
					</ol>
					<Title level={4} style={{ color: "#0984c7" }}>
						Kịch bản thực tế: AI SOC ngăn chặn một cuộc tấn công Ransomware
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Hãy tưởng tượng một nhân viên vô tình nhấp vào một email lừa đảo, mã độc bắt đầu âm thầm mã hóa dữ liệu.
						<br />
						<b>SOC truyền thống:</b> Có thể sẽ chỉ nhận thấy khi đã quá muộn, lúc các cảnh báo về file bị thay đổi hàng loạt xuất hiện, hoặc khi người dùng báo cáo không thể truy cập dữ liệu.
						<br />
						<b>AI SOC hành động:</b>
						<ul>
							<li>UEBA phát hiện hành vi truy cập và ghi file bất thường từ tài khoản của nhân viên.</li>
							<li>Hệ thống AI ngay lập tức đối chiếu hành vi này với các mẫu tấn công ransomware đã biết.</li>
							<li>SOAR tự động kích hoạt kịch bản ứng phó: ngắt kết nối máy tính đó khỏi mạng, vô hiệu hóa tài khoản người dùng để ngăn lây lan, và gửi cảnh báo ưu tiên cao nhất đến chuyên gia an ninh với đầy đủ thông tin phân tích. Cuộc tấn công bị vô hiệu hóa trong vài phút, trước khi có bất kỳ thiệt hại lớn nào xảy ra.</li>
						</ul>
					</Paragraph>
					<Title level={4} style={{ color: "#0984c7" }}>
						Tại sao chọn giải pháp AI SOC của chúng tôi?
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Chúng tôi không chỉ cung cấp một công cụ, chúng tôi mang đến một giải pháp toàn diện:
					</Paragraph>
					<div style={{ textAlign: "center", marginBottom: "32px" }}>
						<img src="https://icss.com.vn/wp-content/uploads/2025/08/Chua-co-ten-23-x-32-cm-23-x-23-cm-2-768x768.png" alt="AI SOC" style={{ maxWidth: "350px", width: "100%", borderRadius: "8px" }} />
					</div>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Mô hình AI độc quyền:</b> Được huấn luyện trên tập dữ liệu khổng lồ về các mối đe dọa toàn cầu, đảm bảo khả năng phát hiện chính xác và liên tục được cập nhật.</li>
						<li><b>Đội ngũ chuyên gia 24/7:</b> Các chuyên gia an ninh mạng của chúng tôi luôn sẵn sàng hỗ trợ, phân tích và tư vấn cho đội ngũ của bạn.</li>
						<li><b>Nền tảng dễ dàng tích hợp:</b> Giải pháp của chúng tôi có thể tích hợp mượt mà với các công cụ an ninh hiện có của bạn, tạo thành một hệ sinh thái phòng thủ hợp nhất.</li>
						<li><b>Báo cáo trực quan cho ban lãnh đạo:</b> Cung cấp các báo cáo và dashboard dễ hiểu, giúp các cấp lãnh đạo nắm bắt được tình hình an ninh của toàn doanh nghiệp.</li>
					</ul>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						<b>Nâng cấp sức mạnh cho đội ngũ an ninh của bạn</b><br />
						AI SOC không phải là sự thay thế, mà là sự nâng cấp sức mạnh tối thượng cho đội ngũ an ninh của bạn. Nó loại bỏ sự mệt mỏi, tăng cường sự tập trung và trao cho các chuyên gia khả năng nhìn thấu những gì mắt thường không thể thấy.
						<br />
						Đừng để doanh nghiệp của bạn trở thành nạn nhân tiếp theo. Liên hệ với chúng tôi ngay hôm nay để yêu cầu một buổi Demo miễn phí giải pháp AI SOC và trực tiếp thấy sự khác biệt mà nó mang lại!
					</Paragraph>
				</div>
			</div>
		</div>
	);
}
