import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
const FirstPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.freeTrial}>
        <b>Get 30 days Free</b>
        <p className={styles.cancel}>Cancel anytime</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link href={"/login"}>
          <Button className={styles.button}>
            save and continue &nbsp; <ArrowForwardIcon />
          </Button>
        </Link>
      </div>
    
    </div>
  );
};

export default FirstPage;
