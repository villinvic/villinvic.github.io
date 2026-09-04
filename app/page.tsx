const publications = [
  {
    year: '2026',
    title: 'Inferring Transferable Rewards via Active Inverse Reinforcement Learning',
    venue: 'EWRL · Oral presentation',
  },
  {
    year: '2026',
    title: 'Inference of Altruism and Intrinsic Rewards in Multi-Agent Systems',
    venue: 'AAMAS',
  },
  {
    year: '2026',
    title: 'Fair Contracts in Principal–Agent Games with Heterogeneous Types',
    venue: 'AAMAS · Extended abstract',
  },
  {
    year: '2025',
    title: 'A Minimax Approach to Ad Hoc Teamwork',
    venue: 'AAMAS',
  },
  {
    year: '2024',
    title: 'Environment Design for Inverse Reinforcement Learning',
    venue: 'ICML · Oral · Top 1%',
  },
];

const projects = [
  {
    name: 'SeedSmash',
    meta: '2022—Present',
    description:
      'An open multi-agent reinforcement learning tournament where people design agents, watch them learn, and see them compete in Super Smash Bros. Melee.',
    href: 'https://seedsmash.ai',
    cta: 'Visit SeedSmash',
  },
  {
    name: 'Polaris',
    meta: '2024—Present',
    description:
      'A modular distributed deep-RL framework for asynchronous rollouts, batched inference, recurrent policies, and large-scale multi-agent experiments.',
    href: 'https://github.com/villinvic',
    cta: 'View on GitHub',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Victor Villin, home">Victor Villin</a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="/Victor-Villin-CV.pdf">CV</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">PhD researcher · Geneva -- Lausanne, Switzerland</p>
          <h1>Learning what drives intelligent behaviour.</h1>
          <p className="lede">
            I’m Victor, a machine learning researcher working on reinforcement learning,
            reward inference, and multi-agent systems. I build theoretically grounded
            algorithms—and the systems needed to test them at scale.
          </p>
          <div className="hero-links" aria-label="Profile links">
            <a href="mailto:victor.villin@unine.ch">Email <span aria-hidden="true">↗</span></a>
            <a href="https://scholar.google.com/citations?user=A1g8314AAAAJ&hl=en">Scholar <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/villinvic">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/victor-villin/">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure className="portrait-wrap">
          <img className="portrait" src="/victor-villin.jpg" alt="Victor Villin smiling outdoors" width="560" height="700" />
        </figure>
      </section>

      <section className="section split research-section" id="research">
        <p className="section-label">Research</p>
        <div className="section-body intro-grid">
          <p className="statement">
            My research asks how we can infer the hidden objectives behind behaviour—and
            use that understanding to build agents that cooperate, adapt, and generalise.
          </p>
          <div className="research-notes">
            <p>
              I am completing a PhD in Computer Science at the University of Neuchâtel,
              advised by Prof. Christos Dimitrakakis. My thesis studies efficient reward
              inference and cooperation in multi-agent systems.
            </p>
            <p>
              I care equally about clear mathematical formulations and robust implementation,
              from theoretical guarantees to distributed training across thousands of
              environment frames per second.
            </p>
          </div>
        </div>
      </section>

      <section className="section split" id="publications">
        <p className="section-label">Selected publications</p>
        <div className="section-body publication-list">
          {publications.map((publication) => (
            <a className="publication" href="https://scholar.google.com/citations?user=A1g8314AAAAJ&hl=en" key={publication.title}>
              <span className="pub-year">{publication.year}</span>
              <span>
                <strong>{publication.title}</strong>
                <small>{publication.venue}</small>
              </span>
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
          <a className="text-link" href="https://scholar.google.com/citations?user=A1g8314AAAAJ&hl=en">
            All publications on Google Scholar <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="section split" id="projects">
        <p className="section-label">Selected projects</p>
        <div className="section-body project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.name}>
              <div className="project-topline">
                <h2>{project.name}</h2>
                <span>{project.meta}</span>
              </div>
              <p>{project.description}</p>
              <a href={project.href}>{project.cta} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>Victor Villin</p>
        <a href="mailto:victor.villin@unine.ch">Drop me a line <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
