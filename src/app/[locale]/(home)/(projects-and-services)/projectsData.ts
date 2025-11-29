export interface Project {
    id: number;
    title: string;
    location: string;
    architect: string;
    services: string;
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "We Telecom Headquarters",
        location: "New Administrative City",
        architect: "ACUD",
        services: "Structural Design | Supervision",
        image: "https://aaceconsultants.com/wp-content/uploads/2022/05/WE-Telecom-3D-Render-scaled.jpg",
    },
    {
        id: 2,
        title: "Dorrat El Karz Mall",
        location: "Cairo, Egypt",
        architect: "ZDS Architects",
        services: "Structural Design",
        image: "https://aaceconsultants.com/wp-content/uploads/2022/05/zyro-image-2.jpg",
    },
    {
        id: 3,
        title: "Prk Vie - Upwyde",
        location: "Cairo, Egypt",
        architect: "Al Gabaly Architects",
        services: "Structural Design | Supervision",
        image: "https://aaceconsultants.com/wp-content/uploads/2025/04/Prk-vie-new-cairo.webp",
    },
    {
        id: 4,
        title: "Business District - New Capital",
        location: "Cairo, Egypt",
        architect: "Al Gabaly Architects",
        services: "Structural Design | Supervision",
        image: "https://aaceconsultants.com/wp-content/uploads/2022/10/Al-Safi-23B3-scaled.jpg",
    },
    {
        id: 5,
        title: "Golden Gate",
        location: "Cairo, Egypt",
        architect: "ZDS Architects",
        services: "Structural Design",
        image: "https://aaceconsultants.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-03-at-8.20.25-PM-3.jpeg",
    },
];
