import React from "react";
import { Link } from "react-router-dom";

const OwnersEngineering = () => {
  return (
    <>
      <section>
        <h1 className="ser-tab-heading-1 font-face-futur-HV">
          Owner’s Engineering
        </h1>
        <br /> <br />
        <h3 className="ser-tab-subheading">
          {" "}
          Holistic project oversight and support ensuring end-to-end success
        </h3>{" "}
        <br />
        <p className=" font-face-futur-LT para-ser ">
          {" "}
          We provide crucial project development support, from feasibility
          reports and tender preparation to third-party inspections and expert
          deputation at project sites. With expertise spanning multiple
          disciplines, including Civil, Mechanical, Electrical, and H.S.E., we
          ensure thorough oversight from planning to commissioning of the
          project. The service's comprehensive approach also encompasses bid
          management and O &amp; M management, ensuring end-to-end project
          success.
        </p>{" "}
        <br /> <br />
        <Link to="/sectors/green-energy">
          <img
            src="/assets/own-124781d5.png"
            alt="Owner’s Engineering"
            className="ser-img"
          />
          <div className="warp-mm">
            <h1 className="jkkj">
              Industries We Partner With For Owner’s Engineering Services
            </h1>
            <h3 className="mjj">Green energy</h3>
            <p className="jkkj">
              Solar PV, Wind, Green Hydrogen, Green Ammonia, Waste to Energy,
              and Hydrokinetics.
            </p>
          </div>
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7Vg9jtpQEB4gEjRILqCiWFMgfpqQE4ScAHIACDnBpky3e4NsThDDCbZHaJ0TrFOBoGEl6CgcUQASP/kG3tuwBCf2e5Y2K/FJz+M3Htuf583MGyA644znRYRCQqFQMCHuMOx+v/+RQsIrCg8XkUjEhKxQiIjSf44zQV3EKATk8/kq4u+ziEEjlUqZ6XTamU6nP0kT2lmM7L0CsesTl9z1el0ZDAY/SANaS8ylRZKr1+vU6XTIsizWs8qIRqM39JwoFouXGNtGo7E9xHg83rJejAvSgJYHwcVgmclknuh5nkwmpU2WNKCbxQ986Ha7NJvNHpWTyeRxvlgsHNKAVpKUy2VjuVze49Rkr3EcMrF2u72T8J6lu+1pZzHHIcTJZFitVm+Gw6GWB8PYi2tCMhFXDBOjHIvFqkKvDK0YzOVyZfrdHNR6vd47jPc4t1iBEvSJNKFFEB7i5d3FGog9SH08Hm/R3pNGqVSqkgaUCYoi3RTT1uE1x3FckN7F5Waz0fKiMkEQkJ4ZIVPt4+uJROIrS3xEBR/zlhShTFDGF4hen7rOXoSwxbRJilAiCI98EJ0Le6/lZSfJw7ZmmqZBClAiKGMPBOy/2YH8d9p70cCSX5ICAhM8LC0ebdYxboWtUrIEJuhVWrygW3ICETwsLdzJ+Gml0Cy8hi0TVCo5gfZiEPoC8eQlHIcgfQvpgMCOiPz5iYaVt0HzyL4iYtMXAu3FeHgNL5fZufMm1zkmw3os/x/3QO+C+I20o33J8U3QtwdFabFwOkLsZYWOSXJcSU/xnHcRV3jWmc/nrdFo5HKxxtyGjQtdlnUUJrC899zC40XfSBG4/04848rvPb6SRGxVXF78lhYvBC45frO4yQe/pcULKiXnnwS5rffqWoJCpcvx5UEOdtr/rWaTJrjL4edxWaIzzngB+AXpqjUNWJ4eLAAAAABJRU5ErkJggg=="
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7Vg9jtpQEB4gEjRILqCiWFMgfpqQE4ScAHIACDnBpky3e4NsThDDCbZHaJ0TrFOBoGEl6CgcUQASP/kG3tuwBCf2e5Y2K/FJz+M3Htuf583MGyA644znRYRCQqFQMCHuMOx+v/+RQsIrCg8XkUjEhKxQiIjSf44zQV3EKATk8/kq4u+ziEEjlUqZ6XTamU6nP0kT2lmM7L0CsesTl9z1el0ZDAY/SANaS8ylRZKr1+vU6XTIsizWs8qIRqM39JwoFouXGNtGo7E9xHg83rJejAvSgJYHwcVgmclknuh5nkwmpU2WNKCbxQ986Ha7NJvNHpWTyeRxvlgsHNKAVpKUy2VjuVze49Rkr3EcMrF2u72T8J6lu+1pZzHHIcTJZFitVm+Gw6GWB8PYi2tCMhFXDBOjHIvFqkKvDK0YzOVyZfrdHNR6vd47jPc4t1iBEvSJNKFFEB7i5d3FGog9SH08Hm/R3pNGqVSqkgaUCYoi3RTT1uE1x3FckN7F5Waz0fKiMkEQkJ4ZIVPt4+uJROIrS3xEBR/zlhShTFDGF4hen7rOXoSwxbRJilAiCI98EJ0Le6/lZSfJw7ZmmqZBClAiKGMPBOy/2YH8d9p70cCSX5ICAhM8LC0ebdYxboWtUrIEJuhVWrygW3ICETwsLdzJ+Gml0Cy8hi0TVCo5gfZiEPoC8eQlHIcgfQvpgMCOiPz5iYaVt0HzyL4iYtMXAu3FeHgNL5fZufMm1zkmw3os/x/3QO+C+I20o33J8U3QtwdFabFwOkLsZYWOSXJcSU/xnHcRV3jWmc/nrdFo5HKxxtyGjQtdlnUUJrC899zC40XfSBG4/04848rvPb6SRGxVXF78lhYvBC45frO4yQe/pcULKiXnnwS5rffqWoJCpcvx5UEOdtr/rWaTJrjL4edxWaIzzngB+AXpqjUNWJ4eLAAAAABJRU5ErkJggg=="
                className="card-icon-inner-ser"
              />{" "}
              <br />
              <p className="card-paragraph-inner-ser font-face-futur-LT">
                Pre-Execution:
              </p>
              <ol className="listme">
                <li className="bullet">
                  Concept study and layout preparation.
                </li>
                <li className="bullet">
                  Feasibility study and Environment Impact Assessment.
                </li>
                <li className="bullet">Technical due-diligence.</li>
                <li className="bullet">RFP and tender preparation.</li>
                <li className="bullet">EPC bid management.</li>
              </ol>
              <p />
            </div>
          </div>
          <div className="card-inner-ser">
            <div className="card-content-inner-ser">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgB7de/DYJAFAbwd8SGSjbwSqC6EW4DHYERXMUJ1BGcQB3Bij+NuAFWhALwGRsCF6MFnsbv1xBeXsJxefk4iAAA4C+IfsH3/bUQQpM9RV3XUZZlp25x0u/iRUZkmeM4C748X2jbthFfNFnCzy+qqloRwI8xxdP+E/HUNM0iTdPdq/1O90Yp5X0wQ/U7zYMdDcNwzm+raES8GUVZlts8zwsCeE6YikEQzMgSnt2raXZN8XTmYZdkEX/vdZIkx27NFE8e2Sf7BdOO3ps0WcS7uSGAh8GMSik913WnNLI4ji/v9FuLJz5PLPn09PIvx7fG04AxnnixikN3zAXnHEEHAgAA6LsBDU9UUavs71gAAAAASUVORK5CYII="
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgB7de/DYJAFAbwd8SGSjbwSqC6EW4DHYERXMUJ1BGcQB3Bij+NuAFWhALwGRsCF6MFnsbv1xBeXsJxefk4iAAA4C+IfsH3/bUQQpM9RV3XUZZlp25x0u/iRUZkmeM4C748X2jbthFfNFnCzy+qqloRwI8xxdP+E/HUNM0iTdPdq/1O90Yp5X0wQ/U7zYMdDcNwzm+raES8GUVZlts8zwsCeE6YikEQzMgSnt2raXZN8XTmYZdkEX/vdZIkx27NFE8e2Sf7BdOO3ps0WcS7uSGAh8GMSik913WnNLI4ji/v9FuLJz5PLPn09PIvx7fG04AxnnixikN3zAXnHEEHAgAA6LsBDU9UUavs71gAAAAASUVORK5CYII="
                className="card-icon-inner-ser"
              />{" "}
              <br />
              <p className="card-paragraph-inner-ser font-face-futur-LT">
                Execution:
              </p>
              <ol className="listme">
                <li className="bullet">
                  Review and approve EPC drawings/documents.
                </li>
                <li className="bullet">Project and site management.</li>
                <li className="bullet">
                  Prepare Detailed Project Report (DPR).
                </li>
                <li className="bullet">Depute experts on-site.</li>
                <li className="bullet">
                  Develop O&amp;M Specification &amp; Manual.
                </li>
                <li className="bullet">
                  Review O&amp;M documents, QAP &amp; SAP.
                </li>
                <li className="bullet">
                  Conduct TPI &amp; Pre-dispatch Inspection.
                </li>
              </ol>
              <p />
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
                Post Execution:
              </p>
              <ol className="listme">
                <li className="bullet">Accept the project</li>
                <li className="bullet">Establish O&amp;M Manual/Library.</li>
                <li className="bullet">Monitor post-commissioning.</li>
                <li className="bullet">Develop As-Built Drawings.</li>
              </ol>
              <p />
            </div>
          </div>
        </div>
        <h3 className="ser-tab-subheading-new">
          We offer Plant engineering services for old industrial plants.
        </h3>
        <ol className="listme font-face-futur-LT para-ser">
          <li className="bullet">Conducting feasibility studies.</li>
          <li className="bullet">
            Performing health assessments of old structures.
          </li>
          <li className="bullet">Studying green hydrogen generation plants.</li>
          <li className="bullet">
            Assessing the feasibility of conveying raw materials from your mine
            to your plant.
          </li>
          <li className="bullet">
            Conducting feasibility studies for bulk material handling, using
            both pneumatic and conventional belt conveying systems.
          </li>
        </ol>
        <h3 className="ser-tab-subheading-new-max">
          Engineering the businesses of the{" "}
          <span className="orange ksdj">future.</span>
        </h3>
        <p className="font-face-futur-LT para-ser ddd">
          Our role extends beyond overseeing project development. We strategize,
          envision, and implement innovative solutions while anticipating
          challenges and opportunities. We not only ensure the successful
          execution of projects but also position organizations for long-term
          success in an evolving industrial landscape.
        </p>
        <img src="/assets/abc-bea416d0.png" className="nkjkh" />
        <div className="v-wrap">
          <img src="/assets/v1-aaaad563.png" />
          <img src="/assets/v2-06b893c3.png" />
          <img src="/assets/v3-d11a7fcf.png" />
        </div>
        <h1 className="mm">Successful projects</h1>
        <img src="/assets/mainG-226af5a0.png" className="none_image" />
        <div className="card-d-wrap">
          <div className="card-d-c1 he">
            <div className="opp img-c1" />
            <p className="card-p1">
              Feasibility Study of Conveying System from Kusmunda mine to CPP,
              Balco
              <br /> <br />
              (Distance – 7 KM, Capacity – 1100 TPH).
            </p>
          </div>
          <div className="card-d-c1 me">
            <div className="opp img-c2" />
            <p className="card-p1">
              Feasibility Study of Conveying System from Kusmunda mine to Balco
              Aluminum Plant, Balco
              <br /> <br />
              (Distance – 15 KM, Capacity – 1100 TPH).
            </p>
            <div className="logoMian">
              <div className="logoMainimg">
                <img src="/assets/d1-d8b283eb.png" />
              </div>
            </div>
          </div>
          <div className="card-d-c1 me">
            <div className="opp img-c3" />
            <p className="card-p1">
              RECPDCl, Gurugram: Empanelled as Technical consultant for Solar PV
              &amp; Floating Solar PV plant.
            </p>
            <div className="logoMian">
              <div className="logoMainimg">
                <img src="/assets/d2-aac88879.png" />
              </div>
            </div>
          </div>
          <div className="card-d-c1 he">
            <div className="opp img-c4" />
            <p className="card-p1">
              Bureau Veritas: TPI Services for PAN INDIA.
            </p>
          </div>
          <div className="card-d-c1 he">
            <div className="opp img-c5" />
            <p className="card-p1">
              Bureau Veritas: Deputation of QA/QC – Civil &amp; Electrical for
              Tuljapur, Maharashtra INDIA.
            </p>
          </div>
          <div className="card-d-c1 me">
            <div className="opp img-c6" />
            <p className="card-p1">
              Ishaa Renewable Energy through Bureau Veritas SAUDI ARABIA: Review
              of Drawing / document of Solar PV plant – 1425 MW.
            </p>
            <div className="logoMian">
              <div className="logoMainimg">
                <img src="data:image/png;base64,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" />
              </div>
            </div>
          </div>
          <div className="card-d-c1 me">
            <div className="opp img-c7" />
            <p className="card-p1">
              APGC, Assam INDIA: Consultancy Services for assessment of
              extractable Hydrokinetics Energy Potential and Techno-economic
              Feasibility Study for Extractable Hydrokinetics Energy Generation
              in the state of Assam.
            </p>
            <div className="logoMian">
              <div className="logoMainimg">
                <img src="data:image/png;base64,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" />
              </div>
            </div>
          </div>
          <div className="card-d-c1 he">
            <div className="opp img-c8" />
            <p className="card-p1">
              Empresarios Agrupados SPAIN: Owners Engineering
              <br /> <br />
              Spain CCPP (2).
            </p>
          </div>
          <div className="card-d-c1 me">
            <div className="opp img-c9" />
            <p className="card-p1">
              Empresarios Agrupados SPAIN: Owners Engineering
              <br /> <br />
              Bangladesh Project, Gas Based Power Plants (2).
            </p>
            <div className="logoMian">
              <div className="logoMainimg">
                <img src="data:image/png;base64,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" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="namdk">
        <h1 className="ser-tab-heading" />
        <p className="ser-para font-face-futur-BK" />{" "}
        <div className="image-grid">
          <div className="grid-section" />
        </div>
      </section>
      <section
        className="tab-cards-section"
        id="cardsNNN"
        style={{ marginTop: "-80px" }}
      >
        <h1 className="ser-tab-heading-2">View Case Studies</h1>
        <br /> <br />
        <div className="card-grid-s">
          <Link className="card-s card-1" to="/inner/18">
            <h3 className="font-face-futur-md-bt">
              Comprehensive Engineering Solutions To Revolutionize Solar PV
              Plants
            </h3>
            <div className="tags-s">
              <span>Power</span>
              <span>Owner’s Engineering</span>
            </div>
            <img
              src="/assets/id15c1-112af381.png"
              alt="Comprehensive Engineering Solutions To Revolutionize Solar PV Plants"
              className="card-img-s"
            />
          </Link>
          <Link className="card-s card-2" to="/inner/17">
            <h3 className="font-face-futur-md-bt">
              End-to-End Owner’s Engineering Solutions Form Power Plant
              Excellence
            </h3>
            <div className="tags-s">
              <span>Power</span>
              <span>Owner’s Engineering</span>
            </div>
            <img
              src="/assets/id4c2-972761eb.png"
              alt="End-to-End Owner’s Engineering Solutions Form Power Plant Excellence"
              className="card-img-s"
            />
          </Link>
          <Link className="card-s card-3" to="/inner/4">
            <h3 className="font-face-futur-md-bt">
              Streamlining Project Management for Green Hydrogen Plants
            </h3>
            <div className="tags-s">
              <span>Power</span>
              <span>Owner’s Engineering</span>
            </div>
            <img
              src="/assets/id3c3-775b0b1f.png"
              alt="Streamlining Project Management for Green Hydrogen Plants"
              className="card-img-s"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default OwnersEngineering;
