"""Builds the e-book PDFs in public/downloads/ebooks/ from content/ebooks/data.json.

Run from the project root:  python scripts/build-ebooks.py
Needs reportlab (pip install reportlab). Also writes each e-book's page count back into data.json.
"""
import json
from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, ListFlowable, ListItem, PageBreak, CondPageBreak, PageTemplate, Paragraph, Spacer, NextPageTemplate

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "content" / "ebooks" / "data.json"
OUT = ROOT / "public" / "downloads" / "ebooks"
BRAND = "SyntecHire"
ORANGE = HexColor("#ff5a1f")
INK = HexColor("#1b2433")
MUTED = HexColor("#5b6678")

TONES = {
    "violet": ("#2a2160", "#0d0a1c", "#8f82ff"),
    "teal": ("#0f4547", "#061516", "#5fe0d6"),
    "blue": ("#153762", "#07101d", "#6fb0ff"),
    "amber": ("#5a2c10", "#170d07", "#ffb36b"),
}

W, H = A4
M = 22 * mm

body = ParagraphStyle("body", fontName="Helvetica", fontSize=10.5, leading=16, textColor=INK, spaceAfter=8, alignment=TA_LEFT)
h1 = ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=22, leading=27, textColor=INK, spaceAfter=6)
h2 = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=12, leading=16, textColor=INK, spaceBefore=10, spaceAfter=6)
kicker = ParagraphStyle("kicker", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=ORANGE, spaceAfter=4)
lead = ParagraphStyle("lead", fontName="Helvetica", fontSize=12, leading=18, textColor=MUTED, spaceAfter=14)
toc = ParagraphStyle("toc", fontName="Helvetica", fontSize=11, leading=22, textColor=INK)
li = ParagraphStyle("li", parent=body, spaceAfter=3)


def esc(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def build(book):
    top, bottom, accent = (HexColor(c) for c in TONES[book["tone"]])
    path = OUT / f"{book['slug']}.pdf"

    def cover(canvas, doc):
        canvas.saveState()
        steps = 60
        for i in range(steps):  # vertical gradient
            t = i / (steps - 1)
            canvas.setFillColorRGB(top.red + (bottom.red - top.red) * t, top.green + (bottom.green - top.green) * t, top.blue + (bottom.blue - top.blue) * t)
            canvas.rect(0, H - (i + 1) * H / steps, W, H / steps + 1, stroke=0, fill=1)
        canvas.setFillColor(accent)
        canvas.setFillAlpha(0.18)
        canvas.circle(W * 0.82, H * 0.7, 120 * mm, stroke=0, fill=1)
        canvas.setFillAlpha(1)
        canvas.setFillColor(ORANGE)
        canvas.rect(M, H - 62 * mm, 18 * mm, 2.2 * mm, stroke=0, fill=1)
        canvas.setFillColor(white)
        canvas.setFont("Helvetica-Bold", 11)
        canvas.drawString(M, H - 52 * mm, book["category"].upper())
        canvas.setFont("Helvetica-Bold", 13)
        canvas.drawString(M, 22 * mm, BRAND)
        canvas.setFont("Helvetica", 9)
        canvas.setFillAlpha(0.7)
        canvas.drawString(M, 16 * mm, "E-book")
        canvas.restoreState()

    def page(canvas, doc):
        canvas.saveState()
        canvas.setStrokeColor(HexColor("#e3e7ee"))
        canvas.line(M, 16 * mm, W - M, 16 * mm)
        canvas.setFont("Helvetica", 8.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(M, 11 * mm, f"{BRAND}  |  {book['title']}")
        canvas.drawRightString(W - M, 11 * mm, str(doc.page - 1))
        canvas.restoreState()

    doc = BaseDocTemplate(str(path), pagesize=A4, title=book["title"], author=BRAND, subject=book["subtitle"])
    doc.addPageTemplates(
        [
            PageTemplate(id="cover", frames=[Frame(M, 60 * mm, W - 2 * M, H - 140 * mm, id="c", leftPadding=0, rightPadding=0)], onPage=cover),
            PageTemplate(id="page", frames=[Frame(M, 22 * mm, W - 2 * M, H - 44 * mm, id="p", leftPadding=0, rightPadding=0)], onPage=page),
        ]
    )

    cover_title = ParagraphStyle("ct", fontName="Helvetica-Bold", fontSize=34, leading=40, textColor=white, spaceAfter=14)
    cover_sub = ParagraphStyle("cs", fontName="Helvetica", fontSize=14, leading=21, textColor=HexColor("#d5dcef"))

    story = [Spacer(1, 18 * mm), Paragraph(esc(book["title"]), cover_title), Paragraph(esc(book["subtitle"]), cover_sub), NextPageTemplate("page"), PageBreak()]

    story += [Paragraph("INSIDE THIS E-BOOK", kicker), Paragraph("Contents", h1), Spacer(1, 6)]
    for i, ch in enumerate(book["chapters"], 1):
        story.append(Paragraph(f"<font color='#ff5a1f'><b>{i:02d}</b></font>&nbsp;&nbsp;&nbsp;{esc(ch['title'])}", toc))
    story += [Spacer(1, 14), Paragraph("What you will learn", h2)]
    story.append(ListFlowable([ListItem(Paragraph(esc(x), li), leftIndent=14) for x in book["learn"]], bulletType="bullet", start="•", leftIndent=14, bulletColor=ORANGE))
    story += [Spacer(1, 10), Paragraph("Who it is for", h2)]
    story.append(ListFlowable([ListItem(Paragraph(esc(x), li), leftIndent=14) for x in book["audience"]], bulletType="bullet", start="•", leftIndent=14, bulletColor=ORANGE))
    story.append(PageBreak())

    for i, ch in enumerate(book["chapters"], 1):
        story += [Paragraph(f"CHAPTER {i:02d}", kicker), Paragraph(esc(ch["title"]), h1), Paragraph(esc(ch["summary"]), lead)]
        for text in ch["paragraphs"]:
            story.append(Paragraph(esc(text), body))
        if ch.get("bullets"):
            story.append(Paragraph("Key points", h2))
            story.append(ListFlowable([ListItem(Paragraph(esc(x), li), leftIndent=14) for x in ch["bullets"]], bulletType="bullet", start="•", leftIndent=14, bulletColor=ORANGE))
        story.append(CondPageBreak(95 * mm))

    end_title = ParagraphStyle("et", parent=h1, fontSize=20)
    story += [
        Paragraph("NEXT STEP", kicker),
        Paragraph("Talk to an engineer", end_title),
        Paragraph(f"If you would like help applying this guide to your own project, {BRAND} can review your plan and suggest a practical way forward. Request a conversation on our website and a senior engineer will reply within two working days.", body),
    ]

    doc.build(story)
    return doc.page


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    books = json.loads(DATA.read_text(encoding="utf-8"))
    for book in books:
        pages = build(book)
        book["pages"] = pages
        print(book["slug"], pages, "pages")
    DATA.write_text(json.dumps(books, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
