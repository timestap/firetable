import React from "react";
import { CustomCellProps } from "./withCustomCell";

//import { makeStyles, createStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) =>
//   createStyles({

//     text: {
//       textAlign: "right",
//       color: theme.palette.text.primary,

//       position: "relative",
//       zIndex: 1,
//     },
//   })
// );

export default function Text({ value }: CustomCellProps) {
  // const classes = useStyles();
  return <>{value}</>;
}
