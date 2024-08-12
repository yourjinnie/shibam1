import React from 'react'
import { Link } from 'react-router-dom'

const GreenEnergy = () => {
  return (
    <>
    <div className="sectors-nav">
        <div className="tab-content-sector ">
            <div className="cvb" style={{  position: 'absolute' }} />
            <h2 className="font-face-futur-LT tab-heading1">GREEN ENERGY</h2>
            <h3 className="font-face-futur-HV fhfj">Empowering progress the sustainable way.</h3>
            <p className="font-face-futur-LT tab-para">Green energy is key in mitigating climate change and reducing the overall impact of human activities on the environment.<br />  <br />We have pledged to promote green energy production, thereby reducing greenhouse gas emissions and contributing to a sustainable and cleaner future.
            </p>
            <img src="/assets/4-6be0a186.png" alt="GREEN ENERGY" className="tab-img" />
            <div style={{ marginTop: 55 }}>
                <div className="cvb" style={{ marginTop: '-25px', position: 'absolute' }} />
                <h3 className="font-face-futur-LT tab-heading2">Owner’s engineering for renewable energy</h3>
                <p className="font-face-futur-LT tab-para">We provide comprehensive oversight and management of engineering activities, right from ground zero to the final stages of renewable energy plants. Our team coordinates and supervises all critical processes through meticulous project management, quality control, and risk assessment, facilitating successful and seamless execution.
                </p>
            </div>
        </div>
    </div>
    <section className="sectors-grid-cards"></section>
    <section className="GREEN ENERGY">
        <div className="greenD">
            <img src="/assets/deco-488862db.png" id="decoFF" />
            <div className="mix">
                <div className="boxF">
                    <h1 className="dbnfjk font-face-futur-bk">
                        Fuelling the Future with Green Hydrogen</h1>
                    <p className="jdjf font-face-futur-bk">
                        With our extensive technical expertise and years of experience, we spearhead the advancement of hydrogen as a pivotal player in the energy transition.<br /> <br />From conceptualization to implementation, under owner’s engineering we provide comprehensive support through every phase of building the green hydrogen plant.<br /> <br />With our assistance, our partners confidently navigate the complexities of the green hydrogen landscape and drive forward their sustainable energy strategies.
                    </p>
                    <img src="/assets/green-5e374e4b.png" />
                </div>
                <div className="bvjde jjdfk">
                    <div className="mxjsdkj">
                        <img src="/assets/j1-99ee8291.png" />
                    </div>
                    <div className="jdknb hnj">
                        <h1 className="jjik font-face-futur-md-bt">Hydrokinetic Energy</h1>
                        <p className="font-face-futur-LT kll">Hydrokinetic energy has vast untapped potential for power generation and can significantly contribute to the global shift towards sustainable energy. Our owner's engineering plays a critical role in supporting the growth and development of the hydrokinetics energy industry.
                        </p>
                    </div>
                </div>
                <div className="bvjde ddk" id="hhkk">
                    <div className="jdknb jkkk">
                        <h1 className="jjik font-face-futur-md-bt ">Solar Energy</h1>
                        <p className="font-face-futur-LT kll">Solar energy is a cornerstone of the renewable energy sector, with immense potential for widespread adoption and usage. We facilitate the effective implementation and management of solar power projects for a cleaner and more sustainable future
                        </p>
                    </div>
                    <div className="jfkktyu">
                        <img src="/assets/j2-285c205f.png" />
                    </div>
                </div>
                <div className="bvjde ddk">
                    <div className="mxjsdkj">
                        <img src="/assets/j3-0ff3e96a.png" />
                    </div>
                    <div className="jdknb jkj">
                        <h1 className="jjik font-face-futur-md-bt ">Wind Energy</h1>
                        <p className="font-face-futur-LT kll">
                            Wind energy offers significant opportunities for clean power generation. Our owner's engineering expertise plays a fundamental role in enabling the efficient planning, execution, and maintenance of wind energy projects, promoting sustainable energy production and environmental conservation.
                        </p>
                    </div>
                </div>
            </div>
            <img src="/assets/bc-c7f97e71.png" id="decoNN" />
        </div>
    </section>
    <section className="hidden"></section>
    <section className="experts">
        <div className="aaa">
            <div className="bbb">
                <div className="ddd-img">
                    <div className="nnb">
                        <img src="/assets/t3-1c861969.png" />
                    </div>
                </div>
                <div className="ccc-text">
                    <img src="data:image/png;base64,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" className="bjddh" />
                    <div className="vvv-h1 font-face-futur-md-bt pqr">WHAT OUR EXPERTS SAY</div>
                    <p className="font-face-futur-BK mno">The team is headed by Mr. Jitendra Kumar, EX-BHEL, TUV-SUD, TRACTEBEL-ENGIE, STEAG, and AVAADA. He has 45+ years of industrial experience and has successfully handled numerous projects as a prime or sub-engineering consultant across the globe. Recently, Mr. Jitendra Kumar has contributed to the field by publishing insightful literature on Coal Handling Plants, including Heat Rate Reduction.
                    </p>
                    <div className="ghji">
                        <p className="hgjk font-face-futur-md-bt font-face-futur-HV">Jitendra Kumar </p>
                        <span className="mnk">
                            <Link to="https://www.linkedin.com/in/jitendra-kumar-coo-six-d-engineering-solutions-96a2722a/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADrSURBVHgB7ZI9CsJAEIXHHywEIZW2EQsbQQvB1gOIh7KwEYIHEC0sLL2CVoKtvRFF66CWYnzBhCTDKjG7NtEHH8n87L6dZYmSpDIYgjGok2IVgQlslxtokQKl3W8T6IF8BnRIgTwDS1DbkWIZ5F/RChToC6qCGilUiuSkgQo9p92C/btmk9Fw8zrLb0Ae9MGZ/Gt1WFP4sYRkM9oBg2D+AqaCfo8TKMkYRGHgbZqm+FqAHpgJal3Rgk8mmLC1BqvfyT183AlGLJ6z2HmdmozBkcUHQU9OxiCy/gY/YJAN/C9ZzYpYe9VzpUToAfJgU0bRVs+RAAAAAElFTkSuQmCC" />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

</>
  )
}

export default GreenEnergy