// Client reviews shown in the review cards on the home page, technology pages, case studies and contact page.
//
// Add only real quotes that the client has approved in writing, including how their name is shown.
// While this list is empty, every review section on the site stays hidden.
//
// Example entry (copy, then replace every value):
// {
//   name: "Priya Sharma",
//   role: "Head of Engineering",
//   company: "Example Co",
//   rating: 5,
//   date: "2026-09-01",
//   quote: "Two to four sentences in the client's own words.",
//   // optional: photo: "/images/reviews/priya.jpg",
// },

export type Review = {
  name: string;
  role: string;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // ISO date the quote was given, e.g. "2026-09-01"
  quote: string;
  photo?: string; // square image in /public/images/reviews; initials are shown when absent
};

export const reviews: Review[] = [];
