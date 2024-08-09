import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Box, Typography, Button, TextField, Grid } from "@mui/material";

const DateInput = ({ label, value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
    setIsOpen(false); // Close the calendar after selecting a date
  };

  return (
    <Box>
      <TextField
        label={label}
        type="text"
        fullWidth
        value={value}
        onClick={() => setIsOpen(true)} // Open the calendar on click
        onChange={(e) => onChange(e.target.value)}
      />
      {isOpen && (
        <Box sx={{ position: "relative", zIndex: 1061 }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            showMonthYearPicker // Show only month and year
            inline
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="datepicker-header">
                <Button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  Prev
                </Button>
                <select
                  value={date.getMonth()}
                  onChange={({ target: { value } }) => changeMonth(value)}
                >
                  {Array.from({ length: 12 }, (e, i) => (
                    <option key={i} value={i}>
                      {new Date(0, i).toLocaleString("en-US", {
                        month: "short",
                      })}
                    </option>
                  ))}
                </select>
                <select
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {Array.from({ length: 20 }, (e, i) => (
                    <option key={i} value={2020 + i}>
                      {2020 + i}
                    </option>
                  ))}
                </select>
                <Button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  Next
                </Button>
              </div>
            )}
          />
          <div
            className="datepicker-footer"
            display="flex"
            justifyContent="space-between"
          >
            <Button onClick={() => setSelectedDate(new Date())}>Today</Button>
            <Button onClick={() => setIsOpen(false)}>Done</Button>
          </div>
        </Box>
      )}
    </Box>
  );
};

const ReportDateModal = ({ open, onClose }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="report-date-modal-title"
      aria-describedby="report-date-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="report-date-modal-title" variant="h5" component="h2">
          Report Dates
        </Typography>
        <Box component="form" onSubmit={handleSave} id="reportdateForm">
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <DateInput
                label="Start"
                value={startDate}
                onChange={setStartDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateInput label="End" value={endDate} onChange={setEndDate} />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReportDateModal;
