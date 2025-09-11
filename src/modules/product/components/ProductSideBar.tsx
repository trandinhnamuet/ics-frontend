import { Link } from "react-router-dom";
import { Typography } from "antd";
import ContactForm from "../../../shared/components/ContactForm";

const { Text } = Typography;

export default function ProductSideBar() {
	return (
		<div style={{ width: "300px", flexShrink: 0 }}>
			{/* Navigation Links */}
			<div
				style={{
					background: "#0984c7",
					borderRadius: "6px",
					marginBottom: "20px",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						background: "#0984c7",
						color: "#fff",
						padding: "12px 16px",
						fontWeight: "600",
						fontSize: "14px",
						textAlign: "center",
					}}
				>
					DỊCH VỤ
				</div>
				<div style={{ background: "#f8f9fa" }}>
					<Link
						to="/oracle"
						style={{
							display: "block",
							padding: "10px 16px",
							color: "#0984c7",
							textDecoration: "none",
							borderBottom: "1px solid #e9ecef",
							fontSize: "14px",
						}}
					>
						⊕ Oracle
					</Link>
					<Link
						to="/vietguard"
						style={{
							display: "block",
							padding: "10px 16px",
							color: "#0984c7",
							textDecoration: "none",
							borderBottom: "1px solid #e9ecef",
							fontSize: "14px",
						}}
					>
						⊕ Viet Guard
					</Link>
					<Link
						to="/smart-dashboard"
						style={{
							display: "block",
							padding: "10px 16px",
							color: "#0984c7",
							textDecoration: "none",
							fontSize: "14px",
						}}
					>
						⊕ Dashboard
					</Link>
				</div>
			</div>

			{/* Recruitment Section */}
			<div style={{ marginBottom: "20px" }}>
				<Text
					style={{
						display: "block",
						background: "#ff6b35",
						color: "#fff",
						padding: "8px 12px",
						fontSize: "14px",
						fontWeight: "600",
						borderRadius: "4px",
					}}
				>
					TIN TỨC - TUYỂN DỤNG
				</Text>
			</div>

			{/* Contact Form */}
			<ContactForm />
		</div>
	);
}
