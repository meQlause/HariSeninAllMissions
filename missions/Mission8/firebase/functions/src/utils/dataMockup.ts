import { Content } from "./types";

export const contents: Content[] = [
  {
    id: 1,
    contentImage: "/assets/contents/content1.jpg",
    title: "Big Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
    details: {
      descriptionDetail: `Program ini dirancang khusus untuk Anda yang ingin memulai atau memperdalam karier di bidang audit dan analisis keuangan di perusahaan besar (Big 4). Dalam kursus ini, Anda akan mempelajari dasar-dasar akuntansi, proses audit internal dan eksternal, serta bagaimana menggunakan alat bantu seperti Excel, SAP, dan Power BI untuk mendukung analisis keuangan. Anda juga akan memahami bagaimana menyusun laporan keuangan, melakukan analisis rasio, dan membaca tren keuangan untuk memberikan rekomendasi strategis kepada manajemen. Dengan pendekatan berbasis studi kasus nyata dan pembelajaran berbasis proyek, peserta akan mendapatkan pengalaman langsung yang aplikatif dan relevan dengan kebutuhan industri saat ini. Kursus ini sangat cocok bagi fresh graduate maupun profesional yang ingin memperluas wawasan dan naik ke level berikutnya dalam dunia audit dan keuangan.`,
      reviews: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          review:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
          rating: 2.5,
        },
      ],
      tutordetails: [
        {
          avatar: "/assets/contents/avatar1.png",
          name: "Jena Otega",
          position: "Senior Accountant at Gojek",
          detail: "Berkarier di bidang HR selama lebih dari 3 tahun...",
        },
      ],
      courseDetails: [
        {
          header: "Course 1: Foundation of User Experience Design",
          subHeader: {
            "The basics of user experience design": {
              kind: "video",
              duration: "12 Menit",
            },
            "Understanding user needs": {
              kind: "video",
              duration: "15 Menit",
            },
            "UX principles and heuristics": {
              kind: "video",
              duration: "10 Menit",
            },
          },
        },
        {
          header: "Course 2: UX Research Methods",
          subHeader: {
            "Introduction to UX research": {
              kind: "video",
              duration: "14 Menit",
            },
            "Conducting interviews and surveys": {
              kind: "video",
              duration: "18 Menit",
            },
            "Analyzing research data": {
              kind: "video",
              duration: "20 Menit",
            },
          },
        },
        {
          header: "Course 3: Wireframing and Prototyping",
          subHeader: {
            "Creating wireframes": {
              kind: "video",
              duration: "16 Menit",
            },
            "Low vs high fidelity prototypes": {
              kind: "video",
              duration: "13 Menit",
            },
            "Tools for prototyping": {
              kind: "video",
              duration: "17 Menit",
            },
            "Interactive prototype testing": {
              kind: "video",
              duration: "11 Menit",
            },
          },
        },
        {
          header: "Course 4: Usability Testing and Iteration",
          subHeader: {
            "Usability testing fundamentals": {
              kind: "video",
              duration: "15 Menit",
            },
            "Planning and conducting usability tests": {
              kind: "video",
              duration: "19 Menit",
            },
            "Analyzing and iterating on feedback": {
              kind: "video",
              duration: "14 Menit",
            },
          },
        },
      ],
    },
  },
  {
    id: 2,
    contentImage: "/assets/contents/content2.jpg",
    title: "Junior Data Scientist",
    description:
      "Belajar Python, statistik, dan machine learning dari awal dengan bimbingan mentor berpengalaman.",
    rating: 4.7,
    reviewCount: 120,
    price: "Rp 350K",
    details: {
      descriptionDetail: `Dalam era big data seperti sekarang, kemampuan mengolah dan menganalisis data menjadi sangat krusial. Kursus ini akan membawa Anda dari nol hingga mampu mengerjakan proyek data science secara mandiri. Anda akan mulai dari dasar-dasar Python, termasuk struktur data, logika pemrograman, hingga library populer seperti Pandas dan NumPy. Selanjutnya, Anda akan belajar membersihkan data, melakukan eksplorasi dan visualisasi dengan Matplotlib dan Seaborn, serta menerapkan algoritma machine learning seperti regresi, klasifikasi, dan clustering. Di akhir kursus, peserta akan mengerjakan proyek akhir berbasis data nyata yang dapat dimasukkan ke dalam portofolio profesional. Semua materi disusun oleh praktisi data yang telah berpengalaman di berbagai industri untuk memastikan Anda mendapatkan skill yang relevan dan siap kerja.`,
      reviews: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          review:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
          rating: 2.5,
        },
      ],
      tutordetails: [
        {
          avatar: "/assets/contents/avatar2.png",
          name: "Rahmat Hidayat",
          position: "Lead Data Scientist at Tokopedia",
          detail:
            "Memiliki pengalaman 6 tahun di bidang data science dan aktif sebagai mentor di komunitas teknologi.",
        },
      ],
      courseDetails: [
        {
          header: "Course 1: Python for Data Science",
          subHeader: {
            "Intro to Python": {
              kind: "video",
              duration: "10 Menit",
            },
            "Data types and structures": {
              kind: "video",
              duration: "14 Menit",
            },
          },
        },
        {
          header: "Course 2: Data Visualization",
          subHeader: {
            "Matplotlib and Seaborn": {
              kind: "video",
              duration: "18 Menit",
            },
            "Creating interactive charts": {
              kind: "video",
              duration: "16 Menit",
            },
          },
        },
        {
          header: "Course 3: Machine Learning Basics",
          subHeader: {
            "Supervised learning": {
              kind: "video",
              duration: "20 Menit",
            },
            "Unsupervised learning": {
              kind: "video",
              duration: "17 Menit",
            },
          },
        },
      ],
    },
  },
  {
    id: 3,
    contentImage: "/assets/contents/content3.jpg",
    title: "Front-End Web Developer",
    description:
      "Pelajari HTML, CSS, JavaScript, dan React untuk membangun website interaktif dari nol dengan percaya diri.",
    rating: 4.3,
    reviewCount: 95,
    price: "Rp 280K",
    details: {
      descriptionDetail: `Kursus ini merupakan paket lengkap bagi Anda yang ingin menjadi front-end web developer modern. Anda akan mulai dengan mengenal struktur dasar HTML dan teknik styling menggunakan CSS, termasuk penggunaan Flexbox dan Grid untuk layout responsif. Kemudian, Anda akan belajar JavaScript mulai dari sintaks dasar, event handling, hingga konsep penting seperti asynchronous programming dan API calls. Setelah memahami dasar-dasarnya, Anda akan lanjut membangun komponen interaktif menggunakan React – library JavaScript paling populer saat ini. Anda akan memahami konsep JSX, state management, props, dan membuat aplikasi SPA (Single Page Application). Kursus ini juga mencakup best practices dalam web development seperti penggunaan Git, debugging, dan optimalisasi performa. Seluruh materi dikemas dalam format video singkat, kuis interaktif, dan proyek akhir yang dapat langsung digunakan sebagai bahan portofolio kerja.`,
      reviews: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          review:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
          rating: 2.5,
        },
      ],
      tutordetails: [
        {
          avatar: "/assets/contents/avatar3.png",
          name: "Sari Indah",
          position: "Front-End Engineer at Traveloka",
          detail: "Berpengalaman dalam proyek skala besar dan pengembangan web responsif.",
        },
      ],
      courseDetails: [
        {
          header: "Course 1: HTML & CSS Fundamentals",
          subHeader: {
            "Semantic HTML": {
              kind: "video",
              duration: "12 Menit",
            },
            "Responsive layouts": {
              kind: "video",
              duration: "15 Menit",
            },
          },
        },
        {
          header: "Course 2: JavaScript Essentials",
          subHeader: {
            "Variables and functions": {
              kind: "video",
              duration: "13 Menit",
            },
            "DOM manipulation": {
              kind: "video",
              duration: "14 Menit",
            },
          },
        },
        {
          header: "Course 3: React for Beginners",
          subHeader: {
            "JSX and components": {
              kind: "video",
              duration: "16 Menit",
            },
            "State and props": {
              kind: "video",
              duration: "17 Menit",
            },
          },
        },
      ],
    },
  },
  {
    id: 4,
    contentImage: "/assets/contents/content4.jpg",
    title: "UI/UX Designer Pemula",
    description:
      "Pelajari prinsip desain modern dan alat profesional seperti Figma untuk membangun antarmuka yang efektif.",
    rating: 4.6,
    reviewCount: 110,
    price: "Rp 320K",
    details: {
      descriptionDetail: `Kursus ini dirancang untuk siapa saja yang ingin memulai karier sebagai UI/UX Designer tanpa latar belakang teknis. Anda akan diajak memahami prinsip-prinsip dasar desain antarmuka pengguna (UI) dan pengalaman pengguna (UX), termasuk teori warna, tipografi, dan layout. Selanjutnya, Anda akan mempelajari tools populer seperti Figma untuk membuat wireframe, prototype, dan mockup. Materi mencakup riset pengguna, pembuatan user persona, journey mapping, dan usability testing untuk memastikan solusi yang dirancang benar-benar sesuai dengan kebutuhan pengguna. Kursus ini menekankan praktik langsung dengan studi kasus yang merefleksikan tantangan dunia kerja nyata. Dengan bimbingan mentor profesional dan proyek akhir berbasis klien simulasi, Anda akan siap bersaing dalam industri digital yang semakin kompetitif.`,
      reviews: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          review:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
          rating: 2.5,
        },
      ],
      tutordetails: [
        {
          avatar: "/assets/contents/avatar4.png",
          name: "Ayu Larasati",
          position: "Senior UX Designer at Bukalapak",
          detail:
            "Berpengalaman lebih dari 6 tahun di bidang desain produk digital, mengerjakan berbagai aplikasi e-commerce dan fintech.",
        },
      ],
      courseDetails: [
        {
          header: "Course 1: Pengenalan UI/UX Design",
          subHeader: {
            "Apa itu UI dan UX?": {
              kind: "video",
              duration: "10 Menit",
            },
            "Dasar-dasar desain antarmuka": {
              kind: "video",
              duration: "13 Menit",
            },
          },
        },
        {
          header: "Course 2: Riset dan Analisis Pengguna",
          subHeader: {
            "User persona dan user journey": {
              kind: "video",
              duration: "15 Menit",
            },
            "User interview dan analisis hasil": {
              kind: "video",
              duration: "18 Menit",
            },
          },
        },
        {
          header: "Course 3: Prototyping dengan Figma",
          subHeader: {
            "Membuat wireframe": {
              kind: "video",
              duration: "16 Menit",
            },
            "Membuat prototype interaktif": {
              kind: "video",
              duration: "14 Menit",
            },
          },
        },
      ],
    },
  },
  {
    id: 5,
    contentImage: "/assets/contents/content5.jpg",
    title: "Back-End Developer dengan Node.js",
    description:
      "Bangun server dan API modern menggunakan Node.js dan Express, cocok untuk pemula maupun developer berpengalaman.",
    rating: 4.8,
    reviewCount: 134,
    price: "Rp 370K",
    details: {
      descriptionDetail: `Pelajari cara membangun server dan API modern menggunakan Node.js dan Express dalam kursus intensif ini. Anda akan memahami bagaimana server bekerja, membuat RESTful API, mengelola middleware, dan mengintegrasikan database seperti MongoDB atau PostgreSQL. Kursus ini juga mencakup praktik autentikasi pengguna dengan JWT dan pengamanan endpoint API. Setiap topik dilengkapi dengan contoh aplikasi nyata seperti sistem login, dashboard admin, dan integrasi payment gateway. Anda juga akan mempelajari deployment ke layanan cloud seperti Heroku atau Railway. Dengan pendekatan berbasis proyek dan studi kasus industri, kursus ini membekali Anda dengan keterampilan yang siap pakai di dunia kerja sebagai back-end developer.`,
      reviews: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          review:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
          rating: 2.5,
        },
      ],
      tutordetails: [
        {
          avatar: "/assets/contents/avatar5.png",
          name: "Rizky Ardiansyah",
          position: "Software Engineer at Shopee",
          detail:
            "Mengembangkan sistem backend skala besar dan memiliki spesialisasi dalam arsitektur microservices dan keamanan API.",
        },
      ],
      courseDetails: [
        {
          header: "Course 1: Dasar Node.js dan Express",
          subHeader: {
            "Pengenalan Node.js": {
              kind: "video",
              duration: "12 Menit",
            },
            "Routing dan middleware Express": {
              kind: "video",
              duration: "14 Menit",
            },
          },
        },
        {
          header: "Course 2: Database dan Autentikasi",
          subHeader: {
            "Integrasi MongoDB": {
              kind: "video",
              duration: "16 Menit",
            },
            "JWT dan sistem login": {
              kind: "video",
              duration: "18 Menit",
            },
          },
        },
        {
          header: "Course 3: Deployment dan Optimasi",
          subHeader: {
            "Deploy ke Heroku": {
              kind: "video",
              duration: "12 Menit",
            },
            "Handling error dan logging": {
              kind: "video",
              duration: "13 Menit",
            },
          },
        },
      ],
    },
  },
  {
    id: 6,
    contentImage: "/assets/contents/content6.jpg",
    title: "Digital Marketing Specialist",
    description:
      "Pelajari SEO, iklan digital, dan strategi media sosial untuk meningkatkan brand dan penjualan secara online.",
    rating: 4.4,
    reviewCount: 102,
    price: "Rp 290K",
    details: {
      descriptionDetail: `Kursus ini menyajikan panduan lengkap menjadi digital marketer yang efektif dan strategis. Anda akan mempelajari prinsip pemasaran digital, riset audiens, serta cara merancang dan mengelola kampanye iklan melalui platform seperti Google Ads dan Meta Ads (Facebook & Instagram). Anda juga akan memahami cara kerja Search Engine Optimization (SEO), strategi content marketing, dan tools analitik seperti Google Analytics untuk mengukur performa kampanye secara real time. Dilengkapi dengan studi kasus lokal dan tools terkini, Anda akan menguasai strategi yang bisa langsung diterapkan untuk meningkatkan visibilitas merek atau bisnis Anda di dunia digital.`,
      reviews: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          review:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
          rating: 2.5,
        },
      ],
      tutordetails: [
        {
          avatar: "/assets/contents/avatar6.png",
          name: "Nadia Prameswari",
          position: "Digital Strategist at Grab",
          detail:
            "Berpengalaman dalam strategi pertumbuhan digital dan manajemen kampanye lintas platform di berbagai industri.",
        },
      ],
      courseDetails: [
        {
          header: "Course 1: Dasar Digital Marketing",
          subHeader: {
            "Konsep pemasaran digital": {
              kind: "video",
              duration: "11 Menit",
            },
            "Funnel dan customer journey": {
              kind: "video",
              duration: "13 Menit",
            },
          },
        },
        {
          header: "Course 2: SEO & Content Strategy",
          subHeader: {
            "Dasar-dasar SEO on-page": {
              kind: "video",
              duration: "14 Menit",
            },
            "Perencanaan konten yang efektif": {
              kind: "video",
              duration: "15 Menit",
            },
          },
        },
        {
          header: "Course 3: Ads dan Analitik",
          subHeader: {
            "Menggunakan Google Ads dan Meta Ads": {
              kind: "video",
              duration: "17 Menit",
            },
            "Menganalisis hasil dengan Google Analytics": {
              kind: "video",
              duration: "12 Menit",
            },
          },
        },
      ],
    },
  },
  {
    id: 7,
    contentImage: "/assets/contents/content7.jpg",
    title: "Mobile App Developer dengan Flutter",
    description:
      "Bangun aplikasi Android dan iOS hanya dengan satu basis kode menggunakan Flutter dan Dart dengan effisien.",
    rating: 4.9,
    reviewCount: 145,
    price: "Rp 400K",
    details: {
      descriptionDetail: `Kursus ini membimbing Anda membangun aplikasi mobile multiplatform dengan Flutter, framework yang digunakan oleh perusahaan global seperti Google dan Alibaba. Anda akan mulai dari pengenalan Dart sebagai bahasa dasar Flutter, lalu lanjut ke pembuatan UI interaktif dengan widget, manajemen state, navigasi antar halaman, dan pemanggilan API eksternal. Kursus ini juga mencakup pengelolaan data lokal menggunakan SQLite dan shared preferences, serta penerapan desain responsif untuk berbagai ukuran layar. Proyek akhir berupa aplikasi nyata seperti to-do list, aplikasi cuaca, dan marketplace sederhana akan memperkuat portofolio Anda dan menunjukkan kompetensi dalam membangun aplikasi modern.`,
      reviews: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          review:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
          rating: 2.5,
        },
      ],
      tutordetails: [
        {
          avatar: "/assets/contents/avatar7.png",
          name: "Fadlan Nurhakim",
          position: "Flutter Engineer at Tokopedia",
          detail:
            "Telah mengembangkan berbagai aplikasi mobile komersial dengan Flutter selama 4 tahun dan aktif dalam komunitas Flutter Indonesia.",
        },
      ],
      courseDetails: [
        {
          header: "Course 1: Dasar Flutter dan Dart",
          subHeader: {
            "Pengenalan Flutter dan setup": {
              kind: "video",
              duration: "12 Menit",
            },
            "Dasar bahasa Dart": {
              kind: "video",
              duration: "15 Menit",
            },
          },
        },
        {
          header: "Course 2: Membuat UI Dinamis",
          subHeader: {
            "Layout dan widget": {
              kind: "video",
              duration: "16 Menit",
            },
            "Navigasi dan routing": {
              kind: "video",
              duration: "14 Menit",
            },
          },
        },
        {
          header: "Course 3: Integrasi dan Deployment",
          subHeader: {
            "HTTP request dan API": {
              kind: "video",
              duration: "17 Menit",
            },
            "Build dan release ke Play Store": {
              kind: "video",
              duration: "13 Menit",
            },
          },
        },
      ],
    },
  },
  {
    id: 8,
    contentImage: "/assets/contents/content8.jpg",
    title: "Cybersecurity Fundamental",
    description:
      "Pelajari dasar-dasar keamanan siber untuk melindungi sistem, jaringan, dan data digital dari ancaman.",
    rating: 4.5,
    reviewCount: 88,
    price: "Rp 310K",
    details: {
      descriptionDetail: `Kursus ini memberikan fondasi penting dalam keamanan siber bagi siapa saja yang tertarik pada bidang keamanan informasi. Anda akan mempelajari konsep ancaman digital, jenis-jenis serangan seperti phishing, malware, dan ransomware, serta cara mitigasinya. Kursus ini juga mencakup topik pengamanan jaringan, enkripsi data, keamanan aplikasi web, dan audit keamanan dasar. Anda akan memahami peran firewall, VPN, dan metode autentikasi dua faktor (2FA). Disertai simulasi serangan dan latihan pengamanan, kursus ini cocok untuk pemula maupun profesional yang ingin meningkatkan kesadaran keamanan digital pribadi dan organisasi.`,
      reviews: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          review:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
          rating: 2.5,
        },
      ],
      tutordetails: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          detail:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
        },
      ],
      courseDetails: [
        {
          header: "Course 1: Pengenalan Cybersecurity",
          subHeader: {
            "Apa itu keamanan siber?": {
              kind: "video",
              duration: "11 Menit",
            },
            "Jenis ancaman dan serangan": {
              kind: "video",
              duration: "14 Menit",
            },
          },
        },
        {
          header: "Course 2: Sistem dan Jaringan Aman",
          subHeader: {
            "Firewall dan VPN": {
              kind: "video",
              duration: "15 Menit",
            },
            "Keamanan aplikasi web": {
              kind: "video",
              duration: "17 Menit",
            },
          },
        },
        {
          header: "Course 3: Praktik & Simulasi",
          subHeader: {
            "Simulasi serangan dan deteksi": {
              kind: "video",
              duration: "16 Menit",
            },
            "Latihan pengamanan data": {
              kind: "video",
              duration: "13 Menit",
            },
          },
        },
      ],
    },
  },
  {
    id: 9,
    contentImage: "/assets/contents/content9.jpg",
    title: "Startup Finance Fundamentals",
    description:
      "Pelajari dasar-dasar keuangan startup dengan pembelajaran interaktif dan studi kasus nyata.",
    rating: 4.7,
    reviewCount: 103,
    price: "Rp 420K",
    details: {
      descriptionDetail: `Kursus ini dirancang untuk membekali Anda dengan pemahaman yang kuat tentang keuangan di dunia startup. Anda akan mempelajari cara mengelola anggaran, menginterpretasi laporan keuangan, dan memahami metrik pertumbuhan utama seperti burn rate dan customer acquisition cost. Dalam kursus ini, Anda juga akan menjelajahi teknik forecasting dan valuasi yang digunakan oleh pendiri dan investor. Kursus ini mencakup studi kasus startup nyata dan disampaikan oleh praktisi yang telah bekerja di perusahaan rintisan berskala internasional.`,
      reviews: [
        {
          avatar: "/assets/contents/avatar8.png",
          name: "Denny Kurniawan",
          position: "Cybersecurity Analyst at Telkom",
          review:
            "Ahli keamanan jaringan dengan pengalaman lebih dari 8 tahun menangani insiden dan membangun sistem proteksi data perusahaan.",
          rating: 2.5,
        },
      ],
      tutordetails: [
        {
          avatar: "/assets/contents/avatar9.png",
          name: "Alya Pramudita",
          position: "CFO at RuangInovasi",
          detail:
            "Memiliki pengalaman lebih dari 7 tahun dalam bidang keuangan startup, termasuk pendanaan seri A dan manajemen keuangan strategis.",
        },
      ],
      courseDetails: [
        {
          header: "Course 1: Startup Finance Basics",
          subHeader: {
            "Intro to Startup Finance": {
              kind: "video",
              duration: "13 Menit",
            },
            "Understanding Revenue Models": {
              kind: "video",
              duration: "15 Menit",
            },
            "Financial Statements in Startups": {
              kind: "video",
              duration: "17 Menit",
            },
          },
        },
        {
          header: "Course 2: Budgeting and Forecasting",
          subHeader: {
            "Creating a Startup Budget": {
              kind: "video",
              duration: "14 Menit",
            },
            "Forecasting Growth": {
              kind: "video",
              duration: "16 Menit",
            },
            "Scenario Planning": {
              kind: "video",
              duration: "12 Menit",
            },
          },
        },
        {
          header: "Course 3: Startup Valuation and Metrics",
          subHeader: {
            "Understanding Burn Rate": {
              kind: "video",
              duration: "11 Menit",
            },
            "CAC and LTV": {
              kind: "video",
              duration: "13 Menit",
            },
            "Valuation Techniques": {
              kind: "video",
              duration: "15 Menit",
            },
          },
        },
      ],
    },
  },
];