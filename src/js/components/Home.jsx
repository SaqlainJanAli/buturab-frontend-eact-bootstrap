// import { Image } from "@rsuite/icons";
import React from "react";
import { FaBook } from "react-icons/fa";
import {
  Container,
  Col,
  ButtonGroup,
  IconButton,
  Button,
  ButtonToolbar,
  Row,
  Carousel,
  Card,
  CardGroup,
} from "react-bootstrap";
// import TwitterIcon from "@rsuite/icons/legacy/Twitter";
import muslimGirl from "./../../resources/images/muslimGirl.jpg";
import bannerImage_01 from "./../../resources/images/WebsiteBannerButurab.png";
import bannerImage_02 from "./../../resources/images/WebsiteBannerButurab_02.jpg";
const Home = () => {
  return (
    <>
      <Container className="textAlignCenter">
        {/* <Container className="carousal-panel"> */}
        {/* <Carousel autoplay> */}

        {/* <div>
            <div
              className="imgContainer"
              style={{
                background: "linear-gradient(90deg, red 0%, darkred 100%)",
              }}
            >
              <img
                src={muslimGirl}
                alt="BannerImage_01"
                className="imgBgFade"
              />

              <div className="dataContainer urdu-header-center buturab-name-heading">
                <h1>Buturab Online Quran Academy</h1>
                <h1>بوتراب آنلائن قرآن اکیڈمی</h1>
              </div>
            </div>
          </div> */}
        {/* </Carousel> */}
        {/* <Panel className="panelSlider"> */}
        {/* <div class="mask-custom">
          <h3 class="text-white mb-0">Can you see me?</h3>
        </div> */}
        {/* <div className="imgContainer"> */}
        {/* <img src={muslimGirl} alt="BannerImage_01" className="imgBgFade" /> */}
        {/* </div> */}
        {/* <div className="dataContainer">
          <h1 className="header">
            Buturab Online Quran Academy
            <text className="urduFontHeader">بوتراب آنلائن قرآن اکیڈمی</text>
          </h1> */}
        {/* <Button className="roundedButton">Contact us</Button> */}

        {/* <IconButton
            icon={<TwitterIcon />}
            color="cyan"
            appearance="primary"
            circle
          /> */}
        {/* </div> */}
        {/* <h1 className="header">Buturab Online Quran Academy</h1> */}
        {/* </Panel> */}
        {/* </Container> */}

        <Container className="sloganPanel">
          <div>
            <h3>Learn, Love & Live the Quran... Everyday!</h3>
            <p>
              Discover technology-based resources to connect with the Quran in
              these modern times.
            </p>
            <br />
            <br />
            <p className="urdu-para-center">
              جدید دور میں قرآن سے مربوط ہونے کے لیے ٹیکنالوجی پر مبنی وسائل
              دریافت کریں۔
            </p>
          </div>
        </Container>

        <Container className="welcomeStatement">
          <h3>Welcome to Buturab Online Quran Academy. </h3>

          <p>
            Thank you for taking the time to visit Quran Academy.
            <br /> We really appreciate you being here and hope you enjoy
            exploring all the resources we have made available to help you
            engage the Quran daily.
          </p>

          <p className="urdu-para-center">
            قرآن اکیڈمی کو وقت دینے کے لیے شکریہ۔
            <br />
            ہم واقعی آپ کے یہاں آنے کی تعریف کرتے ہیں اور امید کرتے ہیں کہ آپ ان
            تمام وسائل کو تلاش کرنے سے لطف اندوز ہوں گے جو ہم نے روزانہ قرآن سے
            مشغول ہونے میں آپ کی مدد کے لیے دستیاب کرائے ہیں۔
          </p>
        </Container>

        <CardGroup className="mb-4 display-flex justify-center">
          <Row xs={1} sm={1} lg={3} md={2}>
            <Col>
              <Card style={{ width: "20rem", minHeight: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="quranIconPngColored.png"
                  alt="quran pic1"
                />
                <Card.Body>
                  <Card.Title>Quran Reading & Recitation</Card.Title>

                  <Card.Text className="text-align-justify  p-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint distinctio veritatis laudantium ipsam fuga
                    perspiciatis, quasi aliquam magnam eveniet minima illum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "20rem", minHeight: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="quranIconPngColored.png"
                  alt="Quran Picture"
                />
                <Card.Body>
                  <Card.Title>Quran Tafseer</Card.Title>

                  <Card.Text className="text-align-justify p-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint distinctio veritatis laudantium ipsam fuga
                    perspiciatis, quasi aliquam magnam eveniet minima illum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "20rem", minHeight: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="quranIconPngColored.png"
                  alt="quran info"
                />
                <Card.Body>
                  <Card.Title>Fiqhi Masail</Card.Title>
                  <Card.Text className="text-align-justify  p-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint distinctio veritatis laudantium ipsam fuga
                    perspiciatis, quasi aliquam magnam eveniet minima illum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    </>
  );
};

export default Home;
