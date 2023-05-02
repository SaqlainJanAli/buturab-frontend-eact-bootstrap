import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="d-flex pt-5">
            {/* <div className="row"> */}
            <div className="row show-grid justify-center">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <h5>Buturab Online Quran Academy</h5>
                <div class="is-divider small"></div>
                <p className="text-align-justify">
                  Buturab Online Quran Academy is an online platform that
                  provides Quran education and Islamic studies to individuals of
                  all ages and backgrounds. The Academy uses a combination of
                  live virtual classes, recorded lectures, and interactive
                  quizzes to deliver Quran education and Islamic studies to
                  students. Classes are taught by qualified and experienced
                  teachers. Buturab Online Quran Academy is open to individuals
                  of all faiths and backgrounds who are interested in learning
                  about the Quran and Islamic studies.
                </p>
              </div>
              {/* <Col className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></Col> */}
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <h5>Contacts</h5>
                <div class="is-divider"></div>
                <FontAwesomeIcon icon={faEnvelope} /> Email :
                buturab5127232@gmail.com
                <br />
                <FontAwesomeIcon icon={faPhone} /> Mobile : +92 346 5127232
                <br />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <h5>Useful Links</h5>
                <div class="is-divider small"></div>
                <p className="text-align-justify">
                  <div className="useful-links">
                    <li>
                      <a href="https://english.khamenei.ir">
                        Ayatullah Sayid Ali Khamenei (English)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.leader.ir/">
                        Ayatullah Sayid Ali Khamenei (Persian)
                      </a>
                    </li>
                    <li>
                      <a href="http://www.sistani.org/english/">
                        Ayatullah Sayid Ali Sistani (English)
                      </a>
                    </li>
                    <li>
                      <a href="https://makarem.ir/">
                        Ayatullah Makarem Sherazi
                      </a>
                    </li>
                    <li>
                      <a href="http://bahjat.ir/en">
                        Ayatullah Taqi Bahjat (English)
                      </a>
                    </li>
                    <li>
                      <a href="https://en.wikishia.net/">Wikishia</a>
                    </li>
                    <li>
                      <a href="http://www.shiasearch.com/en/%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C.html">
                        Shia Search (English)
                      </a>
                    </li>
                  </div>
                </p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <br />
        <br />

        {/* CopyRights section */}

        {/* Commented Disclaimer English and Urdu */}
        {/* <Container className="pt-4 text-center">
          <div>
            Disclaimer:
            <br />
            <p className="text-align-justify">
              The information provided on "Buturab Academy" is for general
              informational purposes only. All information on the Site is
              provided in good faith, however we make no representation or
              warranty of any kind, express or implied, regarding the accuracy,
              adequacy, validity, reliability, availability or completeness of
              any information on the Site. Under no circumstance shall we have
              any liability to you for any loss or damage of any kind incurred
              as a result of the use of the site or reliance on any information
              provided on the site. Your use of the site and your reliance on
              any information on the site is solely at your own risk.
            </p>
          </div>

          <div>
            <p className="urdu-para-center">
              اعلان:
              <br />
              <strong>بوتراب اکیڈمی</strong> پر فراہم کردہ معلومات صرف عام
              معلوماتی مقاصد کے لیے ہیں۔ سائٹ پر تمام معلومات نیک نیتی کے ساتھ
              فراہم کی جاتی ہیں، تاہم ہم درستگی، مناسبیت کے حوالے سے کسی بھی قسم
              کی، اظہار یا مضمر، کوئی نمائندگی یا وارنٹی نہیں دیتے ہیں۔ سائٹ پر
              کسی بھی معلومات کی درستگی، وشوسنییتا، دستیابی یا مکمل ہونا۔ کسی
              بھی حالت میں سائٹ کے استعمال یا سائٹ پر فراہم کردہ کسی بھی معلومات
              پر انحصار کرنے کے نتیجے میں ہونے والے کسی بھی قسم کے نقصان یا
              نقصان کے لیے ہم آپ پر کوئی ذمہ داری نہیں رکھتے۔ سائٹ کا آپ کا
              استعمال اور سائٹ پر موجود کسی بھی معلومات پر آپ کا انحصار مکمل طور
              پر آپ کے اپنے خطرے پر ہے۔
            </p>
          </div>

          <br />
        </Container> */}

        <Container className="text-center">
          <FacebookShareButton
            url={"https://www.example.com"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://www.example.com"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton
            url={"https://www.example.com"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <EmailShareButton
            url={"https://www.example.com"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
          <p>
            All Rights Reserved &copy;
            <br /> 2020-{new Date().getFullYear()} Buturab Development Team
          </p>
        </Container>

        {/* CopyRights Section End */}
      </div>
    </>
  );
};

export default Footer;
