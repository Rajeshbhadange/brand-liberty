import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressBook,
  faUsers,
  faCalendar,
  faTasks,
  faBalanceScale,
  faMoneyBill,
  faFileContract,
  faProjectDiagram,
  faLifeRing,
  faFile,
  faCog,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";

const Sidebar = () => {
  const [dropdownStates, setDropdownStates] = useState({
    contact: false,
    leads: false,
    events: false,
    tasks: false,
    sales: false,
    contract: false,
    expence: false,
    project: false,
    suppot: false,
    reports: false,
    preference: false,
    settings: false,
  });

  // sidebar navigate
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "My Project", path: "/myproject" },
    { label: "Calendar", path: "/calendar" },
    { label: "Contact List", path: "/contactList" },
    { label: "Create Contact", path: "/CreateContact" },
    // Add more items as needed
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = (section) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  // Memoize handleOutsideClick
  const handleOutsideClick = useCallback(
    (e) => {
      if (
        isSidebarOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".sidebar-toggle")
      ) {
        setIsSidebarOpen(false);
      }
    },
    [isSidebarOpen]
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h2>Upping CRM</h2>
        <button className="sidebar-toggle" onClick={handleSidebarToggle}>
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <h6>MENU</h6>

        <ul>
          <li>
            <a href="#Dashboard" onClick={() => handleNavigation("/")}>
              Dashboard
            </a>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Contact" onClick={() => toggleDropdown("contact")}>
                <div>
                  <FontAwesomeIcon icon={faAddressBook} size="1x" />
                </div>
                <div ClassName="text">Contact</div>
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => handleNavigation(item.contactList.js)}
                  >
                    {item.contactList}
                  </li>
                ))}

                <ExpandMoreIcon />
              </a>
              {dropdownStates.contact && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#ListContact">List Contact</a>
                  </li>
                  <li>
                    <a href="#CreateNew">Create New</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Leads" onClick={() => toggleDropdown("leads")}>
                <FontAwesomeIcon icon={faUsers} size="1x" />
                Leads <ExpandMoreIcon />
              </a>
              {dropdownStates.leads && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#ListLead">List Lead</a>
                  </li>
                  <li>
                    <a href="#Create-new">Create new</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Events" onClick={() => toggleDropdown("events")}>
                <FontAwesomeIcon icon={faCalendar} size="1x" />
                Events <ExpandMoreIcon />
              </a>
              {dropdownStates.events && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#Calendar"
                      onClick={() => handleNavigation("/calendar")}
                    >
                      My Calendar
                    </a>
                  </li>
                  <li>
                    <a href="#Sheard-Calender">Sheard Calender</a>
                  </li>
                  <li>
                    <a href="#Create-Calender">Create</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Tasks" onClick={() => toggleDropdown("tasks")}>
                <FontAwesomeIcon icon={faTasks} size="1x" />
                Tasks <ExpandMoreIcon />
              </a>
              {dropdownStates.tasks && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#TasksList">Tasks List</a>
                  </li>
                  <li>
                    <a href="#ViewTasks">Tasks Card</a>
                  </li>
                  <li>
                    <a href="#Create-Task">Create new</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Sales" onClick={() => toggleDropdown("sales")}>
                <FontAwesomeIcon icon={faBalanceScale} size="1x" />
                Sales <ExpandMoreIcon />
              </a>
              {dropdownStates.sales && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#Proposal">Proposal</a>
                  </li>
                  <li>
                    <a href="#Estimates">Estimates</a>
                  </li>
                  <li>
                    <a href="#Invoices">Invoices</a>
                  </li>
                  <li>
                    <a href="#Payment">Payment</a>
                  </li>
                  <li>
                    <a href="#Items">Items</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Expence" onClick={() => toggleDropdown("expence")}>
                <FontAwesomeIcon icon={faMoneyBill} size="1x" />
                Expence <ExpandMoreIcon />
              </a>
              {dropdownStates.expence && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#Expence List">Expence List</a>
                  </li>
                  <li>
                    <a href="#ExpenceCeate">Create New</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#contract" onClick={() => toggleDropdown("contract")}>
                <FontAwesomeIcon icon={faFileContract} size="1x" />
                Contract <ExpandMoreIcon />
              </a>
              {dropdownStates.contract && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#ContractList">Contract List</a>
                  </li>
                  <li>
                    <a href="#ContractsNew">Create New</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Project" onClick={() => toggleDropdown("project")}>
                <FontAwesomeIcon icon={faProjectDiagram} size="1x" />
                Project <ExpandMoreIcon />
              </a>
              {dropdownStates.project && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#My Project"
                      onClick={() => handleNavigation("/myproject")}
                    >
                      Project List
                    </a>
                  </li>
                  <li>
                    <a href="#createProject">Create new</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Suppot" onClick={() => toggleDropdown("suppot")}>
                <FontAwesomeIcon icon={faLifeRing} size="1x" />
                Support <ExpandMoreIcon />
              </a>
              {dropdownStates.suppot && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#List">List</a>
                  </li>
                  <li>
                    <a href="#SupportCreate">Create New</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Reports" onClick={() => toggleDropdown("reports")}>
                <FontAwesomeIcon icon={faFile} size="1x" />
                Reports <ExpandMoreIcon />
              </a>
              {dropdownStates.reports && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#Sales">Sales</a>
                  </li>
                  <li>
                    <a href="#Expence">Expence</a>
                  </li>
                  <li>
                    <a href="#ExpenceVSIncome">Expence Vs Income</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div ClassName="pre">
              <a href="#Preference" className="pre">
                <FontAwesomeIcon icon={faCog} size="1x" />
                Preference
              </a>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Settings" onClick={() => toggleDropdown("settings")}>
                <FontAwesomeIcon icon={faCogs} size="1x" />
                Settings <ExpandMoreIcon />
              </a>
              {dropdownStates.settings && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#Users">Users</a>
                  </li>
                  <li>
                    <a href="#CustomField">Custom Field</a>
                  </li>
                  <li>
                    <a href="#CustomFieldList">Custom Field Lists</a>
                  </li>
                  <li>
                    <a href="#Roles">Roles</a>
                  </li>
                  <li>
                    <a href="#Importer">Importer</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
