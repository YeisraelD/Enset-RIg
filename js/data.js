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
    { value: "20M+",    label: "Ethiopians rely on Enset as a staple food", anim: { from: 0, to: 20, prefix: "", suffix: "M+" } },
    { value: "90 → 14", label: "days of fermentation with controlled heating", anim: { from: 90, to: 14, prefix: "90 → ", suffix: "" } },
    { value: "< 10,000", label: "ETB total build budget, locally fabricable", anim: { from: 0, to: 10000, prefix: "< ", suffix: "", comma: true } }
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
    { title: "Exhausting labour", text: "Women scrape Enset by hand with bamboo tools, kneeling for hours.", img: "assets/images/problem-labour.jpg", pos: "object-[50%_25%]" },
    { title: "Food loss", text: "Up to 30% of the edible starch is wasted in manual processing.", img: "assets/images/problem-foodloss.jpg", pos: "object-center" },
    { title: "Slow, unsafe fermentation", text: "Pulp sits in earth pits for 60–90 days, often spoiling.", img: "assets/images/problem-fermentation.jpg", pos: "object-center" }
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

  // Add each member's email, portfolio details, and links here.
  // Each member automatically gets a dedicated page at: team/<slug>/
  team: [
    {
      slug: "tsion-anemaw",
      name: "Tsion Anemaw",
      id: "ETS 1629/16",
      dept: "Software Engineering",
      role: "Data Logging & Interface",
      shortIntro: "Software Engineering student contributing to the Enset Rig's telemetry logging, user interface, and system documentation.",
      img: "assets/images/team/tsion.jpg",
      email: "",
      link: "",
      portfolio: {
        bio: "",
        academicBackground: "B.Sc. Candidate in Software Engineering — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Embedded UI Design", "Data Logging & CSV Schemas", "Web Development"],
          engineering: ["System Documentation", "Calibration & Testing"],
          tools: [],
          interests: []
        },
        contributions: {
          responsibilities: [
            "Designing the 16×2 I²C LCD diagnostic menu and user interface flow.",
            "Structuring the FAT32 MicroSD CSV telemetry format and fermentation data logs.",
            "Supporting statistical fermentation kinetics documentation and e-Portfolio integration."
          ],
          problemsSolved: [
            "Making live temperature, stroke, and fermentation status readable for operators without a computer."
          ]
        },
        experience: [],
        certifications: [],
        links: { github: "", linkedin: "", website: "" }
      }
    },
    {
      slug: "tewodros-brhanu",
      name: "Tewodros Brhanu",
      id: "ETS 1618/16",
      dept: "Civil Engineering",
      role: "Structural Frame & Damping",
      shortIntro: "Civil Engineering student focused on structural frame stability, weldment stress analysis, and reciprocating vibration damping.",
      img: "assets/images/team/tewodros.jpg",
      email: "",
      link: "",
      portfolio: {
        bio: "",
        academicBackground: "B.Sc. Candidate in Civil Engineering — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Structural Load Analysis", "Vibration Damping"],
          engineering: ["Angle-Iron Frame Stability", "Material Strength Testing"],
          tools: [],
          interests: []
        },
        contributions: {
          responsibilities: [
            "Evaluating structural loading and weldment stress on the 40×40×4 mm angle-iron chassis.",
            "Designing dynamic vibration damping to isolate reciprocating slider-crank forces.",
            "Supporting tensile testing of recovered Enset Kacha fibres in the Civil Materials Lab."
          ],
          problemsSolved: [
            "Preventing benchtop frame wobble and fatigue under continuous 40–60 RPM reciprocating scraping strokes."
          ]
        },
        experience: [],
        certifications: [],
        links: { github: "", linkedin: "", website: "" }
      }
    },
    {
      slug: "yosef-gebre",
      name: "Yosef Gebre",
      id: "ETS 1696/16",
      dept: "Civil Engineering",
      role: "Hydraulics & Settling Tank",
      shortIntro: "Civil Engineering student working on Bulla sap drainage hydraulics, gravitational starch settling, and runoff management.",
      img: "assets/images/team/yosef.jpg",
      email: "",
      link: "",
      portfolio: {
        bio: "",
        academicBackground: "B.Sc. Candidate in Civil Engineering — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Hydraulics & Fluid Drainage", "Sedimentation Design"],
          engineering: ["Stokes' Law Settling Analysis", "Durability & Environmental Loads"],
          tools: [],
          interests: []
        },
        contributions: {
          responsibilities: [
            "Designing the inclined sap collection trough and gravity drainage slope.",
            "Sizing the Bulla starch gravitational settling container using Stokes' Law.",
            "Planning clean wastewater and sap separation plumbing."
          ],
          problemsSolved: [
            "Capturing starch-rich Bulla sap that is normally lost as runoff during manual Enset scraping."
          ]
        },
        experience: [],
        certifications: [],
        links: { github: "", linkedin: "", website: "" }
      }
    },
    {
      slug: "habtamu-mulugeta",
      name: "Habtamu Mulugeta",
      id: "ETS 0756/16",
      dept: "Mechanical Engineering",
      role: "Crank, Drive & Housing",
      shortIntro: "Mechanical Engineering student designing the motorized slider-crank linkage, guide rod alignment, and drive kinematics.",
      img: "assets/images/team/habtamu.jpg",
      email: "",
      link: "",
      portfolio: {
        bio: "",
        academicBackground: "B.Sc. Candidate in Mechanical Engineering — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Mechanical CAD Modeling", "Linkage Kinematics & Stress Analysis"],
          engineering: ["Slider-Crank Sizing", "Workshop Machining"],
          tools: [],
          interests: []
        },
        contributions: {
          responsibilities: [
            "Modeling the 100 mm crank arm, 300 mm connecting rod, and 200 mm linear stroke kinematics.",
            "Verifying bending stress on dual Ø12 mm ground guide rods and LM12UU linear bushings.",
            "Coordinating AASTU Mechanical Workshop fabrication of the slider block and housing."
          ],
          problemsSolved: [
            "Replicating the linear traditional scraping stroke mechanically without tearing Enset fibres."
          ]
        },
        experience: [],
        certifications: [],
        links: { github: "", linkedin: "", website: "" }
      }
    },
    {
      slug: "natnael-tadesse",
      name: "Natnael Tadesse",
      id: "ETS 1248/14",
      dept: "Architecture",
      role: "Housing & Ergonomic Layout",
      shortIntro: "Architecture student focused on ergonomic benchtop layout, operator safety guarding, and integrated housing design.",
      img: "assets/images/team/natnael.jpg",
      email: "",
      link: "",
      portfolio: {
        bio: "",
        academicBackground: "B.Sc. Candidate in Architecture — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Spatial & Ergonomic Design", "3D Modeling & Enclosure Layout"],
          engineering: ["Safety Guarding Geometry", "User-Centered Workspace Layout"],
          tools: [],
          interests: []
        },
        contributions: {
          responsibilities: [
            "Designing the ergonomic benchtop layout combining scraping bed, chute, and bioreactor.",
            "Developing the transparent protective safety splash guard and feeding geometry.",
            "Integrating chassis aesthetics with practical operator access and cleaning."
          ],
          problemsSolved: [
            "Keeping operator hands safely away from moving slider-crank linkages while maintaining comfortable standing operation."
          ]
        },
        experience: [],
        certifications: [],
        links: { github: "", linkedin: "", website: "" }
      }
    },
    {
      slug: "yabets-nigatu",
      name: "Yabets Nigatu",
      id: "ETS 1673/16",
      dept: "Electromechanical Engineering",
      role: "Blade Spring & Press",
      shortIntro: "Electromechanical Engineering student developing the hinged spring-loaded scraping blade, motor shaft coupling, and thermal mounting.",
      img: "assets/images/team/yabets.jpg",
      email: "",
      link: "",
      portfolio: {
        bio: "",
        academicBackground: "B.Sc. Candidate in Electromechanical Engineering — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Electromechanical Coupling", "Spring & Actuator Integration"],
          engineering: ["Hinged Blade Kinematics", "Thermal Hardware Mounting"],
          tools: [],
          interests: []
        },
        contributions: {
          responsibilities: [
            "Designing the one-way hinged steel scraping blade with compression return springs.",
            "Developing the lathe-turned hub coupling between the 12V worm-gear motor and crank arm.",
            "Integrating mechanical mounting for the 12V 40W PTC heating pad and heat spreader."
          ],
          problemsSolved: [
            "Allowing the scraper blade to apply firm pressure on the forward stroke and lift freely on the return stroke."
          ]
        },
        experience: [],
        certifications: [],
        links: { github: "", linkedin: "", website: "" }
      }
    },
    {
      slug: "rahel-ewnetu",
      name: "Rahel Ewnetu",
      id: "ETS 1303/16",
      dept: "Electrical & Computer Eng.",
      role: "Power Stage & Protection",
      shortIntro: "Electrical & Computer Engineering student designing the 12V DC power distribution, motor driver protection, and safety interlocks.",
      img: "assets/images/team/rahel.jpg",
      email: "",
      link: "",
      portfolio: {
        bio: "",
        academicBackground: "B.Sc. Candidate in Electrical & Computer Engineering — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Power Distribution & Schematics", "Circuit Protection"],
          engineering: ["MOSFET & Relay Motor Driving", "Galvanic Isolation"],
          tools: [],
          interests: []
        },
        contributions: {
          responsibilities: [
            "Designing the 12V/10A DC power architecture isolating high-current actuators from 3.3V logic.",
            "Building the opto-isolated MOSFET PWM heater driver and motor relay with flyback protection.",
            "Implementing the inline 10A fuse, bimetallic thermal cutoff, and hardware emergency stop."
          ],
          problemsSolved: [
            "Eliminating 220V AC shock hazards near wet plant sap by running the entire rig on protected 12V DC."
          ]
        },
        experience: [],
        certifications: [],
        links: { github: "", linkedin: "", website: "" }
      }
    },
    {
      slug: "dawit-behailu",
      name: "Dawit Behailu",
      id: "ETS 0461/16",
      dept: "Electrical & Computer Eng.",
      role: "Sensors & Signal Acquisition",
      shortIntro: "Electrical & Computer Engineering student handling temperature probes, stroke limit switches, optical bubble sensing, and signal conditioning.",
      img: "assets/images/team/dawit.jpg",
      email: "",
      link: "",
      portfolio: {
        bio: "",
        academicBackground: "B.Sc. Candidate in Electrical & Computer Engineering — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Sensor Interfacing", "Signal Conditioning"],
          engineering: ["1-Wire & Optical Sensing", "Hardware Debouncing"],
          tools: [],
          interests: []
        },
        contributions: {
          responsibilities: [
            "Interfacing dual waterproof DS18B20 temperature probes on a conditioned 1-Wire bus.",
            "Wiring stroke-end limit microswitches for carriage position and stall detection.",
            "Designing the infrared optical airlock bubble-counter sensor circuit."
          ],
          problemsSolved: [
            "Delivering clean, noise-free sensor signals to the ESP32 alongside a high-current DC motor."
          ]
        },
        experience: [],
        certifications: [],
        links: { github: "", linkedin: "", website: "" }
      }
    },
    {
      slug: "meron-feleke",
      name: "Meron Feleke",
      id: "ETS 0993/16",
      dept: "Chemical Engineering",
      role: "Fermentation & Acidity Testing",
      shortIntro: "Chemical Engineering student leading anaerobic Kocho fermentation kinetics, pH monitoring, and laboratory titratable acidity assays.",
      img: "assets/images/team/meron.jpg",
      email: "",
      link: "",
      portfolio: {
        bio: "",
        academicBackground: "B.Sc. Candidate in Chemical Engineering — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Bioprocess & Fermentation Kinetics", "Analytical Titration"],
          engineering: ["Mass Balance & Moisture Assays", "Starch Purity Verification"],
          tools: [],
          interests: []
        },
        contributions: {
          responsibilities: [
            "Modeling mesophilic lactic acid fermentation kinetics (30.0 ± 1.5 °C) to compress fermentation from 90 days to ~14 days.",
            "Running 0.1 N NaOH titratable acidity and pH boundary tests (pH ≤ 4.2) in the AASTU Biotechnology Lab.",
            "Measuring pulp moisture reduction and Bulla starch recovery purity."
          ],
          problemsSolved: [
            "Establishing verifiable biochemical targets to prove the heated bioreactor produces safe, stabilized Kocho."
          ]
        },
        experience: [],
        certifications: [],
        links: { github: "", linkedin: "", website: "" }
      }
    },
    {
      slug: "yeisrael-dawit",
      name: "Yeisrael Dawit",
      id: "ETS 1446/16",
      dept: "Software Engineering",
      role: "Firmware & Embedded Control",
      shortIntro: "Software Engineering student focused on ESP32 embedded firmware, closed-loop PID thermal control, fault-tolerant state machines, and system architecture.",
      img: "assets/images/team/yeisrael.jpg",
      email: "yeisraeld@gmail.com",
      link: "",
      portfolio: {
        bio: "I am Yeisrael Dawit, a Software Engineering student at Addis Ababa Science and Technology University (AASTU). As a member of Group 67, I am working on a multidisciplinary engineering project that combines software, electronics, and mechanical systems to solve real-world problems. My focus within the team is developing the control and monitoring side of the system — designing simple, reliable software that supports automation, data collection, and system efficiency.",
        academicBackground: "B.Sc. Candidate in Software Engineering — Addis Ababa Science and Technology University (AASTU), IETP4115 Group 67.",
        skills: {
          technical: ["Embedded C/C++ (ESP32)", "FreeRTOS Dual-Core Firmware", "Web Development (HTML/CSS/JS)"],
          engineering: ["Discrete PID Thermal Control", "Finite State Machines & Safety Interlocks", "System Design Architecture (SDA)"],
          tools: ["ESP32 / Arduino Framework", "Git & GitHub Pages", "I²C / SPI / 1-Wire Protocols"],
          interests: ["Cyber-Physical Systems", "Embedded Automation", "IoT Telemetry"]
        },
        contributions: {
          responsibilities: [
            "Designing the dual-core FreeRTOS firmware architecture separating real-time control (Core 0) from logging and UI (Core 1).",
            "Implementing the discrete PID temperature controller with anti-windup clamping and dual-probe cross-validation (30.0 ± 1.5 °C).",
            "Developing the 7-state safety state machine and fast motor stall/jam cutoff routine.",
            "Authoring the Software & System Design Architecture (SDA) document and building the Group 67 web portfolio."
          ],
          problemsSolved: [
            "Preventing motor burnout during fibrous jams via fast interrupt-based cutoff and preventing bioreactor thermal runaway via dual-sensor sanity checks."
          ]
        },
        experience: [],
        certifications: [],
        links: {
          github: "https://github.com/YeisraelD",
          linkedin: "",
          website: ""
        }
      }
    }
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
    { week: 3,  phase: 1, title: "Nov 13 Team Meeting & Scope",   dates: "Nov 09 – Nov 15", status: "done",     tasks: ["Nov 13 — Group 67 team meeting to align on the Enset processing concept", "Presented narrowed concept to advisor Ins. Getnet Girma"] },
    { week: 4,  phase: 1, title: "Nov 17 Advisor, Form A & Site", dates: "Nov 16 – Nov 22", status: "done",     tasks: ["Nov 17 — Advisor meeting with Ins. Getnet Girma", "Final title submitted (Form A): Motorized Slider-Crank Enset Scraping Machine with Controlled Fermentation", "Drafted 10-page proposal & 5-page SDA", "Published Group 67 website & all 10 Individual Member Portfolios on GitHub Pages"] },
    { week: 5,  phase: 2, title: "Proposal & Subsystem Sizing",  dates: "Nov 23 – Nov 29", status: "current",  tasks: [] },
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
      { week: 1, status: "done", tasks: ["Attended IETP4115 orientation", "Joined Group 67 (10 members)"] },
      { week: 2, status: "done", tasks: ["Met with advisor Ins. Getnet Girma", "Reviewed initial title feedback"] },
      { week: 3, status: "done", tasks: ["Nov 13 — Participated in Group 67 team meeting on Enset concept", "Built & published personal e-Portfolio", "Drafted ESP32 telemetry & PID control concept"] },
      { week: 4, status: "done", tasks: ["Nov 17 — Met with advisor Ins. Getnet Girma on software engineering scope", "Finalized & submitted Form A final title", "Co-authored 10-page proposal & 5-page SDA", "Built, documented & deployed Group 67 website + 10 Individual Member Portfolios on GitHub Pages (Enset-RIg)"] }
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
    location: "AASTU Main Campus, Kilinto, Addis Ababa, Ethiopia",
    telegram: "https://t.me/+uk34RQMOcrYzMGI0"
  }
};
