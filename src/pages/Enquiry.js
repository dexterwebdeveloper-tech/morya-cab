import React, { useState } from 'react';

const Enquiry = () => {
  const [result, setResult] = useState(""); // State for showing submission result
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8e99ea1b-01e2-4ba7-b211-2a2f52ddfd59");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSubmitted(true); // Set isSubmitted to true when the form is submitted
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: 'url(/img/bg/breadcumb-bg.jpg)' }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Enquiry</h1>
            <ul className="breadcumb-menu">
              <li><a href="/">Home</a></li>
              <li>Enquiry</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-6 offset-md-3 testi-card">
        <div>
          {isSubmitted ? (
            <div className="form-success-message">
              <h3>{result}</h3>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-form-label">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="contact-form-input"
                    placeholder="Your Full Name"
                    required
                    pattern="[A-Za-z\s]+"
                    title="Name must contain only letters"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="contact-form-input"
                    placeholder="Your Email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="phone" className="contact-form-label">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="contact-form-input"
                    placeholder="Your Phone"
                    required
                    pattern="[0-9]{10}"
                    title="Phone number must be of 10 digits"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="days" className="contact-form-label">
                    Number of Days
                  </label>
                  <input
                    type="number"
                    name="days"
                    id="days"
                    className="contact-form-input"
                    placeholder="Number of Days"
                    required
                    min="1"
                    max="100"
                    step="1"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="pick_up_point" className="contact-form-label">
                    Pick Up Point
                  </label>
                  <input
                    type="text"
                    name="pick_up_point"
                    id="pick_up_point"
                    className="contact-form-input"
                    placeholder="Pick Up Point"
                    required
                    pattern="[A-Za-z\s]+"
                    title="Pick Up Point must contain only letters"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="drop_location" className="contact-form-label">
                    Drop Location
                  </label>
                  <input
                    type="text"
                    name="drop_location"
                    id="drop_location"
                    className="contact-form-input"
                    placeholder="Drop Location"
                    required
                    pattern="[A-Za-z\s]+"
                    title="Drop Location must contain only letters"
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="bus" className="contact-form-label">
                  Select Buses
                </label>
                <select
                  name="bus"
                  id="bus"
                  className="contact-form-select"
                  required
                >
                  <option value="" className="textt" disabled>
                    Select Cabs
                  </option>
                  <option value="Swift Dzire (4 + 1 Seater)">
                    Swift Dzire (4 + 1 Seater)
                  </option>
                  <option value="Kia Carens(6 + 1 Seater)">
                    Kia Carens(6 + 1 Seater)
                  </option>
                  <option value="Ertiga (6 + 1 Seater)">
                    Ertiga (6 + 1 Seater)
                  </option>
                  <option value="Innova (6 + 1 Seater)">
                    Innova (6 + 1 Seater)
                  </option>
                  <option value="Innova Crysta(6 + 1 Seater)">
                    Innova Crysta(6 + 1 Seater)
                  </option>
                  <option value="Tempo Traveller">Tempo Traveller</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label htmlFor="date" className="contact-form-label">
                  Date of Journey
                </label>
                <input type="date" name="date" id="date" className="contact-form-input" />
              </div>

              <div className="contact-form-group">
                <textarea
                  name="message"
                  id="message"
                  className="contact-form-textarea"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="">
                <button type="submit" className="th-btn">
                  Submit Now
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Enquiry;
