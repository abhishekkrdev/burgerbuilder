import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = ({ label, removed, added, disabled }) => {
  return (
    <div className={classes.BuildControl} Less>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={removed} disabled={disabled}>
        Less
      </button>
      <button className={classes.More} onClick={added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
