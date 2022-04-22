import dynamic from "next/dynamic";
import styles from "../../styles/Dashboard.module.css";
import React from "react";
import { Grid, Box, Stack, styled } from "@mui/material";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const GraphHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const TextContainer = styled("div")({
  color: "#000000",
  fontSize: 24,
  textAlign: "center",
});
const DashboardLayout = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "basic-bar",
    },

    colors: ["#FF3D5A", "#FF7B8F"],

    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],

      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#FF3D5A",
            colorTo: "#FF7B8F",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
    },

    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  const pieChartOptions = {
    series: [50, 17],
    colors: ["#FF3D5A", "#FF7B8F"],

    options: {
      chart: {
        type: "pie",
      },
      labels: ["Task A", "Task B", "Task C"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  };
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{p : 2}}>
      
      <Grid item   xs={12} md={6} sm={12} sx={{width : {xs : "100%" ,m : 2}}}>
        <div className={styles.totalCustomers}>
          <TextContainer sx={{ fontSize: { sm: 20, xs: 15 } }}>
            5600
          </TextContainer>
          <TextContainer sx={{ fontSize: { sm: 20, xs: 15 } }}>
            Total Customers
          </TextContainer>
        </div>
      </Grid>

      <Grid item xs={12}  md={6} sm={12}  sx={{width : {xs : "100%" ,m : 2}}}>
        <div className={styles.totalCustomers}>
          <TextContainer sx={{ fontSize: { sm: 20, xs: 15 } }}>
            5600
          </TextContainer>
          <TextContainer sx={{ fontSize: { sm: 20, xs: 15 } }}>
            Total Stamps Collected
          </TextContainer>
        </div>
      </Grid>
      <Grid item xs={12}  md={12} sm={12} sx={{width : {xs : "100%" ,m : 2}}}>
        <div className={styles.totalCustomers}>
          <TextContainer sx={{ fontSize: { sm: 20, xs: 15 } }}>
            12,100
          </TextContainer>
          <TextContainer sx={{ fontSize: { sm: 20, xs: 15 } }}>
            Completed Loyalty Cards
          </TextContainer>
        </div>
      </Grid>
      <Grid item  xs={12} md={6} sm={12}  sx={{width : {xs : "100%" ,m : 2}}}>
        <div className={styles.totalCustomers}>
        <Stack style={{ color: "#0000000", fontSize: 20, fontWeight: 500 }}>
         Stamp Collected
          </Stack>
          <Grid item sm={12}>
            <GraphHeader
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.06)",
                flexDirection: { sm: "row", xs: "column" },
              }}
            >
              <b>View By</b>
              <Stack
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                direction="row"
              >
                <Stack
                  m={1}
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: 10,
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                >
                  Day
                </Stack>
                <Stack
                  m={1}
                  style={{
                    border: "1px solid #FF3D5A",
                    padding: 10,
                    color: "#FF3D5A",
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                >
                  Week
                </Stack>
                <Stack
                  m={1}
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: 10,
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                >
                  Month
                </Stack>
              </Stack>
            </GraphHeader>
          </Grid>
          <Grid item sm={12}>
            <Chart
              options={options}
              series={options?.series}
              type="bar"
              width="100%"
            />
          </Grid>
        </div>
      </Grid>
      <Grid item  xs={12} md={6} sm={12}  sx={{width : {xs : "100%" ,m : 2}}}>
        <div className={styles.totalCustomers}>
          <Stack style={{ color: "#0000000", fontSize: 20, fontWeight: 500 }}>
            Rewards Redeemed
          </Stack>
          <Grid item sm={12}>
            <GraphHeader
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.06)",
                flexDirection: { sm: "row", xs: "column" },
              }}
            >
              <b className="p-2">View By</b>
              <Stack
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                direction="row"
              >
                <Stack
                  m={1}
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: 10,
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                >
                  Day
                </Stack>
                <Stack
                  m={1}
                  style={{
                    border: "1px solid #FF3D5A",
                    padding: 10,
                    color: "#FF3D5A",
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                >
                  Week
                </Stack>
                <Stack
                  m={1}
                  style={{
                    border: "1px solid #D0D0D0",
                    padding: 10,
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                >
                  Month
                </Stack>
              </Stack>
            </GraphHeader>
          </Grid>
          <Grid item sm={12}>
            <Chart
              options={options}
              series={options?.series}
              type="bar"
              width="100%"
            />
          </Grid>
        </div>
      </Grid>
      <Grid item  xs={12} md={4} sm={12}  sx={{width : {xs : "100%" ,m : 2}}}>
        <Box sx={{ background: "#FFFFFF" }} p={3} m={2}>
          <Chart
            options={pieChartOptions}
            series={pieChartOptions?.series}
            type="pie"
          />

          <b className="text-center">Age Split</b>
        </Box>
      </Grid>
      <Grid item  xs={12} md={4} sm={12}  sx={{width : {xs : "100%" ,m : 2}}}>
        <Box sx={{ background: "#FFFFFF" }} p={3} m={2}>
          <Chart
            options={pieChartOptions}
            series={pieChartOptions?.series}
            type="pie"
          />

          <b className="text-center">Gender Split</b>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sm={12}  sx={{width : {xs : "100%" ,m : 2}}}>
        <Box sx={{ background: "#FFFFFF" }} p={3} m={2}>
          <Chart
            options={pieChartOptions}
            series={pieChartOptions?.series}
            type="pie"
          />

          <b className="text-center">Daily Cards Scan</b>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;

