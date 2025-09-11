import { Typography } from "antd";
import SideIntro from "../../about-us/components/SideIntro";

const { Title, Paragraph } = Typography;


export default function ContactPage() {
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
					LIÊN HỆ
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
				<SideIntro />
				{/* Right Content */}
				<div style={{ flex: 1 }}>
					<Title level={3} style={{ color: "#0984c7" }}>
						CÔNG TY CỔ PHẦN AN NINH MẠNG QUỐC TẾ – ICS
					</Title>
					<Paragraph style={{ fontSize: "16px", marginBottom: "12px" }}>
						<b>Địa chỉ:</b> <a href="https://www.google.com/maps?ll=20.979021,105.816183&z=16&t=m&hl=vi&gl=US&mapclient=embed&cid=12624892976792149208" target="_blank" rel="noopener noreferrer">TT3-5 Khu đô thị Đại Kim mới, Định Công, Hà Nội</a>
						<br />
						<b>Điện thoại:</b> 0931.487.231  – <b>Hotline:</b> 0931.487.231
						<br />
						<b>E-mail:</b> <a href="mailto:info@icss.com.vn">info@icss.com.vn</a> – <a href="https://www.icss.com.vn" target="_blank" rel="noopener noreferrer">www.icss.com.vn</a>
					</Paragraph>
					<div style={{ marginTop: "24px" }}>
						<p>
							<iframe
								style={{ border: 0 }}
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.311085903712!2d105.81131271037547!3d20.980163589366107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad001d0b43d3%3A0xaf34a145d9051cd8!2sICSS!5e0!3m2!1svi!2s!4v1748080621408!5m2!1svi!2s"
								width="450"
								height="450"
								allowFullScreen
								title="Google Map ICSS"
							></iframe>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
