import React from "react";
import SliderMe from "../components/SliderMe";
import ShareIcons from "../components/ShareIcons";
import { Link } from "react-router-dom";

const Inner11 = () => {
  return (
    <>
      <section className="CaseInnerWrapper">
        <div className="CaseInnerContainer">
          <section className="InnerHero">
            <img
              src="/assets/3-60364677.png"
              alt="Reducing Maintenance Downtime to Just 30 Minutes With "
              style={{ width: "100%" }}
            />
            <h2 className="InnerHeroH1 font-face-futur-md-bt">
              Reducing Maintenance Downtime to Just 30 Minutes With{" "}
              <span className="orange">Indian Oil Corporation Limited</span>{" "}
            </h2>
            <div className="tagsD font-face-futur-HV" id="topGap">
            <Link to="/sectors/oil-gas" className="tags2">Oil & Gas</Link>
            <Link to="/services/as-built" className="tags2">As-built Engineering</Link>
            </div>
            <div className="bar">
              <h2 className="InnerHeroH2 font-face-futur-md-bt">
                <div className="lineabc" />
                The Problem at Hand
              </h2>
              <p className="font-face-futur-BK innerPara">
                Maintenance of coke drums within a Delayed Coker Unit (DCU) at
                the Digboi, Assam, location of Indian Oil Corporation Limited
                (IOCL) posed a significant challenge.
              </p>
            </div>
            <div className="why font-face-futur-md-bt">
              <h1>
                Why <span>SIXD?</span>
              </h1>
              <p className="whyPara font-face-futur-LT">
                `The traditional method of manually opening and closing valves
                during maintenance took an extensive 5-6 hours. IOCL sought a
                solution to reduce this downtime to just 30 minutes while
                addressing the complexities of installing new, heavy machinery
                in a pre-existing environment. <br /> <br /> Our expertise in
                digital twinning solutions and experience in tackling complex
                industrial challenges resulted in the successful completion of
                the project `{" "}
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
                        &nbsp;Laser Scanning
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQHSURBVHgB7Vg9UhsxFH62G6jiGeizNGCGAnOCrMtUISfAOQHOCXBOADkBpEuHOUE2ZSpMwQAFw6aHGTo8wwD5PiM5sqzd1f5kQsGb0axXWul9+vR+9CzyKi9cgiBosknFUpcKZXV1dXt+fv5qbm7uuNVqbUmFUpMKBKACPPZrtVpo9j89PUXo656dnf2WktKQkkIWAeY7WsseQ1+AR3dhYWF0c3PzS0pIYUZdLCoG9XuEZo7FHCvKbiEbBcgdKD02QMUA0sGzbwD7gsbxmO+K3ZhzpYDkAgol71ZWVgiwj9exZz8+Pu7d3d1tnJ+fR/b36PsJBpcAuK/7OBfrXMFk3koO8QLKcIOFd6EkqtfrbdU9JIsXFxef4zi+TZsPwGR3SUqwmwmULDLc4GdP95EhMOVkMQVsnMQudWTNTwRqsqgYoEQcIkNSUFzsUgd1pSUKJ1CbRSx0C1vsgZFOFTHRYlebTS8tUUwBTWIRC7Zhi1+lYlHsbsjzSWl2DwB233a2CVCyyPQnFbEIp3vj851itwPAXflrDl3GZNN2J0DNkEO5v7/v5GFRLXqg3xm2EMo++M4H4G/Y3KYoUyC7ANubAWpLo9E4XF5eXpcMSTCXsSIoHnBMPIQbfXh4GIhBFtZoZgKlIoAdpsW6tbW1dZfTqWOcOElWgHdt1JYZoLQNKjMAOzMJLyP4buhyOh6jcpKh3rQ4AjzvC8x09kZFOZcpNUPxDzxCAoWiDhfBRPYF+hsugr4jsS4j7E+yZ3Uv6BtdBL+pGvubZj8d18bCwcSjd2US2NwelF6ZlxGm1DSnswM8pK1+74lxX2CmS4sumSlUKQodQ0NeRk5PT0881tCbjuwx2jPvC1lreOV6McKOIW040q5PfWREhtAx3PcJY3lz/cAOzPT6tDDmSsdcA+1AvXuFMSfQpLCD4/uoPJoGPtCKksJYUjrmGmif8oSxGa9XE83jjNCcBRqObJsOpt91uYFnDe1Q3125UQTzvsvpVHQ5lGcn0zLGkOX1E5BZuZ6KXRdilinWBTsxMihH2zCji0wTJUlAxzvKCjuWoiWXIp+wY6yjw5izWpgAxaIDUxHzbp66horA5KZ+9w07WnRVK7NmNw1UHWMoJeoabNZkw/tqmFTVmpXE1NFXWTV6AvSuap02WkXVmCZFqtpcuT5P1ZgkRata31yfu2q0pWxV6/UHRJGq0ZQqqtrcf5KpTMIwEuo+5m2aBZ5jtlVfZzQaDVEw7ohxzJKS6SoFagDeUt4aKGDMSAMDFFNrV5Q3p6XRfwpUgQ3wYAzsZnwaSQEWTanqH+cpdieLP7PIDHUkJaX0P86U6+vrk8XFRYJpAtw4LtJuEbjfX15eZlYA/0XAbsgmr/LC5Q/xww8hGw5DSQAAAABJRU5ErkJggg=="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQHSURBVHgB7Vg9UhsxFH62G6jiGeizNGCGAnOCrMtUISfAOQHOCXBOADkBpEuHOUE2ZSpMwQAFw6aHGTo8wwD5PiM5sqzd1f5kQsGb0axXWul9+vR+9CzyKi9cgiBosknFUpcKZXV1dXt+fv5qbm7uuNVqbUmFUpMKBKACPPZrtVpo9j89PUXo656dnf2WktKQkkIWAeY7WsseQ1+AR3dhYWF0c3PzS0pIYUZdLCoG9XuEZo7FHCvKbiEbBcgdKD02QMUA0sGzbwD7gsbxmO+K3ZhzpYDkAgol71ZWVgiwj9exZz8+Pu7d3d1tnJ+fR/b36PsJBpcAuK/7OBfrXMFk3koO8QLKcIOFd6EkqtfrbdU9JIsXFxef4zi+TZsPwGR3SUqwmwmULDLc4GdP95EhMOVkMQVsnMQudWTNTwRqsqgYoEQcIkNSUFzsUgd1pSUKJ1CbRSx0C1vsgZFOFTHRYlebTS8tUUwBTWIRC7Zhi1+lYlHsbsjzSWl2DwB233a2CVCyyPQnFbEIp3vj851itwPAXflrDl3GZNN2J0DNkEO5v7/v5GFRLXqg3xm2EMo++M4H4G/Y3KYoUyC7ANubAWpLo9E4XF5eXpcMSTCXsSIoHnBMPIQbfXh4GIhBFtZoZgKlIoAdpsW6tbW1dZfTqWOcOElWgHdt1JYZoLQNKjMAOzMJLyP4buhyOh6jcpKh3rQ4AjzvC8x09kZFOZcpNUPxDzxCAoWiDhfBRPYF+hsugr4jsS4j7E+yZ3Uv6BtdBL+pGvubZj8d18bCwcSjd2US2NwelF6ZlxGm1DSnswM8pK1+74lxX2CmS4sumSlUKQodQ0NeRk5PT0881tCbjuwx2jPvC1lreOV6McKOIW040q5PfWREhtAx3PcJY3lz/cAOzPT6tDDmSsdcA+1AvXuFMSfQpLCD4/uoPJoGPtCKksJYUjrmGmif8oSxGa9XE83jjNCcBRqObJsOpt91uYFnDe1Q3125UQTzvsvpVHQ5lGcn0zLGkOX1E5BZuZ6KXRdilinWBTsxMihH2zCji0wTJUlAxzvKCjuWoiWXIp+wY6yjw5izWpgAxaIDUxHzbp66horA5KZ+9w07WnRVK7NmNw1UHWMoJeoabNZkw/tqmFTVmpXE1NFXWTV6AvSuap02WkXVmCZFqtpcuT5P1ZgkRata31yfu2q0pWxV6/UHRJGq0ZQqqtrcf5KpTMIwEuo+5m2aBZ5jtlVfZzQaDVEw7ohxzJKS6SoFagDeUt4aKGDMSAMDFFNrV5Q3p6XRfwpUgQ3wYAzsZnwaSQEWTanqH+cpdieLP7PIDHUkJaX0P86U6+vrk8XFRYJpAtw4LtJuEbjfX15eZlYA/0XAbsgmr/LC5Q/xww8hGw5DSQAAAABJRU5ErkJggg=="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Primitive Modeling
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIhSURBVHgB7ZjLbcJAEIaHxwFudBDnwPsAHQAdhAoSKgipIFBBkgpCB9BB6AByAnHBqSDkBBzA+QeZyEJ4veuMJRL5k1a74Nnd3+AZ7wxRzIVjWVaOGwmTJEFKpZKVzWaXmUxmIi1WVCi4QsslEgkLYuskiLTQyIiFSqMUCue4LZfLn2hPFBHY4xXrO+gbKjulUDgFOwR7b5cXJGF4Texxx2PHcW5UtkqhmPyCzuYxLygp1isSTLfbbV9lrxQ6n89tiG2Rptjdbvd1HMN2SZoi1+t1y7btFSlIkAYcyLHwG4YWf4b4AW6i42Pb5B7XxyQkUluoj9gexPTJANcpu6YiGe3wdPoYgCYZghttukMjkYxRHD2KRet4/j5t9vt9m+eaioyJ+Qv8hKdqtVpDwO6qjOEMz4vF4p0E0NkPDtubzWYfPE57RXjCh99Efu+3SQCd/RAhuDu8WNKeLwfJZDKHXpVCDEgICB2lUinlfrg2opiY/0yhUKhRCDjXD0o5/DBO7vg8CW+dFovFIRmC4sQQIWkcJlMwEuo99KIPffoJk9ZoCz09mW82m4dzdqraEx/xKGQOppuKaKUPbhYw4TFsrhU2WmmNl8Bf1DDHOdSeuPnVnkwTRi2hWOAxTCIWxDmxcM57CisUi62kRR45I/Z3a/MzZWDb4PKMW6JpGsyzgmwCn1G+c4oYnT3isqM0okJ1a08XQT6fr1cqFdH6fUwUfAOCNCz/ntnmXQAAAABJRU5ErkJggg=="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIhSURBVHgB7ZjLbcJAEIaHxwFudBDnwPsAHQAdhAoSKgipIFBBkgpCB9BB6AByAnHBqSDkBBzA+QeZyEJ4veuMJRL5k1a74Nnd3+AZ7wxRzIVjWVaOGwmTJEFKpZKVzWaXmUxmIi1WVCi4QsslEgkLYuskiLTQyIiFSqMUCue4LZfLn2hPFBHY4xXrO+gbKjulUDgFOwR7b5cXJGF4Texxx2PHcW5UtkqhmPyCzuYxLygp1isSTLfbbV9lrxQ6n89tiG2Rptjdbvd1HMN2SZoi1+t1y7btFSlIkAYcyLHwG4YWf4b4AW6i42Pb5B7XxyQkUluoj9gexPTJANcpu6YiGe3wdPoYgCYZghttukMjkYxRHD2KRet4/j5t9vt9m+eaioyJ+Qv8hKdqtVpDwO6qjOEMz4vF4p0E0NkPDtubzWYfPE57RXjCh99Efu+3SQCd/RAhuDu8WNKeLwfJZDKHXpVCDEgICB2lUinlfrg2opiY/0yhUKhRCDjXD0o5/DBO7vg8CW+dFovFIRmC4sQQIWkcJlMwEuo99KIPffoJk9ZoCz09mW82m4dzdqraEx/xKGQOppuKaKUPbhYw4TFsrhU2WmmNl8Bf1DDHOdSeuPnVnkwTRi2hWOAxTCIWxDmxcM57CisUi62kRR45I/Z3a/MzZWDb4PKMW6JpGsyzgmwCn1G+c4oYnT3isqM0okJ1a08XQT6fr1cqFdH6fUwUfAOCNCz/ntnmXQAAAABJRU5ErkJggg=="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Intelligent Modelling
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
                    Captured the complete DCU's intricate details, encompassing
                    piping, structures, equipment, supports, electrical
                    components, and instruments.
                  </li>
                  <li>
                    {" "}
                    <br /> <b>Utilising the captured scan data </b> within
                    Cyclone software, we meticulously reconstructed a primitive
                    model that faithfully replicated the exact geometry of the
                    existing plant. This model served as an essential
                    foundation, representing the facility's "As-is" condition.{" "}
                  </li>
                  <li>
                    <br /> <b>Building on the primitive model,</b> we leveraged
                    CADWorx software to transform the geometric model into an
                    intelligent model, incorporating structural standards and
                    advanced features.
                  </li>
                  <li>
                    <br />
                    We overcame several challenges during the project, most
                    notably dealing with vibrations caused by the ongoing
                    operations of the Coker Unit.
                  </li>
                </ul>
              </div>
              <div className="how-img">
                <img src="/assets/t3-004727cb.png" />
              </div>
            </div>
            <div className="page">
              <img src="/assets/p3-1d59de4b.png" className="page" />
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
                        Drastic Time Reduction
                      </h1>
                      <p className="font-face-futur-LT">
                        The traditional 5-6 hour maintenance process was
                        successfully reduced to a mere 30 minutes, greatly
                        minimizing downtime and enhancing operational
                        efficiency.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Clash Avoidance</h1>
                      <p className="font-face-futur-LT">
                        Our precise scanning and modelling allowed for
                        comprehensive clash detection. This proactive approach
                        prevented interference between the newly installed
                        machinery and existing equipment, averting potential
                        accidents and costly delays.
                      </p>
                    </div>
                  </div>
                  <div className="row-side">
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">
                        Structural Analysis
                      </h1>
                      <p className="font-face-futur-LT">
                        {" "}
                        The intelligent model facilitated in-depth structural
                        analysis of the facility. This capability provided
                        valuable insights into the structural integrity of the
                        plant, enabling IOCL to prioritize maintenance and
                        safety measures effectively.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Digital Twinning</h1>
                      <p className="font-face-futur-LT">
                        The project exemplified the concept of "Digital
                        Twinning," where a digital replica of the facility is
                        created. This digital twin not only optimized
                        maintenance but also provided IOCL with accurate
                        As-built drawings, simplifying future operations and
                        upgrades.
                      </p>
                    </div>
                  </div>
                  <p className="p-side font-face-futur-LT">
                    {" "}
                    In conclusion, digital twinning, supported by advanced
                    scanning and modelling techniques, enabled IOCL to
                    revolutionize their coke drum maintenance process. With
                    significantly reduced downtime, enhanced safety, and a
                    comprehensive digital twin, IOCL was well-equipped to meet
                    their operational challenges efficiently and effectively.
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
                <Link to="/inner/8">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      Physical Parts to Manufacturing Blueprints for Essential
                      Spares and Components.{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Otherst</p>
                      <p>Re-Engineering &amp; Supply</p>
                    </div>
                    <img src="/assets/id3c1-65ad2531.png" />
                  </div>
                </Link>
                <Link to="/inner/3">
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
                <Link to="/inner/1">
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

export default Inner11;
