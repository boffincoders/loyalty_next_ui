import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "../pages/dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <div>
      <div className="d-flex justify-content-end">
        {router.pathname === "/login" &&
          router.pathname === "/resetPassword" &&
          router.pathname === "/firstPage" &&
          router.pathname === "/registerAccount" &&
          router.pathname === "/contactInfo" &&
          router.pathname === "/finalSubmit" &&
          router.pathname === "/forgotPassword" && (
            <div
              style={{
                background: "white",
                textAlign: "center",
                padding: 10,
                color: "#FF3D5A",
                cursor: "pointer",
                borderRadius: 8,
              }}
            >
              <LogoutIcon />
              <span>LogOut</span>
            </div>
          )}
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {router.pathname === "/login" ||
      router.pathname === "/resetPassword" ||
      router.pathname === "/firstPage" ||
      router.pathname === "/registerAccount" ||
      router.pathname === "/contactInfo" ||
      router.pathname === "/finalSubmit" ||
      router.pathname === "/forgotPassword" ||
      router.pathname === "/loginTemp" ||
      router.pathname === "/dashboard" ? (
        <Component {...pageProps} />
      ) : (
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      )}
    </div>
  );
};

export default MyApp;
