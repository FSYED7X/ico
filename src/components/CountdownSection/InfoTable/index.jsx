import { Box, TableCell, Typography } from "@mui/material";
import React from "react";
import { StyledSmallTable } from "./StyledSmallTable";

export default function InfoTable() {
  return (
    <Box px={2} pb={1}>
      <StyledSmallTable>
        {[
          {
            left: "Minimum Buy",
            right: "0.50 BNB",
          },
          {
            left: "Maximum Buy",
            right: "12 BNB",
          },
          {
            left: "Soft Cap",
            right: "50 BNB",
          },
          {
            left: "Hard Buy",
            right: "200 BNB",
          },
          {
            left: "Total Contributors",
            right: "5000",
          },
          {
            left: "Your Contribution",
            right: "1BNB | 1,00,00,00,000 WOD",
          },
        ].map(({ left, right }, index) => {
          return (
            <tbody key={`info-section-countdown-${index}`}>
              <tr>
                <TableCell>
                  <Typography variant="caption" fontWeight={'bold'}>{left}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="caption" fontWeight={400}>{right}</Typography>
                </TableCell>
              </tr>
            </tbody>
          );
        })}
      </StyledSmallTable>
    </Box>
  );
}
