import { Button, Grid } from "@mui/material";

import React, { useState } from "react";
import Search from "./Search";

function UrlGenerator() {
  const [darkMode, setDarkMode] = useState(false);
  // console.log(darkMode);

  return (
    // Main grid
    <Grid
      className={darkMode ? "dark" : ""}
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      {/* Card Grid */}
      <Grid
        item
        xs={10}
        sm={7}
        md={4}
        className={darkMode ? "main-grid-dark" : "main-grid"}
        style={{ minHeight: "45vh" }}
      >
        <Grid container>
          {/* Darkmode btn */}
          <Grid item xs={12} container justifyContent="flex-end">
            <Button
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? "LIGHT MODE" : "DARK MODE"}
            </Button>
          </Grid>

          {/* Form */}
          <Grid item xs={8} className="m-auto mt-5" style={{ width: "50%" }}>
            <h5 className="text-start">URL Shortener</h5>
            <Search darkmode={darkMode} />
          </Grid>

          {/* Credit */}
          <Grid
            item
            xs={12}
            className={darkMode ? "m-auto Credits-dark" : "m-auto Credits"}
          >
            <span>
              &copy;Designed by Lev.k <br />
            </span>
          </Grid>
          {/* */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UrlGenerator;
