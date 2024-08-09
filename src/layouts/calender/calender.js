import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Button, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ReportDateModal from "./ReportDate";

const ReportDates = () => {
  const startDate = "2024-01-01";
  const endDate = "2024-12-31";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeDates = () => {
    setIsModalOpen(true);
    console.log("Change Report Dates button clicked");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        display: "inline-block",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        border: "1px solid #e0e0e0",
        borderRadius: 1,
        boxShadow: 1,
        maxWidth: 350,
        marginRight: 1,
        marginBottom: "22em",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography gutterBottom>Reports Dates Are</Typography>
      <Typography variant="body1" gutterBottom>
        Start: {startDate} End: {endDate}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px" }}
        startIcon={<AddCircleOutline />}
        onClick={handleChangeDates}
      >
        Change Report Dates
      </Button>

      {isModalOpen && (
        <ReportDateModal open={isModalOpen} onClose={handleCloseModal} />
      )}
    </Box>
  );
};

function Calendar() {
  return (
    <>
      <h2 className="cc-link">
        <div className="header-container">
          <h5>Create Leads</h5>
          <h6>
            <Link to="/">Dashboard</Link>
            <span id="sp"> / Create Leads</span>
          </h6>
        </div>
      </h2>
      <Box
        sx={{
          marginTop: "-3em",
          display: "flex",
          justifyContent: "center",
          width: "98%",
          p: 3,
        }}
      >
        <ReportDates />
        <Box
          sx={{
            flexGrow: 1,
            border: "2px Solid rgb(217, 225, 232)",
            marginLeft: "1em",
            p: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#FFFFFF",
            marginBottom: "2em",
          }}
        >
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            buttonText={{
              today: "Today",
              month: "Month",
              week: "Week",
              day: "Day",
            }}
            height="70vh"
          />
        </Box>
      </Box>
    </>
  );
}

export default Calendar;
