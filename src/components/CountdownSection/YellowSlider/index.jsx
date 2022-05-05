import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledSlider } from "./styled";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { icoAbi, icoAddress, tokenAbi } from "../../../config.js";

export default function YelloSlider({ MAX, BNBgenerated }) {
  function valueLabelFormat(value) {
    return `${(value / MAX) * 100}% | ${value} BNB`;
  }

  return (
    <Box px={4} pt={4}>
      <StyledSlider
        max={MAX}
        defaultValue={BNBgenerated}
        aria-label="Default"
        valueLabelDisplay="on"
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
      />
      <Typography align="right" p={0} m={0} variant="body2" mt={-1}>
        {MAX} BNB
      </Typography>
    </Box>
  );
}
