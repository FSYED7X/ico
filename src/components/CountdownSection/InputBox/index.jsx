import {
  Box,
  Button,
  CardActionArea,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import colors from "../../../colors";
import { StyledTextField, StyledYellowButton } from "./styled";

export default function InputBox() {
  const [val, setVal] = useState();
  const MAX = 12;
  return (
    <Box px={2}>
      <Typography variant="caption" fontWeight={"normal"}>
        Amount (Max: {MAX} BNB)
      </Typography>

      <Stack direction={"row"} spacing={1}>
        <StyledTextField
          variant="outlined"
          size="small"
          type="text"
          value={val}
          onChange={(event) => setVal(event.target.value.replace(/[^\d]/g, ""))}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography
                  fontWeight={"bolder"}
                  component={CardActionArea}
                  pb={0.5}
                  color={colors.yellow.v2}
                  variant={"h6"}
                  onClick={() => setVal(MAX)}
                >
                  max
                </Typography>
              </InputAdornment>
            ),
          }}
        />
        <StyledYellowButton disableElevation variant="contained" size="small">
          Buy
        </StyledYellowButton>
      </Stack>
      <FormHelperText sx={{ fontWeight: 500, color: "#65b2e5" }}>
        You'll receive: 12342134213.234
      </FormHelperText>
    </Box>
  );
}
