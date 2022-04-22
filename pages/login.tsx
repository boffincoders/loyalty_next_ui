import { Button, Grid, Paper, TextField, Box, Typography, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

const LoginTemp = () => {
  return (
    <Grid
      container
      height={"100vh"}
      bgcolor={"#808393"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      flexDirection={"column"}
    >
      <img src={"/assets/app_logo.svg"} style={{ height: 50, width: 50 }} />
      <Typography
        variant="h4"
        style={{ color: "white", fontFamily: "poppins", textAlign: "center" }}
      >
        Loyal IOM
      </Typography>
      <Paper sx={{ p: 3, mt: 2 ,maxWidth : 600}}>
        <Typography variant="h5" textAlign={"center"}>
          Welcome Back!
        </Typography>
        <TextField sx={{ mt: 2 }} placeholder="Name" fullWidth />
        <TextField sx={{ mt: 2 }} placeholder="Password" fullWidth />
        <Link href={'/forgotPassword'}>
        <Typography
          variant="h6"
          textAlign={"right"}
          sx={{ cursor: "pointer " }}
        >
          Forgot Password?
        </Typography>
        </Link>
        <Button
          sx={{
            mt: 2,
            background: "#ff3d5a",
            "&:hover": {
              background: "#ff3d5a",
            },
          }}
          fullWidth
          variant="contained"
        >
          Sign In
        </Button>
        <Box  bgcolor={"#f7f8ff"} p={1} >
          <p style={{ textAlign: "center" }}>
            Don't have an Business account?&nbsp;
            <Link href={"/registerAccount"}>
              <b style={{ color: "#ff3d5a", cursor: "pointer" }}>
                Create Account
              </b>
            </Link>
          </p>
        </Box>
      </Paper>
    </Grid>
  );
};

export default LoginTemp;
