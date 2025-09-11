import React, { useState } from "react";
import { Card, Input, Select, Collapse, Tabs, Row, Col, Typography, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Title, Text } = Typography;

import { useLocation, useNavigate } from "react-router-dom";

const OracleCloudRegisterPage = () => {
  const [password, setPassword] = useState("");
  const location = useLocation();
  const packageInfo = location.state?.package;
  const [quantity, setQuantity] = useState(1);
  const [months, setMonths] = useState(3);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (packageInfo) {
      // eslint-disable-next-line no-console
      console.log("[ICS] Package info: ", packageInfo);
    }
  }, [packageInfo]);

  // Parse price string to number
  const parsePrice = (priceStr: string | undefined) => {
    if (!priceStr) return 0;
    // Remove non-digit
    const digits = priceStr.replace(/[^\d]/g, "");
    return parseInt(digits, 10) || 0;
  };
  const pricePerMonth = parsePrice(packageInfo?.price);
  const total = pricePerMonth * quantity * months;

  return (
    <div style={{ maxWidth: 1100, margin: "32px auto", padding: 8 }}>
      <Row gutter={32}>
        {/* Left: Main form */}
        <Col xs={24} md={16}>
          <Card style={{ marginBottom: 16 }} bodyStyle={{ padding: 0 }}>
            <div style={{ padding: 24 }}>
              <Title level={5} style={{ marginBottom: 16 }}>Thông tin gói</Title>
              <Row justify="space-between" align="middle">
                <Col>
                  <div style={{ fontWeight: 600, fontSize: 16 }}>{packageInfo?.name || "T1.Base 01"}</div>
                  <div style={{ fontSize: 13, color: '#444', marginTop: 4 }}>
                    CPU: {packageInfo?.cpu || 1}, RAM: {packageInfo?.ram || "1 GB"}, Lưu lượng chuyển tải: {packageInfo?.traffic || "Unlimited"}, Băng thông: {packageInfo?.bandwidth || "300 Mbps"}, IP: {packageInfo?.ip || "1 IP"}, SSD: {packageInfo?.storage || "20 GB"}
                  </div>
                </Col>
                <Col>
                  <div style={{ fontWeight: 600, fontSize: 16, textAlign: 'right' }}>{packageInfo?.price ? `${packageInfo.price}/Tháng` : "129.000đ/Tháng"}</div>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: 24 }}>
                <Col span={8}>
                  <Text strong>Số lượng</Text>
                  <Input min={1} type="number" value={quantity} onChange={e => setQuantity(Math.max(1, Number(e.target.value)))} style={{ marginTop: 4 }} />
                </Col>
                <Col span={8}>
                  <Text strong>Thời gian</Text>
                  <Input min={1} type="number" addonAfter="Tháng" value={months} onChange={e => setMonths(Math.max(1, Number(e.target.value)))} style={{ marginTop: 4 }} />
                </Col>
                <Col span={8}>
                  <Text strong>Khu vực</Text>
                  <Select defaultValue="Miền Nam" style={{ width: '100%', marginTop: 4 }} options={[{ value: 'Miền Nam', label: 'Miền Nam' }, { value: 'Miền Bắc', label: 'Miền Bắc' }]} />
                </Col>
              </Row>
            </div>
          </Card>

          <Collapse defaultActiveKey={["1"]} style={{ marginBottom: 16 }}>
            <Panel header="Chọn tài nguyên, dịch vụ bổ sung" key="1">
              <div style={{ color: '#888' }}>(Nội dung tuỳ chọn, có thể bổ sung sau)</div>
            </Panel>
          </Collapse>

          <Card style={{ marginBottom: 16 }}>
            <Title level={5} style={{ marginBottom: 16 }}>Chọn hệ điều hành</Title>
            <Tabs defaultActiveKey="os" style={{ marginBottom: 16 }}>
              <TabPane tab={<span style={{ color: '#f5003c', fontWeight: 600 }}>HỆ ĐIỀU HÀNH</span>} key="os">
                <Row gutter={16} align="middle">
                  <Col span={6}><Text strong>Máy ảo 1</Text></Col>
                  <Col span={6}>
                    <Select placeholder="Loại" style={{ width: '100%' }} />
                  </Col>
                  <Col span={6}>
                    <Select placeholder="Phiên bản" style={{ width: '100%' }} />
                  </Col>
                  <Col span={6}>
                    <Select placeholder="Hệ điều hành" style={{ width: '100%' }} />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span style={{ color: '#888', fontWeight: 600 }}>ỨNG DỤNG</span>} key="app" disabled />
            </Tabs>
          </Card>

          <Card>
            <Text strong>Mật khẩu*</Text>
            <Input.Password
              value={password}
              onChange={e => setPassword(e.target.value)}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              style={{ marginTop: 8, marginBottom: 8 }}
            />
            <div style={{ color: '#888', fontSize: 13 }}>
              Mật khẩu sử dụng cho các VM cần có độ dài trên 8 ký tự, gồm chữ thường, in hoa, số và ký tự đặc biệt !@#$&*?
            </div>
          </Card>
        </Col>

        {/* Right: Service info & payment */}
        <Col xs={24} md={8}>
          <Card style={{ marginBottom: 24, background: '#f8f8f8', border: '1px solid #eee', position: 'sticky', top: 32 }}>
            <Title level={5} style={{ marginBottom: 16, color: '#888', fontWeight: 400 }}>Thông tin dịch vụ</Title>
            
            {/* Package name and price */}
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 4 }}>{packageInfo?.name || "T1.Base 01"}</div>
            <div style={{ fontWeight: 600, fontSize: 18, color: '#333', marginBottom: 8 }}>{packageInfo?.price || "129.000đ"}</div>
            
            {/* Package specs */}
            <div style={{ fontSize: 13, color: '#666', marginBottom: 16, lineHeight: 1.4 }}>
              CPU: {packageInfo?.cpu || 1}, RAM: {packageInfo?.ram || "1 GB"}, Lưu lượng chuyển tải: {packageInfo?.traffic || "Unlimited"}, Băng thông: {packageInfo?.bandwidth || "300 Mbps"}, IP: {packageInfo?.ip || "1 IP"}, SSD: {packageInfo?.storage || "20 GB"}
            </div>
            
            {/* Light separator */}
            <div style={{ borderTop: '1px solid #eee', marginBottom: 16 }}></div>
            
            {/* Quantity and duration */}
            <div style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>Số lượng: {quantity}</div>
            <div style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>Thời gian: {months} Tháng</div>
            
            {/* Pricing breakdown */}
            <div style={{ borderTop: '1px solid #333', paddingTop: 12 }}>
              <Row justify="space-between" style={{ marginBottom: 8 }}>
                <Col><span style={{ fontSize: 14, color: '#666' }}>Phí khởi tạo</span></Col>
                <Col><span style={{ fontSize: 14, color: '#666' }}>0 đ</span></Col>
              </Row>
              
              <Row justify="space-between" style={{ marginBottom: 12 }}>
                <Col><span style={{ fontSize: 14, color: '#666' }}>Tiền chưa VAT</span></Col>
                <Col><span style={{ fontSize: 14, color: '#666' }}>{total.toLocaleString('vi-VN')} đ</span></Col>
              </Row>
              
              <Row justify="space-between" style={{ marginBottom: 20, borderTop: '1px solid #333', paddingTop: 12 }}>
                <Col><span style={{ fontSize: 16, fontWeight: 600, color: '#333' }}>Tổng</span></Col>
                <Col><span style={{ fontSize: 18, fontWeight: 700, color: '#f5003c' }}>{Math.round(total * 1.1).toLocaleString('vi-VN')} đ</span></Col>
              </Row>
            </div>
            
            {/* Buttons */}
            <Row gutter={8}>
              <Col span={10}>
                <Button
                  style={{ width: '100%', borderRadius: 6, fontSize: 14, height: 40, border: '1px solid #ddd', color: '#666' }}
                >
                  Quay lại
                </Button>
              </Col>
              <Col span={14}>
                <Button
                  type="primary"
                  style={{ width: '100%', background: '#f5003c', borderColor: '#f5003c', borderRadius: 6, fontSize: 14, fontWeight: 600, height: 40 }}
                  onClick={() => {
                    navigate('/cloud-payment', {
                      state: {
                        packageInfo,
                        quantity,
                        months,
                        total: Math.round(total * 1.1),
                      },
                    });
                  }}
                >
                  MUA NGAY
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OracleCloudRegisterPage;
