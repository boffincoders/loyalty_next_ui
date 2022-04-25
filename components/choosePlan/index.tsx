import { Box, Button, FormControlLabel, Grid, Typography } from "@mui/material";
import React from "react";
import Switch from "@mui/material/Switch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ChoosePlan = () => {
  return (
    <Grid rowSpacing={1} container columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      <Typography variant="h5" p={2}>
        Choose Plan
      </Typography>
      <Grid item sm={12}>
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.06)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 20,
            marginTop: 5,
          }}
        >
          <Typography sx={{ fontSize: { xs: 14 } }}>Monthly Billing</Typography>
          <FormControlLabel
            label=""
            control={
              <Switch
                sx={{ m: 1 }}
                defaultChecked
                style={{ color: "#FF3D5A" }}
              />
            }
          />
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            textAlign="center"
            flexDirection="column"
            sx={{ padding: { xs: 2 } }}
          >
            <Typography sx={{ fontSize: { xs: 14 } }}>
              Annual Billing
            </Typography>
            <Typography sx={{ fontSize: { xs: 14 } }}>
              Get 2 months free!
            </Typography>
          </Box>
        </div>
      </Grid>
      <Grid item sm={5} m={3}>
        <div
          style={{
            border: "2px solid #4EADEA",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: 500,
            textAlign : "center",
            flexDirection: "column",
          }}
        >
          <span style={{ color: "#4EADEA", fontWeight: "bold" }}>Basic</span>
          <span style={{ color: "#4EADEA" }}>(1 location)</span>
          <span>1 Digital loyalty card</span>
          <span>Basic analytics</span>
          <span>Loyal IOM branded social media pack</span>
          <span>Onboarding Suspanort</span>
          <span>Unlimited users</span>

          <div
            style={{
              backgroundColor: "#F7F7F7",
              padding: 20,
            }}
          >
            <div style={{ fontWeight: "bold" }}>£19.99 per month</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -20,
          }}
        >
          <div
            style={{
              border: "1px solid #4EADEA",
              borderRadius: 10,
              background: "white",
              fontWeight: "500",
              color: "#4EADEA",
              width: 178,
              padding: 10,
              textAlign: "center",
            }}
          >
            Get 30 days Free <br /> Cancel anytime
          </div>
        </div>
      </Grid>

      <Grid item sm={5} m={3}>
        <div
          style={{
            border: "2px solid #4EADEA",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: 500,
            textAlign : "center",
            padding: "10px 10px 10px 10px",
            flexDirection: "column",
          }}
        >
         
          <span style={{ color: "#4EADEA", fontWeight: "bold" }}>Premium</span>
          <span style={{ color: "#4EADEA" }}>(Up to 3 Locations)</span>
          <span>Everything in Basic +</span>
          <span>Up to 2 extra digital loyalty cards</span>
          <span>Extended Analytics</span>
          <span>Custom branded social media pack</span>
          <span style={{ textAlign: "center" }}>
            *Coming Soon*
            <br />
            <span>Send push notifications to </span>
            <br />
            <span>your customers</span>
            <br /> <span>Digital voucher market place</span>
          </span>
          <div
            style={{
              backgroundColor: "#F7F7F7",
              padding: 20,
              marginTop: 10,
            }}
          >
            <div style={{ fontWeight: "bold" }}>£19.99 per month</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -20,
          }}
        >
          <div
            style={{
              backgroundColor: "#4EADEA",
              borderRadius: 10,
              fontWeight: "500",
              color: "white",
              width: 178,
              padding: 10,
              textAlign: "center",
            }}
          >
            Get 30 days Free <br /> Cancel anytime
          </div>
        </div>
      </Grid>

      <Button
        fullWidth
        endIcon={<ArrowForwardIcon />}
        sx={{
          color: "white",
          backgroundColor: "#FF3D5A",
          ml: 2,
          "&:hover": {
            backgroundColor: "#FF3D5A",
          },
        }}
      >
        Save and Continue
      </Button>
    </Grid>
  );
};

export default ChoosePlan;
