export const upcoming = {
    exists: true,
    title: "Arcaea共通テスト",
    number: "第2回",
    date: "2027年1月16日実施予定",
    schedule: "実施予定",
    pdfLink: null,  // Set to PDF path when available
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdbwH0C1dw6ubCxotYqr0XpXJqIVglmb9HaDA46SOMcvZB5KQ/viewform?usp=header",  // Set to Google Form URL when available
    // JST datetime for countdown (YYYY, MM-1, DD, HH, MM, SS)
    examDateTime: new Date(2027, 0, 16, 20, 0, 0)  // Jan 10, 2027 12:00 JST
};

export const exams = [
    {
      id: "main1",
      number: "第1回",
      title: "Arcaea共通テスト",
      date: "2026年1月10日実施",
      description: "Arcaea共通テスト",
      links: {
          question: "assets/2026/2026_question_01.pdf",
          answer: "assets/2026/2026_answer_01.pdf",
          form: "https://docs.google.com/forms/d/e/1FAIpQLSdbwH0C1dw6ubCxotYqr0XpXJqIVglmb9HaDA46SOMcvZB5KQ/viewform?usp=header"  // Google Form link (set to actual URL when available)
      },
      stats: {
          statsDate: "2026.3.2時点",
          takers: 14,
          average: 52.3,
          stdDev: 12.1,
          min: 38,
          median: 49,
          max: 72
      }
  },
];
