import { Card, Input, Button, Typography, message } from "antd";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [messageApi, contextHolder] = message.useMessage();
  const [email, setEmail] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [sending, setSending] = useState(false);

  const SERVICE_ID = "service_4aayh1c";
  const TEMPLATE_ID = "template_w9b46kh";
  const PUBLIC_KEY = "3X5-eVP4db-WUhSm7";

  const handleSend = async () => {
    if (!email || !messageContent) {
      messageApi.error("Vui lòng nhập email và nội dung!");
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: email,
          to_email: "info@icss.com.vn",
          message: `Mail từ ${email}\n\n${messageContent}`,
        },
        PUBLIC_KEY
      );
      messageApi.success("Gửi tin nhắn thành công!");
      setEmail("");
      setMessageContent("");
    } catch (err) {
      messageApi.error("Gửi tin nhắn thất bại!");
    }
    setSending(false);
  };

  return (
    <>
      {contextHolder}
      <Card
        style={{ background: "#0984c7", color: "#fff", width: 300, borderRadius: 6 }}
        bodyStyle={{ padding: 16 }}
      >
        <Typography.Text style={{ color: "#fff", fontWeight: 500, fontSize: 15 }}>
          Để lại lời nhắn cho chúng tôi
        </Typography.Text>
        <Input
          placeholder="Địa chỉ email..."
          style={{ marginTop: 12, marginBottom: 12, background: "#fff" }}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input.TextArea
          placeholder="Nội dung..."
          style={{ marginBottom: 12, background: "#fff" }}
          rows={4}
          value={messageContent}
          onChange={e => setMessageContent(e.target.value)}
        />
        <Button
          type="default"
          style={{ width: "100%", color: "#000", borderColor: "#fff", fontWeight: 500 }}
          loading={sending}
          onClick={handleSend}
        >
          GỬI TIN NHẮN
        </Button>
      </Card>
    </>
  );
}
