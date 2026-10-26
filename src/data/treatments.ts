/**
 * Treatment content. Every entry is a DRAFT awaiting dentist approval
 * (see docs/pages/treatment-detail.md). `confirmed: false` shows an
 * "Ask the clinic" label until the clinic confirms the service is offered.
 * In DEMO_MODE every treatment is shown as confirmed, with a sample photo.
 */
import { DEMO_MODE, demoImages, type DemoImage } from "./demo";

export type TreatmentIcon =
  | "general"
  | "cleaning"
  | "root-canal"
  | "braces"
  | "cosmetic"
  | "whitening"
  | "emergency";

export type TreatmentCategory = "Preventive" | "Restorative" | "Orthodontic" | "Cosmetic" | "Urgent care";

export type Faq = { question: string; answer: string };

export type Treatment = {
  slug: string;
  title: string;
  category: TreatmentCategory;
  icon: TreatmentIcon;
  confirmed: boolean;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  summary: string;
  reasonsIntro: string;
  reasons: string[];
  steps: { title: string; text: string }[];
  benefits: string[];
  limitations: string[];
  care: { heading: string; tips: string[] };
  faqs: Faq[];
  related: string[];
  image: DemoImage | null;
};

const treatmentContent: Omit<Treatment, "image">[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    category: "Preventive",
    icon: "general",
    confirmed: false,
    cardDescription: "Check-ups, consultations, fillings and everyday care for healthy teeth and gums.",
    metaTitle: "General Dentistry in Palanpur, Surat",
    metaDescription:
      "Check-ups, consultations and everyday dental care in Palanpur, Surat. Learn what to expect and request an appointment.",
    eyebrow: "General dentistry",
    heading: "General Dentistry in Palanpur, Surat",
    summary:
      "Everyday dental care, including check-ups, consultations and fillings, to help keep your teeth and gums healthy and catch small problems early.",
    reasonsIntro: "People often book a general visit when:",
    reasons: [
      "It has been a while since their last check-up.",
      "A tooth feels sensitive to hot, cold or sweet food.",
      "A filling feels rough, broken or has come out.",
      "They notice bleeding gums or a change in their mouth.",
      "They simply have questions about their oral health.",
    ],
    steps: [
      { title: "Talk about your concerns", text: "Tell the dentist what you've noticed and anything you're worried about." },
      { title: "Examination", text: "The dentist checks your teeth and gums, and may suggest an X-ray if needed." },
      { title: "Options explained", text: "You'll hear what the dentist sees and the options available, in plain language." },
      { title: "Plan the next step", text: "Treatment can begin, or a follow-up visit is planned, once you've decided." },
    ],
    benefits: [
      "Regular check-ups can help find problems while they are small.",
      "A chance to ask questions and get advice for home care.",
      "A clear picture of your oral health before deciding anything.",
    ],
    limitations: [
      "Some concerns need more than one visit or further tests.",
      "The right treatment depends on what the examination shows.",
    ],
    care: {
      heading: "Before and after your visit",
      tips: [
        "Bring a list of any medicines you take.",
        "Note down when your symptoms started and what makes them better or worse.",
        "Follow any specific instructions the dentist gives after a filling.",
      ],
    },
    faqs: [
      {
        question: "How often should I have a dental check-up?",
        answer:
          "It varies from person to person. The dentist will suggest a check-up schedule based on your teeth and gums.",
      },
      {
        question: "What happens at a check-up?",
        answer:
          "Usually a conversation about any concerns, an examination of your teeth and gums, and advice on what, if anything, is needed next.",
      },
      {
        question: "Do I need an appointment for a check-up?",
        answer: "Please call the clinic to find a suitable time.",
      },
    ],
    related: ["teeth-cleaning", "root-canal", "dental-emergency"],
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning",
    category: "Preventive",
    icon: "cleaning",
    confirmed: false,
    cardDescription: "Professional cleaning to remove build-up and help keep teeth and gums healthy.",
    metaTitle: "Professional Teeth Cleaning in Palanpur, Surat",
    metaDescription:
      "Learn how professional teeth cleaning supports healthy teeth and gums, and what a cleaning visit involves.",
    eyebrow: "Teeth cleaning",
    heading: "Professional Teeth Cleaning",
    summary:
      "A professional clean removes plaque and tartar that brushing at home can miss. It's also a good moment to check the health of your gums.",
    reasonsIntro: "People often ask about a professional clean when:",
    reasons: [
      "They're due for a routine clean.",
      "Their gums bleed when brushing or flossing.",
      "They can see hard build-up near the gum line.",
      "They want a fresh start with their oral hygiene routine.",
    ],
    steps: [
      { title: "Gum and teeth check", text: "The dentist looks at your teeth and gums before cleaning." },
      { title: "Cleaning", text: "Plaque and tartar are removed from the tooth surfaces and along the gum line." },
      { title: "Polishing", text: "Teeth are polished to leave a smoother surface." },
      { title: "Home-care tips", text: "You'll get practical advice on brushing and cleaning between your teeth." },
    ],
    benefits: [
      "Removes build-up that a toothbrush can't.",
      "Supports healthier gums.",
      "A chance to spot other concerns early.",
    ],
    limitations: [
      "Cleaning doesn't change the natural colour of teeth. Ask about whitening for that.",
      "Gums may feel tender for a short time afterwards.",
      "Some gum conditions need further treatment beyond a routine clean.",
    ],
    care: {
      heading: "Keeping teeth clean at home",
      tips: [
        "Brush twice a day with a fluoride toothpaste.",
        "Clean between your teeth daily.",
        "Ask the dentist how often you should return for a clean.",
      ],
    },
    faqs: [
      {
        question: "How often should I get my teeth cleaned?",
        answer: "This depends on your gums and how quickly build-up forms. The dentist will advise you.",
      },
      {
        question: "Will cleaning feel uncomfortable?",
        answer:
          "Most people find it manageable. If your teeth or gums are sensitive, tell the dentist so they can take it slowly.",
      },
    ],
    related: ["general-dentistry", "teeth-whitening"],
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    category: "Restorative",
    icon: "root-canal",
    confirmed: false,
    cardDescription: "Treatment that may help save a tooth when the inner pulp is infected or inflamed.",
    metaTitle: "Root Canal Treatment in Surat",
    metaDescription:
      "A plain-language guide to root canal treatment: when it's considered and what to expect at Dr. Sinha's Dental Studio.",
    eyebrow: "Root canal treatment",
    heading: "Root Canal Treatment",
    summary:
      "Root canal treatment cleans the inside of a tooth when the soft inner pulp is infected or inflamed. It may help save the natural tooth.",
    reasonsIntro: "People often ask about root canal treatment when:",
    reasons: [
      "A toothache lingers or keeps coming back.",
      "Sensitivity to hot or cold stays long after the food or drink is gone.",
      "A dentist has recommended it after an examination.",
      "A tooth has a deep cavity, crack or past injury.",
    ],
    steps: [
      { title: "Examination and X-ray", text: "The dentist checks the tooth to understand what's happening inside it." },
      { title: "Options explained", text: "You'll hear whether root canal treatment is suitable, and what the alternatives are." },
      { title: "Treatment", text: "The inside of the tooth is cleaned and sealed. This can take more than one visit." },
      { title: "Restoring the tooth", text: "The dentist will advise how to protect the tooth afterwards, for example with a crown." },
    ],
    benefits: [
      "May allow you to keep your natural tooth.",
      "Aims to treat the source of infection or inflammation.",
    ],
    limitations: [
      "The number of visits varies from tooth to tooth.",
      "Not every tooth is suitable. The dentist will explain your options.",
      "The tooth usually needs a protective restoration afterwards.",
    ],
    care: {
      heading: "After treatment",
      tips: [
        "Follow the dentist's advice about eating and chewing until the tooth is fully restored.",
        "Keep up brushing and cleaning between your teeth.",
        "Contact the clinic if you notice swelling or pain that gets worse.",
      ],
    },
    faqs: [
      {
        question: "Will I need a crown afterwards?",
        answer: "Often a tooth needs extra protection after root canal treatment. The dentist will advise on your tooth.",
      },
      {
        question: "How many visits does it take?",
        answer: "It depends on the tooth. The dentist will explain what to expect for your situation.",
      },
    ],
    related: ["general-dentistry", "dental-emergency"],
  },
  {
    slug: "braces",
    title: "Braces",
    category: "Orthodontic",
    icon: "braces",
    confirmed: false,
    cardDescription: "Orthodontic consultation for straightening teeth and improving how they meet.",
    metaTitle: "Braces and Orthodontic Consultation in Surat",
    metaDescription:
      "Thinking about braces? Learn what an orthodontic consultation involves and how the process works.",
    eyebrow: "Braces and orthodontics",
    heading: "Braces and Orthodontic Consultation",
    summary:
      "Braces gradually move teeth into a better position. A consultation helps you understand whether they may suit you, and what the process involves.",
    reasonsIntro: "People often ask about braces when:",
    reasons: [
      "Teeth are crowded, overlapping or have gaps.",
      "They have concerns about how their teeth meet when biting.",
      "A parent wants advice for a child or teenager.",
      "An adult is considering straightening their teeth.",
    ],
    steps: [
      { title: "Consultation", text: "Talk about what you'd like to change and any questions you have." },
      { title: "Assessment", text: "The dentist examines your teeth and bite, and may take X-rays or records." },
      { title: "Plan explained", text: "You'll hear the suggested approach, the likely process and alternatives." },
      { title: "Regular visits", text: "If you go ahead, braces are adjusted at regular appointments." },
    ],
    benefits: [
      "Can improve the alignment of teeth.",
      "Straighter teeth may be easier to keep clean.",
      "A consultation gives a clear picture before you commit.",
    ],
    limitations: [
      "Orthodontic treatment takes time and regular appointments.",
      "Results depend on the individual and following the dentist's advice.",
      "Extra care is needed to keep teeth clean while wearing braces.",
    ],
    care: {
      heading: "Living with braces",
      tips: [
        "Brush carefully around brackets and wires.",
        "Follow the dentist's advice about foods to avoid.",
        "Keep every adjustment appointment.",
      ],
    },
    faqs: [
      {
        question: "What age can braces be started?",
        answer: "Braces can be considered at different ages. The dentist will advise after an assessment.",
      },
      {
        question: "How long does treatment take?",
        answer: "It varies widely from person to person. The dentist will discuss an estimate after assessing your teeth.",
      },
      {
        question: "What types of braces are available?",
        answer: "Please ask the clinic which options are offered.",
      },
    ],
    related: ["cosmetic-dentistry", "general-dentistry"],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    category: "Cosmetic",
    icon: "cosmetic",
    confirmed: false,
    cardDescription: "Options to improve the look of your smile, discussed in a consultation.",
    metaTitle: "Cosmetic Dentistry in Palanpur, Surat",
    metaDescription:
      "Learn about cosmetic dental options and how a consultation helps you decide what's right for your smile.",
    eyebrow: "Cosmetic dentistry",
    heading: "Cosmetic Dentistry",
    summary:
      "Cosmetic dentistry focuses on the appearance of your smile. The options are discussed in a consultation, based on your teeth and what you'd like to change.",
    reasonsIntro: "People often ask about cosmetic dentistry when:",
    reasons: [
      "Teeth are discoloured, chipped or uneven.",
      "There are small gaps they'd like to improve.",
      "They'd like to feel more confident when they smile.",
    ],
    steps: [
      { title: "Talk about your goals", text: "Share what you'd like to change about your smile." },
      { title: "Examination", text: "The dentist checks the health of your teeth and gums first." },
      { title: "Options and limits explained", text: "You'll hear what may be possible, and what isn't." },
      { title: "Agree a plan", text: "Nothing goes ahead until you're comfortable with the plan." },
    ],
    benefits: [
      "Options can be tailored to your teeth and goals.",
      "A consultation helps set realistic expectations.",
    ],
    limitations: [
      "Healthy teeth and gums come first. Some treatment may be needed beforehand.",
      "Results vary from person to person.",
      "Some cosmetic treatments need maintenance over time.",
    ],
    care: {
      heading: "Looking after your smile",
      tips: [
        "Keep up good daily brushing and cleaning between teeth.",
        "Follow any aftercare advice specific to your treatment.",
        "Attend regular check-ups.",
      ],
    },
    faqs: [
      {
        question: "Which cosmetic treatments are offered?",
        answer: "Please ask the clinic about the cosmetic options currently available.",
      },
      {
        question: "Is cosmetic dentistry right for me?",
        answer: "That can only be decided after an examination. A consultation is the best first step.",
      },
    ],
    related: ["teeth-whitening", "braces"],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic",
    icon: "whitening",
    confirmed: false,
    cardDescription: "A consultation to find out whether whitening may suit your teeth.",
    metaTitle: "Teeth Whitening Consultation in Surat",
    metaDescription:
      "Find out whether teeth whitening may suit you and what a whitening consultation covers.",
    eyebrow: "Teeth whitening",
    heading: "Teeth Whitening Consultation",
    summary:
      "Whitening may lighten the natural colour of your teeth. A consultation checks whether it's suitable, and what results may be realistic for you.",
    reasonsIntro: "People often ask about whitening when:",
    reasons: [
      "Teeth look stained or yellowed.",
      "They'd like a brighter smile before a special occasion.",
      "They're interested in improving the look of their smile gently.",
    ],
    steps: [
      { title: "Check teeth and gums", text: "Whitening is only suitable for healthy teeth and gums." },
      { title: "Discuss expectations", text: "The dentist explains what results may be realistic for your teeth." },
      { title: "Whitening plan", text: "If suitable, you'll hear how the whitening would be carried out." },
      { title: "Aftercare", text: "Advice on keeping results and managing any sensitivity." },
    ],
    benefits: [
      "Can lighten natural tooth colour.",
      "A non-invasive option for many people.",
    ],
    limitations: [
      "Results vary and are not permanent.",
      "Fillings, crowns and veneers don't change colour.",
      "Some people experience temporary sensitivity.",
    ],
    care: {
      heading: "After whitening",
      tips: [
        "Follow the dentist's advice on food and drinks that stain.",
        "Tell the clinic if sensitivity doesn't settle.",
        "Keep up regular cleaning and check-ups.",
      ],
    },
    faqs: [
      {
        question: "How white will my teeth get?",
        answer: "It depends on your natural tooth colour and the cause of staining. The dentist will set realistic expectations.",
      },
      {
        question: "Is whitening safe for everyone?",
        answer: "Not always. An examination checks whether it's suitable for you.",
      },
    ],
    related: ["cosmetic-dentistry", "teeth-cleaning"],
  },
  {
    slug: "dental-emergency",
    title: "Dental Emergency",
    category: "Urgent care",
    icon: "emergency",
    confirmed: false,
    cardDescription: "Guidance and a direct line for urgent dental problems.",
    metaTitle: "Dental Emergency in Surat · Call Dr. Sinha's",
    metaDescription:
      "Severe tooth pain, a broken tooth or swelling? Call +91 78741 14018 and read what to do first.",
    eyebrow: "Dental emergency",
    heading: "Dental Emergency? Call Us First.",
    summary:
      "If you have severe tooth pain, a broken tooth or another urgent problem, call the clinic. We'll talk you through the next step.",
    reasonsIntro: "Common urgent dental problems include:",
    reasons: [
      "Severe or worsening toothache.",
      "A broken, chipped or cracked tooth.",
      "A knocked-out or loosened tooth after an injury.",
      "A lost filling or crown.",
      "Swelling in the gum or face.",
    ],
    steps: [
      { title: "Call the clinic", text: "Explain what has happened so the team can advise you." },
      { title: "Follow the advice given", text: "You'll be told what to do next and whether you should come in." },
      { title: "Examination", text: "The dentist assesses the problem and explains your options." },
    ],
    benefits: [],
    limitations: [],
    care: {
      heading: "While you contact us",
      tips: [
        "Stay calm, and call the clinic to describe what happened.",
        "If a tooth is knocked out, find it and handle it by the crown (the top), not the root.",
        "For bleeding, press gently with clean gauze or cloth.",
        "Avoid chewing on the affected side.",
      ],
    },
    faqs: [
      {
        question: "Can I come in without an appointment in an emergency?",
        answer: "Please call first so the team can advise you on the best next step.",
      },
      {
        question: "Is the clinic available after hours?",
        answer: "Please call the clinic to check availability.",
      },
    ],
    related: ["root-canal", "general-dentistry"],
  },
];

export const treatments: Treatment[] = treatmentContent.map((t) => ({
  ...t,
  confirmed: t.confirmed || DEMO_MODE,
  image: DEMO_MODE ? (demoImages.treatments[t.slug] ?? null) : null,
}));

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getRelatedTreatments(treatment: Treatment) {
  return treatment.related
    .map((slug) => getTreatment(slug))
    .filter((t): t is Treatment => Boolean(t));
}

export const featuredTreatmentSlugs = [
  "general-dentistry",
  "teeth-cleaning",
  "root-canal",
  "braces",
  "cosmetic-dentistry",
  "dental-emergency",
];
