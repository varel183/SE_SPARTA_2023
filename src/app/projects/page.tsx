"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Water Quality Tester",
      description: "This IoT device is designed for use in the agricultural sector to monitor water quality through pH and temperature indicators. The device automatically activates the water pump when the water conditions meet the pre-set quality standards. With this tool, farmers can ensure that the water used for irrigation is always in optimal condition without the need for manual checks.",
      image: "/images/wqt.jpeg",
      link: "https://drive.google.com/drive/folders/1mxOzfhsOrNiKZCNW9THi7_Qf4wXrn7Fn"
    },
    {
      title: "Tuple",
      description: "Tuple is a platform for foreign language learning that focuses on user interface (UI) design. Although currently only a concept and UI design created in Figma, this platform is expected to provide an intuitive and easy-to-use language learning experience in the future.",
      image: "/images/tuple.png",
      link: "https://drive.google.com/drive/folders/1T_cl0aQ8Acp3dZJ9ynF-PyMDLbbKrJjD"
    },
    {
      title: "Final Project for Basic Programming",
      description: "This project is a game created using the Python programming language. The game features various gameplay mechanics designed with a certain level of complexity, offering a challenging and engaging experience. This project was part of the final assignment in the Basic Programming course.",
      image: "/images/daspro_img.png",
      link: "https://drive.google.com/drive/folders/1S_xbeVzxSeUqOL_ogr86dxgiGp7JznbM"
    }
  ];

  return (
    <section id="projects" className="p-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative w-full h-72 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Project</a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button onClick={() => window.open("https://github.com/varel183", "_blank")}>See More</Button>
        </div>
      </div>
    </section>
  );
}
