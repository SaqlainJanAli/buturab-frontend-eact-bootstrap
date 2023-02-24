import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
// import { GoogleSpreadsheet } from "google-spreadsheet";
import { useState } from "react";
import axios from "axios";
const RegisterNow = () => {
  const textArea = React.forwardRef((props, ref) => (
    <input {...props} as="textarea" ref={ref} />
  ));

  const {
    // REACT_APP_PRIVATE_KEY,
    // REACT_APP_CLIENT_EMAIL,
    // REACT_APP_SPREADSHEET_ID,
    // REACT_APP_SHEET_ID,
    REACT_APP_SHEET_BEST_URL,
  } = process.env;

  // SpreadSheetWorking STARTS
  // const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

  // const appendSpreadsheet = async (row) => {
  //   try {
  //     await doc.useServiceAccountAuth({
  //       client_email: REACT_APP_CLIENT_EMAIL,
  //       private_key: REACT_APP_PRIVATE_KEY,
  //     });

  //     await doc.loadInfo();

  //     console.log(doc.loadInfo());

  //     const sheet = doc.sheetsById[REACT_APP_SHEET_ID];

  //     const result = await sheet.addRow(row);

  //     return result;
  //   } catch (e) {
  //     console.error("Error: ", e);
  //   }
  // };
  // SpreadSheetWorking ENDS
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    DateOfBirth: null,
    Gender: "",
    GuardiansName: "",
    LanguageKnown: "",
    Courses: [],
    Address: "",
  });

  function sendDataToSheet(e) {
    console.log(formData);
    console.log(process.env.REACT_APP_SHEET_BEST_URL);
    axios
      .post(process.env.REACT_APP_SHEET_BEST_URL, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // appendSpreadsheet(formData);
    sendDataToSheet(event);
  };

  return (
    <Container>
      <h4 className="buturab-page-name">Register Now</h4>
      <Container className="textAlignCenter">
        <p>
          Please feel free to fill out the following form to take a free trial
          of Online Quran Classes. We will inshaAllah contact you soon.
        </p>
        <p className="urdu-para-center">
          مفت ٹرائل لینے کے لیے براہ کرم درج ذیل فارم کو پُر کریں۔ آن لائن قرآن
          کی کلاسز۔ ہم انشاء اللہ جلد آپ سے رابطہ کریں گے۔
        </p>

        <Container
          className="textAlignCenter pt-4"
          style={
            {
              // background:
              //   "linear-gradient(90deg, rgba(239,255,254,1) 0%, rgba(173,233,233,1) 100%)",
            }
          }
        >
          <Form
            className="p-5"
            variant="light"
            style={{
              border: "1px solid black",
              textAlign: "left",
              // padding: "50px",
            }}
          >
            <Row className="pb-4" xs={1} sm={1} lg={3} md={3}>
              <Form.Group className="pt-2">
                <Form.Label>First name : </Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="FirstName"
                  onChange={(e) => {
                    formData.FirstName = e;
                  }}
                />
              </Form.Group>
              <Form.Group className="pt-2">
                <Form.Label>Last name : </Form.Label>
                <Form.Control
                  name="LastName"
                  onChange={(e) => {
                    formData.LastName = e;
                  }}
                />
              </Form.Group>
              <Form.Group className="pt-2">
                <Form.Label>Date Of Birth :</Form.Label>
                <Form.Control
                  name="DateOfBirth"
                  type="date"
                  onChange={(e) => {
                    formData.DateOfBirth = e;
                  }}
                />
              </Form.Group>
              <Form.Group className="pt-2">
                <Form.Label>Guardians name :</Form.Label>
                <Form.Control
                  name="GuardiansName"
                  onChange={(e) => {
                    formData.GuardiansName = e;
                  }}
                />
              </Form.Group>
              <Form.Group className="pt-2">
                <Form.Label>Language Known : </Form.Label>
                <Form.Control
                  name="LanguageKnown"
                  onChange={(e) => {
                    formData.LanguageKnown = e;
                  }}
                />
              </Form.Group>
              <Form.Group className="pt-2">
                <Form.Label>Gender : </Form.Label>

                <Form.Check
                  name="Gender"
                  type="radio"
                  label="Male"
                  value={"Male"}
                  id="Male"
                  onSelect={(e) => {
                    formData.Gender = e;
                  }}
                />
                <Form.Check
                  name="Gender"
                  type="radio"
                  label="Female"
                  id="female"
                  value={"Female"}
                  onSelect={(e) => {
                    formData.Gender = e;
                  }}
                />
              </Form.Group>
              <Form.Group className="pt-2">
                <Form.Label>Select Courses : </Form.Label>
                {[
                  "Basic Qaida Reading",
                  "Quran Reading",
                  "Quran Translation",
                  "Quran Tafseer",
                  "Hifz-e-Quran",
                  "Fiqah",
                ].map((type) => (
                  <Form.Check
                    name="Courses"
                    type={"checkbox"}
                    key={type}
                    label={type}
                    value={type}
                    onChange={(e) => {
                      formData.Courses = e;
                    }}
                  />
                ))}
              </Form.Group>
              <Form.Group className="pt-2">
                <Form.Label>Address :</Form.Label>
                <Form.Control
                  name="Address"
                  as="textarea"
                  rows={6}
                  onChange={(e) => {
                    formData.Address = e;
                  }}
                />
              </Form.Group>
            </Row>

            <Button type="submit" onClick={handleSubmit} variant="primary">
              Submit
            </Button>
          </Form>
        </Container>
      </Container>
    </Container>
  );
};

export default RegisterNow;
