import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Col, Divider, Row } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { Footer } from "antd/es/layout/layout";

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export default function AppFooter() {
  return (
    <Footer style={{ backgroundColor: "#ffffff" }}>
      <Row>
        <Col span={12}>
          <h1>Subscribe now to get 10% off</h1>
          <p>
            Be the first to know about our new arrivals and exclusive offers.
          </p>
        </Col>
        <Col span={6} offset={6}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={8}>
          <h3>Giới thiệu</h3>
          <p>
            Chúng tôi là một công ty e-commerce hàng đầu Việt Nam, cung cấp các
            sản phẩm chất lượng cao với giá cả hợp lý. Chúng tôi luôn nỗ lực để
            mang lại trải nghiệm mua sắm tốt nhất cho khách hàng của mình.
          </p>
        </Col>
        <Col span={8}>
          <h3>Liên hệ</h3>
          <p>Địa chỉ: Số 123, Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh</p>
          <p>Điện thoại: 0987654321</p>
          <p>Email: info@ecommerce.com</p>
        </Col>
        <Col span={8}>
          <h3>Theo dõi chúng tôi</h3>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <FacebookOutlined style={{ fontSize: "24px", color: "#3b5998" }} />
            <TwitterOutlined style={{ fontSize: "24px", color: "#1da1f2" }} />
            <InstagramOutlined style={{ fontSize: "24px", color: "#c13584" }} />
            <YoutubeOutlined style={{ fontSize: "24px", color: "#ff0000" }} />
          </div>
        </Col>
      </Row>
      <Divider />
      <p style={{ textAlign: "center" }}>
        © 2023 E-commerce. All rights reserved.
      </p>
    </Footer>
  );
}
