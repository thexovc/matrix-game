import React from "react";
import "./Notification.css";
import { UpdatesData } from "../../../Data/Data";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";
import { MdDelete } from "react-icons/md";

const Notification = (props) => {
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        width: "90%",
        height: "100%",
        background: "#17212b",
      }}
      className="Updates1"
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
        <MdDelete
          style={{
            fontSize: "30px",
          }}
        />
      </div>
      {UpdatesData.map((update) => {
        return (
          <div className="update1">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "space-between",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {update.time}{" "}
                <MdDelete
                  style={{
                    fontSize: "20px",
                  }}
                />
              </span>
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
