function Contact() {
  return (
    <section>
      <h1>Contact Me</h1>

      <p>Email: rockyaj2004@gmail.com</p>
      <p>LinkedIn: N/A</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("form submitted!");
        }}
        >
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>

    </section>
  );
}

export default Contact;