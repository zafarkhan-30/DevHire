// Pre-screen questions asked by the WhatsApp button before it opens the chat.
// The answers are written into the WhatsApp message; nothing is stored on the website.
// Number and fallback message live in content/site.ts (whatsapp, whatsappMessage).

export type ScreenStep = {
  id: string;
  question: string;
  // Label used for this answer in the WhatsApp message
  label: string;
  kind: "text" | "choice";
  options?: string[];
  placeholder?: string;
  optional?: boolean;
};

export const whatsappScreen = {
  title: "Chat with SyntaxHires",
  intro: "Answer a few quick questions so we can reply with the right people. Then continue in WhatsApp.",
  greeting: "Hi SyntaxHires, I would like to talk about a project.",
  footer: "Sent from the SyntaxHires website",
  steps: [
    { id: "name", question: "What is your name?", label: "Name", kind: "text", placeholder: "Your name" },
    { id: "company", question: "Which company are you with?", label: "Company", kind: "text", placeholder: "Company or product", optional: true },
    {
      id: "need",
      question: "What do you need?",
      label: "Looking for",
      kind: "choice",
      options: [
        "Build a web or mobile app",
        "Build an MVP",
        "AI or automation",
        "Hire developers",
        "A dedicated team",
        "Modernise a legacy system",
        "Recruitment (hire onto my payroll)",
        "Something else",
      ],
    },
    { id: "stack", question: "Which tech stack or role?", label: "Stack / role", kind: "text", placeholder: "e.g. React, Node.js, DevOps", optional: true },
    { id: "size", question: "How many people do you need?", label: "Team size", kind: "choice", options: ["1", "2 to 3", "4 to 10", "More than 10", "Not sure yet"] },
    { id: "start", question: "When do you want to start?", label: "Start", kind: "choice", options: ["Immediately", "Within a month", "In 1 to 3 months", "Just exploring"] },
  ] as ScreenStep[],
};
