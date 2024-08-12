import React, { useState } from "react";
import WN from "../components/WN";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInterestChange = (interest) => {
    setFormData({ ...formData, interest });
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sixdindia.com/backend/api/contact", {
      // const response = await fetch("http://localhost:7000/contact", {
        method: "POST",
        
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        setIsSubmitted(true);

      } else {
        // Handle error
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (isSubmitted) {
    return <WN />; // Render the WN component on successful submission
  }

  return (
    <>
      <div>
        <section className="con-wrap">
          <div className="hero-con" />
        </section>
        <div className="con-form">
          <div className="con-left">
            <div className="con-content">
              <div className="con-h1 font-face-futur-BK">
                <h1>Contact Information</h1>
              </div>
              <div className="icons-pack font-face-futur-LT">
                <div className="con-icons">
                  <p id="small">
                    <img src="/assets/phone-697e9705.svg" id="icons" />{" "}
                    +(91)-(120)-4542274
                  </p>
                </div>
                <div className="con-icons">
                  <p id="small">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgB7VQ9SEJRFP6ePX/K/lxaWmwIihqccuyH2hKsxYbCqKFJaQwkCCJwCsOppR9oqEUl11BXmxqkhhpcWlo0RfMPX/dc3rMU/Mch6IP3OOfec7/7nXPPvcBfg6AYCatxFFAbAWkUHUFIGgKvT1XECeukiRl+ZhrRHSISimuGQDwpyuyXgn7IqLM5AP0wOkEp9ohi2LcAiPvMPRLlcRPRS+zTLq2jXUiZNMrxF9lTmegv/kymkLs4YQHP0NqcUI2Nt0RaikXx5T1A+eOd+wLKI5xeCVDPLUOzakch5EfmcBPFkK8paf7Oy2K3uCjdjqtKTIVYYLXt33Wh3+HmfpapoAwozVqQOto8d+tF34wZg6f30FrsVTFi7SINq7E4a+aL8sFrFKMP0B/fVNQUglfIMaW0IamsJaxLzNNgJANON/ITUzzd9N4idBsOXk86fZqnzfomplEPIhpAa9mG2rxSSZtnxMaoLVl7NlramFhRP3QeZofq4zaVqRU0JVagabO/VegRek8sZVPoBtR+dFEkqD7JV2ocYf26QKffKejSyJcpQD/52eRvsYc58+gCEqQzQ+DNg3/8xjdBJpqh3+y5qgAAAABJRU5ErkJggg=="
                      id="icons"
                    />{" "}
                    info@sixdindia.com
                  </p>
                </div>
                <div className="con-icons">
                  <p className="font-face-futur-LT" id="small">
                    <img
                      src="data:image/png;base64,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"
                      id="icons"
                    />
                    Sixd engineering solutions pvt. Ltd. H-94, sector-63, noida
                    - 201301 india
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/assets/con-dec-55bcdf72.png"
              className="condec"
              alt="Contact Decoration"
            />
          </div>
          <div className="moblj">
            <div className="con-right">
              <form className="font-face-futur-BK" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <h4>Select your area of interest</h4>
                <div className="selectme font-face-futur-BK">
                  <div
                     className={`interest-option ${formData.interest === 'Business Collaboration' ? 'selected' : ''}`}
                    onClick={() =>
                      handleInterestChange("Business Collaboration")
                    }
                  >
                    Business Collaboration
                  </div>
                  <div
                     className={`interest-option ${formData.interest === 'Avail Our Services' ? 'selected' : ''}`}
                    onClick={() => handleInterestChange("Avail Our Services")}
                  >
                    Avail Our Services
                  </div>
                  <div
                    className={`interest-option ${formData.interest === 'Join us - Apply for a job' ? 'selected' : ''}`}
                    onClick={() =>
                      handleInterestChange("Join us - Apply for a job")
                    }
                  >
                    Join us - Apply for a job
                  </div>
                </div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  id="mobDDD"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button type="submit" className="batman"></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
