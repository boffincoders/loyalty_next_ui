import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import styles from "../../../styles/Dashboard.module.css";
const Profile = () => {
  const [isEditAbleFaceBook, setIsEditAbleFacebook] = useState(false);
  const [isEditAbleInsta, setIsEditAbleInsta] = useState(false);
  const [editBio, setEditBio] = useState(false);
  const [bio, setBio] = useState(
    "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsumFusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus"
  );
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      sx={{ p: 2 }}
    >
      <Grid item xs={12} md={6} sm={12}>
        <div className={styles.totalCustomers}>
          <Grid item xs={12} md={6} sm={12}>
            {/* <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={2}
              sx={{
                left: "51.7%",
                top: "22.4%",
                position: "absolute",
                zIndex: 999999,
                background: "#FF3D5A",
                borderTopLeftRadius: "30%",
                color: "white",
              }}
            >
              <ModeEditIcon />
            </Box> */}
            <img
              src={"/assets/profileCover.png"}
              // style={{ width: "100%" }}
            ></img>
          </Grid>
          <Box style={{ marginTop: -70, marginLeft: 20 }}>
            <img width={156} height={156} src={"/assets/Rectangle 290.png"} />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={-6}
              ml={14}
              p={1}
              style={{
                background: "#FF3D5A",
                color: "white",
                position: "relative",
                zIndex: 100,
                width: 40,
                borderRadius: "32px 0px",
              }}
            >
              <ModeEditIcon />
            </Box>
          </Box>
        </div>
        <div style={{ marginTop: 15, background: "white", padding: 23 }}>
          <div style={{ color: "#000000", fontSize: 22, fontWeight: "600" }}>
            {editBio ? (
              <Button
                onClick={() => setEditBio(!editBio)}
                style={{
                  background: "#FF3D5A",
                  borderRadius: 4,
                  padding: 5,
                  color: "white",
                  cursor: "pointer",
                  textAlign: "center",
                  float: "right",
                  marginTop: -20,
                  marginRight: -20,
                }}
              >
                Save
              </Button>
            ) : (
              <Box
                onClick={() => setEditBio(!editBio)}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={0.4}
                style={{
                  background: "#FF3D5A",
                  borderRadius: 4,
                  color: "white",
                  float: "right",
                  cursor: "pointer",
                  marginTop: -23,
                  marginRight: -23,
                }}
              >
                <ModeEditIcon />
              </Box>
            )}
            <Typography variant="h5" ml={1}>
              Bio
            </Typography>
            <br />
            {editBio ? (
              <TextField
                id="outlined-multiline-static"
                label="Bio"
                placeholder="Enter here"
                onChange={(e) => setBio(e.target.value)}
                multiline
                fullWidth
                rows={4}
                defaultValue={bio}
              />
            ) : (
              <Typography p={1} sx={{ color: "#474747", fontSize: 16 }}>
                {bio}
              </Typography>
            )}
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6} sm={12}>
        <Box p={2} sx={{ background: "white" }}>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            {isEditAbleFaceBook ? (
              <TextField
                type="text"
                size="small"
                placeholder="Enter link here"
                fullWidth
              />
            ) : (
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
              >
                <img src={"/assets/facebook.png"} />
                <span style={{ fontSize: 14, color: "#000000" }}>
                  Facebook link
                </span>
              </Box>
            )}
            &nbsp;
            {isEditAbleFaceBook ? (
              <Button
                size="small"
                onClick={() => setIsEditAbleFacebook(false)}
                style={{
                  background: "#FF3D5A",

                  color: "white",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                Save
              </Button>
            ) : (
              <Box
                onClick={() => setIsEditAbleFacebook(true)}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={0.4}
                style={{
                  background: "#FF3D5A",
                  color: "white",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                <ModeEditIcon />
              </Box>
            )}
          </Box>
          <div
            style={{ border: "1px solid #C0C9DD", height: 0, margin: 10 }}
          ></div>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            {isEditAbleFaceBook ? (
              <TextField
                type="text"
                placeholder="Enter link here"
                size="small"
                fullWidth
              />
            ) : (
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
              >
                <img src={"/assets/facebook.png"} />
                <span style={{ fontSize: 14, color: "#000000" }}>
                  Instagram Link
                </span>
              </Box>
            )}
            &nbsp;
            {isEditAbleInsta ? (
              <Button
                size="small"
                onClick={() => setIsEditAbleInsta(false)}
                style={{
                  background: "#FF3D5A",

                  color: "white",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                Save
              </Button>
            ) : (
              <Box
                onClick={() => setIsEditAbleInsta(true)}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={0.4}
                style={{
                  background: "#FF3D5A",
                  color: "white",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                <ModeEditIcon />
              </Box>
            )}
          </Box>
        </Box>

        <Grid item xs={12} md={12} sm={12}>
          <div className={styles.loyaltyCards}>
            <div style={{ fontSize: 18 }}>Your Loyalty Cards</div>
            <div
              style={{ border: "1px solid #BFC9DD", height: 0, marginTop: 5 }}
            ></div>
            <Grid
              item
              xs={12}
              md={12}
              sm={12}
              mt={2}
              display="flex"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <span style={{ fontSize: 16, color: "#000000" }}>
                Set Stamp Collection Limit:
              </span>
              <Select
                style={{
                  background: "#FFFFFF",
                  width: 192,
                  height: 48,
                  borderRadius: 8,
                }}
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                label="00:00AM"
              >
                <MenuItem value={"00:00AM"}>1 Stamp per day</MenuItem>
              </Select>
              <div style={{ float: "right" }}>
                <HelpOutlineIcon />
              </div>
            </Grid>
            <div
              style={{
                border: "1.14px solid #808393",
                borderRadius: 10,
                display: "flex",

                marginTop: 5,
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  background: "white",
                  display: "flex",
                  marginLeft: 6,
                  marginRight: 6,
                  alignItems: "center",
                  padding: 7,
                }}
              >
                <img src={"/assets/Bitmap.png"} />
                &nbsp;
                <div>Collect X stamps to Earn: Y</div>
              </div>
              <Grid
                item
                xs={12}
                md={12}
                sm={12}
                p={3}
                borderRadius={5}
                sx={{
                  backgroundColor: "#EDE3AE",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Box
                  sx={{ position: "relative", zIndex: 100 }}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  {[1, 2, 3, 4].map((x, i) => {
                    return (
                      <>
                        <Box
                          key={i}
                          display="flex"
                          justifyContent={"center"}
                          alignItems="center"
                          borderRadius={10}
                          p={2}
                          m={2}
                          sx={{
                            background: "white",
                          }}
                        >
                          <img color="black" src={"/assets/Shape.png"} />
                        </Box>
                      </>
                    );
                  })}
                </Box>
                <Box
                  sx={{ position: "relative", zIndex: 100 }}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  {[1, 2, 3].map((x, i) => {
                    return (
                      <>
                        <Box
                          key={i}
                          display="flex"
                          justifyContent={"center"}
                          alignItems="center"
                          borderRadius={10}
                          p={2}
                          m={2}
                          sx={{
                            background: "white",
                          }}
                        >
                          <img color="black" src={"/assets/Shape.png"} />
                        </Box>
                      </>
                    );
                  })}
                </Box>
              </Grid>
            </div>
            <div
              style={{
                border: "5px solid #E4E4E4",
                height: 0,
                marginTop: 10,
              }}
            ></div>
            <Box
              mt={2}
              display="flex"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <span style={{ fontSize: 16 }}>Set Stamp Collection Limit:</span>
              <Select
                style={{
                  outline: "none",
                  background: "#FFFFFF",
                  width: 192,
                  height: 48,

                  borderRadius: 8,
                }}
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                label="00:00AM"
              >
                <MenuItem value={"00:00AM"}>1 Stamp per day</MenuItem>
              </Select>
              <div>
                <HelpOutlineIcon />
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
