const publications = [
  {
    year: '2026',
    title: 'Inferring Transferable Rewards via Active Inverse Reinforcement Learning',
    venue: 'EWRL',
    highlight: 'Oral presentation',
  },
  {
    year: '2026',
    title: 'Inference of Altruism and Intrinsic Rewards in Multi-Agent Systems',
    venue: 'AAMAS',
  },
  {
    year: '2026',
    title: 'Fair Contracts in Principal–Agent Games with Heterogeneous Types',
    venue: 'AAMAS',
    note: 'Extended abstract',
  },
  {
    year: '2025',
    title: 'A Minimax Approach to Ad Hoc Teamwork',
    venue: 'AAMAS',
  },
  {
    year: '2024',
    title: 'Environment Design for Inverse Reinforcement Learning',
    venue: 'ICML',
    highlight: 'Oral · Top 1%',
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
          <p className="eyebrow">Machine Learning PhD · Geneva -  Lausanne, Switzerland</p>
          <h2 className="hero-title">Learning what drives intelligent behaviour.</h2>
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

      <section className="section research-section" id="research">
        <p className="section-label">Research</p>
        <div className="section-body intro-grid">
          <p className="statement">
            My research starts from a simple idea: when behaviour is ambiguous, change the
            conditions under which you observe it.
          </p>
          <div className="research-notes">
            <p>
              I am completing my PhD in Computer Science at the University of Neuchâtel,
              advised by Prof. Christos Dimitrakakis. My thesis, <em>Environmental
              Interventions for Efficient Reward Inference and Robust Teamwork</em>, asks how
              carefully changing an agent’s environment can reveal the objectives behind its
              decisions and help train systems that cooperate with unfamiliar partners.
            </p>
            <p>
              I enjoy finding mathematical formulations for difficult AI problems just as much
              as tackling them in practice, building systems, and testing ideas through their
              implementations.
            </p>
            <p>
              My work spans inverse reinforcement learning, active learning, multi-agent
              systems, and ad hoc teamwork. I care about methods that use fewer demonstrations,
              separate individual preferences from social incentives, and remain reliable when
              environments or partners change.
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
                <small>
                  {publication.venue}
                  {publication.note && <> · {publication.note}</>}
                  {publication.highlight && <> · <span className="oral">{publication.highlight}</span></>}
                </small>
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
