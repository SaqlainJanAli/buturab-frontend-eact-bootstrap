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
      <Container>
        <Container fluid className="display-flex pt-5">
          <Row className="show-grid justify-center" xs={1} sm={1} lg={4} md={4}>
            <Col>
              <h5>Buturab Online Quran Academy</h5>
              <div class="is-divider small"></div>
              <p className="text-align-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, expedita harum. Fugiat, molestias? Obcaecati aut,
                eaque architecto rerum omnis sequi exercitationem mollitia a
                quaerat perferendis ea sapiente porro officiis similique?
              </p>
            </Col>
            <Col xs={1} sm={1} lg={1} md={1}></Col>
            <Col>
              <h5>Contacts</h5>
              <div class="is-divider"></div>
              <FontAwesomeIcon icon={faEnvelope} /> Email : info@abc.com
              <br />
              <FontAwesomeIcon icon={faPhone} /> +92 312 34567890 <br />
            </Col>
            <Col>
              <h5>Useful Links</h5>
              <div class="is-divider small"></div>
              <p className="text-align-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, expedita harum. Fugiat, molestias? Obcaecati aut,
                eaque architecto rerum omnis sequi exercitationem mollitia a
                quaerat perferendis ea sapiente porro officiis similique?
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        <br />

        {/* CopyRights section */}
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
        <Container className="pt-4 text-center">
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
        </Container>
      </Container>
    </>
  );
};

export default Footer;
