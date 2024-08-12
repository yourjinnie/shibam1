import React, { useState } from 'react';

const FAQAccordion = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <h1 className="faqH font-face-futur-md-bt">Frequently Asked Questions</h1>
      <br /> <br />
      {faqs.map((faq, index) => (
        <div key={index} className={`accordion-item ${expandedIndex === index ? 'active' : ''}`}>
          <div
            className="accordion-question font-face-futur-bk"
            aria-expanded={expandedIndex === index}
            aria-controls={`answer-${index}`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span id="arrow" />
          </div>
          <div
            id={`answer-${index}`}
            className="accordion-answer font-face-futur-bk"
            hidden={expandedIndex !== index}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
