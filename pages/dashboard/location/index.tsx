import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import styles from "../../../styles/Dashboard.module.css";
import ReactHtmlParser from "react-html-parser";
import { calenderArray } from "../../../components/business";
const Location = () => {
  const [timing, setTiming] = useState<any>(calenderArray);
  const [autoFillValue, setAutoFillValue] = useState("open");
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
  const handleStatusChanged = (event: any, rowIndex: number) => {
    setTiming((prevState) => {
      prevState[rowIndex].selectedStatus = event.target.value;
      return [...prevState];
    });
  };
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

  const handleAllStatusChanged = (event: any) => {
    setAutoFillValue(event.target.value);
    const updatedSchedule = timing.map((x, i) => {
      return { ...x, selectedStatus: event.target.value };
    });
    setTiming(updatedSchedule);
  };

  const handleEditAddress = () => {
    setIsEditAble(true);
  };

  const TextContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    background: "#F2F2F2",
    padding: 15,
  });
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }} sx={{p : 2}}>
    
      <Grid item xs={12} md={6} sm={12} sx={{ width: { xs: "100%" } }}>
        <Box
          p={4}
          bgcolor="#ffffff"
          boxShadow={"0px 2px 12px rgba(0, 0, 0, 0.07)"}
        >
          {isEditAble ? (
            <Button
            size="small"
              onClick={() => setIsEditAble(false)}
              style={{
                background: "#FF3D5A",
                color: "white",
                cursor: "pointer",
                textAlign: "center",
                float: "right",
                marginTop: -32,
                marginRight: -32,
              }}
            >
              Save
            </Button>
          ) : (
            <Box
              onClick={handleEditAddress}
              display={'flex'}
              justifyContent={"center"}
              alignItems={'center'}
              style={{
                background: "#FF3D5A",
                borderRadius: 4,
                color: "white",
                cursor: "pointer",
                width: 29,
                height: 28,
                float: "right",
                marginTop: -32,
                marginRight: -32,
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
              style={{
                background: "#F2F2F2",
            
                border: "none",
              }}
              defaultValue={ReactHtmlParser(`Max Smirnov
            K ionslieu Farm
           
            Higher Foxdale
          
            Foxdale, Isle of Man IM4 3HB
          
            IM`)}
            ></TextField>
          ) : (
            <TextContainer style={{ background: "#F2F2F2", padding: 15 }}>
              {locationAddress}
            </TextContainer>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sm={12}>
        <Box
          p={4}
          bgcolor="#ffffff"
          boxShadow={"0px 2px 12px rgba(0, 0, 0, 0.07)"}
        >
          <div className={styles.editIcon}>
            <ModeEditIcon />
          </div>
          <Stack p={2} sx={{ fontWeight: "500", fontSize: 18 }}>
            Opening Hours
          </Stack>
          <TableContainer>
            <Table
              size="small"
              className={styles.timingTable}
              aria-label="simple table"
            >
              <TableHead
                sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              >
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
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
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
                          onChange={(event) =>
                            handleStatusChanged(event, index)
                          }
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
        </Box>
      </Grid>

  
    </Grid>
  );
};

export default Location;

{
  /* <div style={{background : '#F5F7FB'}} className="container-fluid">
      <div className="row p-3">
        <div className="col-sm-6">
          <div className={styles.locationAddressBox}>
            {isEditAble ? (
              <div
                onClick={() => setIsEditAble(false)}
                style={{
                  background: "#FF3D5A",
                  borderRadius: 4,
                  padding: 8,
                  color: "white",
                  cursor: "pointer",
                  textAlign: "center",
                  float: "right",
                  marginTop: -20,
                  marginRight: -20,
                }}
              >
                Save
              </div>
            ) : (
              <div
                onClick={handleEditAddress}
                className="d-flex justify-content-center align-items-center"
                style={{
                  background: "#FF3D5A",
                  borderRadius: 4,
                  color: "white",
                  cursor: "pointer",
                  width: 29,
                  height: 28,
                  float: "right",
                  marginTop: -20,
                  marginRight: -20,
                }}
              >
                <ModeEditIcon />
              </div>
            )}
            <div style={{ fontSize: 22, color: "#000000" }}>
              Location 1 <br /> Address
            </div>
            {isEditAble ? (
              <textarea
                onChange={(event) => setLocationAddress(event.target.value)}
                style={{
                  background: "#F2F2F2",
                  padding: 15,
                  width: "100%",
                  height: 180,
                  border: "none",
                }}
                defaultValue={ReactHtmlParser(`Max Smirnov
            K ionslieu Farm
           
            Higher Foxdale
          
            Foxdale, Isle of Man IM4 3HB
          
            IM`)}
              ></textarea>
            ) : (
              <div
                style={{ background: "#F2F2F2", padding: 15 }}
                className={"d-flex align-items-center"}
              >
                {locationAddress}
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-6 mt-2">
          <div className={styles.locationTimingBox}>
            <div className={styles.editIcon}>
              <ModeEditIcon />
            </div>
            <div className="p-3" style={{ fontWeight: "500", fontSize: 18 }}>
              Opening Hours
            </div>
            <TableContainer>
              <Table
                size="small"
                className={styles.timingTable}
                aria-label="simple table"
              >
                <TableHead
                  sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                >
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
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                            onChange={(event) =>
                              handleStatusChanged(event, index)
                            }
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
        </div>
      </div>
    </div> */
}
