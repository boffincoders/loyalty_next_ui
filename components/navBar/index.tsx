import {
  AppBar,
  Collapse,
  ListItemButton,
  ListSubheader,
  Stack,
  styled,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { routes } from "../../utils/routes";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
const drawerWidth = 240;
interface Props {
  window?: () => Window;
}

const CustomToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ToolBarChild = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const IconAndTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const NavBar = (props: Props) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const router = useRouter();
  const isActive = (link) => {
    if (link === router.pathname) return "active-menu-class";
    else "";
  };
  const drawer = (
    <div
      style={{
        height: "100vh",
        width: drawerWidth,
        overflow :"hidden",
        overflowY : "scroll",
        margin: 10,
        borderRadius: 10,
        padding: 5,
        backgroundColor: "#808393",
      }}
    >
      <Toolbar />
      <Stack display="flex" justifyContent={"center"} alignItems={"center"}>
        <img height={40} width={40} src={"/assets/app_logo.svg"} />
        <h3>Loyal IOM</h3>
      </Stack>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {routes.map((item, index) => (
          <Box key={index}>
            {item.name === "Settings" ? (
              <ListItemButton onClick={() => setShowSubMenu(!showSubMenu)}>
                <ListItem button key={index}>
                  <ListItemIcon sx={{ color: "white" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                  {showSubMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              </ListItemButton>
            ) : (
              <ListItemButton>
                <ListItem
                  button
                  key={index}
                  className={isActive(item.link ?? "")}
                >
                  <ListItemIcon
                    sx={
                      item.link === router.pathname
                        ? { color: "black" }
                        : { color: "white" }
                    }
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Link href={item.link ?? ""}>
                    <ListItemText
                      sx={
                        item.link === router.pathname ? { color: "black" } : {}
                      }
                      primary={item.name}
                    />
                  </Link>
                </ListItem>
              </ListItemButton>
            )}
            <Collapse in={showSubMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item?.subPaths?.map((x, i) => (
                  <ListItemButton sx={{ pl: 3 }} key={i}>
                    <ListItem className={isActive(x.link ?? "")}>
                      <Link href={x.link ?? ""}>
                        <ListItemText
                          sx={
                            x.link === router.pathname ? { color: "black" } : {}
                          }
                          primary={x.name}
                        />
                      </Link>
                    </ListItem>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
      <Box
        mt={35}
        borderRadius={2}
        textAlign={"center"}
        p={4}
        fontSize={20}
        color="#4EADEA"
        sx={{
          backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.51) 100%)`,
          fontWeight: "700",
        }}
      >
        UPGRADE TO
        <br /> PREMIUM
      </Box>
    </div>
  );
  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#F5F7FB",
        }}
      >
        <div className={styles.appBar}>
          <CustomToolBar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <ToolBarChild>
              <IconAndTitle>
                <img
                  height={30}
                  width={30}
                  style={{ borderRadius: 30 }}
                  src={"/assets/Bitmap.png"}
                />
                &nbsp;
                <div className={styles.appbarTitle}>Coffee Elite Business</div>
              </IconAndTitle>
              <Box display={"flex"}>
                <LogoutIcon style={{ color: "#FF3D5A" }} />
                <span className={styles.logout}>Logout</span>
              </Box>
            </ToolBarChild>
          </CustomToolBar>
        </div>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          background: "#f1f3f7",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: false,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(355.57deg, #808393 10.44%, #747784 90.89%)",
              borderRadius: 6,
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              color: "white",
              background: "#F5F7FB",
              borderRight: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
};

export default NavBar;
