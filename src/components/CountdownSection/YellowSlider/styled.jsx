import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import colors from "./../../../colors";

export const StyledSlider = styled(Slider)(({ theme }) => ({
  color: colors.yellow.v2,
  height: 6,
  paddingBottom: 0,
  "& .MuiSlider-track": {
    border: "none",
    "&:after": {
      position: "absolute",
      content: "''",
      height: ".2rem",
      width: ".25rem",
      background: "white",
      top: "50%",
      transform: "translateY(-50%)",
      left: 0,
      borderRadius: "100%",
      border: `3px solid ${colors.yellow.v2}`,
    },
  },
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: colors.white.v1,
    border: `3px solid ${colors.yellow.v2}`,
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
  "& .MuiSlider-rail": {
    opacity: 0.2,
    backgroundColor: colors.white.v2,

    "&:after": {
      position: "absolute",
      content: "''",
      height: ".2rem",
      width: ".25rem",
      background: "white",
      top: "50%",
      transform: "translateY(-50%)",
      right: 0,
      borderRadius: "100%",
      border: `3px solid ${colors.white.v2}`,
    },
  },
}));
