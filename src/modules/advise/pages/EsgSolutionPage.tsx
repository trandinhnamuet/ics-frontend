import { Typography } from "antd";
import SolutionSideBar from "../components/SolutionSideBar";

const { Title, Paragraph } = Typography;

export default function EsgSolutionPage() {
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
					ESG
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
						ESG: Từ Áp Lực Tuân Thủ Đến Lợi Thế Cạnh Tranh – Lộ Trình Chiến Lược Cho Doanh Nghiệp Việt
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Trong thế giới phẳng và một kỷ nguyên kinh doanh đầy biến động, thước đo thành công của một doanh nghiệp không chỉ còn nằm ở những con số lợi nhuận trên báo cáo tài chính. Một cuộc chuyển dịch mang tính toàn cầu đang diễn ra, nơi giá trị của doanh nghiệp được định hình bởi cả những yếu tố vô hình nhưng đầy sức mạnh: trách nhiệm với môi trường, cam kết với xã hội và sự minh bạch trong quản trị. Đó chính là ba trụ cột của ESG (Môi trường – Xã hội – Quản trị).
						<br />
						ESG không còn là một “xu hướng” truyền thông hay một hoạt động từ thiện đơn thuần. Giờ đây, nó đã trở thành một yêu cầu kinh doanh tất yếu. Áp lực đang đến từ mọi phía: từ các nhà đầu tư yêu cầu sự minh bạch về rủi ro khí hậu, từ người tiêu dùng thông thái ưu tiên các sản phẩm bền vững, từ các quy định ngày càng khắt khe của các thị trường xuất khẩu lớn như EU, và từ chính yêu cầu của các đối tác trong chuỗi cung ứng toàn cầu.
						<br />
						Trước làn sóng này, câu hỏi đặt ra cho các nhà lãnh đạo không còn là “có nên” thực hành ESG hay không, mà là “làm thế nào” để triển khai một cách chiến lược, biến áp lực tuân thủ thành một lợi thế cạnh tranh thực sự.
					</Paragraph>
					<Title level={4} style={{ color: "#0984c7" }}>
						Phần 1: Tại sao ESG là “ván cờ” chiến lược mà bạn không thể đứng ngoài?
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Nhiều doanh nghiệp vẫn nhìn nhận ESG qua lăng kính chi phí. Nhưng với một tầm nhìn chiến lược, ESG chính là một khoản đầu tư vào sức bật và sự trường tồn của doanh nghiệp.
					</Paragraph>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>E (Environment – Môi trường): Quản trị Rủi ro và Tối ưu Hiệu quả</b> Việc thực hành các tiêu chuẩn về môi trường không chỉ là bảo vệ hành tinh. Đó là việc quản trị rủi ro cho hoạt động kinh doanh trước các biến động về khí hậu, tối ưu hóa chi phí vận hành thông qua việc tiết kiệm năng lượng cho tòa nhà, nhà máy, và sử dụng tài nguyên hiệu quả. Một chiến lược ESG tốt giúp doanh nghiệp giảm sự phụ thuộc vào các nguồn tài nguyên hữu hạn, từ đó tăng cường sự ổn định và khả năng phục hồi.</li>
						<li><b>S (Social – Xã hội): Nguồn vốn Con người và Tài sản Thương hiệu</b> Trong cuộc chiến giành giật nhân tài, một môi trường làm việc an toàn, công bằng và đầy cảm hứng là một lợi thế không thể đo đếm. Các chính sách xã hội tiến bộ không chỉ giúp thu hút và giữ chân những cá nhân xuất sắc nhất, mà còn xây dựng một thương hiệu được yêu mến và tin tưởng trong cộng đồng. Đây chính là tài sản thương hiệu vô giá.</li>
						<li><b>G (Governance – Quản trị): Nền tảng của Sự Tin cậy và Tăng trưởng</b> Quản trị minh bạch, đạo đức và có trách nhiệm giải trình là nền tảng cho mọi sự phát triển ổn định. Một hệ thống quản trị vững chắc giúp giảm thiểu rủi ro pháp lý, tăng cường niềm tin của các nhà đầu tư, và mở ra các cơ hội tiếp cận nguồn vốn quốc tế, đặc biệt là các dòng đầu tư ESG đang ngày càng lớn mạnh.</li>
					</ul>
					<div style={{ textAlign: "center", marginBottom: "32px" }}>
						<img src="https://icss.com.vn/wp-content/uploads/2025/08/unnamed-1-300x300.png" alt="ESG" style={{ maxWidth: "300px", width: "100%", borderRadius: "8px" }} />
					</div>
					<Title level={4} style={{ color: "#0984c7" }}>
						Phần 2: Những rào cản trên hành trình chinh phục ESG
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Mặc dù nhận thức được tầm quan trọng, nhiều doanh nghiệp Việt Nam vẫn gặp phải những rào cản đáng kể khi bắt tay vào triển khai ESG:
					</Paragraph>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Sự phức tạp:</b> ESG bao trùm một phạm vi rất rộng. Nhiều doanh nghiệp không biết phải bắt đầu từ đâu, ưu tiên yếu tố nào trước?</li>
						<li><b>Thiếu chuyên môn:</b> Việc xây dựng chiến lược, thiết lập KPI và đo lường hiệu quả đòi hỏi kiến thức chuyên sâu về cả kinh doanh, kỹ thuật và các chuẩn mực quốc tế.</li>
						<li><b>Khó khăn trong tích hợp:</b> Làm thế nào để lồng ghép các mục tiêu ESG vào chiến lược kinh doanh cốt lõi, thay vì biến nó thành một hoạt động bên lề của phòng marketing hay nhân sự?</li>
						<li><b>Rủi ro “Tẩy xanh” (Greenwashing):</b> Làm thế nào để xây dựng và truyền thông các báo cáo một cách thuyết phục, minh bạch, tránh được những cáo buộc về việc “làm màu” vì mục đích quảng cáo?</li>
					</ul>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Những thách thức này đòi hỏi một người dẫn đường có chuyên môn, kinh nghiệm và tầm nhìn.
					</Paragraph>
					<Title level={4} style={{ color: "#0984c7" }}>
						Phần 3: Dịch vụ tư vấn chiến lược ESG của chúng tôi – lộ trình 4 bước đến bền vững
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Chúng tôi không cung cấp một giải pháp đóng hộp. Chúng tôi đóng vai trò là một “hoa tiêu chiến lược”, đồng hành cùng doanh nghiệp của bạn trên hành trình kiến tạo giá trị bền vững thông qua một quy trình tư vấn chuyên nghiệp gồm 4 bước:
					</Paragraph>
					<ol style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Bước 1: Đánh giá hiện trạng & định vị (ESG Assessment)</b><br />Chúng tôi tiến hành một cuộc “khám sức khỏe” ESG toàn diện cho doanh nghiệp, phân tích các hoạt động hiện tại, phỏng vấn các bên liên quan và so sánh với các doanh nghiệp cùng ngành cũng như các chuẩn mực quốc tế. Kết quả là một báo cáo chi tiết chỉ ra điểm mạnh, điểm yếu, cơ hội và rủi ro ESG của bạn.</li>
						<li><b>Bước 2: Xây dựng chiến lược & lộ trình (ESG Strategy & Roadmap)</b><br />Dựa trên kết quả đánh giá, chúng tôi sẽ tổ chức các buổi làm việc chiến lược với ban lãnh đạo để xác định các mục tiêu ESG ưu tiên, phù hợp nhất với mô hình kinh doanh và tầm nhìn của công ty. Chúng tôi sẽ cùng bạn thiết lập các chỉ số đo lường hiệu quả (KPIs) và xây dựng một lộ trình hành động cụ thể, khả thi cho từng giai đoạn.</li>
						<li><b>Bước 3: Hỗ trợ triển khai & tích hợp (Implementation Support)</b><br />Một chiến lược dù hoàn hảo đến đâu cũng sẽ vô nghĩa nếu chỉ nằm trên giấy. Đội ngũ của chúng tôi sẽ đồng hành cùng các phòng ban liên quan của bạn, từ vận hành, tài chính đến nhân sự, để tư vấn và hỗ trợ việc đưa các sáng kiến ESG vào thực tiễn hoạt động hàng ngày, đảm bảo sự thay đổi diễn ra một cách mượt mà và hiệu quả.</li>
						<li><b>Bước 4: Đo lường & báo cáo bền vững (ESG Reporting)</b><br />Tính minh bạch là chìa khóa của sự tin cậy. Chúng tôi hỗ trợ doanh nghiệp xây dựng các báo cáo ESG và báo cáo phát triển bền vững theo các tiêu chuẩn quốc tế được công nhận rộng rãi như GRI (Global Reporting Initiative) hay SASB. Một báo cáo chuyên nghiệp không chỉ giúp bạn đáp ứng yêu cầu của nhà đầu tư mà còn là một công cụ truyền thông mạnh mẽ.</li>
					</ol>
					<Title level={4} style={{ color: "#0984c7" }}>
						Tại sao chọn chúng tôi làm Đối Tác Chiến Lược?
					</Title>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Đội ngũ chuyên gia đa ngành:</b> Chúng tôi quy tụ các chuyên gia không chỉ về môi trường, mà còn về tài chính, quản trị doanh nghiệp, nhân sự và chuỗi cung ứng.</li>
						<li><b>Am hiểu sâu sắc thị trường Việt Nam:</b> Chúng tôi áp dụng các chuẩn mực quốc tế nhưng luôn điều chỉnh cho phù hợp với bối cảnh pháp lý, văn hóa và thách thức riêng của các doanh nghiệp tại Việt Nam.</li>
						<li><b>Phương pháp luận đã được chứng thực:</b> Quy trình tư vấn của chúng tôi được xây dựng dựa trên kinh nghiệm thực tiễn và đã được chứng minh hiệu quả tại nhiều doanh nghiệp hàng đầu.</li>
						<li><b>Cam kết đồng hành dài hạn:</b> Chúng tôi xem thành công của bạn là thành công của chúng tôi và cam kết trở thành một đối tác chiến lược trên suốt hành trình phát triển bền vững của bạn.</li>
					</ul>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Trong một thế giới đầy biến động, doanh nghiệp bền vững không chỉ là doanh nghiệp tạo ra lợi nhuận, mà là doanh nghiệp có khả năng thích ứng, phục hồi và tạo ra giá trị lâu dài cho tất cả các bên liên quan. Đầu tư vào ESG chính là đầu tư vào tương lai và sức bật của doanh nghiệp bạn.
					</Paragraph>
				</div>
			</div>
		</div>
	);
}
