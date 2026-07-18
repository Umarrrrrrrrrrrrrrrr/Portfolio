import './App.css'

const projects = [
  {
    title: 'Immersive Brand Room',
    type: '3D Web Experience',
    description:
      'A scroll-led product reveal with floating panels, soft lighting, and conversion-focused storytelling.',
    stack: ['React', 'Tailwind', 'Motion'],
  },
  {
    title: 'Studio Commerce',
    type: 'UI System',
    description:
      'A premium storefront concept with modular sections, crisp product cards, and mobile-first flows.',
    stack: ['Design System', 'Vite', 'CSS 3D'],
  },
  {
    title: 'Creator Dashboard',
    type: 'Product Design',
    description:
      'A focused dashboard for tracking content, clients, launches, and weekly creative performance.',
    stack: ['UX', 'Analytics', 'Frontend'],
  },
]

const skills = ['3D Interfaces', 'React Apps', 'Tailwind CSS', 'Responsive UI', 'Brand Systems', 'Micro-interactions']

function App() {
  const year = new Date().getFullYear()

  return (
    <main className="min-h-screen overflow-hidden bg-[#0f1115] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between py-6">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md border border-white/15 bg-white/10 font-semibold shadow-2xl shadow-teal-500/10 backdrop-blur">
              UA
            </span>
            <span className="hidden text-sm font-medium text-white/75 sm:block">Umar Ansari</span>
          </a>
          <nav className="flex items-center gap-1 rounded-md border border-white/10 bg-white/8 p-1 text-sm text-white/70 shadow-2xl shadow-black/20 backdrop-blur">
            <a className="rounded px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#work">
              Work
            </a>
            <a className="rounded px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#skills">
              Skills
            </a>
            <a className="rounded bg-white px-3 py-2 font-medium text-[#121417] transition hover:bg-teal-100" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <section id="home" className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1fr_0.95fr] lg:py-16">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-md border border-teal-300/20 bg-teal-300/10 px-3 py-2 text-sm font-medium text-teal-100">
              3D designer and front-end developer
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Building sharp digital spaces with depth.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              I design and build portfolio sites, product interfaces, and immersive web moments that feel premium,
              fast, and easy to use.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-md bg-teal-300 px-5 py-3 text-center font-semibold text-[#071311] shadow-2xl shadow-teal-400/20 transition hover:bg-teal-200" href="#work">
                View Work
              </a>
              <a className="rounded-md border border-white/15 bg-white/8 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/14" href="#contact">
                Start a Project
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[620px]" aria-hidden="true">
            <div className="absolute inset-x-4 bottom-6 h-24 rounded-[50%] bg-black/45 blur-3xl" />
            <div className="scene">
              <div className="portfolio-cube">
                <div className="cube-face cube-front">
                  <span>Portfolio</span>
                  <strong>2026</strong>
                </div>
                <div className="cube-face cube-back">
                  <span>React</span>
                  <strong>UI</strong>
                </div>
                <div className="cube-face cube-right">
                  <span>3D</span>
                  <strong>Web</strong>
                </div>
                <div className="cube-face cube-left">
                  <span>Brand</span>
                  <strong>UX</strong>
                </div>
                <div className="cube-face cube-top" />
                <div className="cube-face cube-bottom" />
              </div>
              <div className="orbit-card orbit-one">Selected Work</div>
              <div className="orbit-card orbit-two">Available Now</div>
              <div className="orbit-card orbit-three">Tailwind CSS</div>
            </div>
          </div>
        </section>
      </div>

      <section id="work" className="relative border-y border-white/10 bg-white/[0.035] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Selected projects</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Designed for motion, clarity, and impact.</h2>
            </div>
            <p className="max-w-md text-white/60">
              Replace these case studies with your own projects when you are ready.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                className="group rounded-lg border border-white/10 bg-[#171a20]/90 p-5 shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-teal-200/35"
                key={project.title}
              >
                <div className="mb-8 aspect-[4/3] rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(45,212,191,0.28),rgba(255,255,255,0.05)_42%,rgba(251,191,36,0.18))] p-4">
                  <div className="project-object" style={{ '--tilt': `${index * 10 - 10}deg` }}>
                    <span />
                  </div>
                </div>
                <p className="text-sm font-medium text-teal-200">{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-white/62">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span className="rounded border border-white/10 bg-white/8 px-2.5 py-1 text-sm text-white/72" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">A portfolio that feels like a studio.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <div className="rounded-md border border-white/10 bg-white/[0.055] p-4 text-lg font-medium text-white/82" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative px-5 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-teal-300 p-6 text-[#071311] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b4a42]">Let us build</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-5xl">
                Ready to turn your work into a portfolio people remember?
              </h2>
            </div>
            <a className="rounded-md bg-[#101412] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#24302c]" href="mailto:hello@example.com">
              hello@example.com
            </a>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto flex max-w-7xl flex-col gap-3 px-5 pb-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <span>© {year} Umar Ansari</span>
        <span>Designed with React, Vite, and Tailwind CSS.</span>
      </footer>
    </main>
  )
}

export default App
