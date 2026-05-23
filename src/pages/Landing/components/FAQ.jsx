import { useState } from "react";
import MagneticSurface from "../../../components/MagneticSurface/MagneticSurface";
import "./FAQ.css";

const faqItems = [
  {
    question: "Do I need to buy a new bottle?",
    answer:
      "No. Ischys is being designed as a bottle-base attachment, so the goal is to work with the bottle you already like using.",
  },
  {
    question: "How does the base estimate hydration?",
    answer:
      "The base estimates intake by tracking weight changes over time. The app then turns those changes into daily progress, reminders, and forecast-style insights.",
  },
  {
    question: "What does Founder Access include?",
    answer:
      "Founder Access reserves your spot, gives you early updates, and includes an additional discount toward the first hardware release when it becomes available.",
  },
  {
    question: "Is Founding Patron required?",
    answer:
      "No. Founding Patron is only an optional higher-support tier for people who want to help fund early prototype development and launch costs.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faqSection shell">
      <div className="sideLine"></div>

      <div className="faqInner">
        <div className="faqHeading">
          <p className="eyebrow">FAQ</p>
          <h2>Questions before joining early access.</h2>
        </div>

        <div className="faqList">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <MagneticSurface
                as="article"
                className={`faqItem ${isOpen ? "isOpen" : ""}`}
                strength={4.8}
                key={item.question}
              >
                <button
                  className="faqQuestion"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faqIcon" aria-hidden="true">
                    +
                  </span>
                </button>

                <div className="faqAnswerOuter" id={panelId}>
                  <div className="faqAnswerInner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </MagneticSurface>
            );
          })}
        </div>
      </div>

      <div className="sideLine"></div>
    </section>
  );
}

export default FAQ;
