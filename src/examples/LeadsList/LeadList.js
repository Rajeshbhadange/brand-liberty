import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import {
  Container,
  Grid,
  Box,
  CardContent,
  Typography,
  Breadcrumbs,
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
  phone,
  leadSource,
  leadStatus,
  leadType,
  createdAt,
  updatedAt
) => ({
  id,
  name,
  email,
  phone,
  leadSource,
  leadStatus,
  leadType,
  createdAt,
  updatedAt,
});

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

function LeadList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [checked, setChecked] = useState([]);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id) => console.log("Edit entry", id);

  const handleTransfer = (id) => console.log("Transfer entry", id);

  const handleDelete = (id) => console.log("Delete entry", id);

  const handleSelectAll = (event) => {
    setChecked(event.target.checked ? rows.map((row) => row.id) : []);
  };

  const handleSelect = (id) => {
    const selectedIndex = checked.indexOf(id);
    const newChecked =
      selectedIndex === -1
        ? [...checked, id]
        : checked.filter((item) => item !== id);

    setChecked(newChecked);
  };

  return (
    <>
      <Container fluid maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box
              paddingBottom="10px"
              width="100%"
              className="page-title-box"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginTop="2em"
            >
              <Typography variant="h5" component="h4">
                Leads
              </Typography>
              <Breadcrumbs aria-label="breadcrumb">
                <Link to="/" color="textPrimary">
                  Dashboard
                </Link>
                <Typography color="inherit">Leads</Typography>
              </Breadcrumbs>
            </Box>
          </Grid>

          <Grid item xs={12} width="100%">
            <Card>
              <CardContent>
                <Grid
                  padding="5px"
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="success"
                      component="a"
                      href="/Contacts_2024-08-09_06_09_58.csv"
                      download="contacts_2024-08-09_06_09_58.csv"
                      sx={{ color: "white" }}
                    >
                      Export CSV
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Link to="/CreateLead" sx={{ color: "white" }}>
                        New
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Paper
        sx={{
          width: "97%",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px",
          border: "2px solid aliceblue",
          marginBottom: "4em",
          boxShadow: "0px 0px 3px black",
        }}
      >
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
                    aria-label="select all rows"
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
                  const isItemSelected = checked.includes(row.id);
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
                          aria-label={`select row ${row.id}`}
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
                                  aria-label={`edit entry ${row.id}`}
                                />
                                <Button
                                  onClick={() => handleTransfer(row.id)}
                                  startIcon={<TransferWithinAStationIcon />}
                                  aria-label={`transfer entry ${row.id}`}
                                />
                                <Button
                                  onClick={() => handleDelete(row.id)}
                                  startIcon={<DeleteIcon />}
                                  aria-label={`delete entry ${row.id}`}
                                />
                              </Box>
                            ) : (
                              <Typography>{value}</Typography>
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
    </>
  );
}

export default LeadList;
