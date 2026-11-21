// =====================================================================
//  REUSABLE INDIVIDUAL PORTFOLIO RENDERER — Group 67 (AASTU IETP4115)
//  Populates team/<slug>/index.html from js/data.js using the exact
//  Enset Rig visual system with relative paths for GitHub Pages.
// =====================================================================
(function () {
  const ROOT = "../../";
  const $ = (id) => document.getElementById(id);
  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderPills(items, placeholder) {
    if (!items || !items.length) {
      return `<p class="text-xs text-stone-400 italic">${placeholder}</p>`;
    }
    return `<div class="flex flex-wrap gap-2">${items
      .map(
        (item) =>
          `<span class="text-xs font-semibold bg-enset-50 text-enset-800 px-3 py-1.5 rounded-lg border border-enset-100">${item}</span>`
      )
      .join("")}</div>`;
  }

  function renderBulletList(items, placeholder) {
    if (!items || !items.length) {
      return `<p class="text-sm text-stone-400 italic">${placeholder}</p>`;
    }
    return `<ul class="space-y-2.5">${items
      .map(
        (item) =>
          `<li class="text-sm text-stone-700 leading-relaxed flex gap-2.5"><span class="text-clay-600 font-bold shrink-0">•</span><span>${item}</span></li>`
      )
      .join("")}</ul>`;
  }

  function initReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    targets.forEach((el) => obs.observe(el));
  }

  window.copyPortfolioEmail = function (email, btn) {
    if (!email) return;
    const done = () => {
      const prev = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(() => {
        btn.textContent = prev;
      }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done).catch(done);
    } else {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      document.body.removeChild(ta);
      done();
    }
  };

  function renderPortfolio() {
    const slug = document.body.dataset.member;
    const idx = SITE.team.findIndex((m) => m.slug === slug);
    const m = idx >= 0 ? SITE.team[idx] : SITE.team[0];
    const prev = SITE.team[(idx - 1 + SITE.team.length) % SITE.team.length];
    const next = SITE.team[(idx + 1) % SITE.team.length];
    const p = m.portfolio || {};
    const skills = p.skills || {};
    const contrib = p.contributions || {};
    const links = p.links || {};

    document.title = `${m.name} — Group 67 Portfolio | Enset Rig (AASTU IETP4115)`;

    const logs = SITE.individualLogs[m.name] || [
      { week: 1, status: "done", tasks: ["Course orientation", `Joined Group 67 (${m.dept})`] },
      { week: 2, status: "done", tasks: ["Reviewed candidate project ideas with advisor Ins. Getnet Girma"] },
      { week: 3, status: "done", tasks: [`Contributed ${m.dept.toLowerCase()} input for the Enset Rig concept`] },
      { week: 4, status: "current", tasks: [`Preparing ${m.dept} deliverables for Form A & 10-page proposal`] }
    ];

    const linkButtons = [];
    if (links.github) {
      linkButtons.push(
        `<a href="${links.github}" target="_blank" rel="noopener noreferrer" class="btn-tactile px-4 py-2 rounded-full bg-enset-800 hover:bg-enset-700 text-cream text-xs font-semibold">GitHub &nearr;</a>`
      );
    }
    if (links.linkedin) {
      linkButtons.push(
        `<a href="${links.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-tactile px-4 py-2 rounded-full bg-enset-800 hover:bg-enset-700 text-cream text-xs font-semibold">LinkedIn &nearr;</a>`
      );
    }
    if (links.website) {
      linkButtons.push(
        `<a href="${links.website}" target="_blank" rel="noopener noreferrer" class="btn-tactile px-4 py-2 rounded-full bg-clay-600 hover:bg-clay-700 text-white text-xs font-semibold">Personal Site &nearr;</a>`
      );
    }

    $("portfolio-root").innerHTML = `
      <!-- STICKY NAVIGATION -->
      <nav id="site-nav" class="site-nav sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-sand">
        <div class="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <a href="${ROOT}index.html" class="flex items-center gap-3 text-left shrink-0 group">
            <span class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-sand shadow-sm p-1 flex items-center justify-center overflow-hidden shrink-0">
              <img src="${ROOT}assets/images/logo.png" alt="Group 67 Enset Rig Logo" class="w-full h-full object-contain" />
            </span>
            <span>
              <span class="block font-serif font-semibold text-enset-900 leading-tight group-hover:text-clay-700 transition">Enset Rig</span>
              <span class="block text-[11px] text-stone-500">AASTU · IETP4115 · Group 67</span>
            </span>
          </a>

          <div class="flex flex-wrap items-center gap-2">
            <a href="${ROOT}index.html" class="btn-tactile px-3.5 py-1.5 rounded-full bg-enset-800 hover:bg-clay-600 text-cream text-xs font-semibold">&larr; Back to Enset Rig</a>
            <a href="${ROOT}index.html#team" class="btn-tactile px-3.5 py-1.5 rounded-full border border-sand bg-white hover:bg-sand/50 text-enset-900 text-xs font-semibold">All Team</a>
            <a href="../${prev.slug}/" title="Previous: ${prev.name}" class="btn-tactile px-3 py-1.5 rounded-full border border-sand bg-white hover:bg-sand/50 text-enset-900 text-xs font-semibold">&larr; Prev</a>
            <a href="../${next.slug}/" title="Next: ${next.name}" class="btn-tactile px-3 py-1.5 rounded-full border border-sand bg-white hover:bg-sand/50 text-enset-900 text-xs font-semibold">Next &rarr;</a>
          </div>
        </div>
      </nav>

      <!-- A. PERSONAL INTRODUCTION HERO -->
      <header class="hero text-cream">
        <div class="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div class="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
              <div class="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-2 border-white/25 shadow-2xl bg-enset-950 shrink-0">
                <img src="${ROOT}${m.img}" alt="${m.name} — ${m.dept}" class="w-full h-full portrait-img" />
              </div>
            </div>

            <div class="md:col-span-8 lg:col-span-9 text-center md:text-left">
              <p class="eyebrow text-clay-100 mb-2">${m.dept} · ${m.id || "Group 67"}</p>
              <h1 class="font-serif text-4xl sm:text-5xl font-semibold leading-tight text-cream">${m.name}</h1>
              <p class="mt-2 inline-block px-3.5 py-1 rounded-full bg-clay-600/90 text-white text-xs font-semibold">${m.role}</p>
              <p class="mt-4 text-base text-enset-100/90 max-w-2xl leading-relaxed mx-auto md:mx-0">${m.shortIntro}</p>

              <div class="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-2.5">
                <a href="#skills" class="btn-tactile px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-cream text-xs font-semibold">Skills</a>
                <a href="#contributions" class="btn-tactile px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-cream text-xs font-semibold">Contributions</a>
                <a href="#experience" class="btn-tactile px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-cream text-xs font-semibold">Experience</a>
                <a href="#about" class="btn-tactile px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-cream text-xs font-semibold">About</a>
                ${
                  m.email
                    ? `<button type="button" onclick="copyPortfolioEmail('${m.email}', this)" class="btn-tactile px-4 py-2 rounded-full bg-clay-600 hover:bg-clay-700 text-white text-xs font-semibold cursor-pointer border-0">Copy Email (${m.email})</button>`
                    : ""
                }
              </div>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 max-w-6xl w-full mx-auto px-5 sm:px-8 py-12 sm:py-16 space-y-14">

        <!-- B. SKILLS & EXPERTISE -->
        <section id="skills" class="reveal">
          <p class="eyebrow text-clay-600 mb-2">Section 01 · Capabilities</p>
          <h2 class="font-serif text-3xl font-semibold text-enset-900 mb-6">Skills &amp; Expertise</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="card card-interactive p-6">
              <h3 class="font-serif text-lg font-semibold text-enset-900 mb-3">Technical Skills</h3>
              ${renderPills(skills.technical, "Placeholder — member can add technical skills in js/data.js.")}
            </div>
            <div class="card card-interactive p-6">
              <h3 class="font-serif text-lg font-semibold text-enset-900 mb-3">Engineering Skills</h3>
              ${renderPills(skills.engineering, "Placeholder — member can add engineering skills in js/data.js.")}
            </div>
            <div class="card card-interactive p-6">
              <h3 class="font-serif text-lg font-semibold text-enset-900 mb-3">Software &amp; Tools</h3>
              ${renderPills(skills.tools, "Placeholder — member can list CAD, IDE, simulation, or lab tools in js/data.js.")}
            </div>
            <div class="card card-interactive p-6">
              <h3 class="font-serif text-lg font-semibold text-enset-900 mb-3">Areas of Interest</h3>
              ${renderPills(skills.interests, "Placeholder — member can add engineering interests in js/data.js.")}
            </div>
          </div>
        </section>

        <!-- C. PROJECT CONTRIBUTIONS -->
        <section id="contributions" class="reveal">
          <p class="eyebrow text-clay-600 mb-2">Section 02 · Enset Rig Capstone</p>
          <h2 class="font-serif text-3xl font-semibold text-enset-900 mb-6">Project Contributions</h2>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div class="lg:col-span-7 card card-interactive p-6 sm:p-7 border-l-4" style="border-left-color:#C2703D">
              <h3 class="font-serif text-xl font-semibold text-enset-900 mb-4">Responsibilities &amp; Technical Contributions</h3>
              ${renderBulletList(contrib.responsibilities, "Placeholder — specific Enset Rig responsibilities will be updated here.")}
            </div>

            <div class="lg:col-span-5 card card-interactive p-6 sm:p-7 bg-enset-50/70">
              <h3 class="font-serif text-xl font-semibold text-enset-900 mb-4">Problems Helped Solve</h3>
              ${renderBulletList(contrib.problemsSolved, "Placeholder — key engineering challenges addressed will be added here.")}
            </div>
          </div>

          <div class="mt-6">
            <h3 class="font-serif text-xl font-semibold text-enset-900 mb-4">Tasks Completed &amp; Weekly Log</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${logs
                .map((l) => {
                  const wk = SITE.progress.find((x) => x.week === l.week);
                  const badge =
                    l.status === "done"
                      ? `<span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-enset-100 text-enset-800">Done</span>`
                      : `<span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-clay-100 text-clay-700">This week</span>`;
                  return `
                  <div class="card card-interactive p-5">
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-serif text-lg font-semibold text-enset-900">Week ${l.week}</span>
                      ${badge}
                    </div>
                    <p class="text-xs text-stone-400 mb-3">${wk ? wk.dates : ""}</p>
                    <ul class="space-y-1.5 text-sm text-stone-700">
                      ${l.tasks.map((t) => `<li class="flex gap-2"><span class="text-clay-600">•</span><span>${t}</span></li>`).join("")}
                    </ul>
                  </div>`;
                })
                .join("")}
            </div>
          </div>
        </section>

        <!-- D. EXPERIENCE & ACHIEVEMENTS -->
        <section id="experience" class="reveal">
          <p class="eyebrow text-clay-600 mb-2">Section 03 · Background</p>
          <h2 class="font-serif text-3xl font-semibold text-enset-900 mb-6">Experience &amp; Achievements</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="card card-interactive p-6">
              <h3 class="font-serif text-xl font-semibold text-enset-900 mb-3">Previous Projects &amp; Experience</h3>
              ${renderBulletList(p.experience, "Placeholder — member can add previous academic/personal projects or internships in js/data.js.")}
            </div>
            <div class="card card-interactive p-6">
              <h3 class="font-serif text-xl font-semibold text-enset-900 mb-3">Certifications &amp; Achievements</h3>
              ${renderBulletList(p.certifications, "Placeholder — member can add awards, honors, or certifications in js/data.js.")}
            </div>
          </div>
        </section>

        <!-- E. PERSONAL INFORMATION -->
        <section id="about" class="reveal">
          <p class="eyebrow text-clay-600 mb-2">Section 04 · Profile</p>
          <h2 class="font-serif text-3xl font-semibold text-enset-900 mb-6">Personal Information</h2>
          <div class="card p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-7">
              <h3 class="font-serif text-xl font-semibold text-enset-900 mb-3">Biography</h3>
              ${
                p.bio
                  ? `<p class="text-sm text-stone-700 leading-relaxed">${p.bio}</p>`
                  : `<p class="text-sm text-stone-400 italic leading-relaxed">Placeholder — ${m.name} can add a short personal biography in js/data.js.</p>`
              }
            </div>
            <div class="lg:col-span-5 lg:border-l lg:border-sand lg:pl-7 space-y-4">
              <div>
                <h3 class="font-serif text-lg font-semibold text-enset-900 mb-1">Academic Background</h3>
                <p class="text-sm text-stone-600 leading-relaxed">${p.academicBackground || `${m.dept} — AASTU (IETP4115 Group 67)`}</p>
              </div>
              <div>
                <h3 class="font-serif text-lg font-semibold text-enset-900 mb-2">Links &amp; Contact</h3>
                ${
                  m.email
                    ? `<p class="text-xs text-stone-600 mb-3">Email: <a href="mailto:${m.email}" class="text-enset-700 font-semibold underline underline-offset-4">${m.email}</a></p>`
                    : `<p class="text-xs text-stone-400 italic mb-3">Email placeholder — to be added in js/data.js.</p>`
                }
                ${
                  linkButtons.length
                    ? `<div class="flex flex-wrap gap-2">${linkButtons.join("")}</div>`
                    : `<p class="text-xs text-stone-400 italic">Optional GitHub / LinkedIn links can be added in js/data.js.</p>`
                }
              </div>
            </div>
          </div>
        </section>

        <!-- TEAM MEMBER SWITCHER -->
        <section class="reveal pt-4 border-t border-sand">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-5">
            <a href="../${prev.slug}/" class="btn-tactile px-4 py-2 rounded-full border border-sand bg-white hover:bg-sand/50 text-xs font-semibold text-enset-900">&larr; ${prev.name}</a>
            <a href="${ROOT}index.html#team" class="btn-tactile px-4 py-2 rounded-full bg-enset-800 hover:bg-clay-600 text-cream text-xs font-semibold">Back to Group 67 Team</a>
            <a href="../${next.slug}/" class="btn-tactile px-4 py-2 rounded-full border border-sand bg-white hover:bg-sand/50 text-xs font-semibold text-enset-900">${next.name} &rarr;</a>
          </div>
          <div class="flex flex-wrap justify-center gap-2">
            ${SITE.team
              .map(
                (tm) => `
              <a href="../${tm.slug}/" class="btn-tactile px-3 py-1.5 rounded-full text-xs font-semibold border ${
                tm.slug === m.slug
                  ? "bg-clay-600 text-white border-clay-600 shadow-sm"
                  : "bg-white text-stone-600 border-sand hover:border-clay-600/60 hover:text-enset-900"
              }">${tm.name}</a>`
              )
              .join("")}
          </div>
        </section>
      </main>

      <!-- FOOTER -->
      <footer class="bg-enset-950 text-enset-100/70 text-sm">
        <div class="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-wrap justify-between gap-3">
          <span><span class="font-serif text-cream">Group 67</span> · Enset Scraping &amp; Fermentation Rig</span>
          <span>Addis Ababa Science and Technology University · IETP4115 · 2026/27</span>
        </div>
      </footer>
    `;

    window.addEventListener(
      "scroll",
      () => {
        const nav = $("site-nav");
        if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
      },
      { passive: true }
    );

    initReveal();
  }

  document.addEventListener("DOMContentLoaded", renderPortfolio);
})();
