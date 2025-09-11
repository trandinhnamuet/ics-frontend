import React, { useState } from "react";
import { Menu, Dropdown, Image, Input } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "TRANG CHỦ", highlight: true, path: "/" },
  {
    label: "VỀ CHÚNG TÔI",
    dropdown: true,
    options: [
      { label: "Giới thiệu chung", path: "/gioi-thieu-chung/" },
      { label: "Khách hàng", path: "/khach-hang" },
    ],
    path: "/ve-chung-toi",
  },
  { label: "ĐỐI TÁC", path: "/doi-tac" },
  {
    label: "TƯ VẤN",
    dropdown: true,
    options: [
      { label: "Giải pháp tòa nhà thông minh", path: "/giai-phap-toa-nha-thong-minh" },
      { label: "Giải pháp nhà máy thông minh", path: "/giai-phap-nha-may-thong-minh" },
      { label: "Giải pháp ESG", path: "/giai-phap-esg" },
      { label: "AI SOC", path: "/ai-soc" },
    ],
    path: "/tu-van",
  },
  {
    label: "SẢN PHẨM",
    dropdown: true,
    options: [
      { label: "VietGuard", path: "/vietguard" },
      { label: "Oracle", path: "/oracle" },
      { label: "Dashboard", path: "/smart-dashboard" },
    ],
    path: "/product",
  },
  { label: "TIN TỨC", path: "/tin-tuc" },
  { label: "LIÊN HỆ", path: "/lien-he" },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/tim-kiem?search=${encodeURIComponent(searchText.trim())}`);
    } else {
      navigate("/tim-kiem");
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const renderMenu = (options: { label: string; path?: string }[]) => (
    <Menu>
      {options.map((opt, index) => (
        <Menu.Item key={index} onClick={() => opt.path && navigate(opt.path)}>
          {opt.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "70px",
        backgroundColor: "#f7f7f7",
        borderBottom: "1px solid #eee",
      }}
    >
      {/* Logo */}
      <Image
        src={logo}
        alt="Logo"
        preview={false}
        height={55}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      />

      {/* Menu */}
      <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
        {menuItems.map((item, index) =>
          item.dropdown ? (
            <Dropdown
              key={index}
              overlay={renderMenu(item.options!)}
              trigger={["hover"]}
            >
              <a
                style={{
                  color: "#0070a8",
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: "70px",
                  cursor: "pointer",
                }}
                onClick={() => item.path && navigate(item.path)}
              >
                {item.label} <DownOutlined style={{ fontSize: 10 }} />
              </a>
            </Dropdown>
          ) : (
            <a
              key={index}
              style={{
                color: item.highlight ? "orangered" : "#0070a8",
                fontWeight: item.highlight ? 600 : 500,
                fontSize: 15,
                lineHeight: "70px",
                cursor: item.path ? "pointer" : undefined,
              }}
              onClick={() => item.path && navigate(item.path)}
            >
              {item.label}
            </a>
          )
        )}
      </div>

      {/* Search */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Input
          placeholder="Tìm bài viết..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyDown={handleInputKeyDown}
          style={{ width: 220, borderRadius: 20, fontSize: 15, padding: "4px 16px" }}
          allowClear
        />
        <SearchOutlined
          style={{ fontSize: 20, color: "#0984c7", cursor: "pointer", background: "#fff", borderRadius: "50%", padding: 6, boxShadow: "0 2px 8px #eee" }}
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default Header;
