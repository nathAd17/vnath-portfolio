import techStack from "./techStack";
const projects = [
  {
    id: 1,
    title: "UI/UX Mobile Apps",
    name: "Dapur Kreatif",
    status: "preview",
    imgPath: "/assets/album/dapurkreatif.png",
    url: "https://shorturl.at/xEJKT",
    techStack: [techStack.find((tech) => tech.id === 1)].filter(
      Boolean
    ),
    category: "UI/UX",
  },
  {
    id: 2,
    title: "UI/UX Mobile Apps",
    name: "Career Search",
    status: "comming soon",
    imgPath: "/assets/album/polotno.png",
    url: "",
    techStack: [techStack.find((tech) => tech.id === 1)].filter(
      Boolean
    ),
    category: "UI/UX",
  },
  {
    id: 3,
    title: "Web Pariwisata",
    name: "Pesona Flobamora",
    status: "comming soon",
    imgPath: "/assets/album/web-wisata.png",
    url: "",
    techStack: [
      techStack.find((tech) => tech.id === 2),
      techStack.find((tech) => tech.id === 4),
      techStack.find((tech) => tech.id === 6),
      techStack.find((tech) => tech.id === 8),
    ].filter(Boolean),
    category: "FULL STACK",
  },
  {
    id: 4,
    title: "Web Portfolio",
    name: "Portfolio Bootstrap",
    status: "preview",
    imgPath: "/assets/album/bs_portfolio.png",
    url: "https://nathad17.github.io/bootstrap_portfolio/",
    techStack: [
      techStack.find((tech) => tech.id === 3),
      techStack.find((tech) => tech.id === 4),
    ].filter(Boolean),
    category: "FRONTEND",
  },
  {
    id: 5,
    title: "Web Resep Makanan",
    name: "Dapur Kreatif",
    status: "comming soon",
    imgPath: "/assets/album/dapur_kreatif.png",
    url: "",
    techStack: [
      techStack.find((tech) => tech.id === 2),
      techStack.find((tech) => tech.id === 4),
      techStack.find((tech) => tech.id === 6),
      techStack.find((tech) => tech.id === 8),
    ].filter(Boolean),
    category: "FULL STACK",
  },
  {
    id: 6,
    title: "Web Landing Page Sekolah",
    name: "PKBM Yeremia",
    status: "preview",
    imgPath: "/assets/album/vue-school.png",
    url: "https://vue-school.vercel.app/",
    techStack: [
      techStack.find((tech) => tech.id === 2),
      techStack.find((tech) => tech.id === 5),
      techStack.find((tech) => tech.id === 9),
    ].filter(Boolean),
    category: "FRONTEND",
  },
  // Tambahkan proyek lainnya
];

export default projects;
