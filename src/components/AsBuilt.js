import React, { useState } from "react";
import { Link } from "react-router-dom";

const AsBuilt = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <>
        <section>
          <h1 className="ser-tab-heading-1 font-face-futur-HV">
            As-Built Engineering
          </h1>
          <br /> <br />
          <h3 className="ser-tab-subheading">
            {" "}
            Comprehensive 3D digitalization for scale and growth in brownfield
            facilities{" "}
          </h3>{" "}
          <br />
          <p className=" font-face-futur-LT para-ser ">
            {" "}
            We generate digital specification documentations providing essential
            support for the modifications, upgrades, maintenance, and compliance
            of existing facilities. It plays a crucial role in project
            management and engineering documentation teams, ensuring efficient
            and effective project execution.{" "}
          </p>{" "}
          <br /> <br />
          <Link to="/sectors/green%20energy">
            <img
              src="/assets/tab3-76ef1100.png"
              alt="As-Built"
              className="ser-img"
            />
          </Link>
        </section>
        <section className="tab-cards-section">
          <span className="kjj" style={{ marginTop: "-14px" }} />
          <h1 className="ser-tab-heading-1 font-face-futur-HV">
            Applications
          </h1>{" "}
          <br /> <br />
          <div className="card-container-ser">
            <div className="card-inner-ser">
              <div className="card-content-inner-ser">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                  alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                  className="card-icon-inner-ser"
                />{" "}
                <br />
                <p className="card-paragraph-inner-ser font-face-futur-LT">
                  Creation of digital specification documentation, including
                  Isometrics, P&amp;IDs, MTOs, BOQ/BOM, General Arrangement
                  drawings, and Structural drawings.
                </p>
              </div>
            </div>
            <div className="card-inner-ser">
              <div className="card-content-inner-ser">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQzSURBVHgB7VnNTttAEN4kiL9TIhBKJSS2ByTgUvfWW5MnKBx7IjxB6am9kT4B8ARNbu0JeAKSW2+EC0QCKc4tEj81J8J/vwlrZDlre7axEZX6SZbt3dndz7OzszPrlIgZc3Nz5VQqteYpcg4PD3MiZqRFzABpy1eUxcdIETOSID6jKbNEzDAiLqWM1N7Dw0Mfyfv7+9A26LMgDMEmTqTHxsZ2ob0WBlrTyczOzmo1izZvdOWkhPn5+T3U7+J5WRggxRFySePxiRg0W8Ntpdls2lQ/Ojr6Ce8FkChounAgv417FfLUToDwKi1ilGc9fZZQXxVxEccgW7gtaqpsmMFOJpNZ9hKIgI2rEdCfuL29fXt0dNSI6oRFnGyQplMkjzpcZ4EjmOEInZ6e2lNTU+SL34nkYGPWljCWwxFmL87h4eGyeJzmRADS32i9cOVZpuJiYWHBwgB7ImbADCsHBwcrJm2GTISxEC0MEiVWx8dVhJodyNMi/IBLhvQrhSGMNA7v0gohQDa64ro7PzBbZdSvBbQlUykGtdWBbeNqc5EB1XbUwDAFCr42g+rVzLARqHG1qZBpWDSV6XT6vfBsQF4oTVdEBCzLyl5fX7cCfL6DcWoYbx/3BmTsMH+uJa4JTUNxeXmZs22b5caiTMYP+HUtx4GjQ5Coc0kr+chdkYPYw9oogDj7I8MwMHFd/B0BKWKA1o9jIW6rBUSLcSZiMEmxDNeVRXkP1NOMtGmB4tlscfYxg4cZHx9fDVpUFOKCeDGqH4q/KZ4PqCZPssTd9lmmQosPscqG0kYfKAYPSi5cKNKBESZIb5rEKqzokNDpdLqTk5OvRECESORRL3O5XPv8/LzjltNs5fP5LzC/Cl7zIUN85kaGvfGEASKm2gvaSW3IZnHJqCTjb4IsI68CrXHzQqlSOIuTGUFm0fQIg02cPAcGKItkQB/33aQBy8aViWypARIBmdTExMTF2dnZL448V+NlEdPGEQaY4nrQEUefrOChFlC+CfN5jXs1yFX6QElGUbWxNfWNm5sbm9EP36vAXEog59phX9Kgzl5KeFzXNNduLr5IsYEos8gN2Nh+HD62AT/dBvk2Bvh4fHzc9NY7jtOdnp5u3t3dfdU0/wnSP/yFJycnNfRZR5859LlkEmUa+XEOoMXffhfITTRMMOT1n91u1zH5ah1UvF3wFdtiAKhs7EkZZHJpslvaDelC5bYYHPv+AihkoORBpZAt96I9xeh4ggN1uOl43geeRR1iJ648TU0kjGdP3eLCf+LPjX+a+IX7Qv9qyGeKlwfpfcHu7JBXqYnH01QCxRt78JOs/zDPAdqFKYHB3S3qHc0NjYyMVK6urujHk1QV0uT4LWnQsbaHND33lNqLVdSBPSUKUrxsVHGWWKKHXnSIKK2DKG2HorTU48l9XrwctHHtq0Btwy38A13R+BhD6kDDAAAAAElFTkSuQmCC"
                  alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQzSURBVHgB7VnNTttAEN4kiL9TIhBKJSS2ByTgUvfWW5MnKBx7IjxB6am9kT4B8ARNbu0JeAKSW2+EC0QCKc4tEj81J8J/vwlrZDlre7axEZX6SZbt3dndz7OzszPrlIgZc3Nz5VQqteYpcg4PD3MiZqRFzABpy1eUxcdIETOSID6jKbNEzDAiLqWM1N7Dw0Mfyfv7+9A26LMgDMEmTqTHxsZ2ob0WBlrTyczOzmo1izZvdOWkhPn5+T3U7+J5WRggxRFySePxiRg0W8Ntpdls2lQ/Ojr6Ce8FkChounAgv417FfLUToDwKi1ilGc9fZZQXxVxEccgW7gtaqpsmMFOJpNZ9hKIgI2rEdCfuL29fXt0dNSI6oRFnGyQplMkjzpcZ4EjmOEInZ6e2lNTU+SL34nkYGPWljCWwxFmL87h4eGyeJzmRADS32i9cOVZpuJiYWHBwgB7ImbADCsHBwcrJm2GTISxEC0MEiVWx8dVhJodyNMi/IBLhvQrhSGMNA7v0gohQDa64ro7PzBbZdSvBbQlUykGtdWBbeNqc5EB1XbUwDAFCr42g+rVzLARqHG1qZBpWDSV6XT6vfBsQF4oTVdEBCzLyl5fX7cCfL6DcWoYbx/3BmTsMH+uJa4JTUNxeXmZs22b5caiTMYP+HUtx4GjQ5Coc0kr+chdkYPYw9oogDj7I8MwMHFd/B0BKWKA1o9jIW6rBUSLcSZiMEmxDNeVRXkP1NOMtGmB4tlscfYxg4cZHx9fDVpUFOKCeDGqH4q/KZ4PqCZPssTd9lmmQosPscqG0kYfKAYPSi5cKNKBESZIb5rEKqzokNDpdLqTk5OvRECESORRL3O5XPv8/LzjltNs5fP5LzC/Cl7zIUN85kaGvfGEASKm2gvaSW3IZnHJqCTjb4IsI68CrXHzQqlSOIuTGUFm0fQIg02cPAcGKItkQB/33aQBy8aViWypARIBmdTExMTF2dnZL448V+NlEdPGEQaY4nrQEUefrOChFlC+CfN5jXs1yFX6QElGUbWxNfWNm5sbm9EP36vAXEog59phX9Kgzl5KeFzXNNduLr5IsYEos8gN2Nh+HD62AT/dBvk2Bvh4fHzc9NY7jtOdnp5u3t3dfdU0/wnSP/yFJycnNfRZR5859LlkEmUa+XEOoMXffhfITTRMMOT1n91u1zH5ah1UvF3wFdtiAKhs7EkZZHJpslvaDelC5bYYHPv+AihkoORBpZAt96I9xeh4ggN1uOl43geeRR1iJ648TU0kjGdP3eLCf+LPjX+a+IX7Qv9qyGeKlwfpfcHu7JBXqYnH01QCxRt78JOs/zDPAdqFKYHB3S3qHc0NjYyMVK6urujHk1QV0uT4LWnQsbaHND33lNqLVdSBPSUKUrxsVHGWWKKHXnSIKK2DKG2HorTU48l9XrwctHHtq0Btwy38A13R+BhD6kDDAAAAAElFTkSuQmCC"
                  className="card-icon-inner-ser"
                />{" "}
                <br />
                <p className="card-paragraph-inner-ser font-face-futur-LT">
                  Support for expansion, revamping and retrofitting of existing
                  facilities.
                </p>
              </div>
            </div>
            <div className="card-inner-ser">
              <div className="card-content-inner-ser">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO1SURBVHgB7Vm7TtxAFL1rg9gCKctTREKKU4CgM126mC5dyBcAX5At07F8AUmXjuULEspU7Fahi2lggQJTIkByKlaIR84NA8yOx+sxE22UyEeyPI87d67ncV8mKlDACKUsAs/zKv39/Z7rupUUkqjVakWUE1NTU34az+vr6/jw8DDsNj5VcBa4XC6/dxynent7W+nGBP3zEL5Bhpidnf2C10IGWQS+q+Bb13W6usaZmRkPq/y9VCox8zIZ4OzsbNOEjnmD72cD0grPPzo6yrybaqeTMqiGxyNzNE0JxbGKTOkhfA0fG6jtfWqDWJFFZXD95ubmWMcY7eHBwcFXygE+WngtUbqwPL8nNa3gaXTQqINw/qp4rUmT8DmrUQ/h+37l8vLySLpb8d7e3pBMkzgqmovYoB4jDMMYcshaJaEcHPpHUQjeaxSC9xoJPQ4dGst19hvIEPduAooBXAVfaCg23Q28N/K4BcBPqRypnQmTPzk52YKwz1Fkvbm6v79vZFymp6cXBgYGtlB8g4/36NFVYNPt41mC+fYGBwebcRy3s/iBdhtj5lAs4cOXYfYjuT/TOzQBrO0iW1dD8vDi4mI+iiLjndTBJUuwi4BjwbuiOmPsIuzggypK3wQcuDJW8BtZ4E9czppibflMz8NEe3iC3d3dIQi/qoyp8n0gC1iv+Pj4+DpJKwqh53AJO4KA09PTBuj4zrx6mNh1T87Pz7fpibBacY5ilNXeTIuG4EV+7JjYcQKygJXgauilOEYdUD8oK6rKgpXgGh3/Io2Wd0euq/YiL6wE54BWFoBDLdYyOlrsTlWu4+g0yALWWgVbviFV2dhsycKz9kBwsqaJqnJFTSqsDZDQ4z80Z/b3eWcrqun7BFVZJQtYq0MYknhkZOREZARkTIhHNUxsOZdNzH43aAXnvMfY2NgH+AsTutSACtCEoN+hOz2dqi34eEDodybmnncS87Mc1eHhYdb5rQ5emgFLmGD9vn51dTWXlVWSJ8MrYIcK79ei+Vh4h/WcSSO+A29FNREs92nGeHKlS+otAaGr6+KxxTOpXATLfx2F4L3G/yO4xvkJqMcQatWTmhJ6P6EO2TWF8A91lFfAiL0+bbaW7v5I1CmnYGxp01xbNVur82u0vgqUP0frARmCo/A8woP/EeXIv4P/S9Wfd9IEoRzJd3q0kpnQHIOuEGnuSG3XCs6EIvm+QRkQdyKTTuZNZqnrpvi3VNN1Gv11Q3bKT+tvt9vhU3Ikut8jEp70J69AAQ1+AZpZiSLzwxpwAAAAAElFTkSuQmCC"
                  alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO1SURBVHgB7Vm7TtxAFL1rg9gCKctTREKKU4CgM126mC5dyBcAX5At07F8AUmXjuULEspU7Fahi2lggQJTIkByKlaIR84NA8yOx+sxE22UyEeyPI87d67ncV8mKlDACKUsAs/zKv39/Z7rupUUkqjVakWUE1NTU34az+vr6/jw8DDsNj5VcBa4XC6/dxynent7W+nGBP3zEL5Bhpidnf2C10IGWQS+q+Bb13W6usaZmRkPq/y9VCox8zIZ4OzsbNOEjnmD72cD0grPPzo6yrybaqeTMqiGxyNzNE0JxbGKTOkhfA0fG6jtfWqDWJFFZXD95ubmWMcY7eHBwcFXygE+WngtUbqwPL8nNa3gaXTQqINw/qp4rUmT8DmrUQ/h+37l8vLySLpb8d7e3pBMkzgqmovYoB4jDMMYcshaJaEcHPpHUQjeaxSC9xoJPQ4dGst19hvIEPduAooBXAVfaCg23Q28N/K4BcBPqRypnQmTPzk52YKwz1Fkvbm6v79vZFymp6cXBgYGtlB8g4/36NFVYNPt41mC+fYGBwebcRy3s/iBdhtj5lAs4cOXYfYjuT/TOzQBrO0iW1dD8vDi4mI+iiLjndTBJUuwi4BjwbuiOmPsIuzggypK3wQcuDJW8BtZ4E9czppibflMz8NEe3iC3d3dIQi/qoyp8n0gC1iv+Pj4+DpJKwqh53AJO4KA09PTBuj4zrx6mNh1T87Pz7fpibBacY5ilNXeTIuG4EV+7JjYcQKygJXgauilOEYdUD8oK6rKgpXgGh3/Io2Wd0euq/YiL6wE54BWFoBDLdYyOlrsTlWu4+g0yALWWgVbviFV2dhsycKz9kBwsqaJqnJFTSqsDZDQ4z80Z/b3eWcrqun7BFVZJQtYq0MYknhkZOREZARkTIhHNUxsOZdNzH43aAXnvMfY2NgH+AsTutSACtCEoN+hOz2dqi34eEDodybmnncS87Mc1eHhYdb5rQ5emgFLmGD9vn51dTWXlVWSJ8MrYIcK79ei+Vh4h/WcSSO+A29FNREs92nGeHKlS+otAaGr6+KxxTOpXATLfx2F4L3G/yO4xvkJqMcQatWTmhJ6P6EO2TWF8A91lFfAiL0+bbaW7v5I1CmnYGxp01xbNVur82u0vgqUP0frARmCo/A8woP/EeXIv4P/S9Wfd9IEoRzJd3q0kpnQHIOuEGnuSG3XCs6EIvm+QRkQdyKTTuZNZqnrpvi3VNN1Gv11Q3bKT+tvt9vhU3Ikut8jEp70J69AAQ1+AZpZiSLzwxpwAAAAAElFTkSuQmCC"
                  className="card-icon-inner-ser"
                />{" "}
                <br />
                <p className="card-paragraph-inner-ser font-face-futur-LT">
                  Capturing and documenting the final status of facilities.
                </p>
              </div>
            </div>
            <div className="card-inner-ser">
              <div className="card-content-inner-ser">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJhSURBVHgB7ZhfbtpAEMbHiyV4pDdwHxB/XuqeoLlB2xuQE/QIISdIbtD0BE1PUPcE8RMg8dDtDXgDJBD9htjRBuFgz9prIvKTkBfweD6tZ2d2xyMhnU4nbDQabaqB6XQaeSRgMBh83263Q6qJ9Xr90aeCGKJ/4BqRIzzPu8Il4DG/6ULCTdGTyWRIjkj8BhhqSsSrgsZDepzpu36//xAEQeUxvuf3Ov09l/ADMx3gE7ZarZAq5KU3fFR4zeExzPKrbIyrIo9fZWNcBXn9KhvjsiniV9kYl0lRv8rGuCwkfn2JMdLg/XK53O0ZyBLpZPkS4ziO57jckSU2b9hHBbwxNkyf8P0vOSIp46Kw5BlPq98fcgg2TR8gfC5dS2mMazzgghyCN/ubkg2ThNybLJNerxd0u91bF5usLETCwYVS6lvVm6yXkAqvnTfhrjkv4cjBXDlps9nMqSZEwpHz7xeLxbvZbBZTTYhDRWtd22wz5xXjb5XTglcbKoV7hyZIiyHCZjfGiSg2F2xWN3f/vmP3J2ictjTZCofgz8nwBuPdAGHD7bERj8MwbK9Wq4dDtuZ9KdjifsHlJ2Wj8Xlv+CVpt5Yd7Xdrn8Z8tIOYr/j/0AxG+z80m80Ib+KSstGmXz7rVtat5SJFOTl2hj3kN/fiNM6mJ9G6KJJV/iHGrk+l35I7VGB4Sw6x6tYi1V1xmiLH5FlL/jFj5FbOd852gaV1a5F6RuSI8+vWcgV7DaKZZ8K5guEBl6cumnm2OMvqwhYgEHdr0we47NIyKGZtiOahuFv7i59DjoForsTReDwekYD/Urfw8FfC7hcAAAAASUVORK5CYII="
                  alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJhSURBVHgB7ZhfbtpAEMbHiyV4pDdwHxB/XuqeoLlB2xuQE/QIISdIbtD0BE1PUPcE8RMg8dDtDXgDJBD9htjRBuFgz9prIvKTkBfweD6tZ2d2xyMhnU4nbDQabaqB6XQaeSRgMBh83263Q6qJ9Xr90aeCGKJ/4BqRIzzPu8Il4DG/6ULCTdGTyWRIjkj8BhhqSsSrgsZDepzpu36//xAEQeUxvuf3Ov09l/ADMx3gE7ZarZAq5KU3fFR4zeExzPKrbIyrIo9fZWNcBXn9KhvjsiniV9kYl0lRv8rGuCwkfn2JMdLg/XK53O0ZyBLpZPkS4ziO57jckSU2b9hHBbwxNkyf8P0vOSIp46Kw5BlPq98fcgg2TR8gfC5dS2mMazzgghyCN/ubkg2ThNybLJNerxd0u91bF5usLETCwYVS6lvVm6yXkAqvnTfhrjkv4cjBXDlps9nMqSZEwpHz7xeLxbvZbBZTTYhDRWtd22wz5xXjb5XTglcbKoV7hyZIiyHCZjfGiSg2F2xWN3f/vmP3J2ictjTZCofgz8nwBuPdAGHD7bERj8MwbK9Wq4dDtuZ9KdjifsHlJ2Wj8Xlv+CVpt5Yd7Xdrn8Z8tIOYr/j/0AxG+z80m80Ib+KSstGmXz7rVtat5SJFOTl2hj3kN/fiNM6mJ9G6KJJV/iHGrk+l35I7VGB4Sw6x6tYi1V1xmiLH5FlL/jFj5FbOd852gaV1a5F6RuSI8+vWcgV7DaKZZ8K5guEBl6cumnm2OMvqwhYgEHdr0we47NIyKGZtiOahuFv7i59DjoForsTReDwekYD/Urfw8FfC7hcAAAAASUVORK5CYII="
                  className="card-icon-inner-ser"
                />{" "}
                <br />
                <p className="card-paragraph-inner-ser font-face-futur-LT">
                  Creation of detailed documentation for Building Information
                  Material, MEP and structure.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="namdk">
          <h1 className="ser-tab-heading">Future ready businesses.</h1>
          <p className="ser-para font-face-futur-BK">
            Revolutionizing operational efficiency and sustainability in various
            industries we provide updated engineering documentation, optimizing
            planning and execution for modifications and upgrades. We support
            brownfield facilities, ensuring compliance and protection, resulting
            in streamlined maintenance and cost savings. As a vital component in
            project management, As-Built contributes to efficient project
            execution.
          </p>{" "}
          <div className="image-grid">
            <div className="grid-section">
              <img
                src="/assets/img3-06fa8b17.png"
                className="section-1-image-1"
              />
            </div>
          </div>
        </section>
        <section
          className="tab-cards-section"
          id="cardsNNN"
          style={{ marginTop: 100 }}
        >
          <h1 className="ser-tab-heading-2">View Case Studies</h1>
          <br /> <br />
          <div className="card-grid-s">
            <Link className="card-s card-1" to="/inner/3">
              <h3 className="font-face-futur-md-bt">
                Precise Revamping and Modernization for Offshore Platforms{" "}
              </h3>
              <div className="tags-s">
                <span>Oil &amp; Gas</span>
                <span>As-built Engineering</span>
              </div>
              <img
                src="/assets/id1c2-6328b31a.png"
                alt="Precise Revamping and Modernization for Offshore Platforms "
                className="card-img-s"
              />
            </Link>
            <Link className="card-s card-2" to="/inner/11">
              <h3 className="font-face-futur-md-bt">
                Reducing Maintenance Downtime to just 30 Minutes with Indian Oil
                Corporation Limited{" "}
              </h3>
              <div className="tags-s">
                <span>Oil &amp; Gas</span>
                <span>As-built Engineering</span>
              </div>
              <img
                src="/assets/id11-f7fd3c94.png"
                alt="Reducing Maintenance Downtime to just 30 Minutes with Indian Oil Corporation Limited "
                className="card-img-s"
              />
            </Link>
            <Link className="card-s card-3" to="/inner/3">
              <h3 className="font-face-futur-md-bt">
                Precise Coke Drum Replacement at an elevation of 106 meters with
                Reliance Industries{" "}
              </h3>
              <div className="tags-s">
                <span>Oil &amp; Gas</span>
                <span>As-built Engineering</span>
              </div>
              <img
                src="/assets/id7-733ccb04.png"
                alt="Precise Coke Drum Replacement at an elevation of 106 meters with Reliance Industries "
                className="card-img-s"
              />
            </Link>
          </div>
        </section>

        
      </>
    </>
  );
};

export default AsBuilt;
