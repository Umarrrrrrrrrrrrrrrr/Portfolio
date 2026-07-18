import './App.css'

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Django', 'Node.js', 'Express', 'ASP.NET'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Oracle'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'C#'],
  },
  {
    title: 'AI / Machine Learning',
    skills: ['PyTorch', 'Hugging Face', 'scikit-learn', 'NLP'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Figma'],
  },
]

const projects = [
  {
    title: 'AI Study Assistant',
    category: 'AI / NLP',
    description:
      'A learning assistant concept that summarizes notes, answers questions, and helps students revise with AI-powered prompts.',
    stack: ['Python', 'Transformers', 'React', 'Tailwind'],
    challenge: 'Designed a clear workflow for turning long study material into useful summaries and Q&A.',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Full-Stack Portfolio CMS',
    category: 'Full-Stack App',
    description:
      'A dashboard for managing projects, skills, experience, and profile content from one structured admin interface.',
    stack: ['Django', 'PostgreSQL', 'React', 'REST API'],
    challenge: 'Organized portfolio content as reusable data so updates can happen without editing the front end.',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: '3D Developer Portfolio',
    category: 'Frontend Experience',
    description:
      'This responsive portfolio interface uses Tailwind CSS, CSS 3D transforms, and clean sections for recruiters.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'CSS 3D'],
    challenge: 'Balanced a memorable 3D visual style with readable content and fast page performance.',
    github: 'https://github.com/',
    demo: '#home',
  },
]

const experience = [
  {
    role: 'Software Engineering Student',
    company: 'Academic and Personal Projects',
    dates: '2024 - Present',
    points: [
      'Building full-stack applications with React, Django, Node.js, and relational databases.',
      'Exploring AI and NLP workflows using Python, PyTorch, Hugging Face Transformers, and scikit-learn.',
      'Practicing version control, API testing, responsive design, and clean project documentation.',
    ],
  },
  {
    role: 'Open to Internships',
    company: 'Software Engineering / Full-Stack / AI',
    dates: 'Now',
    points: [
      'Seeking opportunities to contribute to real products, learn from engineering teams, and ship useful features.',
      'Interested in roles that combine web development, backend systems, and applied AI.',
    ],
  },
]

const certifications = [
  'freeCodeCamp Responsive Web Design',
  'Coursera Python / AI Coursework',
  'Microsoft or Google Cloud Fundamentals',
]

const achievements = [
  'Built multiple portfolio-ready full-stack and AI project concepts.',
  'Developed a growing technical stack across frontend, backend, databases, and machine learning.',
  'Prepared for internships with project-based learning and practical software engineering workflows.',
]

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-lg leading-8 text-white/62">{copy}</p> : null}
    </div>
  )
}

function App() {
  const year = new Date().getFullYear()

  return (
    <main id="home" className="min-h-screen overflow-hidden bg-[#0f1115] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.22),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(251,191,36,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f1115]/82 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md border border-white/15 bg-white/10 font-semibold shadow-2xl shadow-teal-500/10">
              UA
            </span>
            <span className="hidden text-sm font-medium text-white/75 sm:block">Umar Abdulla Ansari</span>
          </a>
          <nav className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/8 p-1 text-sm text-white/70 shadow-2xl shadow-black/20 md:flex">
            {navItems.map(([label, href]) => (
              <a className="rounded px-3 py-2 transition hover:bg-white/10 hover:text-white" href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <a className="rounded-md bg-teal-300 px-4 py-2 text-sm font-semibold text-[#071311] transition hover:bg-teal-200" href="#contact">
            Hire Me
          </a>
        </div>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-md border border-teal-300/20 bg-teal-300/10 px-3 py-2 text-sm font-medium text-teal-100">
            Software Engineer | Full-Stack Developer | AI Enthusiast
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Umar Abdulla Ansari
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            Building scalable web applications and AI-powered solutions with clean interfaces, practical systems, and a
            strong focus on learning by shipping.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-md bg-teal-300 px-5 py-3 text-center font-semibold text-[#071311] shadow-2xl shadow-teal-400/20 transition hover:bg-teal-200" href="#projects">
              View Projects
            </a>
            <a className="rounded-md border border-white/15 px-5 py-3 text-center font-semibold text-white/82 transition hover:bg-white/10 hover:text-white" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[620px]" aria-hidden="true">
          <div className="absolute inset-x-4 bottom-6 h-24 rounded-[50%] bg-black/45 blur-3xl" />
          <div className="scene">
            <div className="portfolio-cube">
              <div className="cube-face cube-front">
                <span>Portfolio</span>
                <strong>Umar</strong>
              </div>
              <div className="cube-face cube-back">
                <span>AI</span>
                <strong>NLP</strong>
              </div>
              <div className="cube-face cube-right">
                <span>Full Stack</span>
                <strong>Web</strong>
              </div>
              <div className="cube-face cube-left">
                <span>React</span>
                <strong>UI</strong>
              </div>
              <div className="cube-face cube-top" />
              <div className="cube-face cube-bottom" />
            </div>
            <div className="orbit-card orbit-one">Software Engineering</div>
            <div className="orbit-card orbit-two">Open to Internships</div>
            <div className="orbit-card orbit-three">Tailwind CSS</div>
          </div>
        </div>
      </section>

      <section id="about" className="relative border-y border-white/10 bg-white/[0.035] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1fr]">
          <SectionHeading
            eyebrow="About me"
            title="A software engineering student building across web and AI."
            copy="I am focused on becoming the kind of engineer who can understand a problem, design a useful solution, and build it with care."
          />
          <div className="space-y-5 text-lg leading-8 text-white/68">
            <p>
              I am Umar Abdulla Ansari, a software engineering student interested in full-stack development, modern
              frontend design, backend systems, databases, and applied AI.
            </p>
            <p>
              I enjoy working with React, Tailwind CSS, Django, Node.js, and Python. I am also learning AI and machine
              learning tools like PyTorch, Hugging Face Transformers, scikit-learn, and NLP workflows.
            </p>
            <p>
              I am looking for internship and junior software engineering opportunities where I can contribute to real
              projects, keep improving technically, and grow into a strong product-minded engineer.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Skills"
          title="Technical stack"
          copy="Organized by the areas employers and collaborators usually care about first."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article className="rounded-lg border border-white/10 bg-[#171a20]/90 p-5 shadow-2xl shadow-black/20" key={group.title}>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span className="rounded border border-white/10 bg-white/8 px-3 py-1.5 text-sm text-white/72" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="relative border-y border-white/10 bg-white/[0.035] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured projects"
            title="Full-stack and AI-focused project stories"
            copy="Use these cards for your best three to six projects. Add real screenshots, live demos, and GitHub links as you publish them."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article className="group rounded-lg border border-white/10 bg-[#171a20]/90 p-5 shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-teal-200/35" key={project.title}>
                <div className="mb-7 aspect-[4/3] rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(45,212,191,0.28),rgba(255,255,255,0.05)_42%,rgba(251,191,36,0.18))] p-4">
                  <div className="project-object" style={{ '--tilt': `${index * 10 - 10}deg` }}>
                    <span />
                  </div>
                </div>
                <p className="text-sm font-medium text-teal-200">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-white/62">{project.description}</p>
                <p className="mt-4 text-sm leading-6 text-white/50">
                  <span className="font-semibold text-white/72">Challenge solved:</span> {project.challenge}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span className="rounded border border-white/10 bg-white/8 px-2.5 py-1 text-sm text-white/72" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#121417] transition hover:bg-teal-100" href={project.github} target="_blank">
                    GitHub
                  </a>
                  <a className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition hover:bg-white/10" href={project.demo}>
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Experience"
          title="Learning, building, and preparing for real engineering teams"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {experience.map((item) => (
            <article className="rounded-lg border border-white/10 bg-[#171a20]/90 p-6" key={`${item.role}-${item.company}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">{item.dates}</p>
              <h3 className="mt-3 text-2xl font-semibold">{item.role}</h3>
              <p className="mt-1 text-white/58">{item.company}</p>
              <ul className="mt-5 space-y-3 text-white/64">
                {item.points.map((point) => (
                  <li className="leading-7" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="relative border-y border-white/10 bg-white/[0.035] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-white/10 bg-[#171a20]/90 p-6 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">Education</p>
            <h2 className="mt-3 text-3xl font-semibold">Software Engineering</h2>
            <p className="mt-4 text-lg leading-8 text-white/64">
              Add your college or university name, degree title, graduation year, and strongest relevant coursework here.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Data Structures', 'Web Development', 'Databases', 'AI / ML', 'Software Design'].map((course) => (
                <span className="rounded border border-white/10 bg-white/8 px-3 py-1.5 text-sm text-white/72" key={course}>
                  {course}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-lg border border-white/10 bg-[#171a20]/90 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Focus</p>
            <h2 className="mt-3 text-3xl font-semibold">Career direction</h2>
            <p className="mt-4 leading-7 text-white/62">
              I am focused on internships and junior roles where I can build full-stack features, learn production
              workflows, and apply AI to practical problems.
            </p>
          </article>
        </div>
      </section>

      <section id="certifications" className="relative mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        <article className="rounded-lg border border-white/10 bg-[#171a20]/90 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">Certifications</p>
          <h2 className="mt-3 text-3xl font-semibold">Courses and credentials</h2>
          <div className="mt-6 space-y-3">
            {certifications.map((item) => (
              <p className="rounded-md border border-white/10 bg-white/7 px-4 py-3 text-white/70" key={item}>
                {item}
              </p>
            ))}
          </div>
        </article>
        <article className="rounded-lg border border-white/10 bg-[#171a20]/90 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Achievements</p>
          <h2 className="mt-3 text-3xl font-semibold">Milestones</h2>
          <div className="mt-6 space-y-3">
            {achievements.map((item) => (
              <p className="rounded-md border border-white/10 bg-white/7 px-4 py-3 text-white/70" key={item}>
                {item}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section id="contact" className="relative px-5 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-lg border border-white/10 bg-teal-300 p-6 text-[#071311] sm:p-8 lg:grid-cols-[0.9fr_1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b4a42]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Let us connect.</h2>
            <p className="mt-4 max-w-xl leading-7 text-[#123c36]">
              I am open to internships, junior developer roles, freelance projects, and collaborations around full-stack
              development or AI-powered products.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold sm:grid-cols-2">
              <a className="rounded-md bg-[#101412] px-4 py-3 text-white transition hover:bg-[#24302c]" href="mailto:umar@example.com">
                umar@example.com
              </a>
              <a className="rounded-md border border-[#071311]/15 px-4 py-3 transition hover:bg-white/40" href="https://github.com/" target="_blank">
                GitHub
              </a>
              <a className="rounded-md border border-[#071311]/15 px-4 py-3 transition hover:bg-white/40" href="https://www.linkedin.com/" target="_blank">
                LinkedIn
              </a>
              <span className="rounded-md border border-[#071311]/15 px-4 py-3">Kathmandu, Nepal</span>
            </div>
          </div>
          <form className="grid gap-3">
            <input className="rounded-md border border-[#071311]/15 bg-white/70 px-4 py-3 text-[#071311] outline-none transition placeholder:text-[#071311]/45 focus:border-[#071311]/40" placeholder="Your name" type="text" />
            <input className="rounded-md border border-[#071311]/15 bg-white/70 px-4 py-3 text-[#071311] outline-none transition placeholder:text-[#071311]/45 focus:border-[#071311]/40" placeholder="Email address" type="email" />
            <textarea className="min-h-32 rounded-md border border-[#071311]/15 bg-white/70 px-4 py-3 text-[#071311] outline-none transition placeholder:text-[#071311]/45 focus:border-[#071311]/40" placeholder="Tell me about the opportunity" />
            <button className="rounded-md bg-[#101412] px-5 py-3 font-semibold text-white transition hover:bg-[#24302c]" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="relative mx-auto flex max-w-7xl flex-col gap-3 px-5 pb-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <span>© {year} Umar Abdulla Ansari</span>
        <a className="transition hover:text-white" href="#home">
          Back to top
        </a>
      </footer>
    </main>
  )
}

export default App
