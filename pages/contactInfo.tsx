import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import { Divider, Grid } from "@mui/material";
import { tabComponents } from "../utils/tabPanelComponent";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, maxHeight: "40%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const MainTab = () => {
  const [value, setValue] = React.useState(0);
  const [isActive, setIsActive] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabs = [
    {
      label: "Contact Info",
      stepCount: "step One",
    },
    {
      label: "Choose Plan ",
      stepCount: "step Two",
    },
    {
      label: "Your Business",
      stepCount: "step Three",
    },
    {
      label: "Loyality Scheme",
      stepCount: "step Four",
    },
    {
      label: "Complete SetUp",
      stepCount: "step Five",
    },
  ];
  return (
    <Grid
      component={"div"}
       className={"mainGridContainer"}
      item
      container
      bgcolor={"#808393"}
      sx={{ padding: "8% 1% 15% 1%" }}
      height={"100vh"}
    >
   
      <Grid
        item
        xs={12} md={2} sm={12}
        sx={{
          alignItems: { xs: "center" },
          justifyContent: { xs: "center" },
        }}
      >
        <Tabs
          className="rightTabs"
          TabIndicatorProps={{ style: { display: "none" } }}
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            backgroundColor: "#F5F7FB",
            height: "100%",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            padding: { xs: 0 },
            margin: { xs: 0 },
            textAlign: { xs: "center" },
          }}
        >
          {tabs.map((x, index) => {
            return (
              <Tab
                key={index}
                sx={{ width: { xs: "100%" } }}
                onClick={() => setIsActive(index)}
                label={
                  <Box
                    style={{
                      backgroundColor: isActive === index ? "#FFFFFF" : "",
                      border: isActive === index ? "0.88px solid #E9E9EB" : "",
                      display: "flex",
                      padding: 10,
                      width: "100%",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 20,
                        textAlign: "center",
                        backgroundColor: "#FF3D5A",
                        color: "white",
                        border: "1px solid #E4E4E4",
                      }}
                    >
                      {index + 1}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <p
                        style={{
                          textTransform: "lowercase",
                          color: "black",
                          textAlign: "center",
                        }}
                      >
                        {x.stepCount.toLowerCase()}
                      </p>
                      <p
                        style={{
                          textTransform: "lowercase",
                          color: "#FF3D5A",
                        }}
                      >
                        {x.label.toLowerCase()}
                      </p>
                    </div>
                    {index === isActive ? (
                      <div
                        style={{
                          height: 20,
                          width: 20,
                          borderRadius: 20,
                          textAlign: "center",
                          backgroundColor: "#15B91F",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          border: "1px dashed #E4E4E4",
                        }}
                      >
                        <CheckIcon style={{ fontSize: 13 }} />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </Box>
                }
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Grid>
      <Grid
        item
        xs={12} md={6} sm={12}
        bgcolor="#F5F7FB"
        sx={{
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          width: { xs: "100%" },
        }}
        className="mobileContainer"
      >
        <Grid item sm={12} className="horizontalTabs">
          <Tabs
            TabIndicatorProps={{ style: { display: "none" } }}
            orientation="horizontal"
            value={value}
            onChange={handleChange}
           
          >
            {tabs.map((value, index) => {
              return (
                <Tab
                  key={index}
                  onClick={() => setIsActive(index)}
                  style={{paddingInline : '3.5em'}}
                  label={
                    <Box
                      style={{
                        backgroundColor:
                          index === isActive ? "white" : "#e5e5e5",
                        color: index === isActive ? "#FF3D5A" : "black",
                        textAlign: "center",
                        border: "1px solid #d9d9d9",
                        height: 50,
                        fontWeight: index === isActive ? "bold" : "",
                        width: 50,
                        padding: 15,
                        fontSize: 17,
                        borderRadius: 30,
                      }}
                    >
                      {index + 1}
                    </Box>
                  }
                  {...a11yProps(index)}
                ></Tab>
              );
            })}
          </Tabs>
          <Divider />
        </Grid>
        {tabComponents.map((tab, index) => (
          <TabPanel value={value} key={index} index={index}>
            {tab.component}
          </TabPanel>
        ))}
      </Grid>
     
    </Grid>
  );
};
export default MainTab;
