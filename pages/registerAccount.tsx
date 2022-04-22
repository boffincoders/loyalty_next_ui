
import React from "react";

import Typography from "@mui/material/Typography";
import {Grid , Button ,Paper ,TextField, Box} from "@mui/material";
import Link from "next/link";
const RegisterAccount = () => {
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
      Register Business Account
      </Typography>
      <Typography color= "#898989" variant="h6" textAlign={"center"}>
      Enter details to continue
      </Typography>
      <TextField sx={{ mt: 2 }} placeholder="Email" fullWidth />
      <TextField sx={{ mt: 2 }} placeholder="Password" fullWidth />
      <TextField sx={{ mt: 2 }} placeholder="Re-enter password" fullWidth />
    
      <Link href={"/contactInfo"}><Button
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
       Create Account
      </Button>
      </Link>
      <Box  bgcolor={"#f7f8ff"} p={1} >
      <p style={{ textAlign: "center" }}>
            Already have an Business Account?&nbsp;
            <Link href={"/login"}>
              <b style={{ color: "#ff3d5a",cursor : "pointer" }}>Sign In</b>
            </Link>
          </p>
      </Box>
    </Paper>
  </Grid>
  );
};
{/* <section style={{ background: "#808393", height: "100vh" }}>
<div className="container">
<div className="login" style={{padding: "10% 0"}}>
  <div className="text-center">
    <img src={"/assets/app_logo.svg"} style={{ height: 50, width: 50 }} />
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
              Register Business Account
            </Typography>
            <p
              style={{
                textAlign: "center",
                fontFamily: "Poppins",
                color: "#898989",
              }}
            >
              Enter details to continue
            </p>
            <div className="col-sm-12 p-2">
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Email"
                style={{ border: "1px solid #A6A6B2", padding: 10 }}
              />
              <div
                style={{ marginTop: -30, marginRight: 10 }}
                className="d-flex justify-content-end"
              >
                <img src={"/assets/mail.png"} height={20} width={20} />
              </div>
            </div>
            <div className="col-sm-12 p-2">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                style={{ border: "1px solid #A6A6B2", padding: 10 }}
              />
              <div
                style={{ marginTop: -30, marginRight: 10 }}
                className="d-flex justify-content-end"
              >
                <img src={"/assets/Vector.svg"} height={20} width={20} />
              </div>
            </div>
            <div className="col-sm-12 p-2">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Re-enter password"
                style={{ border: "1px solid #A6A6B2", padding: 10 }}
              />
              <div
                style={{ marginTop: -30, marginRight: 10 }}
                className="d-flex justify-content-end"
              >
                <img src={"/assets/Vector.svg"} height={20} width={20} />
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href={"/contactInfo"}>
            <Button
              style={{
                backgroundColor: "#ff3d5a",
                color: "white",
                width: "100%",
                padding: 10,
                borderRadius: 6,
              }}
            >
              Create Account
            </Button>
          </Link>
        </CardActions>
        <div className={styles.footer}>
          <p style={{ textAlign: "center" }}>
            Already have an Business Account?&nbsp;
            <Link href={"/login"}>
              <b style={{ color: "#ff3d5a" }}>Sign In</b>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  </div>
  </div>
</div>
</section> */}

export default RegisterAccount;
