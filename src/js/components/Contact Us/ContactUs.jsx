import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";

export default function ContactUs() {
  return (
    <>
      <div>ContactUs</div>

      <Container fluid>
        <Col>
          <Container
            style={{
              border: "solid white 1px",
              minHeight: "30rem",
              width: "25rem",
              background: "#F2EDE4",
            }}
          >
            <Form className="mt-4 p-4">
              <Form.Group>
                <Form.Label>Name : </Form.Label>
                <Form.Control
                  type="text"
                  style={{ border: "solid green 1px", background: "none" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>E-mail : </Form.Label>
                <Form.Control
                  type="text"
                  style={{ border: "solid green 1px", background: "none" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message : </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  style={{ border: "solid green 1px", background: "none" }}
                />
              </Form.Group>
              <Form.Group>
                <Button className="mt-4">Submit</Button>
              </Form.Group>
            </Form>
          </Container>
        </Col>
      </Container>
    </>
  );
}
