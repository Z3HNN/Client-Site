import React from "react";

const Main = () => {
  const descblock = () => {
    document.body.classList.remove("desc__visible");
    document.body.classList.remove("left__padding-remove");
  };

  const openSchedule = () => {
    document.body.classList += " schedule__open";
    document.body.classList += " left__padding-remove";
  };

  const closeSchedule = () => {
    document.body.classList.remove("schedule__open");
    document.body.classList.remove("left__padding-remove");
  };

  const closeContact = () => {
    document.body.classList.remove("contact__open");
    document.body.classList.remove("left__padding-remove");
  };

  return (
    <div>
      <div className="row">
        <div className="company__desription--column">
          <div className="company__description-padding-left">
            <div className="company__description--conatiner-left">
              <a href="#" className="close-btn--link" onClick={descblock}>
                <h1 className="close-btn">X</h1>
              </a>
              <h1 className="company__description--header-left">RevTek</h1>
              <p>
                Revelation Technology is a full service Audio, Video and
                Communications company. Locally Owned, we specialize in custom
                Home Cinemas, Media Rooms and other services. We sell top
                quality products at the best price available. No job is to small
                or to large. We can do it all for you. We guarantee customer
                satisfaction and our work. Revelation Technology can give you
                the custom Home Cinema experience in the comforts of your home.
                We can do it for less than you think!
              </p>
            </div>
            <div className="company__description--conatiner-left-lower">
              <h1 className="company__description--header-left-lower">
                Services
              </h1>
              <h2 className="list__heading">Seamless and Functional </h2>
              <ul className="list">
                <li className="list__items link__hover-effect-white">
                  Dedicated Home Cinemas
                </li>
                <li className="list__items link__hover-effect-white">
                  Living Room Sytems
                </li>
                <li className="list__items link__hover-effect-white">
                  Home Automation
                </li>
                <li className="list__items link__hover-effect-white">
                  Custom Pc Builds & Repair
                </li>
                <li className="list__items link__hover-effect-white">
                  Distributed Audio/Video
                </li>
                <li className="list__items link__hover-effect-white">
                  Integrated Telephone and Communication Systems
                </li>
                <li className="list__items link__hover-effect-white">
                  Home and Office Networking
                </li>
                <li className="list__items link__hover-effect-white">
                  Structured Cabling
                </li>
                <li className="list__items link__hover-effect-white">
                  Wireless products
                </li>
                <li className="list__items link__hover-effect-white">
                  Intercom Systems
                </li>
                <li className="list__items link__hover-effect-white">
                  Security Sytems
                </li>
              </ul>
              <h2 className="list__heading">Home Transformations </h2>
              <ul className="list-lower">
                <li className="list__items link__hover-effect-white">
                  Drywall Repair
                </li>
                <li className="list__items link__hover-effect-white">
                  Custom Painting
                </li>
                <li className="list__items link__hover-effect-white">
                  Molding and Trim installation
                </li>
              </ul>
            </div>
          </div>
          <div className="company__description-padding-right">
            <div className="company__description--conatiner-right">
              <h1 className="company__description--header-right">
                Book an estimate
              </h1>
              <p>
                We need to decide what to put here. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Magni quis dignissimos aperiam
                enim praesentium cumque repellendus provident dolor aliquid iste
                soluta molestias quam ipsam sequi maiores veritatis,
                itaque perferendis?
              </p>
              <button className="schedule__button" onClick={openSchedule}>
                Schedule
              </button>
            </div>
            <div className="company__description--conatiner-right-lower">
              <a href="#" className="close-btn--link" onClick={closeSchedule}>
                <h1 className="close-btn">X</h1>
              </a>
              <form action="">
                <h1 className="estimate__header">Lets Do it.</h1>
                <h2 className="input__header">Name</h2>
                <h4 className="input__sub-header">First and Last</h4>
                <input id="name" className="service__input" type="text" />
                <h2 className="input__header">Email</h2>
                <input className="service__input" type="email" />
                <h2 className="input__header">What needs to be done?</h2>
                <h4 className="input__sub-header">
                  describe your service needs or plans
                </h4>
                <textarea
                  name="service description"
                  className="service__description service__input"
                  cols="30"
                  rows="10"
                ></textarea>
              </form>
              <button className="schedule__button sendit__button">
                Send it over.
              </button>
            </div>
            <div className="company__description--conatiner-right-lower-contact">
              <a href="#" className="close-btn--link" onClick={closeContact}>
                <h1 className="close-btn">X</h1>
              </a>
              <form action="">
                <h1 className="estimate__header">Send a message</h1>
                <h2 className="input__header">Name</h2>
                <h4 className="input__sub-header">First and Last</h4>
                <input
                  id="contact__name"
                  className="service__input"
                  type="text"
                />
                <h2 className="input__header">Email</h2>
                <input className="service__input" type="email" />
              </form>
              <button className="schedule__button sendit__button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
