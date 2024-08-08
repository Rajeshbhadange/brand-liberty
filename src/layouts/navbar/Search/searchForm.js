import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";

const modules = [
  { value: "", label: "Select module" },
  { value: 1, label: "Contacts" },
  { value: 2, label: "Leads" },
  { value: 3, label: "Tasks" },
  { value: 4, label: "Events" },
  { value: 5, label: "Invoices" },
  { value: 6, label: "Users" },
  { value: 7, label: "Expense" },
  { value: 8, label: "Contract" },
  { value: 9, label: "Projects" },
  { value: 10, label: "Tickets" },
];

const fields = [
  { value: 1, label: "Name", type: "text" },
  { value: 2, label: "Email", type: "email" },
  { value: 3, label: "Mobile Number", type: "mobile_number" },
  { value: 4, label: "Assign User", type: "assign_to" },
  { value: 6, label: "Invoices Permission", type: "checkbox" },
  { value: 7, label: "Estimates Permission", type: "checkbox" },
  { value: 8, label: "Contracts Permission", type: "checkbox" },
  { value: 9, label: "Proposals Permission", type: "checkbox" },
  { value: 10, label: "Support Permission", type: "checkbox" },
  { value: 11, label: "Projects Permission", type: "checkbox" },
];

const operators = [
  { value: "e", label: "equals" },
  { value: "ne", label: "not equal to" },
  { value: "sw", label: "starts with" },
  { value: "ew", label: "ends with" },
  { value: "c", label: "contains" },
  { value: "nc", label: "does not contain" },
  { value: "em", label: "is empty" },
  { value: "nem", label: "is not empty" },
];

const SearchForm = () => {
  const [module, setModule] = useState("");
  const [conditionsOr, setConditionsOr] = useState([
    { field: "", operator: "", value: "" },
  ]);
  const [conditionsAnd, setConditionsAnd] = useState([
    { field: "", operator: "", value: "" },
  ]);
  const [searchResults] = useState([]);

  const handleModuleChange = (event) => {
    setModule(event.target.value);
  };

  const handleConditionChange = (index, type, event) => {
    const newConditions = [...(type === "or" ? conditionsOr : conditionsAnd)];
    newConditions[index][event.target.name] = event.target.value;
    if (type === "or") {
      setConditionsOr(newConditions);
    } else {
      setConditionsAnd(newConditions);
    }
  };

  const addCondition = (type) => {
    if (type === "or") {
      setConditionsOr([
        ...conditionsOr,
        { field: "", operator: "", value: "" },
      ]);
    } else {
      setConditionsAnd([
        ...conditionsAnd,
        { field: "", operator: "", value: "" },
      ]);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search and set results
    // setSearchResults(data);
  };

  return (
    <div className="card">
      <div
        className="card-body"
        style={{
          margin: "2em",
          backgroundColor: "white",
          border: "2px solid #f2f2f2",
          borderRadius: "6px",
          boxShadow: "0px 2px 3px #f2f2f2",
        }}
      >
        <FormControl sx={{ width: "60%", maxWidth: "500px" }}>
          <InputLabel>Select module</InputLabel>
          <Select value={module} onChange={handleModuleChange}>
            {modules.map((mod) => (
              <MenuItem key={mod.value} value={mod.value}>
                {mod.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <form onSubmit={handleSearch}>
          <h3>One of the condition must meet (OR Operator)</h3>
          <Grid container spacing={3}>
            {conditionsOr.map((condition, index) => (
              <Grid item xs={12} key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={3.5}>
                    <FormControl fullWidth>
                      <InputLabel>Field</InputLabel>
                      <Select
                        name="field"
                        value={condition.field}
                        onChange={(event) =>
                          handleConditionChange(index, "or", event)
                        }
                      >
                        {fields.map((field) => (
                          <MenuItem key={field.value} value={field.value}>
                            {field.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3.5}>
                    <FormControl fullWidth>
                      <InputLabel>Operator</InputLabel>
                      <Select
                        name="operator"
                        value={condition.operator}
                        onChange={(event) =>
                          handleConditionChange(index, "or", event)
                        }
                      >
                        {operators.map((operator) => (
                          <MenuItem key={operator.value} value={operator.value}>
                            {operator.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3.5}>
                    <TextField
                      name="value"
                      label="Value"
                      value={condition.value}
                      onChange={(event) =>
                        handleConditionChange(index, "or", event)
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <TextField
                      name="Action"
                      label="Action"
                      value={condition.value}
                      // onChange={(event) =>
                      //   handleConditionChange(index, "and", event)
                      // }
                      // fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Button onClick={() => addCondition("or")} sx={{ mt: 2 }}>
            <AddIcon sx={{ fontSize: 25, color: "primary.main" }} /> Add
            Condition
          </Button>

          <h3>All conditions must be met (AND Operator)</h3>
          <Grid container spacing={4}>
            {conditionsAnd.map((condition, index) => (
              <Grid item xs={12} key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={3.5}>
                    <FormControl fullWidth>
                      <InputLabel>Field</InputLabel>
                      <Select
                        name="field"
                        value={condition.field}
                        onChange={(event) =>
                          handleConditionChange(index, "and", event)
                        }
                      >
                        {fields.map((field) => (
                          <MenuItem key={field.value} value={field.value}>
                            {field.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3.5}>
                    <FormControl fullWidth>
                      <InputLabel>Operator</InputLabel>
                      <Select
                        name="operator"
                        value={condition.operator}
                        onChange={(event) =>
                          handleConditionChange(index, "and", event)
                        }
                      >
                        {operators.map((operator) => (
                          <MenuItem key={operator.value} value={operator.value}>
                            {operator.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3.5}>
                    <TextField
                      name="value"
                      label="Value"
                      value={condition.value}
                      onChange={(event) =>
                        handleConditionChange(index, "and", event)
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <TextField
                      name="Action"
                      label="Action"
                      value={condition.value}
                      onChange={(event) =>
                        handleConditionChange(index, "and", event)
                      }
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Button sx={{ mt: "20px" }} onClick={() => addCondition("and")}>
            <AddIcon sx={{ fontSize: 25, color: "primary.main" }} /> Add
            Condition
          </Button>

          <Button
            sx={{ mt: "20px", ml: "20px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </form>

        {searchResults.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>Assign To</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResults.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.mobile_number}</TableCell>
                    <TableCell>{row.assign_to}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
