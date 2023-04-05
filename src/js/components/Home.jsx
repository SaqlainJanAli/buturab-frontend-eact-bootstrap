// import { Image } from "@rsuite/icons";
import React from "react";
import { FaBook, FaQuran } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
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
import WhyButurab from "./services/WhyButurab";
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/vecteurs-libre/fond-cercles-dans-tons-sombres_60389-166.jpg"
            alt="BannerImage_01"
            height="500px"
            width="100%"
          />

          <Carousel.Caption className="text-center buturab-name-heading ">
            <h1 className="font-italic">Buturab Online Quran Academy</h1>
            <h1 className="urdu-header-center">بوتراب آنلائن قرآن اکیڈمی</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/premium-vector/abstract-particle-structure-background_532781-693.jpg"
            alt="BannerImage_02"
            height="500px"
            width="100%"
          />

          <Carousel.Caption className="text-center buturab-name-heading ">
            <h1>Buturab Online Quran Academy</h1>
            <h1 className="urdu-header-center">بوتراب آنلائن قرآن اکیڈمی</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="textAlignCenter">
        <div className="sloganPanel">
          <Container>
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
          </Container>
        </div>

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
        <Container>
          <CardGroup className="mb-4 display-flex justify-center">
            <Row xs={1} sm={1} lg={3} md={2}>
              <Col>
                <Card style={{ width: "20rem", minHeight: "25rem" }}>
                  {/* <Card.Img
                    variant="top"
                    // src="quranIconPngColored.png"
                    // background={
                    //   <FaQuran size={100} width={"100px"} height="100px" />
                    // }
                    alt="quran pic1"
                  /> */}
                  <FaQuran
                    variant="top"
                    size={100}
                    color="green"
                    className="mt-5 mb-3"
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
                  {/* <Card.Img
                    variant="top"
                    src="quranIconPngColored.png"
                    alt="Quran Picture"
                  /> */}
                  <FaBook
                    variant="top"
                    size={100}
                    color="green"
                    className="mt-5 mb-3"
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
                  {/* <Card.Img
                    variant="top"
                    src="quranIconPngColored.png"
                    alt="quran info"
                  /> */}
                  <BiBook
                    variant="top"
                    size={100}
                    color="green"
                    className="mt-5 mb-3"
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

        <Container>
          <h2 className="findTutorHomeHeading">
            Find the Perfect Quran Tutor (Male & Female) for You with our 3-Day
            Free Trial
          </h2>
          <p className="findTutorHomePara">
            At our online Quran academy, we understand that finding the perfect
            tutor can be a daunting task. That's why we offer a unique
            opportunity for our students to try out multiple tutors from all
            over the world during a three-day free trial period. This way, you
            can experience different teaching styles and select the one that
            best suits your learning needs. A Our primary goal is to ensure your
            comfort and satisfaction, and we believe that this trial period is
            the best way to achieve that. So, take advantage of this opportunity
            and start your journey to mastering the Quran today!
          </p>
        </Container>
        <Container>
          <WhyButurab />
        </Container>
      </div>
    </>
  );
};

export default Home;
