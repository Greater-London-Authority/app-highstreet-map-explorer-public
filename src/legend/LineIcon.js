import * as React from "react";
import { SvgIcon } from "@mui/material";

export default function LineIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="3" x2="30" y2="3" stroke="black" strokeWidth="4" />
    </SvgIcon>
  );
}
