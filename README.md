# Bold Developer Showcase

Build a complete, single-page portfolio website for a Software Developer using React + Tailwind CSS (or plain HTML/CSS/JS if React isn't available). The site should be bold, colorful, and creative — designed to stand out, not look like a generic template. Make it production-ready in one shot: fully responsive, accessible, and visually polished.

=== DESIGN DIRECTION ===
- Bold & colorful aesthetic: vibrant gradient accents (e.g. electric blue → purple → magenta, or teal → orange), confident use of color blocks, not afraid of contrast
- Dark base background (near-black or deep navy) with bright accent gradients popping against it — OR a light base with bold color-blocked sections, pick whichever supports stronger visual hierarchy
- Distinctive typography: a strong display font for headings (e.g. Space Grotesk, Clash Display, Sora) paired with a clean readable body font (Inter, Manrope)
- Avoid generic "AI startup" look: no overused purple-blue gradient blobs, no cookie-cutter centered-hero-with-stock-illustration. Use asymmetry, layered shapes, subtle grain/noise texture, or angled section dividers for personality
- Smooth scroll-triggered animations (fade/slide-up on scroll using Intersection Observer or framer-motion), subtle hover micro-interactions on buttons/cards/links
- Custom cursor or hover effects on interactive elements is a nice-to-have
- Generous whitespace despite the boldness — bold doesn't mean cluttered

=== SECTIONS TO INCLUDE ===

1. NAVBAR
- Sticky/fixed navbar with name/logo on left, nav links (About, Experience, Projects, Skills, Contact) on right
- Smooth scroll to sections on click
- Mobile: hamburger menu with slide-in/dropdown
- Subtle background blur or color change on scroll

2. HERO SECTION
- Name: Smit Parmar
- Title/role: Full Stack Developer
- Punchy one-liner: "Building scalable enterprise applications with React, .NET, and Azure"
- Subtext: Full Stack Developer specializing in enterprise web applications, RESTful APIs, workflow automation, and cloud-based solutions using React, C#, .NET Web API, SharePoint Framework (SPFx), and Microsoft Azure
- Primary CTA button: "View My Work" (scrolls to Projects)
- Secondary CTA: "Get In Touch" (scrolls to Contact) or "Download Resume"
- Bold animated/gradient background element (blob, mesh gradient, or geometric shapes) behind the text
- Optional: animated role-switcher text ("Full-Stack Developer", "Azure Enthusiast", "SPFx Specialist")

3. ABOUT
- Short narrative bio (3-4 sentences): Full Stack Developer based in Ahmedabad, India, specializing in designing, developing, and maintaining enterprise web applications using React, C#, .NET Web API, SharePoint Framework (SPFx), and Microsoft Azure. Experienced in building RESTful APIs, reusable frontend components, workflow automation with Azure Logic Apps and Power Platform, and cloud-based integrations, with a strong focus on scalable, secure, and maintainable applications
- Education:
  - Master of Computer Applications (MCA) — Charotar University of Science and Technology, Gujarat (May 2024)
  - Bachelor of Computer Applications (BCA) — Natubhai V. Patel College of Pure and Applied Sciences, Gujarat (March 2022)
- Certifications (display as badges): AWS Cloud Quest: Cloud Practitioner, MongoDB Basics (M001)

4. EXPERIENCE / WORK
- Timeline or card-based layout, most recent first

- Binary Republik — Software Developer | Ahmedabad, India | Aug 2024 - Present
  - Designed and developed enterprise web applications using React, SharePoint Framework (SPFx), C#, and .NET Web API for business process automation and collaboration
  - Developed reusable SPFx components and integrated RESTful APIs and Graph APIs for modern, responsive applications on SharePoint Online
  - Built and maintained backend services using C#, .NET Web API, and SQL Server supporting recruitment workflows, interview scheduling, candidate management, and reporting
  - Orchestrated Azure Logic Apps workflows, eliminating manual processes and streamlining recruitment operations by over 70%
  - Engineered automated Azure DevOps CI/CD pipelines for Logic App deployments, eliminating 100% of manual ARM template edits and reducing deployment lifecycle errors by 40% across Dev, QA, and Prod
  - Implemented AI-powered resume analysis and intelligent email campaign features, improving recruitment efficiency and candidate engagement
  - Developed a secure Model Context Protocol (MCP) server to expose recruitment data through authenticated APIs for AI-assisted workflows
  - Collaborated cross-functionally in an agile environment across debugging, testing, code reviews, deployment, and production issue resolution

- Rishabh Software — Trainee | Vadodara, India | Jan 2024 - Jun 2024
  - (Keep this entry brief/simple since limited detail is available — just title, company, dates, and a generic line like "Gained hands-on training in software development practices and enterprise application workflows")

- Use bold, color-coded accent bars or icons per company to make the timeline visually striking; highlight the standout metrics (70% reduction, 100% elimination, 40% reduction) as large bold callout numbers/stat cards within or beside the Binary Republik entry

5. SKILLS / TECH STACK
- Organized by category with icons (use react-icons or simple-icons for tech logos):
  - Programming Languages: C#, TypeScript, JavaScript
  - Frameworks & Libraries: React, SharePoint Framework (SPFx), .NET Web API
  - Databases: SQL Server, MySQL, PostgreSQL, MongoDB
  - Microsoft Technologies: SharePoint Online, Power Platform (Power Apps, Power Automate)
  - Cloud & DevOps: Microsoft Azure, Azure App Service, Azure Logic Apps, Azure DevOps, Microsoft Entra ID
- Display as animated skill badges/pills or category cards — bold color-coded per category

6. PROJECTS / KEY CONTRIBUTIONS
(Frame these as project highlights drawn from real work experience since specific named personal projects aren't listed)
- AI-Powered Recruitment Platform — Built AI-driven resume analysis and intelligent email campaign features integrated with recruitment workflows, improving candidate engagement and recruiter efficiency
- Recruitment Workflow Automation — Designed Azure Logic Apps-based automation eliminating manual recruitment processes, cutting operational overhead by 70%+
- CI/CD Pipeline Engineering — Built automated Azure DevOps pipelines for Logic App deployments across Dev/QA/Prod, eliminating manual ARM template edits and cutting deployment errors by 40%
- MCP Server for AI-Assisted Workflows — Developed a secure Model Context Protocol server exposing recruitment data via authenticated APIs to support AI-assisted tooling
- Use bold hover effects on cards: scale, color shift, or reveal overlay with details. Add tech stack tags per card (e.g. React, SPFx, Azure Logic Apps, C#, .NET Web API)

7. CONTACT
- Bold closing CTA section: "Let's build something great together"
- Contact links/info as large, bold icon buttons or cards with hover animations:
  - Email: smit.parmar999@gmail.com
  - Phone: +91 90547 17141
  - LinkedIn: (use placeholder URL — insert actual LinkedIn link)
  - Location: Ahmedabad, Gujarat, India
- GitHub icon/button included as a placeholder (link: github.com/yourusername) since no GitHub was specified — to be swapped in

8. FOOTER
- Simple footer: "Smit Parmar" + copyright year + small tagline (e.g. "Designed & Built with React")
- Repeat social/contact icons (small, subtle)

=== TECHNICAL REQUIREMENTS ===
- Fully responsive: mobile-first, test breakpoints for mobile/tablet/desktop
- Semantic HTML for accessibility (proper heading hierarchy, alt text, aria-labels on icon buttons)
- Fast-loading: no heavy unoptimized assets, use SVG icons where possible
- Smooth scroll behavior site-wide
- Clean, well-commented, componentized code
- Scroll-to-top button after scrolling past hero
- Mark any placeholder values clearly (LinkedIn URL, GitHub URL, resume download link) so they can be swapped in easily

=== TONE OF CONTENT ===
Confident but not arrogant, concise, technically credible. Emphasize measurable impact (70% reduction, 40% fewer errors, 100% elimination of manual steps) since these are strong differentiators. Be specific about the Microsoft/Azure ecosystem expertise rather than generic buzzwords.

Build the entire site now as a single cohesive deliverable. Use the attached resume for the details

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9396d9fb-8023-4609-83c3-2a7a009e8555).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
