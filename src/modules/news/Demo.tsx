
import { useEffect, useState } from "react";
import { Card, Typography, Spin } from "antd";

const { Title } = Typography;

const POST_URL = "https://icss.com.vn/wp-json/wp/v2/posts/2082";

export default function Demo() {
	const [post, setPost] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		fetch(POST_URL)
			.then((res) => {
				if (!res.ok) throw new Error("Không thể tải bài viết");
				return res.json();
			})
			.then((data) => {
				setPost(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) return <div style={{ textAlign: 'center', margin: 48 }}><Spin size="large" /></div>;
	if (error) return <div style={{ color: 'red', textAlign: 'center', margin: 48 }}>{error}</div>;
	if (!post) return null;

	return (
		<div style={{ maxWidth: 900, margin: '32px auto', padding: 16 }}>
			<Card style={{ marginBottom: 24, border: '1px solid #eee' }}>
				<Title level={2} style={{ color: '#f5003c', fontWeight: 700, marginBottom: 8 }}>
					{post.title?.rendered}
				</Title>
				<div style={{ color: '#888', fontSize: 15, marginBottom: 24 }}>
					{new Date(post.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}
				</div>
				<div
					className="post-content"
					style={{ fontSize: 16, color: '#222', lineHeight: 1.7 }}
					dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
				/>
			</Card>
		</div>
	);
}
