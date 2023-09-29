import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/landingPage.css'


const LandingPage = () => {

  const bugImage= "../images/bugBudLand.png";

  return (
    <div>
      {/* Meta tags */}
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      {/* CSS links */}
      <link
        href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
        rel="stylesheet"
      />
      {/* Title */}
      <title>BugBuddy</title>
      {/* NAVBAR */}
      <nav>
        <div className="container">
          <div className="nav__wrapper">
            <a href="#" className="nav__brand">
              <span className="nav__logo">BB</span>
              <span className="nav__logo__name">Bug Buddy</span>
            </a>
            <div className="nav__list__wrapper">
              <div className="nav__list">
                <div className="nav__menu">
                  <a href="#" className="nav__menu__item"><Link to="/dashboard">Home</Link></a>
                  <a href="#about" className="nav__menu__item">About</a>
                  <a href="#testimonial" className="nav__menu__item">Testimonial</a>
                </div>
                <div className="nav__menu">
                  <a href="#" className="nav__menu__item">Login</a>
                  <a href="#" className="btn btn-blue">Signup</a>
                </div>
              </div>
            </div>
            <i className='bx bx-menu nav__toggle'></i>
          </div>
        </div>
      </nav>
      {/* NAVBAR */}
      {/* HEADER */}
      <header>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__content">
              <h1 className="header__title">
                "Tracking <span>Bugs,</span> Taming <span>Success!</span>
              </h1>
              <p className="header__detail">
                Welcome to Bug Buddy, your trusted companion in the world of software development! Whether you're a seasoned developer or just starting your journey in the realm of coding, you've now gained access to a powerful tool that will revolutionize the way you manage and track bugs in your projects. Bug Buddy is designed with simplicity and efficiency in mind, ensuring that you can focus on what you do best writing code while we take care of the rest.
              </p>
              <form action="#" className="header__content__form">
                <div className="form-group">
                  <label htmlFor="location">Occupation</label>
                  <select id="location">
                    <option value="ID">Student</option>
                    <option value="ID">Employed</option>
                    <option value="ID">None</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="city">Position</label>
                  <select id="city">
                    <option value="Lampung">Project Manager</option>
                    <option value="Lampung">Quality Assurance</option>
                    <option value="Lampung">Developer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="people">Number of Team Members</label>
                  <select id="people">
                    <option value="8">4 person</option>
                    <option value="8">3 person</option>
                    <option value="8">2 person</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-blue">Explore Now</button>
              </form>
            </div>
            <div className="header__image">
              <img src={bugImage} alt="" />
            </div>
          </div>
        </div>
      </header>
      {/* HEADER */}
      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__content">
              <h2 className="section__title">Who We Are?</h2>
              <p className="about__detail">
                Bug Buddy is a comprehensive bug tracking and issue management platform built to simplify the entire process of identifying, reporting, tracking, and resolving software glitches and concerns. Whether you're a developer, tester, project manager, or anyone involved in software development, Bug Buddy is here to streamline your work and help you achieve excellence in your software projects
              </p>
              <ul className="about__list">
                <li>
                  <i className='bx bxs-check-circle about__item__icon'></i>
                  Effortless Bug Reporting
                </li>
                <li>
                  <i className='bx bxs-check-circle about__item__icon'></i>
                  Real-Time Collaboration
                </li>
                <li>
                  <i className='bx bxs-check-circle about__item__icon'></i>
                  Customizable Workflows
                </li>
                <li>
                  <i className='bx bxs-check-circle about__item__icon'></i>
                  Integration-Friendly
                </li>
              </ul>
              <a href="#" className="btn btn-blue">Read More</a>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      {/* TESTIMONIAL */}
      <section id="testimonial">
        <div className="container">
          <h2 className="section__title">What Customers Say</h2>
          <p className="section__detail">Customers generally appreciate Bug Buddy's user-friendliness and bug reporting efficiency!</p>
          <div className="testimonial__list">
            <div className="testimonial__item">
              <div className="testimonial__item__rating">
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star-half'></i>
              </div>
              <p className="testimonial__item__text">
                Bug Buddy has significantly improved our software development process by offering an intuitive and user-friendly platform that promotes efficient bug tracking and cross-team collaboration. Its automation features and robust reporting capabilities have streamlined our workflow, resulting in faster releases and data-driven decision-making. The exceptional support from the Bug Buddy team adds an extra layer of confidence in the product, making it an indispensable tool for our development team.
              </p>
              <div className="testimonial__item__user">
                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="testimonial__item__user__profile">
                  <h4>Rafael</h4>
                  <p>Software Developer</p>
                </div>
              </div>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__item__rating">
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star-half'></i>
              </div>
              <p className="testimonial__item__text">
                Bug Buddy has brought a remarkable improvement to our development team's workflow, making bug tracking and reporting effortless. Its user-friendly interface has enhanced collaboration across our team, ensuring efficient communication and swift issue resolution. The powerful reporting and analytics capabilities have given us valuable insights, enabling us to make informed decisions and consistently deliver high-quality software projects on time and within budget. Bug Buddy is a must-have tool for any team seeking to streamline their bug tracking and boost collaboration.
              </p>
              <div className="testimonial__item__user">
                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="testimonial__item__user__profile">
                  <h4>Freesergs</h4>
                  <p>Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL */}
      {/* SUBSCRIBE */}
      <section id="subscribe">
        <div className="container">
          <div className="subscribe__wrapper">
            <h2 className="section__title">Subscribe To Get Update</h2>
            <p className="section__detail">In Bug Buddy, your truly ally. With every issue, we'll pull through. Subscribe today, join our crew,   To squash those bugs, and we'll guide you!</p>
            <form action="#" className="subscribe__form">
              <input type="email" placeholder="Email address..." />
              <button type="submit" className="btn btn-blue"><i className='bx bxs-send' ></i></button>
            </form>
          </div>
        </div>
      </section>
      {/* SUBSCRIBE */}
      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer__wrapper">
            <a href="#" className="footer__brand">
              <span className="footer__logo">BB</span>
              <span className="footer__logo__name">Bug Buddy</span>
            </a>
            <p>Copyright &copy;2022. All Right Reserved</p>
            <div className="footer__social__link">
              <a href="#" className="footer__link"><i className='bx bxl-facebook'></i></a>
              <a href="#" className="footer__link"><i className='bx bxl-instagram-alt' ></i></a>
              <a href="#" className="footer__link"><i className='bx bxl-twitter' ></i></a>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER */}
    </div>
  );
}

export default LandingPage;
