import { Box, TableCell, Typography } from "@mui/material";
import { StyledSmallTable } from "./StyledSmallTable";
import React from "react";

export default function InfoTable({
  min,
  max,
  cap,
  contributor,
  BNBInvestment,
  tokenInvestment,
  tokenSymbol,
  tokenDecimal,
}) {
  return (
    <Box px={2} pb={1}>
      <StyledSmallTable>
        {React.Children.toArray(
          [
            {
              left: "Minimum Buy",
              right: `${min} BNB`, //"0.50 BNB",
            },
            {
              left: "Maximum Buy",
              right: `${max} BNB`, //"12 BNB",
            },
            {
              left: "Soft Cap",
              right: "5 BNB",
            },
            {
              left: "Hard Cap",
              right: `${cap} BNB`, //"200 BNB",
            },
            {
              left: "Total Contributors",
              right: `${contributor} `,
            },
            {
              left: "Your Contribution",
              right: `${BNBInvestment} BNB | ${
                tokenInvestment / 10 ** Number(tokenDecimal)
              } ${tokenSymbol}`,
            },
          ].map(({ left, right }, index) => {
            return (
              <tbody key={`info-section-countdown-${index}`}>
                <tr>
                  <TableCell>
                    <Typography variant="caption" fontWeight={"bold"}>
                      {left}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="caption" fontWeight={400}>
                      {right}
                    </Typography>
                  </TableCell>
                </tr>
              </tbody>
            );
          })
        )}
      </StyledSmallTable>
    </Box>
  );
}
