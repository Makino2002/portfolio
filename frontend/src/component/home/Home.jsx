import "./Home.scss";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="hero">
        <div className="left">
          <h1>
            <span className="dim">NMM</span> is a{" "}
            <span className="accent">web development engineer</span>
          </h1>

          <p className="sub">
            He crafts responsive websites where technologies
            <br /> meet creativity
          </p>

          <a href="#contact" className="btn">
            Contact me !!
          </a>
        </div>

        <div className="right">
          <img
            className="portrait"
            src="public/images/avt.png"
            alt="NMM portrait"
          />

          <div className="badge">
            <span className="dot" />
            <span>Currently working on</span>
            <strong>Portfolio</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
