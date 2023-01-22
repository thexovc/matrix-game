import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { BsInfoCircle } from "react-icons/bs";
import "./DashWallet.css";
import Media from "react-media";
import "react-circular-progressbar/dist/styles.css";

const DashWallet = () => {
  const percentage = 21;
  return (
    <div className="dashWallet__con">
      <div className="dashWallet__content">
        <div className="dashWallet__head">
          <div className="dashWallet__text">
            <h1>Wallet</h1>
            <p>Manage Finances</p>
          </div>
          <BsInfoCircle />
        </div>

        <Media
          queries={{
            small: "(max-width: 576px)",
            medium: "(min-width: 577px) and (max-width: 999px)",
            large: "(min-width: 1000px)",
          }}
        >
          {(matches) => (
            <>
              {matches.small && (
                <div className="dashWallet__loader">
                  <CircularProgressbarWithChildren
                    value={80}
                    counterClockwise={false}
                    // text="fuck off"
                    styles={{
                      // Customize the root svg element
                      root: {
                        width: "8rem",
                        overflow: "visible",
                      },
                      // Customize the path, i.e. the "completed progress"
                      path: {
                        // Path color
                        stroke: `#3C8EF7`,
                        strokeWidth: "12px",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        transform: "rotate(0turn)",
                        transformOrigin: "center center",
                        filter: "drop-shadow(2px 4px 6px white)",
                      },
                      // Customize the circle behind the path, i.e. the "total progress"
                      trail: {
                        // Trail color
                        stroke: `#DEECF9`,
                        opacity: "0.5",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        strokeWidth: "12px",
                        // Rotate the trail
                        // transform: "rotate(0.25turn)",
                        // transformOrigin: "center center",
                        // display: "none",
                      },
                      // Customize the text
                      text: {
                        // Text color
                        fill: "#f88",
                        // Text size
                        fontSize: "16px",
                      },
                      // Customize background - only used when the `background` prop is true
                      background: {
                        fill: "#3e98c7",
                      },
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <p style={{ fontSize: 10 }}>Available Balance</p>
                      <p style={{ fontSize: 20, color: "#3C8EF7" }}>$300</p>
                    </div>
                  </CircularProgressbarWithChildren>
                  <CircularProgressbarWithChildren
                    value={45}
                    counterClockwise={false}
                    // text="fuck off"
                    styles={{
                      // Customize the root svg element
                      root: {
                        width: "8rem",
                        overflow: "visible",
                      },
                      // Customize the path, i.e. the "completed progress"
                      path: {
                        // Path color
                        stroke: `#3C8EF7`,
                        strokeWidth: "12px",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        transform: "rotate(0turn)",
                        transformOrigin: "center center",
                        filter: "drop-shadow(2px 4px 6px white)",
                      },
                      // Customize the circle behind the path, i.e. the "total progress"
                      trail: {
                        // Trail color
                        stroke: `#DEECF9`,
                        opacity: "0.5",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        strokeWidth: "12px",
                        // Rotate the trail
                        // transform: "rotate(0.25turn)",
                        // transformOrigin: "center center",
                        // display: "none",
                      },
                      // Customize the text
                      text: {
                        // Text color
                        fill: "#f88",
                        // Text size
                        fontSize: "16px",
                      },
                      // Customize background - only used when the `background` prop is true
                      background: {
                        fill: "#3e98c7",
                      },
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <p style={{ fontSize: 10 }}>Pending Balance</p>
                      <p style={{ fontSize: 20, color: "#3C8EF7" }}>$180</p>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              )}

              {matches.medium && (
                <div className="dashWallet__loader">
                  <CircularProgressbarWithChildren
                    value={80}
                    counterClockwise={false}
                    // text="fuck off"
                    styles={{
                      // Customize the root svg element
                      root: {
                        width: "7rem",
                        overflow: "visible",
                      },
                      // Customize the path, i.e. the "completed progress"
                      path: {
                        // Path color
                        stroke: `#3C8EF7`,
                        strokeWidth: "8px",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        transform: "rotate(0turn)",
                        transformOrigin: "center center",
                        filter: "drop-shadow(2px 4px 6px white)",
                      },
                      // Customize the circle behind the path, i.e. the "total progress"
                      trail: {
                        // Trail color
                        stroke: `#DEECF9`,
                        opacity: "0.5",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        strokeWidth: "8px",
                        // Rotate the trail
                        // transform: "rotate(0.25turn)",
                        // transformOrigin: "center center",
                        // display: "none",
                      },
                      // Customize the text
                      text: {
                        // Text color
                        fill: "#f88",
                        // Text size
                        fontSize: "16px",
                      },
                      // Customize background - only used when the `background` prop is true
                      background: {
                        fill: "#3e98c7",
                      },
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <p style={{ fontSize: 9 }}>Available Balance</p>
                      <p style={{ fontSize: 16, color: "#3C8EF7" }}>$300</p>
                    </div>
                  </CircularProgressbarWithChildren>
                  <CircularProgressbarWithChildren
                    value={45}
                    counterClockwise={false}
                    // text="fuck off"
                    styles={{
                      // Customize the root svg element
                      root: {
                        width: "7rem",
                        overflow: "visible",
                      },
                      // Customize the path, i.e. the "completed progress"
                      path: {
                        // Path color
                        stroke: `#3C8EF7`,
                        strokeWidth: "8px",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        transform: "rotate(0turn)",
                        transformOrigin: "center center",
                        filter: "drop-shadow(2px 4px 6px white)",
                      },
                      // Customize the circle behind the path, i.e. the "total progress"
                      trail: {
                        // Trail color
                        stroke: `#DEECF9`,
                        opacity: "0.5",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        strokeWidth: "8px",
                        // Rotate the trail
                        // transform: "rotate(0.25turn)",
                        // transformOrigin: "center center",
                        // display: "none",
                      },
                      // Customize the text
                      text: {
                        // Text color
                        fill: "#f88",
                        // Text size
                        fontSize: "16px",
                      },
                      // Customize background - only used when the `background` prop is true
                      background: {
                        fill: "#3e98c7",
                      },
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <p style={{ fontSize: 9 }}>Pending Balance</p>
                      <p style={{ fontSize: 16, color: "#3C8EF7" }}>$180</p>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              )}

              {matches.large && (
                <div className="dashWallet__loader">
                  <CircularProgressbarWithChildren
                    value={80}
                    counterClockwise={false}
                    // text="fuck off"
                    styles={{
                      // Customize the root svg element
                      root: {
                        width: "10rem",
                        overflow: "visible",
                      },
                      // Customize the path, i.e. the "completed progress"
                      path: {
                        // Path color
                        stroke: `#3C8EF7`,
                        strokeWidth: "12px",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        transform: "rotate(0turn)",
                        transformOrigin: "center center",
                        filter: "drop-shadow(2px 4px 6px white)",
                      },
                      // Customize the circle behind the path, i.e. the "total progress"
                      trail: {
                        // Trail color
                        stroke: `#DEECF9`,
                        opacity: "0.5",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        strokeWidth: "12px",
                        // Rotate the trail
                        // transform: "rotate(0.25turn)",
                        // transformOrigin: "center center",
                        // display: "none",
                      },
                      // Customize the text
                      text: {
                        // Text color
                        fill: "#f88",
                        // Text size
                        fontSize: "16px",
                      },
                      // Customize background - only used when the `background` prop is true
                      background: {
                        fill: "#3e98c7",
                      },
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <p style={{ fontSize: 10 }}>Available Balance</p>
                      <p style={{ fontSize: 20, color: "#3C8EF7" }}>$300</p>
                    </div>
                  </CircularProgressbarWithChildren>
                  <CircularProgressbarWithChildren
                    value={45}
                    counterClockwise={false}
                    // text="fuck off"
                    styles={{
                      // Customize the root svg element
                      root: {
                        width: "10rem",
                        overflow: "visible",
                      },
                      // Customize the path, i.e. the "completed progress"
                      path: {
                        // Path color
                        stroke: `#3C8EF7`,
                        strokeWidth: "12px",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        transform: "rotate(0turn)",
                        transformOrigin: "center center",
                        filter: "drop-shadow(2px 4px 6px white)",
                      },
                      // Customize the circle behind the path, i.e. the "total progress"
                      trail: {
                        // Trail color
                        stroke: `#DEECF9`,
                        opacity: "0.5",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        strokeWidth: "12px",
                        // Rotate the trail
                        // transform: "rotate(0.25turn)",
                        // transformOrigin: "center center",
                        // display: "none",
                      },
                      // Customize the text
                      text: {
                        // Text color
                        fill: "#f88",
                        // Text size
                        fontSize: "16px",
                      },
                      // Customize background - only used when the `background` prop is true
                      background: {
                        fill: "#3e98c7",
                      },
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <p style={{ fontSize: 10 }}>Pending Balance</p>
                      <p style={{ fontSize: 20, color: "#3C8EF7" }}>$180</p>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              )}
            </>
          )}
        </Media>

        <div className="dashWallet__exps">
          <div className="dashWallet__exp">
            <span className="span1"></span>
            <p>Current Amount </p>
          </div>

          <div className="dashWallet__exp">
            <span className="span2"></span>
            <p>Max Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashWallet;
