import React from "react";

import {
  Container,
  Col,
  Row,
  Carousel,
  Card,
  CardGroup,
} from "react-bootstrap";
import muslimGirl from "./../../resources/images/muslimGirl.jpg";
import bannerImage_01 from "./../../resources/images/WebsiteBannerButurab.png";
import bannerImage_02 from "./../../resources/images/WebsiteBannerButurab_02.jpg";
import Quran01Png from "./../../resources/images/quran-01-png.png";
import Quran02Png from "./../../resources/images/quran-02-png.png";
import BoyeThinkingPng from "./../../resources/images/sad-boy-thinking-png.png";
import WhyButurab from "./services/WhyButurab";
const Home = () => {
  let cardsInfo = [
    {
      title: "Quran Reading & Recitation",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis harum cupiditate corporis eum aliquam magnam, illo mollitia iure maiores quod.",
      image: { Icon: Quran01Png, width: "15rem", height: "12rem" },
      alt: "Quran 01 Image",
    },
    {
      title: "Quran Tafseer",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis harum cupiditate corporis eum aliquam magnam, illo mollitia iure maiores quod.",
      image: { Icon: Quran02Png, width: "15rem", height: "12rem" },
      alt: "Quran 02 Image",
    },
    {
      title: "Jadeed Fiqhi Masail (Jafaria)",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis harum cupiditate corporis eum aliquam magnam, illo mollitia iure maiores quod.",
      image: { Icon: BoyeThinkingPng, width: "15rem", height: "12rem" },
      alt: "Quran 03 Image",
    },
  ];
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            // src="https://img.freepik.com/vecteurs-libre/fond-cercles-dans-tons-sombres_60389-166.jpg"
            src={bannerImage_01}
            alt="BannerImage_01"
            height="500px"
            width="100%"
          />
          {/* 
          <Carousel.Caption className="text-center buturab-name-heading ">
            <h1 className="font-italic">Buturab Online Islamic Academy</h1>
            <h1 className="urdu-header-center">بوتراب آنلائن قرآن اکیڈمی</h1>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            // src="https://img.freepik.com/premium-vector/abstract-particle-structure-background_532781-693.jpg"
            src={bannerImage_02}
            alt="BannerImage_02"
            height="500px"
            width="100%"
          />
          {/* 
          <Carousel.Caption className="text-center buturab-name-heading ">
            <h1>Buturab Online Islamic Academy</h1>
            <h1 className="urdu-header-center">بوتراب آنلائن قرآن اکیڈمی</h1>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <div className="textAlignCenter">
        <div className="sloganPanel full-bleed">
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
        </div>

        <Container className="welcomeStatement">
          <h3>Welcome to Buturab Online Islamic Academy. </h3>

          <p>
            Thank you for taking the time to visit Islamic Academy.
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
          <CardGroup className="mb-4 d-flex justify-content-center">
            <Row xs={1} sm={1} lg={3} md={2} className="justify-content-center">
              {cardsInfo.map((card_item) => (
                <Col>
                  <Card
                    className="card"
                    style={{
                      width: "20rem",
                      minHeight: "25rem",
                      background:
                        "linear-gradient(90deg, transparent 0%, white 100%)",
                    }}
                  >
                    {/* <Card.Header> */}
                    <img
                      variant="top"
                      src={card_item.image.Icon}
                      alt={card_item.alt}
                      style={{
                        width: card_item.image.width,
                        height: card_item.image.height,
                      }}
                    />
                    {/* </Card.Header> */}

                    <Card.Body>
                      <Card.Title>{card_item.title}</Card.Title>
                      <Card.Text className="text-align-justify p-3">
                        {card_item.body}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardGroup>
        </Container>

        <Container>
          <h3 className="findTutorHomeHeading">
            Find the Perfect Quran Tutor (Male & Female) for You with our 3-Day
            Free Trial
          </h3>
          <p className="findTutorHomePara">
            At our online Islamic academy, we understand that finding the
            perfect tutor can be a daunting task. That's why we offer a unique
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
