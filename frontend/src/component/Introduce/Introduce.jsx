import "./Introduce.scss";

export default function Introduce() {
  return (
    <section id="about-me" className="introduce">
      <div className="container">
        <header className="intro-head">
          <h2>Introduce</h2>
          <span className="rule" />
        </header>

        <div className="intro-body">
          <div className="text">
            <p className="hello">Hello, I’m NMM!</p>

            <p>
              I’m a self-taught front-end developer from Viet Nam with a strong
              background in Physics and Informatics at the University of Science
              – VNUHCM. I specialize in building responsive, modern, and
              user-friendly websites using technologies such as HTML, CSS,
              JavaScript, ReactJS, and ExpressJS.
            </p>

            <p>
              Over the past few years, I have worked on projects such as student
              management applications and online sales systems, and I have
              gained valuable experience through internships and teaching
              programming. These opportunities have helped me sharpen my skills
              in teamwork, problem-solving, and time management. Transforming my
              creativity and knowledge into websites has always been my passion,
              and I continuously strive to learn the latest technologies and
              frameworks.
            </p>
            <p>
              My goal is to deliver impactful web applications that help clients
              establish and strengthen their online presence.
            </p>

            <a className="btn" href="#projects" aria-label="Read more about me">
              Read more →
            </a>
          </div>

          <div className="visual">
            <img
              src="public/images/about-me.png"
              alt="NMM portrait"
              className="photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
