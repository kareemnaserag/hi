/* =========================================================
   Kareem Naser — Cybersecurity Portfolio
   main.js — no framework, vanilla JS only
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     0) Content data — EDIT HERE to customize the site
     --------------------------------------------------------- */

  // مصفوفة المشاريع — placeholders قابلة للتعديل بسهولة
  const PROJECTS = [
    {
      title: "Home Lab — بيئة اختبار معزولة",
      status: "In Progress",
      desc: "إعداد بيئة افتراضية (VirtualBox) تضم أجهزة Kali Linux وأنظمة هدف ضعيفة (Vulnerable VMs) لتجربة سيناريوهات هجوم/دفاع بأمان.",
      tags: ["VirtualBox", "Kali Linux", "Networking"],
      repo: "https://github.com/your-username/home-lab",
      demo: null,
    },
    {
      title: "Nmap — تقرير فحص شبكة",
      status: "Placeholder",
      desc: "تقرير فني يوثّق استخدام Nmap لاكتشاف الأجهزة والمنافذ المفتوحة والخدمات داخل شبكة تدريب معزولة، مع شرح الأوامر المستخدمة.",
      tags: ["Nmap", "Recon", "Bash"],
      repo: "https://github.com/your-username/nmap-network-scan",
      demo: null,
    },
    {
      title: "Wireshark — تحليل حزم البيانات",
      status: "Placeholder",
      desc: "التقاط وتحليل حركة الشبكة باستخدام Wireshark لفهم البروتوكولات، واكتشاف نشاط غير اعتيادي داخل بيئة تدريبية.",
      tags: ["Wireshark", "TCP/IP", "Analysis"],
      repo: "https://github.com/your-username/wireshark-traffic-analysis",
      demo: null,
    },
    {
      title: "CTF Write-up — TryHackMe Room",
      status: "Placeholder",
      desc: "توثيق خطوات حل تحدي CTF خطوة بخطوة: من الاستكشاف (Recon) إلى استغلال الثغرة والحصول على الأعلام (Flags).",
      tags: ["TryHackMe", "CTF", "Write-up"],
      repo: "https://github.com/your-username/ctf-writeups",
      demo: null,
    },
    {
      title: "Vulnerable VM — تقرير Pentest تدريبي",
      status: "Placeholder",
      desc: "تقرير اختبار اختراق كامل على جهاز افتراضي ضعيف عمدًا (مثل من VulnHub)، يغطي المنهجية والنتائج والتوصيات.",
      tags: ["Metasploit", "Burp Suite", "Reporting"],
      repo: "https://github.com/your-username/vm-pentest-report",
      demo: null,
    },
    {
      title: "Python — أداة مسح بسيطة",
      status: "Placeholder",
      desc: "سكربت Python لأتمتة عمليات استكشاف أولية (مثل فحص منافذ بسيط)، لتعلّم دمج البرمجة مع مفاهيم الشبكات.",
      tags: ["Python", "Automation"],
      repo: "https://github.com/your-username/python-port-scanner",
      demo: null,
    },
  ];

  // مصفوفة مسار التعلّم / الشهادات — عدّل بشهاداتك الحقيقية فقط
  const JOURNEY = [
    {
      date: "البداية",
      title: "بدء التعلّم الذاتي في الأمن السيبراني",
      desc: "استكشاف أساسيات الشبكات وأنظمة التشغيل، والتعرّف على مفهوم الـ CIA Triad ومجالات الأمن السيبراني المختلفة.",
      milestone: false,
    },
    {
      date: "مستمر",
      title: "مسارات تعلّم على TryHackMe",
      desc: "إتمام غرف تمهيدية في الشبكات وأساسيات Linux وPenetration Testing عبر منصة TryHackMe.",
      milestone: false,
    },
    {
      date: "مستمر",
      title: "بناء وتشغيل Home Lab",
      desc: "إعداد بيئة اختبار شخصية باستخدام VirtualBox لتجربة الأدوات والسيناريوهات بأمان دون المساس بأنظمة حقيقية.",
      milestone: true,
    },
    {
      date: "القادم",
      title: "شهادة / دورة (أضِفها هنا عند إتمامها)",
      desc: "هذا العنصر Placeholder — استبدله باسم الشهادة أو الدورة الفعلية فور الحصول عليها، مع رابط التحقق إن وُجد.",
      milestone: false,
    },
  ];

  // بيانات المخطط الذهني — التخصصات الرئيسية
  const MINDMAP_NODES = [
    {
      id: "network",
      label: "Network Security",
      sub: "أمن الشبكات",
      title: "Network Security",
      desc: "تأمين البنية التحتية للشبكة عبر جدران الحماية وأنظمة كشف/منع التسلل (IDS/IPS) والشبكات الافتراضية الخاصة، لحماية البيانات أثناء انتقالها ومنع الوصول غير المصرح به.",
    },
    {
      id: "soc",
      label: "SOC / Blue Team",
      sub: "المراقبة والدفاع",
      title: "SOC / Blue Team",
      desc: "فريق يعمل من مركز عمليات الأمن (SOC) لمراقبة الأنظمة باستمرار، رصد التهديدات وتحليلها، والاستجابة للحوادث الأمنية فور وقوعها.",
    },
    {
      id: "redteam",
      label: "Penetration Testing",
      sub: "Red Team",
      title: "Penetration Testing / Red Team",
      desc: "محاكاة هجمات حقيقية بشكل مصرّح به لاكتشاف الثغرات الأمنية في الأنظمة والتطبيقات قبل أن يستغلها مهاجمون فعليون.",
    },
    {
      id: "appsec",
      label: "Application Security",
      sub: "أمن التطبيقات",
      title: "Application Security",
      desc: "دمج ممارسات الأمان ضمن دورة تطوير البرمجيات لاكتشاف ثغرات مثل SQL Injection وXSS ومعالجتها قبل الإطلاق.",
    },
    {
      id: "cloud",
      label: "Cloud Security",
      sub: "الأمن السحابي",
      title: "Cloud Security",
      desc: "حماية البيانات والخدمات والبنية التحتية المستضافة على منصات سحابية مثل AWS وAzure وGCP، مع ضبط الصلاحيات والإعدادات بدقة.",
    },
    {
      id: "dfir",
      label: "DFIR",
      sub: "الطب الشرعي الرقمي",
      title: "Digital Forensics & Incident Response",
      desc: "التحقيق الفني فيما حدث بعد وقوع حادث أمني، جمع الأدلة الرقمية بطريقة سليمة، وإعادة الأنظمة إلى وضعها الآمن.",
    },
    {
      id: "grc",
      label: "GRC / Risk",
      sub: "الحوكمة والمخاطر",
      title: "GRC / Risk",
      desc: "إدارة الحوكمة والامتثال والمخاطر (Governance, Risk, Compliance) لضمان توافق ممارسات الأمن مع السياسات والمعايير والقوانين.",
    },
  ];

  const ROLES = [
    "Cybersecurity Student",
    "Penetration Testing Enthusiast",
    "Red Team Learner",
    "Home Lab Builder",
  ];

  /* ---------------------------------------------------------
     1) Motion preference (accessibility toggle + OS setting)
     --------------------------------------------------------- */
  const prefersReducedMotionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
  let motionEnabled = !prefersReducedMotionMQ.matches;

  const motionBtn = document.getElementById("motion-toggle");
  const motionLabel = document.getElementById("motion-label");

  function applyMotionState() {
    document.body.classList.toggle("no-motion", !motionEnabled);
    if (motionBtn) motionBtn.setAttribute("aria-pressed", String(motionEnabled));
    if (motionLabel) motionLabel.textContent = "الحركة: " + (motionEnabled ? "تشغيل" : "إيقاف");
  }
  applyMotionState();

  if (motionBtn) {
    motionBtn.addEventListener("click", function () {
      motionEnabled = !motionEnabled;
      applyMotionState();
    });
  }

  /* ---------------------------------------------------------
     2) Canvas background — network nodes, data lines,
        floating tech glyphs, abstract "malware" blips
     --------------------------------------------------------- */
  const canvas = document.getElementById("net-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, dpr;
  let particles = [];
  let glitchBlips = [];
  let rafId = null;
  let lastFrame = 0;

  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
  }

  function initParticles() {
    // Scale particle count to viewport area, capped for performance
    const area = w * h;
    const count = Math.max(28, Math.min(80, Math.round(area / 22000)));
    particles = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.6,
      hue: Math.random() > 0.72 ? "blue" : "red",
    }));

    glitchBlips = new Array(6).fill(0).map(() => spawnBlip());
  }

  function spawnBlip() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 10 + 6,
      life: 0,
      maxLife: Math.random() * 200 + 160,
      rot: Math.random() * Math.PI,
      hue: Math.random() > 0.5 ? "blue" : "red",
    };
  }

  function colorFor(hue, alpha) {
    return hue === "blue"
      ? "rgba(63,169,245," + alpha + ")"
      : "rgba(255,45,61," + alpha + ")";
  }

  // Small abstract hexagon "packet/malware" glyph — decorative, not literal
  function drawBlip(b) {
    const t = b.life / b.maxLife;
    const alpha = t < 0.15 ? t / 0.15 : t > 0.8 ? (1 - t) / 0.2 : 1;
    ctx.save();
    ctx.translate(b.x, b.y);
    ctx.rotate(b.rot + t * 0.6);
    ctx.strokeStyle = colorFor(b.hue, 0.35 * alpha);
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const ang = (Math.PI / 3) * i;
      const px = Math.cos(ang) * b.size;
      const py = Math.sin(ang) * b.size;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
    // inner cross — evokes a "flagged packet" without being alarming
    ctx.beginPath();
    ctx.moveTo(-b.size * 0.35, 0);
    ctx.lineTo(b.size * 0.35, 0);
    ctx.moveTo(0, -b.size * 0.35);
    ctx.lineTo(0, b.size * 0.35);
    ctx.strokeStyle = colorFor(b.hue, 0.25 * alpha);
    ctx.stroke();
    ctx.restore();
  }

  function step(ts) {
    rafId = requestAnimationFrame(step);
    // Throttle to ~30fps for calmer motion + better perf
    if (ts - lastFrame < 33) return;
    lastFrame = ts;

    ctx.clearRect(0, 0, w, h);

    // connective lines between nearby particles
    const maxDist = Math.min(160, w / 6);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = w + 20;
      if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20;
      if (p.y > h + 20) p.y = -20;

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.14;
          ctx.strokeStyle = colorFor(p.hue === q.hue ? p.hue : "blue", alpha);
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }

    // particle dots
    for (const p of particles) {
      ctx.beginPath();
      ctx.fillStyle = colorFor(p.hue, 0.55);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // floating abstract blips (malware-like, subtle, non-alarming)
    for (let i = glitchBlips.length - 1; i >= 0; i--) {
      const b = glitchBlips[i];
      b.life++;
      drawBlip(b);
      if (b.life >= b.maxLife) glitchBlips[i] = spawnBlip();
    }
  }

  function startAnimation() {
    if (rafId) return;
    lastFrame = 0;
    rafId = requestAnimationFrame(step);
  }
  function stopAnimation() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  // Draw a single static calm frame when motion is disabled
  function drawStaticFrame() {
    ctx.clearRect(0, 0, w, h);
    const maxDist = Math.min(160, w / 6);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.12;
          ctx.strokeStyle = colorFor("blue", alpha);
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
    for (const p of particles) {
      ctx.beginPath();
      ctx.fillStyle = colorFor(p.hue, 0.45);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function syncAnimationState() {
    const tabHidden = document.hidden;
    if (motionEnabled && !tabHidden) {
      startAnimation();
    } else {
      stopAnimation();
      drawStaticFrame();
    }
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    syncAnimationState();
  });
  document.addEventListener("visibilitychange", syncAnimationState);

  if (motionBtn) {
    motionBtn.addEventListener("click", syncAnimationState);
  }

  resizeCanvas();
  syncAnimationState();

  /* ---------------------------------------------------------
     3) Navbar: scroll shadow, active link, mobile menu
     --------------------------------------------------------- */
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("nav-links");
  const menuToggle = document.getElementById("menu-toggle");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  }, { passive: true });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const sections = document.querySelectorAll("main > section[id], #home");
  const navAnchors = document.querySelectorAll('.nav-links a[data-nav]');
  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navAnchors.forEach((a) => {
              a.classList.toggle("active", a.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => navObserver.observe(s));
  }

  /* ---------------------------------------------------------
     4) Scroll reveal
     --------------------------------------------------------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------
     5) Hero typed role rotation
     --------------------------------------------------------- */
  const typedEl = document.getElementById("typed-role");
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    if (!motionEnabled) {
      typedEl.textContent = ROLES[0];
      return; // static, calm text when motion is off
    }
    const current = ROLES[roleIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
      }
    }
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();

  /* ---------------------------------------------------------
     6) Render Projects
     --------------------------------------------------------- */
  const projectsGrid = document.getElementById("projects-grid");
  const projectIcon = `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--blue)"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="M12 11l8-4.5M12 11v9M12 11L4 6.5"/></svg>`;

  function renderProjects() {
    projectsGrid.innerHTML = PROJECTS.map((p) => `
      <article class="panel project-card">
        <div class="project-thumb">${projectIcon}</div>
        <div class="project-body">
          <span class="project-status">${escapeHTML(p.status)}</span>
          <h3>${escapeHTML(p.title)}</h3>
          <p>${escapeHTML(p.desc)}</p>
          <div class="project-tags">${p.tags.map((t) => `<span>${escapeHTML(t)}</span>`).join("")}</div>
          <div class="project-links">
            ${p.repo ? `<a href="${escapeAttr(p.repo)}" target="_blank" rel="noopener noreferrer">Repo ↗</a>` : ""}
            ${p.demo ? `<a href="${escapeAttr(p.demo)}" target="_blank" rel="noopener noreferrer">Write-up ↗</a>` : ""}
          </div>
        </div>
      </article>
    `).join("");
  }

  function escapeHTML(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }
  function escapeAttr(str) {
    return String(str).replace(/"/g, "&quot;");
  }

  renderProjects();

  /* ---------------------------------------------------------
     7) Render Timeline (Journey)
     --------------------------------------------------------- */
  const timelineEl = document.getElementById("timeline");
  function renderTimeline() {
    timelineEl.innerHTML = JOURNEY.map((item) => `
      <div class="timeline-item ${item.milestone ? "is-milestone" : ""}">
        <span class="timeline-date">${escapeHTML(item.date)}</span>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.desc)}</p>
      </div>
    `).join("");
  }
  renderTimeline();

  /* ---------------------------------------------------------
     8) Mind map — built with inline SVG
     --------------------------------------------------------- */
  const svgNS = "http://www.w3.org/2000/svg";
  const mmSvg = document.getElementById("mindmap-svg");
  const mmDetail = document.getElementById("mindmap-detail");

  function buildMindMap() {
    const VB_W = 900, VB_H = 620;
    const cx = VB_W / 2, cy = VB_H / 2 + 6;
    const rx = 330, ry = 210;
    const hubR = 62;
    const nodeR = 56;

    // defs: hub gradient
    const defs = document.createElementNS(svgNS, "defs");
    defs.innerHTML = `
      <radialGradient id="hubGradient" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#3a0d13"/>
        <stop offset="100%" stop-color="#12060a"/>
      </radialGradient>
    `;
    mmSvg.appendChild(defs);

    const linksGroup = document.createElementNS(svgNS, "g");
    const nodesGroup = document.createElementNS(svgNS, "g");

    const positions = MINDMAP_NODES.map((node, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / MINDMAP_NODES.length;
      const x = cx + rx * Math.cos(angle);
      const y = cy + ry * Math.sin(angle);
      return { ...node, x, y, angle };
    });

    // links (curved, plus animated flow line)
    positions.forEach((n) => {
      const dx = n.x - cx, dy = n.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ux = dx / dist, uy = dy / dist;
      const startX = cx + ux * hubR, startY = cy + uy * hubR;
      const endX = n.x - ux * nodeR, endY = n.y - uy * nodeR;
      const midX = (startX + endX) / 2 - uy * 22;
      const midY = (startY + endY) / 2 + ux * 22;

      const path = document.createElementNS(svgNS, "path");
      const d = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
      path.setAttribute("d", d);
      path.setAttribute("class", "mm-link");
      linksGroup.appendChild(path);

      const flow = document.createElementNS(svgNS, "path");
      flow.setAttribute("d", d);
      flow.setAttribute("class", "mm-link-flow");
      linksGroup.appendChild(flow);
    });

    // hub
    const hub = document.createElementNS(svgNS, "g");
    hub.setAttribute("class", "mm-node-hub");
    hub.innerHTML = `
      <circle cx="${cx}" cy="${cy}" r="${hubR}"></circle>
      <text x="${cx}" y="${cy - 4}">Cyber</text>
      <text x="${cx}" y="${cy + 16}">security</text>
    `;
    nodesGroup.appendChild(hub);

    // branch nodes
    positions.forEach((n) => {
      const g = document.createElementNS(svgNS, "g");
      g.setAttribute("class", "mm-node");
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "button");
      g.setAttribute("aria-label", n.title);
      g.dataset.id = n.id;

      const words = n.label.split(" ");
      let labelTspans = "";
      if (words.length > 1 && n.label.length > 12) {
        const half = Math.ceil(words.length / 2);
        const line1 = words.slice(0, half).join(" ");
        const line2 = words.slice(half).join(" ");
        labelTspans = `
          <tspan x="${n.x}" dy="-2">${line1}</tspan>
          <tspan x="${n.x}" dy="13">${line2}</tspan>
        `;
      } else {
        labelTspans = `<tspan x="${n.x}" dy="0">${n.label}</tspan>`;
      }

      g.innerHTML = `
        <circle class="mm-bg" cx="${n.x}" cy="${n.y}" r="${nodeR}"></circle>
        <text x="${n.x}" y="${n.y - 6}">${labelTspans}</text>
        <text class="mm-sub" x="${n.x}" y="${n.y + 26}">${n.sub}</text>
      `;
      nodesGroup.appendChild(g);

      function activate() {
        mmSvg.querySelectorAll(".mm-node").forEach((el) => el.classList.remove("is-active"));
        g.classList.add("is-active");
        mmDetail.innerHTML = `<h3>${escapeHTML(n.title)}</h3><p>${escapeHTML(n.desc)}</p>`;
      }
      g.addEventListener("click", activate);
      g.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      });
    });

    mmSvg.appendChild(linksGroup);
    mmSvg.appendChild(nodesGroup);
  }

  buildMindMap();

  /* ---------------------------------------------------------
     9) Contact form (demo — no backend wired by default)
     --------------------------------------------------------- */
  const contactForm = document.getElementById("contact-form");
  const formNote = document.getElementById("form-note");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formNote.textContent = "تم إعداد الرسالة محليًا — لتفعيل الإرسال الفعلي اربط النموذج بخدمة مثل Formspree أو EmailJS (راجع README).";
    });
  }

  /* ---------------------------------------------------------
     10) Footer year
     --------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
