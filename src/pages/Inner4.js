import React from "react";
import SliderMe from "../components/SliderMe";
import ShareIcons from "../components/ShareIcons";
import { Link } from "react-router-dom";

const Inner4 = () => {
  return (
    <>
      <section className="CaseInnerWrapper">
        <div className="CaseInnerContainer">
          <section className="InnerHero">
            <img
              src="/assets/13-9d0ef175.png"
              alt="Streamlining Project Management for"
              style={{ width: "100%" }}
            />
            <h2 className="InnerHeroH1 font-face-futur-md-bt">
              Streamlining Project Management for{" "}
              <span className="orange"> Green Hydrogen Plants</span>{" "}
            </h2>
            <div className="tagsD font-face-futur-HV" id="topGap">
            <Link to="/sectors/power" className="tags2">Power</Link>
            <Link to="/services/owners-engineering" className="tags2">Owner's Engineering</Link>
            </div>
            <div className="bar">
              <h2 className="InnerHeroH2 font-face-futur-md-bt">
                <div className="lineabc" />
                The Problem at Hand
              </h2>
              <p className="font-face-futur-BK innerPara">
                Addressing the intricacies of establishing Green Hydrogen plants
                from concept to production, ensuring seamless execution, and
                compliance with technical, economic, and environmental
                considerations.
              </p>
            </div>
            <div className="why font-face-futur-md-bt">
              <h1>
                Why <span>SIXD?</span>
              </h1>
              <p className="whyPara font-face-futur-LT">
                SIXD stands out as the preferred partner for Green Hydrogen
                projects, offering a holistic approach from market survey and
                research to post-execution operations. Our expertise encompasses
                feasibility studies, project management, and detailed technical
                assessments, ensuring the success of Green Hydrogen initiatives.
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
                        Conduct market analysis for site selection, aligning
                        with regulatory policies.
                        <br /> <br />
                        Formulate EPC specifications, emphasizing quality
                        assurance.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARrSURBVHgB7Vm7UhsxFL3rAGOquGBoWSpeRUyXDrtLB+mSKuYLIF061l262F8AlOmcL8B8AU7BYBcMmxqKrcANOOfYUkZe70O7NqHhznhWbx1dXZ17JYu8yvOIIzMU13VLCwsLK4VCodTtds9lxjITsARZLBYPHMc5RLakioPBYNBA2cnV1dUfmYG8kSllY2PjYH5+vgVQH5AtGlVFlFUAeG9paSm4u7v7LVNKbs2ur6/v4OMRkFHcxq85HNhxjgC0rCuQ9vGpTWMemcHGgPSfnp4Oe73er1DbL2jnIenqMoA+YVke07AGa9il96+z4wQA2ej3+03f94O4vgB9FLJngvay2nPBphHtcnFx8cYEqibk5C7q3sb15SJlpNmSWc6x0L9N7YulJGo2wS47+B0aZcOTD3usmyDDDKF3AtS2l8eenRiQLj7HSXap2nB7a6FJPbbFj7bpyvgia3rb89izEwP0TE+UZpebm5u71Ko5aUg6qP8KrbWjKsP2zAVjru2ouSZ4Fpz4w9To4+Pje2jzZxAE/ajJbm9ve+DQJvr56FeW8S3/BpD7qPclRlB3vry83EXyk+pXmpub67M83DZKszeh7bOmG+4K2tJOgzSGoNCucTiPZNz+KT7mWpU0sDj5A91Bxu2JeQ+aOpUZCBlGRvZtsoSv5wTYCWyx1EVt4sfVtZintsmL1DztVHIKGWZtbe0CyYYBtA2GKHPOpL6JPAstcjs+YpCajFY9BI18C5MeQzsrYg/SxY8HdwhMFfsYq4o5qpeXl6mxg5VT4NbThuh1DNA1pnmaFfFHCuvUib/QB5c2zbEeHh6241giN1gDdJ2aMLeLBw/kfxHliVhmeD5NTSf39/erHCvtAIZlTjIKTQOffQCpA8QZ0q5iD9qzp8JC5ic8H8rrWTQ5NdgQ6FXTEynQ5FuzKe3SikUYa4T6jkkSdVnza7lcLoFXc0VklCjXHUVdiWAN0J4ZpMSJcr0t1aeatuUx16FYsEkHzNcJaoz8mhbOQZPWBwZcu8uDaR4+7kZSnzSnUBWDX5VTOMvCr2GhU+AY4NqW4dZ5+Ko0G8kDlsJtVPxaM0BXZMSvO5JRtra23tEpmHzLsJNOwYYlrJ2C0rK5clcyCiK4bZ2mFsm3iOiatv2tnQKpCoCtB06duFBoZHUKmTzYS0sUWF99K/KfxfB4flT9BFjt99kxa2SVV1SwcyxKQbz1RrWbAAvuo136TCuP0mHUJM8H8kgFOzVV7Iev/LFgO51OEIqsStopIG19x08TsMFe2CnI6AZciXPvkYGMEVmdYjBujw5SPJmRkA2MrFVEltkpaOHrYBZ75pZjwWPXoWd1CuqmMOqIVxWxsGfTLpHd0+UcK6tTyPOK6ErCSwzdqSrj4t4i3wi/zOQNwqd5n61oe9ZlBK2BmelpQWqZ+pk+6s1qbALYJWICL8t2x8nUz/R8fsfTER/rAnXFHj7Vqxvsd9xgP19fX8/kz5CZ/ltDoXnwi+tMJ2ug8iovJX8BiSbQRfeSCm8AAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARrSURBVHgB7Vm7UhsxFL3rAGOquGBoWSpeRUyXDrtLB+mSKuYLIF061l262F8AlOmcL8B8AU7BYBcMmxqKrcANOOfYUkZe70O7NqHhznhWbx1dXZ17JYu8yvOIIzMU13VLCwsLK4VCodTtds9lxjITsARZLBYPHMc5RLakioPBYNBA2cnV1dUfmYG8kSllY2PjYH5+vgVQH5AtGlVFlFUAeG9paSm4u7v7LVNKbs2ur6/v4OMRkFHcxq85HNhxjgC0rCuQ9vGpTWMemcHGgPSfnp4Oe73er1DbL2jnIenqMoA+YVke07AGa9il96+z4wQA2ej3+03f94O4vgB9FLJngvay2nPBphHtcnFx8cYEqibk5C7q3sb15SJlpNmSWc6x0L9N7YulJGo2wS47+B0aZcOTD3usmyDDDKF3AtS2l8eenRiQLj7HSXap2nB7a6FJPbbFj7bpyvgia3rb89izEwP0TE+UZpebm5u71Ko5aUg6qP8KrbWjKsP2zAVjru2ouSZ4Fpz4w9To4+Pje2jzZxAE/ajJbm9ve+DQJvr56FeW8S3/BpD7qPclRlB3vry83EXyk+pXmpub67M83DZKszeh7bOmG+4K2tJOgzSGoNCucTiPZNz+KT7mWpU0sDj5A91Bxu2JeQ+aOpUZCBlGRvZtsoSv5wTYCWyx1EVt4sfVtZintsmL1DztVHIKGWZtbe0CyYYBtA2GKHPOpL6JPAstcjs+YpCajFY9BI18C5MeQzsrYg/SxY8HdwhMFfsYq4o5qpeXl6mxg5VT4NbThuh1DNA1pnmaFfFHCuvUib/QB5c2zbEeHh6241giN1gDdJ2aMLeLBw/kfxHliVhmeD5NTSf39/erHCvtAIZlTjIKTQOffQCpA8QZ0q5iD9qzp8JC5ic8H8rrWTQ5NdgQ6FXTEynQ5FuzKe3SikUYa4T6jkkSdVnza7lcLoFXc0VklCjXHUVdiWAN0J4ZpMSJcr0t1aeatuUx16FYsEkHzNcJaoz8mhbOQZPWBwZcu8uDaR4+7kZSnzSnUBWDX5VTOMvCr2GhU+AY4NqW4dZ5+Ko0G8kDlsJtVPxaM0BXZMSvO5JRtra23tEpmHzLsJNOwYYlrJ2C0rK5clcyCiK4bZ2mFsm3iOiatv2tnQKpCoCtB06duFBoZHUKmTzYS0sUWF99K/KfxfB4flT9BFjt99kxa2SVV1SwcyxKQbz1RrWbAAvuo136TCuP0mHUJM8H8kgFOzVV7Iev/LFgO51OEIqsStopIG19x08TsMFe2CnI6AZciXPvkYGMEVmdYjBujw5SPJmRkA2MrFVEltkpaOHrYBZ75pZjwWPXoWd1CuqmMOqIVxWxsGfTLpHd0+UcK6tTyPOK6ErCSwzdqSrj4t4i3wi/zOQNwqd5n61oe9ZlBK2BmelpQWqZ+pk+6s1qbALYJWICL8t2x8nUz/R8fsfTER/rAnXFHj7Vqxvsd9xgP19fX8/kz5CZ/ltDoXnwi+tMJ2ug8iovJX8BiSbQRfeSCm8AAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Evaluate subsidies and undertake feasibility studies
                        encompassing technical and economic aspects.
                        <br /> <br />
                        Manage the bid process, including RFP and tender
                        preparation, alongside plant layout studies for design
                        optimization.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKTSURBVHgB7VhNctowGP1szLBgUd+gyoaBYYF7gnKE3qD0BvQEpSdobpBwgjYnqHsDdwW7qieIuwJmAPd9VKaOI//GJiHxmxG2pWfpIev7kYieO4bD4WgwGNz2+/2rLC5zUH6hvKWSMKkkdrvdO1xswzAmWVzmoAjcjqkkSgs9NRqhVcPIIigDmKCIWJNQ646CIHDT+gBvrHgSFxltQ52P9m/L5XKe2geli7zKYywV4XKxWHxMakwUCpGfIHJ2IBmGj3/uUQ1A3w76tvke1xlm9rOWp6t0HMfebDa36lGuVqs3UkqfagAmhJfQVx4WxcdYF7qxtMa0Xq9H4T06mdYlkoEZlOGXA+x2uy10vEyr3+/3f6hmYIzjRLRaLVvHafxo1TgboRZnQVgjLu7tIi8WfU85+wmM50caD4b1HVnZvfdMDDamgiIZYfaUl182e1LvCavT6czhjtjqRKRdFIlI7KgpfbDU9lhf1xQJsxxsoO/G8jyPRd6Js5H4ngtJ0SQEPuWM8mOO/tx4ZWP1VaMRWjUs/un1eiPTNI+uhlMveiTA6kcw5iBax77XQuV7CLumJwJM2GW8DhonFlUATrKpZli8V8FAv6OVmH4H/+xL3k6KOPQcmGL8n+EDdPjYoniHGY072PgaSYBL/yKIyME9RJjtdnuTxWOROodf+tOr5OKCToTGj1aN8xaKXPO4oYPVvaK6RUSCTSJHV9ntdiUuh50h55pI015TTRBC2Ejej04euaf2oCPXSQlQ60kJqZ1C4ZOSEJhJdvpTOgE4s4fID0nteU7zOBfQ7Y8E/Xf2bkY3Y3WVdP80j5+1WX0l4KWBGQ+4ZHFD3kNygsaPVo0XIdRFkWofngrmcPaEQJKZPZ09/gKLshKf+6JflQAAAABJRU5ErkJggg=="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKTSURBVHgB7VhNctowGP1szLBgUd+gyoaBYYF7gnKE3qD0BvQEpSdobpBwgjYnqHsDdwW7qieIuwJmAPd9VKaOI//GJiHxmxG2pWfpIev7kYieO4bD4WgwGNz2+/2rLC5zUH6hvKWSMKkkdrvdO1xswzAmWVzmoAjcjqkkSgs9NRqhVcPIIigDmKCIWJNQ646CIHDT+gBvrHgSFxltQ52P9m/L5XKe2geli7zKYywV4XKxWHxMakwUCpGfIHJ2IBmGj3/uUQ1A3w76tvke1xlm9rOWp6t0HMfebDa36lGuVqs3UkqfagAmhJfQVx4WxcdYF7qxtMa0Xq9H4T06mdYlkoEZlOGXA+x2uy10vEyr3+/3f6hmYIzjRLRaLVvHafxo1TgboRZnQVgjLu7tIi8WfU85+wmM50caD4b1HVnZvfdMDDamgiIZYfaUl182e1LvCavT6czhjtjqRKRdFIlI7KgpfbDU9lhf1xQJsxxsoO/G8jyPRd6Js5H4ngtJ0SQEPuWM8mOO/tx4ZWP1VaMRWjUs/un1eiPTNI+uhlMveiTA6kcw5iBax77XQuV7CLumJwJM2GW8DhonFlUATrKpZli8V8FAv6OVmH4H/+xL3k6KOPQcmGL8n+EDdPjYoniHGY072PgaSYBL/yKIyME9RJjtdnuTxWOROodf+tOr5OKCToTGj1aN8xaKXPO4oYPVvaK6RUSCTSJHV9ntdiUuh50h55pI015TTRBC2Ejej04euaf2oCPXSQlQ60kJqZ1C4ZOSEJhJdvpTOgE4s4fID0nteU7zOBfQ7Y8E/Xf2bkY3Y3WVdP80j5+1WX0l4KWBGQ+4ZHFD3kNygsaPVo0XIdRFkWofngrmcPaEQJKZPZ09/gKLshKf+6JflQAAAABJRU5ErkJggg=="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Execute Pre-FEED/FEED processes, incorporating EPC
                        drawing reviews.Implement Third-Party Inspection (TPI)
                        for comprehensive quality assurance.
                        <br /> <br />
                        Manage projects and sites effectively by deploying
                        experts as needed.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAYAAAAu9HJYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOWSURBVHgB7Vi7UttAFL1+DLhgJs7AQDrkAsKjwHwBpksX0qXDfEGSL8B06QJfEPMFSbp0OGUqRMFrKBBlBphsGjDDADnXc1csimSvrQ1J4TOj2Yd2r47O7t17JaI+/lNMT0+Pk2NkySFA8AOKQEpnyJAjTE1NeZlM5tjo8vb390/IAVwquWo27u7uauQITpSMUZGhLi8vS0EQKEoJV0qGKkLBqlSLhULhDTlAapKiYpXrt7e3nw8ODjZRbXAb/W89zytSSrhQMlQRpDa4NPajEzVT7UlzL4JYAyou6ns4hrZQVMjB3kyrpOnRa+YNl2r2rGQ7FTVcqZmjLsGOMDo6+jybzb5nrtK9cnZ2FkTHjoyMBOJUhXw+/wxtNTQ09Esp1aQukEkiMjAwMA4iZW7yhYfp+gNvTVJRw1DThMI8H5eCXS59lKrZbO7EqR2SxPIt85ERRyQJbPj6+nrx6OjITxoDuwsYVxe7NtAvsH54ePjlAUm88TaKcsLEAJePczCAulw/YUNQMCBLzMzMlDG/CMJzKD1eJdSLsJP0TB+xf54red3DzOWNdbuGYhNLoFyEtr29Pa12g+Jf4CWeXzP56Hp4BHGkMEIayYQFFwQ7AQTnZKtpglWJXC088G546I545JIQXeI299NfgvhCHdVCHME/SD42UYMgJRFscUgyMDs7yxu8QeLpSQZcEORTAs96BfuNuLGJh/np6emPsbGxryD3Gs0CKzo8PKzOz8+/k2OCuCrw5ES7bSNODNEXWHreEt+od4KrsLNuEtzd3W27laxid3TpqcfvFzPe2xJkWGVBYqhGDoGXXrchyOgmVfOkVL1+BUqEUhF7HdENyVb44nBI6dCaLwmLFf4ZSXKtZLlcZofRThO0Gzs5OTlH7RFIWbT9JWNFEklG+GAsU+xm55QM13Eul/O55LMwbpy5ErZLbkXSNAbCfgy5LYxp4PJkPB819Tiy+N4JX/Lm5sYjVyTpPrMO07YIuYqQ4/DGB3UQIbvF47nP931l3HenJN3Hbz+JHOefFxcXJWTT7wYHB+clHw3kfoXHY95H2YddebhVxIHhn0JUkfFpoZXDFtiIyzs5wqBYNpNZgbbDZ+5TSktyYmKijC+97Wg/k7u6ulqzSYqF7Kr+HRNBxxDbcbnhrU/MNpaxzoZ5WW2zdo40uFYwtyTzTXulTvM7KslnJBT7JAbXknK+bmAoy2XV1c/WPvp4LPwGG8YFs6WX0eMAAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAYAAAAu9HJYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOWSURBVHgB7Vi7UttAFL1+DLhgJs7AQDrkAsKjwHwBpksX0qXDfEGSL8B06QJfEPMFSbp0OGUqRMFrKBBlBphsGjDDADnXc1csimSvrQ1J4TOj2Yd2r47O7t17JaI+/lNMT0+Pk2NkySFA8AOKQEpnyJAjTE1NeZlM5tjo8vb390/IAVwquWo27u7uauQITpSMUZGhLi8vS0EQKEoJV0qGKkLBqlSLhULhDTlAapKiYpXrt7e3nw8ODjZRbXAb/W89zytSSrhQMlQRpDa4NPajEzVT7UlzL4JYAyou6ns4hrZQVMjB3kyrpOnRa+YNl2r2rGQ7FTVcqZmjLsGOMDo6+jybzb5nrtK9cnZ2FkTHjoyMBOJUhXw+/wxtNTQ09Esp1aQukEkiMjAwMA4iZW7yhYfp+gNvTVJRw1DThMI8H5eCXS59lKrZbO7EqR2SxPIt85ERRyQJbPj6+nrx6OjITxoDuwsYVxe7NtAvsH54ePjlAUm88TaKcsLEAJePczCAulw/YUNQMCBLzMzMlDG/CMJzKD1eJdSLsJP0TB+xf54red3DzOWNdbuGYhNLoFyEtr29Pa12g+Jf4CWeXzP56Hp4BHGkMEIayYQFFwQ7AQTnZKtpglWJXC088G546I545JIQXeI299NfgvhCHdVCHME/SD42UYMgJRFscUgyMDs7yxu8QeLpSQZcEORTAs96BfuNuLGJh/np6emPsbGxryD3Gs0CKzo8PKzOz8+/k2OCuCrw5ES7bSNODNEXWHreEt+od4KrsLNuEtzd3W27laxid3TpqcfvFzPe2xJkWGVBYqhGDoGXXrchyOgmVfOkVL1+BUqEUhF7HdENyVb44nBI6dCaLwmLFf4ZSXKtZLlcZofRThO0Gzs5OTlH7RFIWbT9JWNFEklG+GAsU+xm55QM13Eul/O55LMwbpy5ErZLbkXSNAbCfgy5LYxp4PJkPB819Tiy+N4JX/Lm5sYjVyTpPrMO07YIuYqQ4/DGB3UQIbvF47nP931l3HenJN3Hbz+JHOefFxcXJWTT7wYHB+clHw3kfoXHY95H2YddebhVxIHhn0JUkfFpoZXDFtiIyzs5wqBYNpNZgbbDZ+5TSktyYmKijC+97Wg/k7u6ulqzSYqF7Kr+HRNBxxDbcbnhrU/MNpaxzoZ5WW2zdo40uFYwtyTzTXulTvM7KslnJBT7JAbXknK+bmAoy2XV1c/WPvp4LPwGG8YFs6WX0eMAAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Obtain project acceptance, regulatory approval, and
                        develop Operation &amp; Maintenance (O&amp;M) manuals.
                        <br /> <br />
                        Implement post-commissioning monitoring for ongoing
                        performance.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgB7VjLkdpAEB0BRRUnsxFYvvA7yRFYZMBGAI5gvREgIrA2AnAEtiNYOQOdgOKyEwK+8KsC/JptYVaMJKDEsAe9KtW0ND0zbz7dPS0hMmR43zCSFGq1mm0YhrXdbsubzcbP5XL+eDyWQjMiiRJBFF2QtMN1ID1A0dNJWEkUJNsgOBDxkCDc1EU2F/4Akia21yUZZKd4eiD0aTQaQTQ+4/MPVjXx9IUmGAqiAxBqk7xer+8nk8mvsE6j0XBB/oFkXlVPXBmF8AeQ/MLibxVJQrFYdFarVZsMDPotfPKCOkzCgtG1hBqSdC85Lm+IWpZVXi6XJskYzItq5Pv+FIQkNQFZK1TdJy8hYoBdc0C2J85ATlwIEJxGVP0RCcBEnGq1+k2cgaMzWq/XJYqPIEJb1FQ1IoPDYC/8+gRDO2lQ9slkgCaeKdrdiRNxtKKBWyL/iY67qkao+x7ImJDyHKvARvfEr2Wa8Kltj4wJhuLinJLV06o53Bm5JIlza8F1kbXbTHiAVfECA1osFq6Ucho3ICbmo13wSn1LcQlRNpR7dPiTyXZQ0iPy+fwb1dls9sjyzoBKpVIZ8lln71QojWk4HPrkH8V/575HEATm83kzWD3o3nH5QVwJhagK9nUdciXidYsoYtEqyqTtvQYKSQpMWIob42I/qhsZ0bSREU0bNyVKV0ROeRKhlWilUmnxpSTAA96fcRF6AeFOXFttRBGWuwjBu7CsqKZQ3Y+6BBG0EKXVQnh1SKYQDJnysK+Ug1EpOKDE3VMTI1MaAIFgpegGFs5cfUzEoyMgXsM06brhPq6+omwsJsm0kqp8ib8d3lPtsI6OrTcDAVmtH6UUuoCb4XqtVg9juvjWpYOoDASsWitGz1a1CXB1opQnkaXvBkMao8qTOFncG5zqh4YWqycjQkEJIRF6BjF697jaZpLmga64CVEkgC4cfhkkdoRC0WkP9goDVV2qWw8Cf6PqkIc5h8491I6OxiNIOpF9ixSAWN1iQ3FO+a906FsBiTTbv0UeliFDmvgHKV9ehaJM6JsAAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgB7VjLkdpAEB0BRRUnsxFYvvA7yRFYZMBGAI5gvREgIrA2AnAEtiNYOQOdgOKyEwK+8KsC/JptYVaMJKDEsAe9KtW0ND0zbz7dPS0hMmR43zCSFGq1mm0YhrXdbsubzcbP5XL+eDyWQjMiiRJBFF2QtMN1ID1A0dNJWEkUJNsgOBDxkCDc1EU2F/4Akia21yUZZKd4eiD0aTQaQTQ+4/MPVjXx9IUmGAqiAxBqk7xer+8nk8mvsE6j0XBB/oFkXlVPXBmF8AeQ/MLibxVJQrFYdFarVZsMDPotfPKCOkzCgtG1hBqSdC85Lm+IWpZVXi6XJskYzItq5Pv+FIQkNQFZK1TdJy8hYoBdc0C2J85ATlwIEJxGVP0RCcBEnGq1+k2cgaMzWq/XJYqPIEJb1FQ1IoPDYC/8+gRDO2lQ9slkgCaeKdrdiRNxtKKBWyL/iY67qkao+x7ImJDyHKvARvfEr2Wa8Kltj4wJhuLinJLV06o53Bm5JIlza8F1kbXbTHiAVfECA1osFq6Ucho3ICbmo13wSn1LcQlRNpR7dPiTyXZQ0iPy+fwb1dls9sjyzoBKpVIZ8lln71QojWk4HPrkH8V/575HEATm83kzWD3o3nH5QVwJhagK9nUdciXidYsoYtEqyqTtvQYKSQpMWIob42I/qhsZ0bSREU0bNyVKV0ROeRKhlWilUmnxpSTAA96fcRF6AeFOXFttRBGWuwjBu7CsqKZQ3Y+6BBG0EKXVQnh1SKYQDJnysK+Ug1EpOKDE3VMTI1MaAIFgpegGFs5cfUzEoyMgXsM06brhPq6+omwsJsm0kqp8ib8d3lPtsI6OrTcDAVmtH6UUuoCb4XqtVg9juvjWpYOoDASsWitGz1a1CXB1opQnkaXvBkMao8qTOFncG5zqh4YWqycjQkEJIRF6BjF697jaZpLmga64CVEkgC4cfhkkdoRC0WkP9goDVV2qWw8Cf6PqkIc5h8491I6OxiNIOpF9ixSAWN1iQ3FO+a906FsBiTTbv0UeliFDmvgHKV9ehaJM6JsAAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Generate As-Built drawings, ensuring comprehensive
                        project documentation.
                        <br /> <br />
                        Facilitate the seamless transition of the plant crew
                        from EPC to the O&amp;M team.
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
                    Our team of experts navigated the challenges of establishing
                    Green Hydrogen plants through a meticulous three-stage
                    process.
                    <br /> <br />
                    Starting with comprehensive feasibility studies and
                    environmental impact assessments, followed by detailed
                    project execution and management, and concluding with
                    post-execution operations, the problem was systematically
                    addressed at every phase.
                    <br /> <br />
                    Collaboration with EPC partners, deployment of expert teams,
                    and adherence to quality assurance protocols ensured a
                    successful outcome.
                  </li>
                </ul>
              </div>
              <div className="how-img">
                <img src="/assets/t13-fc0653e4.png" />
              </div>
            </div>
            <div className="page">
              <img src="/assets/p13-fdb166dd.png" className="page" />
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
                      <h1 className="font-face-futur-BK">Precision</h1>
                      <p className="font-face-futur-LT">
                        Achieved through meticulous planning and expert-led
                        project management.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Cost Saving</h1>
                      <p className="font-face-futur-LT">
                        Streamlined project costs through efficient bid
                        management and third-party inspections.
                      </p>
                    </div>
                  </div>
                  <div className="row-side">
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">
                        Environmental Compliance
                      </h1>
                      <p className="font-face-futur-LT">
                        Ensured adherence to environmental standards through
                        thorough assessments.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">
                        Uninterrupted Operations
                      </h1>
                      <p className="font-face-futur-LT">
                        Seamless transition from EPC to O&amp;M, facilitating
                        continuous plant operations.
                      </p>
                    </div>
                  </div>
                  <p className="p-side font-face-futur-LT">
                    Our end-to-end solutions have not only effectively tackled
                    the complexities of Green Hydrogen projects but have also
                    led to significant advancements in precision, cost
                    optimization, environmental compliance, and seamless project
                    transition for ongoing operational success.
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
                <Link to="/inner/3">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      Precise Revamping and Modernization for Offshore Platforms{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Oil &amp; Gas</p>
                      <p>As-built Engineering</p>
                    </div>
                    <img src="/assets/id4c1-a86d3ef5.png" />
                  </div>
                </Link>
                <Link to="/inner/17">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      End-to-End Owner’s Engineering Solutions Form Power Plant
                      Excellence{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Power</p>
                      <p>Owner’s Engineering</p>
                    </div>
                    <img src="/assets/id4c2-972761eb.png" />
                  </div>
                </Link>
                <Link to="/inner/18">
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
                    <img src="/assets/id4c3-02851a0a.png" />
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

export default Inner4;
