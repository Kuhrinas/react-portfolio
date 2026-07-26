import profilePic from "../assets/profile.jpeg";

function About() {
  return (
    <section>
      <h1>About Me</h1>

      <img
        src={profilePic}
        alt="Karina"
        className="profile-c"
      />

      <p>
        My name is Karina. I am a Software Engineering student at Centennial
        College with an interest in web development and game development.
      </p>

      <p>
        i enjoy building applications, learning new programming languages, and
        working on software projects that challenge my problem-solving skills.
      </p>

      <p>
        In my free time, I enjoy playing video games, coding personal Roblox
        projects, and learning Blender for 3D modeling.
      </p>

      <a href="/resume.pdf" target="_blank">
        View My Resume
      </a>
    </section>
  );
}

export default About;