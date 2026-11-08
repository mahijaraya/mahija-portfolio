import React, { useState } from "react";
import {
  Database,
  ShieldCheck,
  Code,
  Terminal,
  Server,
  Award,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  Send,
  Download,
  Search,
  Cpu,
  Layers,
  FileSpreadsheet,
} from "lucide-react";

export default function App() {
  const [activeNav, setActiveNav] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Profile data
  const profile = {
    name: "Mahija Raya Dagnafauz Sunarya",
    title: "IT Specialist | Data & System Analyst | Cybersecurity Enthusiast",
    education: "S1 Teknologi Informasi - Universitas Amikom Purwokerto",
    gpa: "3.89",
    location: "Central Java, Indonesia",
    email: "mahijaraya@gmail.com",
    phone: "0895704321452",
    linkedin: "Mahija Raya D.S",
    about:
      "Lulusan S1 Teknologi Informasi Universitas Amikom Purwokerto dengan predikat memuaskan (IPK 3.89). Memiliki fokus spesialisasi pada Analisis Data, Manajemen Database relasional, dan Keamanan Sistem (Vulnerability Assessment). Terbiasa berpikir analitis, menyelesaikan masalah teknis secara sistematis, serta beradaptasi cepat dalam pengelolaan infrastruktur TI maupun pemrosesan data skala modern.",
  };

  const stats = [
    { label: "IPK Kelulusan", value: "3.89", sub: "Dari skala 4.00" },
    {
      label: "Sertifikasi Teknis",
      value: "3+",
      sub: "Red Hat, SQL, MS Office",
    },
    { label: "Proyek Utama", value: "4+", sub: "Security, Data & System" },
    {
      label: "Pengalaman Organisasi",
      value: "2 Thn",
      sub: "Riset TI & Networking",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Vulnerability Assessment Sistem Inventaris Web",
      category: "security",
      categoryLabel: "Cybersecurity & Security Assessment",
      tags: ["NIST SP 800-115", "OWASP ZAP", "Wapiti", "Web Security"],
      shortDesc:
        "Analisis dan audit keamanan sistem inventaris web menggunakan metodologi NIST SP 800-115.",
      description:
        "Penelitian Tugas Akhir yang berfokus pada identifikasi dan pengujian celah keamanan aplikasi web inventaris. Mengombinasikan automated scanner (OWASP ZAP & Wapiti) dengan manual testing untuk memetakan kerentanan (SQL Injection, XSS, CSFR) serta memberikan rekomendasi perbaikan berbasis matriks risiko NIST.",
      outcomes: [
        "Memetakan kerentanan kritis berdasarkan OWASP Top 10",
        "Menyusun dokumen mitigasi dan patch keamanan",
        "Menggunakan standar internasional NIST SP 800-115",
      ],
    },
    {
      id: 2,
      title: "Aplikasi Pemesanan Tiket via Apache Kafka",
      category: "software",
      categoryLabel: "Distributed System & Software Engineering",
      tags: [
        "Apache Kafka",
        "Java/Python",
        "Distributed System",
        "Real-Time Data",
      ],
      shortDesc:
        "Implementasi message broker Apache Kafka untuk simulasi transaksi pemesanan tiket real-time.",
      description:
        "Merancang dan mengimplementasikan arsitektur microservices terdistribusi menggunakan Apache Kafka sebagai event streaming platform. Mengatur mekanisme producer-consumer untuk menangani antrean transaksi pemesanan tiket secara cepat, andal, dan decoupled.",
      outcomes: [
        "Penerapan komunikasi asinkronus antar-layanan",
        "Simulasi penanganan event streaming real-time",
        "Pengelolaan fault-tolerance pada distributed log",
      ],
    },
    {
      id: 3,
      title: "Pengembangan Sistem Berbasis Database MySQL",
      category: "database",
      categoryLabel: "Data & Database",
      tags: ["MySQL", "SQL", "Data Modeling", "Database Optimization"],
      shortDesc:
        "Perancangan dan pengolahan struktur database relasional skala sistem informasi.",
      description:
        "Merancang skema database terintegrasi (ERD, Normalisasi 3NF) serta menulis query teroptimasi untuk mendukung penyimpanan dan pengolahan data secara efisien. Memastikan data integrity, keandalan relasi, dan kecepatan retrieval data.",
      outcomes: [
        "Desain ERD & Normalisasi hingga bentuk 3NF",
        "Optimasi indeks dan query SQL yang responsif",
        "Penerapan transaksi dan integritas referensial",
      ],
    },
    {
      id: 4,
      title: "Simulasi Capture The Flag (CTF) Cyber Security",
      category: "security",
      categoryLabel: "Cybersecurity",
      tags: ["CTF", "Network Analysis", "Forensics", "Problem Solving"],
      shortDesc:
        "Tantangan analisis keamanan sistem, kriptografi dasar, dan eksploitasi skenario.",
      description:
        "Partisipasi dan simulasi tantangan CTF (seperti LKS Cyber Security). Melakukan analisa terhadap paket data (traffic analysis), analisis log sistem, dekripsi cipher, dan penyelesaian masalah teknis dalam lingkungan terisolasi.",
      outcomes: [
        "Kemampuan penganalisisan masalah keamanan secara kritis",
        "Penggunaan tools traffic inspection (Wireshark/Nmap)",
        "Pengalaman kompetisi LKS Cyber Security Jawa Tengah",
      ],
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const skillCategories = [
    {
      name: "Database & Data Analysis",
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "MySQL & Relational DB", level: 90 },
        { name: "SQL Query & Data Modeling", level: 88 },
        { name: "Python (Data Processing)", level: 80 },
      ],
    },
    {
      name: "System & Security",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "Red Hat Linux Administration", level: 85 },
        { name: "Vulnerability Assessment (ZAP/Wapiti)", level: 82 },
        { name: "Network Troubleshooting (TCP/IP)", level: 85 },
      ],
    },
    {
      name: "Programming & Web",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "HTML & CSS", level: 85 },
        { name: "PHP", level: 75 },
        { name: "Java Basics", level: 70 },
      ],
    },
    {
      name: "Tools & Productivity",
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "Microsoft Excel (Data Processing)", level: 90 },
        { name: "Apache Kafka Basics", level: 75 },
        { name: "Git / Version Control", level: 80 },
      ],
    },
  ];

  const certifications = [
    {
      title: "RH 124: Red Hat Enterprise Linux System Administration I",
      issuer: "Red Hat Academy",
      date: "Sertifikasi Resmi",
      desc: "Kompetensi administrasi sistem RHEL: command line, pengelolaan file & user, konfigurasi jaringan, service management, dan keamanan dasar.",
    },
    {
      title: "Penguasaan SQL untuk Manajemen Data yang Efektif",
      issuer: "Geti Incubator (Prakerja / SKKNI)",
      date: "Predikat: Sangat Baik",
      desc: "Pelatihan teknis manajemen data berstandar SKKNI No. 282/2016. Menguasai pemrograman SQL terstruktur dan perancangan akses basis data.",
    },
    {
      title: "Accelerated Competency Training - Microsoft Office",
      issuer: "Trust Training Partners",
      date: "Sertifikasi Kompetensi",
      desc: "Penguasaan paket aplikasi perkantoran Microsoft Office (Excel, Word, PowerPoint) untuk pengolahan data dan laporan operasional.",
    },
  ];

  const educationHistory = [
    {
      institution: "Universitas Amikom Purwokerto",
      degree: "S1 - Teknologi Informasi",
      period: "2022 – 2026",
      score: "IPK 3.89 / 4.00",
      details:
        "Aktif dalam UKM INTERMEDIA (Information Technology Research & Multimedia). Berfokus pada riset TI, pengembangan sistem, dan pengabdian masyarakat.",
    },
    {
      institution: "SMK Negeri 1 Gombong",
      degree: "Teknik Komputer dan Jaringan (TKJ)",
      period: "2019 – 2022",
      score: "Lulusan TKJ",
      details:
        "Jabatan: Koordinator Bidang Networking KIR TI. Peserta LKS Cyber Security (CTF) Tingkat Provinsi Jawa Tengah Tahun 2022.",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\\nEmail: ${formData.email}\\n\\nPesan:\\n${formData.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Glow Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* STICKY NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-slate-950 font-bold text-lg shadow-lg shadow-cyan-500/20">
                MR
              </div>
              <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                Mahija Raya
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { id: "about", label: "Tentang" },
                { id: "education", label: "Pendidikan" },
                { id: "projects", label: "Proyek" },
                { id: "skills", label: "Keahlian" },
                { id: "contact", label: "Kontak" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeNav === item.id
                      ? "text-cyan-400 bg-slate-900 border border-slate-800"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 transition-all shadow-md shadow-cyan-500/20"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
            {[
              { id: "about", label: "Tentang Saya" },
              { id: "education", label: "Pendidikan & Sertifikasi" },
              { id: "projects", label: "Proyek Portfolio" },
              { id: "skills", label: "Keahlian Teknis" },
              { id: "contact", label: "Hubungi Saya" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <img
          src="/profile.jpg"
          alt="Mahija Raya"
          className="w-32 h-32 rounded-full object-cover
             border-4 border-white/10 shadow-lg"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Lulusan S1 Teknologi Informasi (IPK 3.89)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
              Mahija Raya <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                Dagnafauz Sunarya
              </span>
            </h1>

            <p className="text-xl font-medium text-cyan-300/90">
              {profile.title}
            </p>

            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              Spesialisasi dalam pengolahan & analisis data, perancangan
              database relasional, serta pengujian keamanan sistem informasi.
              Siap memberikan kontribusi teknis terbaik.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm flex items-center space-x-2 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Lihat Proyek Saya</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm flex items-center space-x-2 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Hubungi Saya</span>
              </button>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>Mahija Raya D.S</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>mahijaraya@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Hero Decorative Card / Stat Box */}
          <div className="lg:col-span-5">
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-slate-800 to-slate-900 shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    profile_summary.json
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs sm:text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-cyan-400">"status":</span>
                    <span className="text-emerald-400">
                      "Fresh Graduate S1"
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-400">"univ":</span>
                    <span className="text-slate-300">"Amikom Purwokerto"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-400">"ipk":</span>
                    <span className="text-yellow-400 font-bold">
                      "3.89 / 4.00"
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-400">"core_skills":</span>
                    <span className="text-slate-300">
                      ["SQL", "Python", "Linux"]
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-400">"security_focus":</span>
                    <span className="text-indigo-400">"NIST SP 800-115"</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 bg-slate-900/50 p-4 rounded-xl border">
                  <p className="text-xs text-slate-400 mb-1 font-sans">
                    Sertifikasi Unggulan:
                  </p>
                  <p className="text-xs font-semibold text-cyan-300 font-sans">
                    • Red Hat Enterprise Linux (RH124)
                    <br />• Geti Incubator SQL (SKKNI Standard)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS OVERVIEW SECTION */}
      <section className="relative z-10 py-8 border-y border-slate-800/80 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative z-10 py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase">
              01. Profil Profesional
            </h2>
            <h3 className="text-3xl font-extrabold text-white mt-1">
              Tentang Saya
            </h3>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4 md:mt-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              Saya adalah lulusan **S1 Teknologi Informasi** dari **Universitas
              Amikom Purwokerto** yang memiliki komitmen tinggi dalam dunia IT,
              analisis data, dan keamanan informasi. Selama masa studi, saya
              fokus membangun pemahaman mendalam tentang ekosistem teknologi
              modern.
            </p>
            <p>
              Keahlian teknis saya mencakup pemrosesan dan analisis data
              menggunakan **SQL** dan **Python**, perancangan skema database
              relasional **MySQL**, hingga pemahaman operasional **Linux Red Hat
              Administration**. Di bidang keamanan, saya telah melakukan
              pengujian kerentanan (*Vulnerability Assessment*) pada aplikasi
              web menggunakan standar internasional **NIST SP 800-115**.
            </p>
            <p>
              Dengan latar belakang pendidikan ber-IPK **3.89**, pengalaman
              organisasi riset TI, serta kepemilikan sertifikasi teknis resmi,
              saya siap memberikan solusi analitis dan teknis untuk mendukung
              operasional perusahaan.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h4 className="font-bold text-slate-100 flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Ringkasan Keunggulan Utama</span>
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
                  <span>
                    <strong>Analytical Mindset:</strong> Mampu memetakan masalah
                    kompleks dan menyajikan rekomendasi solutif.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
                  <span>
                    <strong>Database Expertise:</strong> Merancang skema
                    relasional, optimasi query, dan menjaga integritas data.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
                  <span>
                    <strong>Cybersecurity Awareness:</strong> Berpengalaman
                    melakukan assessment celah keamanan web (ZAP/Wapiti).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section
        id="education"
        className="relative z-10 py-20 bg-slate-900/40 border-y border-slate-800/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase">
                02. Rekam Jejak
              </h2>
              <h3 className="text-3xl font-extrabold text-white mt-1">
                Pendidikan & Sertifikasi
              </h3>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4 md:mt-0"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Pendidikan Timeline */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-200 flex items-center space-x-2">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                <span>Pendidikan Formal</span>
              </h4>

              <div className="space-y-6 relative pl-6 border-l-2 border-slate-800">
                {educationHistory.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>
                    <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h5 className="font-bold text-lg text-white">
                          {edu.institution}
                        </h5>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 font-mono">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-cyan-300 font-medium text-sm mt-1">
                        {edu.degree}
                      </p>
                      <p className="text-xs font-bold text-yellow-400 mt-1">
                        {edu.score}
                      </p>
                      <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sertifikasi List */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-200 flex items-center space-x-2">
                <Award className="w-6 h-6 text-cyan-400" />
                <span>Sertifikasi & Pelatihan Teknis</span>
              </h4>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h5 className="font-bold text-base text-slate-100">
                        {cert.title}
                      </h5>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 whitespace-nowrap">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-xs text-cyan-400 font-medium mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SHOWCASE */}
      <section
        id="projects"
        className="relative z-10 py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase">
              03. Portofolio Proyek
            </h2>
            <h3 className="text-3xl font-extrabold text-white mt-1">
              Proyek Utama & Studi Kasus
            </h3>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4 md:mt-0"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: "all", label: "Semua Proyek" },
            { id: "security", label: "Cybersecurity" },
            { id: "database", label: "Data & Database" },
            { id: "software", label: "Software & Event System" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSelectedFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === btn.id
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/80">
                    {project.categoryLabel}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-cyan-950 hover:border-cyan-800 border border-slate-700/60 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-center space-x-1"
                >
                  <span>Lihat Detail Proyek</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="relative z-10 py-20 bg-slate-900/40 border-y border-slate-800/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase">
                04. Keahlian Teknis
              </h2>
              <h3 className="text-3xl font-extrabold text-white mt-1">
                Pemetaan Kompetensi
              </h3>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4 md:mt-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5"
              >
                <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-lg text-slate-100">
                    {cat.name}
                  </h4>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-cyan-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Softskills badges */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-sm font-bold text-slate-300 whitespace-nowrap">
              Soft Skills & Karakter Kerja:
            </span>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Problem Solving",
                "Analytical Thinking",
                "Teamwork & Collaboration",
                "Systematic Research",
                "Technical Documentation",
              ].map((soft, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium text-cyan-300"
                >
                  ✓ {soft}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative z-10 py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase">
              05. Hubungi Saya
            </h2>
            <h3 className="text-3xl font-extrabold text-white mt-1">
              Mari Bekerja Sama
            </h3>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4 md:mt-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-400 text-sm leading-relaxed">
              Saya terbuka untuk peluang kerja penuh waktu, magang, maupun
              kolaborasi proyek di bidang Data Analysis, Database Management,
              dan IT Infrastructure.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="text-sm font-bold text-slate-200">
                    {profile.email}
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/62${profile.phone.substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Telepon / WA</div>
                  <div className="text-sm font-bold text-slate-200">
                    {profile.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">LinkedIn</div>
                  <div className="text-sm font-bold text-slate-200">
                    {profile.linkedin}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4"
            >
              <h4 className="text-lg font-bold text-white mb-2">
                Kirim Pesan Directly
              </h4>

              {formSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-sm flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Aplikasi email Anda sedang dibuka. Silakan kirim pesan dari
                    aplikasi tersebut.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Nama Anda"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="email@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Subjek / Topik
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Peluang Kerja / Diskusi Proyek"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Pesan
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Mahija Raya Dagnafauz Sunarya. All
            rights reserved.
          </p>
          <p className="mt-1 text-slate-600">
            S1 Teknologi Informasi - Universitas Amikom Purwokerto
          </p>
        </div>
      </footer>

      {/* PROJECT DETAIL MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-800">
                {activeProject.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">
                {activeProject.title}
              </h3>
            </div>

            <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
              <h4 className="font-semibold text-slate-100">
                Deskripsi Proyek:
              </h4>
              <p>{activeProject.description}</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-slate-100 text-sm">
                Hasil & Highlight Kunci:
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {activeProject.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
