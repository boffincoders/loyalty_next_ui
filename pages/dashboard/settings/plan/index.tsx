import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
const Plan = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 2, sm: 3, md: 2 }}
      sx={{ p: 10 }}
    >
      <Grid><Typography color={'#000000'} fontSize={22} fontWeight="600" >
        Your Plan
      </Typography>
        </Grid>
       
      <Grid item xs={12} md={4} sm={12} m={2}>
          <Box
            sx={{
              border: "1.5px solid #D8D8D8",
              boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.27)",
            }}
            p={10}
          >
            <Box textAlign={'center'}>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
                Basic
              </p>
              <p style={{ color: "#979797", fontWeight: "400", fontSize: 14 }}>
                (1 Location)
              </p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
                1 Digital loyalty card
              </p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
                Basic analytics
              </p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
                Loyal IOM branded social
                <br /> media pack
              </p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
                Onboarding Support
              </p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
                Unlimited users
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sm={12} m={2}>
          <div
            style={{
              border: "2px solid #4EADEA",
              boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.27)",
              padding: 10,
            }}
          >
            <Box textAlign={"center"}>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#4EADEA" }}>
                Premium
              </p>
              <p style={{ color: "#4EADEA", fontWeight: "400", fontSize: 14 }}>
                (Up to 3 Locations)
              </p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "black" }}>
                Everything in Basic +
              </p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "black" }}>
                Up to 2 extra digital loyalty
                <br /> cards
              </p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "black" }}>
                Extended Analytics
              </p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "black" }}>
                Custom branded social
                <br /> media pack
              </p>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: "black",
                  fontFamily: "italic",
                }}
              >
                *Coming Soon*
                <br />
                <div style={{ color: "#979797" }}>
                  Send push notifications to your customers &nbsp; &nbsp;
                  <br /> Digital voucher market place
                </div>
                <br />
              </p>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{
                  background: "#F7F7F7",
                  textAlign: "center",
                  padding: 15,
                }}
              >
                £19.99 per month
              </Box>
            </Box>
          </div>
            <Box textAlign={"center"}>
              <Button
                style={{
                  background: "#4EAFEA",
                  borderRadius: 10,
                 
                
                  right : "1%",
                  top :"-19px",
                  color: "white",
                  textAlign: "center",
                  padding: 10,
                }}
              >
                YOUR CURRENT
                <br /> ACTIVE PLAN
              </Button>
            </Box>
        </Grid>

    </Grid>
  );
};
{
  /* <div style={{ marginLeft: 20 }} className="container-fluid">
<div style={{ color: " #000000", fontSize: 22, fontWeight: "600" }}>
  Your Plan
</div>

  <div
    style={{
      background: "#FFFFFF",
      boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
      padding: 30,
    }}
     className="row"
     >
    <div className="col-sm-6">
      <div
        style={{
          border: "1.5px solid #D8D8D8",
          boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.27)",
        }}
      >
        <div className="p-3 text-center">
          <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
            Basic
          </p>
          <p
            style={{ color: "#979797", fontWeight: "400", fontSize: 14 }}
          >
            (1 Location)
          </p>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
            1 Digital loyalty card
          </p>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
            Basic analytics
          </p>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
            Loyal IOM branded social
            <br /> media pack
          </p>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
            Onboarding Support
          </p>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#979797" }}>
            Unlimited users
          </p>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div
        style={{
          border: "2px solid #4EADEA",
          boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.27)",
          padding: 10,
        }}
      >
        <div className="text-center">
          <p style={{ fontWeight: 700, fontSize: 14, color: "#4EADEA" }}>
            Premium
          </p>
          <p
            style={{ color: "#4EADEA", fontWeight: "400", fontSize: 14 }}
          >
            (Up to 3 Locations)
          </p>
          <p style={{ fontWeight: 700, fontSize: 14, color: "black" }}>
            Everything in Basic +
          </p>
          <p style={{ fontWeight: 700, fontSize: 14, color: "black" }}>
            Up to 2 extra digital loyalty
            <br /> cards
          </p>
          <p style={{ fontWeight: 700, fontSize: 14, color: "black" }}>
            Extended Analytics
          </p>
          <p style={{ fontWeight: 700, fontSize: 14, color: "black" }}>
            Custom branded social
            <br /> media pack
          </p>
          <p
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "black",
              fontFamily: "italic",
            }}
          >
            *Coming Soon*
            <br />
            <div style={{ color: "#979797" }}>
              Send push notifications to your customers &nbsp; &nbsp;
              <br /> Digital voucher market place
            </div>
            <br />
          </p>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              background: "#F7F7F7",
              textAlign: "center",
              padding: 15,
            }}
          >
            £19.99 per month
          </div>
        </div>
        <div className="text-center">
          <Button
            style={{
              background: "#4EAFEA",
              borderRadius: 10,
              position: "absolute",
              bottom: "28%",
              right: "19%",

              color: "white",
              textAlign: "center",
              padding: 10,
            }}
          >
            YOUR CURRENT
            <br /> ACTIVE PLAN
          </Button>
        </div>
      </div>
    </div>
  </div> */
}
export default Plan;
