import React from "react";
import { Input, Button } from "antd";

const products = [
  { name: "VietGuard", link: "#" },
  { name: "Oracle", link: "/cloud-sale" },
  { name: "Dashboard", link: "#" },
];

const SideProduct: React.FC = () => {
  return (
    <div style={{ maxWidth: 320, margin: '0 auto', position: 'sticky', top: '20px', alignSelf: 'flex-start' }}>
      {/* SẢN PHẨM */}
      <div style={{ background: '#1793d1', color: '#fff', borderRadius: 6, textAlign: 'center', fontWeight: 700, fontSize: 22, padding: '10px 0', marginBottom: 0 }}>
        SẢN PHẨM
      </div>
      <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderTop: 'none', borderRadius: '0 0 6px 6px', marginBottom: 16 }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {products.map((p) => (
            <li key={p.name} style={{ borderBottom: '1px dotted #ccc' }}>
              <a
                href={p.link}
                style={{
                  display: 'block',
                  color: '#1793d1',
                  fontWeight: 500,
                  fontSize: 16,
                  padding: '10px 0 10px 18px',
                  textDecoration: 'none',
                }}
              >
                <span style={{ fontSize: 13, marginRight: 6 }}>▩</span> {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* TIN TỨC – TUYỂN DỤNG */}
      <div style={{ color: '#f37021', fontWeight: 700, fontSize: 18, textAlign: 'center', margin: '24px 0 8px 0', letterSpacing: 0.5 }}>
        TIN TỨC – TUYỂN DỤNG
      </div>
      <div style={{ borderBottom: '2px solid #1793d1', marginBottom: 16 }} />

      {/* Leave a message */}
      <div style={{ background: '#27aae1', borderRadius: 6, padding: 16, color: '#fff' }}>
        <div style={{ fontWeight: 500, fontSize: 16, marginBottom: 10 }}>Leave a message for us...</div>
        <Input
          placeholder="Email address..."
          style={{ marginBottom: 10, background: '#fff', border: 'none', color: '#222' }}
        />
        <Input.TextArea
          placeholder="Content..."
          rows={4}
          style={{ marginBottom: 14, background: '#fff', border: 'none', color: '#222' }}
        />
        <Button
          type="default"
          style={{
            width: '100%',
            background: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          SEND MESSAGE
        </Button>
      </div>
    </div>
  );
};

export default SideProduct;
