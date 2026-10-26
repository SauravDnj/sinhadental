/**
 * SAMPLE legal text, shown only in DEMO_MODE. It describes how the website
 * currently behaves (no cookies, no analytics, demo form sends nothing), but it
 * is not legal advice and must be replaced with lawyer-reviewed text before launch.
 */
export type LegalSection = { title: string; body: string[] };

export const privacySections: LegalSection[] = [
  {
    title: "Who we are",
    body: [
      "This website belongs to Dr. Sinha's Dental Studio, 2nd Floor, Sai Milap Shoppers, 212, Shavion Circle, Gaurav Path Road, Palanpur, Surat, Gujarat 395009. You can reach us on +91 78741 14018.",
    ],
  },
  {
    title: "Information the website collects",
    body: [
      "You can browse this website without telling us who you are. The website does not ask you to create an account.",
      "Like most websites, our hosting provider may keep standard technical logs (such as IP address, browser type and the pages requested) to keep the site secure and working.",
    ],
  },
  {
    title: "The appointment request form",
    body: [
      "At present the appointment request form is a preview only. Details typed into it are not sent to the clinic or stored anywhere, and they are cleared when you submit the form.",
      "When the form is connected in future, this policy will be updated to explain who receives your request, how it is used and how long it is kept. Please do not include detailed medical information in the form.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "This website does not use advertising cookies or analytics tracking.",
      "The map on our website is provided by Google Maps and only loads when you choose \"Show map\". Once loaded, Google may set its own cookies under Google's privacy policy. Links to our Google listing also open Google's website.",
    ],
  },
  {
    title: "How information is used and shared",
    body: [
      "If you call us, we use the information you give us only to arrange and provide your dental care. We do not sell personal information.",
    ],
  },
  {
    title: "How long information is kept",
    body: [
      "Technical logs are kept only as long as our hosting provider needs them for security and reliability. Clinical records are kept as required by the rules that apply to dental practices in India.",
    ],
  },
  {
    title: "Your rights and choices",
    body: [
      "You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it where the law allows. Call the clinic to make a request.",
    ],
  },
  {
    title: "Contact us",
    body: ["For any privacy question, call +91 78741 14018 or visit the clinic during opening hours."],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy when the website changes, for example when the appointment form is connected. The date at the top of this page shows the latest version.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "About this website",
    body: [
      "This website is operated by Dr. Sinha's Dental Studio to share information about the clinic and its services. By using the website you agree to these terms.",
    ],
  },
  {
    title: "General information, not medical advice",
    body: [
      "Information on this website is general and educational. It is not a diagnosis and does not replace an examination by a dentist. Whether a treatment is suitable for you can only be decided after an examination.",
      "If you have difficulty breathing or swallowing, call 112 immediately.",
    ],
  },
  {
    title: "Appointment requests",
    body: [
      "A request made through the website is not a confirmed appointment. Appointments are confirmed only when the clinic contacts you. The quickest way to book is to call +91 78741 14018.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The text, design and graphics on this website belong to Dr. Sinha's Dental Studio or are used with permission. Please do not copy them without asking.",
    ],
  },
  {
    title: "External links",
    body: [
      "The website links to other sites, such as Google Maps. We are not responsible for the content or privacy practices of those sites.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "We take care to keep the website accurate and up to date, but we cannot guarantee it is always complete or error-free. To the extent the law allows, we are not liable for loss arising from use of the website.",
    ],
  },
  {
    title: "Governing law",
    body: ["These terms are governed by the laws of India. Courts in Surat, Gujarat have jurisdiction."],
  },
  {
    title: "Contact",
    body: ["For questions about these terms, call +91 78741 14018."],
  },
];
