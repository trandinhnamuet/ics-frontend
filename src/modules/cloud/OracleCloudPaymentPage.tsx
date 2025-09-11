
import React, { useEffect, useState } from "react";
import { Card, Typography, Row, Col, Alert, Button, Spin, Progress } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

// VNPAY config
const vnp_TmnCode = "2N7YHXIZ";
const vnp_HashSecret = "OV22KRXMF12MAO3QWH6O6BXAU7JTTZ22";
const vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";

function formatCurrency(n: number) {
	return n.toLocaleString("vi-VN") + " đ";
}

function buildVnpayUrl({ amount, orderId, orderInfo, returnUrl }: { amount: number; orderId: string; orderInfo: string; returnUrl: string }) {
	// Only for demo: build a simple url, not a real signed VNPAY url
	// In production, you must sign params with vnp_HashSecret on backend!
	const params = new URLSearchParams({
		vnp_Version: "2.1.0",
		vnp_Command: "pay",
		vnp_TmnCode,
		vnp_Amount: String(amount * 100), // VNPAY expects amount * 100
		vnp_CurrCode: "VND",
		vnp_TxnRef: orderId,
		vnp_OrderInfo: orderInfo,
		vnp_OrderType: "other",
		vnp_Locale: "vn",
		vnp_ReturnUrl: returnUrl,
	});
	return `${vnp_Url}?${params.toString()}`;
}

const OracleCloudPaymentPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { packageInfo, quantity, months, total } = location.state || {};
	const [status, setStatus] = useState<'pending'|'success'|'fail'>("pending");
	const [checking, setChecking] = useState(false);

	// Fake orderId for demo
	const orderId = React.useMemo(() => `ICS${Date.now()}`, []);
	const orderInfo = packageInfo ? `${packageInfo.name} x${quantity} - ${months} tháng` : "Gói Oracle";
	const returnUrl = window.location.origin + "/cloud-payment";
	const vnpayUrl = buildVnpayUrl({ amount: total || 0, orderId, orderInfo, returnUrl });

	// Simulate payment status polling (in real app, poll backend or listen to VNPAY return)
	useEffect(() => {
		if (location.search.includes("vnp_ResponseCode=00")) {
			setStatus("success");
		} else if (location.search.includes("vnp_ResponseCode=")) {
			setStatus("fail");
		}
	}, [location.search]);

	// QR code API (use vnpay url as data)
	const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(vnpayUrl)}`;

	return (
		<div style={{ maxWidth: 600, margin: "40px auto", padding: 8 }}>
			<Card style={{ marginBottom: 24, border: '1px solid #eee', background: '#f8f8f8' }}>
				<Title level={4} style={{ color: '#f5003c', marginBottom: 8 }}>Thanh toán dịch vụ Oracle Cloud</Title>
				<Row gutter={16} align="middle">
					<Col span={14}>
						<div style={{ fontWeight: 600, fontSize: 18 }}>{packageInfo?.name || "Gói Oracle"}</div>
						<div style={{ fontSize: 15, color: '#444', margin: '8px 0' }}>
							{quantity} x {months} tháng x {packageInfo?.price || "129.000đ"}
						</div>
						<div style={{ fontWeight: 700, fontSize: 22, color: '#f5003c', margin: '12px 0' }}>
							Tổng cộng: {formatCurrency(total || 0)}
						</div>
						<Button type="primary" size="large" style={{ background: '#f5003c', borderColor: '#f5003c', fontWeight: 600, borderRadius: 8, marginTop: 8 }} onClick={() => window.open(vnpayUrl, '_blank')}>Thanh toán qua VNPAY</Button>
					</Col>
					<Col span={10} style={{ textAlign: 'center' }}>
						<img src={qrUrl} alt="QR thanh toán VNPAY" style={{ width: 180, height: 180, marginBottom: 8, border: '1px solid #eee', background: '#fff', borderRadius: 8 }} />
						<div style={{ fontSize: 13, color: '#888' }}>Quét QR bằng app ngân hàng/VNPAY</div>
					</Col>
				</Row>
			</Card>

			{/* Thanh trạng thái */}
			<Card style={{ marginBottom: 24, border: '1px solid #eee' }}>
				<Title level={5} style={{ marginBottom: 12 }}>Trạng thái thanh toán</Title>
				{status === 'pending' && (
					<div>
						<Spin /> <span style={{ color: '#888', marginLeft: 8 }}>Chờ thanh toán...</span>
						<div style={{ marginTop: 12 }}>
							<Progress percent={50} status="active" showInfo={false} />
						</div>
					</div>
				)}
				{status === 'success' && (
					<Alert message="Thanh toán thành công!" type="success" showIcon />
				)}
				{status === 'fail' && (
					<Alert message="Thanh toán thất bại hoặc bị huỷ." type="error" showIcon />
				)}
			</Card>

			<div style={{ textAlign: 'center' }}>
				<Button onClick={() => navigate('/cloud-sale')} style={{ borderRadius: 8 }}>Quay lại trang bảng giá</Button>
			</div>
		</div>
	);
};

export default OracleCloudPaymentPage;
