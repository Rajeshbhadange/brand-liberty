import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Button, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

const ReportDates = () => {
  const startDate = "2024-01-01";
  const endDate = "2024-12-31";

  const handleChangeDates = () => {
    // Logic to change report dates
    console.log("Change Report Dates button clicked");
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
        backgroundColor: "	#FFFFFF",
      }}
    >
      <Typography gutterBottom>Reports dates are</Typography>
      <Typography variant="body1" gutterBottom>
        Start: {startDate} End: {endDate}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        marginTop="20px"
        startIcon={<AddCircleOutline />}
        onClick={handleChangeDates}
      >
        Change Report Dates
      </Button>
    </Box>
  );
};

function Calendar() {
  return (
    <Box
      sx={{
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
          marginLeft: "4em",
          p: 2,
          borderRadius: 1,
          boxShadow: 1,
          backgroundColor: "	#FFFFFF",
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
          height="70vh"
          // Additional FullCalendar props can be added here
        />
      </Box>
    </Box>
  );
}

export default Calendar;
