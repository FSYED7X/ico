import { styled } from "@mui/system";
import colors from "./colors";

export const StyledPaper = styled("section")(({ theme }) => ({
  border: "2px solid #e6ebf1",
  borderRadius: 8,
  background: colors.white.v1,
}));
