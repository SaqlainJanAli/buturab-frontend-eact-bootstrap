import React from "react";

import clockPng from "../../../resources/images/clock-png.png";
import AwardPng from "../../../resources/images/award-png.png";
import LessonPenPng from "../../../resources/images/lesson-pen-png.png";
import FemaleHijabPng from "../../../resources/images/female-hijab-png.png";
import TranslatePng from "../../../resources/images/translate-png.png";
import MoneyBackGuaranteePng from "../../../resources/images/moneyback-guarantee-png.png";
import { Col, Row } from "react-bootstrap";

export default function WhyButurab() {
  let cardsInfo = [
    {
      heading: "Flexible Schedule 24/7",
      icon: clockPng,
      altName: "Card Image One",
      paragraph: `"You can choose any time for your online Quran lessons
      without interrupting your busy schedule. Buturab Online
      Quran Academy offers live 24/7 one-on-one lessons with the
      help of our most deviant Quran tutors."`,
    },
    {
      heading: "Qualified Quran Tutors",
      icon: AwardPng,
      altName: "Card Image Two",
      paragraph: `"All our teachers are well-trained, experienced, and certified. We hire only qualified Quran teachers for kids to educate them with Quran & Arabic Online."`,
    },
    {
      heading: "Easy Quran Lessons for kids",
      icon: LessonPenPng,
      altName: "Card Image Three",
      paragraph: `"We have designed ready-made curriculums for Quran and Arabic courses for kids and adults.  We also update it time by time and modify it according to students’ needs."`,
    },
    {
      heading: "Affordable Tuition Fee",
      icon: FemaleHijabPng,
      altName: "Card Image Four",
      paragraph: `"Our Online Quran courses are comparably cheaper than other Islamic Centers and Academies. Moreover, we offer siblings concession and discount to needy families."`,
    },
    {
      heading: "Female Quran Tutors",
      icon: TranslatePng,
      altName: "Card Image Five",
      paragraph: `"We have certified best female Quran teachers for sisters and kids who want to learn with female teachers.  We have also Native Arab and Egyptian Female Quran Tutors also."`,
    },
    {
      heading: "Money Back Guarantee",
      icon: MoneyBackGuaranteePng,
      altName: "Card Image Six",
      paragraph: `"Register your kids for learning Quran and Get the results in a month otherwise get your payment back, if you are not satisfied with our Online Quran Teaching services."`,
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <h3 style={{ color: "orangered", fontWeight: "bolder" }}>
          Why Buturab?
        </h3>

        <div className="row d-flex ">
          <div className=" p-1">
            <Row className="d-flex justify-content-center">
              {cardsInfo.map((info_Item) => (
                <div
                  className="card why-buturab-card col-md-3 m-1 pl-3 pr-4 pt-4 "
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, white 100%)",
                  }}
                >
                  <Row md={12}>
                    <Col md={3}>
                      <img
                        src={info_Item.icon}
                        alt="Card cap"
                        style={{
                          width: "60px",
                          padding: 0,
                          objectFit: "cover",
                          height: "60px",
                        }}
                      />
                    </Col>
                    <Col
                      md={9}
                      style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        textAlign: "justify",
                      }}
                    >
                      <h5>{info_Item.heading}</h5>
                      <p>{info_Item.paragraph}</p>
                    </Col>
                  </Row>
                </div>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
