import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
const FinalSubmit = () => {
  return (
    <Grid
    container
    height={"100vh"}
    display ={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    bgcolor="#808393"
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper className="p-3" elevation={2}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            
              marginTop: 5,
            }}
          >
            <div
             className="col-sm-2"
              style={{
                backgroundColor: "#15B91F",
                border: "2px dashed #E4E4E4",
              textAlign : "center",
                borderRadius: 50,
                padding : 20
              }}
            >
              <CheckIcon style={{ fontSize: 35 }} htmlColor="white" />
            </div>
          </div>
          <h1 style={{ textAlign: "center", fontWeight: "900" }}>
            Your application has been submitted!
          </h1>
          <p
            style={{ textAlign: "center", fontWeight: "900", color: "#000000" }}
          >
            Once you receive you Loyal IOM tags you can return to this <br />
            page to activate your account!
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#939495",
              fontWeight: 500,
              fontSize: 18,
            }}
          >
            (30 days free trial will start
            <br /> upon account activation)
          </p>
          <div
           className="col-sm-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding : 10,
              background: "#F5F5F5",
              borderRadius: "0px 0px 6px 6px",
            }}
          >
            <b style={{ fontSize: 19, color: "black", textAlign: "center" }}>
              If you do not recieve your Loyal IOM tags within the next 7
              business days.
              <br />
              Please contact
            </b>
            <b style={{ color: "#FF3D5A" }}>support@loyal-iom.com</b>
          </div>
        </Paper>
      </Box>
    </Grid>
  );
};

export default FinalSubmit;
