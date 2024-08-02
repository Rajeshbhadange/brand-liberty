import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const CreateContact = () => {
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
    assignUser: "",
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

  const checkboxes = [
    { label: "Invoices Permission", name: "invoicesPermission" },
    { label: "Estimates Permission", name: "estimatesPermission" },
    { label: "Contracts Permission", name: "contractsPermission" },
    { label: "Proposals Permission", name: "proposalsPermission" },
    { label: "Support Permission", name: "supportPermission" },
    { label: "Projects Permission", name: "projectsPermission" },
  ];

  const users = [
    { label: "Select Assign User ", value: "user1" },
    { label: "XfinitySoft", value: "user2" },

    // Add more users as needed
  ];

  return (
    <Box
      sx={{
        width: "97%",
        p: 3,
        border: "2px solid #f2f2f2",
        backgroundColor: "white",
        boxShadow: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Create Contact
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
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Assign User</InputLabel>
              <Select
                label="Assign User"
                name="assignUser"
                value={formData.assignUser}
                onChange={handleChange}
              >
                {users.map((user) => (
                  <MenuItem key={user.value} value={user.value}>
                    {user.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Permissions
        </Typography>
        <FormGroup>
          {checkboxes.map((checkbox) => (
            <FormControlLabel
              control={
                <Checkbox
                  name={checkbox.name}
                  checked={formData[checkbox.name]}
                  onChange={handleChange}
                />
              }
              label={checkbox.label}
              key={checkbox.name}
            />
          ))}
        </FormGroup>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Save Contact
        </Button>
      </form>
    </Box>
  );
};

export default CreateContact;
