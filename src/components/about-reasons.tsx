import "./about-reasons.css";
import ngoBackground from "../assets/about-bg.png";
import "./about-reasons.css";

function AboutReasons() {
  return (
    <section className="about-reasons"
    style={{ backgroundImage: `url(${ngoBackground})` }}>
      <div className="motive">
        <h1>Why are we doing this?</h1>
        <p>
          GuideBook was created with a larger vision: to bridge the gap between
          social organizations and the rapidly evolving world of technology.
          Many NGOs and organizations still spend valuable time managing tasks
          through manual, repetitive, and disconnected processes. While these
          methods may have worked in the past, they can become a limitation as
          organizations grow and aim to create greater impact. Our initiative
          focuses on helping National NGOs and other social organizations move
          from traditional ways of working toward more efficient, organized, and
          digitally enabled operations. We believe digitalization should be
          accessible to every organization, regardless of its technical
          expertise or resources. Technology should be understandable,
          practical, and easy to adopt. GuideBook makes this transition easier
          by providing clear and practical guidance on digital tools, workplace
          technologies, automation, and modern workflows. Instead of
          overwhelming organizations with complicated technical information, we
          break digitalization into simple, actionable steps that can be applied
          to real-world situations. Our goal is not simply to encourage
          organizations to use more technology, but to use it meaningfully. By
          reducing repetitive work, improving information management,
          streamlining communication, and creating efficient workflows,
          organizations can dedicate more of their time and resources to serving
          their communities and creating social impact. Ultimately, GuideBook
          aims to contribute to a more digitally capable social sector where
          technology is an enabler rather than a barrier — helping organizations
          become more efficient, adaptable, scalable, and impactful.
        </p>
      </div>
    </section>
  );
}

export default AboutReasons;
