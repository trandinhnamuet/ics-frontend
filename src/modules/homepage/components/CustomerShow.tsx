import { Carousel, Row, Col, Typography } from "antd";

const customerLogos = [
  "https://icss.com.vn/wp-content/uploads/2018/09/LOGO1.jpg",
  "https://icss.com.vn/wp-content/uploads/2018/09/LOGO-BO-KHOA-HOC-VA-CONG-NGHE.jpg",
  "https://icss.com.vn/wp-content/uploads/2018/09/logo-bo-tai-nguyen-moi-turong.jpg",
  "https://icss.com.vn/wp-content/uploads/2018/09/LOGO-EVN.jpg",
  "https://icss.com.vn/wp-content/uploads/2018/09/logo-hmm.jpg",
  "https://icss.com.vn/wp-content/uploads/2018/09/logo-ademax.jpg",
  "https://icss.com.vn/wp-content/uploads/2018/09/logo-bo-y-te-1.jpg",
];


export default function CustomerShow() {
  return (
    <div style={{ width: '100%', background: '#ededed', padding: '32px 0' }}>
      <Row justify="center">
        <Col style={{ width: '100%', maxWidth: 1200 }}>
          <Typography.Title
            level={2}
            style={{
              color: '#ff6600',
              fontWeight: 600,
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            KHÁCH HÀNG CỦA CHÚNG TÔI
          </Typography.Title>
          <Carousel
            dots={false}
            arrows
            infinite
            autoplay
            speed={1200}
            slidesToShow={6}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1200, settings: { slidesToShow: 4 } },
              { breakpoint: 900, settings: { slidesToShow: 3 } },
              { breakpoint: 600, settings: { slidesToShow: 2 } },
            ]}
            className="customer-carousel"
          >
            {customerLogos.map((logo, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80 }}>
                <img
                  src={logo}
                  alt="logo khach hang"
                  style={{ height: 50, objectFit: 'contain', filter: 'grayscale(1)', margin: '0 auto' }}
                  draggable={false}
                />
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}
