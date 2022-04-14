import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import colors from "../../colors";
import { StyledPaper } from "../../styled";
import Copy from "../Copy";

export default function InfoSection() {
  return (
    <div>
      <StyledPaper sx={{ p: 1, px: 2 }}>
        {[
          {
            left: "Pre-Sale Contract Address",
            right: "amcksndipeofnoenfwlsdkvmnsfoogeir",
            copy: true,
          },
          {
            left: "Token Contract Address",
            right: "xcncjkxnckjnasduiofepirjndjcnadsf",
            helper: "(Do not send BNB to the token contract address)",
            copy: true,
            color: colors.yellow.v3,
          },
          {
            left: "Token Name",
            right: "World Of Doge",
            copy: true,
          },
          {
            left: "Symbol",
            right: "WOD",
            copy: true,
          },
          {
            left: "Decimals",
            right: "18",
            copy: true,
          },
          {
            left: "Total Supply",
            right: "10,00,00,00,000",
          },
          {
            left: "Token Price",
            right: "1 BNB = 10,00,000 WOD",
          },
          {
            left: "Tokens Offered",
            right: "50% | 50,00,00,000",
          },
          {
            left: "Sale Start Time",
            right: "15 Apr 2022 | 14:48 (IST)",
          },
          {
            left: "Sale End Time",
            right: "15 Apr 2022 | 14:48 (IST)",
          },
        ].map(({ left, right, copy, helper, color }, index) => {
          return (
            <Grid
              container
              justifyContent="space-between"
              alignItems={"center"}
              key={`info-section-${index}`}
              sx={{
                borderBottom: `1px dashed ${colors.white.v4}`,
                py: helper ? 0 : 1,
              }}
            >
              <Grid item>
                <Typography variant="body2" fontWeight={"bold"}>
                  {left}
                </Typography>
              </Grid>
              <Grid item sx={{ ml: "auto" }}>
                <Stack direction='row' spacing={1}>
                  <section>
                    <Typography
                      variant="body2"
                      color={color}
                      className="textPrimary"
                      fontWeight={400}
                      align="right"
                      mb={-.5}
                    >
                      {right}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="error.main"
                      fontSize={"10px"}
                    >
                      {helper}
                    </Typography>
                  </section>
                  {copy && <Copy value={right} title={left} />}
                </Stack>
              </Grid>
            </Grid>
          );
        })}
      </StyledPaper>
    </div>
  );
}
