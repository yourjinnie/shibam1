import React from 'react'
import FilterableList from '../components/FilterableList'

export default function CaseStudies() {
  return (
    <div className="caseContainer">
      <section className="caseMenuFilter" />
      <section className="caseWrapper">
        <section className="caseHero">
          <div>
            <p className="caseTitle font-face-futur-md-bt">Case Studies Of <br /><span className="caseSubTitle font-face-futur-md-bt">Collective Success</span></p>
            <div className="drawing-bar" />
            <p />
            <p className="casePara font-face-futur-bk ">
              Explore how we deploy an ingenious approach towards each and every project to do more with less. With a focus on making every project a benchmark for quality and standard, we deliver exceptional precision.</p>
          </div>
        </section>
        <section className="caseCards">
          <div className="caseCard">
            <h2 className="font-face-futur-md-bt cardInnerHeading">10X</h2>
            <p className="font-face-futur-LT cardInnerPara">Production for our partners</p>
          </div>
          <div className="caseCard">
            <h2 className="font-face-futur-md-bt cardInnerHeading">5000+</h2>
            <p className="font-face-futur-LT cardInnerPara">hours saved</p>
          </div>
          <div className="caseCard">
            <h2 className="font-face-futur-md-bt cardInnerHeading">500+</h2>
            <p className="font-face-futur-LT cardInnerPara">projects delievered</p>
          </div>
        </section>
        <section className="top">
          <div className="container_D">
            <div className="item">
              <p className="text-big font-face-futur-HV">5000+</p>
              <p className="text-small font-face-futur-md-bt">hours saved</p>
            </div>
            <div className="item">
              <p className="text-big font-face-futur-HV">500+</p>
              <p className="text-small font-face-futur-md-bt">projects delivered</p>
            </div>
            <div className="item">
              <p className="text-big font-face-futur-HV">10X</p>
              <p className="text-small font-face-futur-md-bt">Production for our partners</p>
            </div>
          </div>
        </section>
        <section className="list">
          <FilterableList />
        </section>
      </section>
    </div>

  )
}
