import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CheckIcon from "@mui/icons-material/Check";
import ReactHtmlParser from "react-html-parser";
import { Box, Button, Grid, TextField } from "@mui/material";
const Billing = () => {
  const [isEditAble, setIsEditAble] = useState(false);
  const [invoiceEditAble, setInvoiceEditAble] = useState(false);
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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }} sx={{p : 2}}>
      {/* <Box style={{ fontSize: 22, color: "#000000"  }} ml={20}>Billing</Box><br /> */}
      <Grid item xs={12} md={6} sm={12}  sx={{width : {xs : "100%"}}}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={"center"}
          style={{
            background: "#FF3D5A",
            borderRadius: 4,
            color: "white",
            padding : 3,
            position: "relative",
            top: 4,
            left: 1,
            float: "right",
          }}
        >
          <ModeEditIcon />
        </Box>
        <Box
          bgcolor="white"
          p={3}
          boxShadow={"0px 2px 12px rgba(0, 0, 0, 0.07)"}
        >
          <div style={{ fontSize: 22, color: "#000000" }}>Payment Method</div>
          <Box p={2}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <CreditCardIcon
                htmlColor="#808393"
                fontSize="large"
                style={{ height: 100, width: 100 }}
              />
            </Box>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              <div style={{ fontSize: 28, fontWeight: 500 }}>***</div>
              &nbsp;&nbsp;
              <div style={{ fontSize: 28, fontWeight: 500 }}>***</div>
              &nbsp;&nbsp;
              <div style={{ fontSize: 28, fontWeight: 500 }}>***</div>
              &nbsp;&nbsp;
              <div style={{ fontSize: 28, fontWeight: 500 }}>3434</div>
              &nbsp;&nbsp;
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sm={12} sx={{width : {xs : "100%"}}}>
        <div
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
            padding: 16,
          }}
        >
          {isEditAble ? (
            <Button
            size="small"
              onClick={() => setIsEditAble(false)}
              style={{
                background: "#FF3D5A",
                borderRadius: 4,
                padding: 8,
                color: "white",
                cursor: "pointer",
                textAlign: "center",
                float: "right",
                marginTop: -15,
                marginRight: -20,
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
                marginTop: -15,
                marginRight: -20,
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
              sx={{
                background: "#F2F2F2",
              }}
              defaultValue={ReactHtmlParser(`Max Smirnov
       K ionslieu Farm

       Higher Foxdale

       Foxdale, Isle of Man IM4 3HB

       IM`)}
            ></TextField>
          ) : (
            <div
              style={{ background: "#F2F2F2", padding: 15 }}
              className={"d-flex align-items-center"}
            >
              {locationAddress}
            </div>
          )}
        </div>
      </Grid>
      <Grid item xs={12} md={6} sm={12} sx={{width : {xs : "100%"}}}>
        <div
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
           
            padding: 35,
          }}
        >
          {invoiceEditAble ? (
            <Button
            size="small"
              onClick={() => setInvoiceEditAble(false)}
              style={{
                background: "#FF3D5A",
                borderRadius: 4,
                padding: 8,
                color: "white",
                cursor: "pointer",
                textAlign: "center",
                float: "right",
                marginTop: -31,
                marginRight: -35,
              }}
            >
              Save
            </Button>
          ) : (
            <div
              onClick={() => setInvoiceEditAble(true)}
              className="d-flex justify-content-center align-items-center"
              style={{
                background: "#FF3D5A",
                borderRadius: 4,
                color: "white",
                cursor: "pointer",
                width: 29,
                height: 28,
                float: "right",
                marginTop: -31,
                marginRight: -35,
              }}
            >
              <ModeEditIcon />
            </div>
          )}
          <div style={{ fontSize: 22, color: "#000000" }}>Invoice Address</div>
          {invoiceEditAble ? (
           <TextField
           onChange={(event) => setLocationAddress(event.target.value)}
           fullWidth
           multiline
           rows={4}
           sx={{
             background: "#F2F2F2",
           }}
           defaultValue={ReactHtmlParser(`Max Smirnov
    K ionslieu Farm

    Higher Foxdale

    Foxdale, Isle of Man IM4 3HB

    IM`)}
         ></TextField>
          ) : (
            <div
              style={{ background: "#F2F2F2", padding: 15 }}
              className={"d-flex align-items-center"}
            >
              {locationAddress}
            </div>
          )}
        </div>
      </Grid>
      <Grid item xs={12} md={6} sm={12}  sx={{width : {xs : "100%"}}}>
        <div
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
            padding: 19,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: "500" }}>Invoices</div>
          <div className="m-2" style={{ border: "1px solid #BBBBBB" }}></div>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            m={3}
          >
            <Box display={"flex"}>
              <div
                style={{
                  width: 28,
                  background: "#15B91F",
                  borderRadius: 20,
                  textAlign: "center",
                  color: "white",
                  height: 28,
                }}
              >
                <CheckIcon />
              </div>
              &nbsp;
              <div
                style={{ color: "#15B91F", fontSize: 20, fontWeight: "500" }}
              >
                PAID
              </div>
            </Box>
            <div>August 1, 2021</div>
            <div>$14:95</div>
          </Box>
          <Box
            style={{ background: "#F9FAFC" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            m={3}
          >
            <Box display={"flex"}>
              <div
                style={{
                  width: 28,
                  background: "#15B91F",
                  borderRadius: 20,
                  textAlign: "center",
                  color: "white",
                  height: 28,
                }}
              >
                <CheckIcon />
              </div>
              &nbsp;
              <div
                style={{ color: "#15B91F", fontSize: 20, fontWeight: "500" }}
              >
                PAID
              </div>
            </Box>
            <div>August 1, 2021</div>
            <div>$14:95</div>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            m={3}
          >
            <Box display={"flex"}>
              <div
                style={{
                  width: 28,
                  background: "#15B91F",
                  borderRadius: 20,
                  textAlign: "center",
                  color: "white",
                  height: 28,
                }}
              >
                <CheckIcon />
              </div>
              &nbsp;
              <div
                style={{ color: "#15B91F", fontSize: 20, fontWeight: "500" }}
              >
                PAID
              </div>
            </Box>
            <div>August 1, 2021</div>
            <div>$14:95</div>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};
//{/* <div style={{ marginLeft: 20 }} className="container-fluid">
// <div style={{ fontSize: 22, color: "#000000" }}>Billing</div>
// <div className="row">
//   <div className="col-sm-4">
//     <div
//       className="d-flex justify-content-center align-items-center"
//       style={{
//         background: "#FF3D5A",
//         borderRadius: 4,
//         color: "white",
//         width: 29,
//         height: 28,
//         position: "relative",
//         top: -1,
//         left: 1,
//         float: "right",
//       }}
//      >
//       <ModeEditIcon />
//      </div>
//       <div
//       style={{
//         background: "white",
//         boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
//         padding: 25,
//       }}
//      >
//       <div style={{ fontSize: 22, color: "#000000" }}>Payment Method</div>
//       <div className="p-3">
//         <div className="d-flex justify-content-between align-items-center flex-column">
//           <CreditCardIcon
//             htmlColor="#808393"
//             fontSize="large"
//             style={{ height: 100, width: 100 }}
//           />
//         </div>
//         <div className="d-flex justify-content-center align-items-center ">
//           <div style={{ fontSize: 28, fontWeight: 500 }}>***</div>
//           &nbsp;&nbsp;
//           <div style={{ fontSize: 28, fontWeight: 500 }}>***</div>
//           &nbsp;&nbsp;
//           <div style={{ fontSize: 28, fontWeight: 500 }}>***</div>
//           &nbsp;&nbsp;
//           <div style={{ fontSize: 28, fontWeight: 500 }}>3434</div>
//           &nbsp;&nbsp;
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-4">
//     <div
//       style={{
//         background: "#FFFFFF",
//         boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
//
//         padding: 20,
//       }}
//     >
//       {isEditAble ? (
//         <Button
//           onClick={() => setIsEditAble(false)}
//           style={{
//             background: "#FF3D5A",
//             borderRadius: 4,
//             padding: 8,
//             color: "white",
//             cursor: "pointer",
//             textAlign: "center",
//             float: "right",
//             marginTop: -21,
//             marginRight: -20,
//           }}
//         >
//           Save
//         </Button>
//       ) : (
//         <div
//           onClick={() => setIsEditAble(true)}
//           className="d-flex justify-content-center align-items-center"
//           style={{
//             background: "#FF3D5A",
//             borderRadius: 4,
//             color: "white",
//             cursor: "pointer",
//             width: 29,
//             height: 28,
//             float: "right",
//             marginTop: -21,
//             marginRight: -20,
//           }}
//         >
//           <ModeEditIcon />
//         </div>
//       )}
//       <div style={{ fontSize: 22, color: "#000000" }}>
//         Location 1 <br /> Address
//       </div>
//       {isEditAble ? (
//
//         <textarea
//           onChange={(event) => setLocationAddress(event.target.value)}
//           style={{
//             background: "#F2F2F2",
//             padding: 15,
//             width: "100%",
//             border : "none",
//             height: 180,
//           }}
//           defaultValue={ReactHtmlParser(`Max Smirnov
//       K ionslieu Farm

//       Higher Foxdale

//       Foxdale, Isle of Man IM4 3HB

//       IM`)}
//         ></textarea>
//       ) : (
//
//         <div
//           style={{ background: "#F2F2F2", padding: 15 }}
//           className={"d-flex align-items-center"}
//         >
//           {locationAddress}
//         </div>
//       )}
//     </div>
//   </div>
//   <div className="col-sm-4">
//     <div
//       style={{
//         background: "#FFFFFF",
//         boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
//         // marginLeft : 28,
//         padding: 35,
//       }}
//     >
//       {invoiceEditAble ? (
//         <Button
//           onClick={() => setInvoiceEditAble(false)}
//           style={{
//             background: "#FF3D5A",
//             borderRadius: 4,
//             padding: 8,
//             color: "white",
//             cursor: "pointer",
//             textAlign: "center",
//             float: "right",
//             marginTop: -35,
//             marginRight: -35,
//           }}
//         >
//           Save
//         </Button>
//       ) : (
//         <div
//           onClick={() => setInvoiceEditAble(true)}
//           className="d-flex justify-content-center align-items-center"
//           style={{
//             background: "#FF3D5A",
//             borderRadius: 4,
//             color: "white",
//             cursor: "pointer",
//             width: 29,
//             height: 28,
//             float: "right",
//             marginTop: -35,
//             marginRight: -35,
//           }}
//         >
//           <ModeEditIcon />
//         </div>
//       )}
//       <div style={{ fontSize: 22, color: "#000000" }}>
//         Invoice Address
//       </div>
//       {invoiceEditAble ? (
//
//         <textarea
//           onChange={(event) => setLocationAddress(event.target.value)}
//           style={{
//             background: "#F2F2F2",
//             padding: 15,
//             width: "100%",
//             height: 180,
//             border : "none"
//           }}
//           defaultValue={ReactHtmlParser(`Max Smirnov
//       K ionslieu Farm

//       Higher Foxdale

//       Foxdale, Isle of Man IM4 3HB

//       IM`)}
//         ></textarea>
//       ) : (
//
//         <div
//           style={{ background: "#F2F2F2", padding: 15 }}
//           className={"d-flex align-items-center"}
//         >
//           {locationAddress}
//         </div>
//       )}
//     </div>
//   </div>
//   <div className="col-sm-12 mt-3">
//     <div
//       style={{
//         background: "#FFFFFF",
//         boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.07)",
//         padding: 28,
//       }}
//     >
//       <div style={{ fontSize: 22, fontWeight: "500" }}>Invoices</div>
//       <div className="m-2" style={{ border: "1px solid #BBBBBB" }}></div>

//       <div className="d-flex justify-content-between align-items-center m-3">
//         <div className="d-flex">
//           <div
//             style={{
//               width: 28,
//               background: "#15B91F",
//               borderRadius: 20,
//               textAlign: "center",
//               color: "white",
//               height: 28,
//             }}
//           >
//             <CheckIcon />
//           </div>
//           &nbsp;
//           <div
//             style={{ color: "#15B91F", fontSize: 20, fontWeight: "500" }}
//           >
//             PAID
//           </div>
//         </div>
//         <div>August 1, 2021</div>
//         <div>$14:95</div>
//       </div>

//       <div
//         style={{ background: "#F9FAFC" }}
//         className="d-flex justify-content-between align-items-center m-3"
//       >
//         <div className="d-flex">
//           <div
//             style={{
//               width: 28,
//               background: "#15B91F",
//               borderRadius: 20,
//               textAlign: "center",
//               color: "white",
//               height: 28,
//             }}
//           >
//             <CheckIcon />
//           </div>
//           &nbsp;
//           <div
//             style={{ color: "#15B91F", fontSize: 20, fontWeight: "500" }}
//           >
//             PAID
//           </div>
//         </div>
//         <div>August 1, 2021</div>
//         <div>$14:95</div>
//       </div>
//       <div className="d-flex justify-content-between align-items-center m-3">
//         <div className="d-flex">
//           <div
//             style={{
//               width: 28,
//               background: "#15B91F",
//               borderRadius: 20,
//               textAlign: "center",
//               color: "white",
//               height: 28,
//             }}
//           >
//             <CheckIcon />
//           </div>
//           &nbsp;
//           <div
//             style={{ color: "#15B91F", fontSize: 20, fontWeight: "500" }}
//           >
//             PAID
//           </div>
//         </div>
//         <div>August 1, 2021</div>
//         <div>$14:95</div>

//         {/* </div> */}
//       </div>
//     </div>
//   </div>
// </div>
// </div> */}

export default Billing;
