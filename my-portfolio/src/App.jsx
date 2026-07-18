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
          <article className="hero-info cube-info">
            <a className="about-cube-link" href="#about" aria-label="Learn more about me">
              <span className="about-cube" aria-hidden="true">
                <span className="cube-face cube-front">
                  <strong>About Me</strong>
                  <small>Web Developer</small>
                </span>
                <span className="cube-face cube-back">
                  <strong>Clean Code</strong>
                  <small>React + UI</small>
                </span>
                <span className="cube-face cube-right">
                  <strong>Creative</strong>
                  <small>Problem Solver</small>
                </span>
                <span className="cube-face cube-left">
                  <strong>Modern</strong>
                  <small>Responsive Sites</small>
                </span>
                <span className="cube-face cube-top">
                  <strong>Learning</strong>
                  <small>Every Project</small>
                </span>
                <span className="cube-face cube-bottom">
                  <strong>Let&apos;s Build</strong>
                  <small>Something Useful</small>
                </span>
              </span>
            </a>
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
        <div className="about-heading">
          <p className="eyebrow">About</p>
          <h2>Hi, I&apos;m Umar Abdulla Ansari.</h2>
          <p>
            I&apos;m a web developer who enjoys building modern, responsive, and
            user-friendly web experiences.
          </p>
        </div>
        <div className="about-content">
          <p>
            I specialize in creating clean interfaces with HTML, CSS,
            JavaScript, React, Node.js, and database-driven application
            workflows. I like turning ideas into real digital products that are
            simple to use, easy to maintain, and built with care.
          </p>
          <p>
            My journey into web development started with curiosity about how
            websites work and grew into a strong interest in solving problems
            through code. Every project helps me improve my design thinking,
            frontend skills, backend understanding, and ability to build
            practical solutions from scratch.
          </p>
          <div className="about-highlights" aria-label="About me highlights">
            <span>Responsive UI</span>
            <span>Clean Code</span>
            <span>React Development</span>
            <span>Problem Solving</span>
          </div>
          <p>
            What makes my work different is my focus on clarity. I enjoy
            breaking complex problems into simple steps, writing maintainable
            code, and designing experiences that feel smooth for real users.
          </p>
          <p>
            Outside coding, I enjoy exploring new tools, learning about modern
            technology, and working on personal projects that challenge me to
            grow. I&apos;m currently improving my skills in full-stack development,
            cloud tools, and AI-powered web experiences.
          </p>
          <p>
            I&apos;m always excited to collaborate on meaningful projects. If
            you&apos;d like to build something useful together, feel free to get in
            touch.
          </p>
          <a className="about-action" href="#contact">Let&apos;s Work Together</a>
        </div>
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
