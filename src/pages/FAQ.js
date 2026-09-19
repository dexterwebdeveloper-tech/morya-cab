import React, { useState } from 'react';

const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which accordion is open

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active accordion
  };

  return (
    <div className="space-top space-extra-bottom">
      <div className="">
        <div className="row justify-content-center">
    
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="accordion-area accordion mb-30" id="faqAccordion">
              {faqData.map((faq, index) => (
                <div className="accordion-card style2" key={index}>
                  <div className="accordion-header" id={`collapse-item-${index + 1}`}>
                    <button
                      className={`accordion-button ${activeIndex === index + 1 ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(index + 1)}
                      aria-expanded={activeIndex === index + 1}
                      aria-controls={`collapse-${index + 1}`}
                    >
                      {`Q${index + 1}. ${faq.question}`}
                    </button>
                  </div>
                  <div
                    id={`collapse-${index + 1}`}
                    className={`accordion-collapse collapse ${activeIndex === index + 1 ? 'show' : ''}`}
                    aria-labelledby={`collapse-item-${index + 1}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body style2">
                      <p className="faq-text">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
