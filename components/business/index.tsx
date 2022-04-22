import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Checkbox from "@mui/material/Checkbox";
// import Image from "next/image";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
export const calenderArray = [
  {
    day: "Mon",
    status: ["open", "closed"],
    from: "",
    to: "",
    selectedStatus: "open",
  },
  {
    day: "Tue",
    status: ["open", "closed"],
    from: "",
    to: "",
    selectedStatus: "open",
  },
  {
    day: "Wed",
    status: ["open", "closed"],
    from: "",
    to: "",
    selectedStatus: "open",
  },
  {
    day: "Thu",
    status: ["open", "closed"],
    from: "",
    to: "",
    selectedStatus: "open",
  },
  {
    day: "Fri",
    status: ["open", "closed"],
    from: "",
    to: "",
    selectedStatus: "open",
  },
  {
    day: "Sat",
    status: ["open", "closed"],
    from: "",
    to: "",
    selectedStatus: "open",
  },
  {
    day: "Sun",
    status: ["open", "closed"],
    from: "",
    to: "",
    selectedStatus: "open",
  },
];
const Business = () => {
  const [timing, setTiming] = useState<any>(calenderArray);
  const [autoFillValue, setAutoFillValue] = useState("open");
  const [time, setTime] = useState<string>("");
  const handleStatusChanged = (event: any, rowIndex: number) => {
    setTiming((prevState) => {
      prevState[rowIndex].selectedStatus = event.target.value;
      return [...prevState];
    });
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [index, setIndex] = useState<any>(0);
  const slider: number[] = [0, 1];
  const onAutoFill = (type) => {
    if (type === "from") {
      const fromSchedule = timing.map((x) => {
        return { ...x, from: "09:00AM" };
      });
      setTiming(fromSchedule);
    } else {
      const toSchedule = timing.map((x) => {
        return { ...x, to: "17:00PM" };
      });
      setTiming(toSchedule);
    }
  };
  const YourBusinessPart1 = () => {
    return (
      <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3 }} p={3}>
        {/* <Typography
          style={{
            fontSize: 26,
            color: "#0D152E",
            fontWeight: "700",
          }}
        >
          Your business
        </Typography> */}
        <Grid item sm={4} sx={{ width: { xs: "100%" } }}>
          <div style={{ fontSize: 14, color: "#000000" }}>Your Logo</div>

          <Box
            mt={1}
            style={{
              border: "1px dashed #FF3D5A",
              backgroundColor: "#FFF9F1",
              padding: 20,
              textAlign: "center",
              display: "flex",
              cursor: "pointer",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <img src={"/assets/Path.png"} />
            <label style={{ color: "#FF3D5A" }}>Upload Logo</label>
          </Box>
        </Grid>
        <Grid item sm={6} sx={{ width: { xs: "100%" } }}>
          <div style={{ fontSize: 14, color: "#000000" }}>Your Cover Photo</div>

          <Box
            mt={1}
            style={{
              border: "1px dashed #FF3D5A",
              backgroundColor: "#FFF9F1",
              padding: 20,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <img src={"/assets/Path.png"} />
            <div style={{ color: "#FF3D5A" }}>Upload Cover Photo</div>
          </Box>
        </Grid>
        <Box sx={{ display: "flex", m: 2 }}>
          <Typography>Bio</Typography> &nbsp;
          <Typography style={{ color: "#707070" }}>
            (Visible to your customers)
          </Typography>
        </Box>
        <TextField
          placeholder="Enter business description"
          fullWidth
          rows={5}
          multiline={true}
          sx={{
            border: "1px solid #EAECED",
          }}
        ></TextField>
        {/* <Grid item sm={12} mt={2} sx={{ width: { xs: "100%" } }}> */}
        <Box sx={{ display: "flex", m: 2 }}>
          <Typography>Social Links</Typography>&nbsp;
          <Typography style={{ color: "#707070" }}>
            (Please add at least one)
          </Typography>
        </Box>
        {/* </Grid> */}
        <Grid
          sm={12}
          p={1}
          bgcolor={"#FCFCFD"}
          display={"flex"}
          alignItems={"center"}
          sx={{ width: { xs: "100%" } }}
        >
          <img src={"/assets/facebook.png"} />
          <span>Facebook Account</span>
        </Grid>
        &nbsp; &nbsp;
        <Grid
          sm={12}
          p={1.2}
          bgcolor={"#FCFCFD"}
          display={"flex"}
          alignItems={"center"}
          sx={{ width: { xs: "100%" } }}
        >
          <img src={"/assets/insta.png"} />
          &nbsp;&nbsp;
          <span>Instagram Account</span>
        </Grid>
      </Grid>
    );
  };
  const YourBusinessPart2 = () => {
    return (
      <div style={{ marginLeft: 20 }} className="container-fluid">
        <div
          style={{
            fontSize: 26,
            color: "#0D152E",
            fontWeight: "700",
          }}
        >
          Your business
        </div>
        <div style={{ color: "#393939", fontWeight: "700" }}>
          Location &nbsp; (where will stamps be collected by customers?):
        </div>
        <div
          style={{
            display: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox {...label} />
          <span>Same as registered business address</span>
        </div>
        <TextField
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Search other Address"
          fullWidth
        />
        &nbsp;
        <Box p={1} style={{ fontWeight: "500", fontSize: 18 }}>
          Opening Hours
        </Box>
        <TableContainer>
          <Table
            size="small"
            sx={{
              minWidth: 100,
              borderRadius: 10,
              border: "1px solid rgba(127, 130, 146, 0.17)",
            }}
            aria-label="simple table"
          >
            <TableHead sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
              <TableRow
                sx={{
                  background: "#F7FAFF",
                  border: "1px solid #90A6C9",
                }}
              >
                <TableCell align="center" sx={{ borderBottom: "none" }}>
                  <div>Autofill</div>
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: "none" }}>
                  <ToggleButtonGroup
                    color="primary"
                    value={autoFillValue}
                    exclusive
                    onChange={handleAllStatusChanged}
                  >
                    <ToggleButton value="open">open</ToggleButton>

                    <ToggleButton value="closed">closed</ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: "none" }}>
                  <Select
                    value={time}
                    onChange={() => onAutoFill("from")}
                    style={{
                      background: "#FFFFFF",
                      width: 101,
                      borderRadius: 8,
                    }}
                    labelId="demo-simple-select-disabled-label"
                    placeholder="09:00AM"
                    id="demo-simple-select-disabled"
                    label="00:00AM"
                  >
                    <MenuItem value={"09:00AM"}>09:00AM</MenuItem>
                  </Select>
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: "none" }}>
                  <div style={{ color: "black" }}>To</div>
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: "none" }}>
                  <Select
                    value={time}
                    onChange={() => onAutoFill("to")}
                    style={{
                      background: "#FFFFFF",
                      width: 101,

                      borderRadius: 8,
                    }}
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    label="00:00AM"
                  >
                    <MenuItem value={"17:00PM"}>17:00PM</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {timing.map((row, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: "none" }}
                    >
                      <div style={{ textAlign: "center" }}>{row.day}</div>
                    </TableCell>
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      <div
                        style={{
                          display: "flex",
                          borderRadius: "4,0,0,4",
                          padding: 10,
                        }}
                      ></div>
                      <ToggleButtonGroup
                        color="primary"
                        value={row.selectedStatus}
                        style={{ border: "none" }}
                        exclusive
                        onChange={(event) => handleStatusChanged(event, index)}
                      >
                        {row?.status.map((s, i) => {
                          return (
                            <ToggleButton key={i} value={s}>
                              {s}
                            </ToggleButton>
                          );
                        })}
                      </ToggleButtonGroup>
                    </TableCell>
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      <Select
                        value={row.from}
                        style={{
                          background: "#FFFFFF",
                          width: 101,

                          borderRadius: 8,
                        }}
                        labelId="demo-simple-select-disabled-label"
                        placeholder="00:00AM"
                        id="demo-simple-select-disabled"
                        label="00:00AM"
                      >
                        <MenuItem value={row.from}>{row.from}</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      <div style={{ color: "black" }}>To</div>
                    </TableCell>
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      <Select
                        value={row?.to}
                        style={{
                          background: "#FFFFFF",
                          width: 101,

                          borderRadius: 8,
                        }}
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        label="00:00AM"
                      >
                        <MenuItem value={row?.to}>{row?.to}</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  const handleAllStatusChanged = (event: any) => {
    setAutoFillValue(event.target.value);
    const updatedSchedule = timing.map((x, i) => {
      return { ...x, selectedStatus: event.target.value };
    });
    setTiming(updatedSchedule);
  };
  return (
    <>
      <SwipeableViews
        enableMouseEvents
        index={index}
        onChangeIndex={(index) => setIndex(index)}
      >
       <YourBusinessPart1 />
        <YourBusinessPart2 />
         
      </SwipeableViews>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
      </Box>
      <Grid item sm={12}>
        <Button
          onClick={() => setIndex(1)}
          endIcon={<ArrowForwardIcon />}
          style={{
            marginTop: 15,
            background: "#FF3D5A",
            color: "white",
            width: "100%",
          }}
        >
          Next
        </Button>
      </Grid>
    </>
  );
};

export default Business;
