import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, Grid, TextField } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
const AccountDetails = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [editPersonalInfo, setEditPersonalInfo] = useState<boolean>(false);
  const [userName, setUserName] = useState("Max Smirnov");
  const [email, setEmail] = useState("maxsmirnovemail.com");
  const [phone, setPhone] = useState("+123-456-7890");
  const [resetPassword, setResetPassword] = useState<boolean>(false);
  const [isEditAble, setIsEditAble] = useState(false);
  const [locationAddress, setLocationAddress] = useState(
    ReactHtmlParser(`Max Smirnov
  <br />K ionslieu Farm
  <br />
  Higher Foxdale
  <br />
  Foxdale, Isle of Man IM4 3HB
  <br />
  IM`)
  );
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }} p={2}>
      <Grid item  xs={12} md={6} sm={12} sx={{width : {xs : "100%"}}}>
        <Box
          p={5}
          bgcolor={"#FFFFFF"}
          boxShadow={"0px 2px 12px rgba(0, 0, 0, 0.07)"}
        >
          <div style={{ fontSize: 22, fontWeight: "600" }}>Account Details</div>
          <div style={{ border: "1px solid #999999", marginTop: 5 }}></div>
          <div style={{ fontSize: 22, fontWeight: "500", marginTop: 5 }}>
            Personal Info
          </div>
          <div
            style={{
              border: "1px solid #DFDFDF",
              background: "#FFFFFF",
              padding: 10,
              borderRadius: 6,
            }}
          >
            {editPersonalInfo ? (
              <Button
                size={"small"}
                onClick={() => setEditPersonalInfo(!editPersonalInfo)}
                style={{
                  background: "#FF3D5A",
                  cursor: "pointer",
                  color: "white",
                  float: "right",
                  marginTop: -11,
                  marginRight: -10,
                }}
              >
                Save
              </Button>
            ) : (
              <Box
                onClick={() => setEditPersonalInfo(!editPersonalInfo)}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{
                  background: "#FF3D5A",
                  borderRadius: 4,
                  color: "white",
                  width: 29,
                  height: 28,
                  float: "right",
                  position: "relative",
                  cursor: "pointer",
                  top: -10,
                  left: 10,
                }}
              >
                <ModeEditIcon />
              </Box>
            )}
            <Grid
              item
              p={1}
              display={"flex"}
              alignItems={"center"}
              mt={3}
              xs={12} md={6} sm={12}
            >
              <PersonIcon htmlColor="#ACACAC" fontSize={"small"} />
              &nbsp;
              {editPersonalInfo ? (
                <TextField
                  type="text"
                  size="small"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="text"
                  onChange={(event) => setUserName(event.target.value)}
                  defaultValue={userName}
                  fullWidth
                />
              ) : (
                <span style={{ fontSize: 18, marginLeft: 10 }}>{userName}</span>
              )}
            </Grid>
            <Box p={1} display={"flex"} alignItems={"center"}>
              <EmailIcon htmlColor="#ACACAC" fontSize={"small"} />
              &nbsp;
              {editPersonalInfo ? (
                <TextField
                  type="text"
                  size="small"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="text"
                  defaultValue={email}
                  fullWidth
                />
              ) : (
                <span style={{ fontSize: 18, marginLeft: 7 }}>{email}</span>
              )}
            </Box>
            <Box p={1} display={"flex"} alignItems={"center"}>
              <CallIcon htmlColor="#ACACAC" fontSize={"small"} />
              &nbsp;
              {editPersonalInfo ? (
                <TextField
                  type="text"
                  size="small"
                  placeholder="text"
                  onChange={(event) => setPhone(event.target.value)}
                  defaultValue={phone}
                  fullWidth
                />
              ) : (
                <span style={{ fontSize: 18, marginLeft: 10 }}>{phone}</span>
              )}
            </Box>
          </div>
          <div style={{ fontSize: 22, fontWeight: "500", marginTop: 5 }}>
            Password
          </div>
          <Box
            p={1}
            borderRadius={1}
            bgcolor={"#FFFFFF"}
            border="1px solid #DFDFDF"
          >
            {!resetPassword && (
              <Box
                onClick={() => setResetPassword(!resetPassword)}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{
                  background: "#FF3D5A",
                  borderRadius: 4,
                  color: "white",
                  width: 29,
                  cursor: "pointer",
                  height: 28,
                  position: "relative",
                  top: -11,
                  left: 10,
                  float: "right",
                }}
              >
                <ModeEditIcon />
              </Box>
            )}
            {resetPassword ? (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <TextField
                  type="text"
                  size="small"
                  placeholder="Enter Old Password"
                  fullWidth
                />
                &nbsp;
                <TextField
                  type="text"
                  size="small"
                  placeholder="Enter New Password"
                  fullWidth
                />
                &nbsp;
                <Button
                  size="small"
                  onClick={() => setResetPassword(!resetPassword)}
                  style={{
                    background: "#FF3D5A",
                    borderRadius: 4,
                    padding: 8,
                    color: "white",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  Save
                </Button>
              </Box>
            ) : (
              <div
                className="text-center"
                style={{ color: "#393939", fontSize: 24 }}
              >
                ****************
              </div>
            )}
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} sm={12} sx={{ width: { xs: "100%" } }} >
        <div
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
            padding: 15,
          }}
        >
          {isEditAble ? (
            <Button
              size={"small"}
              onClick={() => setIsEditAble(false)}
              style={{
                background: "#FF3D5A",
                color: "white",
                float: "right",
                marginTop: -11,
                marginRight: -12,
              }}
            >
              Save
            </Button>
          ) : (
            <Box
              onClick={() => setIsEditAble(true)}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              style={{
                background: "#FF3D5A",
                borderRadius: 4,
                color: "white",
                cursor: "pointer",
                width: 29,
                height: 28,
                float: "right",
                marginTop: -11,
                marginRight: -12,
              }}
            >
              <ModeEditIcon />
            </Box>
          )}
          <div style={{ fontSize: 22, color: "#000000" }}>
            Location 1 <br /> Address
          </div>
          {isEditAble ? (
            <TextField
              onChange={(event) => setLocationAddress(event.target.value)}
              fullWidth
              multiline
              rows={4}
              defaultValue={ReactHtmlParser(`Max Smirnov
      K ionslieu Farm
     
      Higher Foxdale
    
      Foxdale, Isle of Man IM4 3HB
    
      IM`)}
            ></TextField>
          ) : (
            <Box
              style={{ background: "#F2F2F2", padding: 15 }}
              display={"flex"}
              alignItems={"center"}
            >
              {locationAddress}
            </Box>
          )}
        </div>
        <Grid item xs={12} md={6} sm={12} textAlign="right">
          <Box
            onClick={() => setOpenPopup(true)}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={17}
            borderRadius={4}
            p={1}
            bgcolor="white"
            border="1px solid #FF2055"
            textAlign="center"
            sx={{
              cursor: "pointer",
            }}
          >
            <span className="text-center" style={{ color: "#FF2055" }}>
              Cancel Account
            </span>
          </Box>
        </Grid>
      </Grid>

      {/* <Grid item sm={6} sx={{width : {xs : "100%"}}}>
        <Box
          position={"absolute"}
          bgcolor="white"
          bottom={0}
          ml={60}
          borderRadius={2}
          textAlign="center"
          p={4}
        >
          Have a question? Get in touch with our &nbsp;
          <b style={{ color: "#FF2055" }}>Support team!</b>
        </Box>
      </Grid> */}
      <Dialog
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        style={{ borderRadius: 6, padding: 20 }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          color="#FF3D5A"
          className="text-center"
          style={{ letterSpacing: -0.127273, fontWeight: "600" }}
        >
          Are you sure you want to cancel you account?
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="text-center"
          >
            Cancelling your account will remove your profile from the <br />
            &nbsp;Loyal IOM app and will stop your reward scheme.
          </DialogContentText>
          <div style={{ fontSize: 15, textAlign: "center", marginTop: 20 }}>
            (Billing will end after next payment)
          </div>
        </DialogContent>
        <DialogActions className="d-flex justify-content-center align-items-center">
          <div
            onClick={() => setOpenPopup(false)}
            style={{
              background: "#FF2055",
              color: "white",
              padding: 20,
              width: 290,
              cursor: "pointer",
              height: 77,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Yes
          </div>
          <div
            onClick={() => setOpenPopup(false)}
            style={{
              background: " #15B91F",
              color: "white",
              padding: 20,
              width: 290,
              cursor: "pointer",
              height: 77,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            No
          </div>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
{
  /* <div className="container-fluid">
<div className="row p-3">
  <div className="col-sm-7">
    <div
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
        padding : 15
      }}
    >
      <div style={{ fontSize: 22, fontWeight: "600" }}>
        Account Details
      </div>
      <div style={{ border: "1px solid #999999", marginTop: 5 }}></div>
      <div style={{ fontSize: 22, fontWeight: "500", marginTop: 5 }}>
        Personal Info
      </div>
      <div
        style={{
          border: "1px solid #DFDFDF",
          background: "#FFFFFF",
          padding: 10,
          borderRadius: 6,
        }}
      >
        {editPersonalInfo ? (
          <Button
            onClick={() => setEditPersonalInfo(!editPersonalInfo)}
            style={{
              background: "#FF3D5A",
              borderRadius: 4,
              padding: 2,
              color: "white",
              cursor: "pointer",
              textAlign: "center",
              float: "right",
              marginTop: -11,
              marginRight: -10,
            }}
          >
            Save
          </Button>
        ) : (
          <div
            onClick={() => setEditPersonalInfo(!editPersonalInfo)}
            className="d-flex justify-content-center align-items-center"
            style={{
              background: "#FF3D5A",
              borderRadius: 4,
              color: "white",
              width: 29,
              height: 28,
              float: "right",
              position: "relative",
              cursor: "pointer",
              top: -10,
              left: 10,
            }}
          >
            <ModeEditIcon />
          </div>
        )}
        <div className="p-2 d-flex align-items-center mt-3  col-sm-12">
          <PersonIcon htmlColor="#ACACAC" fontSize={"small"} />
          &nbsp;
          {editPersonalInfo ? (
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="text"
              onChange={(event) => setUserName(event.target.value)}
              defaultValue={userName}
              style={{ border: "1px solid #A6A6B2", padding: 7 }}
            />
          ) : (
            <span style={{ fontSize: 18, marginLeft: 10 }}>
              {userName}
            </span>
          )}
        </div>
        <div className="p-2 d-flex align-items-center">
          <EmailIcon htmlColor="#ACACAC" fontSize={"small"} />
          &nbsp;
          {editPersonalInfo ? (
            <input
              type="text"
              className="form-control"
              onChange={(event) => setEmail(event.target.value)}
              id="exampleInputPassword1"
              placeholder="text"
              defaultValue={email}
              style={{ border: "1px solid #A6A6B2", padding: 7 }}
            />
          ) : (
            <span style={{ fontSize: 18, marginLeft: 7 }}>{email}</span>
          )}
        </div>
        <div className="p-2 d-flex align-items-center">
          <CallIcon htmlColor="#ACACAC" fontSize={"small"} />
          &nbsp;
          {editPersonalInfo ? (
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="text"
              onChange={(event) => setPhone(event.target.value)}
              defaultValue={phone}
              style={{ border: "1px solid #A6A6B2", padding: 7 }}
            />
          ) : (
            <span style={{ fontSize: 18, marginLeft: 10 }}>{phone}</span>
          )}
        </div>
      </div>
      <div style={{ fontSize: 22, fontWeight: "500", marginTop: 5 }}>
        Password
      </div>
      <div
        style={{
          border: "1px solid #DFDFDF",
          background: "#FFFFFF",
          padding: 10,
          borderRadius: 6,
        }}
      >
        {!resetPassword && (
          <div
            onClick={() => setResetPassword(!resetPassword)}
            className="d-flex justify-content-center align-items-center"
            style={{
              background: "#FF3D5A",
              borderRadius: 4,
              color: "white",
              width: 29,
              cursor: "pointer",
              height: 28,
              position: "relative",
              top: -11,
              left: 10,
              float: "right",
            }}
          >
            <ModeEditIcon />
          </div>
        )}
        {resetPassword ? (
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Old Password"
                style={{
                  border: "none",
                  padding: 10,
                  background: "#F2F2F2",
                  borderRadius: 6,
                }}
              />
            </div>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter New Password"
                style={{
                  border: "none",
                  padding: 10,
                  background: "#F2F2F2",
                  borderRadius: 6,
                }}
              />
            </div>
            <div className="col-sm-2">
              <Button
                onClick={() => setResetPassword(!resetPassword)}
                style={{
                  background: "#FF3D5A",
                  borderRadius: 4,
                  padding: 8,
                  color: "white",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div
            className="text-center"
            style={{ color: "#393939", fontSize: 24 }}
          >
            ****************
          </div>
        )}
      </div>
    </div>
  </div>
  <div className="col-sm-5">
    <div
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
        padding : 15
      }}
    >
      {isEditAble ? (
        <Button
          onClick={() => setIsEditAble(false)}
          style={{
            background: "#FF3D5A",
            borderRadius: 4,
            padding: 8,
            color: "white",
            cursor: "pointer",
            textAlign: "center",
            float: "right",
            marginTop: -0,
            marginRight: -12,
          }}
        >
          Save
        </Button>
      ) : (
        <div
          onClick={() => setIsEditAble(true)}
          className="d-flex justify-content-center align-items-center"
          style={{
            background: "#FF3D5A",
            borderRadius: 4,
            color: "white",
            cursor: "pointer",
            width: 29,
            height: 28,
            float: "right",
            marginTop: -0,
            marginRight: -12,
          }}
        >
          <ModeEditIcon />
        </div>
      )}
      <div style={{ fontSize: 22, color: "#000000" }}>
        Location 1 <br /> Address
      </div>
      {isEditAble ? (
        // <div className={"col-sm-4"}>
        <textarea
          onChange={(event) => setLocationAddress(event.target.value)}
          style={{
            background: "#F2F2F2",
            padding: 15,
            width: "100%",
            height: 180,
          }}
          defaultValue={ReactHtmlParser(`Max Smirnov
      K ionslieu Farm
     
      Higher Foxdale
    
      Foxdale, Isle of Man IM4 3HB
    
      IM`)}
        ></textarea>
      ) : (
        // </div>
        <div
          style={{ background: "#F2F2F2", padding: 15 }}
          className={"d-flex align-items-center"}
        >
          {locationAddress}
        </div>
      )}
    </div>
  </div>
  <div className="flex-row-reverse">
    <div
      onClick={() => setOpenPopup(true)}
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "#FFFFFF",
        border: "1px solid #FF2055",

        cursor: "pointer",
        float: "right",
        padding: 10,
        textAlign: "center",
        position: "relative",
        left: "-6%",
        borderRadius: 6,
      }}
    >
      <span className="text-center" style={{ color: "#FF2055" }}>
        Cancel Account
      </span>
    </div>
  </div>
  <div
    className="col-sm-6"
    style={{
      background: "#FFFFFF",
      borderRadius: 12,
      position: "absolute",
      bottom: 30,
      padding: 20,
      left: "31%",
      textAlign: "center",
      borderRight: 12,
    }}
  >
    Have a question? Get in touch with our &nbsp;
    <b style={{ color: "#FF2055" }}>Support team!</b>
  </div>
</div>
<Dialog
  open={openPopup}
  onClose={() => setOpenPopup(false)}
  style={{ borderRadius: 6, padding: 20 }}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
>
  <DialogTitle
    id="alert-dialog-title"
    color="#FF3D5A"
    className="text-center"
    style={{ letterSpacing: -0.127273, fontWeight: "600" }}
  >
    Are you sure you want to cancel you account?
  </DialogTitle>
  <DialogContent>
    <DialogContentText
      id="alert-dialog-description"
      className="text-center"
    >
      Cancelling your account will remove your profile from the <br />
      &nbsp;Loyal IOM app and will stop your reward scheme.
    </DialogContentText>
    <div style={{ fontSize: 15, textAlign: "center", marginTop: 20 }}>
      (Billing will end after next payment)
    </div>
  </DialogContent>
  <DialogActions className="d-flex justify-content-center align-items-center">
    <div
      onClick={() => setOpenPopup(false)}
      style={{
        background: "#FF2055",
        color: "white",
        padding: 20,
        width: 290,
        cursor: "pointer",
        height: 77,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
      }}
    >
      Yes
    </div>
    <div
      onClick={() => setOpenPopup(false)}
      style={{
        background: " #15B91F",
        color: "white",
        padding: 20,
        width: 290,
        cursor: "pointer",
        height: 77,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
      }}
    >
      No
    </div>
  </DialogActions>
</Dialog>
</div> */
}

export default AccountDetails;
