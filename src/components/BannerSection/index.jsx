import {
  Avatar,
  Container,
  Grid,
  Hidden,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  SecurityAuditReportIcon,
  TelegramIcon,
  TokenExplorerBscScanIcon,
  TwitterIcon,
  WhitePaperIcon,
} from "../../assets/Icons";
import { useAppContext } from "../../hooks";
import { StyledPaper } from "../../styled";
import BlackButton from "../BlackButton";

export default function BannerSection() {
  const [height, setHeight] = useState();
  const { isSmall } = useAppContext();

  return (
    <div>
      <Box>
        <img
          src="/assets/banner.png"
          alt=""
          height={"100%"}
          width="100%"
        />
      </Box>

      <Hidden smUp>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="end"
          px={2}
          sx={{
            transform: "translateY(-60%)",
          }}
        >
          <BlackButton>Home</BlackButton>
          <BlackButton>Connect Wallet</BlackButton>
        </Stack>
      </Hidden>

      <Container
        sx={{
          mb: !isSmall && -height / 2 + "px",
          transform: !isSmall && "translateY(-50%)",
        }}
        ref={(ele) => !isSmall && setHeight(ele?.clientHeight)}
      >
        <StyledPaper sx={{ p: isSmall ? 2 : 3, pt: isSmall ? 0 : 3 }}>
          <Grid container spacing={isSmall ? 1 : 3}>
            <Grid
              item
              md={2}
              xs={4}
              ref={(ele) => isSmall && setHeight(ele?.clientHeight)}
            >
              <Paper
                sx={{
                  mb: isSmall && "-50%",
                  transform: isSmall && "translateY(-48%)",
                  p: 0.8,
                  borderRadius: 2,
                }}
              >
                <Avatar
                  src="/assets/logo.png"
                  sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 2,
                  }}
                />
              </Paper>
            </Grid>

            <Hidden smUp>
              <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant={isSmall ? "h6" : "h4"}
                  sx={{ fontWeight: "bolder", ml: 1 }}
                >
                  BabyDoge
                </Typography>
              </Grid>
            </Hidden>

            <Grid item md={10}>
              <Stack
                direction="row"
                spacing={isSmall ? 0 : 2}
                justifyContent="space-between"
                alignItems={"center"}
                sx={{
                  mb: 1,
                  mt: isSmall && 1,
                  "& svg": {
                    height: 30,
                    width: 30,
                  },
                }}
              >
                <Stack
                  direction={isSmall ? "column" : "row"}
                  spacing={!isSmall && 2}
                  alignItems={!isSmall && "center"}
                >
                  <Hidden mdDown>
                    <Typography
                      variant={isSmall ? "h6" : "h4"}
                      sx={{ fontWeight: "bolder" }}
                    >
                      BabyDoge
                    </Typography>
                  </Hidden>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"flex-end"}
                  >
                    {[
                      { link: "", icon: <TelegramIcon /> },
                      { link: "", icon: <TwitterIcon /> },
                      { link: "", icon: <InstagramIcon /> },
                      { link: "", icon: <FacebookIcon /> },
                      { link: "", icon: <WhitePaperIcon /> },
                      { link: "", icon: <SecurityAuditReportIcon /> },
                      { link: "", icon: <TokenExplorerBscScanIcon /> },
                    ].map((item, index) => {
                      return (
                        <IconButton size="small" key={`banner-icons-${index}`}>
                          {item.icon}
                        </IconButton>
                      );
                    })}
                  </Stack>
                </Stack>
                <Hidden mdDown>
                  <Stack direction="row" spacing={1}>
                    <BlackButton>Home</BlackButton>
                    <BlackButton>Connect Wallet</BlackButton>
                  </Stack>
                </Hidden>
              </Stack>

              <Typography
                variant={isSmall ? "body1" : "h6"}
                fontWeight={500}
                lineHeight={1.3}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                vitae aut ex sequi dolor, tempora labore laborum porro deleniti
                ab harum ullam voluptatum, incidunt deserunt dignissimos.
                Aspernatur similique, officiis temporibus natus omnis atque
                possimus expedita illum animi rerum facilis mollitia autem
                possimus expedita illum animi rerum facilis mollitia autem
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </div>
  );
}
