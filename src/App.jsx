import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code2,
  Database,
  Brain,
  Cpu,
  Wrench,
  GraduationCap,
  Award,
  MapPin,
  Briefcase,
  ChevronRight,
  Send,
  X,
  Menu,
  CheckCircle2,
  Eye,
  FileText,
  Sparkles,
  Terminal,
  Layers,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

const PROFILE = {
  name: "Nijul Jamwal",
  email: "nijuljamwal555@gmail.com",
  phone: "+91-8628079478",
  location: "Himachal Pradesh, India",
  linkedin: "https://linkedin.com/in/nijul-jamwal-51b7b83b8",
  github: "https://github.com/RJNIJUL",
  photoUrl: "/profile.jpg",
  resumeUrl: "/Nijul_Jamwal_Resume.pdf",
  resumeDownloadName: "Nijul_Jamwal_Resume.pdf",
};

const CERTIFICATES = [
  {
    id: "cert-ibm",
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM / Coursera",
    date: "Completed Sep 3, 2026 • 12-Course Specialization",
    credentialId: "5DA3NENZ11JH",
    details:
      "12-course specialization covering Data Science Methodology, Python, Databases & SQL, Data Analysis & Visualization, Machine Learning with Python, Applied Data Science Capstone, and Generative AI.",
    imageUrl: "/certificates/ibm-data-science.jpg",
    verifyUrl: "https://coursera.org/verify/professional-cert/5DA3NENZ11JH",
  },
  {
    id: "cert-excellence",
    title: "Python + AI + ML + DS (120 Hours ISO Certified)",
    issuer: "Excellence Technology, Dharamshala",
    date: "15 Jan 2026 – 28 Feb 2026 • Ref: Extech/1308/DM0311",
    credentialId: "Extech/1308/DM0311",
    details:
      "120-hour ISO 9001:2015 certified intensive practical training in Python programming, Artificial Intelligence, Machine Learning, and Data Science.",
    imageUrl: "/certificates/excellence-training.jpg",
    verifyUrl: "",
  },
];

const PROJECTS = [
  {
    id: "rag-annual-report",
    number: "01",
    tag: "NLP & RETRIEVAL-AUGMENTED GENERATION",
    title: "RAG-Based Annual Report Analyst",
    shortDesc:
      "Retrieval-Augmented Generation application enabling natural-language question answering over corporate annual report PDFs exceeding 100 pages.",
    problem:
      "Analyzing dense 100+ page annual financial reports manually is slow and error-prone. Standard LLM prompts fail due to context window limits and hallucination risks.",
    workflow: [
      "Extracted raw text across 100+ page annual report PDFs using PyMuPDF.",
      "Segmented extracted text into ~500-token chunks for balanced semantic context.",
      "Generated dense vector embeddings with Sentence Transformers and indexed them in FAISS.",
      "Retrieved the top-5 most relevant passages per query and synthesized answers via a locally hosted Ollama LLM inside a Streamlit interface.",
    ],
    metrics: [
      { label: "Document Scale", value: "100+ Pages" },
      { label: "Chunk Window", value: "~500 Tokens" },
      { label: "Vector Retrieval", value: "Top-5 FAISS" },
    ],
    tech: [
      "Python",
      "PyMuPDF",
      "Sentence Transformers",
      "FAISS",
      "Ollama",
      "Streamlit",
    ],
    githubUrl: "https://github.com/RJNIJUL/RAG-BASED-ANNUAL-REPORT-ANALYST",
    repoSlug: "RJNIJUL/RAG-BASED-ANNUAL-REPORT-ANALYST",
    diagramType: "rag",
  },
  {
    id: "telco-churn",
    number: "02",
    tag: "SUPERVISED CLASSIFICATION & SQL ANALYTICS",
    title: "Telco Customer Churn Prediction & Retention Analytics",
    shortDesc:
      "End-to-end classification and SQL analytics workflow across 7,043 customer records to identify churn drivers and guide retention strategy.",
    problem:
      "Telecom operators face high customer attrition. Identifying at-risk subscribers early requires isolating behavioral and contract drivers across 21 customer attributes.",
    workflow: [
      "Cleaned and preprocessed 7,043 customer records with 21 features, engineering domain-relevant indicators.",
      "Queried churn cohorts using SQL and EDA, identifying customer tenure and contract type as primary churn predictors.",
      "Trained and benchmarked Logistic Regression, Decision Tree, and Random Forest classifiers.",
      "Translated model outputs into actionable retention recommendations for a subscriber base of over 7,000 customers.",
    ],
    metrics: [
      { label: "Accuracy", value: "81%" },
      { label: "F1-Score", value: "60%" },
      { label: "Dataset Records", value: "7,043" },
    ],
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "SQL",
      "Matplotlib",
      "Seaborn",
    ],
    githubUrl: "https://github.com/RJNIJUL/Telco-costumer-churn-project",
    repoSlug: "RJNIJUL/Telco-costumer-churn-project",
    diagramType: "churn",
  },
  {
    id: "retail-forecasting",
    number: "03",
    tag: "TIME-SERIES DEMAND FORECASTING & SQL",
    title: "Retail Sales Analytics & Demand Forecasting",
    shortDesc:
      "30-day retail demand forecasting pipeline built on 541,909 e-commerce transactions spanning 4,372 customers, 4,070 products, and 38 countries.",
    problem:
      "Multi-country retail inventory planning requires accurate 30-day demand projections without look-ahead data leakage across thousands of SKUs.",
    workflow: [
      "Processed 541,909 e-commerce transactions across 4,372 customers, 4,070 products, and 38 countries.",
      "Engineered 1-day and 7-day lag features alongside rolling 7-day averages using strict chronological train-test splitting.",
      "Benchmarked a Naive Baseline, Random Forest, and XGBoost across MAE, RMSE, and MAPE metrics.",
      "Conducted SQL revenue segmentation to pinpoint high-value product lines and international markets.",
    ],
    metrics: [
      { label: "Transactions", value: "541,909" },
      { label: "Forecast Horizon", value: "30 Days" },
      { label: "Global Scope", value: "38 Countries" },
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SQL"],
    githubUrl:
      "https://github.com/RJNIJUL/Retail-Sales-Analytics-Demand-Forecasting",
    repoSlug: "RJNIJUL/Retail-Sales-Analytics-Demand-Forecasting",
    diagramType: "forecast",
  },
];

const SKILL_GROUPS = [
  {
    id: "programming",
    label: "Programming & Data",
    icon: Code2,
    accent: "crimson",
    items: [
      { name: "Python", level: "Hands-on Experience", category: "Programming & Data" },
      { name: "SQL", level: "Hands-on Experience", category: "Programming & Data" },
      { name: "Pandas", level: "Hands-on Experience", category: "Programming & Data" },
      { name: "NumPy", level: "Hands-on Experience", category: "Programming & Data" },
      { name: "Data Cleaning & Preprocessing", level: "Hands-on Experience", category: "Programming & Data" },
      { name: "Feature Engineering", level: "Hands-on Experience", category: "Programming & Data" },
    ],
  },
  {
    id: "ml",
    label: "Machine Learning",
    icon: Cpu,
    accent: "blue",
    items: [
      { name: "Scikit-learn", level: "Hands-on Experience", category: "Machine Learning" },
      { name: "Logistic Regression", level: "Hands-on Experience", category: "Machine Learning" },
      { name: "Decision Tree", level: "Hands-on Experience", category: "Machine Learning" },
      { name: "Random Forest", level: "Hands-on Experience", category: "Machine Learning" },
      { name: "XGBoost", level: "Hands-on Experience", category: "Machine Learning" },
      { name: "Classification & Forecasting", level: "Hands-on Experience", category: "Machine Learning" },
      { name: "Model Evaluation (MAE/RMSE/F1)", level: "Hands-on Experience", category: "Machine Learning" },
    ],
  },
  {
    id: "ai-nlp",
    label: "AI, NLP & RAG",
    icon: Brain,
    accent: "crimson",
    items: [
      { name: "Retrieval-Augmented Generation (RAG)", level: "Hands-on Experience", category: "AI, NLP & RAG" },
      { name: "PyMuPDF (PDF Extraction)", level: "Hands-on Experience", category: "AI, NLP & RAG" },
      { name: "Text Chunking", level: "Hands-on Experience", category: "AI, NLP & RAG" },
      { name: "Sentence Transformers", level: "Hands-on Experience", category: "AI, NLP & RAG" },
      { name: "Embeddings & Semantic Search", level: "Hands-on Experience", category: "AI, NLP & RAG" },
      { name: "FAISS Vector Indexing", level: "Hands-on Experience", category: "AI, NLP & RAG" },
      { name: "Ollama (Local LLMs)", level: "Hands-on Experience", category: "AI, NLP & RAG" },
    ],
  },
  {
    id: "tools",
    label: "Visualization & Tools",
    icon: Wrench,
    accent: "blue",
    items: [
      { name: "Matplotlib", level: "Hands-on Experience", category: "Visualization & Tools" },
      { name: "Seaborn", level: "Hands-on Experience", category: "Visualization & Tools" },
      { name: "Streamlit", level: "Hands-on Experience", category: "Visualization & Tools" },
      { name: "Jupyter Notebook & VS Code", level: "Hands-on Experience", category: "Visualization & Tools" },
      { name: "GitHub", level: "Hands-on Experience", category: "Visualization & Tools" },
      { name: "MySQL & SQLite", level: "Hands-on Experience", category: "Visualization & Tools" },
    ],
  },
  {
    id: "dl",
    label: "Deep Learning & Agents",
    icon: Layers,
    accent: "crimson",
    items: [
      { name: "TensorFlow", level: "Familiar", category: "Deep Learning & Agents" },
      { name: "PyTorch", level: "Familiar", category: "Deep Learning & Agents" },
      { name: "AI Agents", level: "Familiar", category: "Deep Learning & Agents" },
    ],
  },
];

const PREFERRED_ROLES = [
  "Data Scientist – Fresher",
  "Machine Learning Engineer",
  "AI / ML Engineer",
  "Artificial Intelligence Engineer",
  "Generative AI Engineer – Junior / Intern",
  "NLP Engineer – Intern / Junior",
  "Data Science Intern",
  "Machine Learning Intern",
  "AI Engineer Intern",
];

const PREFERRED_LOCATIONS = [
  "Mohali",
  "Chandigarh",
  "Noida",
  "Delhi NCR",
  "Bangalore",
  "Open to Relocation Across India",
];

function DeathNoteAtmosphericCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const featherCount = Math.min(20, Math.max(9, Math.floor(width / 85)));
    const feathers = Array.from({ length: featherCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 22 + 13,
      speedY: Math.random() * 0.4 + 0.16,
      speedX: (Math.random() - 0.5) * 0.25,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.014,
      swayPhase: Math.random() * Math.PI * 2,
      crimsonEdge: Math.random() > 0.42,
      alpha: Math.random() * 0.34 + 0.16,
    }));

    const rainCount = Math.min(42, Math.max(18, Math.floor(width / 40)));
    const rainDrops = Array.from({ length: rainCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: Math.random() * 40 + 22,
      speed: Math.random() * 2.2 + 1.3,
      alpha: Math.random() * 0.08 + 0.02,
      isRed: Math.random() > 0.85,
    }));

    const embers = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.5,
      vy: -(Math.random() * 0.22 + 0.08),
      vx: (Math.random() - 0.5) * 0.12,
      isRed: Math.random() > 0.35,
      alpha: Math.random() * 0.45 + 0.14,
    }));

    const drawFeather = (f) => {
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.angle);

      const L = f.length;
      const W = L * 0.28;

      const grad = ctx.createLinearGradient(-L / 2, 0, L / 2, 0);
      grad.addColorStop(0, "rgba(10, 10, 14, 0.92)");
      grad.addColorStop(0.65, "rgba(28, 12, 16, 0.88)");
      grad.addColorStop(
        1,
        f.crimsonEdge ? "rgba(220, 38, 38, 0.72)" : "rgba(148, 163, 184, 0.35)"
      );

      ctx.beginPath();
      ctx.moveTo(-L / 2, 0);
      ctx.bezierCurveTo(-L * 0.15, -W, L * 0.25, -W * 0.85, L / 2, 0);
      ctx.bezierCurveTo(L * 0.25, W * 0.85, -L * 0.15, W, -L / 2, 0);
      ctx.fillStyle = grad;
      ctx.globalAlpha = f.alpha;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-L * 0.55, 0);
      ctx.lineTo(L * 0.48, 0);
      ctx.strokeStyle = f.crimsonEdge
        ? "rgba(248, 113, 113, 0.55)"
        : "rgba(203, 213, 225, 0.3)";
      ctx.lineWidth = 0.7;
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const r of rainDrops) {
        r.y += r.speed;
        r.x -= r.speed * 0.14;
        if (r.y > height + 50) {
          r.y = -50;
          r.x = Math.random() * (width + 100);
        }
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x + r.len * 0.14, r.y - r.len);
        ctx.strokeStyle = r.isRed
          ? `rgba(220, 38, 38, ${r.alpha * 1.4})`
          : `rgba(148, 163, 184, ${r.alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      for (const e of embers) {
        e.y += e.vy;
        e.x += e.vx;
        if (e.y < -10) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = e.isRed
          ? `rgba(220, 38, 38, ${e.alpha})`
          : `rgba(56, 189, 248, ${e.alpha * 0.75})`;
        ctx.fill();
      }

      for (const f of feathers) {
        f.swayPhase += 0.018;
        f.y += f.speedY;
        f.x += f.speedX + Math.sin(f.swayPhase) * 0.35;
        f.angle += f.spin;

        if (f.y > height + 40) {
          f.y = -40;
          f.x = Math.random() * width;
        }
        if (f.x < -40) f.x = width + 40;
        if (f.x > width + 40) f.x = -40;

        drawFeather(f);
      }

      animationId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}

function GothicClockworkBackground({ scrollY }) {
  const wheelAngle = (scrollY * 0.04) % 360;
  const handMinute = (scrollY * 0.14) % 360;
  const handHour = (scrollY * 0.025) % 360;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div
        className="absolute -top-36 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(185,28,28,0.26) 0%, rgba(127,29,29,0.12) 38%, rgba(6,6,8,0) 72%)",
          transform: `translate(-50%, ${scrollY * -0.05}px)`,
        }}
      />

      <div
        className="hidden sm:block fixed top-0 left-10 md:left-16 bottom-0 w-px bg-red-900/20"
        style={{ boxShadow: "4px 0 0 rgba(127, 29, 29, 0.12)" }}
      />
      <div
        className="hidden sm:block fixed top-0 right-10 md:right-16 bottom-0 w-px bg-red-900/20"
        style={{ boxShadow: "-4px 0 0 rgba(127, 29, 29, 0.12)" }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 35px, rgba(226, 232, 240, 0.45) 36px)",
          backgroundPositionY: `${-(scrollY * 0.15) % 36}px`,
        }}
      />

      <svg
        viewBox="0 0 600 600"
        className="fixed -right-36 md:-right-20 top-12 w-[520px] h-[520px] md:w-[680px] md:h-[680px] opacity-[0.16]"
        style={{
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      >
        <defs>
          <radialGradient id="crimsonClockGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#7F1D1D" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#060608" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="300" r="285" fill="url(#crimsonClockGlow)" />

        <g transform={`rotate(${wheelAngle} 300 300)`}>
          <circle
            cx="300"
            cy="300"
            r="270"
            fill="none"
            stroke="#DC2626"
            strokeWidth="1.4"
            strokeDasharray="8 6"
          />
          <circle
            cx="300"
            cy="300"
            r="248"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="1"
          />
          <circle
            cx="300"
            cy="300"
            r="185"
            fill="none"
            stroke="#DC2626"
            strokeWidth="1.2"
          />
          <circle
            cx="300"
            cy="300"
            r="112"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="0.9"
            strokeDasharray="3 5"
          />

          {Array.from({ length: 12 }).map((_, i) => {
            const deg = i * 30;
            return (
              <g key={i} transform={`rotate(${deg} 300 300)`}>
                <line
                  x1="300"
                  y1="30"
                  x2="300"
                  y2="115"
                  stroke={i % 3 === 0 ? "#EF4444" : "#64748B"}
                  strokeWidth={i % 3 === 0 ? "1.6" : "0.8"}
                />
                <polygon
                  points="300,52 308,76 300,92 292,76"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="0.9"
                />
              </g>
            );
          })}

          <text
            x="300"
            y="46"
            textAnchor="middle"
            fill="#EF4444"
            fontSize="14"
            fontFamily="Georgia, serif"
            letterSpacing="2"
          >
            XII
          </text>
          <text
            x="556"
            y="305"
            textAnchor="middle"
            fill="#94A3B8"
            fontSize="13"
            fontFamily="Georgia, serif"
          >
            III
          </text>
          <text
            x="300"
            y="564"
            textAnchor="middle"
            fill="#94A3B8"
            fontSize="13"
            fontFamily="Georgia, serif"
          >
            VI
          </text>
          <text
            x="44"
            y="305"
            textAnchor="middle"
            fill="#94A3B8"
            fontSize="13"
            fontFamily="Georgia, serif"
          >
            IX
          </text>
        </g>

        <g transform={`rotate(${handHour} 300 300)`}>
          <line
            x1="300"
            y1="318"
            x2="300"
            y2="175"
            stroke="#EF4444"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <g transform={`rotate(${handMinute} 300 300)`}>
          <line
            x1="300"
            y1="328"
            x2="300"
            y2="110"
            stroke="#E2E8F0"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>
        <circle
          cx="300"
          cy="300"
          r="7"
          fill="#060608"
          stroke="#EF4444"
          strokeWidth="2"
        />
      </svg>

      <svg
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        className="fixed bottom-0 left-0 right-0 w-full h-32 md:h-44 opacity-40"
        style={{
          transform: `translateY(${Math.min(40, scrollY * 0.02)}px)`,
        }}
      >
        <defs>
          <linearGradient id="skylineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14090C" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#040406" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0,240 L0,165 L35,165 L35,130 L45,112 L55,130 L55,165 L95,165 L95,115 L125,115 L125,155 L165,155 L165,92 L175,62 L185,92 L185,155 L235,155 L235,125 L285,125 L285,170 L340,170 L340,104 L375,104 L375,150 L430,150 L430,85 L438,44 L446,85 L446,150 L510,150 L510,132 L570,132 L570,168 L630,168 L630,110 L670,110 L670,158 L740,158 L740,95 L748,58 L756,95 L756,158 L830,158 L830,122 L890,122 L890,164 L960,164 L960,100 L1005,100 L1005,152 L1075,152 L1075,78 L1084,40 L1093,78 L1093,152 L1165,152 L1165,128 L1235,128 L1235,162 L1305,162 L1305,108 L1350,108 L1350,155 L1400,155 L1400,118 L1440,118 L1440,240 Z"
          fill="url(#skylineGrad)"
          stroke="#450A0A"
          strokeWidth="1"
        />
        <rect x="108" y="130" width="4" height="6" fill="#DC2626" opacity="0.5" />
        <rect x="352" y="122" width="4" height="6" fill="#38BDF8" opacity="0.4" />
        <rect x="646" y="128" width="4" height="6" fill="#DC2626" opacity="0.45" />
        <rect x="978" y="118" width="4" height="6" fill="#DC2626" opacity="0.55" />
        <rect x="1322" y="126" width="4" height="6" fill="#38BDF8" opacity="0.4" />
      </svg>

      <div className="fixed top-20 left-3 md:left-6 w-8 h-8 border-t border-l border-red-700/35" />
      <div className="fixed top-20 right-3 md:right-6 w-8 h-8 border-t border-r border-red-700/35" />
      <div className="fixed bottom-4 left-3 md:left-6 w-8 h-8 border-b border-l border-red-700/35" />
      <div className="fixed bottom-4 right-3 md:right-6 w-8 h-8 border-b border-r border-red-700/35" />
    </div>
  );
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${
          mouseY - 3
        }px, 0)`;
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${
          ringY - 16
        }px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="hidden lg:block fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-red-500 pointer-events-none z-[9999]"
      />
      <div
        ref={ringRef}
        className="hidden lg:block fixed top-0 left-0 w-8 h-8 rounded-full border border-red-500/40 pointer-events-none z-[9998]"
      />
    </>
  );
}

function ProjectArchitectureIllustration({ type }) {
  if (type === "rag") {
    return (
      <svg viewBox="0 0 420 200" className="w-full h-full">
        <defs>
          <linearGradient id="ragGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.16" />
          </linearGradient>
        </defs>
        <rect
          x="10"
          y="10"
          width="400"
          height="180"
          rx="12"
          fill="url(#ragGrad)"
          stroke="#27272A"
        />
        <rect
          x="24"
          y="38"
          width="74"
          height="46"
          rx="6"
          fill="#0F0F14"
          stroke="#DC2626"
          strokeWidth="1.2"
        />
        <text
          x="61"
          y="58"
          textAnchor="middle"
          fill="#F4F4F5"
          fontSize="9"
          fontFamily="monospace"
        >
          100+ PAGE
        </text>
        <text
          x="61"
          y="71"
          textAnchor="middle"
          fill="#F87171"
          fontSize="8"
          fontFamily="monospace"
        >
          PyMuPDF
        </text>

        <line
          x1="98"
          y1="61"
          x2="126"
          y2="61"
          stroke="#DC2626"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />

        <rect
          x="126"
          y="32"
          width="82"
          height="58"
          rx="6"
          fill="#0F0F14"
          stroke="#38BDF8"
          strokeWidth="1.2"
        />
        <text
          x="167"
          y="54"
          textAnchor="middle"
          fill="#E4E4E7"
          fontSize="9"
          fontFamily="monospace"
        >
          ~500 TOKENS
        </text>
        <text
          x="167"
          y="67"
          textAnchor="middle"
          fill="#38BDF8"
          fontSize="8"
          fontFamily="monospace"
        >
          Sent. Transf.
        </text>
        <text
          x="167"
          y="79"
          textAnchor="middle"
          fill="#71717A"
          fontSize="7"
          fontFamily="monospace"
        >
          Embeddings
        </text>

        <line
          x1="208"
          y1="61"
          x2="236"
          y2="61"
          stroke="#38BDF8"
          strokeWidth="1.5"
        />

        <rect
          x="236"
          y="32"
          width="72"
          height="58"
          rx="6"
          fill="#0F0F14"
          stroke="#38BDF8"
          strokeWidth="1.2"
        />
        <text
          x="272"
          y="54"
          textAnchor="middle"
          fill="#F4F4F5"
          fontSize="9"
          fontFamily="monospace"
        >
          FAISS DB
        </text>
        <text
          x="272"
          y="68"
          textAnchor="middle"
          fill="#38BDF8"
          fontSize="8"
          fontFamily="monospace"
        >
          Top-5 Chunks
        </text>

        <line
          x1="308"
          y1="61"
          x2="332"
          y2="61"
          stroke="#DC2626"
          strokeWidth="1.5"
        />

        <rect
          x="332"
          y="32"
          width="66"
          height="58"
          rx="6"
          fill="#180A0D"
          stroke="#DC2626"
          strokeWidth="1.4"
        />
        <text
          x="365"
          y="56"
          textAnchor="middle"
          fill="#FCA5A5"
          fontSize="9"
          fontFamily="monospace"
        >
          OLLAMA
        </text>
        <text
          x="365"
          y="70"
          textAnchor="middle"
          fill="#E4E4E7"
          fontSize="8"
          fontFamily="monospace"
        >
          Local LLM
        </text>

        <rect
          x="45"
          y="118"
          width="330"
          height="50"
          rx="8"
          fill="#0B0B0F"
          stroke="#27272A"
        />
        <circle cx="67" cy="143" r="5" fill="#DC2626" />
        <text
          x="82"
          y="139"
          fill="#D4D4D8"
          fontSize="9"
          fontFamily="monospace"
        >
          Streamlit UI: Grounded Financial Q&A
        </text>
        <text
          x="82"
          y="154"
          fill="#71717A"
          fontSize="8"
          fontFamily="monospace"
        >
          Zero external API dependency • Local vector retrieval
        </text>
      </svg>
    );
  }

  if (type === "churn") {
    return (
      <svg viewBox="0 0 420 200" className="w-full h-full">
        <rect
          x="10"
          y="10"
          width="400"
          height="180"
          rx="12"
          fill="#0C0C11"
          stroke="#27272A"
        />
        <text
          x="28"
          y="32"
          fill="#A1A1AA"
          fontSize="9"
          fontFamily="monospace"
        >
          7,043 RECORDS • 21 FEATURES • MODEL COMPARISON
        </text>

        <text x="28" y="64" fill="#D4D4D8" fontSize="9" fontFamily="monospace">
          Logistic Reg.
        </text>
        <rect x="115" y="53" width="195" height="12" rx="3" fill="#1F2937" />
        <rect x="115" y="53" width="160" height="12" rx="3" fill="#38BDF8" />
        <text x="318" y="63" fill="#38BDF8" fontSize="9" fontFamily="monospace">
          81% Acc
        </text>

        <text x="28" y="90" fill="#D4D4D8" fontSize="9" fontFamily="monospace">
          Random Forest
        </text>
        <rect x="115" y="79" width="195" height="12" rx="3" fill="#1F2937" />
        <rect x="115" y="79" width="154" height="12" rx="3" fill="#DC2626" />
        <text x="318" y="89" fill="#F87171" fontSize="9" fontFamily="monospace">
          F1: 60%
        </text>

        <text x="28" y="116" fill="#D4D4D8" fontSize="9" fontFamily="monospace">
          Decision Tree
        </text>
        <rect x="115" y="105" width="195" height="12" rx="3" fill="#1F2937" />
        <rect x="115" y="105" width="136" height="12" rx="3" fill="#52525B" />
        <text x="318" y="115" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
          Baseline
        </text>

        <rect
          x="28"
          y="138"
          width="174"
          height="36"
          rx="6"
          fill="#140A0D"
          stroke="#7F1D1D"
        />
        <text
          x="115"
          y="154"
          textAnchor="middle"
          fill="#FCA5A5"
          fontSize="8.5"
          fontFamily="monospace"
        >
          DRIVER 01: TENURE
        </text>
        <text
          x="115"
          y="166"
          textAnchor="middle"
          fill="#71717A"
          fontSize="7.5"
          fontFamily="monospace"
        >
          Early-month risk spike
        </text>

        <rect
          x="216"
          y="138"
          width="176"
          height="36"
          rx="6"
          fill="#09131C"
          stroke="#0369A1"
        />
        <text
          x="304"
          y="154"
          textAnchor="middle"
          fill="#7DD3FC"
          fontSize="8.5"
          fontFamily="monospace"
        >
          DRIVER 02: CONTRACT
        </text>
        <text
          x="304"
          y="166"
          textAnchor="middle"
          fill="#71717A"
          fontSize="7.5"
          fontFamily="monospace"
        >
          Month-to-month vs Annual
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 420 200" className="w-full h-full">
      <rect
        x="10"
        y="10"
        width="400"
        height="180"
        rx="12"
        fill="#0C0C11"
        stroke="#27272A"
      />
      <text x="28" y="32" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
        541,909 TRANSACTIONS • 30-DAY DEMAND FORECAST
      </text>

      <line x1="34" y1="138" x2="386" y2="138" stroke="#27272A" />
      <line x1="255" y1="44" x2="255" y2="138" stroke="#DC2626" strokeDasharray="4 3" />
      <text x="262" y="54" fill="#F87171" fontSize="7.5" fontFamily="monospace">
        Chronological Split
      </text>

      <polyline
        fill="none"
        stroke="#38BDF8"
        strokeWidth="2"
        points="38,118 75,105 110,111 148,86 185,92 220,70 255,76"
      />
      <polyline
        fill="none"
        stroke="#EF4444"
        strokeWidth="2.2"
        strokeDasharray="5 3"
        points="255,76 292,62 330,66 378,48"
      />

      <rect
        x="28"
        y="148"
        width="112"
        height="28"
        rx="5"
        fill="#111116"
        stroke="#27272A"
      />
      <text
        x="84"
        y="165"
        textAnchor="middle"
        fill="#E4E4E7"
        fontSize="8"
        fontFamily="monospace"
      >
        Lag-1 & Lag-7
      </text>

      <rect
        x="152"
        y="148"
        width="116"
        height="28"
        rx="5"
        fill="#111116"
        stroke="#27272A"
      />
      <text
        x="210"
        y="165"
        textAnchor="middle"
        fill="#38BDF8"
        fontSize="8"
        fontFamily="monospace"
      >
        7-Day Rolling Avg
      </text>

      <rect
        x="280"
        y="148"
        width="112"
        height="28"
        rx="5"
        fill="#180A0D"
        stroke="#7F1D1D"
      />
      <text
        x="336"
        y="165"
        textAnchor="middle"
        fill="#FCA5A5"
        fontSize="8"
        fontFamily="monospace"
      >
        XGBoost vs RF
      </text>
    </svg>
  );
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeCertModal, setActiveCertModal] = useState(null);
  const [photoError, setPhotoError] = useState(false);
  const [certErrors, setCertErrors] = useState({});
  const [selectedSkillTab, setSelectedSkillTab] = useState("all");

  const [typedIndex, setTypedIndex] = useState(0);
  const titles = [
    "Data Scientist",
    "Machine Learning & NLP Engineer",
    "RAG & Generative AI Builder",
  ];

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress(docHeight > 0 ? (currentY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = (e) => {
    e.preventDefault();
    const a = document.createElement("a");
    a.href = PROFILE.resumeUrl;
    a.download = PROFILE.resumeDownloadName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      contactForm.subject || `Opportunity Inquiry from ${contactForm.name}`
    );
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Opportunities", href: "#opportunities" },
    { label: "Contact", href: "#contact" },
  ];

  const skillTabs = [
    { id: "all", label: "All Skills" },
    ...SKILL_GROUPS.map((g) => ({ id: g.id, label: g.label })),
  ];

  const visibleSkillGroups =
    selectedSkillTab === "all"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === selectedSkillTab);

  return (
    <div className="min-h-screen bg-[#060608] text-[#EDEAE4] selection:bg-red-700/40 selection:text-white relative overflow-x-hidden font-sans">
      <CustomCursor />

      <GothicClockworkBackground scrollY={scrollY} />
      <DeathNoteAtmosphericCanvas />

      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-red-700 via-red-500 to-sky-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed top-0 inset-x-0 z-40 bg-[#060608]/90 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded border border-red-600/60 bg-red-950/30 flex items-center justify-center font-serif font-bold text-red-500 tracking-wider group-hover:border-red-500 transition-colors">
              NJ
            </div>
            <span className="font-semibold tracking-wide text-sm sm:text-base text-zinc-100">
              NIJUL JAMWAL
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-[0.14em] text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              title={PROFILE.email}
              className="hidden md:flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 px-2.5 py-1.5 rounded border border-zinc-800/80 bg-zinc-900/50 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-red-500" />
              <span className="max-w-[155px] truncate">{PROFILE.email}</span>
            </a>

            <a
              href={`tel:${PROFILE.phone}`}
              title={PROFILE.phone}
              className="hidden lg:flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 px-2.5 py-1.5 rounded border border-zinc-800/80 bg-zinc-900/50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{PROFILE.phone}</span>
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-red-400 hover:border-red-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="xl:hidden p-2 rounded border border-zinc-800 bg-zinc-900/70 text-zinc-300"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#08080C] border-b border-zinc-800 px-6 py-4 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-wider text-zinc-300 hover:text-red-400 py-1.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap gap-3 text-xs text-zinc-400">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 text-red-500" /> {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                className="flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" /> {PROFILE.phone}
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section
          id="home"
          className="pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-full border border-red-600/30 animate-[spin_24s_linear_infinite]" />
                <div className="absolute -inset-2 rounded-full border border-dashed border-sky-500/25 animate-[spin_18s_linear_infinite_reverse]" />
                <div className="absolute inset-0 rounded-full bg-red-600/20 blur-2xl group-hover:bg-red-600/30 transition-all" />

                <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-red-600/60 bg-gradient-to-b from-zinc-900 to-[#060608] shadow-[0_0_50px_rgba(220,38,38,0.18)] flex items-center justify-center">
                  {!photoError ? (
                    <img
                      src={PROFILE.photoUrl}
                      alt="Nijul Jamwal"
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="text-center px-6">
                      <div className="w-20 h-20 mx-auto rounded-full border border-red-500/40 bg-red-950/20 flex items-center justify-center mb-3">
                        <span className="font-serif text-3xl font-bold text-red-500">
                          NJ
                        </span>
                      </div>
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                        Nijul Jamwal
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Open to Data Science &amp; AI/ML Roles</span>
              </div>
            </div>

            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-red-900/50 bg-red-950/20 text-red-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>Data Science • Machine Learning • NLP</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-white via-zinc-200 to-red-400 bg-clip-text text-transparent">
                  Nijul Jamwal
                </span>
                .
              </h1>

              <div className="mt-3.5 h-8 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-xl font-mono text-sky-400 tracking-wide">
                  &gt; {titles[typedIndex]}
                  <span className="inline-block w-2 h-5 ml-1 bg-red-500 animate-pulse align-middle" />
                </span>
              </div>

              <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                BCA graduate with hands-on project experience in{" "}
                <span className="text-white font-medium">
                  Python, SQL, machine learning, exploratory data analysis, and
                  NLP-based document question answering
                </span>
                . I enjoy transforming raw datasets into meaningful insights and
                building end-to-end intelligent systems—from customer churn
                classification and retail demand forecasting to Retrieval-Augmented
                Generation (RAG) pipelines.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-red-600 hover:bg-red-500 text-white font-medium text-sm tracking-wide shadow-[0_0_25px_rgba(220,38,38,0.35)] transition-all"
                >
                  <span>View My Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleResumeDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-zinc-700 hover:border-sky-400/60 bg-zinc-900/70 hover:bg-zinc-900 text-zinc-100 font-medium text-sm tracking-wide transition-all"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Download Resume</span>
                </button>
              </div>

              <div className="mt-7 pt-5 border-t border-zinc-900 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  {PROFILE.location}
                </span>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-zinc-300" />
                  github.com/RJNIJUL
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  linkedin.com/in/nijul-jamwal-51b7b83b8
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900/80"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-red-600" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400">
              01 // Investigation Profile
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-[#0B0B0F]/95 border border-zinc-800/90 rounded-xl p-6 sm:p-8 space-y-4 leading-relaxed text-zinc-300">
              <p>
                I am a Bachelor of Computer Applications (BCA) graduate from{" "}
                <span className="text-white font-medium">
                  Sri Sai University, Palampur (Himachal Pradesh)
                </span>{" "}
                with a strong focus on Data Science, Machine Learning, and
                Artificial Intelligence.
              </p>
              <p>
                Rather than stopping at theoretical coursework, I focus on{" "}
                <span className="text-white font-medium">
                  practical, end-to-end project execution
                </span>
                —from writing SQL queries and cleaning messy tabular records to
                engineering lag features, evaluating classifiers, and building
                local Retrieval-Augmented Generation (RAG) workflows with
                PyMuPDF, Sentence Transformers, FAISS, and Ollama.
              </p>
              <p>
                As an entry-level candidate, I bring curiosity, disciplined
                problem-solving, and a habit of continuous improvement. I am
                eager to join a collaborative engineering or data science team
                where I can contribute to real-world AI applications and grow
                under experienced mentors.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Database,
                  title: "Data-First Thinking",
                  desc: "Structured SQL querying, exploratory analysis, and leakage-free preprocessing.",
                  accent: "text-sky-400",
                },
                {
                  icon: Cpu,
                  title: "End-to-End ML",
                  desc: "Feature engineering, model comparison, and business-aligned metric evaluation.",
                  accent: "text-red-400",
                },
                {
                  icon: Brain,
                  title: "Applied NLP & RAG",
                  desc: "Chunking, dense embeddings, FAISS indexing, and local LLM document Q&A.",
                  accent: "text-red-400",
                },
                {
                  icon: Sparkles,
                  title: "Continuous Growth",
                  desc: "Strengthening deep learning and agentic AI skills through hands-on builds.",
                  accent: "text-sky-400",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-[#0B0B0F]/95 border border-zinc-800/80 hover:border-red-900/70 rounded-xl p-5 transition-colors"
                >
                  <pillar.icon className={`w-5 h-5 ${pillar.accent} mb-3`} />
                  <h3 className="text-sm font-semibold text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <section
          id="education"
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900/80"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-red-600" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400">
              02 // Academic &amp; Credential Dossier
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-10">
            Education &amp; Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-5 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-red-500" />
                <span>Academic &amp; Training Timeline</span>
              </h3>

              <div className="relative pl-7 border-l border-zinc-800 space-y-6">
                <div className="relative">
                  <span className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-red-600 ring-4 ring-[#060608]" />
                  <div className="bg-[#0B0B0F]/95 border border-zinc-800 rounded-xl p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-red-400">
                        2023 – 2026
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-950/40 border border-red-800/50 text-red-300">
                        CGPA: 7.5
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      Sri Sai University, Palampur, Himachal Pradesh
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-[#060608]" />
                  <div className="bg-[#0B0B0F]/95 border border-zinc-800 rounded-xl p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-sky-400">
                        15 Jan 2026 – 28 Feb 2026 • 120 Hours
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950/40 border border-sky-800/50 text-sky-300">
                        ISO 9001:2015
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      Python + AI + ML + DS Training
                    </h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      Excellence Technology, Dharamshala, Himachal Pradesh
                    </p>
                    <p className="text-xs text-zinc-500 mt-1.5">
                      Intensive hands-on training in Python programming,
                      Artificial Intelligence, and Machine Learning fundamentals.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-zinc-600 ring-4 ring-[#060608]" />
                  <div className="bg-[#0B0B0F]/95 border border-zinc-800 rounded-xl p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-zinc-400">
                        2022 – 2023
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
                        CGPA: 7.9
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      Class XII (Senior Secondary)
                    </h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      H.G.N. Public Senior Secondary School, Mandi, Himachal
                      Pradesh
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-zinc-600 ring-4 ring-[#060608]" />
                  <div className="bg-[#0B0B0F]/95 border border-zinc-800 rounded-xl p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-zinc-400">
                        2020 – 2021
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
                        CGPA: 9.2
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      Class X (Secondary)
                    </h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      H.G.N. Public Senior Secondary School, Mandi, Himachal
                      Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-sky-400" />
                  <span>Verified Certifications</span>
                </h3>
              </div>

              <div className="space-y-5">
                {CERTIFICATES.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-[#0B0B0F]/95 border border-zinc-800 hover:border-zinc-700 rounded-xl overflow-hidden transition-all"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12">
                      <div
                        onClick={() => setActiveCertModal(cert)}
                        className="sm:col-span-5 bg-zinc-950 border-b sm:border-b-0 sm:border-r border-zinc-800 min-h-[160px] flex items-center justify-center relative overflow-hidden cursor-pointer group"
                      >
                        {!certErrors[cert.id] ? (
                          <img
                            src={cert.imageUrl}
                            alt={cert.title}
                            onError={() =>
                              setCertErrors((prev) => ({
                                ...prev,
                                [cert.id]: true,
                              }))
                            }
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="p-4 text-center">
                            <ShieldCheck className="w-8 h-8 text-red-500/70 mx-auto mb-2" />
                            <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                              {cert.issuer}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="sm:col-span-7 p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-sky-400 mb-1">
                            <span>{cert.issuer}</span>
                          </div>
                          <h4 className="text-base font-semibold text-white">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-zinc-500 mt-1">
                            {cert.date}
                          </p>
                          <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                            {cert.details}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-zinc-900 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => setActiveCertModal(cert)}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-200 hover:text-red-400 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </button>

                          {cert.verifyUrl && (
                            <a
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors"
                            >
                              <span>Verify Credential</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION WITH INTERACTIVE CATEGORY TABS */}
        <section
          id="skills"
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900/80"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-red-600" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400">
              03 // Technical Arsenal
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-950/30 border border-red-800/50 text-red-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Hands-on Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-sky-950/30 border border-sky-800/50 text-sky-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Familiar
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {skillTabs.map((tab) => {
              const active = selectedSkillTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSkillTab(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono tracking-wide transition-all border ${
                    active
                      ? "bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                      : "bg-[#0B0B0F] border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            className={`grid grid-cols-1 ${
              visibleSkillGroups.length === 1
                ? "md:grid-cols-1 max-w-3xl"
                : "md:grid-cols-2 lg:grid-cols-3"
            } gap-5`}
          >
            {visibleSkillGroups.map((category) => {
              const IconComponent = category.icon;
              const isCrimson = category.accent === "crimson";
              return (
                <div
                  key={category.id}
                  className="bg-[#0B0B0F]/95 border border-zinc-800/90 hover:border-zinc-700 rounded-xl p-5 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                          isCrimson
                            ? "bg-red-950/30 border-red-800/50 text-red-400"
                            : "bg-sky-950/30 border-sky-800/50 text-sky-400"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-semibold text-white">
                        {category.label}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {category.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between gap-2 py-1.5 px-3 rounded-lg bg-zinc-900/60 border border-zinc-800/70"
                        >
                          <span className="text-xs sm:text-sm text-zinc-200 font-medium">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded whitespace-nowrap ${
                              skill.level === "Hands-on Experience"
                                ? "bg-red-950/40 text-red-300 border border-red-900/50"
                                : "bg-sky-950/40 text-sky-300 border border-sky-900/50"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section
          id="projects"
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900/80"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-red-600" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400">
              04 // Case Files &amp; Implementations
            </span>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Data Science &amp; AI Projects
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
              End-to-end systems built from raw datasets and PDFs, complete with
              feature engineering, evaluation benchmarks, and source code
              repositories.
            </p>
          </div>

          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="bg-[#0B0B0F]/95 border border-zinc-800/90 hover:border-red-900/60 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2.5">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-red-600/20 border border-red-600/40 text-red-400">
                          CASE {project.number}
                        </span>
                        <span className="text-xs font-mono tracking-wider text-sky-400">
                          {project.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-red-400 transition-colors"
                        >
                          {project.title}
                        </a>
                      </h3>

                      <p className="mt-2.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {project.shortDesc}
                      </p>

                      <div className="mt-4 p-3 rounded-lg bg-zinc-900/70 border-l-2 border-red-600">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 block mb-0.5">
                          Problem Solved
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-300">
                          {project.problem}
                        </p>
                      </div>

                      <div className="mt-4">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                          Implementation Workflow
                        </span>
                        <ul className="space-y-1.5">
                          {project.workflow.map((step, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                            >
                              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-900">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setActiveProjectModal(project)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-medium transition-colors"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>View Case Details</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded border border-zinc-700 hover:border-sky-400/60 bg-zinc-900/70 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium transition-colors"
                        >
                          <Github className="w-4 h-4 text-sky-400" />
                          <span>{project.repoSlug}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#08080C] border-t lg:border-t-0 lg:border-l border-zinc-800/80 p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2.5">
                        System Architecture &amp; Telemetry
                      </span>
                      <div className="w-full aspect-[2/1] rounded-xl overflow-hidden bg-[#060608] border border-zinc-800/80 p-2">
                        <ProjectArchitectureIllustration
                          type={project.diagramType}
                        />
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2.5">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80 text-center"
                        >
                          <div className="text-sm sm:text-base font-bold text-white font-mono">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CAREER OPPORTUNITIES SECTION */}
        <section
          id="opportunities"
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900/80"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-red-600" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400">
              05 // Career Direction
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Where I Want to Make an Impact
          </h2>
          <p className="text-base text-zinc-300 max-w-3xl leading-relaxed mb-8">
            I am currently looking for an opportunity to begin my professional
            journey, contribute to real-world projects, and grow alongside
            experienced professionals. I am enthusiastic about learning,
            collaborating with engineering teams, and building intelligent
            machine learning and AI solutions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[#0B0B0F]/95 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2.5 text-sm font-mono uppercase tracking-wider text-red-400 mb-4">
                <Briefcase className="w-4 h-4" />
                <span>Target Data Science &amp; AI Roles</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PREFERRED_ROLES.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80 text-xs sm:text-sm text-zinc-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#0B0B0F]/95 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 mb-3">
                  Employment Preferences
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Full-time fresher opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Paid internships &amp; entry-level positions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Startups and growing technology companies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0B0B0F]/95 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-sm font-mono uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Preferred Locations (Open to Relocation)</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PREFERRED_LOCATIONS.map((loc) => (
                    <span
                      key={loc}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-200"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESUME & CONTACT SECTION */}
        <section
          id="contact"
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900/80"
        >
          <div className="bg-gradient-to-br from-[#0E0E14] via-[#0A0A0E] to-[#12080B] border border-zinc-800 rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400 block mb-2.5">
                    06 // Initiate Connection
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Let&apos;s Build Something Intelligent Together.
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    I&apos;m actively looking for opportunities in Data Science,
                    Artificial Intelligence, and Machine Learning. If you&apos;re
                    hiring for an entry-level role, internship, or would like to
                    discuss a project, I&apos;d love to connect.
                  </p>

                  <div className="mt-6 space-y-2.5 text-sm">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 hover:border-red-500/50 text-zinc-200 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="truncate">{PROFILE.email}</span>
                    </a>

                    <a
                      href={`tel:${PROFILE.phone}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 hover:border-sky-500/50 text-zinc-200 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{PROFILE.phone}</span>
                    </a>

                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 hover:border-sky-500/50 text-zinc-200 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="truncate">
                        linkedin.com/in/nijul-jamwal-51b7b83b8
                      </span>
                    </a>

                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 hover:border-red-500/50 text-zinc-200 transition-colors"
                    >
                      <Github className="w-4 h-4 text-zinc-300 shrink-0" />
                      <span>github.com/RJNIJUL</span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={handleResumeDownload}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </button>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-sm font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>Email Me</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#08080C] border border-zinc-800/90 rounded-xl p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-zinc-400 mb-5">
                  Submitting opens your default email client pre-addressed to{" "}
                  <span className="text-zinc-200">{PROFILE.email}</span>.
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            name: e.target.value,
                          })
                        }
                        placeholder="Recruiter / Hiring Manager Name"
                        className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:outline-none text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            email: e.target.value,
                          })
                        }
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:outline-none text-sm text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          subject: e.target.value,
                        })
                      }
                      placeholder="Data Science / AI-ML Opportunity"
                      className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:outline-none text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      placeholder="Share details about the role, team, or project..."
                      className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:outline-none text-sm text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Compose Email in Mail App</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-900 py-7 px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nijul Jamwal. All rights reserved.</p>
          <p className="font-mono text-zinc-600">
            Data Science • Machine Learning • NLP • RAG Systems
          </p>
        </div>
      </footer>

      {activeProjectModal && (
        <div
          onClick={() => setActiveProjectModal(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0B0B0F] border border-zinc-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-red-400">
                  CASE {activeProjectModal.number} • {activeProjectModal.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-5 rounded-xl overflow-hidden border border-zinc-800 bg-[#060608] p-2">
              <ProjectArchitectureIllustration
                type={activeProjectModal.diagramType}
              />
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              {activeProjectModal.shortDesc}
            </p>

            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
              Architecture &amp; Execution Steps
            </h4>
            <ul className="space-y-2 mb-6">
              {activeProjectModal.workflow.map((w, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-800">
              <div className="flex flex-wrap gap-1.5">
                {activeProjectModal.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white text-xs font-medium"
              >
                <Github className="w-4 h-4" />
                <span>Open on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {activeCertModal && (
        <div
          onClick={() => setActiveCertModal(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0B0B0F] border border-zinc-800 rounded-2xl max-w-3xl w-full p-6"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-sky-400">
                  {activeCertModal.issuer}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {activeCertModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCertModal(null)}
                className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center max-h-[70vh]">
              {!certErrors[activeCertModal.id] ? (
                <img
                  src={activeCertModal.imageUrl}
                  alt={activeCertModal.title}
                  className="max-h-[68vh] w-auto object-contain"
                />
              ) : (
                <div className="p-8 text-center">
                  <FileText className="w-12 h-12 text-red-500 mx-auto mb-3" />
                  <p className="text-sm text-zinc-300">
                    {activeCertModal.title}
                  </p>
                </div>
              )}
            </div>

            {activeCertModal.verifyUrl && (
              <div className="mt-4 flex justify-end">
                <a
                  href={activeCertModal.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium"
                >
                  <span>Verify on Coursera</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
