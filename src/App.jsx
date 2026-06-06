import "./App.css";
import profilePic from "./assets/profile.jpeg";
import logo from "./assets/logo.png";

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

  <h3>Student Study Planner</h3>
  <p>
    A web application designed to help students manage assignments,
    exams, and study schedules.
  </p>
  <p>Completion Date: June 2026</p>

  <h3>Package Delivery System</h3>
  <p>
    Javabased application used to manage riders and deliveries
    through object oriented programming concepts.
  </p>
  <p>Completion Date: May 2026</p>

  <h3>Portfolio Website</h3>
  <p>
    Personal portfolio website developed using React to showcase
    projects, skills, and services.
  </p>
  <p>Completion Date: June 2026</p>

  <h3> Small tictactoe game</h3>
  <p>
    A small tictactoe game built using Java
  </p>
  <p>Completion Date: A while ago idk lol</p>
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
