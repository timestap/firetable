import React from "react";
import { CustomCellProps } from "./withCustomCell";

import { makeStyles, createStyles } from "@material-ui/core";
import { resultColorsScale } from "util/color";

const useStyles = makeStyles((theme) =>
  createStyles({
    text: {
      textAlign: "right",
      color: theme.palette.text.primary,

      position: "relative",
      zIndex: 1,
    },
  })
);

export default function Number({ value }: CustomCellProps) {
  const classes = useStyles();
  return <div className={classes.text}>{value}</div>;

  return null;
}
