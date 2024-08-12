import React from "react";
import { Link } from "react-router-dom";

const REAS = () => {
  return (
    <>
      <section>
        <h1 className="ser-tab-heading-1 font-face-futur-HV">
          Re-Engineering &amp; Supply
        </h1>
        <br /> <br />
        <h3 className="ser-tab-subheading">
          {" "}
          Extended lifespan of the critical machinery for a competitive
          advantage.
        </h3>{" "}
        <br />
        <p className=" font-face-futur-LT para-ser ">
          {" "}
          Our design and manufacturing experts deploy advanced 3D laser scanning
          processes, enabling the design, development, and supply of vital
          components and spares that are high in cost and may no longer be
          available or have become obsolete.{" "}
        </p>{" "}
        <br /> <br />
        <Link to="/sectors/green%20energy">
          <img
            src="/assets/tab1-a1963a93.png"
            alt="Re-engineering & Supply"
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7Vg9jtpQEB4gEjRILqCiWFMgfpqQE4ScAHIACDnBpky3e4NsThDDCbZHaJ0TrFOBoGEl6CgcUQASP/kG3tuwBCf2e5Y2K/FJz+M3Htuf583MGyA644znRYRCQqFQMCHuMOx+v/+RQsIrCg8XkUjEhKxQiIjSf44zQV3EKATk8/kq4u+ziEEjlUqZ6XTamU6nP0kT2lmM7L0CsesTl9z1el0ZDAY/SANaS8ylRZKr1+vU6XTIsizWs8qIRqM39JwoFouXGNtGo7E9xHg83rJejAvSgJYHwcVgmclknuh5nkwmpU2WNKCbxQ986Ha7NJvNHpWTyeRxvlgsHNKAVpKUy2VjuVze49Rkr3EcMrF2u72T8J6lu+1pZzHHIcTJZFitVm+Gw6GWB8PYi2tCMhFXDBOjHIvFqkKvDK0YzOVyZfrdHNR6vd47jPc4t1iBEvSJNKFFEB7i5d3FGog9SH08Hm/R3pNGqVSqkgaUCYoi3RTT1uE1x3FckN7F5Waz0fKiMkEQkJ4ZIVPt4+uJROIrS3xEBR/zlhShTFDGF4hen7rOXoSwxbRJilAiCI98EJ0Le6/lZSfJw7ZmmqZBClAiKGMPBOy/2YH8d9p70cCSX5ICAhM8LC0ebdYxboWtUrIEJuhVWrygW3ICETwsLdzJ+Gml0Cy8hi0TVCo5gfZiEPoC8eQlHIcgfQvpgMCOiPz5iYaVt0HzyL4iYtMXAu3FeHgNL5fZufMm1zkmw3os/x/3QO+C+I20o33J8U3QtwdFabFwOkLsZYWOSXJcSU/xnHcRV3jWmc/nrdFo5HKxxtyGjQtdlnUUJrC899zC40XfSBG4/04848rvPb6SRGxVXF78lhYvBC45frO4yQe/pcULKiXnnwS5rffqWoJCpcvx5UEOdtr/rWaTJrjL4edxWaIzzngB+AXpqjUNWJ4eLAAAAABJRU5ErkJggg=="
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7Vg9jtpQEB4gEjRILqCiWFMgfpqQE4ScAHIACDnBpky3e4NsThDDCbZHaJ0TrFOBoGEl6CgcUQASP/kG3tuwBCf2e5Y2K/FJz+M3Htuf583MGyA644znRYRCQqFQMCHuMOx+v/+RQsIrCg8XkUjEhKxQiIjSf44zQV3EKATk8/kq4u+ziEEjlUqZ6XTamU6nP0kT2lmM7L0CsesTl9z1el0ZDAY/SANaS8ylRZKr1+vU6XTIsizWs8qIRqM39JwoFouXGNtGo7E9xHg83rJejAvSgJYHwcVgmclknuh5nkwmpU2WNKCbxQ986Ha7NJvNHpWTyeRxvlgsHNKAVpKUy2VjuVze49Rkr3EcMrF2u72T8J6lu+1pZzHHIcTJZFitVm+Gw6GWB8PYi2tCMhFXDBOjHIvFqkKvDK0YzOVyZfrdHNR6vd47jPc4t1iBEvSJNKFFEB7i5d3FGog9SH08Hm/R3pNGqVSqkgaUCYoi3RTT1uE1x3FckN7F5Waz0fKiMkEQkJ4ZIVPt4+uJROIrS3xEBR/zlhShTFDGF4hen7rOXoSwxbRJilAiCI98EJ0Le6/lZSfJw7ZmmqZBClAiKGMPBOy/2YH8d9p70cCSX5ICAhM8LC0ebdYxboWtUrIEJuhVWrygW3ICETwsLdzJ+Gml0Cy8hi0TVCo5gfZiEPoC8eQlHIcgfQvpgMCOiPz5iYaVt0HzyL4iYtMXAu3FeHgNL5fZufMm1zkmw3os/x/3QO+C+I20o33J8U3QtwdFabFwOkLsZYWOSXJcSU/xnHcRV3jWmc/nrdFo5HKxxtyGjQtdlnUUJrC899zC40XfSBG4/04848rvPb6SRGxVXF78lhYvBC45frO4yQe/pcULKiXnnwS5rffqWoJCpcvx5UEOdtr/rWaTJrjL4edxWaIzzngB+AXpqjUNWJ4eLAAAAABJRU5ErkJggg=="
                className="card-icon-inner-ser"
              />{" "}
              <br />
              <p className="card-paragraph-inner-ser font-face-futur-LT">
                Manufacturing and fabrication drawings generation
              </p>
            </div>
          </div>
          <div className="card-inner-ser">
            <div className="card-content-inner-ser">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                className="card-icon-inner-ser"
              />{" "}
              <br />
              <p className="card-paragraph-inner-ser font-face-futur-LT">
                Inclusion of critical details: material specifications, fits and
                tolerances, treatment details
              </p>
            </div>
          </div>
          <div className="card-inner-ser">
            <div className="card-content-inner-ser">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALpSURBVHgB7Zg9ktowFMcfhGKhiTNDH1MBQxHnBPgIyQni7dJt9gRhT5DNCUJOEHKC9Zbp2IqPJk4PM04DDQP5P0YiipDB2ArLzvCf0cj6QPrN03v6gOgsuyrQEdRsNl+uVitXlpfLZTwejx/oAP030Far9WqxWATFYjFA0dHbAR4hCwuFQmcwGPzaN551UNd1nXK5/BGfH1L+JAboi32dSmRRjUbDRXaH5CrVIVIPFtwsNaz4CZknijGlkDVQCQkIl/4CBvqyoh9bW0JGSD6lkE2LbiBhvc5wOLzROzAk+6QoRkh+Gv9kFcmCBIBLFiDZx3mX0OtzB5O25BEmr1FGSPR7h35dfMbz+bwWRdHGf21YtK1Y85LyQ7Kci4uLK7U9NygGDyQEljzUJm9ngJTyySYoiQjGadM3tG3cAJv/25SQ63FQ55NlUEcMbAL9KT9KpdIXDhTaAQnXCZA+y7IaVFaiPklwhXtM3BVFDyfWnYQ1QaL/16SxbIDGYiKHzLCXOmy9Xr9KgkT9c1mPyP9tEzQSE3hJHXRYXFRuTZBCvshj29tTKEB93Qd1WGQbQPSPEYBv9OUGuAzOUK236qOVSqW9qx1Rfw2QGiBfz2az2mg0+q62C791+Rt5T23LdTLlObsNY7m044TLbFGbkOwysPQ39b6g98l0e7JtSYZEgEnfvIVLbG1TBy/9AWc3+6uPiXum95F4RwUYi18C6yDknUEEHeUCzXjBkO+jdeL9VljPVX8jLHlNCUoNmhUyhULA3+gXGsoCmgNSPvB8DhTl9OoLwId9gKlBcyz3zrP7UBWeAiTtAj0lSEoCPTVIMoFqk0enAMkyHaEdkUd0IpCsf0A9z3Pkecsb8KlAEh14KXksSNaWj+IM5gcZb84RX4alVR8T0gjK7xn5VGBYpD4AHfX5emxI1jO9Yjqd/qhWq+unhQBsKLfuGJDvjw1JJlDWZDK5BywvvTyb+X3T5X9F+AlMZ5111pb+APBNDfd18bgzAAAAAElFTkSuQmCC"
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALpSURBVHgB7Zg9ktowFMcfhGKhiTNDH1MBQxHnBPgIyQni7dJt9gRhT5DNCUJOEHKC9Zbp2IqPJk4PM04DDQP5P0YiipDB2ArLzvCf0cj6QPrN03v6gOgsuyrQEdRsNl+uVitXlpfLZTwejx/oAP030Far9WqxWATFYjFA0dHbAR4hCwuFQmcwGPzaN551UNd1nXK5/BGfH1L+JAboi32dSmRRjUbDRXaH5CrVIVIPFtwsNaz4CZknijGlkDVQCQkIl/4CBvqyoh9bW0JGSD6lkE2LbiBhvc5wOLzROzAk+6QoRkh+Gv9kFcmCBIBLFiDZx3mX0OtzB5O25BEmr1FGSPR7h35dfMbz+bwWRdHGf21YtK1Y85LyQ7Kci4uLK7U9NygGDyQEljzUJm9ngJTyySYoiQjGadM3tG3cAJv/25SQ63FQ55NlUEcMbAL9KT9KpdIXDhTaAQnXCZA+y7IaVFaiPklwhXtM3BVFDyfWnYQ1QaL/16SxbIDGYiKHzLCXOmy9Xr9KgkT9c1mPyP9tEzQSE3hJHXRYXFRuTZBCvshj29tTKEB93Qd1WGQbQPSPEYBv9OUGuAzOUK236qOVSqW9qx1Rfw2QGiBfz2az2mg0+q62C791+Rt5T23LdTLlObsNY7m044TLbFGbkOwysPQ39b6g98l0e7JtSYZEgEnfvIVLbG1TBy/9AWc3+6uPiXum95F4RwUYi18C6yDknUEEHeUCzXjBkO+jdeL9VljPVX8jLHlNCUoNmhUyhULA3+gXGsoCmgNSPvB8DhTl9OoLwId9gKlBcyz3zrP7UBWeAiTtAj0lSEoCPTVIMoFqk0enAMkyHaEdkUd0IpCsf0A9z3Pkecsb8KlAEh14KXksSNaWj+IM5gcZb84RX4alVR8T0gjK7xn5VGBYpD4AHfX5emxI1jO9Yjqd/qhWq+unhQBsKLfuGJDvjw1JJlDWZDK5BywvvTyb+X3T5X9F+AlMZ5111pb+APBNDfd18bgzAAAAAElFTkSuQmCC"
                className="card-icon-inner-ser"
              />{" "}
              <br />
              <p className="card-paragraph-inner-ser font-face-futur-LT">
                Incorporation of material hardness property and manufacturing
                Q.A.P. (Quality Assurance Plan)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="namdk">
        <h1 className="ser-tab-heading">Future proofing businesses.</h1>
        <p className="ser-para font-face-futur-BK">
          By harnessing the cutting-edge digitalization process, we extend the
          life of the existing equipment and machinery, thus empowering our
          partners to envision, design, and sustain continued success and
          productivity.{" "}
        </p>{" "}
        <div className="image-grid">
          <div className="grid-section">
            <img
              src="/assets/tab1-img-b51c1f16.png"
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
          <Link className="card-s card-1" to="/inner/16">
            <h3 className="font-face-futur-md-bt">
              Curbing OEM Dependency For Critical Component Fabrication With
              Dalmia Cement
            </h3>
            <div className="tags-s">
              <span>Others</span>
              <span>Re-engineering &amp; Supply</span>
            </div>
            <img
              src="/assets/id16-e2acc34b.png"
              alt="Curbing OEM Dependency For Critical Component Fabrication With Dalmia Cement"
              className="card-img-s"
            />
          </Link>
          <Link className="card-s card-2" to="/inner/15">
            <h3 className="font-face-futur-md-bt">
              Enhancing Passenger Comfort with Wipro Limited
            </h3>
            <div className="tags-s">
              <span>Others</span>
              <span>Re-engineering &amp; Supply</span>
            </div>
            <img
              src="/assets/id5c3-06e459c3.png"
              alt="Enhancing Passenger Comfort with Wipro Limited"
              className="card-img-s"
            />
          </Link>
          <Link className="card-s card-3" to="/inner/13">
            <h3 className="font-face-futur-md-bt">
              Physical Parts to Manufacturing Blueprints for Essential Spares
              and Components.
            </h3>
            <div className="tags-s">
              <span>Others</span>
              <span>Re-Engineering &amp; Supply</span>
            </div>
            <img
              src="/assets/id8c1-76b4db6d.png"
              alt="Physical Parts to Manufacturing Blueprints for Essential Spares and Components."
              className="card-img-s"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default REAS;
