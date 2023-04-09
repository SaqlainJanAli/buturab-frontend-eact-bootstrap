import React from "react";
import { Accordion, Container } from "react-bootstrap";
import FAQsData from "../data/FAQsData";
export default function FAQs() {
  return (
    <Container className="container-fluid p-2 ">
      <h5 className="mt-2">Frequently Asked Questions (FAQs)</h5>
      <div className="row d-flex">
        <div className="FAQs-accordion-panel text-left">
          <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 p-1">
            <ol className="bg-black p-0">
              {FAQsData.map((item) => (
                <>
                  <Accordion className="FAQs-accordion">
                    <Accordion.Header className="FAQs-accordion-header">
                      <li>{item.Question}</li>
                    </Accordion.Header>
                    <Accordion.Body className="FAQs-accordion-body">
                      {item.Answer}
                    </Accordion.Body>
                  </Accordion>
                </>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Container>
  );
}
