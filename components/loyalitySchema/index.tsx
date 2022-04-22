import { Box, Button, Grid, MenuItem, Select } from "@mui/material";
// import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import React from "react";
const LoyalitySchema = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      p={3}
      rowSpacing={2}
    >
      <h3>Loyalty Scheme</h3>
      <Grid
        p={2}
        style={{ border: "1px solid #DADADA", borderRadius: 8 }}
        item
        sm={12}
      >
        <Grid item sm={12}>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <p style={{ color: "#0D152E", fontSize: 14 }}>
              How many stamp does a customer need to collect
              <br /> to earn a reward? (a complete loyalty card)
            </p>
            <Select
              value={"7"}
              style={{
                background: "#FFFFFF",
                width: 100,
                height: 38,

                borderRadius: 8,
              }}
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              label="7"
            >
              <MenuItem value={"7"}>{7}</MenuItem>
            </Select>
          </Box>
        </Grid>
        <Grid sx={{ borderBottom: "1px solid #DADADA" }} item sm={12}></Grid>
        <Grid item sm={12}>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <p style={{ color: "#0D152E", fontSize: 14 }}>
              What reward does a customer earn
              <br /> when they complete the card.
            </p>
            <Select
              value={"1 Free Coffee"}
              style={{
                background: "#FFFFFF",
                borderRadius: 8,
              }}
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              label="7"
            >
              <MenuItem value={"1 Free Coffee"}>{"1 Free Coffee"}</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Grid>

      <Grid item sm={12}>
        <div
          style={{
            padding: 20,
            border: "1px solid #DADADA",
            borderRadius: 8,
            marginTop: 10,
          }}
        >
          <div style={{ fontSize: 14, color: "#000000" }}>
            Loyalty Card Preview
          </div>
          <div
            style={{
              border: "1.14px solid #808393",
              borderRadius: 10,
              width: "100%",
              padding: 17,
            }}
          >
            <div
              style={{
                background: "white",
                display: "flex",
                alignItems: "center",
                padding: 7,
              }}
            >
              <img src={"/assets/Bitmap.png"} />
              &nbsp;
              <div>Collect X stamps to Earn: Y</div>
            </div>
            <Grid
              sm={12}
              item
              style={{
                padding: 34,
                background: "#F2F2F2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: 5,
              }}
            >
              <Grid
                item
                sm={12}
                style={{
                  background: "white",
                  border: "1px dashed rgba(128, 131, 147, 0.71)",
                  padding: 5,
                  borderRadius: 6,
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontWeight: "500",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  upload Image
                </div>
              </Grid>
              <div>Or</div>
              <div
                style={{
                  color: "#FF3D5A",
                  borderBottom: "1px solid #FF3D5A",
                  cursor: "pointer",
                }}
              >
                Use Logo Image
              </div>
            </Grid>
          </div>
        </div>
      </Grid>
      <Grid item sm={12} sx={{width :{xs :"100%"}}}>
        <Box
          style={{
            border: "1px dashed #4EADEA",
            cursor: "pointer",
            marginTop: 10,
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          Add Another Card
        </Box>
     
      </Grid>
     
        <Button
          fullWidth
          endIcon={<ArrowForwardIcon />}
          style={{
            background: "#FF3D5A",
            marginTop: 25,
            color: "white",
          }}
        >
          Save and Continue &nbsp;
        </Button>
       
    
    </Grid>
  );
};

export default LoyalitySchema;
