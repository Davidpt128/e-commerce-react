"use client";
import React from "react";
import backGround from "../../public/img/33333 1.png";
import Image from "next/image";
import { Button, Col, Row, Layout, Card, Carousel } from "antd";
import { ArrowRightOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const heightBg = "100vh";
const { Content } = Layout;
const { Meta } = Card;

export default function Home() {
  return (
    <Content>
      <Row style={{ position: "relative", minHeight: heightBg }}>
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
          <Row style={{ minHeight: heightBg }} justify="center" align="middle">
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
      <div className="container best-sellers" style={{ minHeight: heightBg }}>
        <Row>
          <Col span={12}>
            <p>SHOP OUR BEST-SELLERS</p>
            <h1>Clinically proven advanced botanical formulas.</h1>
          </Col>
          <Col span={6} offset={6}>
            <Button>
              See All Best-Sellers <ArrowRightOutlined />
            </Button>
          </Col>
        </Row>
        <Row className="list-items" gutter={[40, 40]}>
          <Col className="item" span={8}>
            <Card
              hoverable
              // style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<ShoppingCartOutlined key="addCard" />]}
            >
              <h4>64$</h4>
              <br />
              <Meta
                title="Nora Cloud Serum"
                description="Vitalizing Anti-Ageing Serum"
              />
            </Card>
          </Col>
          <Col className="item" span={8}>
            <Card
              hoverable
              // style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<ShoppingCartOutlined key="addCard" />]}
            >
              <h4>64$</h4>
              <br />
              <Meta
                title="Nora Cloud Serum"
                description="Vitalizing Anti-Ageing Serum"
              />{" "}
            </Card>
          </Col>
          <Col className="item" span={8}>
            <Card
              hoverable
              // style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<ShoppingCartOutlined key="addCard" />]}
            >
              <h4>64$</h4>
              <br />
              <Meta
                title="Nora Cloud Serum"
                description="Vitalizing Anti-Ageing Serum"
              />{" "}
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container ads">
        <Row>
          <Col span={12} style={{ backgroundColor: "#7D664F" }}>
            <Row
              style={{ minHeight: heightBg }}
              justify="center"
              align="middle"
            >
              <Col span={12}>
                <h3>Outstanding active ingredients</h3>
                <h1>Curology Ultra Plumping Moisturizer</h1>
                <p>
                  One of our pursued cutting-edge technologies in natural
                  cosmetics is Plant Stem Cells. Extracted from plants, these
                  stem cells are believed to exert anti-aging effects and offer
                  skin protection against environmental stressors.
                </p>
                <Button>
                  See All Best-Sellers <ArrowRightOutlined />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Image
              quality={100}
              fill
              src={backGround}
              alt=""
              style={{
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </div>
      <div className="container category" style={{ minHeight: heightBg }}>
        <Row>
          <Col span={12}>
            <p>SHOP BY CATEGORY</p>
            <h1>Beauty by Nature. Backed by Science. Driven by Purpose.</h1>
          </Col>
          <Col span={6} offset={6}>
            <Button>
              See All Products <ArrowRightOutlined />
            </Button>
          </Col>
        </Row>
        <Row className="list-items" gutter={[40, 40]}>
          <Col className="item" span={8}>
            <Card
              hoverable
              // style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<ShoppingCartOutlined key="addCard" />]}
            >
              <h4>64$</h4>
              <br />
              <Meta
                title="Nora Cloud Serum"
                description="Vitalizing Anti-Ageing Serum"
              />
            </Card>
          </Col>
          <Col className="item" span={8}>
            <Card
              hoverable
              // style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<ShoppingCartOutlined key="addCard" />]}
            >
              <h4>64$</h4>
              <br />
              <Meta
                title="Nora Cloud Serum"
                description="Vitalizing Anti-Ageing Serum"
              />{" "}
            </Card>
          </Col>
          <Col className="item" span={8}>
            <Card
              hoverable
              // style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<ShoppingCartOutlined key="addCard" />]}
            >
              <h4>64$</h4>
              <br />
              <Meta
                title="Nora Cloud Serum"
                description="Vitalizing Anti-Ageing Serum"
              />{" "}
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container blog">
        <Carousel autoplay>
          <div>
            <Row>
              <Col span={12}>
                <Image
                  quality={100}
                  fill
                  src={backGround}
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col span={12} style={{ backgroundColor: "#FFE8C0" }}>
                <Row
                  style={{ minHeight: heightBg }}
                  justify="center"
                  align="middle"
                >
                  <Col span={18}>
                    <h3>Testimonials</h3>
                    <h1>Great! My skin has improved</h1>
                    <p>
                      I'm thrilled with the remarkable improvement in my skin's
                      texture and overall health after using Mio Cosmetic's Ha
                      serum. This product has truly been a game-changer for me.
                      My complexion now boasts an even tone and a healthy
                      radiance that I never thought possible. I eagerly
                      anticipate continuing this transformative journey and
                      preserving the healthy, vibrant skin I now enjoy.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span={12}>
                <Image
                  quality={100}
                  fill
                  src={backGround}
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col span={12} style={{ backgroundColor: "#FFE8C0" }}>
                <Row
                  style={{ minHeight: heightBg }}
                  justify="center"
                  align="middle"
                >
                  <Col span={18}>
                    <h3>Testimonials</h3>
                    <h1>Great! My skin has improved</h1>
                    <p>
                      I'm thrilled with the remarkable improvement in my skin's
                      texture and overall health after using Mio Cosmetic's Ha
                      serum. This product has truly been a game-changer for me.
                      My complexion now boasts an even tone and a healthy
                      radiance that I never thought possible. I eagerly
                      anticipate continuing this transformative journey and
                      preserving the healthy, vibrant skin I now enjoy.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span={12}>
                <Image
                  quality={100}
                  fill
                  src={backGround}
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col span={12} style={{ backgroundColor: "#FFE8C0" }}>
                <Row
                  style={{ minHeight: heightBg }}
                  justify="center"
                  align="middle"
                >
                  <Col span={18}>
                    <h3>Testimonials</h3>
                    <h1>Great! My skin has improved</h1>
                    <p>
                      I'm thrilled with the remarkable improvement in my skin's
                      texture and overall health after using Mio Cosmetic's Ha
                      serum. This product has truly been a game-changer for me.
                      My complexion now boasts an even tone and a healthy
                      radiance that I never thought possible. I eagerly
                      anticipate continuing this transformative journey and
                      preserving the healthy, vibrant skin I now enjoy.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    </Content>
  );
}
