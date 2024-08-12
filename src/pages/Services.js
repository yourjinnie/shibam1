import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AsBuilt from '../components/AsBuilt';
import FAQAccordion from '../components/FAQAccordion';
import DimensionControl from '../components/DimensionControl';
import OwnersEngineering from '../components/OwnersEngineering';
import REAS from '../components/REAS';
import DgitalTwins from '../components/DgitalTwins';
import { faqAsBuilt, faqDimensionControl, faqOwnersEngineering, faqREAS, faqDigitalTwins } from "../data/ServicesFAQs";

export default function Services() {
  const { service } = useParams();
  const navigate = useNavigate();

  const servicesMapping = {
    'as-built': 'As-Built',
    'dimension-control': 'Dimension Control',
    'owners-engineering': 'Owner’s Engineering',
    're-engineering-supply': 'Re-engineering & Supply',
    'digital-twins': 'Digital Twins'
  };

  const initialTab = service ? servicesMapping[service.toLowerCase()] : 'As-Built';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (service) {
      setActiveTab(servicesMapping[service.toLowerCase()]);
    }
  }, [service]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const urlService = Object.keys(servicesMapping).find(key => servicesMapping[key] === tabName);
    navigate(`/services/${urlService}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'As-Built':
        return <AsBuilt />;
      case 'Dimension Control':
        return <DimensionControl />;
      case 'Owner’s Engineering':
        return <OwnersEngineering />;
      case 'Re-engineering & Supply':
        return <REAS />;
      case 'Digital Twins':
        return <DgitalTwins />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="services-wrap">
        <div className="services-hero">
          <h6 className="ser-h7 font-face-futur-LT"> SERVICES</h6>
          <h1 className="ser-h1 font-face-futur-md-bt">
            Solutions For <br />
            Continued Success
          </h1>
          <h6 className="ser-h6 font-face-futur-LT">
            Technology-enabled engineering solutions
          </h6>
        </div>
      </section>
      <section>
        <div>
          <section className="navX">
            <div className="tab-nav-ser font-face-futur-md-bt">
              {Object.values(servicesMapping).map(tab => (
                <div
                  key={tab}
                  className={`tab-item-ser ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </section>

          <div className="myser font-face-futur-md-bt">
            <div className="tab-content">{renderContent()}</div>
          </div>

          <div id="faqM">
            <section className="tab-cards-section" id="mainD">
              {activeTab === 'As-Built' && <FAQAccordion faqs={faqAsBuilt} />}
              {activeTab === 'Dimension Control' && <FAQAccordion faqs={faqDimensionControl} />}
              {activeTab === 'Owner’s Engineering' && <FAQAccordion faqs={faqOwnersEngineering} />}
              {activeTab === 'Re-engineering & Supply' && <FAQAccordion faqs={faqREAS} />}
              {activeTab === 'Digital Twins' && <FAQAccordion faqs={faqDigitalTwins} />}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
