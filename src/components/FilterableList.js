import React, { useState } from 'react';

const categories = ['All', 'Power', 'Others', 'Steel','Oil & Gas'];

const listItems = [
  {
    id: 1,
    href: "/inner/1",
    imgSrc: "/assets/id3c2-dadc1ecf.png",
    imgAlt: "Revolutionising Measurement and Alignment Procedures with Steel ",
    title: "Revolutionising Measurement and Alignment Procedures with Steel ",
    tags: ["Steel", "Dimension Control"],
    description: "NMDC, an Indian public sector undertaking involved in the exploration of iron ore, copper, and other important minerals, was facing a problem in achieving and maintaining precise alignment of critical mill machines, which was highly downgrading the....",
    category: "Steel"
  },
  {
    id: 2,
    href: "/inner/2",
    imgSrc: "/assets/id2list-3bd9ca70.png",
    imgAlt: "Reducing Downtime and Enhancing Precise Turbine Boxup with the Power Sector ",
    title: "Reducing Downtime and Enhancing Precise Turbine Boxup with the Power Sector ",
    tags: ["Power", "Dimension Control - DPM"],
    description: "The power sector faced a critical issue in power generation in the case of turbine heating, vibrations, or imprecise boxup during maintenance.",
    category: "Power"
  },
  {
    id: 3,
    href: "/inner/3",
    imgSrc: "/assets/id1c2-6328b31a.png",
    imgAlt: "Precise Revamping and Modernization for Offshore Platforms",
    title: "Precise Revamping and Modernization for Offshore Platforms",
    tags: ["Oil & Gas", "As-built Engineering"],
    description: "Reliance Industries Limited (RIL) faced a daunting challenge in replacing six existing Coke Drums within a complex structure and platform arrangement at their facility in Jamnagar, Gujarat. The critical issue was determining whether the surrounding structure could be safely cut at a specific level to facilitate the removal and replacement of the old drums with new ones.",
    category: "Oil & Gas"
  },
  {
    id: 4,
    href: "/inner/4",
    imgSrc: "/assets/id3c3-775b0b1f.png",
    imgAlt: "Streamlining Project Management for Green Hydrogen Plants",
    title: "Streamlining Project Management for Green Hydrogen Plants",
    tags: ["Power", "Owner’s Engineering"],
    description: "Addressing the intricacies of establishing Green Hydrogen plants from concept to production, ensuring seamless execution, and compliance with technical, economic, and environmental considerations.",
    category: "Steel"
  },
  {
    id: 5,
    href: "/inner/5",
    imgSrc: "/assets/id9c1-106a1a2b.png",
    imgAlt: "As-Built Digital Solutions for Revamping and Modernization of Brownfield Facilities and Assets.",
    title: "As-Built Digital Solutions for Revamping and Modernization of Brownfield Facilities and Assets.",
    tags: ["Power", "Re-engineering & Supply"],
    description: "The steel industry encountered a significant challenge due to the lack of digital solutions for brownfield facilities and assets to integrate with the latest advancements in applications.",
    category: "Power"
  },
  {
    id: 6,
    href: "/inner/6",
    imgSrc: "/assets/id1c1-969f7679.png",
    imgAlt: "Indigenising the alignment of critical diaphragms with NTPC",
    title: "Indigenising the alignment of critical diaphragms with NTPC",
    tags: ["Power", "Re-engineering & Supply"],
    description: "Unit 1 (660 MW) of NTPC Sipat (2980 MW) was getting delayed because of Russian experts who were to come to do the diaphragm centring of LP1 and LP2.",
    category: "Power"
  },
  {
    id: 7,
    href: "/inner/7",
    imgSrc: "/assets/id7-733ccb04.png",
    imgAlt: "Precise Coke Drum Replacement at an elevation of 106 meters with Reliance Industries Limited",
    title: "Precise Coke Drum Replacement at an elevation of 106 meters with Reliance Industries Limited",
    tags: ["Oil & Gas", "As-built Engineering"],
    description: "Offshore platforms started 40 years ago with available resources and designs that are now unfit to sustain high production for crude oil and require revamping and modernization to enhance capacity and safety.",
    category: "Oil & Gas"
  },
  {
    id: 8,
    href: "/inner/8",
    imgSrc: "/assets/id3c1-65ad2531.png",
    imgAlt: "Periodical Health Assessment of Storage Tanks",
    title: "Periodical Health Assessment of Storage Tanks",
    tags: ["Others", "Dimension Control"],
    description: "The challenge involved conducting geometrical measurements and inspections on diverse storage tanks, including external floating and fixed roof tanks, to assess dimensional compliance with API 653 standards.",
    category: "Others"
  },
  {
    id: 9,
    href: "/inner/9",
    imgSrc: "/assets/id9-5973ffa9.png",
    imgAlt: "Reducing Operational Costs and Improving Quality with Tata Steel",
    title: "Reducing Operational Costs and Improving Quality with Tata Steel",
    tags: ["Steel", "Dimension Control"],
    description: "Tata Steel Limited faced a critical challenge in their production process. Their RCL 1 section suffered from alignment issues in the share pinch roll sheet, resulting in damaged edges of the final output. These issues impacted product quality and increased operational costs due to traditional measurement methods that were time-consuming and unreliable.",
    category: "Steel"
  },
  {
    id: 10,
    href: "/inner/10",
    imgSrc: "/assets/id10-cb721387.png",
    imgAlt: "Contributing to Efficient Power Generation with Hydropower",
    title: "Contributing to Efficient Power Generation with Hydropower",
    tags: ["Power", "Dimension Control - DPM"],
    description: "Voith Hydro, a leading hydroelectric technology and services provider, faced a significant challenge with generator rotors that had been lying horizontally at a site for more than three years. Due to extended inactivity, these rotors had developed sag, compromising the generator's performance and posed a potential threat to the entire hydroelectric power generation project.",
    category: "Power"
  },
  {
    id: 11,
    href: "/inner/11",
    imgSrc: "/assets/id11-f7fd3c94.png",
    imgAlt: "Reducing Maintenance Downtime to just 30 Minutes with Indian Oil Corporation Limited",
    title: "Reducing Maintenance Downtime to just 30 Minutes with Indian Oil Corporation Limited",
    tags: ["Power", "As-built Engineering"],
    description: "Maintenance of coke drums within a Delayed Coker Unit (DCU) at the Digboi, Assam, location of Indian Oil Corporation Limited (IOCL) posed a significant challenge.",
    category: "Power"
  },
  {
    id: 12,
    href: "/inner/12",
    imgSrc: "/assets/id12-b7865835.png",
    imgAlt: "Alignment Inspection and Structural Integrity Solutions for Overhead Cranes",
    title: "Alignment Inspection and Structural Integrity Solutions for Overhead Cranes",
    tags: ["Others", "Dimension Control"],
    description: "Frequent crane failures due to misalignments and structural issues pose significant safety and financial risks, demanding a proactive approach to prevent breakdowns and optimize operational efficiency.",
    category: "Others"
  },
  {
    id: 13,
    href: "/inner/13",
    imgSrc: "/assets/13card-bddd24a4.png",
    imgAlt: "Physical Parts to Manufacturing Blueprints for Essential Spares and Components.",
    title: "Physical Parts to Manufacturing Blueprints for Essential Spares and Components.",
    tags: ["Others", "Re-Engineering & Supply"],
    description: "We addressed the challenge of capturing physical parts into manufacturing blueprints for essential spares and components. This is especially pertinent for items with high costs, extended delivery times, and dependence on foreign supplies.",
    category: "Others"
  },
  {
    id: 14,
    href: "/inner/14",
    imgSrc: "/assets/id6c2-d4e83467.png",
    imgAlt: "Safe and Efficient HV Transformer Alignment with the GIS Floor",
    title: "Safe and Efficient HV Transformer Alignment with the GIS Floor",
    tags: ["Power", "Dimension Control - DPM"],
    description: "NTPC ventured into hydropower with this plant and faced a perplexing challenge in determining the accurate openings of High Voltage (HV) transformer bushing terminals with respect to Gas Insulated Substation (GIS) floor openings.",
    category: "Power"
  },
  {
    id: 15,
    href: "/inner/15",
    imgSrc: "/assets/id5c3-06e459c3.png",
    imgAlt: "Enhancing Passenger Comfort with Wipro Limited",
    title: "Enhancing Passenger Comfort with Wipro Limited",
    tags: ["Others", "Re-engineering & Supply"],
    description: "This project in Japan for the automotive industry required modelling of every component and part by the deputation team in Japan and conducting the project there.",
    category: "Others"
  },
  {
    id: 16,
    href: "/inner/16",
    imgSrc: "/assets/id16-e2acc34b.png",
    imgAlt: "Curbing OEM Dependency for Critical Component Fabrication with Dalmia",
    title: "Curbing OEM Dependency for Critical Component Fabrication with Dalmia",
    tags: ["Others", "Re-engineering & Supply"],
    description: "Dalmia faced a critical challenge in the design and supply of Lamella plates in their conveyor system for the essential supplies of raw material from the mine to the plant.",
    category: "Others"
  },
  {
    id: 17,
    href: "/inner/17",
    imgSrc: "/assets/id16c3-472f6123.png",
    imgAlt: "End-to-End Owner’s Engineering Solutions Form Power Plant Excellence",
    title: "End-to-End Owner’s Engineering Solutions Form Power Plant Excellence",
    tags: ["Power", "Owner’s Engineering"],
    description: "Streamlining the entire lifecycle of thermal and gas power plant, addressing challenges from feasibility assessments to commissioning, for enhanced efficiency and compliance.",
    category: "Power"
  },
  {
    id: 18,
    href: "/inner/18",
    imgSrc: "/assets/id4c3-02851a0a.png",
    imgAlt: "Comprehensive Engineering Solutions To Revolutionize Solar PV Plants",
    title: "Comprehensive Engineering Solutions To Revolutionize Solar PV Plants",
    tags: ["Power", "Owner’s Engineering"],
    description: "Optimizing the performance and efficiency of Solar PV Plants, addressing challenges from planning to commissioning, to ensure sustainable and reliable energy generation.",
    category: "Power"
  },
  {
    id: 19,
    href: "/inner/19",
    imgSrc: "/assets/19new-9afc8ed0.png",
    imgAlt: "Structural Health Assessment (SHA) for Old Steel Structures",
    title: "Structural Health Assessment (SHA) for Old Steel Structures",
    tags: ["Steel", "Owner’s Engineering"],
    description: "Old steel structures pose risks of performance degradation and potential accidents, necessitating a thorough assessment for enhanced structural health, HSE compliance, and a risk-free working zone.",
    category: "Steel"
  }
];

const FilterableList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='list-container' >
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`btnFl ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="list-container">
        {listItems
          .filter(
            (item) =>
              selectedCategory === 'All' || item.category === selectedCategory
          )
          .map((item) => (
            <a href={item.href} key={item.id}>
              <div className="list-item" data-category={item.category}>
                <div className="list-item-left">
                  <h2 className="font-face-futur-md-bt">{item.title}</h2>
                  <div className="tags font-face-futur-BK">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="font-face-futurabkbt"
                       
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-face-futur-LT">{item.description}</p>
                </div>
                <div className="list-item-right">
                  <img src={item.imgSrc} alt={item.title} />
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default FilterableList;
