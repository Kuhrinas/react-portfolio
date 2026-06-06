import "./App.css";
import profilePic from "./assets/profile.jpeg";
import logo from "./assets/logo.png";
import aboutMeIMG from "./assets/aboutme.png";
import cafeIMG from "./assets/cafe.png";
import ticTacToeIMG from "./assets/tictactoe.png";

function App() {
  return (
    <div>
      <nav>
        <img src={logo} alt="Karinas logo" className="logo" />

      <div className="nav-links">
        <a href="#home">Home</a> |{" "}
        <a href="#about">About</a> |{" "}
        <a href="#projects">Projects</a> |{" "}
        <a href="#services">Services</a> |{" "}
        <a href="#references">References</a> |{" "}
        <a href="#contact">Contact</a>
      </div>
    </nav>

      <section id="home">
        <h1>Welcome to My Portfolio</h1>

        <p>
          My name is Karina. I am a Software Engineering student interested in
          web development and game development.
        </p>

        <p> I am passionate about software development, web development, and game
          development. This portfolio will showcase some of my work, projects and skills.
        </p>

        <p>
          My goal is to continue learning and growing as a developer that solve real world problems.
        </p>
      </section>

      <section id="about">
        <h1>About Me</h1>
        
        <img
          src={profilePic}
          alt="Karina Picture"
          className="profile-image"
        />

        <p>
          I am a student at Centennial College, learning software engineering.
        </p>

        <p>
          I enjoy building applications, learning new programming languages, and
          wokring on software projects that challenge my problem solving skills.
        </p>

        <p>
          In my free time, i enjoy playing video games, coding personal projects on roblox
          and learning blender, the modeling program. 
        </p>

        <a href="/resume.pdf" target="_blank">
          View My Resume
          {/* need to fix this link to open the resume. wont open whatsoever. */}
        </a>
      </section>

<section id="projects">
  
  <h1>Projects</h1>
 
  <img src={aboutMeIMG}   
  alt="personal about me website"  
  className="project-image" 
  />
  
  <h3>Personal About Me Website</h3>
  <p>
    A personal website created using html and css to introduce myself, showcase my interests,
    and practice front-end development ksills.
  </p>
  <a href="https://astonishing-sable-7a3b4c.netlify.app/"
  target="_blank">
  View Project
</a>
  <p>Completion Date: 2022</p>

  <h3>Karina's Cafe</h3>
<img src={cafeIMG}
alt="cafe website"
className="project-image"
/>
  <p>
    A cafe websited designed to showcase menu items, business information, and show how fair
    the prices are on the website (they're not lol). This project really helped me practice my CSS skills.
    I used JS, HTML and CSS for this. 
  </p>
<a href="https://karinascafe.netlify.app/" 
target="_blank">
 View Project
</a>
  <p>Completion Date: 2022</p>
  <h3>Tic Tac Toe Game</h3>
  <img src={ticTacToeIMG}   
  alt="tic tac toe game"  
  className="project-image" 
  />
  <p>
    A tic tac toe game built using Javascript, HTML and CSS. Very small project but it was
    really fun to build and obviously helped me better understand how to code. 
  </p>
  <a href="https://zingy-macaron-444903.netlify.app/" 
target="_blank">
 View Project
</a>

</section>

<section id="services">
  <h1>Services</h1>

  <h3>Web Development</h3>
  <p>creating responsive websites using HMTL, CSS, JavaScript, and React.</p>

  <h3>Software Development</h3>
  <p>building desktop and console applications using Java and C#.</p>

  <h3>Database Design</h3>
  <p>creating and managing databases using SQL and Oracle.</p>
</section>

<section id="contact">
  <h1>Contact Me</h1>

  <p>Email: rockyaj2004@gmail.com</p>
  <p>LinkedIn: i dont have linked in yet.</p>

<form
  onSubmit={(e) => {
    // prevents the page from refreshing when the form is submitted
    e.preventDefault();
    // gives an alert message when the form is submitted
    alert("Message submitted successfully!");
  }}
>
  <input type="text" placeholder="First Name" />
  <input type="text" placeholder="Last Name" />
  <input type="email" placeholder="Email Address" />
  <input type="tel" placeholder="Phone Number" />
  <textarea placeholder="Message"></textarea>
  <button type="submit">Send</button>
</form>
</section>
    </div>
  );
}

export default App;
