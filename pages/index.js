import { useEffect, useState } from "react";
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

    // Active nav link on scroll
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
    const setActive = (id) => {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${id}`) link.classList.add('active');
        else link.classList.remove('active');
      });
    };
    const secObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => secObserver.observe(s));

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
      secObserver.disconnect();
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

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const submitContact = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${formName}`);
    const body = encodeURIComponent(`${formMessage}\n\nFrom: ${formName} <${formEmail}>`);
    window.location.href = `mailto:khalidist759@gmail.com?subject=${subject}&body=${body}`;
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
      <div className="pattern-grid" aria-hidden="true" />
      <header className="site-header">
        <div className="container wide">
          <a href="#hero" className="logo">Khalid</a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="cta">Contact</a>
            <a href="/resume.pdf" className="cta primary" target="_blank" rel="noreferrer">View Resume</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy" data-animate="left">
                <p className="hero-kicker">Hi, I’m</p>
                <h1 className="hero-title"><span className="name-gradient">Khalid Ali</span></h1>
                <p className="hero-sub">Frontend Developer • React • Next.js • TypeScript</p>
                <p className="hero-desc">
                  I build responsive, accessible, and SEO-friendly web experiences that are fast, scalable, and delightful.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn primary magnetic">View Projects</a>
                  <a href="#contact" className="btn ghost magnetic">Get in touch</a>
                  <a href="/resume.pdf" className="btn ghost magnetic">View Resume</a>
                </div>
                <div className="meta">
                  <a href="tel:+917291809186">+91 72918 09186</a>
                  <span>•</span>
                  <a href="mailto:khalidist759@gmail.com">khalidist759@gmail.com</a>
                  <span>•</span>
                  <span>Delhi, India</span>
                </div>
              </div>
              <div className="hero-visual" data-animate="right">
                <div className="portrait-wrap hero-orbit">
                  <div className="orbit-ring" aria-hidden="true" />
                  <img src="/images/portrait-happy-excited-man-holding-laptop-computer.png" alt="Khalid Ali portrait" className="portrait" />
                  <div className="glow" />
                  <div className="orbiting t1 tilt" aria-label="React">⚛︎ React</div>
                  <div className="orbiting t2 tilt" aria-label="Next.js">▲ Next.js</div>
                  <div className="orbiting t3 tilt" aria-label="TypeScript">TS</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bg" aria-hidden="true" />
        </section>

        <section id="about" className="section" data-animate>
          <div className="container">
            <h2 className="section-title">Professional summary</h2>
            <div className="lead bullets-grid">
              <div>• 4+ years building fast, accessible, SEO-friendly apps in React, Next.js, and TypeScript.</div>
              <div>• Led UI revamps improving engagement by 30% and reducing bounce by 25%.</div>
              <div>• Strong focus on performance, CI/CD automation, and clean component design.</div>
              <div>• Collaborate closely with design and backend to ship user-centric features.</div>
            </div>
                </div>
        </section>

        <section id="skills" className="section alt" data-animate>
          <div className="container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-head"><span className="skill-emoji">⌨️</span><h3>Languages</h3></div>
                <ul className="skill-list">
                  <li><span>JavaScript</span><div className="bar"><i style={{"--p":"92%"}} /></div></li>
                  <li><span>TypeScript</span><div className="bar"><i style={{"--p":"85%"}} /></div></li>
                  <li><span>HTML / CSS</span><div className="bar"><i style={{"--p":"95%"}} /></div></li>
                  <li><span>Python</span><div className="bar"><i style={{"--p":"60%"}} /></div></li>
                </ul>
              </div>

              <div className="skill-card">
                <div className="skill-head"><span className="skill-emoji">⚛️</span><h3>Frameworks</h3></div>
                <ul className="skill-list">
                  <li><span>React.js</span><div className="bar"><i style={{"--p":"92%"}} /></div></li>
                  <li><span>Next.js</span><div className="bar"><i style={{"--p":"90%"}} /></div></li>
                  <li><span>Gatsby.js</span><div className="bar"><i style={{"--p":"75%"}} /></div></li>
                  <li><span>Laravel</span><div className="bar"><i style={{"--p":"55%"}} /></div></li>
                </ul>
              </div>

              <div className="skill-card">
                <div className="skill-head"><span className="skill-emoji">🗂️</span><h3>State & Data</h3></div>
                <ul className="skill-list">
                  <li><span>Redux / RTK</span><div className="bar"><i style={{"--p":"88%"}} /></div></li>
                  <li><span>Context API</span><div className="bar"><i style={{"--p":"86%"}} /></div></li>
                  <li><span>REST APIs</span><div className="bar"><i style={{"--p":"90%"}} /></div></li>
                  <li><span>Chart.js</span><div className="bar"><i style={{"--p":"70%"}} /></div></li>
                </ul>
              </div>

              <div className="skill-card">
                <div className="skill-head"><span className="skill-emoji">🎨</span><h3>Styling</h3></div>
                <ul className="skill-list">
                  <li><span>Tailwind CSS</span><div className="bar"><i style={{"--p":"90%"}} /></div></li>
                  <li><span>Material UI</span><div className="bar"><i style={{"--p":"88%"}} /></div></li>
                  <li><span>Styled Components</span><div className="bar"><i style={{"--p":"80%"}} /></div></li>
                </ul>
              </div>

              <div className="skill-card">
                <div className="skill-head"><span className="skill-emoji">🧪</span><h3>Testing</h3></div>
                <ul className="skill-list">
                  <li><span>Jest</span><div className="bar"><i style={{"--p":"75%"}} /></div></li>
                  <li><span>React Testing Library</span><div className="bar"><i style={{"--p":"72%"}} /></div></li>
                </ul>
              </div>

              <div className="skill-card">
                <div className="skill-head"><span className="skill-emoji">⚙️</span><h3>Tooling & DevOps</h3></div>
                <ul className="skill-list">
                  <li><span>Webpack / Vite</span><div className="bar"><i style={{"--p":"85%"}} /></div></li>
                  <li><span>Git & GitHub</span><div className="bar"><i style={{"--p":"90%"}} /></div></li>
                  <li><span>AWS</span><div className="bar"><i style={{"--p":"60%"}} /></div></li>
                  <li><span>CI/CD</span><div className="bar"><i style={{"--p":"82%"}} /></div></li>
                  <li><span>Figma / Postman / Jira</span><div className="bar"><i style={{"--p":"78%"}} /></div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section" data-animate>
          <div className="container">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-timeline">
              <article className="exp-item" data-animate>
                <div className="exp-rail">
                  <span className="exp-dot" />
                </div>
                <div className="exp-card">
                  <div className="exp-header">
                    <img src="/images/expent.jpg" alt="Expent" className="exp-logo" />
                    <div>
                      <h3 className="exp-role">Frontend Engineer</h3>
                      <p className="exp-meta"><span className="brand">Expent</span> • California, US (Remote) • May 2022 – Present</p>
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    <li>Revamped product UI → +30% engagement and −25% bounce.</li>
                    <li>Integrated REST APIs with error handling and client-side caching.</li>
                    <li>Implemented CI/CD pipelines for automated test/build/deploy.</li>
                    <li>Performance tuning: −30% customer interaction time.</li>
                    <li>Built responsive layouts and data viz dashboards.</li>
                  </ul>
                  <div className="exp-tags"><span>React</span><span>Next.js</span><span>TypeScript</span><span>CI/CD</span><span>SEO</span></div>
                </div>
              </article>

              <article className="exp-item" data-animate>
                <div className="exp-rail">
                  <span className="exp-dot" />
                </div>
                <div className="exp-card">
                  <div className="exp-header">
                    <img src="/images/kraftshala.jpg" alt="Kraftshala" className="exp-logo" />
                    <div>
                      <h3 className="exp-role">Associate Frontend Developer</h3>
                      <p className="exp-meta"><span className="brand">Kraftshala</span> • Delhi, India • Feb 2021 – May 2022</p>
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    <li>+40% faster loads and +20% retention via image optimization and code-splitting.</li>
                    <li>Shipped SEO improvements: metadata, structured data, sitemap.</li>
                    <li>Worked on accessible UI components and design consistency.</li>
                    <li>Led debugging and reliability improvements.</li>
                  </ul>
                  <div className="exp-tags"><span>React</span><span>Performance</span><span>SEO</span><span>Accessibility</span></div>
                </div>
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
                  <p>Globalized ecommerce presence with performant storefront and SEO.</p>
                  <div className="project-actions">
                    <a href="https://www.818-durian.com/" className="btn ghost" target="_blank" rel="noreferrer">Live</a>
                    <a href="#" className="btn ghost">Code</a>
                  </div>
              </div>
              </a>

              <div className="project-card tilt">
                <img src="/images/salon.jpeg" alt="Salon Management" />
                <div className="project-content">
                  <p className="tag">Salon Management</p>
                  <h3>Salon Management System</h3>
                  <p>Scheduling, expense and inventory management for salons with online bookings.</p>
                  <div className="project-actions">
                    <a href="#" className="btn ghost">Live</a>
                    <a href="#" className="btn ghost">Code</a>
                  </div>
            </div>
              </div>

              <div className="project-card tilt">
                <img src="/images/fin.jpeg" alt="Business Management System" />
                <div className="project-content">
                  <p className="tag">Business Dashboard</p>
                  <h3>Business Management System</h3>
                  <p>Invoices, expenses, inventory and client management with dashboard analytics.</p>
                  <div className="project-actions">
                    <a href="#" className="btn ghost">Live</a>
                    <a href="#" className="btn ghost">Code</a>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section" data-animate>
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="cards one full">
              <div className="card">
                <div className="card-head">
                  <div>
                    <h3>🎓 B.Tech in Computer Science and Engineering</h3>
                    <p className="muted">Guru Gobind Singh Indraprastha University, Delhi • 2020 • GPA: 8.1</p>
                  </div>
                </div>
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
            <form className="contact-form-inline" onSubmit={submitContact}>
              <input type="text" placeholder="Your name" value={formName} onChange={(e)=>setFormName(e.target.value)} required />
              <input type="email" placeholder="Your email" value={formEmail} onChange={(e)=>setFormEmail(e.target.value)} required />
              <textarea placeholder="Message" rows={3} value={formMessage} onChange={(e)=>setFormMessage(e.target.value)} required />
              <button className="btn primary" type="submit">Let’s Collaborate</button>
            </form>
            <div className="cta-row">
              <a className="btn primary" href="https://wa.me/917291809186?text=Hi%20Khalid%2C%20let%27s%20connect" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Khalid Ali — Frontend Developer • Building delightful, performant UIs.</p>
          <div className="footer-actions">
            <a href="#hero" className="btn ghost">Back to Top ↑</a>
            <div className="socials">
              <a href="https://github.com/KaliJS" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/khalid-ali-58b225194/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
    </div>
      </footer>
      <div className="animated-blocks" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
