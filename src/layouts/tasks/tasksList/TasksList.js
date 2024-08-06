import React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Pagination from "@mui/material/Pagination";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Link,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const tasks = [
  { id: 1, title: "Task #1", priority: "low", status: "Pending", taskId: 1 },
  { id: 2, title: "Task #2", priority: "high", status: "Pending", taskId: 2 },
  { id: 5, title: "Task #5", priority: "high", status: "completed", taskId: 5 },
  { id: 6, title: "Task #6", priority: "high", status: "completed", taskId: 6 },
  { id: 7, title: "Task #7", priority: "high", status: "Pending", taskId: 7 },
  { id: 9, title: "Task #9", priority: "high", status: "Started", taskId: 9 },
  {
    id: 10,
    title: "Task #10",
    priority: "high",
    status: "Started",
    taskId: 10,
  },
];

const TaskList = () => {
  return (
    <Container maxWidth="300" style={{ padding: 0 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            padding="10px"
            className="page-title-box"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="3em"
            marginLeft="20px"
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

        <Grid item xs={12} marginLeft="25px">
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

        <Grid item xs={12} marginLeft="25px">
          <Card>
            <CardContent>
              <Typography
                id="taskComplete"
                variant="body2"
                color="success"
                padding="10px"
                style={{ display: "none" }}
              >
                px Task #2 completed
              </Typography>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <FormControl variant="outlined" size="small">
                    <InputLabel>Show</InputLabel>
                    <Select label="Show" defaultValue={10}>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search"
                  />
                </Grid>
              </Grid>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Complete?</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Activity Type</TableCell>
                    <TableCell>T Order</TableCell>
                    <TableCell>Rel Contact</TableCell>
                    <TableCell>Rel Lead</TableCell>
                    <TableCell>Rel Expense</TableCell>
                    <TableCell>Rel Contract</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>
                        <Tooltip title="Mark as complete">
                          <IconButton>
                            <CheckCircleIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <TableCell>{task.id}</TableCell>
                      <TableCell>
                        <Link
                        //   href={`https://uppingcrm.xfinitysoft.app/tasks/${task.id}`}
                        >
                          {task.title}
                        </Link>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>{task.priority}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>19</TableCell>
                      <TableCell>57</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell sx={{ display: "flex", flexDirection: "row" }}>
                        <Tooltip title="Edit">
                          <IconButton
                          // href={`https://uppingcrm.xfinitysoft.app/tasks/${task.id}/edit`}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>

            <div
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Showing 1 to 10 of 20 entries
              <div className="footer">
                <Stack spacing={2}>
                  <Pagination count={100} />
                </Stack>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskList;
