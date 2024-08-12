import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";

export default function About() {
  const [selectedYear, setSelectedYear] = useState('2006');

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const renderContent = () => {
    switch (selectedYear) {
      case '2006':
        return (
          <div className="content-box-d">
            <div className="box-of-content">
              <h1 className="ourh1 font-face-futur-BK">IN THE BEGINNING</h1>
              <p className="ourp font-face-futur-LT">
                On December 6, 2006, Mr. Pawan Panchpal started SIXD by
                supplying scanners around India from a 10 by 12 room. With
                Mr. Balwant Rana (the technical head) joining in 2007, the
                demonstrations and pitches improved, and SIXD's presence in
                the Indian market grew manifold. <br /> <br />
                Dealing with giants like Honda and ISRO, SIXD tasted success
                in the domain. But in a short while, OEMs started
                establishing in India, leading to decreased margins and
                opportunity size.
              </p>
            </div>
            <img
              src="/assets/frame1-cb52fe24.gif"
              alt="Year 2006 Image"
              style={{}}
            />
          </div>
        );
      case '2011':
        return (
          <div className="content-box-d">
            <div className="box-of-content">
              <h1 className="ourh1 font-face-futur-BK">Pivot and Penetration</h1>
              <p className="ourp font-face-futur-LT">
                This was when things seemed to go sideways, but a pivot in time
                changed the fate of SIXD. Back then, scanning and modelling
                services were mostly used by aerospace and defence, but by 2011,
                SIXD had started partnering with giants in the steel industry too.
              </p>
            </div>
            <img
              src="/assets/frame2-d537e5eb.gif"
              alt="Year 2011 Last Frame"
              className="last-frame"
            />
          </div>
        );
      case '2012':
        return (
          <div className="content-box-d">
            <div className="box-of-content">
              <h1 className="ourh1 font-face-futur-BK">TRANSFORMATION</h1>
              <p className="ourp font-face-futur-LT">
                Aligning with the vision of setting the benchmark for quality engineering solutions, Mr. Akash Rana (CEO) joined the team in 2012. With his efforts, SIXD grew both horizontally and vertically. He enabled SIXD's debut into the As-built engineering domain, and within a few years, it was time to build in-house design and modelling teams.
              </p>
            </div>
            <img
              src="/assets/frame3-5944de42.gif"
              alt="Year 2012 Last Frame"
              className="last-frame"
            />
          </div>
        );
      case '2015':
        return (
          <div className="content-box-d">
            <div className="box-of-content">
              <h1 className="ourh1 font-face-futur-BK">Diversification and Vertical Growth</h1>
              <p className="ourp font-face-futur-LT">
                Under Mr. Balwant Rana, SIXD saw some of the best people on the team. In 2015, Mr. Raju Sharma joined as Vice President of Business Development, taking the Re-engineering and Supply and As-built engineering to new heights with his constant R&amp;D in the space of tech applications.
              </p>
            </div>
            <img
              src="/assets/frame4-960fdf40.gif"
              alt="Year 2015 Last Frame"
              className="last-frame"
            />
          </div>
        );
      case '2021':
        return (
          <div className="content-box-d">
            <div className="box-of-content">
              <h1 className="ourh1 font-face-futur-BK">Adapt - Accelerate</h1>
              <p className="ourp font-face-futur-LT">
                He is now taking SIXD into the future with Industry 4.0 integration. Developing disruptive protocols like Digital Profile Mapping (DPM), SIXD has always pursued technological excellence and carried forward the legacy of tech adoption. SIXD is now venturing into the domain of augmented, mixed, and virtual reality and is associated with technology giants for the development of new-age growth engines to design the future of engineering.
              </p>
            </div>
            <img
              src="/assets/frame5-9d1587bf.gif"
              alt="Year 2021 Last Frame"
              className="last-frame"
            />
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log('Component mounted or updated');

    return () => {
      console.log('Component will unmount');
    };
  }, []);


  return (
    <>
    <MetaTags 
        title="About Us" 
        description="Learn more about us on this page." 
      />
      <section className="about-main" style={{ marginTop: '0px' }}>
        <div className="about-x">
          <section className="about-hero">
            <h3 className="font-face-futur-BK">ABOUT US</h3>
            <h1 className="font-face-bold">Empowering Industries Worldwide</h1>
            <img src="/assets/gmd-d82c9cc1.png" style={{}} />
          </section>
          <section className="divnew">
            <div className="col-50-x" id="aboutME">
              <h1 className="font-face-futur-HV">OUR VISION</h1>
              <span className="lineBB" />
              <p className="pw font-face-futur-BK">
                To set the benchmark for quality engineering solutions,
                globally.
              </p>
            </div>
            <div className="col-50-x" id="aboutME">
              <h1 className="font-face-futur-HV">OUR MISSION</h1>
              <span className="lineBB" />
              <p className="pw2 font-face-futur-BK">
                To constantly adapt to the latest technology trends and deliver
                the best-in-class solutions to our partners, enabling them to
                accelerate in an ever-evolving world.
              </p>
            </div>
          </section>
          <section className="team">
            <h1 className="font-face-futur-HV">Leadership</h1>
            <p className="font-face-futur-md-bt">
              {" "}
              Cumulatively pouring in 52 years{" "}
            </p>
            <div className="list2">
              <img src="/assets/lead-261e7329.png" className="xcf" style={{}} />
              <div className="man font-face-futur-md-bt">
                <div
                  style={{
                    background: "rgba(128, 128, 128, 0.08)",
                    width: "100%",
                  }}
                >
                  <div className="manimg" id="manimg1" />
                </div>
                <div className="names">
                  <h1 className="spanx2">
                    Balwant <span className="spanx">Rana </span>
                  </h1>
                  <p className="manP">Technical Head</p>
                </div>
              </div>
              <div className="man font-face-futur-md-bt">
                <div className="manimg" id="manimg2" />
                <div className="names">
                  <h1 className="spanx2">
                    Raju <span className="spanx">Sharma</span>
                  </h1>
                  <p className="manP">Vice President</p>
                </div>
              </div>
              <div className="man font-face-futur-md-bt">
                <div
                  style={{
                    background: "rgba(128, 128, 128, 0.08)",
                    width: "100%",
                  }}
                >
                  <div className="manimg" id="manimg3" />
                </div>
                <div className="names">
                  <h1 className="spanx2">
                    Pawan <span className="spanx">Panchpal</span>
                  </h1>
                  <p className="manP">Founder</p>
                </div>
              </div>
              <div className="man font-face-futur-md-bt">
                <div className="manimg" id="manimg4" />
                <div className="names">
                  <h1 className="spanx2">
                    Aakash <span className="spanx">Rana</span>
                  </h1>
                  <p className="manP">CEO</p>
                </div>
              </div>
              <div className="man font-face-futur-md-bt">
                .<div className="manimg" id="manimg5" />
                <div className="names">
                  <h1 className="spanx2">
                    Jitendra <span className="spanx">Kumar</span>
                  </h1>
                  <p className="manP">COO</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="outstorycnt">
          <div className="our-story-container">
            <h1 className="ourmainh1 font-face-futur-HV"> Our Story </h1>
            <div className="year-wrap">
              <div className="years-column font-face-futur-bk">
                <div
                  className={`year font-face-futur-HV ${selectedYear === '2006' ? 'active' : ''}`}
                  onClick={() => handleYearClick('2006')}
                >
                  2006
                </div>
                <div
                  className={`year font-face-futur-HV ${selectedYear === '2011' ? 'active' : ''}`}
                  onClick={() => handleYearClick('2011')}
                >
                  2011
                </div>
                <div
                  className={`year font-face-futur-HV ${selectedYear === '2012' ? 'active' : ''}`}
                  onClick={() => handleYearClick('2012')}
                >
                  2012
                </div>
                <div
                  className={`year font-face-futur-HV ${selectedYear === '2015' ? 'active' : ''}`}
                  onClick={() => handleYearClick('2015')}
                >
                  2015
                </div>
                <div
                  className={`year font-face-futur-HV ${selectedYear === '2021' ? 'active' : ''}`}
                  onClick={() => handleYearClick('2021')}
                >
                  2021
                </div>
              </div>
            </div>
            <div className="content-column">
              {renderContent()}
            </div>
          </div>
        </section>
        <section className="about-last">
          <div className="abt-img">
            <img src="/assets/123-67db2289.png" style={{}} />
          </div>
          <div className="abt-cnt">
            <h1 className="font-face-futur-HV">
              Designing the future of engineering
            </h1>
            <Link to="/industry4">
              <button className="doer2">
                <div className="btnC3">
                  <span id="nnn"> EXPLORE INDUSTRY 4.0 </span>
                  <span id="nnn">&gt;</span>
                </div>
              </button>
            </Link>
          </div>
          <img
            src="/assets/catch-8cdb9bf6.png"
            className="designme"
            style={{}}
          />
        </section>
      </section>
    </>
  );
}
