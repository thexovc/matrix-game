import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Pagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import "./SellersTable.css";
import { AiFillStar } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import { AiOutlineArrowRight } from "react-icons/ai";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("ibmeshach", 18908424, "2 March 2022", "⭐⭐⭐⭐"),
  createData("kylax ", 18908424, "2 March 2022", "⭐⭐⭐⭐⭐"),
  createData("Antisocial", 18908424, "2 March 2022", "⭐⭐⭐"),
  createData("finbond", 18908421, "2 March 2022", "⭐⭐⭐⭐"),
  createData("Mr Stark", 18908421, "2 March 2022", "⭐⭐⭐⭐"),
  createData("Batman", 18908421, "2 March 2022", "⭐⭐"),
  createData("Ace", 18908421, "2 March 2022", "⭐"),
];

// const makeStyle = (status) => {
//   if (status === "Approved") {
//     return {
//       background: "rgb(145 254 159 / 47%)",
//       color: "green",
//     };
//   } else if (status === "Pending") {
//     return {
//       background: "#ffadad8f",
//       color: "red",
//     };
//   } else {
//     return {
//       background: "#59bfff",
//       color: "white",
//     };
//   }
// };

export default function SellersTable() {
  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          background: "#f2f2f2",
          color: "white",
          width: "100%",
          borderRadius: "10px",
          padding: 10,
        }}
      >
        <Table
          style={{ padding: 5 }}
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 800, fontSize: 16 }}>
                Username
              </TableCell>
              <TableCell style={{ fontWeight: 800, fontSize: 16 }} align="left">
                User ID
              </TableCell>
              <TableCell style={{ fontWeight: 800, fontSize: 16 }} align="left">
                Date Joined
              </TableCell>
              <TableCell style={{ fontWeight: 800, fontSize: 16 }} align="left">
                Rating
              </TableCell>
              <TableCell
                style={{ fontWeight: 800, fontSize: 16 }}
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
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status">{row.status}</span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Profile
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack spacing={2}>
          <Pagination style={{ color: "primary" }} count={10} color="primary" />
        </Stack>
      </TableContainer>
    </div>
  );
}
