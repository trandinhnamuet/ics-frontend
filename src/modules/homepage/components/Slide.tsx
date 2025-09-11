import { Carousel } from "antd";
import "antd/dist/reset.css";
import "./slide-custom-arrow.css";

const images = [
	"https://icss.com.vn/wp-content/uploads/2025/08/Gemini_Generated_Image_itzj9witzj9witzj-scaled.png",
	"https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-22-1-1024x576.jpg",
	"https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-8-1-1024x335.jpg",
];

export default function Slide() {
	return (
		<div style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}>
			<Carousel dots arrows infinite autoplay draggable style={{ width: "100vw" }}>
				{images.map((src, idx) => (
					<div key={idx} style={{ width: "100vw", height: 480, display: "flex", alignItems: "center", justifyContent: "center", background: "#222" }}>
						<img
							src={src}
							alt={`slide-${idx + 1}`}
							style={{ width: "100vw", height: 480, objectFit: "cover", margin: 0 }}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
}
