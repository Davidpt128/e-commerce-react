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
      <Row justify={"space-between"}>
        <Col>
          <h3>COMPANY</h3>
          <p>Product</p>
          <p>About us</p>
          <p>Contact</p>
          <p>Blog</p>
        </Col>
        <Col>
          <h3>INFORMATION</h3>
          <p>Track order</p>
          <p>Delivery and Returns</p>
          <p>Size guide</p>
          <p>Warranty</p>
        </Col>
        <Col>
          <h3>EXPLORE MORE</h3>
          <p>The Story</p>
          <p>Work with Us</p>
          <p>Corporate New</p>
          <p>Investors</p>
        </Col>
        <Col>
          <h3>YOU MAY NEED</h3>
          <p>Secure Payment</p>
          <p>Privacy Policy</p>
          <p>Team of Use</p>
          <p>Archived Products</p>
        </Col>
        <Col>
          <h3>Social</h3>
          <div>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </Col>
      </Row>
    </Footer>
  );
}
