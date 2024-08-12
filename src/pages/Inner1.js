import React from "react";
import ShareIcons from "../components/ShareIcons";
import { Link } from "react-router-dom";

const Inner1 = () => {

  return (
    <>
      <div>
        <section className="CaseInnerWrapper">
          <div className="CaseInnerContainer">
            <section className="InnerHero">
              <img
                src="/assets/9-a7c4c096.png"
                alt="Revolutionising Measurement and Alignment Procedures with the "
                style={{ width: "100%" }}
              />
              <h2 className="InnerHeroH1 font-face-futur-md-bt">
                Revolutionising Measurement and Alignment Procedures with the{" "}
                <span className="orange">Steel Sector</span>{" "}
              </h2>
              <div className="tagsD font-face-futur-HV" id="topGap">
                <Link to="/sectors/steel" className="tags2">
                  Steel
                </Link>
                <Link to="/services/dimension-control" className="tags2">
                  Dimension Control
                </Link>
              </div>
              <div className="bar">
                <h2 className="InnerHeroH2 font-face-futur-md-bt">
                  <div className="lineabc" />
                  The Problem at Hand
                </h2>
                <p className="font-face-futur-BK innerPara">
                  NMDC, an Indian public sector undertaking involved in the
                  exploration of iron ore, copper, and other important minerals,
                  was facing a problem in achieving and maintaining precise
                  alignment of critical mill machines, which was highly
                  downgrading the overall efficiency and production of the
                  plant.
                </p>
              </div>
              <div className="why font-face-futur-md-bt">
                <h1>
                  Why <span>SIXD?</span>
                </h1>
                <p className="whyPara font-face-futur-LT">
                  Being technically equipped for the specified area and the
                  quick learning ability of our experts made us perfect for
                  solving this problem for NMDC.
                </p>
              </div>
              <div className="section-inner">
                <div className="lineabc2" />
                <h1 className="section-heading-inner font-face-futur-BK">
                  Scope of Work
                </h1>
                <div className="card-container-inner">
                  <p className="font-face-futur-LT" />
                  <div className="pppp">
                    The scope of the project was comprehensive and aimed at
                    achieving the highest level of alignment precision within
                    NMDC's industrial facility.
                  </div>
                  <p />
                  <div id="topGap2">
                    <div className="card-inner">
                      <div className="card-content-inner">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgB7de/DYJAFAbwd8SGSjbwSqC6EW4DHYERXMUJ1BGcQB3Bij+NuAFWhALwGRsCF6MFnsbv1xBeXsJxefk4iAAA4C+IfsH3/bUQQpM9RV3XUZZlp25x0u/iRUZkmeM4C748X2jbthFfNFnCzy+qqloRwI8xxdP+E/HUNM0iTdPdq/1O90Yp5X0wQ/U7zYMdDcNwzm+raES8GUVZlts8zwsCeE6YikEQzMgSnt2raXZN8XTmYZdkEX/vdZIkx27NFE8e2Sf7BdOO3ps0WcS7uSGAh8GMSik913WnNLI4ji/v9FuLJz5PLPn09PIvx7fG04AxnnixikN3zAXnHEEHAgAA6LsBDU9UUavs71gAAAAASUVORK5CYII="
                          alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgB7de/DYJAFAbwd8SGSjbwSqC6EW4DHYERXMUJ1BGcQB3Bij+NuAFWhALwGRsCF6MFnsbv1xBeXsJxefk4iAAA4C+IfsH3/bUQQpM9RV3XUZZlp25x0u/iRUZkmeM4C748X2jbthFfNFnCzy+qqloRwI8xxdP+E/HUNM0iTdPdq/1O90Yp5X0wQ/U7zYMdDcNwzm+raES8GUVZlts8zwsCeE6YikEQzMgSnt2raXZN8XTmYZdkEX/vdZIkx27NFE8e2Sf7BdOO3ps0WcS7uSGAh8GMSik913WnNLI4ji/v9FuLJz5PLPn09PIvx7fG04AxnnixikN3zAXnHEEHAgAA6LsBDU9UUavs71gAAAAASUVORK5CYII="
                          className="card-icon-inner"
                        />
                        <p className="card-paragraph-inner font-face-futur-LT innP">
                          The alignment of critical components, including pinion
                          stands, gearboxes, and motors, all with respect to the
                          mill's centerline. These alignments were to be done
                          based on established benchmarks.
                        </p>
                      </div>
                    </div>
                    <div className="card-inner">
                      <div className="card-content-inner">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMrSURBVHgB7Vg9dtpAEF6UBqpQQG2lAh5FuIFJl86+gblBuIHJDcgJIt/APoHFCSIK/rpNT4EroADyjd6sLVZCWgnp8V7s7z29HUmzu9+bnZ2dWSE+8I5QEjnAtu1qpVL5TPJsNvsrckYmku12++tut7uF2C2VSh20VU3F2+/3Ev8eN5vNk5RyJc5AKpLNZvMazQCTd037HA4HnyzEYVYrG5Hk5byH2D/qXCp5sKhrWZYEmRf+fMXWpccOkkUzmM/nDyIlEknCejaaZ0xsM7EVlnII8QETyri+rVaLXOIHnq54I0tEf4q8SOoEARdPL+2yYZw7jDEQbNm0RE+SpCUul8t/FMEsFtCI2hjrWRHFavQXi8Uvk77WqR/kg3kRJJBrYJxvEKU/sWUNeSNmI0khRrxtEvdcggpEFOTIT1VIGpj0iyTJG0OhJ3LEZDIZw6L++BTKTKwZIsmbpUsyBnOKOEHg6+SLxtaMsuSdEnhH5g7P84igw3N0aZPG6YdIBk4TrwgrKmCVHpUMy97E6UZZkk4K8ktXFAgQGysZhDtxukckO50OmV2ZXooCwUsuScbqmS83MpZXZTr+RPGQ3NpxSpa4LKomSkcktYTBFsXD5lbGKUVZUmoDFAKOx74lsXG8ON0QSXRwqYVP3opi8XrSYK5xnGKUJUfcVk0TgCwAsR6LEm7mxumGSCJ+UZBNlQCkhXb0ukn6IZIUv4IJQKPRuBH547cSTI7eyBAUTACQWjkoA65EToAV79XRS9mWydEbSZKsGfCZKi1JHkQDZQRBbrdbozz1ZDCfTqdPlJGTTBn6uUTZgo56Jyua1uOf4n4ul8tRrVbzfZPP1z691+t1iX8vwozcNfo4gZXxgffv+E7jjJPGMKq72QoD9c41tIvHQfgY6fpcxNGG62kXCVTnONpYvaRa3PgGQ6/2NEi+qVBZVEiHlpd8kJaYfdMxJZr6Logn6IlAwX9ycGRSuOFwqDLUd3Eaoplv1diyHQxOlaXN5S/FWIoMHtpx0kliSjSXq79zYEL04iQJGtHVer3+EgxPl056fZDlyIL8ujr3PrNQUOhKKm8/8N/jH3czjWCvn4QjAAAAAElFTkSuQmCC"
                          alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMrSURBVHgB7Vg9dtpAEF6UBqpQQG2lAh5FuIFJl86+gblBuIHJDcgJIt/APoHFCSIK/rpNT4EroADyjd6sLVZCWgnp8V7s7z29HUmzu9+bnZ2dWSE+8I5QEjnAtu1qpVL5TPJsNvsrckYmku12++tut7uF2C2VSh20VU3F2+/3Ev8eN5vNk5RyJc5AKpLNZvMazQCTd037HA4HnyzEYVYrG5Hk5byH2D/qXCp5sKhrWZYEmRf+fMXWpccOkkUzmM/nDyIlEknCejaaZ0xsM7EVlnII8QETyri+rVaLXOIHnq54I0tEf4q8SOoEARdPL+2yYZw7jDEQbNm0RE+SpCUul8t/FMEsFtCI2hjrWRHFavQXi8Uvk77WqR/kg3kRJJBrYJxvEKU/sWUNeSNmI0khRrxtEvdcggpEFOTIT1VIGpj0iyTJG0OhJ3LEZDIZw6L++BTKTKwZIsmbpUsyBnOKOEHg6+SLxtaMsuSdEnhH5g7P84igw3N0aZPG6YdIBk4TrwgrKmCVHpUMy97E6UZZkk4K8ktXFAgQGysZhDtxukckO50OmV2ZXooCwUsuScbqmS83MpZXZTr+RPGQ3NpxSpa4LKomSkcktYTBFsXD5lbGKUVZUmoDFAKOx74lsXG8ON0QSXRwqYVP3opi8XrSYK5xnGKUJUfcVk0TgCwAsR6LEm7mxumGSCJ+UZBNlQCkhXb0ukn6IZIUv4IJQKPRuBH547cSTI7eyBAUTACQWjkoA65EToAV79XRS9mWydEbSZKsGfCZKi1JHkQDZQRBbrdbozz1ZDCfTqdPlJGTTBn6uUTZgo56Jyua1uOf4n4ul8tRrVbzfZPP1z691+t1iX8vwozcNfo4gZXxgffv+E7jjJPGMKq72QoD9c41tIvHQfgY6fpcxNGG62kXCVTnONpYvaRa3PgGQ6/2NEi+qVBZVEiHlpd8kJaYfdMxJZr6Logn6IlAwX9ycGRSuOFwqDLUd3Eaoplv1diyHQxOlaXN5S/FWIoMHtpx0kliSjSXq79zYEL04iQJGtHVer3+EgxPl056fZDlyIL8ujr3PrNQUOhKKm8/8N/jH3czjWCvn4QjAAAAAElFTkSuQmCC"
                          className="card-icon-inner"
                        />
                        <p className="card-paragraph-inner font-face-futur-LT innP">
                          We conducted an in-depth survey of the existing
                          benchmarks and the roughing mill, establishing a
                          precise coordinate system according to the facility's
                          layout.
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
                          We provided expert guidance in positioning machinery
                          components, such as roughing and finishing pinion
                          stands, roughing and finishing gearboxes, and motors.
                          This ensured perfect placement to optimize mill
                          performance.
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
                      Our Dimension Control experts utilized the
                      state-of-the-art 3D laser scanning and controlled surveys
                      to capture precise data in real-time.
                    </li>
                    <li>
                      {" "}
                      <br />
                      Swift analysis and processing of the collected data,
                      allowed for instant feedback and adjustment.
                    </li>
                  </ul>
                </div>
                <div className="how-img">
                  <img src="/assets/t9-8d82817e.png" />
                </div>
              </div>
              <div className="page">
                <img src="/assets/p9-997907ea.png" className="page" />
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
                          Enhanced Accuracy
                        </h1>
                        <p className="font-face-futur-LT">
                          The alignment precision achieved far exceeded what
                          could be attained with traditional methods. This led
                          to higher product quality and reduced defects.
                        </p>
                      </div>
                      <div className="card-main-side">
                        {" "}
                        <span className="deco4" />
                        <h1 className="font-face-futur-BK">
                          Cost &amp; Time Savings
                        </h1>
                        <p className="font-face-futur-LT">
                          The traditional methods were labour-intensive and
                          time-consuming. SIXD's efficient approach saved NMDC
                          substantial labour costs and reduced lead times.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="row-side">
                      <div className="card-main-side">
                        {" "}
                        <span className="deco4" />
                        <h1 className="font-face-futur-BK">
                          Improved Shutdown planning
                        </h1>
                        <p className="font-face-futur-LT">
                          Real-time reports allowed NMDC to plan shutdowns more
                          effectively. This not only saved time but also
                          optimized maintenance schedules, minimizing
                          disruption.
                        </p>
                      </div>
                      <div className="card-main-side">
                        {" "}
                        <h1 className="font-face-futur-BK" />
                        <p className="font-face-futur-LT" />
                      </div>
                    </div>
                    <p className="p-side font-face-futur-LT">
                      In conclusion, by partnering with SIXD and embracing
                      advanced measurement solutions, NMDC successfully
                      addressed their alignment challenges, achieving
                      unparalleled precision, efficiency, and cost savings in
                      their industrial operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sharemy">
                <div className="sharex">
                  <h1 className="font-face-futur-md-bt">
                    Share this Case Study
                  </h1>
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
                  <Link to="/inner/6">
                    <div className="cardmax">
                      <h1 className="font-face-futur-md-bt">
                        {" "}
                        Indigenising the alignment of critical diaphragms with
                        NTPC{" "}
                      </h1>
                      <div className="tagsmax font-face-futur-md-bt">
                        <p>Steel</p>
                        <p>Dimension Control - DPM</p>
                      </div>
                      <img src="/assets/id1c1-969f7679.png" />
                    </div>
                  </Link>
                  <Link to="/inner/14">
                    <div className="cardmax">
                      <h1 className="font-face-futur-md-bt">
                        {" "}
                        Precise Revamping and Modernization for Offshore
                        Platforms{" "}
                      </h1>
                      <div className="tagsmax font-face-futur-md-bt">
                        <p>Oil &amp; Gas</p>
                        <p>As-built Engineering</p>
                      </div>
                      <img src="/assets/id2c2-e39b768b.png" />
                    </div>
                  </Link>
                  <Link to="/inner/10">
                    <div className="cardmax">
                      <h1 className="font-face-futur-md-bt">
                        {" "}
                        Enhancing Passenger Comfort with Wipro Limited{" "}
                      </h1>
                      <div className="tagsmax font-face-futur-md-bt">
                        <p>Othersr</p>
                        <p>Re-engineering &amp; Supplyy</p>
                      </div>
                      <img src="/assets/id2c3-b1da4615.png" />
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
        <div className="sliderme">
          <div className="carousel-container">
            <div
              className="slides-wrapper"
              style={{ transform: "translateX(-3225px)" }}
            >
              <div className="slide">
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    We truly appreciate collaborating with your company in March
                    2022. The work executed by your team significantly improved
                    our mill performance. As previously discussed, we're keen to
                    strengthen the partnership between ESA and SixD by
                    leveraging your Service and solutions. The team from Six was
                    very Cooperative with us and Completed the Job plan In very
                    professional way and we are going to call them next year to
                    Complete the alignment of all our lines.
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">Mohamed Albeshr</p>
                    <p className="author-description">
                      Manager - RM 1,2,3&amp;5-RM123&amp;5, Emirates Steel Arken
                    </p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
              </div>
              <div className="slide">
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    Unimaginative support from SixD for the execution of
                    alignment job on priority at PT Jindal Indonesia on a very
                    short notice
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">SHANKAR LAL SHARMA</p>
                    <p className="author-description">
                      Head-Mechanical Maintenance at Jindal Stainless Ltd
                    </p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
              </div>
              <div className="slide">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAFJCAYAAABZ3kkUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAphSURBVHgB7d1PbBxXHcDx36zXdiqRZoOqSkGinYjY7aEIU7iBxLZJL1CpG3EpEiKOSCL1gJJwQJyahDNqwgmJtEo4wQmMVBAS+eNIIAEtjflzIHFKNiARlQNxmiIa78483m+9Yzb2rj3zZmbHm/l+1CTb9bjq7/32/d6feeOIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgiTx5Cdxp+rSITR0Px7u6cu3ZGRlBeMTxUCY8ayYg5Zv+1Zn8tGWl9eudcsykjok8MYmPYnVUMFXlI3G1Mn/Bk/KZtqJPSbSj90753TkbE3cZTR/vEIFnGMPI9/E5jT90TTxvEH3SNETm4c27xvGxR3RhO25czg64xUjmeRWkf2YSvlL7xEzaZx2JcvtQti0uyhRQRw0iW9DuNp31b5q7GbCjVaVjZQroxXE4SgycTqUv7yCX8/f3TBzwJrsoGJbwfbVgtnbIF3Gl8otGNYSbZd5pG2hhGKuE6MQuNOS89E5okdKzXMioFWplcVn4qBcUwMgnXhurOXtPwRapxS2jmsoohzfA0EpO2u42pc7Ykz0o2ClmbZ5TsVbY9bAyLC5LQlu/hKw2VWbLV0NfmWSdb2Z56WhxUZYvas+9s/Wvjb9kdp8sNyZbt4eaKDIHG8OXqnw4Y+eWsZMs5hi2XcG0kW3bq35icf2lcwpnb4Q7ZVbkrGdBG+p5I+0ze6/FODKZy4Kvjv6s9XrnXuB4+LtOVf0kGUsewZcbwp+vf98OxiROBmJ+9vf27C91lS+21+3vlm5MXJQ0joW2k4GTeiY5iMCa48vtHX5uPYji7/Dk5PPEbScebM7J8MG0MhSfcr5+rTVbbs3acrl2/cPikvrfUmLop3XX2H4InZNH2kJfH3xYH2iP275y7MS85imLQ1/fb1fPN+YNLvTFoD3/HxuEeQ2gT/e6cZKDQkq6lzzNBwzbSSW0kfc/OyE+bnk2Vz4z93TbWx+WemZTt3n1JYMHOxvfnPRtfKd/t2fvtto3hlaa+152k+dE1Ws414Q7DU9PG8FyWMRTSw7VHTFTbxwLjLbx78dDqJ3dluzG4ufZ6TfaPW59NUhYXug2Vawmf3nf2pAlNc/HSkfPRexvFcHp5r7w6+QuJKZcYht7DdZwLxoJjy+32mahHRGxDXe73Pdqzp2wv0fKuPX4TuSd7JYaJE8vt5VNJYvhS9S+FxzDUhGv5C+0MfPHCoXW7XXcaU7Oywf54vboo3/nwi7Y8vrdRaW/mneyp+g9mTNWzMXz94NqvbRaDJlonoTFi2J9XDEPbeHnqhdePjtmbBdHEbC07tmy6Xagl/eftTw768lLeyZ7e+/oBr+o1rl043Pe+dLwYft0ZngZYynrMXmsoCZ/e98aJMAjvDmqozXpGJJrw6Kx3LTvRO55nQ2kMxoTeoA9s3Bi0Z+svLe1r2YneqbwnmbknvNNQYXCrd2KzVpyeEdGlzZX21Jp3zVyeJ1qGE4M07fIx9wOXuSZcy/hmDdW9v+tLAl+w43lvWTTSPi450TKeRwxfsUl/MIbWczIEuSVcJ2jGmJ0bNdTK/4B3QBLQtWxv77A963xeZVAnaOKZ3XnE8Gb7GfmIrEzc8oxhrVxm6Z1lS2j865eOnNzsWjv21iUGbaQf2R6h49/L42+tznJDaZ2SHGgMOhu/NmDM7hU3Bl2Ln13+fJ8YzA9lSHJJeDg2fnrx4qH9m10XtxRqb/jAbOvMcB9czpj5vHpGWB0/ff1CnBim9JiSv9l1UfleH0Nn7J6XIck84VPPvzG7HCzHHFNNY6PNvqhX63jXb0vSiJdLz9jz/Fm7MdSKG0M9Tgwvjv+57x0zWx1yqVCDZJpwHbclDGTt7tMgnlQ+NehrumzR/eeN75S15iVjnVJuZzY3LsWNwXtp0NeimyZ9enWP7GPYSKYJ1/vYccbtHvV+b77ZekZum1qnoQbLp5wbOxxdi1HKe/Q9eaoxfCDbNrtDtjDso1aZzdJ1rWr3x8/HvX7Qcdt4ye6UwsxPrehwdD9oxV7idcfvdSdIdRWhMWx2O9Te9hzKyZtemSRcy6Cd5nhxS3nXup6hJTBOsrvmJUMag1cJ/WQxhP7ad3TMvm12FBJDHJkkPKxWZ5P07hX/v1+sovV1zIay2olPbG4krE4cSB6D98CHNlpfxz/oEMzLkKVOeGeSY7xawt69bsKWrKE6Y1/GN0kSVyidm6+L4UV7CzSmpSKedUud8KAyUW8FLZc9YD96oQ2lS5a4J1rscuyWZKizlEzcu5XnR680hl3e+wlOtJhMK1Rc6Uv6mJlJ2jO6/OiFlkLdH48vzLSxko/dq1ZLusaga+247J2xP0oBUiW8s9ccJG98PQYUvU5YBrtMUzLSGZLC5P+93ue73GLwmlKAVAnXwwCtcNzhNGXbj165nTvPrrFMtWpjcJk8VVd7t26uOJydH82SHp02TcZ0esfK+a5/SHJeZpMdPR7tWM47NIZnKy4xFMM54Xry1M5SHRve8/V3PX787OYH+vpoNSUDGoM483z9XWNIMnZHtlXWn2wdBueEj40F9cC9LHUa+p69A+Yiq+VMtdqeCZ03Px7cR0jqkZ/czHSlEZdzwnXf/MaFw/PixNS0FNYTzcxXNSUjGkO7XXUeSzWGjJ4ZGxrnhHueSdHLKjXdVXMr59lym4Moz9dHoBxjaEpBCnk+3I79T273PhRHQ9+dGuSfdoWR8PGnwjndHl2ZsLWLaviZpcaUEQd6dmzH3GLnAYK0MaT80PquMeht4drcDecDj049XCc7KSZsnXVr0WNfFjHoVuqocUq4PkEShJ7zsuJv4WNZPeTvTG/4pJmH/Ns8Ih8rOAYXTgnXzYqblw45LytuhR/1i+7hY56ZWfzVEecefjV4UqYq78moeWh+uO6waQ8ftQmbIuGOHvP+48sIcivpdvwTjCSnhKfbdBGZ9Fp8YApSSEmflPbIJ/xR77++jKDECXc9MND7/bu80VvOPCxKOWkr84c28dZqu1r1JcXmfyBjtXfCJ+T28g5J6l7fBwqLkSaGQc/KDcPQf4rT4vyRhVcbU01J+AC9ip4iTZvwtB/av86/0vytYwx6S1UfVNglxSScdXjJJE542j1oFCtxwisVr9YOKncEI4mSXjKlTLjnVfw0t3dHGT28ZEh4yZDwkiHhJUPCS4aElwwJLxkSXjIkvGRIeMmQ8JIh4SVDwkuGhJcMCS+ZQv6y2drc4m5xMPXCt2fbgbmc5snVrLjGsGfft+r6p/vPx0mHHl4yJLxkSHjJkPCSIeElQ8JLhoSXDAkvGRJeMiS8ZEh4ySTfS28FC+NV7+D0vrMydCa0/1TTP0lfZAyW21+ZBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCR/wFIwXtiH6cuYgAAAABJRU5ErkJggg=="
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    Good and experienced team of survey the instrument used is
                    very high accuracy level over all we are satisfied.
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">JSW Bellary</p>
                    <p className="author-description"> </p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
              </div>
              <div className="slide">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAFJCAYAAABZ3kkUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAphSURBVHgB7d1PbBxXHcDx36zXdiqRZoOqSkGinYjY7aEIU7iBxLZJL1CpG3EpEiKOSCL1gJJwQJyahDNqwgmJtEo4wQmMVBAS+eNIIAEtjflzIHFKNiARlQNxmiIa78483m+9Yzb2rj3zZmbHm/l+1CTb9bjq7/32/d6feeOIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgiTx5Cdxp+rSITR0Px7u6cu3ZGRlBeMTxUCY8ayYg5Zv+1Zn8tGWl9eudcsykjok8MYmPYnVUMFXlI3G1Mn/Bk/KZtqJPSbSj90753TkbE3cZTR/vEIFnGMPI9/E5jT90TTxvEH3SNETm4c27xvGxR3RhO25czg64xUjmeRWkf2YSvlL7xEzaZx2JcvtQti0uyhRQRw0iW9DuNp31b5q7GbCjVaVjZQroxXE4SgycTqUv7yCX8/f3TBzwJrsoGJbwfbVgtnbIF3Gl8otGNYSbZd5pG2hhGKuE6MQuNOS89E5okdKzXMioFWplcVn4qBcUwMgnXhurOXtPwRapxS2jmsoohzfA0EpO2u42pc7Ykz0o2ClmbZ5TsVbY9bAyLC5LQlu/hKw2VWbLV0NfmWSdb2Z56WhxUZYvas+9s/Wvjb9kdp8sNyZbt4eaKDIHG8OXqnw4Y+eWsZMs5hi2XcG0kW3bq35icf2lcwpnb4Q7ZVbkrGdBG+p5I+0ze6/FODKZy4Kvjv6s9XrnXuB4+LtOVf0kGUsewZcbwp+vf98OxiROBmJ+9vf27C91lS+21+3vlm5MXJQ0joW2k4GTeiY5iMCa48vtHX5uPYji7/Dk5PPEbScebM7J8MG0MhSfcr5+rTVbbs3acrl2/cPikvrfUmLop3XX2H4InZNH2kJfH3xYH2iP275y7MS85imLQ1/fb1fPN+YNLvTFoD3/HxuEeQ2gT/e6cZKDQkq6lzzNBwzbSSW0kfc/OyE+bnk2Vz4z93TbWx+WemZTt3n1JYMHOxvfnPRtfKd/t2fvtto3hlaa+152k+dE1Ws414Q7DU9PG8FyWMRTSw7VHTFTbxwLjLbx78dDqJ3dluzG4ufZ6TfaPW59NUhYXug2Vawmf3nf2pAlNc/HSkfPRexvFcHp5r7w6+QuJKZcYht7DdZwLxoJjy+32mahHRGxDXe73Pdqzp2wv0fKuPX4TuSd7JYaJE8vt5VNJYvhS9S+FxzDUhGv5C+0MfPHCoXW7XXcaU7Oywf54vboo3/nwi7Y8vrdRaW/mneyp+g9mTNWzMXz94NqvbRaDJlonoTFi2J9XDEPbeHnqhdePjtmbBdHEbC07tmy6Xagl/eftTw768lLeyZ7e+/oBr+o1rl043Pe+dLwYft0ZngZYynrMXmsoCZ/e98aJMAjvDmqozXpGJJrw6Kx3LTvRO55nQ2kMxoTeoA9s3Bi0Z+svLe1r2YneqbwnmbknvNNQYXCrd2KzVpyeEdGlzZX21Jp3zVyeJ1qGE4M07fIx9wOXuSZcy/hmDdW9v+tLAl+w43lvWTTSPi450TKeRwxfsUl/MIbWczIEuSVcJ2jGmJ0bNdTK/4B3QBLQtWxv77A963xeZVAnaOKZ3XnE8Gb7GfmIrEzc8oxhrVxm6Z1lS2j865eOnNzsWjv21iUGbaQf2R6h49/L42+tznJDaZ2SHGgMOhu/NmDM7hU3Bl2Ln13+fJ8YzA9lSHJJeDg2fnrx4qH9m10XtxRqb/jAbOvMcB9czpj5vHpGWB0/ff1CnBim9JiSv9l1UfleH0Nn7J6XIck84VPPvzG7HCzHHFNNY6PNvqhX63jXb0vSiJdLz9jz/Fm7MdSKG0M9Tgwvjv+57x0zWx1yqVCDZJpwHbclDGTt7tMgnlQ+NehrumzR/eeN75S15iVjnVJuZzY3LsWNwXtp0NeimyZ9enWP7GPYSKYJ1/vYccbtHvV+b77ZekZum1qnoQbLp5wbOxxdi1HKe/Q9eaoxfCDbNrtDtjDso1aZzdJ1rWr3x8/HvX7Qcdt4ye6UwsxPrehwdD9oxV7idcfvdSdIdRWhMWx2O9Te9hzKyZtemSRcy6Cd5nhxS3nXup6hJTBOsrvmJUMag1cJ/WQxhP7ad3TMvm12FBJDHJkkPKxWZ5P07hX/v1+sovV1zIay2olPbG4krE4cSB6D98CHNlpfxz/oEMzLkKVOeGeSY7xawt69bsKWrKE6Y1/GN0kSVyidm6+L4UV7CzSmpSKedUud8KAyUW8FLZc9YD96oQ2lS5a4J1rscuyWZKizlEzcu5XnR680hl3e+wlOtJhMK1Rc6Uv6mJlJ2jO6/OiFlkLdH48vzLSxko/dq1ZLusaga+247J2xP0oBUiW8s9ccJG98PQYUvU5YBrtMUzLSGZLC5P+93ue73GLwmlKAVAnXwwCtcNzhNGXbj165nTvPrrFMtWpjcJk8VVd7t26uOJydH82SHp02TcZ0esfK+a5/SHJeZpMdPR7tWM47NIZnKy4xFMM54Xry1M5SHRve8/V3PX787OYH+vpoNSUDGoM483z9XWNIMnZHtlXWn2wdBueEj40F9cC9LHUa+p69A+Yiq+VMtdqeCZ03Px7cR0jqkZ/czHSlEZdzwnXf/MaFw/PixNS0FNYTzcxXNSUjGkO7XXUeSzWGjJ4ZGxrnhHueSdHLKjXdVXMr59lym4Moz9dHoBxjaEpBCnk+3I79T273PhRHQ9+dGuSfdoWR8PGnwjndHl2ZsLWLaviZpcaUEQd6dmzH3GLnAYK0MaT80PquMeht4drcDecDj049XCc7KSZsnXVr0WNfFjHoVuqocUq4PkEShJ7zsuJv4WNZPeTvTG/4pJmH/Ns8Ih8rOAYXTgnXzYqblw45LytuhR/1i+7hY56ZWfzVEecefjV4UqYq78moeWh+uO6waQ8ftQmbIuGOHvP+48sIcivpdvwTjCSnhKfbdBGZ9Fp8YApSSEmflPbIJ/xR77++jKDECXc9MND7/bu80VvOPCxKOWkr84c28dZqu1r1JcXmfyBjtXfCJ+T28g5J6l7fBwqLkSaGQc/KDcPQf4rT4vyRhVcbU01J+AC9ip4iTZvwtB/av86/0vytYwx6S1UfVNglxSScdXjJJE542j1oFCtxwisVr9YOKncEI4mSXjKlTLjnVfw0t3dHGT28ZEh4yZDwkiHhJUPCS4aElwwJLxkSXjIkvGRIeMmQ8JIh4SVDwkuGhJcMCS+ZQv6y2drc4m5xMPXCt2fbgbmc5snVrLjGsGfft+r6p/vPx0mHHl4yJLxkSHjJkPCSIeElQ8JLhoSXDAkvGRJeMiS8ZEh4ySTfS28FC+NV7+D0vrMydCa0/1TTP0lfZAyW21+ZBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCR/wFIwXtiH6cuYgAAAABJRU5ErkJggg=="
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    The job was completed as per defined scope of work (Reverse
                    Engineering of spares), &amp; we have successfully installed
                    the spares after manufacturing
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">Mr. Chandrashekhar</p>
                    <p className="author-description">
                      AVP-Maintenance Planning- Rosa Power Limited
                    </p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
              </div>
              <div className="slide">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAFJCAYAAABZ3kkUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAphSURBVHgB7d1PbBxXHcDx36zXdiqRZoOqSkGinYjY7aEIU7iBxLZJL1CpG3EpEiKOSCL1gJJwQJyahDNqwgmJtEo4wQmMVBAS+eNIIAEtjflzIHFKNiARlQNxmiIa78483m+9Yzb2rj3zZmbHm/l+1CTb9bjq7/32/d6feeOIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgiTx5Cdxp+rSITR0Px7u6cu3ZGRlBeMTxUCY8ayYg5Zv+1Zn8tGWl9eudcsykjok8MYmPYnVUMFXlI3G1Mn/Bk/KZtqJPSbSj90753TkbE3cZTR/vEIFnGMPI9/E5jT90TTxvEH3SNETm4c27xvGxR3RhO25czg64xUjmeRWkf2YSvlL7xEzaZx2JcvtQti0uyhRQRw0iW9DuNp31b5q7GbCjVaVjZQroxXE4SgycTqUv7yCX8/f3TBzwJrsoGJbwfbVgtnbIF3Gl8otGNYSbZd5pG2hhGKuE6MQuNOS89E5okdKzXMioFWplcVn4qBcUwMgnXhurOXtPwRapxS2jmsoohzfA0EpO2u42pc7Ykz0o2ClmbZ5TsVbY9bAyLC5LQlu/hKw2VWbLV0NfmWSdb2Z56WhxUZYvas+9s/Wvjb9kdp8sNyZbt4eaKDIHG8OXqnw4Y+eWsZMs5hi2XcG0kW3bq35icf2lcwpnb4Q7ZVbkrGdBG+p5I+0ze6/FODKZy4Kvjv6s9XrnXuB4+LtOVf0kGUsewZcbwp+vf98OxiROBmJ+9vf27C91lS+21+3vlm5MXJQ0joW2k4GTeiY5iMCa48vtHX5uPYji7/Dk5PPEbScebM7J8MG0MhSfcr5+rTVbbs3acrl2/cPikvrfUmLop3XX2H4InZNH2kJfH3xYH2iP275y7MS85imLQ1/fb1fPN+YNLvTFoD3/HxuEeQ2gT/e6cZKDQkq6lzzNBwzbSSW0kfc/OyE+bnk2Vz4z93TbWx+WemZTt3n1JYMHOxvfnPRtfKd/t2fvtto3hlaa+152k+dE1Ws414Q7DU9PG8FyWMRTSw7VHTFTbxwLjLbx78dDqJ3dluzG4ufZ6TfaPW59NUhYXug2Vawmf3nf2pAlNc/HSkfPRexvFcHp5r7w6+QuJKZcYht7DdZwLxoJjy+32mahHRGxDXe73Pdqzp2wv0fKuPX4TuSd7JYaJE8vt5VNJYvhS9S+FxzDUhGv5C+0MfPHCoXW7XXcaU7Oywf54vboo3/nwi7Y8vrdRaW/mneyp+g9mTNWzMXz94NqvbRaDJlonoTFi2J9XDEPbeHnqhdePjtmbBdHEbC07tmy6Xagl/eftTw768lLeyZ7e+/oBr+o1rl043Pe+dLwYft0ZngZYynrMXmsoCZ/e98aJMAjvDmqozXpGJJrw6Kx3LTvRO55nQ2kMxoTeoA9s3Bi0Z+svLe1r2YneqbwnmbknvNNQYXCrd2KzVpyeEdGlzZX21Jp3zVyeJ1qGE4M07fIx9wOXuSZcy/hmDdW9v+tLAl+w43lvWTTSPi450TKeRwxfsUl/MIbWczIEuSVcJ2jGmJ0bNdTK/4B3QBLQtWxv77A963xeZVAnaOKZ3XnE8Gb7GfmIrEzc8oxhrVxm6Z1lS2j865eOnNzsWjv21iUGbaQf2R6h49/L42+tznJDaZ2SHGgMOhu/NmDM7hU3Bl2Ln13+fJ8YzA9lSHJJeDg2fnrx4qH9m10XtxRqb/jAbOvMcB9czpj5vHpGWB0/ff1CnBim9JiSv9l1UfleH0Nn7J6XIck84VPPvzG7HCzHHFNNY6PNvqhX63jXb0vSiJdLz9jz/Fm7MdSKG0M9Tgwvjv+57x0zWx1yqVCDZJpwHbclDGTt7tMgnlQ+NehrumzR/eeN75S15iVjnVJuZzY3LsWNwXtp0NeimyZ9enWP7GPYSKYJ1/vYccbtHvV+b77ZekZum1qnoQbLp5wbOxxdi1HKe/Q9eaoxfCDbNrtDtjDso1aZzdJ1rWr3x8/HvX7Qcdt4ye6UwsxPrehwdD9oxV7idcfvdSdIdRWhMWx2O9Te9hzKyZtemSRcy6Cd5nhxS3nXup6hJTBOsrvmJUMag1cJ/WQxhP7ad3TMvm12FBJDHJkkPKxWZ5P07hX/v1+sovV1zIay2olPbG4krE4cSB6D98CHNlpfxz/oEMzLkKVOeGeSY7xawt69bsKWrKE6Y1/GN0kSVyidm6+L4UV7CzSmpSKedUud8KAyUW8FLZc9YD96oQ2lS5a4J1rscuyWZKizlEzcu5XnR680hl3e+wlOtJhMK1Rc6Uv6mJlJ2jO6/OiFlkLdH48vzLSxko/dq1ZLusaga+247J2xP0oBUiW8s9ccJG98PQYUvU5YBrtMUzLSGZLC5P+93ue73GLwmlKAVAnXwwCtcNzhNGXbj165nTvPrrFMtWpjcJk8VVd7t26uOJydH82SHp02TcZ0esfK+a5/SHJeZpMdPR7tWM47NIZnKy4xFMM54Xry1M5SHRve8/V3PX787OYH+vpoNSUDGoM483z9XWNIMnZHtlXWn2wdBueEj40F9cC9LHUa+p69A+Yiq+VMtdqeCZ03Px7cR0jqkZ/czHSlEZdzwnXf/MaFw/PixNS0FNYTzcxXNSUjGkO7XXUeSzWGjJ4ZGxrnhHueSdHLKjXdVXMr59lym4Moz9dHoBxjaEpBCnk+3I79T273PhRHQ9+dGuSfdoWR8PGnwjndHl2ZsLWLaviZpcaUEQd6dmzH3GLnAYK0MaT80PquMeht4drcDecDj049XCc7KSZsnXVr0WNfFjHoVuqocUq4PkEShJ7zsuJv4WNZPeTvTG/4pJmH/Ns8Ih8rOAYXTgnXzYqblw45LytuhR/1i+7hY56ZWfzVEecefjV4UqYq78moeWh+uO6waQ8ftQmbIuGOHvP+48sIcivpdvwTjCSnhKfbdBGZ9Fp8YApSSEmflPbIJ/xR77++jKDECXc9MND7/bu80VvOPCxKOWkr84c28dZqu1r1JcXmfyBjtXfCJ+T28g5J6l7fBwqLkSaGQc/KDcPQf4rT4vyRhVcbU01J+AC9ip4iTZvwtB/av86/0vytYwx6S1UfVNglxSScdXjJJE542j1oFCtxwisVr9YOKncEI4mSXjKlTLjnVfw0t3dHGT28ZEh4yZDwkiHhJUPCS4aElwwJLxkSXjIkvGRIeMmQ8JIh4SVDwkuGhJcMCS+ZQv6y2drc4m5xMPXCt2fbgbmc5snVrLjGsGfft+r6p/vPx0mHHl4yJLxkSHjJkPCSIeElQ8JLhoSXDAkvGRJeMiS8ZEh4ySTfS28FC+NV7+D0vrMydCa0/1TTP0lfZAyW21+ZBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCR/wFIwXtiH6cuYgAAAABJRU5ErkJggg=="
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    We used SixD services for reverse engineering of spare parts
                    of mines equipment. During the service, their performance
                    was good.
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">Mr. Nirmal Ghosh</p>
                    <p className="author-description">
                      HOD- Sasan Power Limited
                    </p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
              </div>
              <div className="slide">
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    The job was completed as per defined scope of work (Reverse
                    Engineering for development of indigenous parts), &amp; we
                    have successfully installed the spares after manufacturing.
                    We endorse the good quality of work and engineers and wish
                    them success in their future endeavours.
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">Mr. Arun Jena</p>
                    <p className="author-description">
                      Head-Mechanical Maintenance - Sasan Power Limited
                    </p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAFYCAYAAACRVJgqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAq7SURBVHgB7d1NjBtnGcDxZ8b2JoVCvRdQDqlcpd72UMQ2IC5FiiHhUnJwkZDKKYlIIjglG4lDeyBpr0hNckIiiXZzIqd2I7VcyMcG0RspQQWp3U0VA1IjQtFu2gLJ2jPD+/iDeDdee+b1jGed+f+kypu1d7vP+8z7/Y4tAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTMkZQ8vedMxQ3cfeL4f5URCwKnKIF/Y+nK4TkZwrOVX5b8fOGk+Y1/khGzjSEvKfId//zNS4cWZMQ0UZ6bq0gMAt+/OOyFY8M2BleQKSQ8Y0h4xpDwjCHhGUPCM4aEZwwJzxgSnjEkPGNIeMYMtZa+Ui1fNQ8VsXDdu9DcudlZLYuFWnF+6SmJwXK1PGf+jn1i4XZwTq43tsveanlWoosthiio4RlDwjOGhGcMCc8YEp4xJDxjSHjGkPCMIeEZQ8IzhoRnDAnPGBKeMSQ8YzKZcE9yRcdxVySDUr23LC1B3ikGEmQy4TTpGZPJGv4oaOTzJfNQk4io4RmTag1/u/GcXPe2S1T3JV8sVV4t1hYOWPXDejO96/o1icE1b0puB09IVK0YjpVqCz+tyQillvBv5P7W/M+GuVCKjutpKVsl3HWdYsNzl2VI25y78outb4qNhUa5WCh8qyiWbC/asWzSPw+2SuDn7oolN/CLw/x8HD6XLTLMRWd70Y5lwj8Ltohtc64CkeIwPx+HtC7asUy46f/Gfg6d1kU7ngkPCkMlPBA3+igrZp8Gj9UkBZmcljnip9p/p4l5eMaMZcI/Cb5YkyEEjmM9HRp3Y5fwRf8rZv7+d7FVqswW3SCoSYp0wPZl579iS2NwbNcgZMx87D8hReffYiufb0x7IjckRYv+V+Up95OaWCpIvWQWXmpiYewSvmRq+J78B2JLV6gcJ92t0aUhWyk/55YCy6XhzA3ack4wvfTbw6nWcG3SJ4dopYaJYai19OL80nfE0kq1fMs8lCSiz8wKlSN2zVkvk/NL+83DfrFgYvijeZiWMTJWNbw1YLPbcElI5NH+bTMG2eZ8GutFG0WaCS9JRO95T8pOk3BfAqv3WC9XfjVt5mSpNufX/e3Ni9a3XPzRt80OfPtZxljVcO37vuTcF2tubnrVq8eZ8JJE1KzhrubasRo41nOFacnZzzJSSfhy9dmSRNRpClvsrnDH9WM7cLBcLVk3521WCR920JlSDW+UJKJf178pu/KL7X+l0/+tVShJRNe8ctcYJJ3Fn7Fo0ltN+b2hmnP9jBVfZEFiE0Su4RpHqzlX0Zv0OMYgaSU80lTmgqnde/N/7vpOI3LQJtBKvJ+v4pSivFrP73XHsNX1bklU+dy+xcsH52UIKSU8KIV9Zaffe1AzdO5c2wQHIKLF8GCw1vLYm7cizzTi2NZNJeGOuF8P+1qtGQ/67qbItbv83XP7VxuNOYmR2byIFMPaFir6eXKNIY4uaVM36VpQU+6dNX13IE70muHIrviPAzulMK/SGNa3UDYDNo0hji5p5AlvT2cGDni0CdSDfrvyS+ue8SPVcK0Zgeudlhi1Yxh40WoMZpAlewvvr/l+EPGD7Zq12/HPSwxSqOGDP1xNC+rtxtfk5cIfejwbREq4zr3j3yzJh0q2TiXXJ7v9V9UkCjP3jmvAmUaTXun3ZCfZhyZ+v8Er3JqENLXn3PG4++62Sr8nNYY3Vnf3iSH8OOSZ7509UvfqpyQmI7/zxAzYdm30nG6OXGtM9SuoFbO7Faqwmp8LKr6TxK08ZuNjwxg6F+zPt7yz4brB5PzNBQmhuW6uJx1ijGGkCW8tqXo9m0Oda6s+yZYozbmXL8wuXTpovX27kXYMlV7PhYxhQULycxPHFy/9+IDEaMQ1/OGC0hpxpv5Cc9qyc8DWZyByUUJoNeWrsRbUA71j0P66YgaYg2MIN2Brx/CaxGykCTdz1+Odr3WZ8R3T9KmZicshl02dhUGv0CVUXaBI6q7M7k9P6I5Ba3XIGAaulDWXUBPrjkZkufq0SYRztbuQvp9/P8r6+MCPjOh8xHJSH++szbkj3q1ODPqoLdPaOXZfoWII8vnqh5cOxTZQ6zayGu6Ks880yfL6/RfNgOY3kTdCnAGrTM1k5wpHly4fPCoJccU73onh2MSVKIluGhSDHj/2c97JxUsHX5KEjGRapjUjaJ8b04Lq1PAofAk2XHjQgvLMAKfu5U5IQtbHoFudUQ2KYSLvza56uYTGHi0jSbhpBq92vu7UiuYqVHi1jaYyWlCFnH+y7rkzSd4CbMYFJztfJxFDM9mN+kzStzEnnvC71WeOyLqjQLqCpiPzsEzN6jla1WZ8IufNJp3s5Wp5v/krqt3f0xh0nTysfjHoBbvayB0Yxdt/5CRBrTmrf8F8uXX9c4+bPvw9b7tM5e4M+jWmZiw91Mw1R7L53MurXv6VZJOtA7XgLekRg9b735mm/bncx4N+Tc8YOuMO0xW9Mqo3KEhs0NYe0WpT3nOjRI/6nPFeGHgwsVfNmNp9dp/jBJNmJHtCEqSbJINi0IvWJoYdu89WAycomcWhxAaZvSQyLWsVVEELqu8mgxaUrk4dmnh3o5esmca0+rrGUd0Xjvf0ysOixHBm9dtybMvljV7SMwYvcG58NOTpFRux9+FhC0pprSib/e7r3pM9nw+k/v+lUV1Qmcg1TulmyGZJttIYdAs3agxpJFvF2qR3NeOlsD+jy5Gv33tRptx/rDvoELw2OV+rdWqEHr5fvHJ4vySsHYP22aHP3WnT/sb93T1i8E93x6C3+H54+dB+SVFsTfpydUfV7ITph65andfWeW3X/ndteuXV5yfy/hFdYlxt5E+NYlDTXg3UZFvFoKP2ru6p2ZTr9qbZ8ZocVQyDDF3DW83fxOz6aUsUzXmt1yq0x517cvQ/P7yoNUKbvlFMVTQGVwq6imY9gNIYtHbrFu+Ue2flJ/d+dH5q9/a5+/X6iVG/22I/1jW8VUgTR0zTq4UUuUb08rN7P5C/eNvm/ilfOD2KW3qTiEG7p3f9HfP/8h87nfRYw4ZVwu9Wp47HWUgdrX775gkZgUchBhtWo3QTVEXGvKAehRhsWCZcZiRGaRRUIM1NitgGUaZMzm/2ZCurhOu5Mp1ySAzSqhWT8x/UzP87xhia7ySx6Q2x8OKdEIs7KLql3wQ29JBBTYYwDs14t6Hm4Z1TLBLdimkhDkzOf5TKalO34WKQGVOz52SMDL3wslKdeiviHNx0B/WXdAVKNgmzaHTKLBodifAjNV0y3UwxhDX0Wnogq6EHP9rvb86CanZPUWJ4fhyTrWJZWjXNolkndk72eYmp1cFM2AP4adBDDqYwZvu8RAd5BzZzDGHEtpa+Ui1rP1hZ/+32oCaRE5hx6xPD6XEamPUT226Zzmv1CG/7nyutKU/j1Oa4eT+cdgz6Znu6IDOWMQwS6wEIbdqlWVjjW0iPQgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQ/wPfvZ/SKHGThAAAAABJRU5ErkJggg=="
                  id="xMas"
                />
              </div>
              <div className="slide">
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    Bhutan Hydropower Services Limited (BHSL), Bhutan expresses
                    a sincere appreciation to M/s Six D Engineering Solutions
                    Pvt. Ltd, India for assisting BHSL engineers on the hands-on
                    scanning, and modeling of Kaplan Runner blade. Our gratitude
                    is, even more, greater for the timely and free support
                    rendered to BHSL for the realignment of the blade model to
                    the correct profile of the blade.
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">Pelden Drukpa</p>
                    <p className="author-description">
                      Head, Technical Division, Bhutan Hydropower Services
                      Limited
                    </p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
              </div>
              <div className="slide">
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    Our requirements (Design Development for Refractory Bricks)
                    were thoroughly addressed and implemented into their
                    satisfaction.
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">Neemanand Sahu</p>
                    <p className="author-description">DGM -JSW Steel Limited</p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
              </div>
              <div className="slide">
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    The deliverables have been successfully delivered as per
                    agreed work completion date, meeting all necessary standards
                    and specifications.
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">Ranajitsinh Gohil</p>
                    <p className="author-description">
                      Department Head, Mechanical Maintenance HBI, AMNSd
                    </p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
              </div>
              <div className="slide">
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
                <div className="quote-content">
                  <h2 className="font-face-futur-BK quotes">
                    I take this opportunity to express my appreciation for your
                    valuable collaboration in the AR/VR system, setup and
                    execution. You made the entire process delightful. I want to
                    thank you for your candid communication and quick
                    responsiveness always.
                  </h2>
                  <div className="qd font-face-futur-HV">
                    <p className="author">Dinesh Singh</p>
                    <p className="author-description">
                      AGM - (E&amp;I) Nippon Steel Engineering
                    </p>
                  </div>
                </div>
                <img
                  src="data:image/png;base64,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"
                  id="xMas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inner1;
