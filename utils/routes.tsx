import DvrIcon from "@mui/icons-material/Dvr";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HexagonIcon from "@mui/icons-material/Hexagon";
export const routes = [
  {
    name: "Dashboard",
    icon: <DvrIcon />,
    link: "/dashboard",
    path: "../dashboard",
  },
  {
    name: "Location",
    icon: <LocationOnIcon />,
    link: "/dashboard/location",
    path: "../dashboard/location",
  },
  {
    name: "Profile",
    icon: <PersonIcon />,
    link: "/dashboard/profile",
    path: "../dashboard/profile",
  },
  {
    name: "Settings",
    icon: <HexagonIcon />,
    subPaths: [
      {
        name: "Account Details",
        link: "/dashboard/settings/accountDetails",
        path: "../dashboard/settings/accountDetails",
      },
      {
        name: "Billing",
        link: "/dashboard/settings/billing",
        path: "../dashboard/settings/billing",
      },
      {
        name: "Your Plan",
        link: "/dashboard/settings/plan",
        path: "../dashboard/settings/plan",
      },
    ],
  },
];
