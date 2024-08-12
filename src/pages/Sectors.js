import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OilnGas from "../components/OilnGas";
import Steel from "../components/Steel";
import Power from "../components/Power";
import GreenEnergy from "../components/GreenEnergy";
import SectorsForm from "../components/SectorsForm";
import { faqGreenEnergy, faqOG, faqPower, faqSteel } from "../data/SectorsFAQ";
import FAQAccordion from "../components/FAQAccordion";

export default function Sectors() {
  const { sector } = useParams();
  const navigate = useNavigate();

  const sectorsMapping = {
    'oil-gas': 'OIL & GAS',
    'steel': 'STEEL',
    'power': 'POWER',
    'green-energy': 'GREEN ENERGY'
  };

  const initialTab = sector ? sectorsMapping[sector.toLowerCase()] : 'OIL & GAS';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (sector) {
      setActiveTab(sectorsMapping[sector.toLowerCase()]);
    }
  }, [sector]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const urlSector = Object.keys(sectorsMapping).find(key => sectorsMapping[key] === tabName);
    navigate(`/sectors/${urlSector}`);
  };

  const getHeightForTab = (tab) => {
    switch (tab) {
      case 'OIL & GAS':
        return 5800;
      case 'STEEL':
        return 5871;
      case 'POWER':
        return 6235;
      case 'GREEN ENERGY':
        return 6400;
      default:
        return 5843; // Default height
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'OIL & GAS':
        return <OilnGas />;
      case 'STEEL':
        return <Steel />;
      case 'POWER':
        return <Power />;
      case 'GREEN ENERGY':
        return <GreenEnergy />;
      default:
        return null;
    }
  };

  return (
    <div className="sectors-wrapper" style={{ height: getHeightForTab(activeTab) }}>
      <div className="sectors-content">
        <div className="sectors-hero">
          <div className="sectors-cards" />
        </div>
        <div className="sectors-nav">
          <ul className="tab-nav font-face-futur-LT">
            {Object.values(sectorsMapping).map(tab => (
              <li
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
          {renderTabContent()}
        </div>
        <SectorsForm />
        <section className="accordion-faq-section">
          <div className="faq-sss font-face-futur-BK">
            {activeTab === 'OIL & GAS' && <FAQAccordion faqs={faqOG} />}
            {activeTab === 'STEEL' && <FAQAccordion faqs={faqSteel} />}
            {activeTab === 'POWER' && <FAQAccordion faqs={faqPower} />}
            {activeTab === 'GREEN ENERGY' && <FAQAccordion faqs={faqGreenEnergy} />}
          </div>
        </section>
      </div>
    </div>
  );
}