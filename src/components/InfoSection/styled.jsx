import { styled } from "@mui/system";

export const StyledTable = styled("table")(({ theme }) => ({
  width: "100%",
  "& td": {
    borderBottomStyle: "dashed",
    padding: theme.spacing(1, 0),
  },
  "& small": {
    color: "red",
  },
  "& .textPrimary": {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
}));
