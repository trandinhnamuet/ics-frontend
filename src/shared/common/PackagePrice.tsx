import React from "react";
import { Button, Card } from "antd";

interface PackagePriceProps {
  name: string;
  price: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  traffic: string;
  ip: string;
}

const PackagePrice: React.FC<PackagePriceProps> = ({
  name,
  price,
  cpu,
  ram,
  storage,
  bandwidth,
  traffic,
  ip,
}) => {
  return (
    <Card
      style={{ borderRadius: 8, padding: 0, border: '1px solid #eee', maxWidth: 280 }}
      bodyStyle={{ padding: 0 }}
      bordered
    >
      <div style={{ background: '#f5003c', borderRadius: '8px 8px 0 0', color: '#fff', textAlign: 'center', padding: '24px 8px 8px 8px' }}>
        <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>{name}</div>
        <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 0 }}>{price}</div>
        <div style={{ fontSize: 16, opacity: 0.9, marginBottom: 0 }}>/ Tháng</div>
      </div>
      <div style={{ padding: 24, textAlign: 'center' }}>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>
          <span>{cpu}</span> <span style={{ fontWeight: 400 }}>vCPU</span>
        </div>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>
          <span>{ram}</span> <span style={{ fontWeight: 400 }}>RAM</span>
        </div>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>
          <span>{storage}</span> <span style={{ fontWeight: 400 }}>SSD</span>
        </div>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>
          <span>{bandwidth}</span> <span style={{ fontWeight: 400 }}>Băng thông</span>
        </div>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>
          <span>{traffic}</span> <span style={{ fontWeight: 400 }}>Lưu lượng chuyển tải</span>
        </div>
        <div style={{ fontWeight: 700, marginBottom: 16 }}>
          <span>{ip}</span> <span style={{ fontWeight: 400 }}>IP</span>
        </div>
        <Button
          type="default"
          style={{
            color: '#f5003c',
            borderColor: '#f5003c',
            borderRadius: 10,
            width: '100%',
            marginBottom: 12,
            fontWeight: 500,
            fontSize: 16,
          }}
          onClick={() => {
            // Navigate to register page with package info
            window.dispatchEvent(new CustomEvent('ics-navigate-register', { detail: { package: { name, price, cpu, ram, storage, bandwidth, traffic, ip } } }));
          }}
        >
          ĐĂNG KÝ
        </Button>
        <Button
          type="default"
          style={{
            borderRadius: 10,
            width: '100%',
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          DÙNG THỬ
        </Button>
      </div>
    </Card>
  );
};

export default PackagePrice;
