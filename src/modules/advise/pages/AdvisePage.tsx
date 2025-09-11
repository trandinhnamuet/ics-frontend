import { Typography } from "antd";
import SolutionSideBar from "../components/SolutionSideBar";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const solutions = [
	{
		img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-4-3.jpg",
		title: "Giải pháp bảo vệ tích hợp AI",
		link: "/ai-soc",
	},
	{
		img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-5-1.jpg",
		title: "Tư vấn ESG",
		link: "/giai-phap-esg/",
	},
	{
		img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-2-2.jpg",
		title: "Giải pháp tòa nhà thông minh",
		link: "/giai-phap-toa-nha-thong-minh/",
	},
	{
		img: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-3-2.jpg",
		title: "Giải pháp nhà máy thông minh",
		link: "/giai-phap-nha-may-thong-minh/",
	},
];

export default function AdvisePage() {
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
					TƯ VẤN
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
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: "30px",
							alignItems: "end",
						}}
					>
						{solutions.map((sol, idx) => (
							<div key={idx} style={{ textAlign: "center" }}>
								<Link to={sol.link} style={{ textDecoration: "none" }}>
									<img
										src={sol.img}
										alt={sol.title}
										style={{
											width: "100%",
											maxWidth: "400px",
											height: "180px",
											objectFit: "cover",
											borderRadius: "8px",
											marginBottom: "8px",
											boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
											transition: "transform 0.2s",
										}}
									/>
									<Text
										style={{
											fontWeight: 500,
											fontSize: "15px",
											color: "#222",
											display: "block",
											marginTop: "8px",
										}}
									>
										{sol.title}
									</Text>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
