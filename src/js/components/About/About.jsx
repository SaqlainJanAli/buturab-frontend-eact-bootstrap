import React from "react";
// import { Col, Container, FlexboxGrid, Panel } from "rsuite";
import { Col, Container, Row } from "react-bootstrap";
import quranOpenedImage from "./../../../resources/images/QuranOpenedColoredImage.png";
const About = () => {
  return (
    <>
      <div>
        <h4
          style={{
            margin: 20,
            marginBottom: 30,
            fontFamily: "Times New Roman",
          }}
        >
          About
        </h4>
        <Container style={{ display: "flex" }}>
          <Row className="aboutStatement">
            <Col colspan={12} md={8}>
              <Container>
                <h2>About Buturab Online Quran Academy</h2>
                <p>
                  For many years, we have offered online Quran teaching services
                  as an international online school and academy. We help you and
                  your children learn the Qur'an using Tajweed and memorization.
                  We have male and female Quran tutors for safety and veil
                  reasons. Buturab Online Quran Academy is an amazing site that
                  enables Muslims from all over the world to read the Quran
                  using Tajweed. The following programmes are offered by the
                  Online Quran Academy and are open to all interested students:
                  Quran Reading & Recitation (Nazra Quran), Nurani Qaida,
                  Memorizing Quran, Translation & Tafseer, Tajweed, Fiqhi Masail
                  (Modern Prepositions), Taqleed, Prayers Duas, Knowledge about
                  Aimah a.s. on their birth or martyr dates and Islamic History.
                  You can study from the highly skilled, capable, and devoted
                  male and female Quran tutors with only one click. Our staff
                  spots the best possibilities, whether they arise during
                  prosperous or difficult economic times as we gather expertise.
                </p>
              </Container>
            </Col>

            <Col colspan={12} md={4}>
              <div>
                <img src={quranOpenedImage} alt="Quran Opened" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
