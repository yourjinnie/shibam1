import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`https://sixdindia.com/backend/api/jobs/${id}`)
      .then(response => response.json())
      .then(data => setJob(data))
      .catch(error => console.error('Error fetching job:', error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-details">
      <section className="jobsnew">
        <div className="job-wrapper">
          <div className="job-header-open">
            <div className="back-bar font-face-futur-BK">
              <b><span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAfCAYAAABtYXSPAAAAAXNSR0IArs4c6QAAAmdJREFUWEftlE2L2kAYx2fU+JJS1EqLQtWMaaTgpUcRRMSqUMSv4LVHP0FPPfkNevQriHjyprJQeumpUZOZRCIipQgLElkbp4zdbkvZrS/NsttiLjMhmef5Pf/n/wwE9+iB94gFnGBu6sZJmf9bGUVRnhSLxfcQwg3GOGHHVB7lGVVVY/l8/swwjIggCCrGWLoTmNlsJqTT6Q+6rj8SBAFrmvbMDhAW4yBlxuOxmM/nlel0CiRJIqPRyJb2/ChmbxjDMJK5XG6oqioQRfG81Wo9TqVSF3apsrcyhJDnhULhEyEERCIRMBgMEEJIsxNkLxjWmnK5rGCMQTAYBO12u4wQGi6Xy4UkSee/AlFKnYSQpxBC6HA4HGyllFK/378IBAKLXfA72yRJElUUBVBKAYRwu26r+L6nbrebrtdrtmexGATweDzANM2r3BzHgUaj8aZer79lfEddepRSDiF0oWkacDqdwLKsbRyWkEFdglEGdgnHlLjKxf7bbDbb92az+bpWq737kzo7lWETU61WVVmWAc/zoNPpvBJFcWya5objuI3P5/scDoeXLAml1DEcDh/wPP/Qsiz3arUCLpfrq9fr/RKNRn9KdQPRThh2jvmmWCxuR5oZuNfrifF4HO/ywKHf94JhQXVdTxQKBZX5JxaLgW63KyaTSVuB9oZhQKxlpVJJnc/nIBQKgX6/nxAEgRyqwFEGvu7QZDIRM5mMYhjGVqHJZHJQQX9l4OsOy7KMKpUKZpcgQuijoigv7FDn6KoIIUI2m+1yHKcRQl7eKYwdyX+PcbQyJ5jbUMC20b5NuJNn/ok2fQOLMfYgOFqypAAAAABJRU5ErkJggg==" className="arrowBack" alt="Arrow Back" />
              </span></b>
              <h1 style={{textTransform: "uppercase"}} >
                
                {job.tabTitle}
                </h1>
            </div>
            <div className="open-dis">
              <div className="open-dis-content">
                <span></span>
                <div className="main-cnt-open">
                  <h1 className="font-face-futur-md-bt">{job.title}</h1>
                  <p className="font-face-futur-BK">{job.description}</p>
                </div>
              </div>
              <div className="open-share">
                <button className="font-face-futur-BK  button-style " style={{color:"white", cursor:"pointer"}} >
                  <span className="shareme  "></span> Share this job opening
                </button>
              </div>
            </div>
          </div>
          <section className="jobs-details">
            <div className="job-exp">
              <div className="key font-face-futur-md-bt">Experience:</div>
              <div className="role font-face-futur-BK">
                <ol>
                  <li id="list" >
                {job.experience}
                  </li>
                </ol>
                </div>

            </div>
            <div className="job-exp">
              <div className="key font-face-futur-md-bt">Qualifications:</div>
              <div className="role font-face-futur-BK">
                <ol>
                  {job.qualifications.map((qualification, index) => (
                    <li key={index} id="list">{qualification}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="job-exp">
              <div className="key font-face-futur-md-bt">Key Responsibilities:</div>
              <div className="role font-face-futur-BK">
                <ol>
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} id="list">{responsibility}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="job-exp">
              <div className="key font-face-futur-md-bt">Soft Skills:</div>
              <div className="role font-face-futur-BK">
                <ol>
                  {job.softskills.map((skill, index) => (
                    <li key={index} id="list">{skill}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="job-exp">
              <div className="key font-face-futur-md-bt">Technical Requirements:</div>
              <div className="role font-face-futur-BK">
                <ol>
                  {job.tech.map((tech, index) => (
                    <li key={index} id="list">{tech}</li>
                  ))}
                </ol>
              </div>
            </div>
            <Link to={`/jobform/${job.title}`}>
              <button className="apply font-face-futur-md-bt">Apply Now</button>
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
