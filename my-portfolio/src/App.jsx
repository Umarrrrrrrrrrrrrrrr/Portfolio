import './App.css'

const projects = [
  {
    title: 'Campus Connect',
    type: 'Full-stack app',
    description:
      'A student collaboration platform with profile matching, group spaces, and clean dashboards for everyday academic workflows.',
    stack: ['React', 'Node', 'MongoDB'],
  },
  {
    title: 'Insight Board',
    type: 'Analytics UI',
    description:
      'A focused data dashboard template with KPI cards, trend views, and responsive tables for fast business decisions.',
    stack: ['React', 'Charts', 'REST API'],
  },
  {
    title: 'Service Booking',
    type: 'Product flow',
    description:
      'A smooth appointment booking experience with service filters, time selection, and confirmation states.',
    stack: ['JavaScript', 'CSS', 'Firebase'],
  },
]

const skills = [
  'React',
  'JavaScript',
  'Responsive UI',
  'Node.js',
  'REST APIs',
  'Git',
  'Database Design',
  'Problem Solving',
]

const stats = [
  ['12+', 'Projects built'],
  ['3+', 'Core stacks'],
  ['100%', 'Learning mindset'],
]

function App() {
  return (
    <main className="portfolio-shell">
      <nav className="top-nav" aria-label="Primary navigation">
        <a className="brand" href="#home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Developer X</span>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#work">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="menu-button" aria-label="Open menu" type="button">
          <span />
          <span />
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="hero-line" />
          <h1>I&apos;m Umar, a Web Developer</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
            ullamcorper quis id elementum convallis lacus gravida.
          </p>
          <a className="scroll-action" href="#work" aria-label="Scroll to portfolio">
            <span />
          </a>
        </div>

        <div className="hero-visual" aria-label="Portrait of Umar">
          <img src="/hero-portrait.png" alt="Umar Abdulla Ansari portrait" />
        </div>

        <aside className="hero-sidebar" aria-label="Portfolio introduction">
          <article className="hero-info">
            <p className="eyebrow">About Me</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
              ullamcorper quis id elementum convallis lacus gravida.
            </p>
            <a href="#about">Learn More</a>
          </article>
          <article className="hero-info">
            <p className="eyebrow">My Work</p>
            <p>
              Purus ut faucibus pulvinar elementum integer enim neque fermentum
              iaculis eu non diam phasellus dolor consectetur.
            </p>
            <a href="#work">Browse Portfolio</a>
          </article>
          <article className="hero-info hero-socials">
            <p className="eyebrow">Follow Me</p>
            <div>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">f</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">x</a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">◎</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in</a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer">▶</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">gh</a>
            </div>
          </article>
        </aside>
      </section>

      <section className="stats-strip" aria-label="Portfolio highlights">
        {stats.map(([value, label]) => (
          <div className="stat-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section about-section" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Developer with a product-minded approach.</h2>
        </div>
        <p>
          I enjoy turning ideas into useful, attractive interfaces. My work sits
          at the intersection of clear design, maintainable code, and thoughtful
          user experience.
        </p>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Project templates ready to personalize.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Toolkit</p>
          <h2>Skills that support reliable builds.</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Available For Work</p>
          <h2>Let&apos;s build something sharp and useful.</h2>
        </div>
        <a className="primary-action" href="mailto:hello@example.com">
          Start a Conversation
        </a>
      </section>
    </main>
  )
}

export default App
