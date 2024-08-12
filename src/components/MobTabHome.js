import React, { useState } from 'react';

const MobTabHome = () => {
  const [activeTab, setActiveTab] = useState('Oil & Gas');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Oil & Gas':
        return (
          <div className="Mob-tab-content-main">
            <div className="Mob-content-layout">
              <div className="Mob-image-text">
                <div className="Mob-content-imageMain">
                  <img src="/assets/oil-ad8628de.jpg?v=1718875891360" alt="Oil & Gas" />
                </div>
              </div>
              <div className="Mob-card">
                <div className="Mob-card-Gr">
                  <div className="Mob-cardContent">
                    <p className="font-face-futur-LT Mob-cardParaMain">
                      With our expertise in tackling intricate challenges, we stand as a beacon of excellence in the oil and gas industry. We consistently subject our work to rigorous quality and standard checks, setting new benchmarks for the industry.
                    </p>
                  </div>
                </div>
                <div className="Mob-image-text-contentMain">
                  <span className="cse font-face-futur-BK">CASE STUDY</span>
                  <div className="mxk">
                    <h3 className="font-face-futur-md-bt" id="now">
                      Reducing Maintenance Downtime to just 30 minutes With IOCL
                    </h3>
                    <a
                      rel="noopener noreferrer"
                      className="Mob-cardButton font-face-futur-LT"
                      href="/sectors"
                      target="_blank"
                    >
                      <span className="Mob-cardBGr Mob-shimmer-text"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Steel':
        return (
          <div className="Mob-tab-content-main">
            <div className="Mob-content-layout">
              <div className="Mob-image-text">
                <div className="Mob-content-imageMain">
                  <img src="/assets/tab1-86ebfe94.jpg?v=1720421894288" alt="Steel" />
                </div>
              </div>
              <div className="Mob-card">
                <div className="Mob-card-Gr">
                  <div className="Mob-cardContent">
                    <p className="font-face-futur-LT Mob-cardParaMain">
                      With a rich heritage deeply rooted in the world of engineering, we thrive on embracing cutting-edge advancements and an unwavering commitment to excellence to provide transformative engineering solutions that perfectly suit your business needs.
                    </p>
                  </div>
                </div>
                <div className="Mob-image-text-contentMain">
                  <span className="cse font-face-futur-BK">CASE STUDY</span>
                  <div className="mxk">
                    <h3 className="font-face-futur-md-bt" id="now">
                      Reducing Costs and Improving Quality Control With Tata Steel
                    </h3>
                    <a
                      rel="noopener noreferrer"
                      className="Mob-cardButton font-face-futur-LT"
                      href="/sectors"
                      target="_blank"
                    >
                      <span className="Mob-cardBGr"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Power':
        return (
          <div className="Mob-tab-content-main"><div className="Mob-content-layout"><div className="Mob-image-text"><div className="Mob-content-imageMain"><img src="/assets/power-da934b3b.jpg?v=1720422199837" /></div></div><div className="Mob-card"><div className="Mob-card-Gr"><div className="Mob-cardContent"><p className="font-face-futur-LT Mob-cardParaMain">Renowned for our expertise in solving complex problems, we consistently deliver impeccable solutions. One of our proudest achievements is the development of a ground breaking, self-driven solution for the Power sector, aptly named DPM - Digital Profile Mapping.</p></div></div><div className="Mob-image-text-contentMain"><span className="cse font-face-futur-BK">CASE STUDY</span><div className="mxk"><h3 className="font-face-futur-md-bt" id="now">Contributing To Efficient Power Generation With Voith Hydro</h3><a rel="noopener noreferrer" className="Mob-cardButton font-face-futur-LT" href="/sectors" target="_blank"><span className="Mob-cardBGr "> </span></a></div></div></div></div></div>

        );
      case 'Others':
        return (
          <div className="Mob-tab-content-main">
            <div className="Mob-content-layout">
              <div className="Mob-image-text">
                <div className="Mob-content-imageMain">
                  <img src="/assets/others-816c7c8b.jpg?v=1720422255383" />
                </div>
              </div>
              <div className="Mob-card">
                <div className="Mob-card-Gr">
                  <div className="Mob-cardContent">
                    <p className="font-face-futur-LT Mob-cardParaMain">
                      With deep roots in the oil and gas, steel, and power
                      sectors, we have also partnered with leaders in other
                      industries, resulting in a diversified impact.
                    </p>
                  </div>
                </div>
                <div className="Mob-image-text-contentMain">
                  <span className="cse font-face-futur-BK">CASE STUDY</span>
                  <div className="mxk">
                    <h3 className="font-face-futur-md-bt" id="now">
                      Enhancing Automotive Passenger Comfort with Wipro Limited
                    </h3>
                    <a
                      rel="noopener noreferrer"
                      className="Mob-cardButton font-face-futur-LT"
                      href="/sectors"
                      target="_blank"
                    >
                      <span className="Mob-cardBGr "> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className="layMob">
        <div className="Mob-tab-navigation">
          <button id="font-face-futur-md-bt" className={activeTab === 'Oil & Gas' ? 'active' : ''} onClick={() => setActiveTab('Oil & Gas')}>
            Oil &amp; Gas
          </button>
          <button id="font-face-futur-md-bt" className={activeTab === 'Steel' ? 'active' : ''} onClick={() => setActiveTab('Steel')}>
            Steel
          </button>
          <button id="font-face-futur-md-bt" className={activeTab === 'Power' ? 'active' : ''} onClick={() => setActiveTab('Power')}>
            Power
          </button>
          <button id="font-face-futur-md-bt" className={activeTab === 'Others' ? 'active' : ''} onClick={() => setActiveTab('Others')}>
            Others
          </button>
        </div>
        <div className="Mob-tabsWrap">
          {renderTabContent()}
        </div>
      </section>
    </>
  );
}

export default MobTabHome;
