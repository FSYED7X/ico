import { Container, Grid } from "@mui/material";
import React from "react";
import BannerSection from "../../components/BannerSection";
import CommentSection from "../../components/Comments";
import CountdownSection from "../../components/CountdownSection";
import InfoSection from "../../components/InfoSection";
import ThePieChart from "../../components/ThePieChart";
import { useAppContext } from "../../hooks";

export default function IcoPage() {
  const { isSmall } = useAppContext();

  return (
    <div>
      <BannerSection />
      <Container sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            {isSmall && <CountdownSection />}
            <InfoSection />
            {isSmall && <ThePieChart />}
            <CommentSection />
          </Grid>
          <Grid item md={4} xs={12}>
            {!isSmall && <CountdownSection />}
            {!isSmall && <ThePieChart />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
