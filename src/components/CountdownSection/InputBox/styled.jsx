import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import colors from "./../../../colors";

export const StyledYellowButton = styled(Button)(({ theme }) => ({
  background: colors.yellow.variant2,
  color: "#fff",
  "&:hover": {
    background: colors.yellow.variant2,
    color: "#fff",
  },
  // fontWeight: "bold",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  overflow: "hidden",
  "& input": {
    padding: theme.spacing(0.5, 1),
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "inherit!important",
  },
}));
