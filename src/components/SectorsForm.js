import React, { useState } from 'react';

const SectorsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try { // YTBD
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
       
        console.log('Form submitted successfully');
      } else {
        // Handle errors
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="mobHex sectors">
        <div className="contact-container">
          <div className="contact-with-us">
            <h2 className="font-face-futur-LT partner">
              Looking for a reliable<br />engineering partner?<br /> <br />Your search ends <b>here.</b>
            </h2>
            <span className="font-face-futur-BK connect2">
              Connect with us
            </span>
            <div className="social-media-icons">
              <div className="flexD">
                <div className="coi">
                  <img src="/assets/fb-dcc8a600.svg" alt="Facebook" />
                </div>
                <div className="coi">
                  <img src="/assets/in-007c4176.svg" alt="LinkedIn" />
                </div>
                <div className="coi">
                  <img src="/assets/x-b0a34644.svg" alt="Twitter" />
                </div>
                <div className="coi">
                  <img src="/assets/wa-9d93ae87.svg" alt="WhatsApp" />
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="NAME "
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-MAIL "
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="COMPANY NAME"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="MESSAGE"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="button">
             
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectorsForm;
