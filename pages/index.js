import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    // Reveal on scroll
    const revealElements = Array.from(document.querySelectorAll('[data-animate]'));
    const onIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(onIntersect, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
    revealElements.forEach((el) => observer.observe(el));

    // Starfield background
    const canvas = document.getElementById('bg-stars');
    const ctx = canvas ? canvas.getContext('2d') : null;
    let animationId = 0;
    let stars = [];
    const resize = () => {
      if (!canvas || !ctx) return;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      const count = Math.min(180, Math.floor((canvas.width * canvas.height) / (4500 * ratio)));
      stars = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 0.8 + 0.2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      }));
    };
    const step = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      for (const s of stars) {
        s.x += s.vx * s.z;
        s.y += s.vy * s.z;
        if (s.x < 0) s.x = canvas.width; if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height; if (s.y > canvas.height) s.y = 0;
        const r = 0.6 + s.z * 1.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      animationId = requestAnimationFrame(step);
    };
    resize();
    step();
    window.addEventListener('resize', resize);

    // Tilt effects
    const tiltElements = Array.from(document.querySelectorAll('.tilt'));
    const handleTilt = (e) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotateX = (dy * -10).toFixed(2);
      const rotateY = (dx * 10).toFixed(2);
      target.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    };
    const resetTilt = (e) => {
      e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    };
    tiltElements.forEach((el) => {
      el.addEventListener('mousemove', handleTilt);
      el.addEventListener('mouseleave', resetTilt);
    });

    // Magnetic buttons
    const magnets = Array.from(document.querySelectorAll('.magnetic'));
    const magnetize = (e) => {
      const m = e.currentTarget;
      const rect = m.getBoundingClientRect();
      const mx = e.clientX - (rect.left + rect.width / 2);
      const my = e.clientY - (rect.top + rect.height / 2);
      m.style.transform = `translate(${mx * 0.12}px, ${my * 0.12}px)`;
    };
    const magnetLeave = (e) => {
      e.currentTarget.style.transform = 'translate(0, 0)';
    };
    magnets.forEach((m) => {
      m.addEventListener('mousemove', magnetize);
      m.addEventListener('mouseleave', magnetLeave);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
      tiltElements.forEach((el) => {
        el.removeEventListener('mousemove', handleTilt);
        el.removeEventListener('mouseleave', resetTilt);
      });
      magnets.forEach((m) => {
        m.removeEventListener('mousemove', magnetize);
        m.removeEventListener('mouseleave', magnetLeave);
      });
    };
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Khalid Ali",
    jobTitle: "Frontend Developer",
    email: "mailto:khalidist759@gmail.com",
    telephone: "+917291809186",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/KaliJS",
      "https://www.linkedin.com/in/khalid-ali-58b225194/",
    ],
  };

  return (
    <>
      <Head>
        <title>Khalid Ali | Frontend Developer | React, Next.js, TypeScript</title>
        <meta
          name="description"
          content="Frontend Engineer with 4+ years experience building responsive, high-performance apps in React, Next.js, and TypeScript. SEO-focused, CI/CD, data viz, and UX-driven."
        />
        <meta
          name="keywords"
          content="Khalid Ali, Frontend Developer, React, Next.js, TypeScript, UI, UX, SEO, JavaScript, Delhi"
        />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Khalid Ali | Frontend Developer" />
        <meta
          property="og:description"
          content="Frontend Engineer specializing in React, Next.js, TypeScript, SEO, and performance."
        />
        <meta property="og:image" content="/images/portrait-happy-excited-man-holding-laptop-computer.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khalid Ali | Frontend Developer" />
        <meta
          name="twitter:description"
          content="High-impact frontend solutions with React, Next.js, and TypeScript."
        />
        <meta name="twitter:image" content="/images/portrait-happy-excited-man-holding-laptop-computer.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <canvas id="bg-stars" aria-hidden="true"></canvas>
      <div className="gradient-orbs" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </div>
      <header className="site-header">
        <div className="container wide">
          <a href="#hero" className="logo">Khalid</a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="cta">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy" data-animate>
                <h1 className="hero-title">Hi, I’m <span className="accent">Khalid Ali</span></h1>
                <p className="hero-sub">Frontend Developer • React • Next.js • TypeScript</p>
                <p className="hero-desc">
                  I build responsive, accessible, and SEO-friendly web experiences that are fast, scalable, and delightful.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn primary magnetic">View Projects</a>
                  <a href="#contact" className="btn ghost magnetic">Get in touch</a>
                </div>
                <div className="meta">
                  <a href="tel:+917291809186">+91 72918 09186</a>
                  <span>•</span>
                  <a href="mailto:khalidist759@gmail.com">khalidist759@gmail.com</a>
                  <span>•</span>
                  <span>Delhi, India</span>
                </div>
              </div>
              <div className="hero-visual" data-animate>
                <div className="portrait-wrap">
                  <img src="/images/portrait-happy-excited-man-holding-laptop-computer.png" alt="Khalid Ali portrait" className="portrait" />
                  <div className="glow" />
                  <div className="floating floating-a" />
                  <div className="floating floating-b" />
                  <div className="floating-badge tilt" aria-label="React">⚛️ React</div>
                  <div className="floating-badge tilt alt" aria-label="Next.js">▲ Next.js</div>
                  <div className="floating-badge tilt tri" aria-label="TypeScript">TS</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bg" aria-hidden="true" />
        </section>

        <section id="about" className="section" data-animate>
          <div className="container">
            <h2 className="section-title">Professional summary</h2>
            <p className="lead">
              Experienced and skilled Frontend Engineer with 4+ years of experience in developing and optimizing responsive web applications.
              Proficient in JavaScript, React.js, Next.js, and TypeScript with expertise in performance optimization and CI/CD implementation.
              Adept at collaborating with cross-functional teams to deliver user-centric solutions, improve SEO performance, and integrate RESTful APIs.
              Passionate about creating seamless, intuitive user experiences that drive business results.
            </p>
          </div>
        </section>

        <section id="skills" className="section alt" data-animate>
          <div className="container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="marquee">
              <div className="marquee__track">
                <span className="chip">JavaScript</span>
                <span className="chip">TypeScript</span>
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">React.js</span>
                <span className="chip">Next.js</span>
                <span className="chip">Gatsby.js</span>
                <span className="chip">Laravel</span>
                <span className="chip">Chart.js</span>
                <span className="chip">Redux</span>
                <span className="chip">Redux Toolkit</span>
                <span className="chip">Context API</span>
                <span className="chip">Styled Components</span>
                <span className="chip">Tailwind CSS</span>
                <span className="chip">Material UI</span>
                <span className="chip">Webpack</span>
                <span className="chip">Vite</span>
                <span className="chip">Git & GitHub</span>
                <span className="chip">Jest</span>
                <span className="chip">React Testing Library</span>
                <span className="chip">REST APIs</span>
                <span className="chip">AWS</span>
                <span className="chip">SEO</span>
                <span className="chip">WCAG</span>
                <span className="chip">CI/CD</span>
                <span className="chip">Figma</span>
                <span className="chip">Postman</span>
                <span className="chip">Jira</span>
                {/* duplicate for seamless loop */}
                <span className="chip">JavaScript</span>
                <span className="chip">TypeScript</span>
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">React.js</span>
                <span className="chip">Next.js</span>
                <span className="chip">Gatsby.js</span>
                <span className="chip">Laravel</span>
                <span className="chip">Chart.js</span>
                <span className="chip">Redux</span>
                <span className="chip">Redux Toolkit</span>
                <span className="chip">Context API</span>
                <span className="chip">Styled Components</span>
                <span className="chip">Tailwind CSS</span>
                <span className="chip">Material UI</span>
                <span className="chip">Webpack</span>
                <span className="chip">Vite</span>
                <span className="chip">Git & GitHub</span>
                <span className="chip">Jest</span>
                <span className="chip">React Testing Library</span>
                <span className="chip">REST APIs</span>
                <span className="chip">AWS</span>
                <span className="chip">SEO</span>
                <span className="chip">WCAG</span>
                <span className="chip">CI/CD</span>
                <span className="chip">Figma</span>
                <span className="chip">Postman</span>
                <span className="chip">Jira</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section" data-animate>
          <div className="container">
            <h2 className="section-title">Professional Experience</h2>
            <div className="timeline">
              <article className="card glass tilt">
                <header className="card-head">
                  <div>
                    <h3>Frontend Engineer — Expent</h3>
                    <p className="muted">California, US (Remote) • May 2022 – Present</p>
                  </div>
                  <img src="/images/expent.jpg" alt="Expent" className="card-logo" />
                </header>
                <ul className="card-list">
                  <li>Translated business requirements into technical specs, enhancing frontend and optimizing procurement flows.</li>
                  <li>Integrated REST APIs with backend teams ensuring seamless data sync across platforms.</li>
                  <li>Revamped UI leading to a 30% increase in engagement and 25% reduction in bounce rate.</li>
                  <li>Implemented CI/CD pipelines to automate deployments and improve developer efficiency.</li>
                  <li>Optimized performance via profiling and debugging, cutting interaction time by 30%.</li>
                  <li>Built responsive layouts for optimal UX across devices and screen sizes.</li>
                  <li>Developed interactive data visualization dashboards for decision-making.</li>
                </ul>
              </article>

              <article className="card glass tilt">
                <header className="card-head">
                  <div>
                    <h3>Associate Frontend Developer — Kraftshala</h3>
                    <p className="muted">Delhi, India • Feb 2021 – May 2022</p>
                  </div>
                  <img src="/images/kraftshala.jpg" alt="Kraftshala" className="card-logo" />
                </header>
                <ul className="card-list">
                  <li>Built and maintained marketing site and student learning platform.</li>
                  <li>Improved SEO and performance; +40% faster load, +20% user retention.</li>
                  <li>Collaborated with design and engineering to ship user-friendly, accessible features.</li>
                  <li>Implemented responsive design and accessibility improvements.</li>
                  <li>Led debugging to promptly resolve web issues and maintain stability.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section alt" data-animate>
          <div className="container">
            <h2 className="section-title">Personal Projects</h2>
            <div className="cards">
              <a className="project-card tilt" href="https://www.818-durian.com/" target="_blank" rel="noreferrer">
                <img src="/images/durian.png" alt="818 Durian" />
                <div className="project-content">
                  <p className="tag">Ecommerce</p>
                  <h3>818-Durian</h3>
                  <p>Led ecommerce for Singapore-based 818-Durian to make products globally accessible.</p>
                </div>
              </a>

              <div className="project-card tilt">
                <img src="/images/salon.jpeg" alt="Salon Management" />
                <div className="project-content">
                  <p className="tag">Salon Management</p>
                  <h3>Salon Management System</h3>
                  <p>Scheduling, expense and inventory management for salons with online bookings.</p>
                </div>
              </div>

              <div className="project-card tilt">
                <img src="/images/fin.jpeg" alt="Business Management System" />
                <div className="project-content">
                  <p className="tag">Business Dashboard</p>
                  <h3>Business Management System</h3>
                  <p>Invoices, expenses, inventory and client management with dashboard analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section" data-animate>
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="edu">
              <div>
                <h3>B.Tech in Computer Science and Engineering</h3>
                <p className="muted">Guru Gobind Singh Indraprastha University, Delhi • 2020 • GPA: 8.1</p>
              </div>
            </div>
          </div>
        </section>

        <section id="certs" className="section alt" data-animate>
          <div className="container">
            <h2 className="section-title">Certifications & Awards</h2>
            <ul className="bullets">
              <li>Systems Engineer Trainee — Infosys (Jan 2021)</li>
              <li>Kode Krusher Award (Problem Solver) — Kraftshala (Dec 2021)</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact-section" data-animate>
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="contact-grid">
              <a className="contact-card" href="tel:+917291809186">
                <span className="contact-icon">📞</span>
                <div>
                  <h3>Phone</h3>
                  <p>+91 72918 09186</p>
                </div>
              </a>
              <a className="contact-card" href="mailto:khalidist759@gmail.com">
                <span className="contact-icon">✉️</span>
                <div>
                  <h3>Email</h3>
                  <p>khalidist759@gmail.com</p>
                </div>
              </a>
              <a className="contact-card" href="https://www.linkedin.com/in/khalid-ali-58b225194/" target="_blank" rel="noreferrer">
                <span className="contact-icon">🔗</span>
                <div>
                  <h3>LinkedIn</h3>
                  <p>khalid-ali-58b225194</p>
                </div>
              </a>
              <a className="contact-card" href="https://github.com/KaliJS" target="_blank" rel="noreferrer">
                <span className="contact-icon">👨‍💻</span>
                <div>
                  <h3>GitHub</h3>
                  <p>github.com/KaliJS</p>
                </div>
              </a>
            </div>
            <div className="cta-row">
              <a className="btn primary" href="https://wa.me/917291809186?text=Hi%20Khalid%2C%20let%27s%20connect" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Khalid Ali — Frontend Developer</p>
        </div>
      </footer>
    </>
  );
}
