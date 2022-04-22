import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../../components/navBar";
import DashboardLayout from "../../components/Dashboard";
import { useRouter } from "next/router";
const Dashboard = ({ children }) => {
  const router = useRouter();
  React.useEffect(() => {
    if (router.pathname === "/") {
      router.push("/dashboard");
    }
  }, []);
  return (
    <div style={{ background: "#F5F7FB", height: "100vh" }}>
      <Box sx={{ display: "flex", marginTop: 10, background: "#F5F7FB" }}>
        <NavBar />
        {router.pathname === "/dashboard" && <DashboardLayout />}
        {router.pathname === "/dashboard" ? null : children}
      </Box>
    </div>
  );
};
export default Dashboard;
