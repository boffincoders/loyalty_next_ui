import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import React from "react";
const ContactInfo = () => {
  return (
    <>
      <Typography variant="h5">
        Contact Info
      </Typography>
        
    <Grid rowSpacing={1} container columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      <Grid item sm={6} mt={1}sx ={{width : {xs : "100%"}}}>
        <b>Business Name</b>
        <TextField
          className="form-control"
          placeholder="Enter here"
          fullWidth
        />
      </Grid>

      <Grid item sm={6} mt={1}sx ={{width : {xs : "100%"}}}>
        <b>Your Name</b>
        <TextField
          className="form-control"
          placeholder="Enter here"
          fullWidth
        />
      </Grid>

      <Grid item sm={6} mt={1}sx ={{width : {xs : "100%"}}}>
        <b>Business Email Address</b>
        <TextField
          className="form-control"
          placeholder="Enter here"
          fullWidth
        />
      </Grid>

      <Grid item sm={6} mt={1}sx ={{width : {xs : "100%"}}}>
        <b>Contact Number</b>
        <TextField
          className="form-control"
          placeholder="Enter here"
          fullWidth
        />
      </Grid>

      <Grid item sm={12}sx ={{width : {xs : "100%"}}}>
        <b>Business Address</b>
        <TextField
          className="form-control"
          placeholder="Enter here"
          fullWidth
        />
      </Grid>

      {/* <Grid item sm={12} mt={2}> */}
       
          <Button
          endIcon={<ArrowForwardIcon />}
          fullWidth
            sx={{
              backgroundColor: "#ff3d5a",
              color: "white",
               ml:2,
              marginTop : 5,
              "&:hover": {
                background: "#ff3d5a",
              },
            }}
          >
            save and continue 
          </Button>
       
      {/* </Grid>/ */}
    </Grid>
    </>
    
  );
};

export default ContactInfo;
