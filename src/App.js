import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useNavigate,
} from "react-router-dom";
import Sidebar from "./layouts/sidebar/Sidebar";
import Navbar from "./layouts/navbar/navbar";
import Box from "./layouts/dashbord/fbox/box";
import Dashboard from "./layouts/dashbord/Dashboard";
import Calendar from "./layouts/calender/calender";
import MyProject from "./examples/Myproject/MyProject";
import ChartComponent from "./examples/Chart/ChartComponent";
import LeadsAssigned from "./examples/Chart/LeadsAssigned";
import ContactList from "./examples/contact/contactList";
import CreateContact from "./examples/contact/ContactForm/CreateContact";
import LeadList from "./examples/LeadsList/LeadList";
import TaskList from "./layouts/tasks/tasksList/TasksList";

function App() {
  // const nevigate = useNavigate();

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Navbar />
        <Box />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/box" element={<Box />} />
            <Route path="myproject" MyProject={<MyProject />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contactList" element={<ContactList />} />
            <Route path="/CreateContact" element={<CreateContact />} />
            {/* <Route Path="/TaskList" element={<TaskList />} /> */}
          </Routes>
        </main>
        {/* <Dashboard /> */}
        <MyProject />
        <Calendar />
        <ChartComponent />
        <LeadsAssigned />
        <ContactList />
        <LeadList />
        <div>
          <CreateContact />
        </div>
        <TaskList />
      </div>
    </Router>
  );
}

export default App;
