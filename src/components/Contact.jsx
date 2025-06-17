import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import sortinghat from "../assets/sorting.gif";
import { useRef, useEffect } from "react";
import sortinghatAudio from "../audio/harrysortinghat.mp3";

const Contact = () => {
  const audioref = useRef(null);
  const containerRef = useRef(null);
  const hasPlayedRef = useRef(false);

  const handleHoverPlay = () => {
    const audio = audioref.current;
    if (audio && !hasPlayedRef.current) {
      audio.volume = 0.8;
      audio.play().catch((e) => {
        console.warn("Autoplay blocked:", e);
      });
      hasPlayedRef.current = true;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const audio = audioref.current;
        if (!entry.isIntersecting && audio) {
          audio.pause();
          audio.currentTime = 0;
          hasPlayedRef.current = false; // reset so it can play again on next hover
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      className="contact-container"
      ref={containerRef}
      onMouseEnter={handleHoverPlay}
    >
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>
          If you have any questions or just want to say hello, feel free to
          reach out!
        </p>
        <div className="form-cap">
          <form className="contact-form">
            <div className="form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>

              <button type="submit">Send Message</button>

              <div className="sociallinks">
                <a href="https://www.linkedin.com/in/mayer-goyal-07a58527a/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/mayergoyal">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:goyalmayer2@gmail.com">
                  <FontAwesomeIcon icon={faInbox} />
                </a>
              </div>
            </div>
          </form>

          <div className="cap-section">
            <img src={sortinghat} alt="sorting hat" />
            <audio ref={audioref} src={sortinghatAudio} loop preload="auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
