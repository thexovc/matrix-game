import React from "react";
// import "./Updates.css";
import { UpdatesData } from "../../../Data/Data";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";

const Notification = (props) => {
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        background: "#17212b",
      }}
      className="Updates"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2 style={{ color: "white" }}>Notifications</h2>
        <span
          onClick={() => {
            props.sendNotification("modal-container__target ");
          }}
          class="modal-close"
        >
          Close
        </span>
      </div>
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
      <Stack spacing={2}>
        <Pagination style={{ color: "primary" }} count={3} color="primary" />
      </Stack>
    </div>
  );
};

export default Notification;
