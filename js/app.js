// =====================================================================
//  RENDERING & INTERACTIVITY — Enset Scraping & Fermentation Rig
//  Works natively on GitHub Pages subpaths, custom domains & iframes.
// =====================================================================
const $ = (id) => document.getElementById(id);
const imgSrc = (s) => (!s ? "" : s);

let activeStep = 0;
function selectStep(i) {
  activeStep = (i + SITE.steps.length) % SITE.steps.length;
  $("steps").innerHTML = SITE.steps
    .map((s, idx) => {
      const on = idx === activeStep;
      return `
        <button type="button" onclick="selectStep(${idx})" class="text-left p-5 rounded-2xl border transition cursor-pointer ${
          on
            ? "bg-enset-800 text-cream border-enset-800 shadow-lg"
            : "bg-white text-ink border-[#E7E1D2] hover:border-clay-600/60"
        }">
          <div class="flex items-center justify-between gap-2">
            <span class="font-serif text-sm font-semibold ${on ? "text-clay-100" : "text-clay-600"}">${s.n} · ${s.tag}</span>
            <span class="text-xs shrink-0 ${on ? "text-cream/70" : "text-stone-400"}">${on ? "Active" : "View →"}</span>
          </div>
          <h3 class="font-serif text-2xl font-semibold mt-1">${s.title}</h3>
        </button>`;
    })
    .join("");

  const cur = SITE.steps[activeStep];
  $("step-preview").innerHTML = `
    <div class="relative h-56 sm:h-64 bg-enset-900 overflow-hidden">
      <img src="${imgSrc(cur.img)}" alt="${cur.title}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-enset-950/80 via-transparent to-transparent"></div>
      <span class="absolute bottom-3 left-4 eyebrow text-clay-100 bg-enset-950/70 px-3 py-1 rounded-full">${cur.n} · ${cur.title}</span>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between">
      <div>
        <p class="text-stone-700 leading-relaxed">${cur.text}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          ${cur.metrics
            .map(
              (m) =>
                `<span class="text-xs font-semibold bg-enset-50 text-enset-800 px-3 py-1.5 rounded-lg border border-enset-100">${m}</span>`
            )
            .join("")}
        </div>
      </div>
      <div class="mt-5 pt-4 border-t border-sand flex items-center justify-between gap-2">
        <span class="text-xs text-stone-400">Step ${activeStep + 1} of ${SITE.steps.length}</span>
        <div class="flex gap-2">
          <button type="button" onclick="selectStep(${activeStep - 1})" class="px-3 py-1.5 rounded-full border border-sand text-xs font-semibold text-enset-900 hover:bg-sand/50 cursor-pointer bg-white">&larr; Prev</button>
          <button type="button" onclick="selectStep(${activeStep + 1})" class="px-3 py-1.5 rounded-full bg-clay-600 text-white text-xs font-semibold hover:bg-clay-700 cursor-pointer border-0">Next step &rarr;</button>
        </div>
      </div>
    </div>`;
}

function setCompare(mode) {
  const data = SITE.compare[mode];
  const onCls = "px-4 py-1.5 rounded-full text-xs font-semibold transition bg-enset-800 text-cream cursor-pointer border-0";
  const offCls = "px-4 py-1.5 rounded-full text-xs font-semibold transition text-stone-600 hover:text-enset-900 cursor-pointer bg-transparent border-0";
  $("cmp-btn-trad").className = mode === "trad" ? onCls : offCls;
  $("cmp-btn-rig").className = mode === "rig" ? onCls : offCls;
  $("compare-panel").innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${imgSrc(data.img)}" alt="${data.title}" class="w-full aspect-[4/3] object-cover rounded-xl border border-sand" />
      </div>
      <div class="md:col-span-7">
        <h4 class="font-serif text-2xl font-semibold text-enset-900">${data.title}</h4>
        <p class="mt-2 text-sm text-stone-600">${data.summary}</p>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${data.points
            .map(
              ([k, v]) => `
            <div class="bg-white rounded-xl p-3 border border-sand">
              <div class="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">${k}</div>
              <div class="text-sm font-semibold text-enset-900 mt-0.5">${v}</div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </div>`;
}

let lbIndex = 0;
const lbItems = () => SITE.gallery.filter((g) => g.src);
function openLightbox(idx) {
  const items = lbItems();
  if (!items.length) return;
  lbIndex = (idx + items.length) % items.length;
  $("lb-img").src = imgSrc(items[lbIndex].src);
  $("lb-img").alt = items[lbIndex].title;
  $("lb-cap").textContent = items[lbIndex].title;
  $("lightbox").classList.remove("hidden");
  $("lightbox").classList.add("flex");
}

function closeLightbox() {
  $("lightbox").classList.add("hidden");
  $("lightbox").classList.remove("flex");
}

function stepLightbox(d) {
  openLightbox(lbIndex + d);
}

document.addEventListener("keydown", (e) => {
  if ($("lightbox").classList.contains("hidden")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});

function showPage(id, updateHash = true) {
  const validIds = SITE.pages.map(([pid]) => pid);
  const targetId = validIds.includes(id) ? id : "home";

  document.querySelectorAll(".page").forEach((p) => p.classList.toggle("active", p.id === "page-" + targetId));
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.page === targetId));

  if (updateHash && location.hash !== "#" + targetId) {
    try {
      history.replaceState(null, "", "#" + targetId);
    } catch (_) {
      // Ignore in restricted iframe sandboxes
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let activeWeek = 4;
function setProgressMode(mode) {
  const onCls = "px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition bg-enset-800 text-cream cursor-pointer border-0";
  const offCls = "px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition text-stone-600 hover:text-enset-900 cursor-pointer bg-transparent border-0";
  $("prog-btn-group").className = mode === "group" ? onCls : offCls;
  $("prog-btn-ind").className = mode === "individual" ? onCls : offCls;
  $("progress-group-view").classList.toggle("hidden", mode !== "group");
  $("progress-individual-view").classList.toggle("hidden", mode !== "individual");
  if (mode === "individual") closeMemberProgress();
}

function selectWeek(wk) {
  activeWeek = wk;
  const w = SITE.progress.find((x) => x.week === wk) || SITE.progress[0];
  const doneCount = SITE.progress.filter((x) => x.status !== "upcoming").length;
  const pct = Math.round((doneCount / SITE.progress.length) * 100);

  $("group-flow-bar").innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
      <span class="eyebrow text-clay-600">Project Flow · ${doneCount} of ${SITE.progress.length} weeks active</span>
      <span class="text-xs font-semibold text-enset-800">${pct}% along timeline</span>
    </div>
    <div class="w-full h-2 rounded-full bg-sand overflow-hidden mb-5">
      <div class="h-full bg-enset-700 rounded-full transition-all duration-300" style="width:${pct}%"></div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      ${SITE.phases
        .map((p) => {
          const on = p.weeks.includes(wk);
          return `
        <button type="button" onclick="selectWeek(${p.weeks[0]})" class="text-left p-3.5 rounded-xl border transition cursor-pointer ${
          on ? "bg-enset-800 text-cream border-enset-800 shadow-sm" : "bg-white text-ink border-sand hover:border-clay-600/60"
        }">
          <div class="text-xs font-bold ${on ? "text-clay-100" : "text-clay-600"}">${p.name}</div>
          <div class="text-[11px] mt-1 ${on ? "text-enset-100/80" : "text-stone-500"}">${p.desc}</div>
        </button>`;
        })
        .join("")}
    </div>`;

  $("week-pills").innerHTML = SITE.progress
    .map((x) => {
      const sel = x.week === wk;
      const base = sel
        ? "bg-clay-600 text-white border-clay-600 shadow"
        : x.status === "done"
        ? "bg-white text-enset-800 border-enset-100 hover:border-enset-700"
        : x.status === "current"
        ? "bg-clay-100 text-clay-700 border-clay-600/40"
        : "bg-white/60 text-stone-400 border-sand hover:text-stone-600";
      return `<button type="button" onclick="selectWeek(${x.week})" class="py-2 rounded-xl border text-xs font-bold transition cursor-pointer ${base}">W${x.week}</button>`;
    })
    .join("");

  const badge =
    w.status === "done"
      ? `<span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-enset-100 text-enset-800">Done</span>`
      : w.status === "current"
      ? `<span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-clay-100 text-clay-700">This week</span>`
      : `<span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sand text-stone-500">Upcoming</span>`;

  $("week-detail").innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="font-serif text-2xl font-semibold text-enset-900">Week ${w.week} · ${w.title}</span>
        ${badge}
      </div>
      <span class="text-xs text-stone-500">${w.dates}</span>
    </div>
    ${
      w.tasks.length
        ? `<ul class="space-y-1.5 mt-3">${w.tasks
            .map((t) => `<li class="text-sm text-stone-700 flex gap-2"><span class="text-clay-600 font-bold">•</span><span>${t}</span></li>`)
            .join("")}</ul>`
        : `<p class="text-sm text-stone-400 italic mt-2">Tasks for Week ${w.week} will be logged here as we reach this milestone.</p>`
    }
    <div class="mt-5 pt-4 border-t border-sand flex justify-between gap-2">
      <button type="button" onclick="selectWeek(${Math.max(1, wk - 1)})" class="px-3.5 py-1.5 rounded-full border border-sand text-xs font-semibold text-enset-900 hover:bg-sand/50 cursor-pointer bg-white" ${
        wk === 1 ? "disabled style='opacity:.4'" : ""
      }>&larr; Week ${Math.max(1, wk - 1)}</button>
      <button type="button" onclick="selectWeek(${Math.min(12, wk + 1)})" class="px-3.5 py-1.5 rounded-full bg-enset-800 text-cream text-xs font-semibold hover:bg-enset-700 cursor-pointer border-0" ${
        wk === 12 ? "disabled style='opacity:.4'" : ""
      }>Week ${Math.min(12, wk + 1)} &rarr;</button>
    </div>`;

  $("timeline").innerHTML = SITE.progress
    .map((item) => {
      const dot =
        item.status === "done"
          ? "bg-enset-700"
          : item.status === "current"
          ? "bg-clay-600 ring-4 ring-clay-100"
          : "bg-sand";
      const b =
        item.status === "done"
          ? `<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-enset-100 text-enset-800">Done</span>`
          : item.status === "current"
          ? `<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-clay-100 text-clay-700">This week</span>`
          : "";
      const body = item.tasks.length
        ? `<ul class="mt-2 space-y-1">${item.tasks
            .map((t) => `<li class="text-sm text-stone-700 flex gap-2"><span class="text-clay-600">•</span><span>${t}</span></li>`)
            .join("")}</ul>`
        : "";
      return `
      <li onclick="selectWeek(${item.week})" class="ml-8 mb-6 relative cursor-pointer group">
        <span class="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full ${dot}"></span>
        <div class="flex flex-wrap items-center gap-3">
          <h3 class="font-serif text-xl font-semibold group-hover:text-clay-700 transition ${
            item.status === "upcoming" ? "text-stone-400" : "text-enset-900"
          }">Week ${item.week} · ${item.title}</h3>
          <span class="text-xs text-stone-400">${item.dates}</span>
          ${b}
        </div>
        ${body}
      </li>`;
    })
    .join("");
}

function renderMemberPicker() {
  $("member-picker").innerHTML = `
    <p class="text-sm text-stone-600 mb-5">Select any Group 67 member to open their dedicated weekly progress page:</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      ${SITE.team
        .map(
          (m, i) => `
        <button type="button" onclick="openMemberProgress(${i})" class="card p-4 flex items-center gap-4 text-left hover:border-clay-600 hover:shadow-md transition cursor-pointer group">
          <img src="${imgSrc(m.img)}" alt="${m.name}" loading="lazy" class="w-14 h-14 rounded-xl portrait-img shrink-0 bg-enset-50" />
          <div class="min-w-0 flex-1">
            <div class="font-semibold text-enset-900 group-hover:text-clay-700 truncate">${m.name}</div>
            <div class="text-xs text-clay-700 font-medium truncate">${m.dept}</div>
          </div>
          <span class="text-clay-600 text-sm font-bold shrink-0">&rarr;</span>
        </button>`
        )
        .join("")}
    </div>`;
}

function openMemberProgress(idx) {
  const m = SITE.team[idx];
  if (!m) return;
  const logs = SITE.individualLogs[m.name] || [
    { week: 1, status: "done", tasks: ["Course orientation", "Joined Group 67 (" + m.dept + ")"] },
    { week: 2, status: "done", tasks: ["Reviewed candidate project ideas with advisor"] },
    { week: 3, status: "done", tasks: ["Contributed " + m.dept.toLowerCase() + " input for Enset concept"] },
    { week: 4, status: "current", tasks: ["Preparing " + m.dept + " section for proposal & Form A"] }
  ];
  $("member-picker").classList.add("hidden");
  $("member-page").classList.remove("hidden");
  $("member-page").innerHTML = `
    <button type="button" onclick="closeMemberProgress()" class="mb-6 px-4 py-2 rounded-full bg-white border border-sand text-xs font-semibold text-enset-900 hover:bg-sand/50 cursor-pointer">&larr; Back to all members</button>
    <div class="card p-6 sm:p-8 flex flex-wrap items-center justify-between gap-5 mb-8 border-b-4" style="border-bottom-color:#C2703D">
      <div class="flex items-center gap-5">
        <img src="${imgSrc(m.img)}" alt="${m.name}" class="w-20 h-20 rounded-2xl portrait-img bg-enset-50 shrink-0" />
        <div>
          <span class="eyebrow text-clay-600">${m.dept}</span>
          <h3 class="font-serif text-2xl sm:text-3xl font-semibold text-enset-900 mt-0.5">${m.name}</h3>
        </div>
      </div>
      ${
        m.link
          ? `<a href="${m.link}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-enset-800 hover:bg-enset-700 text-cream text-xs font-semibold transition">Open Personal e-Portfolio &nearr;</a>`
          : ""
      }
    </div>
    <h4 class="font-serif text-2xl font-semibold text-enset-900 mb-4">${m.name}'s Weekly Log</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${logs
        .map((l) => {
          const wk = SITE.progress.find((x) => x.week === l.week);
          const badge =
            l.status === "done"
              ? `<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-enset-100 text-enset-800">Done</span>`
              : `<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-clay-100 text-clay-700">This week</span>`;
          return `
        <div class="card p-5">
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
    </div>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeMemberProgress() {
  $("member-page").classList.add("hidden");
  $("member-picker").classList.remove("hidden");
}

function render() {
  $("nav").innerHTML = SITE.pages
    .map(
      ([id, label], i) =>
        `<button type="button" class="tab-btn${i === 0 ? " active" : ""}" data-page="${id}" onclick="showPage('${id}')">${label}</button>`
    )
    .join("");

  $("stats").innerHTML = SITE.stats
    .map(
      (s) => `
    <div class="card p-6 shadow-[0_12px_30px_-12px_rgba(20,42,29,0.25)]">
      <div class="font-serif text-3xl sm:text-4xl font-semibold text-enset-800">${s.value}</div>
      <div class="mt-1 text-sm text-stone-600">${s.label}</div>
    </div>`
    )
    .join("");

  selectStep(0);
  setCompare("rig");

  $("sdgs").innerHTML = SITE.sdgs
    .map(
      (g) => `
    <a href="https://sdgs.un.org/goals/goal${g.n}" target="_blank" rel="noopener noreferrer" class="card p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 hover:border-clay-600/60 hover:shadow-md transition group">
      <img src="${imgSrc(g.img)}" alt="UN SDG ${g.n}: ${g.title}" class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl shadow-sm group-hover:scale-105 transition" />
      <div class="min-w-0">
        <div class="text-sm font-semibold text-enset-900 leading-snug">${g.title}</div>
        <div class="text-xs text-stone-500 mt-1 leading-relaxed">${g.note}</div>
      </div>
    </a>`
    )
    .join("");

  $("problem-photos").innerHTML = SITE.problemPhotos
    .map(
      (p) => `
    <figure class="card overflow-hidden">
      <img src="${imgSrc(p.src)}" alt="${p.caption}" loading="lazy" class="w-full aspect-square object-cover" />
    </figure>`
    )
    .join("");

  $("problems").innerHTML = SITE.problems
    .map(
      (p) => `
    <li class="card p-5 border-l-4" style="border-left-color:#C2703D">
      <h4 class="font-semibold text-enset-900">${p.title}</h4>
      <p class="mt-1 text-sm text-stone-600">${p.text}</p>
    </li>`
    )
    .join("");

  $("modules").innerHTML = SITE.modules
    .map(
      (m) => `
    <div class="card p-6 sm:p-7">
      <span class="eyebrow text-clay-600">${m.tag}</span>
      <h4 class="font-serif text-2xl font-semibold text-enset-900 mt-2">${m.title}</h4>
      <p class="mt-2 text-sm text-stone-600">${m.text}</p>
      <ul class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${m.specs.map((s) => `<li class="text-sm bg-enset-50 text-enset-800 rounded-lg px-3 py-2">${s}</li>`).join("")}
      </ul>
    </div>`
    )
    .join("");

  $("objectives").innerHTML = SITE.objectives
    .map(
      (o, i) => `
    <li class="flex gap-4">
      <span class="w-8 h-8 shrink-0 rounded-full bg-enset-800 text-cream text-sm font-semibold flex items-center justify-center">${i + 1}</span>
      <span class="text-sm text-stone-700 pt-1.5">${o}</span>
    </li>`
    )
    .join("");

  $("specs").innerHTML = SITE.specs
    .map(
      ([k, v]) => `
    <tr class="border-b border-sand last:border-0">
      <td class="py-3 text-stone-500">${k}</td>
      <td class="py-3 text-right font-semibold text-enset-900">${v}</td>
    </tr>`
    )
    .join("");

  const a = SITE.advisor;
  $("advisor").innerHTML = `
    <span class="w-14 h-14 rounded-full bg-clay-600 text-white font-serif font-semibold text-lg flex items-center justify-center shrink-0">GG</span>
    <div>
      <span class="eyebrow text-clay-100/80">Project Advisor</span>
      <div class="font-serif text-2xl font-semibold">${a.name}</div>
      <div class="text-sm text-enset-100/80">${a.dept} · ${a.office}</div>
    </div>`;

  $("team").innerHTML = SITE.team
    .map((m) => {
      const name = m.link
        ? `<a href="${m.link}" target="_blank" rel="noopener noreferrer" class="hover:text-clay-700 underline decoration-clay-600/40 underline-offset-4">${m.name}</a>`
        : m.name;
      return `
      <div class="card overflow-hidden flex flex-col border-b-4" style="border-bottom-color:#C2703D">
        <div class="p-3 pb-0">
          <img src="${imgSrc(m.img)}" alt="${m.name} — ${m.dept}" loading="lazy" class="w-full aspect-[16/10] portrait-img rounded-xl bg-enset-50" />
        </div>
        <div class="p-5 text-center">
          <h4 class="font-semibold text-enset-900 text-base">${name}</h4>
          <p class="text-xs text-clay-700 font-semibold mt-1">${m.dept}</p>
        </div>
      </div>`;
    })
    .join("");

  renderMemberPicker();
  selectWeek(4);
  setProgressMode("group");

  let photoIdx = 0;
  $("gallery").innerHTML = SITE.gallery
    .map((g) => {
      if (g.src) {
        const idx = photoIdx++;
        return `
        <figure onclick="openLightbox(${idx})" class="card overflow-hidden cursor-pointer group">
          <div class="overflow-hidden">
            <img src="${imgSrc(g.src)}" alt="${g.title}" loading="lazy" class="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-300" />
          </div>
          <figcaption class="px-4 py-3 text-sm font-medium text-enset-900 flex items-center justify-between gap-2">
            <span>${g.title}</span>
            <span class="text-xs text-clay-600 shrink-0">Zoom &nearr;</span>
          </figcaption>
        </figure>`;
      }
      return `
      <figure class="card overflow-hidden">
        <div class="w-full aspect-[4/3] bg-enset-50 flex items-center justify-center text-enset-600/50 text-sm">Coming soon</div>
        <figcaption class="px-4 py-3 text-sm font-medium text-enset-900">${g.title}</figcaption>
      </figure>`;
    })
    .join("");

  renderContactDirectory();

  // Support deep linking via URL hash (e.g. #team, #progress)
  const initialHash = location.hash.replace("#", "");
  if (initialHash) {
    showPage(initialHash, false);
  }
}

let activeContactDept = "All";
let contactQuery = "";

function copyEmail(email, btn) {
  if (!email) return;
  const done = () => {
    const prev = btn.textContent;
    btn.textContent = "Copied ✓";
    btn.classList.add("bg-enset-800", "text-cream", "border-enset-800");
    setTimeout(() => {
      btn.textContent = prev;
      btn.classList.remove("bg-enset-800", "text-cream", "border-enset-800");
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
}

function setContactDept(dept) {
  activeContactDept = dept;
  renderContactCards();
  renderContactFilters();
}

function onContactSearch(val) {
  contactQuery = val.trim().toLowerCase();
  renderContactCards();
}

function renderContactFilters() {
  const wrap = $("contact-filters");
  if (!wrap) return;
  const depts = ["All", ...new Set(SITE.team.map((m) => m.dept))];
  wrap.innerHTML = depts
    .map((d) => {
      const on = d === activeContactDept;
      const shortLabel = d === "All"
        ? `All (${SITE.team.length})`
        : d.replace(" Engineering", "").replace(" Eng.", "");
      return `<button type="button" onclick="setContactDept('${d.replace(/'/g, "\\'")}')" class="px-3.5 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer ${
        on
          ? "bg-enset-800 text-cream border-enset-800 shadow-sm"
          : "bg-white text-stone-600 border-sand hover:border-clay-600/60 hover:text-enset-900"
      }">${shortLabel}</button>`;
    })
    .join("");
}

function renderContactCards() {
  const grid = $("contact-team-grid");
  if (!grid) return;

  const filtered = SITE.team.filter((m) => {
    const deptOk = activeContactDept === "All" || m.dept === activeContactDept;
    const qOk =
      !contactQuery ||
      m.name.toLowerCase().includes(contactQuery) ||
      m.dept.toLowerCase().includes(contactQuery) ||
      m.role.toLowerCase().includes(contactQuery) ||
      (m.email && m.email.toLowerCase().includes(contactQuery));
    return deptOk && qOk;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div class="col-span-full card p-8 text-center text-sm text-stone-500">No team members match your filter.</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((m) => {
      const hasEmail = Boolean(m.email && m.email.trim());
      return `
      <div class="card p-5 flex flex-col justify-between gap-4 hover:border-clay-600/60 hover:shadow-md transition border-b-4" style="border-bottom-color:#C2703D">
        <div class="flex items-start gap-3.5">
          <img src="${imgSrc(m.img)}" alt="${m.name}" loading="lazy" class="w-14 h-14 rounded-2xl portrait-img shrink-0 bg-enset-50 border border-sand" />
          <div class="min-w-0 flex-1">
            <h4 class="font-serif text-lg font-semibold text-enset-900 leading-snug truncate">${m.name}</h4>
            <span class="inline-block mt-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-enset-50 text-enset-800 border border-enset-100">${m.dept}</span>
            <p class="text-xs text-stone-500 mt-1.5 leading-snug">${m.role}</p>
          </div>
        </div>

        <div class="pt-3 border-t border-sand flex flex-col gap-2">
          ${
            hasEmail
              ? `
            <div class="flex items-center justify-between gap-2">
              <a href="mailto:${m.email}" class="text-xs font-semibold text-enset-700 hover:text-clay-700 underline underline-offset-4 truncate">${m.email}</a>
              <button type="button" onclick="copyEmail('${m.email}', this)" class="px-2.5 py-1 rounded-full border border-sand bg-cream hover:bg-sand/60 text-[11px] font-semibold text-enset-900 transition cursor-pointer shrink-0">Copy</button>
            </div>`
              : `<span class="text-xs text-stone-400 italic">Email will be added soon</span>`
          }
          ${
            m.link
              ? `<a href="${m.link}" target="_blank" rel="noopener noreferrer" class="text-[11px] font-semibold text-clay-700 hover:text-clay-600 inline-flex items-center gap-1">Personal e-Portfolio &nearr;</a>`
              : ""
          }
        </div>
      </div>`;
    })
    .join("");
}

function renderContactDirectory() {
  const a = SITE.advisor;
  const c = SITE.contact;
  const allEmails = SITE.team.map((m) => m.email).filter(Boolean);
  const mailAllHref = allEmails.length ? `mailto:${allEmails.join(",")}` : "";

  $("contact").innerHTML = `
    <!-- Featured Advisor & Campus Banner -->
    <div class="card p-6 sm:p-8 bg-enset-800 border-enset-800 text-cream grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-7 flex items-center gap-4">
        <span class="w-14 h-14 rounded-2xl bg-clay-600 text-white font-serif font-semibold text-lg flex items-center justify-center shrink-0 shadow-md">GG</span>
        <div>
          <span class="eyebrow text-clay-100/80">Project Advisor</span>
          <h3 class="font-serif text-2xl sm:text-3xl font-semibold text-cream mt-0.5">${a.name}</h3>
          <p class="text-sm text-enset-100/85 mt-1">${a.dept} · ${a.office}</p>
        </div>
      </div>
      <div class="md:col-span-5 md:border-l md:border-white/15 md:pl-6 flex flex-col gap-2">
        <span class="eyebrow text-clay-100/80">Institution</span>
        <div class="text-sm font-semibold text-cream">${c.institution}</div>
        <div class="text-xs text-enset-100/75">${c.location}</div>
        ${
          mailAllHref
            ? `<div class="mt-2"><a href="${mailAllHref}" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clay-600 hover:bg-clay-700 text-white text-xs font-semibold transition">Email Group 67 &nearr;</a></div>`
            : ""
        }
      </div>
    </div>

    <!-- Filter & Search Controls -->
    <div class="card p-4 sm:p-5 bg-enset-50/70 flex flex-col gap-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span class="eyebrow text-clay-600">Group 67 Directory</span>
          <h3 class="font-serif text-2xl font-semibold text-enset-900 mt-0.5">All 10 Team Members</h3>
        </div>
        <div class="w-full sm:w-64">
          <input
            type="search"
            oninput="onContactSearch(this.value)"
            placeholder="Search name, role, or email..."
            aria-label="Search team contacts"
            class="w-full px-4 py-2 rounded-full bg-white border border-sand text-xs text-ink placeholder:text-stone-400 focus:outline-none focus:border-clay-600"
          />
        </div>
      </div>
      <div class="flex flex-wrap gap-2" id="contact-filters"></div>
    </div>

    <!-- Dynamic 10-Member Contact Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="contact-team-grid"></div>
  `;

  renderContactFilters();
  renderContactCards();
}

window.addEventListener("hashchange", () => {
  const hash = location.hash.replace("#", "");
  if (hash) showPage(hash, false);
});

document.addEventListener("DOMContentLoaded", render);
