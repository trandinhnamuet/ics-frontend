import { Typography } from "antd";
import SolutionSideBar from "../components/SolutionSideBar";

const { Title, Paragraph } = Typography;

export default function SmartFactorySolutionPage() {
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
					GIẢI PHÁP NHÀ MÁY THÔNG MINH
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
						Nhà Máy Thông Minh: Chìa Khóa Mở Ra Kỷ Nguyên Sản Xuất Hiệu Suất Cao.
					</Title>
					<Title level={4} style={{ color: "#0984c7" }}>
						I. Tại sao nhà máy của bạn cần “Thông Minh” hơn?
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Mô hình sản xuất truyền thống đang dần trở nên lỗi thời bởi những yếu điểm cố hữu:
					</Paragraph>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Phản ứng chậm:</b> Chỉ hành động khi sự cố đã xảy ra, gây ra thời gian dừng máy (downtime) không lường trước và thiệt hại nặng nề.</li>
						<li><b>Dựa vào kinh nghiệm con người:</b> Quyết định vận hành phụ thuộc nhiều vào kinh nghiệm của một vài cá nhân, thiếu tính hệ thống và khó nhân rộng.</li>
						<li><b>Lãng phí tài nguyên:</b> Khó kiểm soát chính xác mức tiêu thụ năng lượng, nguyên vật liệu, dẫn đến chi phí sản xuất cao.</li>
						<li><b>Thiếu khả năng dự báo:</b> Không có khả năng nhìn thấy trước các rủi ro tiềm ẩn về máy móc, chất lượng hay chuỗi cung ứng.</li>
					</ul>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Trong bối cảnh đó, một giải pháp sản xuất thông minh không còn là một lựa chọn, mà là một yêu cầu bắt buộc để tồn tại và phát triển.
					</Paragraph>
					<Title level={4} style={{ color: "#0984c7" }}>
						II. Giải pháp nhà máy thông minh ICS – Một hệ sinh thái toàn diện
					</Title>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						Chúng tôi không chỉ bán phần mềm hay cảm biến. Chúng tôi cung cấp một hệ sinh thái công nghệ toàn diện, là sự kết hợp của Vạn vật Kết nối Công nghiệp (IOT), Dữ liệu lớn (Big Data), Trí tuệ nhân tạo (AI) và Tự động hóa. Mục tiêu là biến nhà máy của bạn thành một thực thể sống có khả năng “cảm nhận”, “suy nghĩ” và “tự tối ưu”.
						<br />
						Hệ sinh thái của chúng tôi được xây dựng trên các trụ cột công nghệ cốt lõi:
					</Paragraph>
					<ol style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Kết nối vạn vật (IOT) & Cảm biến: “Giác quan” của nhà máy</b><br />Chúng tôi trang bị cho các máy móc, dây chuyền sản xuất của bạn hệ thống cảm biến thông minh để thu thập liên tục hàng ngàn dữ liệu quan trọng: nhiệt độ, độ rung, tốc độ, áp suất, mức tiêu thụ năng lượng…<br /><i>Lợi ích:</i> Lần đầu tiên, bạn có được một cái nhìn toàn cảnh và chính xác về “sức khỏe” của toàn bộ nhà máy theo thời gian thực. Mọi thông số vận hành đều được số hóa, tạo ra một nguồn dữ liệu khổng lồ và minh bạch, thay thế hoàn toàn cho việc ghi chép thủ công và phỏng đoán.</li>
						<li><b>Phân tích Dữ liệu Lớn & Trí tuệ nhân tạo (AI): “Bộ não” của nhà máy</b><br />Dữ liệu thô từ cảm biến sẽ trở nên vô giá khi được đưa vào “bộ não” AI của chúng tôi. Các thuật toán học máy sẽ phân tích và tìm ra những quy luật ẩn, những mối tương quan mà con người không thể nhận thấy.<br /><i>Lợi ích:</i> Đây chính là chìa khóa cho bảo trì dự đoán (predictive maintenance). Hệ thống sẽ cảnh báo bạn rằng “động cơ A có khả năng gặp sự cố trong vòng 72 giờ tới” dựa trên các thay đổi về độ rung và nhiệt độ. Điều này cho phép bạn lên kế hoạch sửa chữa chủ động, biến những lần dừng máy bất ngờ thành những lần bảo trì có kế hoạch, giảm thiểu tối đa thiệt hại sản xuất.</li>
						<li><b>Hệ thống điều hành sản xuất (MES): “Trung tâm điều phối” của nhà máy</b><br />MES là nền tảng phần mềm trung tâm, kết nối mệnh lệnh từ phòng kế hoạch đến từng công đoạn trên sàn sản xuất. Nó theo dõi mọi lệnh sản xuất, quản lý nguyên vật liệu, giám sát tiến độ và ghi nhận chất lượng sản phẩm.<br /><i>Lợi ích:</i> Mang lại khả năng truy xuất nguồn gốc toàn diện, tối ưu hóa sản xuất bằng cách đảm bảo đúng người, đúng máy, đúng vật liệu thực hiện đúng việc vào đúng thời điểm. Mọi quy trình đều được chuẩn hóa và giám sát chặt chẽ.</li>
						<li><b>Bản sao số (Digital Twin): “Phòng thí nghiệm ảo” của nhà máy</b><br />Chúng tôi tạo ra một mô hình 3D ảo, một bản sao số hoàn hảo của nhà máy vật lý của bạn. Mô hình này được cập nhật dữ liệu liên tục từ các cảm biến IoT.<br /><i>Lợi ích:</i> Bạn có thể mô phỏng hoạt động, thử nghiệm các kịch bản cải tiến (ví dụ: thay đổi layout dây chuyền, điều chỉnh tốc độ máy) trên môi trường ảo mà không gây ra bất kỳ rủi ro nào cho sản xuất thực tế. Đây là công cụ đắc lực để tối ưu hóa thiết kế, quy trình và đào tạo nhân viên một cách an toàn, hiệu quả.</li>
					</ol>
					<Title level={4} style={{ color: "#0984c7" }}>
						III. Kết quả thực tế bạn nhận được là gì?
					</Title>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li>Tăng Hiệu suất Thiết bị Tổng thể (OEE) lên đến 15-25%.</li>
						<li>Giảm thời gian dừng máy ngoài kế hoạch lên đến 50%.</li>
						<li>Tiết kiệm 10% chi phí năng lượng nhờ tối ưu hóa vận hành.</li>
						<li>Cải thiện chất lượng sản phẩm và giảm tỷ lệ hàng lỗi nhờ khả năng kiểm soát quy trình chặt chẽ.</li>
					</ul>
					<Title level={4} style={{ color: "#0984c7" }}>
						Tại sao chọn ICS?
					</Title>
					<ul style={{ fontSize: "16px", marginBottom: "24px" }}>
						<li><b>Kinh nghiệm triển khai thực tế:</b> Chúng tôi không chỉ là nhà cung cấp công nghệ, chúng tôi là những chuyên gia am hiểu sâu sắc về quy trình sản xuất.</li>
						<li><b>Giải pháp tùy biến:</b> Chúng tôi hiểu rằng mỗi nhà máy có một đặc thù riêng. Giải pháp của ICS được thiết kế để tùy biến linh hoạt theo từng ngành nghề và quy mô.</li>
						<li><b>Đội ngũ hỗ trợ kỹ thuật chuyên sâu:</b> Chúng tôi đồng hành cùng bạn từ khâu tư vấn, triển khai cho đến vận hành và bảo trì, đảm bảo thành công của dự án.</li>
						<li><b>Nền tảng dễ dàng mở rộng:</b> Bạn có thể bắt đầu với một vài module và mở rộng hệ thống khi doanh nghiệp phát triển.</li>
					</ul>
					<Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
						<b>Bước nhảy vọt cho doanh nghiệp của bạn</b><br />
						Trong cuộc cách mạng Công nghiệp 4.0, đứng yên đồng nghĩa với việc bị bỏ lại phía sau. Chuyển đổi sang mô hình Smart Factory không chỉ là một sự nâng cấp công nghệ, đó là một quyết định chiến lược để tái định vị doanh nghiệp, tạo ra lợi thế cạnh tranh bền vững. Đừng để nhà máy của bạn là một trung tâm chi phí. Hãy biến nó thành một tài sản thông minh, linh hoạt và sinh lời vượt trội.
					</Paragraph>
				</div>
			</div>
		</div>
	);
}
