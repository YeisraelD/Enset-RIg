// =====================================================================
//  SITE CONTENT — edit here. To log a new week, update "progress".
//  All asset paths are relative so the site works on GitHub Pages
//  subpaths (e.g. /enset-rig/), custom domains, and local previews.
// =====================================================================
const SITE = {
  pages: [
    ["home", "Home"],
    ["project", "Project"],
    ["team", "Team"],
    ["progress", "Progress"],
    ["gallery", "Gallery"],
    ["contact", "Contact"]
  ],

  stats: [
    { value: "20M+", label: "Ethiopians rely on Enset as a staple food" },
    { value: "90 → 14", label: "days of fermentation with controlled heating" },
    { value: "< 10,000", label: "ETB total build budget, locally fabricable" }
  ],

  steps: [
    {
      n: "01",
      title: "Scrape",
      img: "assets/images/pseudostem.png",
      tag: "Mechanical · Electromechanical",
      text: "A motor-driven slider-crank moves a spring-loaded blade along the leaf sheath, copying the traditional 35° hand stroke without tearing fibres.",
      metrics: ["10 N·m DC worm-gear drive", "200 mm linear stroke @ 40–60 RPM"]
    },
    {
      n: "02",
      title: "Separate",
      img: "assets/images/enset-plant.png",
      tag: "Civil · Mechanical",
      text: "Pulp, clean Kacha fibre and sap split on the angled galvanized chute. The sap settles gravitationally into pure white Bulla starch.",
      metrics: ["Galvanized separation chute", "Up to 30% more starch recovered"]
    },
    {
      n: "03",
      title: "Ferment",
      img: "assets/images/kocho-prep.jpg",
      tag: "Software · ECE · Chemical",
      text: "Extracted pulp is sealed in a 20 L bioreactor held at 30 °C by an ESP32 PID controller, turning it into hygienic Kocho in about 14 days.",
      metrics: ["30.0 ± 1.5 °C mesophilic PID", "90 days → 14 days turnaround"]
    }
  ],

  compare: {
    trad: {
      title: "Traditional Manual Processing",
      img: "assets/images/kocho-prep.jpg",
      summary: "Manual bamboo scraping on the ground followed by unmonitored earthen-pit fermentation.",
      points: [
        ["Scraping effort", "Exhausting kneeling labour"],
        ["Fermentation time", "60 – 90 days in earth pits"],
        ["Starch loss", "Up to 30% wasted"],
        ["Hygiene & control", "Open pit, no temperature monitoring"]
      ]
    },
    rig: {
      title: "Group 67 Motorized Rig",
      img: "assets/images/highland-mist.png",
      summary: "Automated slider-crank scraping paired with an ESP32-regulated 20 L anaerobic bioreactor.",
      points: [
        ["Scraping effort", "Motorized 40–60 strokes/min"],
        ["Fermentation time", "≈ 14 days at 30 °C"],
        ["Starch recovery", "Clean Bulla + Kacha fibre split"],
        ["Hygiene & control", "Sealed tank + MicroSD data logging"]
      ]
    }
  },

  sdgs: [
    { n: 2,  title: "Zero Hunger",            img: "assets/icons/sdg2.svg",  note: "Food security for 20M+ Ethiopians", color: "#DDA63A" },
    { n: 5,  title: "Gender Equality",        img: "assets/icons/sdg5.svg",  note: "Ends exhausting manual scraping",  color: "#FF3A21" },
    { n: 9,  title: "Industry & Innovation",  img: "assets/icons/sdg9.svg",  note: "Locally built workshop machinery", color: "#FD6925" },
    { n: 12, title: "Responsible Production", img: "assets/icons/sdg12.svg", note: "Clean Kacha fibre & Bulla starch", color: "#BF8B2E" }
  ],

  problemPhotos: [
    { src: "assets/images/pseudostem.png", caption: "Harvested Enset pseudostem" },
    { src: "assets/images/kocho-prep.jpg", caption: "Manual Kocho preparation" }
  ],

  problems: [
    { title: "Exhausting labour", text: "Women scrape Enset by hand with bamboo tools, kneeling for hours." },
    { title: "Food loss", text: "Up to 30% of the edible starch is wasted in manual processing." },
    { title: "Slow, unsafe fermentation", text: "Pulp sits in earth pits for 60–90 days, often spoiling." }
  ],

  modules: [
    {
      tag: "Module 1",
      title: "Motorized Scraping Unit",
      text: "Slider-crank mechanism that turns motor rotation into a steady linear scraping stroke.",
      specs: ["12 V worm-gear DC motor, 10 N·m", "100 mm crank · 200 mm stroke", "Spring-loaded hinged blade", "Sap & starch collection chute"]
    },
    {
      tag: "Module 2",
      title: "Controlled Fermentation Bioreactor",
      text: "Sealed, heated tank that keeps the pulp at the ideal temperature and logs data.",
      specs: ["20 L airtight food-grade drum", "30.0 ± 1.5 °C PID control", "ESP32 + DS18B20 sensors", "LCD display & MicroSD logging"]
    }
  ],

  objectives: [
    "Build a slider-crank scraping mechanism running at 40–60 RPM.",
    "Separate pulp, fibre and Bulla starch cleanly.",
    "Hold the bioreactor at 30 °C to cut fermentation to about 14 days.",
    "Keep the full build under 10,000 ETB."
  ],

  specs: [
    ["Drive", "12 V DC worm-gear motor"],
    ["Scraping speed", "40–60 strokes / min"],
    ["Stroke length", "200 mm"],
    ["Bioreactor volume", "20 L"],
    ["Fermentation temp.", "30 °C ± 1.5 °C"],
    ["Controller", "ESP32"],
    ["Budget", "≈ 8,950 ETB"]
  ],

  advisor: {
    name: "Ins. Getnet Girma",
    dept: "Department of Software Engineering",
    office: "Block 64, 4th Floor"
  },

  // Add each member's email and portfolio link when ready.
  team: [
    { name: "Yeisrael Dawit",   dept: "Software Engineering",          role: "Firmware & Embedded Control",    img: "assets/images/team/yeisrael.jpg", email: "yeisraeld@gmail.com", link: "https://sites.google.com/view/yeisraeld/home" },
    { name: "Tsion Anemaw",     dept: "Software Engineering",          role: "Data Logging & Interface",       img: "assets/images/team/tsion.jpg",    email: "",                    link: "" },
    { name: "Tewodros Brhanu",  dept: "Civil Engineering",             role: "Structural Frame & Damping",     img: "assets/images/team/tewodros.jpg", email: "",                    link: "" },
    { name: "Yosef Gebre",      dept: "Civil Engineering",             role: "Hydraulics & Settling Tank",     img: "assets/images/team/yosef.jpg",    email: "",                    link: "" },
    { name: "Habtamu Mulugeta", dept: "Mechanical Engineering",        role: "Crank, Drive & Housing",         img: "assets/images/team/habtamu.jpg",  email: "",                    link: "" },
    { name: "Natnael Tadesse",  dept: "Architecture",                  role: "Housing & Ergonomic Layout",     img: "assets/images/team/natnael.jpg",  email: "",                    link: "" },
    { name: "Yabets Nigatu",    dept: "Electromechanical Engineering", role: "Blade Spring & Press",           img: "assets/images/team/yabets.jpg",   email: "",                    link: "" },
    { name: "Rahel Ewnetu",     dept: "Electrical & Computer Eng.",    role: "Power Stage & Protection",       img: "assets/images/team/rahel.jpg",    email: "",                    link: "" },
    { name: "Dawit Behailu",    dept: "Electrical & Computer Eng.",    role: "Sensors & Signal Acquisition",   img: "assets/images/team/dawit.jpg",    email: "",                    link: "" },
    { name: "Meron Feleke",     dept: "Chemical Engineering",          role: "Fermentation & Acidity Testing", img: "assets/images/team/meron.jpg",    email: "",                    link: "" }
  ],

  // status: "done" | "current" | "upcoming"
  phases: [
    { name: "1 · Ideation & Form A", weeks: [1, 2, 3, 4], desc: "Team formation, advisor reviews, and official topic approval." },
    { name: "2 · Design & Proposal", weeks: [5, 6], desc: "10-page proposal, CAD sizing, circuit schematics, and BOM." },
    { name: "3 · Build & Integration", weeks: [7, 8, 9, 10], desc: "Frame welding, scraping unit assembly, and bioreactor wiring." },
    { name: "4 · Test & Defense", weeks: [11, 12], desc: "Fermentation trials, poster, prototype demo, and final report." }
  ],

  progress: [
    { week: 1,  phase: 1, title: "Orientation & Team Formation", dates: "Oct 26 – Nov 01", status: "done",     tasks: ["Course orientation", "Formed Group 67 (10 members)"] },
    { week: 2,  phase: 1, title: "First Advisor Review",         dates: "Nov 02 – Nov 08", status: "done",     tasks: ["First advisor meeting", "Proposed candidate titles: revision requested"] },
    { week: 3,  phase: 1, title: "Topic Narrowing",              dates: "Nov 09 – Nov 15", status: "done",     tasks: ["Presented new title ideas", "Narrowed down to the Enset processing concept"] },
    { week: 4,  phase: 1, title: "Title Approved & Form A",      dates: "Nov 16 – Nov 22", status: "current",  tasks: ["Title approved: Enset Scraping & Fermentation Rig", "Form A submitted", "Drafting 10-page proposal"] },
    { week: 5,  phase: 2, title: "Proposal & Subsystem Sizing",  dates: "Nov 23 – Nov 29", status: "upcoming", tasks: [] },
    { week: 6,  phase: 2, title: "CAD, Schematics & BOM",        dates: "Nov 30 – Dec 06", status: "upcoming", tasks: [] },
    { week: 7,  phase: 3, title: "Workshop Fabrication",         dates: "Dec 07 – Dec 13", status: "upcoming", tasks: [] },
    { week: 8,  phase: 3, title: "Mid-Semester Progress Report", dates: "Dec 14 – Dec 20", status: "upcoming", tasks: [] },
    { week: 9,  phase: 3, title: "Bioreactor & ESP32 Wiring",    dates: "Dec 21 – Dec 27", status: "upcoming", tasks: [] },
    { week: 10, phase: 3, title: "Full System Integration",      dates: "Dec 28 – Jan 03", status: "upcoming", tasks: [] },
    { week: 11, phase: 4, title: "Prototype & Kocho Trials",     dates: "Jan 04 – Jan 10", status: "upcoming", tasks: [] },
    { week: 12, phase: 4, title: "Poster, Demo & Final Report",  dates: "Jan 11 – Jan 17", status: "upcoming", tasks: [] }
  ],

  // Optional custom logs per member (by exact name). Any member without a custom entry gets an auto-generated log from their role.
  individualLogs: {
    "Yeisrael Dawit": [
      { week: 1, status: "done",    tasks: ["Attended orientation", "Coordinated Group 67 formation (10 members)"] },
      { week: 2, status: "done",    tasks: ["Met with advisor Ins. Getnet Girma", "Reviewed initial title feedback"] },
      { week: 3, status: "done",    tasks: ["Built personal e-Portfolio", "Drafted ESP32 telemetry & PID control concept"] },
      { week: 4, status: "current", tasks: ["Co-authored Form A & 10-page proposal", "Built Group 67 Enset portfolio site"] }
    ]
  },

  // Put a relative path (inside assets/images/) or public image URL in "src".
  gallery: [
    { title: "Enset plant (Ensete ventricosum)", src: "assets/images/enset-plant.png" },
    { title: "Harvested Enset pseudostem", src: "assets/images/pseudostem.png" },
    { title: "Traditional Kocho preparation", src: "assets/images/kocho-prep.jpg" },
    { title: "Ethiopian highland climate", src: "assets/images/highland-mist.png" },
    { title: "Slider-crank CAD model", src: "" },
    { title: "Prototype build & testing", src: "" }
  ],

  contact: {
    institution: "Addis Ababa Science and Technology University (AASTU)",
    course: "IETP4115 · Group 67 · Academic Year 2026/27",
    location: "AASTU Main Campus, Kilinto, Addis Ababa, Ethiopia"
  }
};
