import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const JobForm = () => {

  const navigate = useNavigate();

  const cvRef = useRef(null);
  const coverLetterRef = useRef(null);
  const [cvFileName, setCvFileName] = useState("");
  const [coverLetterFileName, setCoverLetterFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    employer: "",
    fresher: false,
    city: "",
    source: "",
  });

  const handleBackClick = () => {
    // Go to the previous page
    window.history.back();
    // Or if you are using React Router, you can use navigate(-1);
    // navigate(-1);
  };

  const handleCvUploadClick = () => {
    cvRef.current.value = null; // Clear the input value
    cvRef.current.click();
  };

  const handleCoverLetterUploadClick = () => {
    coverLetterRef.current.value = null; // Clear the input value
    coverLetterRef.current.click();
  };

  const handleCvChange = (event) => {
    setCvFileName(event.target.files[0]?.name || "");
  };

  const handleCoverLetterChange = (event) => {
    setCoverLetterFileName(event.target.files[0]?.name || "");
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElement = event.target;
    const formDataObj = new FormData(formElement);

    try {
      const response = await fetch("http://localhost:7000/submit", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        // Handle success
        alert("Form submitted successfully!");
        window.location.href = "/career-inner";
      } else {
        // Handle server errors
        alert("Error submitting the form.");
      }
    } catch (error) {
      // Handle network errors
      alert("Network error: " + error.message);
    }
  };

  return (
    <>
      <section className="jobform">
        <div className="jobform-wrap">
          <div className="jobform-cnt">
            <div className="formH1 font-face-futur-md-bt">
              <span onClick={handleBackClick} style={{ cursor: 'pointer' }} >← </span> Another Three
            </div>
            <p className="formP font-face-futur-BK">
              To apply for the position, kindly fill the following form
            </p>
            <div className="Applyme">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  id="input"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail ID *"
                  id="input"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  id="input"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div className="fr">
                  <input
                    type="text"
                    name="employer"
                    placeholder="Current Employer *"
                    id="input"
                    value={formData.employer}
                    onChange={handleChange}
                  />
                  <p className="or font-face-futur-md-bt">OR</p>
                  <span className="fresher font-face-futur-md-bt">
                    <input
                      type="checkbox"
                      name="fresher"
                      checked={formData.fresher}
                      onChange={handleChange}
                    />{" "}
                    <span className="bkds">Fresher</span>
                  </span>
                </div>
                <input
                  type="text"
                  name="city"
                  placeholder="City of Residence *"
                  id="input"
                  value={formData.city}
                  onChange={handleChange}
                />
                <label className="lable font-face-futur-BK">
                  Upload CV*{" "}
                  <span className="subtext font-face-futur-L">
                    {" "}
                    (maximum 100kb){" "}
                  </span>
                  <div className="upload" onClick={handleCvUploadClick}>
                    <input
                      type="file"
                      name="cv"
                      id="cv-upload"
                      style={{ display: "none" }}
                      ref={cvRef}
                      onChange={handleCvChange}
                    />
                    <div id="uploadme">
                      <span> DropBox</span>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHgSURBVHgB7VS/S8NAFH65S0pr1OpQSE0T0lJwcnBxVUER/AG66OQf4x8i4qCCsyA6SFdFJwUHFQMiWLpErZo2vZ6v2GBqS5uk4lD84JLv3t297x7v3QPoNVAICF3XM7FYLF4sFq0g50iQzaqqLnDO7iSJXmvayFqQs74jqokQAgf1qQggLMpy/wVGduvnvK+I6iL7P8xRUSSHyWRy2Y+PjkIekT4cd56lm9oHxfY0rbMY8SFy8CXCLzgXVtw1SmEVbedIo+imo1hbIRTZrNMzSiMzolh5/V5lVrnMpjxiW6GFcHmXc75DqTRnmmZTOefz+Te8wCzSbUGAjXaeBAgAw1AMxuh9jVPK0qb5ZPo9G+gddYMeF9L1kVlFUSahS6iqMp1Kpea9NtElhmEMMeYcYx/7wOkgjkqzi6glCBULKxEsy27ZVDOZTNxxSidY9pBIJAYKhUIRGiOyh+okls1mW/bAWokTIo5HItFRC9FqT7X6PuxyWYb+poj8AsVMCIG/LwbGpLLLbdvWICQch7opgFJJfHF5Q2fQtNQpJnEC6Rv+CxAKBHPE40iuHh4ex1xrQ46qVb6OXfkIi8rAO8gQChyw75mESEtea8teh29gCkKCUvqcTqcvc7lcBf7xG/gEGmSQIkqU4K4AAAAASUVORK5CYII="
                        alt="upload icon"
                      />
                    </div>
                  </div>
                  {cvFileName && <p className="file-name">{cvFileName}</p>}
                </label>
                <label className="lable font-face-futur-BK">
                  Upload Cover Letter*{" "}
                  <span className="subtext font-face-futur-L">
                    {" "}
                    (maximum 100kb){" "}
                  </span>
                  <div className="upload" onClick={handleCoverLetterUploadClick}>
                    <input
                      type="file"
                      name="cover_letter"
                      id="cover-letter-upload"
                      style={{ display: "none" }}
                      ref={coverLetterRef}
                      onChange={handleCoverLetterChange}
                    />
                    <div id="uploadme">
                      <span> DropBox</span>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHgSURBVHgB7VS/S8NAFH65S0pr1OpQSE0T0lJwcnBxVUER/AG66OQf4x8i4qCCsyA6SFdFJwUHFQMiWLpErZo2vZ6v2GBqS5uk4lD84JLv3t297x7v3QPoNVAICF3XM7FYLF4sFq0g50iQzaqqLnDO7iSJXmvayFqQs74jqokQAgf1qQggLMpy/wVGduvnvK+I6iL7P8xRUSSHyWRy2Y+PjkIekT4cd56lm9oHxfY0rbMY8SFy8CXCLzgXVtw1SmEVbedIo+imo1hbIRTZrNMzSiMzolh5/V5lVrnMpjxiW6GFcHmXc75DqTRnmmZTOefz+Te8wCzSbUGAjXaeBAgAw1AMxuh9jVPK0qb5ZPo9G+gddYMeF9L1kVlFUSahS6iqMp1Kpea9NtElhmEMMeYcYx/7wOkgjkqzi6glCBULKxEsy27ZVDOZTNxxSidY9pBIJAYKhUIRGiOyh+okls1mW/bAWokTIo5HItFRC9FqT7X6PuxyWYb+poj8AsVMCIG/LwbGpLLLbdvWICQch7opgFJJfHF5Q2fQtNQpJnEC6Rv+CxAKBHPE40iuHh4ex1xrQ46qVb6OXfkIi8rAO8gQChyw75mESEtea8teh29gCkKCUvqcTqcvc7lcBf7xG/gEGmSQIkqU4K4AAAAASUVORK5CYII="
                        alt="upload icon"
                      />
                    </div>
                  </div>
                  {coverLetterFileName && <p className="file-name">{coverLetterFileName}</p>}
                </label>
                <label className="smsd">
                  <input
                    type="text"
                    name="source"
                    placeholder="  How did you hear about this opportunity? *"
                    id="input"
                    value={formData.source}
                    onChange={handleChange}
                  />
                </label>
                <input
                  type="submit"
                  id="mybtnform"
                  value="Submit Application"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobForm;
