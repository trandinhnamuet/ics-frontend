import React, { useState } from "react";
import PackagePrice from "../../shared/common/PackagePrice";
import { useNavigate } from "react-router-dom";
import SideProduct from "../../shared/components/SideProduct";

const packages = [
  {
    name: "T1.BASE 01",
    price: "129.000 đ",
    cpu: "1",
    ram: "1 GB",
    storage: "20 GB",
    bandwidth: "300 Mbps",
    traffic: "Unlimited",
    ip: "1 IP",
  },
  {
    name: "T1.BASE 02",
    price: "299.000 đ",
    cpu: "2",
    ram: "2 GB",
    storage: "20 GB",
    bandwidth: "300 Mbps",
    traffic: "Unlimited",
    ip: "1 IP",
  },
  {
    name: "T1.BASE 03",
    price: "399.000 đ",
    cpu: "2",
    ram: "4 GB",
    storage: "20 GB",
    bandwidth: "300 Mbps",
    traffic: "Unlimited",
    ip: "1 IP",
  },
  {
    name: "T1.BASE 04",
    price: "599.000 đ",
    cpu: "4",
    ram: "4 GB",
    storage: "40 GB",
    bandwidth: "300 Mbps",
    traffic: "Unlimited",
    ip: "1 IP",
  },
  {
    name: "T1.BASE 05",
    price: "799.000 đ",
    cpu: "4",
    ram: "8 GB",
    storage: "80 GB",
    bandwidth: "500 Mbps",
    traffic: "Unlimited",
    ip: "2 IP",
  },
  {
    name: "T1.BASE 06",
    price: "999.000 đ",
    cpu: "8",
    ram: "16 GB",
    storage: "160 GB",
    bandwidth: "1 Gbps",
    traffic: "Unlimited",
    ip: "4 IP",
  },
];


const OracleCloudSalePage = () => {
  const [activePlan, setActivePlan] = useState('saving');
  const navigate = useNavigate();

  // Listen for ĐĂNG KÝ click from PackagePrice
  React.useEffect(() => {
    const handler = (e: any) => {
      if (e.detail && e.detail.package) {
        navigate('/cloud-register', { state: { package: e.detail.package } });
      }
    };
    window.addEventListener('ics-navigate-register', handler);
    return () => window.removeEventListener('ics-navigate-register', handler);
  }, [navigate]);

  return (
    <div>
      <div style={{
        width: '100%',
        minHeight: 220,
        background: 'url(https://icss.com.vn/wp-content/uploads/2018/09/bg-gioi-thieu.jpg) center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0
      }}>
        <h1 style={{ color: '#fff', fontSize: 80, fontWeight: 400, textShadow: '0 2px 16px #0008', margin: 0, letterSpacing: 2 }}>Oracle</h1>
      </div>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: 24, display: 'flex', gap: 32 }}>
        <div style={{ flex: '0 0 320px', minWidth: 260 }}>
          <SideProduct />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ background: '#fff', borderRadius: 8, padding: 24, marginBottom: 32, boxShadow: '0 2px 8px #0001' }}>
            <h2 style={{ color: '#f5003c', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Oracle – Ứng dụng đám mây và dịch vụ nền tảng tích hợp</h2>
            <div style={{ color: '#222', fontSize: 16, lineHeight: 1.7 }}>
              Trong hành trình chuyển đổi số, việc sở hữu một nền tảng công nghệ mạnh mẽ, ổn định và có khả năng mở rộng là yếu tố sống còn. Oracle, với vị thế là giải pháp công nghệ hàng đầu thế giới, chính là xương sống cho hoạt động của hàng ngàn tập đoàn lớn, giúp họ vận hành hiệu quả, bảo mật dữ liệu và bứt phá trên thị trường.<br /><br />
              Là đối tác chính thức của Oracle tại Việt Nam, ICS thấu hiểu sâu sắc cả về sức mạnh công nghệ lẫn những trăn trở của doanh nghiệp khi quyết định đầu tư. Chúng tôi biết rằng Oracle cung cấp một bộ giải pháp toàn diện để giải quyết các bài toán phức tạp nhất, từ quản trị cơ sở dữ liệu (Database), hạ tầng đám mây (OCI) cho đến các ứng dụng quản trị doanh nghiệp (ERP). Tuy nhiên, chúng tôi cũng hiểu rằng rào cản lớn nhất khiến nhiều doanh nghiệp chần chừ chính là chi phí bản quyền và sự phức tạp trong việc lựa chọn đúng cấu hình.<br /><br />
              Đó là lý do ICS mang đến một giải pháp “Win-Win”. Chúng tôi là cây cầu nối giúp doanh nghiệp Việt Nam tiếp cận công nghệ đỉnh cao của Oracle với một chiến lược đầu tư thông minh và hiệu quả nhất.<br /><br />
              Khi mua bản quyền Oracle qua ICS, bạn không chỉ mua một sản phẩm, bạn nhận được một giải pháp toàn diện:<br /><br />
              <b>Mức Chiết Khấu Tốt Nhất Thị Trường:</b> Với vị thế là đối tác chiến lược, chúng tôi mang đến cho bạn một chính sách giá ưu đãi độc quyền. Chúng tôi cam kết giúp bạn tối ưu hóa ngân sách với mức chiết khấu cạnh tranh nhất.<br />
              <b>Tư Vấn Chuyên Sâu & Miễn Phí:</b> Đội ngũ chuyên gia của chúng tôi sẽ phân tích kỹ lưỡng nhu cầu của bạn để xây dựng một cấu hình tối ưu. Chúng tôi đảm bảo bạn chỉ trả tiền cho những gì bạn thực sự cần, tránh tuyệt đối tình trạng lãng phí hay đầu tư không hiệu quả.<br />
              <b>Hỗ Trợ Kỹ Thuật và Triển Khai Tận Tình:</b> Sự đồng hành của ICS kéo dài xuyên suốt quá trình từ triển khai, tích hợp hệ thống cho đến hỗ trợ kỹ thuật sau này, giúp doanh nghiệp của bạn yên tâm vận hành và khai thác tối đa giá trị của Oracle.<br /><br />
              Đừng để chi phí trở thành rào cản trên con đường chuyển đổi số của bạn. Hãy để khoản đầu tư vào Oracle trở thành một quyết định chiến lược và thông thái.<br /><br />
              <b>Liên hệ với ICS ngay hôm nay để nhận được báo giá miễn phí và chính sách ưu đãi độc quyền dành riêng cho doanh nghiệp của bạn!</b>
            </div>

            {/* Bảng giá dịch vụ */}
            <div style={{ textAlign: 'center', margin: '48px 0 32px 0' }}>
              <h2 style={{ color: '#555', fontWeight: 700, fontSize: 40, marginBottom: 32, marginTop: 0 }}>Bảng giá dịch vụ</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 32, maxWidth: 800, margin: '0 auto' }}>
                {[
                  {
                    key: 'saving',
                    title: 'Saving plan',
                    desc: 'Được thiết kế phù hợp với nhu cầu sử dụng máy chủ liên tục 24/7 - thanh toán trọn gói theo tháng sử dụng',
                  },
                  {
                    key: 'payg',
                    title: 'Pay as you go',
                    desc: 'Phù hợp nhu cầu sử dụng máy chủ linh hoạt - thanh toán theo giờ sử dụng',
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => setActivePlan(item.key)}
                    style={{
                      border: `2px solid ${activePlan === item.key ? '#f5003c' : '#eee'}`,
                      borderRadius: 8,
                      padding: '24px 32px',
                      flex: 1,
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      background: '#fff',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: activePlan === item.key ? '0 0 8px #f5003c33' : '0 2px 4px #0001',
                    }}
                  >
                    <span style={{ fontSize: 54, color: activePlan === item.key ? '#f5003c' : '#888', marginRight: 18, display: 'flex', alignItems: 'center' }}>
                      <svg width="54" height="54" fill="none" viewBox="0 0 54 54">
                        <circle cx="27" cy="27" r="25" stroke={activePlan === item.key ? '#f5003c' : '#888'} strokeWidth="3"/>
                        <path d="M27 13v14l10 6" stroke={activePlan === item.key ? '#f5003c' : '#888'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M27 6a21 21 0 1 0 21 21" stroke={activePlan === item.key ? '#f5003c' : '#888'} strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <div>
                      <div style={{ color: activePlan === item.key ? '#f5003c' : '#222', fontWeight: 700, fontSize: 24, marginBottom: 8 }}>
                        {item.title}
                      </div>
                      <div style={{ color: activePlan === item.key ? '#f5003c' : '#666', fontSize: 15, fontWeight: 400 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {packages.map((pkg) => (
              <PackagePrice key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracleCloudSalePage;
