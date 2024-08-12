import React from "react";
import SliderMe from "../components/SliderMe";
import ShareIcons from "../components/ShareIcons";
import { Link } from "react-router-dom";

const Inner6 = () => {
  return (
    <>
      <section className="CaseInnerWrapper">
        <div className="CaseInnerContainer">
          <section className="InnerHero">
            <img
              src="/assets/8-71bac216.png"
              alt="Indigenising the alignment of critical diaphragms with"
              style={{ width: "100%" }}
            />
            <h2 className="InnerHeroH1 font-face-futur-md-bt">
              Indigenising the alignment of critical diaphragms with{" "}
              <span className="orange">NTPC</span>{" "}
            </h2>
            <div className="tagsD font-face-futur-HV" id="topGap">
            <Link to="/sectors/power" className="tags2">Power</Link>
            <Link to="/services/dimension-control" className="tags2">Dimension Control - DPM</Link>
            </div>
            <div className="bar">
              <h2 className="InnerHeroH2 font-face-futur-md-bt">
                <div className="lineabc" />
                The Problem at Hand
              </h2>
              <p className="font-face-futur-BK innerPara">
                Unit 1 (660 MW) of NTPC Sipat (2980 MW) was getting delayed
                because of Russian experts who were to come to do the diaphragm
                centring of LP1 and LP2.
              </p>
            </div>
            <div className="why font-face-futur-md-bt">
              <h1>
                Why <span>SIXD?</span>
              </h1>
              <p className="whyPara font-face-futur-LT">
                With transformative engineering solutions, SIXD was highly
                recognised by NTPC turbine experts for tackling critical
                dimensional problems and providing accurate and time-saving
                solutions in comparison to conventional procedures.
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
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgB7ZexTcQwGIV/n1ykvBFcJh1McGwCGzACMAIbwAhswAihS5QCb4DLJIoUnoEi+A5zjeOT7n2N5V+O/WLpf3oWIYQQchaosFCW5Q6DkUzM8+zatn0J67+EQqRRSr1LZqZpuuy6rl7WNstJURQOg5WM4KKc1vpjrx4WjDFbCN5KJvq+d9ZaJ4R8o/5bACe4lvR2ZZumeY4tiAr1nooufJUVgH/exMRuYh+j+99kBbvylrTWhRCSir2ur6rqFh14IZnA2TXS02NYD9PT7hS671B60suJt6NxHGv8VbZQAuyh9ETIqXNMerqTxOnJP+iGYXiIJXsd2+DHru4lMTjDO463oz/TU1Sotyu8YZ6w0ZWkxTI9EUII+eIT0RBeGqHheesAAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgB7ZexTcQwGIV/n1ykvBFcJh1McGwCGzACMAIbwAhswAihS5QCb4DLJIoUnoEi+A5zjeOT7n2N5V+O/WLpf3oWIYQQchaosFCW5Q6DkUzM8+zatn0J67+EQqRRSr1LZqZpuuy6rl7WNstJURQOg5WM4KKc1vpjrx4WjDFbCN5KJvq+d9ZaJ4R8o/5bACe4lvR2ZZumeY4tiAr1nooufJUVgH/exMRuYh+j+99kBbvylrTWhRCSir2ur6rqFh14IZnA2TXS02NYD9PT7hS671B60suJt6NxHGv8VbZQAuyh9ETIqXNMerqTxOnJP+iGYXiIJXsd2+DHru4lMTjDO463oz/TU1Sotyu8YZ6w0ZWkxTI9EUII+eIT0RBeGqHheesAAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Achieve precise centering of LP and IP turbine
                        diaphragms.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALpSURBVHgB7Zg9ktowFMcfhGKhiTNDH1MBQxHnBPgIyQni7dJt9gRhT5DNCUJOEHKC9Zbp2IqPJk4PM04DDQP5P0YiipDB2ArLzvCf0cj6QPrN03v6gOgsuyrQEdRsNl+uVitXlpfLZTwejx/oAP030Far9WqxWATFYjFA0dHbAR4hCwuFQmcwGPzaN551UNd1nXK5/BGfH1L+JAboi32dSmRRjUbDRXaH5CrVIVIPFtwsNaz4CZknijGlkDVQCQkIl/4CBvqyoh9bW0JGSD6lkE2LbiBhvc5wOLzROzAk+6QoRkh+Gv9kFcmCBIBLFiDZx3mX0OtzB5O25BEmr1FGSPR7h35dfMbz+bwWRdHGf21YtK1Y85LyQ7Kci4uLK7U9NygGDyQEljzUJm9ngJTyySYoiQjGadM3tG3cAJv/25SQ63FQ55NlUEcMbAL9KT9KpdIXDhTaAQnXCZA+y7IaVFaiPklwhXtM3BVFDyfWnYQ1QaL/16SxbIDGYiKHzLCXOmy9Xr9KgkT9c1mPyP9tEzQSE3hJHXRYXFRuTZBCvshj29tTKEB93Qd1WGQbQPSPEYBv9OUGuAzOUK236qOVSqW9qx1Rfw2QGiBfz2az2mg0+q62C791+Rt5T23LdTLlObsNY7m044TLbFGbkOwysPQ39b6g98l0e7JtSYZEgEnfvIVLbG1TBy/9AWc3+6uPiXum95F4RwUYi18C6yDknUEEHeUCzXjBkO+jdeL9VljPVX8jLHlNCUoNmhUyhULA3+gXGsoCmgNSPvB8DhTl9OoLwId9gKlBcyz3zrP7UBWeAiTtAj0lSEoCPTVIMoFqk0enAMkyHaEdkUd0IpCsf0A9z3Pkecsb8KlAEh14KXksSNaWj+IM5gcZb84RX4alVR8T0gjK7xn5VGBYpD4AHfX5emxI1jO9Yjqd/qhWq+unhQBsKLfuGJDvjw1JJlDWZDK5BywvvTyb+X3T5X9F+AlMZ5111pb+APBNDfd18bgzAAAAAElFTkSuQmCC"
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALpSURBVHgB7Zg9ktowFMcfhGKhiTNDH1MBQxHnBPgIyQni7dJt9gRhT5DNCUJOEHKC9Zbp2IqPJk4PM04DDQP5P0YiipDB2ArLzvCf0cj6QPrN03v6gOgsuyrQEdRsNl+uVitXlpfLZTwejx/oAP030Far9WqxWATFYjFA0dHbAR4hCwuFQmcwGPzaN551UNd1nXK5/BGfH1L+JAboi32dSmRRjUbDRXaH5CrVIVIPFtwsNaz4CZknijGlkDVQCQkIl/4CBvqyoh9bW0JGSD6lkE2LbiBhvc5wOLzROzAk+6QoRkh+Gv9kFcmCBIBLFiDZx3mX0OtzB5O25BEmr1FGSPR7h35dfMbz+bwWRdHGf21YtK1Y85LyQ7Kci4uLK7U9NygGDyQEljzUJm9ngJTyySYoiQjGadM3tG3cAJv/25SQ63FQ55NlUEcMbAL9KT9KpdIXDhTaAQnXCZA+y7IaVFaiPklwhXtM3BVFDyfWnYQ1QaL/16SxbIDGYiKHzLCXOmy9Xr9KgkT9c1mPyP9tEzQSE3hJHXRYXFRuTZBCvshj29tTKEB93Qd1WGQbQPSPEYBv9OUGuAzOUK236qOVSqW9qx1Rfw2QGiBfz2az2mg0+q62C791+Rt5T23LdTLlObsNY7m044TLbFGbkOwysPQ39b6g98l0e7JtSYZEgEnfvIVLbG1TBy/9AWc3+6uPiXum95F4RwUYi18C6yDknUEEHeUCzXjBkO+jdeL9VljPVX8jLHlNCUoNmhUyhULA3+gXGsoCmgNSPvB8DhTl9OoLwId9gKlBcyz3zrP7UBWeAiTtAj0lSEoCPTVIMoFqk0enAMkyHaEdkUd0IpCsf0A9z3Pkecsb8KlAEh14KXksSNaWj+IM5gcZb84RX4alVR8T0gjK7xn5VGBYpD4AHfX5emxI1jO9Yjqd/qhWq+unhQBsKLfuGJDvjw1JJlDWZDK5BywvvTyb+X3T5X9F+AlMZ5111pb+APBNDfd18bgzAAAAAElFTkSuQmCC"
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Develop an alternative to the cumbersome and outdated
                        piano wire technique.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANgSURBVHgB7Vg7chpBEB0+Kn2idUm5l0ASkgKtTyCUObN0AqMTCJ9A+AS2MmdGJ7BuoHXoyDjRL/E6c6IqHFBAAPg9mMHDMguLBbO2ile19DCf3Tc90z09LcQCCywwE6TGNbqu66yurr7udDqFVCrldLvdGuTl7e3thbCMSKI7OzunEGU8TrgNhAOQP7q/v/8mLCFtqszn82cQ78UfkgEeH9qs8Q+km8lk/K2trX1hCSMa3dvb24e2qvJvAO2dYKl91b69vX2aTqc5iZ5mm83miyAIamLOyIQrNjY2PkDk5V8PJIeW9+Hh4cv6+jr36kvuW2j2J+vEnJE11BX4A21VQPKHadDd3d059nAZRQdkPb2Nextjj0zjHmOMQ0Q9z3NarZYjX1qdMJbtBTxuqL4YJq+AeoojTMa7ubl5I6bAkDFVq1V9r7kTxjrCTKYM4ZseZYxASRpsbIwYE2Z7BVGgoWCJcqZB+IiLj35nGf3K6PdWxIAc9wlFarzWaDRycQ1xxD3hw35vBnBBIP3O9DGIK/Uf/SoiJjChQGqccJaWlty4Y40OHwS/iv6sey4IoiL6rsqDayoKuezTaFMBEz0AWV+OP9Rd3ziYrJ4vOMbLqDUulSv6J5QyBvG3JB8D48nEJYJV5kCGFjywfmkMvtSENZJEdlyj9HcXDE5WVlYckA9EQsjG6QSSr2QxEAkhPamD3PwVPpubm55ICBOJ6sC57oiEMBXRJLEgOmskTfSMYSGe55M6WiNKX8zYQR2fBMoF0b/yBPAuH9knarw1osvLyzySS6HqQBVAuogb71UUWStEGXsimFE+uHcEI8R7Jo9phpKXss3D4XJqekesk2kGKErJGOJQb2BcAXGs4mBotgStnofj1LlrVJ5sLsskEdWP0ZgsOmtrawfhdhtLn9PIRN7DsOSD22673XbD7f+MH63X664qa3erAWwQ9VWB8W1Up2w2qy/3yDV97kSlsfgsc4+a0kDMzgh5iwAC0/XEitXTUKSjZ2alCgOroO5SZgg9pJBKWt8T0zus7FFo6LO+7HTu8KskWoHUSRajLnvWjInXGjp3por0enUP44EwLtVjy+H3IPcrl/Zkd3eXS84kRC1OEsIqUR3X19eTcltDeDrxKE6JX+J/AfNNMueUGH4DWfJu/1xlAJAAAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANgSURBVHgB7Vg7chpBEB0+Kn2idUm5l0ASkgKtTyCUObN0AqMTCJ9A+AS2MmdGJ7BuoHXoyDjRL/E6c6IqHFBAAPg9mMHDMguLBbO2ile19DCf3Tc90z09LcQCCywwE6TGNbqu66yurr7udDqFVCrldLvdGuTl7e3thbCMSKI7OzunEGU8TrgNhAOQP7q/v/8mLCFtqszn82cQ78UfkgEeH9qs8Q+km8lk/K2trX1hCSMa3dvb24e2qvJvAO2dYKl91b69vX2aTqc5iZ5mm83miyAIamLOyIQrNjY2PkDk5V8PJIeW9+Hh4cv6+jr36kvuW2j2J+vEnJE11BX4A21VQPKHadDd3d059nAZRQdkPb2Nextjj0zjHmOMQ0Q9z3NarZYjX1qdMJbtBTxuqL4YJq+AeoojTMa7ubl5I6bAkDFVq1V9r7kTxjrCTKYM4ZseZYxASRpsbIwYE2Z7BVGgoWCJcqZB+IiLj35nGf3K6PdWxIAc9wlFarzWaDRycQ1xxD3hw35vBnBBIP3O9DGIK/Uf/SoiJjChQGqccJaWlty4Y40OHwS/iv6sey4IoiL6rsqDayoKuezTaFMBEz0AWV+OP9Rd3ziYrJ4vOMbLqDUulSv6J5QyBvG3JB8D48nEJYJV5kCGFjywfmkMvtSENZJEdlyj9HcXDE5WVlYckA9EQsjG6QSSr2QxEAkhPamD3PwVPpubm55ICBOJ6sC57oiEMBXRJLEgOmskTfSMYSGe55M6WiNKX8zYQR2fBMoF0b/yBPAuH9knarw1osvLyzySS6HqQBVAuogb71UUWStEGXsimFE+uHcEI8R7Jo9phpKXss3D4XJqekesk2kGKErJGOJQb2BcAXGs4mBotgStnofj1LlrVJ5sLsskEdWP0ZgsOmtrawfhdhtLn9PIRN7DsOSD22673XbD7f+MH63X664qa3erAWwQ9VWB8W1Up2w2qy/3yDV97kSlsfgsc4+a0kDMzgh5iwAC0/XEitXTUKSjZ2alCgOroO5SZgg9pJBKWt8T0zus7FFo6LO+7HTu8KskWoHUSRajLnvWjInXGjp3por0enUP44EwLtVjy+H3IPcrl/Zkd3eXS84kRC1OEsIqUR3X19eTcltDeDrxKE6JX+J/AfNNMueUGH4DWfJu/1xlAJAAAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Establish a reliable rotor axis using advanced seal bore
                        technology.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Generate instant, detailed reports, including deviations
                        from the desired alignment.
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
                    SIXD experts had taken up the diaphragm centring through
                    Dimension Control procedures, understanding the specific
                    needs and the process to provide the right correction in the
                    radial and elevation positions of the diaphragms.
                  </li>
                  <li>
                    {" "}
                    <br />
                    <b>Real-time assistance:</b> Our process allows real-time
                    input for the required adjustments up to the level of
                    microns. This enables immediate adjustments, significantly
                    improving efficiency and reducing downtime.
                  </li>
                  <li>
                    <br />
                    By harnessing
                    <b>
                      {" "}
                      advanced PTB Germany-certified geometrical processes
                    </b>{" "}
                    experts established rotor access, ensuring accurate inputs
                    that were previously unattainable with traditional and
                    conventional processes.
                  </li>
                </ul>
              </div>
              <div className="how-img">
                <img src="/assets/t8-9ea07a87.png" />
              </div>
            </div>
            <div className="page">
              <img src="/assets/p8-4f9e3168.png" className="page" />
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
                      <h1 className="font-face-futur-BK">Enhanced Accuracy</h1>
                      <p className="font-face-futur-LT">
                        The adoption of digital profile mapping technology
                        significantly improved diaphragm alignment precision,
                        resulting in markedly improved turbine performance
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">
                        Real Time Adjustments
                      </h1>
                      <p className="font-face-futur-LT">
                        NTPC gained the ability to make immediate adjustments
                        during the alignment process, leading to reduced
                        downtime and enhanced operational efficiency.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="row-side">
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">
                        Streamlined Decision Making
                      </h1>
                      <p className="font-face-futur-LT">
                        Real-time reporting empowered NTPC to make data-driven
                        decisions, enabling rapid action plan development and
                        optimizing generator rotor utilization.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <h1 className="font-face-futur-BK" />
                      <p className="font-face-futur-LT" />
                    </div>
                  </div>
                  <p className="p-side font-face-futur-LT">
                    In conclusion, SIXD's innovative approach not only resolved
                    NTPC's immediate alignment challenge but also set a new
                    standard for precision engineering in power generation. The
                    partnership with SIXD not only improved turbine diaphragm
                    alignment but also paved the way for more efficient and
                    accurate processes in the industry.
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
                      Contributing to Efficient Power Generation with Hydropower{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Power</p>
                      <p>Dimension Control - DPM</p>
                    </div>
                    <img src="/assets/id6c1-2b51febb.png" />
                  </div>
                </Link>
                <Link to="/inner/14">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      Safe and Efficient HV Transformer Alignment with the GIS
                      Floord{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Power</p>
                      <p>Dimension Control - DPM</p>
                    </div>
                    <img src="/assets/id6c2-d4e83467.png" />
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
              </div>
            </div>
          </section>
        </div>
      </section>
      <SliderMe />
    </>
  );
};

export default Inner6;
