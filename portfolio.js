<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Siyathemba Msimang | Portfolio</title>
  <style>
    /* Reset and base */
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; }
    body { background: #f5f5f5; color: #222; line-height: 1.6; }

    /* Header */
    header { background: #111; color: white; padding: 40px 20px; text-align: center; }
    header h1 { font-size: 2.5rem; margin-bottom: 10px; }
    header p { font-size: 1.2rem; color: #ddd; }

    /* Navigation */
    nav { display: flex; justify-content: center; gap: 20px; padding: 15px; background: #222; position: sticky; top: 0; z-index: 10; }
    nav a { color: #fff; text-decoration: none; font-weight: bold; transition: color 0.3s; }
    nav a:hover { color: #1e90ff; }
    nav a.active { color: #1e90ff; border-bottom: 2px solid #1e90ff; }

    /* Sections */
    section { padding: 50px 20px; max-width: 1000px; margin: auto; }
    .about-box, .project-card, .contact-box { background: white; padding: 25px; border-radius: 10px; margin-bottom: 25px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }

    /* Headings */
    h2 { margin-bottom: 15px; color: #111; border-bottom: 2px solid #1e90ff; display: inline-block; padding-bottom: 5px; }

    /* Projects */
    .project-card h3 { margin-bottom: 10px; color: #333; }
    .project-card p { color: #555; }

    /* Lists */
    ul { list-style-type: disc; padding-left: 20px; margin-top: 10px; }
    li { margin-bottom: 8px; color: #444; }

    /* Contact Button */
    button { padding: 10px 20px; border: none; border-radius: 5px; background: #111; color: white; cursor: pointer; transition: 0.3s; }
    button:hover { background: #1e90ff; }

    /* Footer */
    footer { text-align: center; padding: 20px; background: #111; color: white; margin-top: 40px; font-size: 0.9rem; }
  </style>
</head>
<body>

<header>
  <h1>Siyathemba Msimang</h1>
  <p>Portfolio | Developer | Creative Thinker</p>
</header>

<nav>
  <a href="#about">About</a>
  <a href="#education">Education</a>
  <a href="#skills">Skills</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>

<section id="about">
  <div class="about-box">
    <h2>About Me</h2>
    <p>Hi! I'm Siyathemba, an aspiring developer passionate about building modern, functional and user-friendly applications. I enjoy learning new technologies, solving real-world problems, and working on projects that help me grow. I am currently a second-year student studying Computer Science and Information Technology at the University of KwaZulu-Natal.</p>
  </div>
</section>

<section id="projects">
  <h2>Projects</h2>
  <div id="projects-container"></div>
</section>

<section id="education">
  <div class="about-box">
    <h2>Education</h2>
    <p>I am currently pursuing a Bachelor of Science in Computer Science and Information Technology at the University of KwaZulu-Natal. As a second-year student, I am building a strong foundation in programming, networking, algorithms, and system design while working on practical projects that help me apply the concepts I learn in class.</p>
  </div>
</section>

<section id="skills">
  <div class="about-box">
    <h2>Skills</h2>
    <ul id="skills-list"></ul>
  </div>
</section>

<section id="experience">
  <div class="about-box">
    <h2>Experience</h2>
    <ul id="experience-list"></ul>
  </div>
</section>

<section id="contact">
  <div class="contact-box">
    <h2>Contact Me</h2>
    <p>Email: <strong>siyathembamsimang@gmail.com</strong></p>
    <p>Phone: 076 049 9371</p>
    <button onclick="alert('Thanks for reaching out!')">Say Hi</button>
  </div>
</section>

<footer>
  <p>© 2025 Siyathemba Msimang</p>
</footer>

<script>
  // Smooth scroll
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Highlight current section in nav
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`nav a[href='#${id}']`);
      if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  });

  // Projects data
  const projects = [
    { title: 'File Encryption System', description: 'A Java-based application that encrypts and decrypts files using secure cryptographic algorithms. Gained understanding of cryptography, file handling, GUI design, and Java security libraries.' },
    { title: 'Car Rental Management System', description: 'Built in a team to manage car rentals, customer details, vehicle availability, and bookings. Learned teamwork, system design, and backend logic.' },
    { title: 'Network Scanner', description: 'A network scanning tool that detects active devices on a local network. Strengthened knowledge of IP addressing, ports, sockets, and communication protocols.' }
  ];

  const projectsContainer = document.getElementById('projects-container');
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
    projectsContainer.appendChild(card);
  });

  // Skills data
  const skills = ['Assembly x86 Programming basics', 'Python Programming', 'Java Programming', 'HTML, CSS, JavaScript', 'SQL & Database Basics', 'Networking Fundamentals', 'Problem Solving & Debugging', 'Git & GitHub'];
  const skillsList = document.getElementById('skills-list');
  skills.forEach(s => { const li = document.createElement('li'); li.textContent = s; skillsList.appendChild(li); });

  // Experience data
  const experience = ['Building Java applications with real functionality', 'Working in a team to develop a Car Rental Management System', 'Applying theoretical knowledge to practical coding challenges'];
  const experienceList = document.getElementById('experience-list');
  experience.forEach(e => { const li = document.createElement('li'); li.textContent = e; experienceList.appendChild(li); });
</script>

</body>
</html>
