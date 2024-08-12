import React from "react";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <>
      <div className="center-cr">
        <section className="hero-cr">
          <div className="col-50">
            <div className="hero-cr-title">
              <h1 className="font-face-futur-md-bt">Walk The</h1>
              <h2 className="font-face-futur-HV">SIXD Way</h2>
              <p className="font-face-futur-BK">
                Your chance to do meaningful work.
              </p>
              <Link className="font-face-futur-md-bt" to="/career-inner">
                <button className="doer">
                  <div className="btnC">
                    <span id="nnn font-face-futur-BK"> BECOME A DOER </span>
                    <span id="nnn">
                      <img src="/assets/arrow-614b4fea.svg" />
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-50">
            <img src="/assets/sixd-a08ebc6e.png" className="big" />
          </div>
        </section>
        <section className="hero-cr-main">
          <div className="line-cr" />
          <h1 className="font-face-futur-md-bt">Leaders Create Leaders</h1>
          <p className="font-face-futur-LT">
            At SixD, we believe that true career progression is about breaking
            the status quo. Our output-driven team enables us to have an
            ingenious approach towards everything.
            <br />
            <br />
            We're not just offering a job – we're offering a platform for the
            leaders of tomorrow who shatter the boundaries of conventional
            thinking.
          </p>
        </section>
      </div>
      <section className="value">
        <div className="value-head">
          <h1 className="font-face-futur-HV">Our Value System</h1>
          <p className="font-face-futur-LT">
            We own our actions and work towards collective growth with utmost
            respect to our core values.
          </p>
        </div>
        <div className="cr-bg">
          <section className="cr-bg2">
            <div className="one" id="one">
              <span className="font-face-futur-HV gradient-border-text">1</span>
              <p className="font-face-futur-BK">
                Get it right, the very first time.
              </p>
            </div>
            <div className="one" id="two">
              <span className="font-face-futur-HV gradient-border-text">2</span>
              <p className="font-face-futur-BK">Give the best or nothing.</p>
            </div>
            <div className="one" id="three">
              <span className="font-face-futur-HV gradient-border-text">3</span>
              <p className="font-face-futur-BK">Own, Drive, Succeed, Repeat.</p>
            </div>
            <div className="one" id="four">
              <span className="font-face-futur-HV gradient-border-text">4</span>
              <p className="font-face-futur-BK">Display a leader’s mentality</p>
            </div>
            <div className="one" id="five">
              <span className="font-face-futur-HV gradient-border-text">5</span>
              <p className="font-face-futur-BK">Own, Drive, Succeed, Repeat.</p>
            </div>
          </section>
          <div className="mobileNew">
            <div className="colM">
              <div className="one" id="one">
                <span className="font-face-futur-HV gradient-border-text">
                  1
                </span>
                <p className="font-face-futur-BK">
                  Get it right, the very first time.
                </p>
              </div>
              <div className="one" id="two">
                <span className="font-face-futur-HV gradient-border-text">
                  2
                </span>
                <p className="font-face-futur-BK">Give the best or nothing.</p>
              </div>
            </div>
            <div className="colM">
              <div className="one" id="three">
                <span className="font-face-futur-HV gradient-border-text">
                  3
                </span>
                <p className="font-face-futur-BK">
                  Own, Drive, Succeed, Repeat.
                </p>
              </div>
              <div className="one" id="four">
                <span className="font-face-futur-HV gradient-border-text">
                  4
                </span>
                <p className="font-face-futur-BK">
                  Display a leader’s mentality
                </p>
              </div>
            </div>
            <div className="one" id="five">
              <span className="font-face-futur-HV gradient-border-text">5</span>
              <p className="font-face-futur-BK">Own, Drive, Succeed, Repeat.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="put">
        <div className="put-main">
          <div className="put-header">
            <h1 className="font-face-bold">
              Putting <span> People First</span>
            </h1>
            <p className="font-face-futur-BK">Elevating your journey with us</p>
          </div>
          <div className="put-footer">
            <div className="put-card">
              <div className="icon-put">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABVCAYAAADJ/vPXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAf8SURBVHgB7Z2/cxNXEMdXJw+WZ5iJPPyYFMwgCsDQxPkLcMpUsbukwi6pgDIVcpdUQJcO04UK6JIK0dEhGmEPnslz5xl7jNLYmvGv7F7ek0/y3bu3e79k6z4zoLP07vTue3v7dvfe6SoQwszMzBy+3K9UKvTawNfu0dFRG5dfrq6urkDONBqNeq1We4j9WKQ/9dtt7NMKvvcW+6QgZ1CjRXy573ne7PHxcR2XFb628HU5rD+V4Tfu3r37BFdoQjRt/Hwhr53DHaKdeaZ3Jgx1cHCw8OXLlzbkAPangS8vtBGGQvqhPsvB96rBPxxEJr6lL7l48eKrbrfbgwy5devWPIr8Jy7WLM3q2Obn6enpv3d2djYhY65cufIR93/W1ob0uXz5Mmxvb78373lmAUWedRDZMIun8iPImGq1+tSxaZ3RVgwZIpy4LisodlO7YJ++0OjvWMLhhh5Chmgf2HBtT1YU3LEsQENc5LTHPvU17QuNp99PwKN+8+bNWcgI7OQ88JmDjNAHsQE87pmFvtCWwSYSPF0zExr5Bvhch4zAA8/WB+mv4wU21AU+CrLjX2CC+8BeJy+CFs0Oj3q9XmYhFYrG3rZkH1yZnJxsARPsz+moA998CQxQiBWllOQscOLChQvPgIfCA/8GMqLdbtO+toDHilnoC00Zn6sV6UxxGTKEdgy/5zljledZHngCjXGJ4WJVMIv2gp+geAsQ43fpizATW8ojM+x0Oo9cxEYBlj9//sw9A9jQPjuKTe1+CL4xkBliJtO9du3aSxR8Cjc2A6czsve4gR/X1tY+QE5sbW39hVnWhs7Ghkf+9uHh4QPszx+QE6jR6qVLl15hf6bxz4Goiw4A/vt9b29vaX19fSBLrURtUBdyaEN+UQlXbmV9asahs9eGDkVbRRSTgui6h/lHY0S7aI3Gnr5FU+aDljKP1vsd/Y3Ln3D5DVpNCzKGzp6pqalF/E767gakAG6LTuO3kJPlG/1w8TolN1q/Z+a7faFtVTv0129whcdZddahDJoUGpiWs6qjx5VNTcm0QsUbbPQiZnv+KJq22I5l2VRAg3mMg2aqkQmJjNq9g5izkLSr3LlzhxrOQTwKB8Tv03L2upP/QI5oY2lBCmh39xEcXB1deaE4eg7caOCG4yzfGW0JefMEUkJr0XBpS6GpBzzm0RITd5Zba06LtGrW+gIAp4xb5wrtXzm4fft2oqsruI3ULEtAou9GV/tIMq6whfZX8ryn0qJ/UdZsSGLVlDDhi+iSmUhoYmJi4rUObVjEWPMGpERMPYJt1bSvaMmvQYhYaPg/NX9Ho6/rCjZrptqtnheRChjOfYKIsibXqmkfXcI4G0mE9vvAiURirLkJKUOJiuVjZ6vmRBhRJBWacIpE4qw5i1Rfb7MV9pmrVQsijFDSENopEsnbmg1JrFoaYYSRitD+hiyRSBHWbJBadZIII4zUhCaiIpGirNnAteqkEUYYqQoNIZFIkdZs4Fh1GhFGGGkLTQxEIkVbs8HVqtOIMMKYADkKojtkIpENKNiaDfRdOLi1IKSIZqwax5l7ungfCiVB0rq52KIxIXhum55AkQgNkJZNNCFnbFaNfX0dE2GomLPCilho7JiKm54QdfTztmaDzVfHWKqZPqBAiFhouiZHV1zQchcE8/aaUBASq6R91HM6xBc9xEIfHh76X9rpdNqczhdlzQabVUfwmPZRLysQIha6Wq32jy7NEsKj7ip2EwrG1TDSnAElFnr4Qi0e9Sa+WCcZFm3NBher1lMtmkPrKRAiFTrUV01OTi6B/fRqwogQY9Vqd3d3KeyDimweebpC0wzQqNF5VKzZYLFqP8KIutqPn4kmu4uExi+LvBJiIhEYFJsGk0UYMWhmKAz2U5kIw7KaaIpEkswwEj1K39DZVjcwao8UWtB+P9FdKId5KyKLlgrtdFRHyVXY4PRTz+kDLlIfndpF1LNG3oPhOKNAgFRoBWOKNA0noSVuQMGYIr0f88y5DqyxLKBV3YCCODg4UCDgzLkODMPaRd67EqzxMOiS0OwAvOibdIqkVquxhaZssow6mOgbTdlie7Z0OgIFYw633kEHhm3RggNz7kDhvnLao2ZfS9chQGJsJLQCHrne4DOKCJKWDYlFl65DMhhyV0pyJfgcoTiNSTOPK5y0enWekGgmcR0KxpxcXEeJqN6hPIHPVTDmSOodnplx5Mo41zkMEg085tEp3YyG6XLZ9WgFJT7ceofHKftJJ4+cU5wzZHI1nv7hPCfKCOUEbr3Ddx2cH82DEhG+0K4uoUy/B1CcdqzBsBR6AMVpbFyHUyGb7luBEhbGlxvX4WSppUUPoDiNjetw8tHcLPKcoziNWRa9v7+voMSHkX/48TZrMCx/4PQETv5BcOJoBSXDxCYt5rkDzq6jnGZwGpdozWhbTjdIAMf4jNDKoe3YTzMYxjGIUPQfx6JL13Ea5drQ2aLzSFZcMs9er2f6YT3weVQaOUGELzTGhO24leiWXciYo6OjFtj70H/2Cy3b2qJhZN5fvEjbimmizEOBfKH1Ha+Rt+zqXxRXkDF0G5rl5n0VfPaLfiCOCmuo7+NegYyhh1XG/NhA/9kw/ceDbG9vfxh+DIe28l+x079BTmxtbbWuXr1KN/I14ORxIO+Hnwq6ubnZw/6+DT6mwzyeo9PpPICcCOsv9QPLFb+sra2tmHahdyaan1QbhcdvkE+Oy0j1o0zqLm2zxKbbf4gGars8PZm5AAAAAElFTkSuQmCC"
                  alt="Icon 1"
                />
              </div>
              <h1 className="font-face-futur-md-bt">
                A collaborative <span>community</span>
              </h1>
              <p className="font-face-futur-BK">
                Your unique perspective is a vital piece of the big picture.We
                foster a collaborative environment where your voice is heard and
                valued. Your insights drive innovation and spark fresh ideas,
                making us collectively stronger.
              </p>
            </div>
            <div className="put-card">
              <div className="icon-put">
                <img
                  src="data:image/png;base64,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"
                  alt="Icon 2"
                />
              </div>
              <h1 className="font-face-futur-md-bt">
                Meaningful Work, Meaningful <span>Impact</span>
              </h1>
              <p className="font-face-futur-BK">
                Your contributions matter. We believe in crafting roles that
                align with your strengths and passions. Your efforts create a
                lasting impact on the company's success and the world around us.
              </p>
            </div>
          </div>
          <div className="put-footer">
            <div className="put-card">
              <div className="icon-put">
                <img
                  src="data:image/png;base64,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"
                  alt="Icon 3"
                />
              </div>
              <h1 className="font-face-futur-md-bt">
                Open Channels of <span>Communication</span>{" "}
              </h1>
              <p className="font-face-futur-BK">
                When you thrive, we thrive. At SixD your personal and
                professional development takes centre stage.
              </p>
            </div>
            <div className="put-card">
              <div className="icon-put">
                <img
                  src="data:image/png;base64,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"
                  alt="Icon 4"
                />
              </div>
              <h1 className="font-face-futur-md-bt">
                Your growth is our <span>priority</span>
              </h1>
              <p className="font-face-futur-BK">
                When you thrive, we thrive. At SixD your personal and
                professional development takes centre stage.
              </p>
            </div>
          </div>
          <div className="put-header">
            <h1 className="font-face-futur-HV" id="weight">
              <span> Life at SIXD </span>
            </h1>
            <p className="font-face-futur-LT">
              As an integral part of SIXD, our people work to support the global
              goal of impacting billions of lives with our partners. We ensure a
              healthy work environment with each step we take.
            </p>
            <div className="prog font-face-futur-md-bt">
              <div className="workplace">
                <img src="/assets/789-5f3bda69.png" className="margin_nt" />
              </div>
              <div className="workplace-2">
                <img src="/assets/456-241d438c.png" className="margin_mt" />
              </div>
              <div className="center-prog">
                <Link className="font-face-futur-md-bt" to="/career-inner">
                  <button className="doer22">
                    <div className="btnC2">
                      <span id="nnn font-face-futur-BK">
                        {" "}
                        EXPLORE JOB ROLES{" "}
                      </span>
                      <span id="nnn">
                        <img src="/assets/arrow-614b4fea.svg" />
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            <div className="progMob">
              <img src="/assets/h1-35f945ab.png" id="crt" />
              <div className="maxBoxFun">
                <div className="ffff" id="blue">
                  <h2 className="font-face-futur-LT">#NOSUGAR CHALLENGE</h2>
                  <p className="font-face-futur-LT" id="pdf">
                    We did a #NoSugarChallenge, encouraging a month of
                    sugar-free living. Winners were rewarded with Fitbits, with
                    everyone feeling healthier and better each day.
                  </p>
                </div>
                <div className="ffff" id="red">
                  <h2 className="font-face-futur-LT">#UPYOURSTEPS</h2>
                  <p className="font-face-futur-LT" id="pdf">
                    The exciting #UpYourSteps challenge motivated everyone to
                    achieve the highest number of steps within a month. Winners
                    were rewarded with Fitbits, and a culture of wellness and
                    active living was the cherry on top.
                  </p>
                </div>
              </div>
              <img src="/assets/h2-41f72041.png" id="crt" />
              <img src="/assets/h3-8bb4e955.png" id="crt" />
              <div className="center-prog">
                <Link className="font-face-futur-md-bt" to="/career-inner">
                  <button className="doer2">
                    <div className="btnC2">
                      <span id="nnn font-face-futur-BK">
                        {" "}
                        EXPLORE JOB ROLES{" "}
                      </span>
                      <span id="nnn">
                        <img src="/assets/arrow-614b4fea.svg" />
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
