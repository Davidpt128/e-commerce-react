import React from "react";
import backGround from "../../public/img/33333 1.png";
import Image from "next/image";
import { Button, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const heightBackground = "100vh";

export default function Home() {
  return (
    <Row style={{ position: "relative", minHeight: heightBackground }}>
      <Image
        alt="Mountains"
        src={backGround}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Col span={12} offset={12}>
        <Row
          style={{ minHeight: heightBackground }}
          justify="center"
          align="middle"
        >
          <Col span={12}>
            <h3>RESULTS YOU CAN FEEL</h3>
            <h1>Wake up your skin</h1>
            <p>
              Concentrated in each drop of our award-winning range, our Mio
              teaches skin to slow down signs of aging and find its
              healthy-looking state for good.
            </p>
            <Button>
              Explore The Collection <ArrowRightOutlined />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
