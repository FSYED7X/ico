import { Button } from "@mui/material";
import React from "react";

export default function BlackButton({ children, ...props }) {
  return (
    <Button
      variant={"contained"}
      sx={{
        py: 0.3,
        px: 1,
        textTransform: "capitalize",
        minWidth: 0,
        fontWeight: 400,
        bgcolor: "#000",
        color: "#fff",
        "&:hover": {
          bgcolor: "#000",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
