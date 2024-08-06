import React, { useState } from "react";
import "./Leads.css";

const LeadsAssigned = () => {
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (section) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="container-leads">
      <div className="boxs-leads">
        <div className="box leads-1">
          <h4>Leads assigned to each user</h4>
          <img src="src/assest/img/Circle.png" alt="" />
          <div className="dm">
            <button
              className="menu-1"
              onClick={() => toggleDropdown("events1")}
            >
              ☰
              <div className="dropdown">
                <a href="#Events" onClick={() => toggleDropdown("events1")}></a>
                {dropdownStates.events1 && (
                  <div className="menu-item-1">
                    <div className="leads-assigned">
                      <a href="./images/G1.svg" download="6rsobt9c.svg">
                        Download SVG
                      </a>
                      <br></br>
                      <a href="./images/G2.png" download="6rsobt9c.png">
                        Download PNG
                      </a>
                      <br></br>
                      <a href="./images/G3.csv" download="6rsobt9c.csv">
                        Download CVG
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
        <div className="box leads-2">
          <h4>Leads by source</h4>
          <img src="/Images/sidebar-logo.png" alt="xyz" />

          <div className="dm-2">
            <button
              className="menu-2"
              onClick={() => toggleDropdown("events2")}
            >
              ☰
              <div className="dropdown">
                <a href="#Events" onClick={() => toggleDropdown("events2")}></a>
                {dropdownStates.events2 && (
                  <div className="menu-item-2">
                    <div className="leads-source">
                      <a href="./images/G1.svg" download="6rsobt9c.svg">
                        Download SVG
                      </a>
                      <br></br>
                      <a href="./images/G2.png" download="6rsobt9c.png">
                        Download PNG
                      </a>
                      <br></br>
                      <a href="./images/G3.csv" download="6rsobt9c.csv">
                        Download CVG
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsAssigned;
