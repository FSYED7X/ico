import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import colors from "./../../../colors";

export const StyledSlider = styled(Slider)(({ theme }) => ({
  color: colors.yellow.variant2,
  height: 6,
  paddingBottom: 0,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: `3px solid ${colors.yellow.variant2}`,
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
    "&:after": {
      display: "none",
    },
    "& .MuiSlider-valueLabel": {
      background: "#333333",
      padding: theme.spacing(0.5, 1),
      borderRadius: 5,
      "& .MuiSlider-valueLabelLabel": {
        fontSize: "12px",
        userSelect: "none",
      },
    },
  },
}));
