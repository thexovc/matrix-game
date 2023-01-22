import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./Cart.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Call of Duty", 18908424, "2 March 2022", "Approved"),
  createData("Call of Duty ", 18908424, "2 March 2022", "Pending"),
  createData("Pubg", 18908424, "2 March 2022", "Approved"),
  createData("Clash Royale", 18908421, "2 March 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "white",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "white",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function Cart(props) {
  return (
    <div style={{ width: "100%" }} className="Table1">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2 style={{ color: "white" }}>Cart</h2>
        <span
          onClick={() => {
            props.sendCart("modal-container__target ");
          }}
          class="modal-close"
        >
          Close
        </span>
      </div>

      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          background: "#17212b",
          color: "white",
          borderRadius: "10px",
          padding: "20px !important",
        }}
      >
        <Table
          style={{ padding: 5, color: "white" }}
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                style={{ fontWeight: 800, color: "white", fontSize: 16 }}
              >
                Game Type
              </TableCell>
              <TableCell
                style={{ fontWeight: 800, color: "white", fontSize: 16 }}
                align="left"
              >
                Account ID
              </TableCell>
              <TableCell
                style={{ fontWeight: 800, color: "white", fontSize: 16 }}
                align="left"
              >
                Date
              </TableCell>
              <TableCell
                style={{ fontWeight: 800, color: "white", fontSize: 16 }}
                align="left"
              >
                Status
              </TableCell>
              <TableCell
                style={{ fontWeight: 800, color: "white", fontSize: 16 }}
                align="left"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{ color: "white" }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell style={{ color: "white" }} align="left">
                  {row.trackingId}
                </TableCell>
                <TableCell style={{ color: "white" }} align="left">
                  {row.date}
                </TableCell>
                <TableCell style={{ color: "white" }} align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack spacing={2}>
          <Pagination style={{ color: "primary" }} count={3} color="primary" />
        </Stack>
      </TableContainer>
      {/* <div className="view__more">
        <p>View All</p>
        <AiOutlineArrowRight className="view__icon" />
      </div> */}
    </div>
  );
}
