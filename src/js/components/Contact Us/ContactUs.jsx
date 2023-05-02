import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";

export default function ContactUs() {
  return (
    <>
      {/* <div>ContactUs</div> */}

      <div className="container">
        <div className="mt-1">
          <div className="row d-flex">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-content-center">
              <div className="d-flex justify-content-center">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 ">
                  <div
                    className="bg-transparent mt-4 p-4"
                    style={{
                      border: "solid black 1px",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <div className="justify-content-center align-middle ">
                      <Form>
                        <Form.Group>
                          <Form.Label>Name : </Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>E-mail : </Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Message : </Form.Label>
                          <Form.Control as="textarea" rows={6} />
                        </Form.Group>
                        <div className="mt-4">
                          <Form.Group>
                            <Button variant="success">Submit</Button>
                          </Form.Group>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
