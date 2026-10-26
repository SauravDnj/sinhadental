import type { Faq } from "./treatments";

/**
 * General FAQs. Questions that depend on unconfirmed clinic policy
 * (children, payments, accessibility, parking, languages) are left out
 * until the clinic confirms them. See docs/pages/patient-guide.md.
 */
export const generalFaqs: Faq[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "The quickest way is to call the clinic on +91 78741 14018. The team will help you find a suitable time.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Bring a list of any medicines you take, and any previous dental records or X-rays if you have them. It also helps to note down your questions.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "Call the clinic and explain what has happened. If you have difficulty breathing or swallowing, call 112 immediately.",
  },
  {
    question: "I feel nervous about the dentist. What can I do?",
    answer:
      "Let the team know when you book and at the start of your visit. The dentist can explain each step before it happens and take things at your pace.",
  },
  {
    question: "Where is the clinic?",
    answer:
      "We're on the 2nd floor of Sai Milap Shoppers, Shavion Circle, Gaurav Path Road, Palanpur, Surat. Use the Get Directions link to open Google Maps.",
  },
];
