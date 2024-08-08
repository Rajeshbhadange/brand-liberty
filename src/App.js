import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/sidebar/Sidebar";
import Navbar from "./layouts/navbar/navbar";
import Box from "./layouts/dashbord/fbox/box";
import Dashboard from "./layouts/dashbord/Dashboard";
import Calendar from "./layouts/calender/calender";
import MyProject from "./examples/Myproject/MyProject";
import ContactList from "./examples/contact/contactList";
import CreateContact from "./examples/contact/ContactForm/CreateContact";
import TaskList from "./layouts/tasks/tasksList/TasksList";
import LeadList from "./examples/LeadsList/LeadList";
import CreateLead from "./examples/LeadsList/CreateLead";
import CreateEvent from "./layouts/calender/CreateEvent";
import Preference from "./layouts/Preference/preference";
import SearchForm from "./layouts/navbar/Search/searchForm";
// import ProfileForm from "./layouts/Preference/Profile/profile";
import CalendarForm from "./layouts/Preference/Calender/CalenderForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/box" element={<Box />} />
            <Route path="/myproject" element={<MyProject />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contactList" element={<ContactList />} />
            <Route path="/createContact" element={<CreateContact />} />
            <Route path="/leadList" element={<LeadList />} />
            <Route path="/CreateLead" element={<CreateLead />} />
            <Route path="/CreateEvent" element={<CreateEvent />} />
            <Route path="/taskList" element={<TaskList />} />
            <Route path="/preference" element={<Preference />} />
            {/* <Route path="/profile" element={<ProfileForm />} /> */}
            <Route path="/searchForm" element={<SearchForm />} />
            <Route path="/CalendarForm" element={<CalendarForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
