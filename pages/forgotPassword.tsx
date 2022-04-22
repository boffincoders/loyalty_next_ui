import { Grid, Paper, TextField } from "@mui/material";
import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// import Image from "next/image";
const ForgotPassword = () => {
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
      <Paper sx={{ p: 3, mt: 2, maxWidth: 600 }}>
        <Typography variant="h5" textAlign={"center"}>
          Forgot Password
        </Typography>
        <Typography color="#898989" variant="h6" textAlign={"center"}>
          Enter your registered email id below to recieve password
          <br /> reset instructions
        </Typography>

        <TextField sx={{ mt: 2 }} placeholder="Email" fullWidth />

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
          Send
        </Button>
        <Link href={"/login"}>
          <p
            style={{ textAlign: "center", color: "#000000", cursor: "pointer" }}
          >
            Back to Login
          </p>
        </Link>
      </Paper>
    </Grid>
  );
};
{
  /* <section style={{ background: "#808393", height: "100vh" }}>
<div className="container">
  <div className="login" style={{ padding: "10% 0" }}>
    <div className="text-center">
      <img
        src={"/assets/app_logo.svg"}
        style={{ height: 50, width: 50 }}
      />
      <h2
        style={{
          color: "white",
          fontFamily: "poppins",
          textAlign: "center",
        }}
      >
        Loyal IOM
      </h2>
    </div>
    <div className="col-sm-12">
      <div className="col-sm-6 offset-sm-3">
  <Card sx={{ maxWidth: 600 }}>
    <CardActionArea>
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            color: "black",
            fontWeight: "bold",
          }}
          component="div"
        >
          Forgot Password?
        </Typography>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            color: "#898989",
          }}
        >
          Enter your registered email id below to recieve password
          <br /> reset instructions
        </p>
        <Grid item xs={12}>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Email"
            style={{ border: "1px solid #A6A6B2", padding: 10 }}
          />
        </Grid>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Link href={"/resetPassword"}>
        <Button
          style={{
            backgroundColor: "#ff3d5a",
            color: "white",
            width: "100%",
            padding: 10,
            borderRadius: 6,
          }}
        >
          send
        </Button>
      </Link>
    </CardActions>
    <Link href={"/login"}>
      <p style={{ textAlign: "center", color: "#000000" }}>Back to Login</p>
    </Link>
  </Card>
  </div>
  </div>
  </div>
  </div>
</section> */
}
export default ForgotPassword;
