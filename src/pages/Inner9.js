import React from "react";
import SliderMe from "../components/SliderMe";
import ShareIcons from "../components/ShareIcons";
import { Link } from "react-router-dom";

const Inner9 = () => {
  return (
    <>
      <section className="CaseInnerWrapper">
        <div className="CaseInnerContainer">
          <section className="InnerHero">
            <img
              src="/assets/6-fec2276c.png"
              alt="Reducing Costs and Improving Quality Control With "
              style={{ width: "100%" }}
            />
            <h2 className="InnerHeroH1 font-face-futur-md-bt">
              Reducing Costs and Improving Quality Control With{" "}
              <span className="orange">Tata Steel </span>{" "}
            </h2>
            <div className="tagsD font-face-futur-HV" id="topGap">
            <Link to="/sectors/steel" className="tags2">Steel</Link>
            <Link to="/services/dimension-control" className="tags2">Dimension Control</Link>
            </div>
            <div className="bar">
              <h2 className="InnerHeroH2 font-face-futur-md-bt">
                <div className="lineabc" />
                The Problem at Hand
              </h2>
              <p className="font-face-futur-BK innerPara">
                Tata Steel Limited faced a critical challenge in their
                production process. Their RCL 1 section suffered from alignment
                issues in the share pinch roll sheet, resulting in damaged edges
                of the final output. These issues impacted product quality and
                increased operational costs due to traditional measurement
                methods that were time-consuming and unreliable.
              </p>
            </div>
            <div className="why font-face-futur-md-bt">
              <h1>
                Why <span>SIXD?</span>
              </h1>
              <p className="whyPara font-face-futur-LT">
                To address alignment and quality issues in their manufacturing
                process, Tata Steel sought a partner with expertise in precise
                3D measurement. We have experience conducting dimension control
                surveys on several similar projects, as well as a track record
                of working on critical revamping and shutdown projects with Tata
                Steel.
              </p>
            </div>
            <div className="section-inner">
              <div className="lineabc2" />
              <h1 className="section-heading-inner font-face-futur-BK">
                Scope of Work
              </h1>
              <div className="card-container-inner">
                <p className="font-face-futur-LT" />
                <div id="topGap2">
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMLSURBVHgB7VixchoxEF2IZ2xXuRkXLnOd7SpXpgufAF06yBfE/gJIly7kCwxfYPIFvpTpSMEAlZUuDTPnCiiAvCWSI4QEJw7GLu7NaKTTaVdv91bS6ohy5MjhjUKaQZeXl+9RlVBC1bdYLJJisdjs9/u/U8iHGP+pUCgEWrdAiQeDwY9t8ke0nVwLykPzHfpoPp9zf4W2ow6Dao45BAy4Hg6H313Cr8hNsA4iLWU96gTVH5REFSj/MhqNhrQF5+fnAtU7lIkmr/QGKB/Ozs4S6Pppky84CIYQfFDkZrNZYzqdtoUQCe0RmKcK/U1FGEaXbJ+/aBOG4K3WLuFTfNs3QQYItUGsrHU1bOPWSEZRxFaVuA0FrV6v94sOCOm5DrfZIWEYBuaYtYUzmUw4RkiS7Dp0LxcVxkUYE9AWcMiwrg0rOUZZevT09PQ1/YtZN0lTudnHlp6cnNyx1XIMpQGPg2ExnFAxQwcGPG7SUyRPgOBXRdAXLMfy5AlvkpioRhkA+bIt7jZhjSQs5U8h5Nazsmh4a6LsCGTc6XiQtRiPx4+mgDMQ2FozdvT9MyNC8zi1zafgXDg2AfYyNvWYsiGxeesQ+3AOE08xeXFxwVtLRC8HAnvqDYfBMibl6XFNLwxYA21U8ZMnQfRWyxtLshay6ChRRmCeLifN2nOA50h/h8IJ8edln6lA32YwsMaZiu1dRqxsQdBb0zKvte3J+8R5DniRhFcFGRnKDhBp7kU6vD2Je02DMgAh1CBPeJPkLJ1jlQOc/NCFgWU9xtPiiHaAnMh7sl2x0ZNqWzg08FXeqrbtXF8jKReHWL7EXdk39/OF/HGgLmPClmhYPYnYacom5373V1dXb+gAYAeA4J06RFyLyplPgtg9/T9d+ATgG51YEcbPgzTbCZOBsVXj0sYHA3tQ9XWgy/o3xLlwjo+PK8gd62jymR7Yrg2YNET1kbYABJd6XJctvjpzMuGSd5LsdrscGzeIGf5HU0V8RvpC4usFwqJDKcDXWcgnhif5H1CMuo11EFOOHDn2i79LWnDjgOZDWQAAAABJRU5ErkJggg=="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMLSURBVHgB7VixchoxEF2IZ2xXuRkXLnOd7SpXpgufAF06yBfE/gJIly7kCwxfYPIFvpTpSMEAlZUuDTPnCiiAvCWSI4QEJw7GLu7NaKTTaVdv91bS6ohy5MjhjUKaQZeXl+9RlVBC1bdYLJJisdjs9/u/U8iHGP+pUCgEWrdAiQeDwY9t8ke0nVwLykPzHfpoPp9zf4W2ow6Dao45BAy4Hg6H313Cr8hNsA4iLWU96gTVH5REFSj/MhqNhrQF5+fnAtU7lIkmr/QGKB/Ozs4S6Pppky84CIYQfFDkZrNZYzqdtoUQCe0RmKcK/U1FGEaXbJ+/aBOG4K3WLuFTfNs3QQYItUGsrHU1bOPWSEZRxFaVuA0FrV6v94sOCOm5DrfZIWEYBuaYtYUzmUw4RkiS7Dp0LxcVxkUYE9AWcMiwrg0rOUZZevT09PQ1/YtZN0lTudnHlp6cnNyx1XIMpQGPg2ExnFAxQwcGPG7SUyRPgOBXRdAXLMfy5AlvkpioRhkA+bIt7jZhjSQs5U8h5Nazsmh4a6LsCGTc6XiQtRiPx4+mgDMQ2FozdvT9MyNC8zi1zafgXDg2AfYyNvWYsiGxeesQ+3AOE08xeXFxwVtLRC8HAnvqDYfBMibl6XFNLwxYA21U8ZMnQfRWyxtLshay6ChRRmCeLifN2nOA50h/h8IJ8edln6lA32YwsMaZiu1dRqxsQdBb0zKvte3J+8R5DniRhFcFGRnKDhBp7kU6vD2Je02DMgAh1CBPeJPkLJ1jlQOc/NCFgWU9xtPiiHaAnMh7sl2x0ZNqWzg08FXeqrbtXF8jKReHWL7EXdk39/OF/HGgLmPClmhYPYnYacom5373V1dXb+gAYAeA4J06RFyLyplPgtg9/T9d+ATgG51YEcbPgzTbCZOBsVXj0sYHA3tQ9XWgy/o3xLlwjo+PK8gd62jymR7Yrg2YNET1kbYABJd6XJctvjpzMuGSd5LsdrscGzeIGf5HU0V8RvpC4usFwqJDKcDXWcgnhif5H1CMuo11EFOOHDn2i79LWnDjgOZDWQAAAABJRU5ErkJggg=="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Pre-Laser Survey of the entire RCL line, spanning from
                        the Uncoiler to the Re-coiler.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7Vg9jtpQEB4gEjRILqCiWFMgfpqQE4ScAHIACDnBpky3e4NsThDDCbZHaJ0TrFOBoGEl6CgcUQASP/kG3tuwBCf2e5Y2K/FJz+M3Htuf583MGyA644znRYRCQqFQMCHuMOx+v/+RQsIrCg8XkUjEhKxQiIjSf44zQV3EKATk8/kq4u+ziEEjlUqZ6XTamU6nP0kT2lmM7L0CsesTl9z1el0ZDAY/SANaS8ylRZKr1+vU6XTIsizWs8qIRqM39JwoFouXGNtGo7E9xHg83rJejAvSgJYHwcVgmclknuh5nkwmpU2WNKCbxQ986Ha7NJvNHpWTyeRxvlgsHNKAVpKUy2VjuVze49Rkr3EcMrF2u72T8J6lu+1pZzHHIcTJZFitVm+Gw6GWB8PYi2tCMhFXDBOjHIvFqkKvDK0YzOVyZfrdHNR6vd47jPc4t1iBEvSJNKFFEB7i5d3FGog9SH08Hm/R3pNGqVSqkgaUCYoi3RTT1uE1x3FckN7F5Waz0fKiMkEQkJ4ZIVPt4+uJROIrS3xEBR/zlhShTFDGF4hen7rOXoSwxbRJilAiCI98EJ0Le6/lZSfJw7ZmmqZBClAiKGMPBOy/2YH8d9p70cCSX5ICAhM8LC0ebdYxboWtUrIEJuhVWrygW3ICETwsLdzJ+Gml0Cy8hi0TVCo5gfZiEPoC8eQlHIcgfQvpgMCOiPz5iYaVt0HzyL4iYtMXAu3FeHgNL5fZufMm1zkmw3os/x/3QO+C+I20o33J8U3QtwdFabFwOkLsZYWOSXJcSU/xnHcRV3jWmc/nrdFo5HKxxtyGjQtdlnUUJrC899zC40XfSBG4/04848rvPb6SRGxVXF78lhYvBC45frO4yQe/pcULKiXnnwS5rffqWoJCpcvx5UEOdtr/rWaTJrjL4edxWaIzzngB+AXpqjUNWJ4eLAAAAABJRU5ErkJggg=="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7Vg9jtpQEB4gEjRILqCiWFMgfpqQE4ScAHIACDnBpky3e4NsThDDCbZHaJ0TrFOBoGEl6CgcUQASP/kG3tuwBCf2e5Y2K/FJz+M3Htuf583MGyA644znRYRCQqFQMCHuMOx+v/+RQsIrCg8XkUjEhKxQiIjSf44zQV3EKATk8/kq4u+ziEEjlUqZ6XTamU6nP0kT2lmM7L0CsesTl9z1el0ZDAY/SANaS8ylRZKr1+vU6XTIsizWs8qIRqM39JwoFouXGNtGo7E9xHg83rJejAvSgJYHwcVgmclknuh5nkwmpU2WNKCbxQ986Ha7NJvNHpWTyeRxvlgsHNKAVpKUy2VjuVze49Rkr3EcMrF2u72T8J6lu+1pZzHHIcTJZFitVm+Gw6GWB8PYi2tCMhFXDBOjHIvFqkKvDK0YzOVyZfrdHNR6vd47jPc4t1iBEvSJNKFFEB7i5d3FGog9SH08Hm/R3pNGqVSqkgaUCYoi3RTT1uE1x3FckN7F5Waz0fKiMkEQkJ4ZIVPt4+uJROIrS3xEBR/zlhShTFDGF4hen7rOXoSwxbRJilAiCI98EJ0Le6/lZSfJw7ZmmqZBClAiKGMPBOy/2YH8d9p70cCSX5ICAhM8LC0ebdYxboWtUrIEJuhVWrygW3ICETwsLdzJ+Gml0Cy8hi0TVCo5gfZiEPoC8eQlHIcgfQvpgMCOiPz5iYaVt0HzyL4iYtMXAu3FeHgNL5fZufMm1zkmw3os/x/3QO+C+I20o33J8U3QtwdFabFwOkLsZYWOSXJcSU/xnHcRV3jWmc/nrdFo5HKxxtyGjQtdlnUUJrC899zC40XfSBG4/04848rvPb6SRGxVXF78lhYvBC45frO4yQe/pcULKiXnnwS5rffqWoJCpcvx5UEOdtr/rWaTJrjL4edxWaIzzngB+AXpqjUNWJ4eLAAAAABJRU5ErkJggg=="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Identification of Misalignment and consultation.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgB7de/DYJAFAbwd8SGSjbwSqC6EW4DHYERXMUJ1BGcQB3Bij+NuAFWhALwGRsCF6MFnsbv1xBeXsJxefk4iAAA4C+IfsH3/bUQQpM9RV3XUZZlp25x0u/iRUZkmeM4C748X2jbthFfNFnCzy+qqloRwI8xxdP+E/HUNM0iTdPdq/1O90Yp5X0wQ/U7zYMdDcNwzm+raES8GUVZlts8zwsCeE6YikEQzMgSnt2raXZN8XTmYZdkEX/vdZIkx27NFE8e2Sf7BdOO3ps0WcS7uSGAh8GMSik913WnNLI4ji/v9FuLJz5PLPn09PIvx7fG04AxnnixikN3zAXnHEEHAgAA6LsBDU9UUavs71gAAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgB7de/DYJAFAbwd8SGSjbwSqC6EW4DHYERXMUJ1BGcQB3Bij+NuAFWhALwGRsCF6MFnsbv1xBeXsJxefk4iAAA4C+IfsH3/bUQQpM9RV3XUZZlp25x0u/iRUZkmeM4C748X2jbthFfNFnCzy+qqloRwI8xxdP+E/HUNM0iTdPdq/1O90Yp5X0wQ/U7zYMdDcNwzm+raES8GUVZlts8zwsCeE6YikEQzMgSnt2raXZN8XTmYZdkEX/vdZIkx27NFE8e2Sf7BdOO3ps0WcS7uSGAh8GMSik913WnNLI4ji/v9FuLJz5PLPn09PIvx7fG04AxnnixikN3zAXnHEEHAgAA6LsBDU9UUavs71gAAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Correction and Alignment based on the survey results and
                        expert consultations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="howwas">
              <div className="how-cnt">
                <span className="deco2" />
                <h1 className="font-face-futur-BK howh1">
                  How was the problem tackled
                </h1>
                <ul className="font-face-futur-LT howp">
                  <li>
                    Our Dimension Control experts evaluated the precise and
                    detailed survey.{" "}
                  </li>
                  <li>
                    {" "}
                    <br />
                    The collaborative efforts of our experts, Tata Steel and
                    Danieli (OEM), ensured that the correction process was
                    carried out effectively and the manufacturing line started
                    delivering quality products as desired.
                  </li>
                </ul>
              </div>
              <div className="how-img">
                <img src="/assets/t6-0eec75dd.png" />
              </div>
            </div>
            <div className="page">
              <img src="/assets/p6-e862e8f9.png" className="page" />
            </div>
            <div className="arch">
              <div className="fxm">
                <span className="deco3" />
                <h1 className="font-face-futur-md-bt">
                  The <span className="orange">Difference</span> Achieved
                </h1>
              </div>
              <div className="side-data">
                <div className="side-image">
                  <img src="/assets/i1-a28f622a.gif" alt="Animated Frame" />
                </div>
                <div className="side-col">
                  <div className="row-side">
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">
                        Enhanced Product Quality
                      </h1>
                      <p className="font-face-futur-LT">
                        The real-time inspection and alignment reporting
                        resulted in better accuracy in quality inspection.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Accuracy</h1>
                      <p className="font-face-futur-LT">
                        The real-time inspection and alignment reporting
                        resulted in better accuracy in quality inspection.
                      </p>
                    </div>
                  </div>
                  <div className="row-side">
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Cost Savings</h1>
                      <p className="font-face-futur-LT">
                        By eliminating the need for labour-intensive and
                        time-consuming traditional measurement methods, we
                        contributed to cost savings for Tata Steel.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <h1 className="font-face-futur-BK" />
                      <p className="font-face-futur-LT" />
                    </div>
                  </div>
                  <p className="p-side font-face-futur-LT">
                    {" "}
                    In conclusion, Tata Steel's partnership with SixD
                    successfully addressed the critical challenges, ultimately
                    leading to improved product quality, operational efficiency,
                    and cost savings.
                  </p>
                </div>
              </div>
            </div>
            <div className="sharemy">
              <div className="sharex">
                <h1 className="font-face-futur-md-bt">Share this Case Study</h1>
                <div className="shareb">
                  <div className="share-50">
                    <div className="shareby font-face-futur-md-bt">
                      Share via
                    </div>
                    <ShareIcons />
                  </div>
                </div>
              </div>
            </div>
            <div className="innnercards">
              <h1 className="font-face-futur-BK">View more</h1>
              <div className="wrappermax">
                <Link to="/inner/13">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      As-Built Digital Solutions for Revamping and Modernization
                      of Brownfield Facilities and Assets.{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Steel</p>
                      <p>As-built Engineering</p>
                    </div>
                    <img src="/assets/id8c1-76b4db6d.png" />
                  </div>
                </Link>
                <Link to="/inner/1">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      Revolutionising Measurement and Alignment Procedures with
                      Steel &nbsp;{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Steel</p>
                      <p>Dimension Control</p>
                    </div>
                    <img src="/assets/id3c2-dadc1ecf.png" />
                  </div>
                </Link>
                <Link to="/inner/4">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      Streamlining Project Management for Green Hydrogen Plants{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Power</p>
                      <p>Owner’s Engineering</p>
                    </div>
                    <img src="/assets/id3c3-775b0b1f.png" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
      <SliderMe />
    </>
  );
};

export default Inner9;
