import React from "react";
import SliderMe from "../components/SliderMe";
import ShareIcons from "../components/ShareIcons";
import { Link } from "react-router-dom";

const Inner15 = () => {
  return (
    <>
      <section className="CaseInnerWrapper">
        <div className="CaseInnerContainer">
          <section className="InnerHero">
            <img
              src="/assets/4-294d6fe4.png"
              alt="Enhancing Automotive Passenger Comfort with "
              style={{ width: "100%" }}
            />
            <h2 className="InnerHeroH1 font-face-futur-md-bt">
              Enhancing Automotive Passenger Comfort with{" "}
              <span className="orange">Wipro Limited</span>{" "}
            </h2>
            <div className="tagsD font-face-futur-HV" id="topGap">
            <Link to="/sectors" className="tags2">Others</Link>
            <Link to="/services/re-engineering-supply" className="tags2">Re-Engineering & Supply</Link>   
            </div>
            <div className="bar">
              <h2 className="InnerHeroH2 font-face-futur-md-bt">
                <div className="lineabc" />
                The Problem at Hand
              </h2>
              <p className="font-face-futur-BK innerPara">
                This project in Japan for the automotive industry required
                modelling of every component and part by the deputation team in
                Japan and conducting the project there.
              </p>
            </div>
            <div className="why font-face-futur-md-bt">
              <h1>
                Why <span>SIXD?</span>
              </h1>
              <p className="whyPara font-face-futur-LT">
                The key challenges were the complexity of the parts and the need
                for precise scanning within the given time frame at a remote
                location with all the required arrangements. With expertise in
                reverse engineering and handling of all the aspects of the
                project, SIXD was well-suited for this assignment.
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
                        Scanning and digitization of 5 automotive seats.
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
                        Creation of detailed 3D CAD models for all individual
                        seat parts and assemblies.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMpSURBVHgB7Vg9ThtBFH5rIwESxRb02RQIEAXrLl3MCeIb4BvADTAniClTYU4Q5wTZnIClQBAo2JQRBVuBkfyT71u/jSwrnpmNXWBpP2mY59WbmW/fz7y3iJQo8bbgFVHe2dn57nleIHNiNBp1bm9vT131nUmGYei/vr4+QPRlfsQ3Nzc1V+WilgwwBdlCz/uMKRwOh23I32Ye4HlHmBq0HuYLPuv1enGSJKk4YkUKAC5KMHHI7u5uqiRiPI9mrcGLHUKHYmLSM6EiS4CS5KJQklwUSpKLwlKQLHSZE1p1zjHq/F2pVJwqBy70FgqA//Lyclqk2mRnFFHe29vbx2GXGHWMFKWu9fz8/MOy7FRLInG8trZ2CbLvpACcazcJok5HMm4wEow6moRfruu1PLYgBiCdoH7XXC3qZEm6eDAYdJVgDJfVihAkULcvQO4AYsJ2Dxb96rrW1d0n2kcmGI2iMZWDDQpiuEGZIbO9vX3ksq5qU6AVsWGHcr/fP/gJyBx4fHz8vbm5KRrXHzY2Nr6kadozrXHJ7hP+YfDf39/H+UMGP54FMo6xlImEkbiEAVx9hgb6GKK/urp6iPnMpG9NHJB54maMJzarOOAIZJqize80mBQYXbi1bSIMDzGEWtCNEAYHJg7GmMRGH2WcLLTS/vr6+kOeoarCJKB1I9FmmLELgrRSTCKG7SPVD8UCz0KyiU3O/7F5Fxl+MZ1AQRD4sPSnyRehZfG7jdshuru7u8p19ZvpKV9qsrqN5IkeyDdOcVALeWOMnxzMXLVoYNNFQtYm430arlcQ4yx0JUhQl3GM0RR17SxUq1XjF6gtuzMX0GUI7kKXNzHx4ZZ9JWrd/wt4h5/IAg+l85B80M2swe0CJZ1ha2srXFkZH29yNWF0N5KAgc639DXTFwYQzPbjFWTTNZKM45gEY92sIQsE9jtWsWPTtSYO27FMsVJpFm2xZkE7ooAy5simbyWJOGK/GMm46nRkTmjytCjTAC5l1Kmf1CbjEqKPnrKrVeZ/0cw7KhB877LAuelVF3VkAdCuPnTtSYv+V40dS13mBC7v9vX19ZWUKLGk+AOQH2zan7qF3gAAAABJRU5ErkJggg=="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMpSURBVHgB7Vg9ThtBFH5rIwESxRb02RQIEAXrLl3MCeIb4BvADTAniClTYU4Q5wTZnIClQBAo2JQRBVuBkfyT71u/jSwrnpmNXWBpP2mY59WbmW/fz7y3iJQo8bbgFVHe2dn57nleIHNiNBp1bm9vT131nUmGYei/vr4+QPRlfsQ3Nzc1V+WilgwwBdlCz/uMKRwOh23I32Ye4HlHmBq0HuYLPuv1enGSJKk4YkUKAC5KMHHI7u5uqiRiPI9mrcGLHUKHYmLSM6EiS4CS5KJQklwUSpKLwlKQLHSZE1p1zjHq/F2pVJwqBy70FgqA//Lyclqk2mRnFFHe29vbx2GXGHWMFKWu9fz8/MOy7FRLInG8trZ2CbLvpACcazcJok5HMm4wEow6moRfruu1PLYgBiCdoH7XXC3qZEm6eDAYdJVgDJfVihAkULcvQO4AYsJ2Dxb96rrW1d0n2kcmGI2iMZWDDQpiuEGZIbO9vX3ksq5qU6AVsWGHcr/fP/gJyBx4fHz8vbm5KRrXHzY2Nr6kadozrXHJ7hP+YfDf39/H+UMGP54FMo6xlImEkbiEAVx9hgb6GKK/urp6iPnMpG9NHJB54maMJzarOOAIZJqize80mBQYXbi1bSIMDzGEWtCNEAYHJg7GmMRGH2WcLLTS/vr6+kOeoarCJKB1I9FmmLELgrRSTCKG7SPVD8UCz0KyiU3O/7F5Fxl+MZ1AQRD4sPSnyRehZfG7jdshuru7u8p19ZvpKV9qsrqN5IkeyDdOcVALeWOMnxzMXLVoYNNFQtYm430arlcQ4yx0JUhQl3GM0RR17SxUq1XjF6gtuzMX0GUI7kKXNzHx4ZZ9JWrd/wt4h5/IAg+l85B80M2swe0CJZ1ha2srXFkZH29yNWF0N5KAgc639DXTFwYQzPbjFWTTNZKM45gEY92sIQsE9jtWsWPTtSYO27FMsVJpFm2xZkE7ooAy5simbyWJOGK/GMm46nRkTmjytCjTAC5l1Kmf1CbjEqKPnrKrVeZ/0cw7KhB877LAuelVF3VkAdCuPnTtSYv+V40dS13mBC7v9vX19ZWUKLGk+AOQH2zan7qF3gAAAABJRU5ErkJggg=="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Capturing directory snapshots for child parts.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgB7Vg7VttAFB3bBdC5gI5zUBp+TbSDiC6dzQpiVoBZgc0KcFYQpUwVKFOhrCCi4tNE6VxQOA24Aede6w2ZyPqMkcih8D1HHkmeeXP19N59o1FqgQVeF2qqAmxvb7+bTCbter3u8RrnIzT+1dXVZ1UBSpMEwV6tVuun/Qey0ePjY/vm5uZClUApkjs7OydounIZgBQ9F4H0W7nv4Bg9PDx4ZYhak+QrRdMBAU9uNeWgx/p4tceJ/g76fsWpK7ci6RvhCBEag8vLy1/KAoUkHcdpLi8vn2DCzszgWm2E19nNij3XdZvj8Th1LDAC2a5N3BaShEc+6Ulg1Mf5GRMDnhjd3d1FwMjChqPiV09sSAw7YtMD0e/quSRh/AMM+mJsD8YCVRH0w/P1w+6bvL71vD9ND1ZJkEAIHaEZYQ5H4j0T9XxTT0Ffid6ZCMOQMXkql15e3yKS0+zF0/5ULwAmHluQbeb1KyJZGaCph6KrT5DKRLLPI6kN8mlt9SwLrEpoBji6lDR9X3sSbXtzc/OtmoekGJ1WEuqgKgF6UJdNir4pWXj4j2gCHM1GoxGg74ayISmVoq+NllkkiD72DVvHyT5LS0v7aEISpYooG5JAT4z6aUbnJHiu4uQLsmxJlpMo5chLk6MZkuhYWnYk7s6pgSqu2Z28/ngA9qE36RxXFZFUIjt52NraaiF+fmQF+8rKSs8g6NkkHisP27RMTyOpAzs1iKeD4sWty2BPEjWTDhMfWK904ociopn5kjd0FcCgzKxGsDO+psFuEk1msm0plTj0ZN6gkCRqKmWB3nS5CEgzymAH0T2TKBcjqiCTMwg6aHwZ56d5vpG8MRwOx6urq0MKLJNobW2teXt7+y2t3/r6+hesut/jkrLV5jOqOJMPlD3BpwTjggZz/U72SxVzaqOIOD36T5UwoT0q68wQYwb39/f7yhIY05o3wWaAGJvIsaFeAEwy2s8KK43/tsDIgCNtlNepiGTEH0PgK4XWRL0aykIuSQwO2JZdZKRBkobJRrK5n7tFnvTFiCciXQmMuj51RJGe2nwt9gyB5jfzqbGiDq+vr8/yxssncUv9jT8tV3zVkbLIaqvNAdTqQ5RCvSORBD/yj9LGJXQwiQBHx0Z25tnBcNBwY8plwEvQT2NKdLJvTiilztc6qOObScJv93m+PkvtBYmHBzL5dPtExZXDNbZjIvVcoa6CJLG7u9sCORJ1Uv4+RQU6sNnlyEMl+5MEKkcbZLkaYmKEOL+oekNhgQVeC/4Ayhnlou48aH8AAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgB7Vg7VttAFB3bBdC5gI5zUBp+TbSDiC6dzQpiVoBZgc0KcFYQpUwVKFOhrCCi4tNE6VxQOA24Aede6w2ZyPqMkcih8D1HHkmeeXP19N59o1FqgQVeF2qqAmxvb7+bTCbter3u8RrnIzT+1dXVZ1UBSpMEwV6tVuun/Qey0ePjY/vm5uZClUApkjs7OydounIZgBQ9F4H0W7nv4Bg9PDx4ZYhak+QrRdMBAU9uNeWgx/p4tceJ/g76fsWpK7ci6RvhCBEag8vLy1/KAoUkHcdpLi8vn2DCzszgWm2E19nNij3XdZvj8Th1LDAC2a5N3BaShEc+6Ulg1Mf5GRMDnhjd3d1FwMjChqPiV09sSAw7YtMD0e/quSRh/AMM+mJsD8YCVRH0w/P1w+6bvL71vD9ND1ZJkEAIHaEZYQ5H4j0T9XxTT0Ffid6ZCMOQMXkql15e3yKS0+zF0/5ULwAmHluQbeb1KyJZGaCph6KrT5DKRLLPI6kN8mlt9SwLrEpoBji6lDR9X3sSbXtzc/OtmoekGJ1WEuqgKgF6UJdNir4pWXj4j2gCHM1GoxGg74ayISmVoq+NllkkiD72DVvHyT5LS0v7aEISpYooG5JAT4z6aUbnJHiu4uQLsmxJlpMo5chLk6MZkuhYWnYk7s6pgSqu2Z28/ngA9qE36RxXFZFUIjt52NraaiF+fmQF+8rKSs8g6NkkHisP27RMTyOpAzs1iKeD4sWty2BPEjWTDhMfWK904ociopn5kjd0FcCgzKxGsDO+psFuEk1msm0plTj0ZN6gkCRqKmWB3nS5CEgzymAH0T2TKBcjqiCTMwg6aHwZ56d5vpG8MRwOx6urq0MKLJNobW2teXt7+y2t3/r6+hesut/jkrLV5jOqOJMPlD3BpwTjggZz/U72SxVzaqOIOD36T5UwoT0q68wQYwb39/f7yhIY05o3wWaAGJvIsaFeAEwy2s8KK43/tsDIgCNtlNepiGTEH0PgK4XWRL0aykIuSQwO2JZdZKRBkobJRrK5n7tFnvTFiCciXQmMuj51RJGe2nwt9gyB5jfzqbGiDq+vr8/yxssncUv9jT8tV3zVkbLIaqvNAdTqQ5RCvSORBD/yj9LGJXQwiQBHx0Z25tnBcNBwY8plwEvQT2NKdLJvTiilztc6qOObScJv93m+PkvtBYmHBzL5dPtExZXDNbZjIvVcoa6CJLG7u9sCORJ1Uv4+RQU6sNnlyEMl+5MEKkcbZLkaYmKEOL+oekNhgQVeC/4Ayhnlou48aH8AAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Preparation of molds to recheck the seat pads.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAYAAABDClKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgB7dfLccIwEAZgKSeOTgfmBpzoIFBB0gF0QDoAOggVhHSQdEALOfG4RKkgvsGBR/5lEIONbUkr21zYmYwUeaX9wOMdI8Q97EIKzwjDMKjVagMp5cvhcPjEOJ3P57/CI9ioC8wr/g30OmAKw9QH54zKwiTDB2eNssUUgTOiuBgfnCwbw8HJqjAuOFk1xgZ3RjUajR9cCMWNgnCLxaJO8we9CJASN4zL+mcUvroutH1Mlag2Zqjbpfp6IfXpw63sQT7CNBTlYsa4ZbPkhdw+VRIuE2OF0lEQzohxQulg4qwxVygUfMLmYLlcfpk2WeKsMa1W63m73arVavUdQzWbzT8MwamZjXDYh+mwDJw1hvZTrVN/jPAEPsZQSBjiYl8XYODoJW/CwFCPina73Qh3aRJDnZIpqcfFcTD7/f5ts9lMlFKRzsvqU2GROFtMLqoonCvGCsXFcTFOKFucL+YKhZYwQIE2PeKm19U0XOxQBwydhbr0Hhfhg42TqGOfojmSphycKwaDbkMUCvXqMRQlIeEd045ec8Ehr71er2cMDEWs4cqUTR1sGHJwvhgdMueQQnAuGCPKF8fBWKNccT4YZ5QJh4H++j4YNioP54vxRulI4LwwhQf9whb3qDj+Ac7v/DBSy2iCAAAAAElFTkSuQmCC"
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAYAAABDClKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgB7dfLccIwEAZgKSeOTgfmBpzoIFBB0gF0QDoAOggVhHSQdEALOfG4RKkgvsGBR/5lEIONbUkr21zYmYwUeaX9wOMdI8Q97EIKzwjDMKjVagMp5cvhcPjEOJ3P57/CI9ioC8wr/g30OmAKw9QH54zKwiTDB2eNssUUgTOiuBgfnCwbw8HJqjAuOFk1xgZ3RjUajR9cCMWNgnCLxaJO8we9CJASN4zL+mcUvroutH1Mlag2Zqjbpfp6IfXpw63sQT7CNBTlYsa4ZbPkhdw+VRIuE2OF0lEQzohxQulg4qwxVygUfMLmYLlcfpk2WeKsMa1W63m73arVavUdQzWbzT8MwamZjXDYh+mwDJw1hvZTrVN/jPAEPsZQSBjiYl8XYODoJW/CwFCPina73Qh3aRJDnZIpqcfFcTD7/f5ts9lMlFKRzsvqU2GROFtMLqoonCvGCsXFcTFOKFucL+YKhZYwQIE2PeKm19U0XOxQBwydhbr0Hhfhg42TqGOfojmSphycKwaDbkMUCvXqMRQlIeEd045ec8Ehr71er2cMDEWs4cqUTR1sGHJwvhgdMueQQnAuGCPKF8fBWKNccT4YZ5QJh4H++j4YNioP54vxRulI4LwwhQf9whb3qDj+Ac7v/DBSy2iCAAAAAElFTkSuQmCC"
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Conducting quality inspections to ensure precision and
                        accuracy.
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
                    We deployed cutting-edge 3D laser scanning systems from NDI
                    Canada with engineering experts to tackle the challenges of
                    the projects and deliver the goals
                  </li>
                  <li>
                    {" "}
                    <br /> The process involved: <br />
                    <br />a swift and reliable process of reverse engineering
                    five seats, enabling further analysis.{" "}
                  </li>
                  <li>
                    <br /> achieving exceptional design accuracy with sheet
                    metal and plastic components within defined tolerance
                    limits.
                  </li>
                </ul>
              </div>
              <div className="how-img">
                <img src="/assets/t4-1b9b71c3.png" />
              </div>
            </div>
            <div className="page">
              <img src="/assets/p4-58130d41.png" className="page" />
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
                      <h1 className="font-face-futur-BK">Efficiency</h1>
                      <p className="font-face-futur-LT">
                        The use of advanced measurement technology significantly
                        expedited the project. Despite the increasing complexity
                        of the automotive seats, the entire project was
                        completed within a span of just 3 months.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Cost Savings</h1>
                      <p className="font-face-futur-LT">
                        Conducting all measurement activities in Japan rather
                        than dispatching physical components to India resulted
                        in substantial cost savings for Wipro. This strategic
                        choice helped control expenses and ensured the project's
                        success.
                      </p>
                    </div>
                  </div>
                  <div className="row-side">
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Accuracy</h1>
                      <p className="font-face-futur-LT">
                        Our meticulous approach to measurement and modelling
                        ensured precision and reliability. The submitted results
                        met the high standards of Japanese OEM, underlining
                        their quality.
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
                    In conclusion, our measurement solutions played a pivotal
                    role in WIPRO LIMITED's project to enhance automotive
                    passenger comfort and posture analysis.
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
                <Link to="/inner/10">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      Comprehensive Engineering Solutions To Revolutionize Solar
                      PV Plants{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Power</p>
                      <p>Owner’s Engineering</p>
                    </div>
                    <img src="/assets/id10-cb721387.png" />
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

export default Inner15;
