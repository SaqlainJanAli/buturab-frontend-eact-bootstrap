import React from "react";
// import { Col, Container, FlexboxGrid, Panel } from "rsuite";
import { Col, Container, Row } from "react-bootstrap";
import quranOpenedImage from "./../../../resources/images/QuranOpenedColoredImage.png";
const About = () => {
  return (
    <>
      <div>
        <div className="container d-flex">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div className="aboutStatement ">
                <div>
                  <h4>ABOUT BUTURAB ONLINE ISLAMIC ACADEMY</h4>
                  <p>
                    For many years, we have offered online Quran teaching
                    services as an international online school and academy. We
                    help you and your children learn the Qur'an using Tajweed
                    and memorization. We have male and female Quran tutors for
                    safety and veil reasons. BUTURAB ONLINE ISLAMIC ACADEMY is
                    an amazing site that enables Muslims from all over the world
                    to read the Quran using Tajweed. The following programmes
                    are offered by the Online Quran Academy and are open to all
                    interested students: Quran Reading & Recitation (Nazra
                    Quran), Nurani Qaida, Memorizing Quran, Translation &
                    Tafseer, Tajweed, Fiqhi Masail (Modern Prepositions),
                    Taqleed, Prayers Duas, Knowledge about Aimah a.s. on their
                    birth or martyr dates and Islamic History. You can study
                    from the highly skilled, capable, and devoted male and
                    female Quran tutors with only one click. Our staff spots the
                    best possibilities, whether they arise during prosperous or
                    difficult economic times as we gather expertise.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-4 align-self-center text-center">
              <div className="">
                <img
                  src={quranOpenedImage}
                  height={200}
                  width={230}
                  alt="Quran Opened"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
