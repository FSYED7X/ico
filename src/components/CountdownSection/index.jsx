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

const CountDownTimer = ({
  tokenEndTime,
  min,
  max,
  cap,
  contributor,
  BNBInvestment,
  tokenInvestment,
  tokenSymbol,
  price,
  address,
  tokenDecimal,
  BNBgenerated,
  toggle,
  setToggle,
}) => {
  const { isSmall } = useAppContext();

  return (
    <StyledPaper sx={{ mb: isSmall && 2 }}>
      <Stack
        sx={{
          bgcolor: colors.yellow.v1,
          p: 1,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        alignItems="center"
        justifyContent="center"
        direction={"row"}
        spacing={1}
      >
        <Typography variant="subtitle1" align="center" fontWeight={"500"}>
          STAGE 1
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          color={colors.white.v1}
          bgcolor={colors.yellow.v3}
          py={0.5}
          px={1}
          borderRadius={1}
        >
          Starts In
        </Typography>
      </Stack>
      {tokenEndTime && <Countdown tokenEndTime={tokenEndTime} />}
      {BNBInvestment > 0 && (
        <YelloSlider MAX={max} BNBgenerated={BNBInvestment} />
      )}

      <InputBox
        MAX={max}
        price={price}
        tokenSymbol={tokenSymbol}
        min={min}
        address={address}
        toggle={toggle}
        setToggle={setToggle}
      />
      <InfoTable
        min={min}
        max={max}
        cap={cap}
        contributor={contributor}
        BNBInvestment={BNBInvestment}
        tokenInvestment={tokenInvestment}
        tokenSymbol={tokenSymbol}
        tokenDecimal={tokenDecimal}
      />
    </StyledPaper>
  );
};

export default CountDownTimer;
