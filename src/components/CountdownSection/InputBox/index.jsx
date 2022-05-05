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

import colors from "../../../colors";
import { StyledTextField, StyledYellowButton } from "./styled";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { icoAbi, icoAddress, tokenAbi } from "../../../config.js";

export default function InputBox({
  MAX,
  price,
  tokenSymbol,
  min,
  toggle,
  setToggle,
}) {
  const [val, setVal] = useState();

  async function BuyToken() {
    const web3 = new Web3(Web3.givenProvider);
    const icoContract = new web3.eth.Contract(icoAbi, icoAddress);
    const addresses = await web3.eth.getAccounts();
    const address = addresses[0];

    if (address != undefined) {
      if (val > MAX) {
        window.alert("Cannot exceed maximum amount");
      } else if (val < min) {
        window.alert("below minimum amount is not acceptable");
      } else {
        try {
          icoContract.methods
            .buyTokens()
            .send({
              from: address,
              value: web3.utils.toWei(val.toString(), "ether"),
            })
            ?.on("confirmation", (e, r) => {
              setToggle(!toggle);
            });
        } catch (error) {
          console.log("Error", error);
        }
      }
    } else {
      window.alert("please connect wallet first");
    }
  }

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
          onChange={(event) => {
            setVal(event.target.value);
          }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: `${
                val ? colors.yellow.v3 : colors.white.v4
              }!important`,
              borderWidth: 1.5,
            },
          }}
          placeholder="0.0"
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
        <StyledYellowButton
          onClick={() => {
            BuyToken();
          }}
          disableElevation
          variant="contained"
          size="small"
        >
          Buy
        </StyledYellowButton>
      </Stack>
      <FormHelperText sx={{ fontWeight: 500, color: colors.blue.v1 }}>
        You'll receive: {val ? val / (price / 1000000000000000000) : 0}{" "}
        {tokenSymbol}
      </FormHelperText>
    </Box>
  );
}
