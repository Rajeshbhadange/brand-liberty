import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const CreateLead = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    primaryEmail: "",
    invoicesPermission: false,
    estimatesPermission: false,
    contractsPermission: false,
    proposalsPermission: false,
    supportPermission: false,
    projectsPermission: false,
    secondName: "",
    secondaryEmail: "",
    primaryPhone: "",
    mobilePhone: "",
    assignUser1: "",
    assignUser2: "",
    assignUser3: "",
    xfinitySoftPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const textFields = [
    { label: "First Name", name: "firstName" },
    { label: "Second Name", name: "secondName" },
    { label: "Primary Email", name: "primaryEmail" },
    { label: "Secondary Email", name: "secondaryEmail" },
    { label: "Primary Phone", name: "primaryPhone" },
    { label: "Mobile Phone", name: "mobilePhone" },
    {
      label: "Password",
      name: "Password",
      type: "password",
    },
  ];

  const dropdowns = [
    {
      label: "Assign User 1",
      name: "assignUser1",
      options: [
        { value: "user1", label: "Select Assign User" },
        { value: "user2", label: "XfinitySoft" },
      ],
    },
    {
      label: "Assign User 2",
      name: "assignUser2",
      options: [
        { value: "user4", label: "Select Lead Status" },
        { value: "user5", label: "Junk" },
        { value: "user6", label: "Started" },
        { value: "user6", label: "appointed" },
      ],
    },
    {
      label: "Assign User 3",
      name: "assignUser3",
      options: [
        { value: "user7", label: "Select Lead Source " },
        { value: "user8", label: "Google" },
        { value: "user9", label: "Facebook" },
        { value: "user9", label: "In Person" },
      ],
    },

    {
      label: "Assign User 4",
      name: "assignUser4",
      options: [
        { value: "user7", label: "Commision " },
        { value: "user8", label: "Agent" },
        { value: "user9", label: "rent" },
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "97%",
        p: 3,
        marginTop: 5,
        border: "2px solid #f2f2f2",
        backgroundColor: "white",
        boxShadow: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Create Lead
        </Typography>
        <Typography variant="h6" gutterBottom>
          Basic Information
        </Typography>
        <Grid container spacing={2}>
          {textFields.map((field) => (
            <Grid item xs={12} sm={6} key={field.name}>
              <TextField
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                type={field.type || "text"}
                fullWidth
              />
            </Grid>
          ))}
          {dropdowns.map((dropdown) => (
            <Grid item xs={12} sm={6} key={dropdown.name}>
              <FormControl fullWidth>
                <InputLabel>{dropdown.label}</InputLabel>
                <Select
                  name={dropdown.name}
                  value={formData[dropdown.name]}
                  onChange={handleChange}
                >
                  {dropdown.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Permissions
        </Typography>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Save Lead
        </Button>
      </form>
    </Box>
  );
};

export default CreateLead;
