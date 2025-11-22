export interface Project {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Aliva",
    subTitle: "Mostakbal City",
    description:
      "Aliva is a city inspired by the word 'life' spanning 600 acres, featuring stunning natural beauty and modern urban design that encourages social interaction. Aliva offers a unique living experience where comfort and luxury integrate with the breathtaking natural environment, making it the ideal place to live and enjoy life.",
    image: "/slideone.webp",
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Mountain View",
    subTitle: "iCity New Cairo",
    description:
      "Mountain View iCity New Cairo is a revolutionary concept that offers a unique living experience. It is designed to be a place where you can indulge in everything you wish for, without any compromise. The project offers a diverse range of architectural styles and living options to suit every lifestyle.",
    image: "/slidetow.webp",
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Palm Hills",
    subTitle: "New Cairo",
    description:
      "Palm Hills New Cairo is a new mixed-use community providing balance and diversity of housing types, natural backdrops, commercial services and recreational amenities for its residents and nearby visitors. It is influenced by the local area and is centered on creating a community of pedestrian-scaled, tree-lined streets.",
    image: "/slidethree.webp",
    link: "/projects/3",
  },
  {
    id: 4,
    title: "Madinaty",
    subTitle: "New Cairo",
    description:
      "Madinaty is a city built on 8,000 acres, designed to provide a modern lifestyle for its residents. It features a wide range of services and facilities, including schools, hospitals, shopping malls, and sports clubs, all set within a lush green environment.",
    image: "/slidefour.webp",
    link: "/projects/4",
  },
];
