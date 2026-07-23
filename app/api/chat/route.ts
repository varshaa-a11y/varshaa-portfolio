import { NextResponse } from "next/server";
import Groq from "groq-sdk";

// ─── Resume-sourced system prompt ────────────────────────────────────────────
// Data extracted from: "White and Blue Minimalist Professional Corporate ATS Resume"
// Author confirmed in PDF metadata: Varshaa Esakkivelu
// ─────────────────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are a friendly, professional AI assistant embedded in Varshaa Esakkivelu's personal portfolio website. Your job is to help visitors learn about Varshaa accurately and engagingly. Answer questions concisely in 2–4 sentences unless the visitor explicitly asks for more detail. Always be warm and enthusiastic about Varshaa's capabilities.

---

**Full Name:** Varshaa Esakkivelu
**Also known as:** Varshaa E
**Location:** Chennai, India
**Email:** varshaamcc@gmail.com
**Phone:** 9025601622

**Objective:**
Enthusiastic BSc Computer Science student with foundational skills in Python, SQL, and data visualization tools like Tableau and Excel. Passionate about learning new technologies and applying knowledge to real-world problems.

**Education:**
1. BSc Computer Science — Madras Christian College, Tambaram (June 2024 – May 2027), Current CGPA: 8.0
2. Higher Secondary Education (12th) — NSN Group of Schools (2023–2024), Percentage: 78%

**Work Experience:**
- Intern at Aptiv Connection Systems India Private Limited (May 2026 – June 2026)
  • Cleaned and analyzed large business datasets to improve data accuracy
  • Performed data analysis using Microsoft Excel
  • Created interactive dashboards in Power BI to visualize business insights
  • Assisted in preparing reports to support data-driven decision-making
  • Tools used: Microsoft Excel, Power BI

**Technical Skills:** Python, Tableau, Excel, SQL, Power BI

**Soft Skills:** Communication, Leadership, Quick Learner

**Projects:**
- Industrial Business Website: Designed a responsive website to showcase industrial products and company information. Planned the website structure and enhanced usability.

**Achievements:**
- Won Best Student–Teacher Award
- Won Best Motivational Speaker Award

**Languages spoken:** English, Tamil, Hindi, German

---

If a visitor asks about something not in the above data, be honest that you don't have that specific information and suggest they contact Varshaa directly at varshaamcc@gmail.com.`;

export async function POST(request: Request) {
  try {
    // GROQ_API_KEY is read server-side only — never sent to the client
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          reply:
            "The chatbot isn't configured yet — the API key is missing. Please check back soon, or reach out to Varshaa directly at varshaamcc@gmail.com!",
        },
        { status: 200 }
      );
    }

    const body = await request.json();
    const messages: { role: "user" | "assistant"; content: string }[] =
      body.messages ?? [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { reply: "Please send a message to get started!" },
        { status: 200 }
      );
    }

    const groq = new Groq({ apiKey });

    const completion = await groq.chat.completions.create({
      // Confirmed live models (as of 2026-07): llama-3.1-8b-instant, openai/gpt-oss-20b
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply =
      completion.choices[0]?.message?.content?.trim() ||
      "Sorry, I couldn't generate a response right now. Please try again!";

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("[/api/chat] Groq API error:", error);
    return NextResponse.json(
      {
        reply:
          "Oops! Something went wrong on my end. Please try again, or reach out to Varshaa directly at varshaamcc@gmail.com.",
      },
      { status: 500 }
    );
  }
}
