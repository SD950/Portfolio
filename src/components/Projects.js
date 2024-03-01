import React from "react";


const Projects = () => {
    /*
  const projects = [
    {
      img: devlog,
      title: "devlog",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: uilogs,
      title: "uilogs",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: cssProjects,
      title: "css projects",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    {
      img: getInspirred,
      title: "get Inspirred",
      desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
      live: "https://get-inspirred.netlify.app/",
      code: "https://github.com/Coderamrin/get-inspired",
    },
  ];
*/
  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some projects that I've built out.
          </p>
        </div>
                </div>
    </section>
  );
};

export default Projects;
