import React from "react";
import "./Contribute.css";
import Navbar from "../../Components/Navbar/Navbar";
import contributeData from "../../data/contribute.json";

function Contribute() {
  return (
    <div className="contribute-container">
      <Navbar />
      <div className="contribute-header">
        <h1>Contribute to Tech Myrmidons</h1>
        <p>Join our community by contributing to the following domains</p>
      </div>
      
      <div className="domains-container" id="domains">
        <h2>Domains to Explore & Contribute</h2>
        <div className="domains-grid">
          {contributeData.domains.map((domain, index) => (
            <div className="domain-card" key={index}>
              <h3>{domain.name}</h3>
              <p>{domain.description}</p>
              <a href={domain.path} className="explore-link">Explore Domain</a>
            </div>
          ))}
        </div>
      </div>

      <div className="contribution-types">
        <h2>Suggested Contributions</h2>
        <div className="contribution-list">
          {contributeData.contributionTypes.map((type, index) => (
            <div className="contribution-item" key={index}>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
              <ul>
                {type.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contribute;