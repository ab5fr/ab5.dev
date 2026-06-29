"""Generate Abdullah_Balila_CV_Clean.pdf from cv content."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATHS = [
    ROOT / "public" / "Abdullah_Balila_CV_Clean.pdf",
    ROOT / "Abdullah_Balila_CV_Clean.pdf",
]

HEADER = "ABDULLAH ZUHAIR SALEH BALILA"
CONTACT = (
    "Jeddah, Saudi Arabia  |  a2005balila@gmail.com  |  +966 571 002 462  |  "
    "ab5-dev.vercel.app  |  github.com/ab5fr  |  Open to Remote / Hybrid"
)

SUMMARY = (
    "Backend and AI engineer with a strong track record of building automation tools, bots, "
    "and developer utilities in Rust, Go, and Python. Specializes in RAG architectures, "
    "LLM-powered workflows, and end-to-end system automation—from CLI tooling and API "
    "integrations to intelligent agents using Anthropic and Gemini APIs. Skilled at designing "
    "low-latency, event-driven systems and containerized deployment pipelines, backed by a "
    "strong academic foundation in Artificial Intelligence."
)

SKILLS = [
    ("Languages", "Rust, Go, Python, TypeScript, JavaScript, Dart, Flutter"),
    (
        "Backend & APIs",
        "Axum, Tokio, Node.js, Next.js, RESTful APIs, Webhooks, WebSockets, WebRTC",
    ),
    ("AI & Data", "RAG, Qdrant (Vector DB), Anthropic API, Gemini API, AI Agents"),
    ("Databases", "PostgreSQL, MongoDB, SurrealDB, SQLite"),
    ("DevOps", "Docker, GitHub Actions (CI/CD), Nginx, Vercel"),
    ("Tooling", "Linux, Git, Cursor, GitHub Copilot"),
    (
        "Automation",
        "CLI Tooling, Bot Development, API Integration, Task Automation, Playwright",
    ),
]

PROJECTS = [
    {
        "title": "Saudi Market Feasibility AI",
        "role": "AI / RAG Engineer",
        "bullets": [
            "Built a RAG pipeline using Qdrant to parse and query Saudi legal documentation for real-time market feasibility analysis.",
            "Implemented a multi-tier LLM architecture—Gemini for standard queries, Anthropic for premium analytics—to optimize API cost allocation.",
            "Designed an automated intake pipeline that ingests user-submitted business profiles, runs multi-stage LLM processing, and generates comprehensive feasibility reports and legal frameworks with no manual intervention.",
        ],
    },
    {
        "title": "University of Jeddah AI Club Platform",
        "role": "Lead Full-Stack Developer",
        "bullets": [
            "Engineered a high-performance backend using Rust (Axum/Tokio) and PostgreSQL to centralize club operations and manage student requests.",
            "Deployed a containerized CI/CD pipeline via Docker, GitHub Actions, and Nginx for stable, consistent production delivery.",
            "Built a responsive Next.js + TailwindCSS frontend enabling seamless member access to club resources and announcements.",
        ],
    },
    {
        "title": "Devagent CLI",
        "role": "Go Developer",
        "bullets": [
            "Developed a Go CLI tool that automates developer workflows by interfacing with a RAG-based LLM API, delivering instant language documentation retrieval and code assistance directly from the terminal.",
        ],
    },
    {
        "title": "Developer Portfolio",
        "role": "ab5-dev.vercel.app",
        "bullets": [
            "Responsive personal site built with Next.js, TypeScript, and TailwindCSS, deployed on Vercel.",
        ],
        "inline": True,
    },
    {
        "title": "E2EE P2P Chat (pro-chat)",
        "role": "Full-Stack Developer",
        "bullets": [
            "Built end-to-end encrypted peer-to-peer chat with Flutter clients and a Go signaling server—the server holds no database and stores no messages.",
            "Implemented Signal Protocol (libsignal) on-device encryption and WebRTC data channels for direct encrypted message delivery between peers.",
            "Designed in-memory presence and signaling relay with SQLite local storage, group mesh P2P, and out-of-band safety-number identity verification.",
        ],
        "link": "github.com/ab5fr/pro-chat",
    },
]

EDUCATION = [
    (
        "University of Jeddah",
        "B.Sc. Artificial Intelligence",
        "Jeddah, Saudi Arabia",
        "Year 3 of 5 · Expected 2028 · GPA: 4.25 / 5.00",
    ),
    (
        "KAUST Academy",
        "Artificial Intelligence Specialization",
        None,
        "Completed: Stage 2",
    ),
]


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=14,
            leading=16,
            alignment=TA_CENTER,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#333333"),
            spaceAfter=10,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            spaceBefore=8,
            spaceAfter=4,
            textColor=colors.HexColor("#111111"),
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=12.5,
            spaceAfter=4,
        ),
        "skill": ParagraphStyle(
            "Skill",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=12,
            leftIndent=0,
            spaceAfter=2,
        ),
        "project_title": ParagraphStyle(
            "ProjectTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12,
            spaceBefore=4,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=12,
            leftIndent=14,
            bulletIndent=0,
            spaceAfter=2,
        ),
        "edu": ParagraphStyle(
            "Edu",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=12,
            spaceAfter=2,
        ),
    }


def generate_pdf(path: Path) -> None:
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(path),
        pagesize=letter,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.55 * inch,
    )
    story = []

    story.append(Paragraph(HEADER, styles["name"]))
    story.append(Paragraph(CONTACT, styles["contact"]))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor("#cccccc")))
    story.append(Spacer(1, 6))

    story.append(Paragraph("PROFESSIONAL SUMMARY", styles["section"]))
    story.append(Paragraph(SUMMARY, styles["body"]))

    story.append(Paragraph("TECHNICAL SKILLS", styles["section"]))
    for label, value in SKILLS:
        story.append(
            Paragraph(f"<b>{label}:</b> {value}", styles["skill"])
        )

    story.append(Paragraph("TECHNICAL PROJECTS", styles["section"]))
    for project in PROJECTS:
        link = project.get("link")
        title = project["title"]
        if link:
            title_text = f'{title}  (<link href="https://{link}" color="blue">{link}</link>)'
        else:
            title_text = title

        if project.get("inline"):
            story.append(
                Paragraph(
                    f'<b>{title_text}</b>  —  {project["role"]}  —  {project["bullets"][0]}',
                    styles["project_title"],
                )
            )
            continue

        story.append(
            Paragraph(
                f'<b>{title_text}</b>  —  {project["role"]}',
                styles["project_title"],
            )
        )
        for bullet in project["bullets"]:
            story.append(Paragraph(f"• {bullet}", styles["bullet"]))

    story.append(Paragraph("EDUCATION", styles["section"]))
    for institution, degree, location, detail in EDUCATION:
        loc = f"  —  {location}" if location else ""
        story.append(
            Paragraph(
                f"<b>{institution}</b>  —  {degree}{loc}",
                styles["edu"],
            )
        )
        story.append(Paragraph(detail, styles["bullet"]))

    doc.build(story)


def main() -> None:
    for path in OUTPUT_PATHS:
        path.parent.mkdir(parents=True, exist_ok=True)
        generate_pdf(path)
        print(f"Wrote {path}")


if __name__ == "__main__":
    main()
