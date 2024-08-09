import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import EditIcon from "@mui/icons-material/Edit";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import { Button } from "@mui/material";
import Edit from "./module/edit";

const ContactList = ({ contacts }) => {
  const [search, setSearch] = useState("");

  // Ensure contacts is an array
  const filteredContacts = (contacts || []).filter(
    (contact) =>
      contact.firstname.toLowerCase().includes(search.toLowerCase()) ||
      contact.secondname.toLowerCase().includes(search.toLowerCase())
  );
  function transferEntry(id) {
    console.log("Transfer entry", id);
  }

  function handleDelete(id) {
    console.log("Delete entry", id);
  }

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="page-title">
          <h2 className="h2">Contacts</h2>
          <h2 className="link">
            <Link to="/">Dashboard</Link> / Home
          </h2>
        </div>
      </div>

      {/* Buttons */}
      <div className="scv">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="new">
                    <div
                      className="btn-group focus-btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <a href="/exportContacts" className="btn-success">
                        <a href="./images/G1.svg" download="6rsobt9c.svg">
                          Export CSV
                        </a>
                      </a>
                    </div>
                    <div className="col-md-6 text-end">
                      <Button>
                        <Link to="/CreateContact" className="btn-new">
                          New
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <label>
                    Show
                    <select
                      name="contacts-datatables_length"
                      aria-controls="contacts-datatables"
                      className="custom-select custom-select-sm form-control form-control-sm"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    entries
                  </label>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div
                    id="contacts-datatables_filter"
                    className="dataTables_filter"
                  >
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="contacts-datatables"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <table
                      id="contacts-datatables"
                      className="table table-bordered dt-responsive nowrap dataTable no-footer dtr-inline collapsed"
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        width: "100%",
                      }}
                      role="grid"
                    >
                      <thead>
                        <tr role="row">
                          <th>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </th>
                          <th>id</th>
                          <th>firstname</th>
                          <th>secondname</th>
                          <th>primary email</th>
                          <th>secondary email</th>
                          <th>primary phone</th>
                          <th>Actions</th>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>1</td>
                          <td>Rajesh</td>
                          <td>Bhadange</td>
                          <td>raj@gmail.com</td>
                          <td>raj@gmail.com</td>
                          <td>9404319433</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>
                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>2</td>
                          <td>Rahul</td>
                          <td>jadhav</td>
                          <td>rahul@gmail.com</td>
                          <td>nik@gmail.com</td>
                          <td>8007682204</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>
                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>3</td>
                          <td>sam</td>
                          <td>willm</td>
                          <td>sam@gmail.com</td>
                          <td>sam@gmail.com</td>
                          <td>6571550255</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>
                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>4</td>
                          <td>moni</td>
                          <td>danial</td>
                          <td>moni@gmail.com</td>
                          <td>moni@gmail.com</td>
                          <td>4504824562</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>
                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>5</td>
                          <td>raksha</td>
                          <td>andhle</td>
                          <td>rak@gmail.com</td>
                          <td>rak@gmail.com</td>
                          <td>7568910650</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>

                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>6</td>
                          <td>krushna</td>
                          <td>gite</td>
                          <td>shri@gmail.com</td>
                          <td>shri@gmail.com</td>
                          <td>7384319433</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>

                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>7</td>
                          <td>Raj</td>
                          <td>mali</td>
                          <td>mali@gmail.com</td>
                          <td>mali@gmail.com</td>
                          <td>8080419433</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>
                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>8</td>
                          <td>Raman</td>
                          <td>Bhadane</td>
                          <td>ram@gmail.com</td>
                          <td>ram@gmail.com</td>
                          <td>4829826205</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>
                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>9</td>
                          <td>Rajesh</td>
                          <td>Bhadange</td>
                          <td>raj@gmail.com</td>
                          <td>raj@gmail.com</td>
                          <td>9404319433</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>
                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="contactBulkCheckboxed"
                              className="contactBulkCheckboxed"
                              id="contactBulkCheckboxedSelectAll"
                            />
                          </td>
                          <td>10</td>
                          <td>Rajesh</td>
                          <td>Bhadange</td>
                          <td>raj@gmail.com</td>
                          <td>raj@gmail.com</td>
                          <td>9404319433</td>
                          <td>
                            <button>
                              <EditIcon />
                            </button>
                            <button>
                              <div className="edit">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleOpen}
                                >
                                  <TransferWithinAStationIcon />
                                </Button>

                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                              </div>
                            </button>
                            <button>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredContacts.map((contact) => (
                          <tr key={contact.id}>
                            <td data-label="Select">
                              <input
                                type="checkbox"
                                name="selected_ids[]"
                                value={contact.id}
                                className="selected_ids contactBulkCheckboxed"
                              />
                            </td>
                            <td data-label="ID">{contact.id}</td>
                            <td data-label="Firstname">
                              <Link to={`/contacts/${contact.id}`}>
                                {contact.firstname}
                              </Link>
                            </td>
                            <td data-label="Secondname">
                              {contact.secondname}
                            </td>
                            <td
                              data-label="Primary Email"
                              style={{ display: "none" }}
                            >
                              {contact.primaryEmail}
                            </td>
                            <td
                              data-label="Secondary Email"
                              style={{ display: "none" }}
                            >
                              {contact.secondaryEmail}
                            </td>
                            <td
                              data-label="Primary Phone"
                              style={{ display: "none" }}
                            >
                              {contact.primaryPhone}
                            </td>
                            <td
                              data-label="Mobile Phone"
                              style={{ display: "none" }}
                            >
                              {contact.mobPhone}
                            </td>
                            <td
                              data-label="Assign To"
                              style={{ display: "none" }}
                            >
                              {contact.assignTo}
                            </td>
                            <td data-label="Photo" style={{ display: "none" }}>
                              {contact.photo}
                            </td>
                            <td
                              data-label="Invoices Permission"
                              style={{ display: "none" }}
                            >
                              {contact.invoicesPermission}
                            </td>
                            <td
                              data-label="Estimates Permission"
                              style={{ display: "none" }}
                            >
                              {contact.estimatesPermission}
                            </td>
                            <td
                              data-label="Contracts Permission"
                              style={{ display: "none" }}
                            >
                              {contact.contractsPermission}
                            </td>
                            <td
                              data-label="Proposals Permission"
                              style={{ display: "none" }}
                            >
                              {contact.proposalsPermission}
                            </td>
                            <td
                              data-label="Support Permission"
                              style={{ display: "none" }}
                            >
                              {contact.supportPermission}
                            </td>
                            <td
                              data-label="Projects Permission"
                              style={{ display: "none" }}
                            >
                              {contact.projectsPermission}
                            </td>
                            <td
                              data-label="Created At"
                              style={{ display: "none" }}
                            >
                              {contact.createdAt}
                            </td>
                            <td
                              data-label="Updated At"
                              style={{ display: "none" }}
                            >
                              {contact.updatedAt}
                            </td>
                            <td data-label="Actions">
                              <span
                                className="btn-group"
                                role="group"
                                aria-label="..."
                              >
                                <Link
                                  to={`/contacts/${contact.id}/edit`}
                                  className="btn btn-info"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  data-original-title="Edit"
                                >
                                  <span className="fa-pencil-alt fa"></span>
                                </Link>
                                <button
                                  className="btn btn-primary transfer-entry"
                                  onClick={() => transferEntry(contact.id)}
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  data-original-title="Transfer"
                                >
                                  <span className="fa fa-file"></span>
                                </button>
                                <button
                                  type="button"
                                  data-value={contact.id}
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  data-original-title="Delete"
                                  className="btn btn-danger delete-btn"
                                  onClick={() => handleDelete(contact.id)}
                                >
                                  <span className="fa fa-trash"></span>
                                </button>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <span>Showing 1 to 10 of 100 entries</span>
              <Stack spacing={2}>
                <Pagination count={100} />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Handler functions for actions
};

export default ContactList;
