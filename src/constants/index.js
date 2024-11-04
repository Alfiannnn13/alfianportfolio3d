import { meta, shopify, starbucks, tesla, coursera, talenthub, dicoding, bbpvp } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    instagram,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "IT Support",
        company_name: "Coursera | Google",
        icon: coursera,
        iconBg: "#FFFFFF",
        date: "Mei 2024 - Juli 2024",
        points: [
            "Dasar Dasar Dukungan Teknis.",
            "Jaringan Komputer.",
            "Sistem Operasi",
            "Administrasi Sistem.",
            "Keamanan IT",
        ],
    },
    {
        title: "Next JS Pengembangan Website Modern",
        company_name: "Talenthub",
        icon: talenthub,
        iconBg: "#FFFFFF",
        date: "Mei 2024",
        points: [
            "Server Side Rendering (SSR) dan Static Site Generation (SSG).",
            "Routing Dinamis, Mengimplementasikan routing yang fleksibel dan dinamis untuk pengalaman pengguna yang lebih baik.",
            "API Routes, Membuat API langsung di dalam Next.js, memungkinkan aplikasi berinteraksi dengan data tanpa server eksternal.",
            "Integrasi dengan Teknologi Modern, Mengintegrasikan Next.js dengan teknologi seperti React, dan memanfaatkan berbagai fitur ekosistem JavaScript.",
        ],
    },
    {
        title: "Front End React Web Developer",
        company_name: "Dicoding",
        icon: dicoding,
        iconBg: "#FFFFFF",
        date: "Sept 2023 - Nov 2023",
        points: [
            "Memahami dasar-dasar pemrograman web, termasuk penggunaan HTML dan CSS untuk membangun struktur dan desain halaman.",
            "Mempelajari dasar-dasar pemrograman JavaScript untuk menambahkan interaktivitas dan fungsionalitas pada situs web.",
            "Pengantar pengembangan front-end bagi pemula, mencakup HTML, CSS, dan JavaScript untuk menciptakan situs web yang responsif.",
            "Mengembangkan aplikasi web menggunakan React, termasuk pengelolaan komponen dan penggunaan state untuk membangun antarmuka pengguna yang dinamis."
        ],
    },
    {
        title: "Pemrograman Smart Home",
        company_name: "BBPVP BEKASI",
        icon: bbpvp,
        iconBg: "#FFFFFF",
        date: "Oktober 2023",
        points: [
            "Memahami dasar-dasar Arduino dan perangkat keras yang digunakan dalam proyek smarthome.",
            "Mempelajari pemrograman dasar menggunakan Arduino IDE untuk mengontrol perangkat dan sensor.",
            "Menggunakan sensor dan aktuator untuk menciptakan sistem otomatisasi rumah yang interaktif.",
            "Menerapkan konsep pemrograman seperti pengulangan, pengkondisian, dan fungsi dalam pengembangan proyek smarthome.",
            "Membuat proyek nyata, seperti sistem pencahayaan otomatis atau pengendalian suhu, menggunakan Arduino.",
            "Mengintegrasikan komunikasi nirkabel, seperti Wi-Fi atau Bluetooth, untuk menghubungkan perangkat smarthome."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'https://wa.me/6281213528024',
    },
    {
        name: 'Email',
        iconUrl: github,
        link: 'mailto:muhammadalfiannovanto17@gmail.com',
    },
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com/fiannn.13/?hl=en-gb',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'AI Content Generator',
        description: 'Membangun Web AI Content Generator, sebuah platform berbasis AI yang menyediakan content generator otomatis, membantu pengguna membuat konten kreatif dengan cepat dan mudah.',
        link: 'https://cognifyverse.netlify.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'E-Catalog',
        description: 'Merancang dan membangun katalog elektronik kosmetik yang memungkinkan pengguna melihat, memilih, dan memesan produk dengan mudah melalui WhatsApp.',
        link: 'https://yumnashop.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Landing Page Company Profile',
        description: 'Membangun landing page company profile yang profesional dan responsif untuk memperkuat citra perusahaan dan menarik calon klien.',
        link: '/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-pink',
        name: 'Full Stack Point of Sale',
        description: 'Mengembangkan sistem point of sale berbasis web yang efisien, memungkinkan pengguna untuk mengelola penjualan dan inventaris dengan mudah',
        link: 'https://shanhsopdemo.infinityfreeapp.com/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Personal Web Portfolio',
        description: 'Merancang dan membangun web personal portfolio untuk menampilkan karya dan proyek yang telah saya kerjakan, memberikan gambaran jelas tentang keterampilan dan pengalaman.',
        link: '/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'IoT Smart Pet Feeder',
        description: 'Mengembangkan IoT Smart Pet Feeder yang terhubung dengan aplikasi Android, memungkinkan pengguna untuk memberi makan hewan peliharaan secara otomatis dan mengatur jadwal pakan dengan mudah',
        link: 'https://www.youtube.com/watch?v=8IETxRkyyPM&t=87s',
    }
];