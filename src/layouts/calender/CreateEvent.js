import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [status, setStatus] = useState("");
  const [activityType, setActivityType] = useState("");
  const [sync, setSync] = useState(true);
  const [visibility, setVisibility] = useState("");
  const [description, setDescription] = useState("");
  const [assignTo, setAssignTo] = useState("1");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      title,
      allDay: allDay ? "YES" : "",
      status,
      activityType,
      sync: sync ? "YES" : "",
      visibility,

      description,
      assignTo,
      dateStart,
      dateEnd,
      createdby: "1",
    };

    // Handle form submission (e.g., send to server)
    console.log("Form data:", eventData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="mb-0">Create Event</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Create Event</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="hidden"
              name="_token"
              value="jUoZsrMgw53TS5BaN3bALPnMHAwDZvHkCEw7CPam"
            />
            <input type="hidden" name="_method" value="POST" />

            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-3">Basic Information</h4>
                <div className="row">
                  <div className="col-md-6 padding-0">
                    <FormControl fullWidth margin="normal">
                      <TextField
                        label="Title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={allDay}
                            onChange={(e) => setAllDay(e.target.checked)}
                          />
                        }
                        label="All Day"
                      />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value="">Select Status</MenuItem>
                        <MenuItem value="planned">Planned</MenuItem>
                        <MenuItem value="held">Held</MenuItem>
                        <MenuItem value="not held">Not Held</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Activity Type</InputLabel>
                      <Select
                        value={activityType}
                        onChange={(e) => setActivityType(e.target.value)}
                      >
                        <MenuItem value="">Select Activity Type</MenuItem>
                        <MenuItem value="call">Call</MenuItem>
                        <MenuItem value="meeting">Meeting</MenuItem>
                        <MenuItem value="dinner">Dinner</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={sync}
                            onChange={(e) => setSync(e.target.checked)}
                          />
                        }
                        label="Sync with Google"
                      />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Visibility</InputLabel>
                      <Select
                        value={visibility}
                        onChange={(e) => setVisibility(e.target.value)}
                      >
                        <MenuItem value="">Select Visibility</MenuItem>
                        <MenuItem value="public">Public</MenuItem>
                        <MenuItem value="private">Private</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <TextField
                        label="Description"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-6 padding-0">
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Assign User</InputLabel>
                      <Select
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                      >
                        <MenuItem value="1">XfinitySoft</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <label>Date Start</label>
                      <Flatpickr
                        value={dateStart}
                        onChange={([date]) => setDateStart(date)}
                        options={{
                          enableTime: true,
                          dateFormat: "Y-m-d H:i:s",
                        }}
                      />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <label>Date End</label>
                      <Flatpickr
                        value={dateEnd}
                        onChange={([date]) => setDateEnd(date)}
                        options={{
                          enableTime: true,
                          dateFormat: "Y-m-d H:i:s",
                        }}
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
