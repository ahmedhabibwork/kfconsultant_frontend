export interface Service {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Urban Planning & Landscape",
    image: "/categories/garden.webp",
    link: "/projects?serviceId=1",
  },
  {
    id: 2,
    title: "Architectural Design",
    image: "/categories/buling.webp",
    link: "/projects?serviceId=2",
  },
  {
    id: 3,
    title: "Interior Design",
    image: "/categories/charies.webp",
    link: "/projects?serviceId=3",
  },
  {
    id: 4,
    title: "Structural Design",
    image: "/categories/taour.webp",
    link: "/projects?serviceId=4",
  },
  {
    id: 5,
    title: "Electromechanical & Infrastructure",
    image: "/categories/pipe.webp",
    link: "/projects?serviceId=5",
  },
  {
    id: 6,
    title: "Construction Supervision",
    image: "/categories/manworker.webp",
    link: "/projects?serviceId=6",
  },
];
