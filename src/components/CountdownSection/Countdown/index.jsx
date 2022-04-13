import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useCountdown from "../../../hooks";
import colors from "./../../../colors";

function Countdown() {
  const [dys, hrs, mins, secs] = useCountdown({
    days: 3,
    hours: 6,
    minutes: 57,
    seconds: 36,
  });

  return (
    <Box py={2}>
      <Stack
        direction={"row"}
        divider={<Typography variant="h5">:</Typography>}
        justifyContent="center"
        alignItems={"center"}
        spacing={0.5}
      >
        {[dys, hrs, mins, secs].map((item, index) => {
          return (
            <Box
              bgcolor={colors.yellow.variant1}
              border={2}
              borderRadius={2}
              borderColor={colors.yellow.variant2}
              px={1.5}
              py={1}
              key={`countdown-fragemnts-${index}`}
            >
              <Typography variant="h5" p={0} m={0} fontWeight={500}>
                {item}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

export default Countdown;
