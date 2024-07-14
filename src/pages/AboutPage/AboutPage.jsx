import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <>
        <p className="page-title">Welcome to the Cinemagic website!</p>
        <p>It was created to get information about movies.</p>
      </>
      <section className="features">
        <h2>Our capabilities:</h2>
        <>
          <li>Movie Search</li>
          <li>Viewing ratings</li>
          <li>Viewing actors, directors</li>
          <li>
            Getting information about the availability of Oscar nominations
          </li>
        </>
      </section>
      <section className="contact">
        <h2>Contact us:</h2>
        <p>If you have any questions or suggestions, please contact us:</p>
        <address>
          <p>
            Email:{" "}
            <a
              href="mailto:azarova_2212@mail.ru"
              className="contact-link-style"
            >
              support_sinemagic@mail.ru
            </a>
          </p>
          <p>
            Phone number:{" "}
            <a href="tel:+123456789" className="contact-link-style">
              +123456789
            </a>
          </p>
        </address>
      </section>
    </div>
  );
};

export { AboutPage };
