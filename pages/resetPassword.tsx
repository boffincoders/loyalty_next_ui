import React from "react";

import Typography from "@mui/material/Typography";
import { Button , Grid , Paper  ,Box,TextField  } from "@mui/material";
import Link from "next/link";

const ResetPassword = () => {
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
      Reset Password
      </Typography>
      <Typography color= "#898989" variant="h6" textAlign={"center"}>
      Your new password must be different from previous<br /> used password
      </Typography>
      
      <TextField sx={{ mt: 2 }} placeholder="Password" fullWidth />
      <TextField sx={{ mt: 2 }} placeholder="Re-enter password" fullWidth />
    
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
       Reset Password
      </Button>
      <Box  bgcolor={"#f7f8ff"} p={1} >
        <p style={{ textAlign: "center" }}>
          Don't have an Business account?&nbsp;
          <Link href={"/registerAccount"}>
            <b style={{ color: "#ff3d5a", cursor: "pointer" }}>
              back to Login
            </b>
          </Link>
        </p>
      </Box>
    </Paper>
  </Grid>
  );
};
{/* <section style={{ background: "#808393", height: "100vh" }}>
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
                }}
                component="div"
              >
                Reset Password?
              </Typography>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins",
                  color: "#898989",
                }}
              >
                your new password must be different from previous
                <br /> used password
              </p>
              <Grid item xs={12}>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  style={{
                    border: "1px solid #A6A6B2",
                    padding: 10,
                    margin: 5,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Re-enter-password"
                  style={{
                    border: "1px solid #A6A6B2",
                    padding: 10,
                    margin: 5,
                  }}
                />
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              style={{
                backgroundColor: "#ff3d5a",
                color: "white",
                width: "100%",
                padding: 10,
                borderRadius: 6,
              }}
            >
              Reset Password
            </Button>
          </CardActions>
          <Link href={"/login"}>
            <p style={{ textAlign: "center", color: "#000000" }}>
              Back to Login
            </p>
          </Link>
        </Card>
      </div>
    </div>
  </div>
</div>
</section> */}
export default ResetPassword;
