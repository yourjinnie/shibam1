// import React, { useState, useEffect } from 'react';
// import Cards from './Cards'; // Assuming Cards component is in a separate file

// const JobsTabs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [activeTab, setActiveTab] = useState('Operations'); // Default active tab

//   useEffect(() => {
//     fetch('http://localhost:7000/api/jobs')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         setJobs(data)})
//       .catch(error => console.error('Error fetching jobs:', error));
//   }, []);

//   // Function to filter jobs based on category
//   const filterJobsByCategory = category => {
//     return jobs.filter(job => job.tabTitle === category);
//   };

//   return (
//     <div className="tabs-container">
//       <div className="tabs-nav">
//         {['Operations', 'Technical', 'Design Engineer', 'Business Dev.', 'Sales', 'Accounts'].map(category => (
//           <div
//             key={category}
//             className={`tab-nav-item font-face-futur-md-bt ${activeTab === category ? 'active' : ''}`}
//             onClick={() => setActiveTab(category)}
//           >
//             {category}
//           </div>
//         ))}
//       </div>
//       <div className="tab-content-career">
//         {/* Render Cards component with filtered jobs based on activeTab */}
//         <Cards jobs={filterJobsByCategory(activeTab)} />
//       </div>
//     </div>
//   );
// };

// export default JobsTabs;

import React, { useState, useEffect } from 'react';
import Cards from './Cards'; 

const JobsTabs = () => {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState('Operations'); 

  useEffect(() => {
    const fetchJobs = async () => {
      const url = 'https://sixdindia.com/backend/api/jobs';
      const secretKey = 'kapoorpranjil07'; 

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${secretKey}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  // Function to filter jobs based on category
  const filterJobsByCategory = category => {
    return jobs.filter(job => job.tabTitle === category);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-nav">
        {['Operations', 'Technical', 'Design Engineer', 'Business Dev.', 'Sales', 'Accounts'].map(category => (
          <div
            key={category}
            className={`tab-nav-item font-face-futur-md-bt ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="tab-content-career">
        {/* Render Cards component with filtered jobs based on activeTab */}
        <Cards jobs={filterJobsByCategory(activeTab)} />
      </div>
    </div>
  );
};

export default JobsTabs;

