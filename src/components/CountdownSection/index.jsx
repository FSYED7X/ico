import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import colors from "../../colors";
import { useAppContext } from "../../hooks";
import { StyledPaper } from "../../styled";
import Countdown from "./Countdown";
import InfoTable from "./InfoTable";
import InputBox from "./InputBox";
import YelloSlider from "./YellowSlider/index";

const CountDownTimer = () => {
  const { isSmall } = useAppContext();

  return (
    <StyledPaper sx={{ mb: isSmall && 2 }}>
      <Stack
        sx={{
          bgcolor: colors.yellow.variant1,
          p: 1,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        alignItems="center"
        justifyContent="center"
        direction={"row"}
        spacing={1}
      >
        <Typography variant="subtitle1" align="center" fontWeight={"600"}>
          STAGE 1
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          color="#fff"
          bgcolor={colors.yellow.variant3}
          py={0.5}
          px={1}
          borderRadius={1}
        >
          Starts In
        </Typography>
      </Stack>
      <Countdown />
      <YelloSlider />
      <InputBox />
      <InfoTable />
    </StyledPaper>
  );
};

export default CountDownTimer;
