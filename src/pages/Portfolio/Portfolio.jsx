import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [customCursorActive, setCustomCursorActive] = useState(false);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error('Error loading project data:', error));
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  // Cursor effect logic for project ID 5
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: 'forwards' }
      );
    };

    if (customCursorActive) {
      window.addEventListener('mousemove', moveCursor);
    } else {
      window.removeEventListener('mousemove', moveCursor);
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [customCursorActive]);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title motion-preset-slide-right ">My Projects</h2>
      </header>


      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
              onMouseEnter={() => {
                if (project.id === 5) setCustomCursorActive(true); // Enable custom cursor for project ID 5
              }}
              onMouseLeave={() => {
                if (project.id === 5) setCustomCursorActive(false); // Disable custom cursor for others
              }}
            >
              {/* Making the entire project item clickable */}
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <figure className="project-img motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur">
                  <div className="project-item-icon-box"></div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Custom cursor */}
      {customCursorActive && (
        <>
          <div className="cursor-dot" data-cursor-dot></div>
          <div className="cursor-outline" data-cursor-outline></div>
        </>
      )}
    </article>
  );
};

export default Portfolio;



