import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SwipeableViews from "react-swipeable-views";
import { useRouter } from "next/router";
const slider = [0, 1, 2];
const CompleteSetup = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const CompleteSetUp1 = () => {
    return (
      <>
        <h2>Complete SetUp</h2>
        <div
          style={{
            border: " 1px solid #DADADA",
            height: 120,
            borderRadius: 8,
            padding: 10,
          }}
        >
          <div style={{ fontSize: 16, color: "#0D152E" }}>
            Where should we send your Loyal IOM tag (s)?
          </div>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Isle of Man"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Isle of Man"
              control={<Radio size="small" color="default" />}
              label="Isle of Man"
            />
            <FormControlLabel
              value="Foxdale, Isle of Man"
              control={<Radio size="small" color="default" />}
              label="Foxdale, Isle of Man"
            />
          </RadioGroup>
        </div>
        <div
          style={{
            marginTop: 17,

            border: " 1px solid #DADADA",
            height: 120,
            borderRadius: 8,
            padding: 14,
          }}
        >
          <div style={{ fontSize: 16, color: "#0D152E" }}>
            Send to another address:
          </div>

          <TextField
           
            placeholder="Search for other address"
           
            fullWidth
          />
        </div>
      </>
    );
  };
  const CompleteSetUp2 = () => {
    return (
      <>
        <h2>Complete SetUp</h2>
        <div style={{ color: "#0D152E", fontSize: 16 }}>
          Please review the terms of our contract
        </div>
        <TextField
        multiline={true}
        rows={10}
        fullWidth
          value={`* Interpretation

          * In these Conditions:
          “App” means the mobile application made available to Users to implement the Retailer's digital loyalty card.
          “Commencement Date” means the date from which the Services shall be provided and as set out on the Order Form.
          “Conditions” means Squid Rewards’ terms and conditions as
          set out in this document and that apply to the Retailer.
          
          “Free Trial Period” shall be as set out on the Order Form.
          “Initial Subscription Period” shall be as set out on the Order Form.`}
          style={{
           
            width: "100%",
            height: 282,
            borderRadius: 8,
          }}
        ></TextField>
        <br />
        <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <Checkbox color="error" {...label} />
          <div style={{ color: "#2C2B47", fontSize: 14 }}>
            I have read and agree to the Terms and Conditions of the
            <br /> Loyal IOM Free Trial and Subscription Plan
          </div>
        </div>
      </>
    );
  };
  const Summary = () => {
    return (
      <div>
        <h2>Summary</h2>
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.11)",
            borderRadius: 4,

            padding: 10,
          }}
        >
          <div
            style={{
              justifyContent: "space-around",
              padding: 5,
            }}
          >
            <div>
              <div
                style={{ color: "#FF3D5A", fontWeight: "bold", fontSize: 18 }}
              >
                Basic - Monthly Billing
              </div>
              <p style={{ color: "#565656", fontSize: 11 }}>
                You won't be billed until 30 days after
                <br /> you activate your Loyal IOM account. <br />
                You can cancel your plan at any time.
              </p>
            </div>
            <div>
              <b>FREE for 30 Days</b>
              <br />
              <b>£19.99/ month there after</b>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 5,
            }}
          >
            <div>
              <div
                style={{ color: "#393939", fontWeight: "bold", fontSize: 16 }}
              >
                Loyal IOM Tags (s)+ Loyal IOM Marketing
              </div>
              <div> Pack Shipped to: Isle of Man</div>
            </div>
            <div>
              <b>£4.99</b>
              <br />
              <b>Free Shipping</b>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            marginTop: 20,
            padding: 7,
          }}
        >
          <div style={{ color: "#FF3D5A", fontSize: 16, fontWeight: "500" }}>
            Total to pay now:
          </div>
          <div style={{ color: "#FF3D5A", fontSize: 16, fontWeight: "500" }}>
            £4.99
          </div>
        </div>
        <div
          style={{
            height: 0,
            border: "1px solid rgba(0, 0, 0, 0.11)",
          }}
        ></div>
        <div
          style={{
            marginTop: 10,
            border: "1px solid rgba(0, 0, 0, 0.11)",
            display: "flex",
            alignItems: "center",
            padding: 10,
            borderRadius: 4,
            color: "#5C5F6F",
          }}
        >
          Pay By Card
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: 10,
              textAlign: "center",
              marginTop: 30,
              backgroundColor: "#9DA2B9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            <p style={{ color: "white" }}>
              Powered by <b style={{ color: "white" }}>Sage</b>Pay
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <SwipeableViews
        enableMouseEvents
        index={index}
        onChangeIndex={(index) => setIndex(index)}
      >
        <div>
          <CompleteSetUp1 />
        </div>
        <div>
          <CompleteSetUp2 />
        </div>
        <div>
          <Summary />
        </div>
      </SwipeableViews>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginTop: 20,
        }}
      >
        {index > 0 ? (
          <div
            onClick={() => setIndex(index - 1)}
            style={{
              border: "1px solid #838383",
              height: 41,

              width: 41,
              borderRadius: 25,
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <ArrowBackIcon htmlColor="#838383" />
          </div>
        ) : (
          <div></div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          {slider.map((value, sliderIndex) => {
            return (
              <>
                <div
                  onClick={() => setIndex(sliderIndex)}
                  style={{
                    cursor: "pointer",
                    width: sliderIndex === index ? 19 : 13,
                    height: sliderIndex === index ? 19 : 13,
                    background: sliderIndex === index ? "#FF3D5A" : "",
                    borderRadius: sliderIndex === index ? 20 : 10,
                    ...(sliderIndex === index
                      ? null
                      : { border: "1px solid #C1C1C1" }),
                  }}
                ></div>
                &nbsp;
                <div
                  style={{
                    cursor: "pointer",
                    width: 13,

                    borderRadius: 10,
                    height: 13,
                  }}
                ></div>
              </>
            );
          })}
        </div>
        {index >= 2 ? (
          <div></div>
        ) : (
          <div
            onClick={() => setIndex(index + 1)}
            style={{
              border: "1px solid #838383",
              padding: 10,
              borderRadius: 25,
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <ArrowForwardIcon htmlColor="#838383" />
          </div>
        )}
      </div>

      <div
        onClick={() => {
          index < 2 ? setIndex(index + 1) : router.push("finalSubmit");
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          alignItems: "center",
          background: "#FF3D5A",
          padding: 15,
          color: "white",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        SUBMIT APPLICATION
      </div>
    </>
  );
};

export default CompleteSetup;
