import React from "react";
import { Accordion, Container } from "react-bootstrap";
import FAQsData from "../data/FAQsData";
export default function FAQs() {
  return (
    <Container>
      <h4>Frequently Asked Questions (FAQs)</h4>
      <div className="FAQs-accordion-panel">
        <ol>
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
    </Container>
  );
}
