import aboutMeIMG from "../assets/aboutme.png";
import cafeIMG from "../assets/cafe.png";
import ticTacToeIMG from "../assets/tictactoe.png";

function Projects() {
  return (
    <section>
      <h1>Projects</h1>

      <img
        src={aboutMeIMG}
        alt="personal about me website"
        className="project-image"
      />

      <h3>Personal About Me Website</h3>
      <p>
        A personal website created using HTML and CSS to introduce myself,
        showcase my interests, and practice front-end development skills.
      </p>

      <a
        href="https://astonishing-sable-7a3b4c.netlify.app/"
        target="_blank"
        className="project-link"
      >
        View Project
      </a>

      <p>Completion Date: 2022</p>


      <h3>Karina's Cafe</h3>

      <img
        src={cafeIMG}
        alt="cafe website"
        className="project-image"
      />

      <p>
        A cafe website designed to showcase menu items, business information,
        and pricing. This project helped me practice CSS, JavaScript, and HTML.
      </p>

      <a
        href="https://karinascafe.netlify.app/"
        target="_blank"
        className="project-link"
      >
        View Project
      </a>

      <p>Completion Date: 2022</p>


      <h3>tic tac toe Game</h3>

      <img
        src={ticTacToeIMG}
        alt="tic tac toe game"
        className="project-image"
      />

      <p>
        A tic tac toe game built using JavaScript, HTML, and CSS. This project
        helped me better understand programming logic and user interaction.
      </p>

      <a
        href="https://zingy-macaron-444903.netlify.app/"
        target="_blank"
        className="project-link"
      >
        View Project
      </a>

    </section>
  );
}

export default Projects;