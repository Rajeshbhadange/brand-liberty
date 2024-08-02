import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import Checkbox from "@mui/material/Checkbox";
import {
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const columns = [
  { id: "checkbox", label: "" },
  { id: "id", label: "ID", minWidth: 20 },
  { id: "name", label: "Name", minWidth: 120 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "phone", label: "Phone", minWidth: 120 },
  { id: "leadSource", label: "Lead Source", minWidth: 100 },
  { id: "leadStatus", label: "Lead Status", minWidth: 120 },
  { id: "leadType", label: "Lead Type", minWidth: 120 },
  { id: "createdAt", label: "Created At", minWidth: 200 },
  { id: "updatedAt", label: "Updated At", minWidth: 200 },
  { id: "actions", label: "Actions", minWidth: 200 },
];

const createData = (
  id,
  name,
  email,
  Card,
  CardContent,
  phone,
  leadSource,
  leadStatus,
  leadType,
  createdAt,
  updatedAt
) => {
  return {
    id,
    name,
    email,
    phone,
    leadSource,
    leadStatus,
    leadType,
    createdAt,
    updatedAt,
  };
};

const rows = [
  createData(
    "1",
    "Rajesh Bhadange",
    "rajesh32@gmail.com",
    "+91-7378709433",
    "website",
    "Promessa Signed",
    "For the Future",
    "2024-04-29T19:49:22.000000Z",
    "2024-04-29T19:49:22.000000Z"
  ),
  createData(
    "2",
    "Ram kumar",
    "ram2@gmail.com",
    "+84-7378602456",
    "green",
    "initial Contact",
    "warm",
    "2024-02-29T19:49:22.000000Z",
    "2024-02-29T19:49:22.000000Z"
  ),
  createData(
    "3",
    "danial sam",
    "sam@gmail.com",
    "+75-7378709433",
    "Zopla",
    "Promessa Signed",
    "For the Future",
    "2024-04-29T19:49:22.000000Z",
    "2024-04-29T19:49:22.000000Z"
  ),
  createData(
    "4",
    "Rutuja mali",
    "rutu@gmail.com",
    "+91-9404319433",
    "green",
    "initial Contact",
    "warm",
    "2024-02-29T19:49:22.000000Z",
    "2024-02-29T19:49:22.000000Z"
  ),
  createData(
    "5",
    "Pawan kumavat",
    "pk773@gmail.com",
    "+91-8459404556",
    "website",
    "initial Contact",
    "warm",
    "2024-02-29T19:49:22.000000Z",
    "2024-02-29T19:49:22.000000Z"
  ),
  createData(
    "6",
    "Rippin",
    "rafaela.nitzsche@hotmail.com",
    "+17074276468",
    "zopla",
    "initial Contact",
    "warm",
    "2024-02-29T19:49:22.000000Z",
    "2024-02-29T19:49:22.000000Z"
  ),
  createData(
    "7",
    "Doyle",
    "carlos03@yahoo.com",
    "(617) 728-1755",
    "green",
    "initial Contact",
    "warm",
    "2024-02-29T19:49:22.000000Z",
    "2024-02-29T19:49:22.000000Z"
  ),
  createData(
    "8",
    "Krushna kumar",
    "krushna@gmail.com",
    "+91-9834606584",
    "acress",
    "initial Contact",
    "warm",
    "2024-02-29T19:49:22.000000Z",
    "2024-02-29T19:49:22.000000Z"
  ),
  createData(
    "9",
    "K Boyer",
    "donis75@schulist.biz",
    "+1-570-205-1729",
    "right mase",
    "initial Contact",
    "warm",
    "2024-02-29T19:49:22.000000Z",
    "2024-02-29T19:49:22.000000Z"
  ),
  createData(
    "10",
    "Hegmann kumar",
    "taurean.leuschke@klocko.com",
    "+1 (801) 675-7706",
    "website",
    "initial Contact",
    "warm",
    "2024-02-29T19:49:22.000000Z",
    "2024-02-29T19:49:22.000000Z"
  ),
  // Add more rows as needed
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [checked, setChecked] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id) => {
    console.log("Edit entry", id);
  };

  const handleTransfer = (id) => {
    console.log("Transfer entry", id);
  };

  const handleDelete = (id) => {
    console.log("Delete entry", id);
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setChecked(rows.map((row) => row.id));
    } else {
      setChecked([]);
    }
  };

  const handleSelect = (id) => {
    const selectedIndex = checked.indexOf(id);
    let newChecked = [];

    if (selectedIndex === -1) {
      newChecked = newChecked.concat(checked, id);
    } else if (selectedIndex === 0) {
      newChecked = newChecked.concat(checked.slice(1));
    } else if (selectedIndex === checked.length - 1) {
      newChecked = newChecked.concat(checked.slice(0, -1));
    } else if (selectedIndex > 0) {
      newChecked = newChecked.concat(
        checked.slice(0, selectedIndex),
        checked.slice(selectedIndex + 1)
      );
    }

    setChecked(newChecked);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4em",
        border: "2px solid aliceblue",
        boxShadow: "0px 0px 3px black",
      }}
    >
      <Container fluid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              padding="20px"
              className="page-title-box"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4" component="h4">
                Tasks
              </Typography>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  color="inherit"
                  href="https://uppingcrm.xfinitysoft.app/home"
                >
                  Dashboard
                </Link>
                <Typography color="textPrimary">Tasks</Typography>
              </Breadcrumbs>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="success"
                      // href="https://uppingcrm.xfinitysoft.app/exportTasks"
                    >
                      Export CSV
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      // href="https://uppingcrm.xfinitysoft.app/tasks/create"
                    >
                      New
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ fontWeight: "bold" }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    checked.length > 0 && checked.length < rows.length
                  }
                  checked={rows.length > 0 && checked.length === rows.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = checked.indexOf(row.id) !== -1;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    aria-checked={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={() => handleSelect(row.id)}
                      />
                    </TableCell>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "actions" ? (
                            <Box sx={{ display: "flex", gap: 1 }}>
                              <Button
                                onClick={() => handleEdit(row.id)}
                                startIcon={<EditIcon />}
                              />
                              <Button
                                onClick={() => handleTransfer(row.id)}
                                startIcon={<TransferWithinAStationIcon />}
                              />
                              <Button
                                onClick={() => handleDelete(row.id)}
                                startIcon={<DeleteIcon />}
                              />
                            </Box>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
