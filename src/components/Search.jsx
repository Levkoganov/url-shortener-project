import React, { useState } from "react";
import { TextField, Button, LinearProgress } from "@mui/material";

import baseUrl from "../config/baseUrl";
import validURL from "../config/urlValidation";
import DisplayLink from "./DisplayLink";

function Search({ darkmode }) {
  const [link, setLink] = useState(""); // Input value
  const [linkUrl, setLinkUrl] = useState(""); // Short Url
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // Error handler

  // Validate URL (REGEX)
  const checkLink = () => {
    return validURL(link);
  };

  // Input value
  const handleChange = (e) => {
    const { value } = e.target;
    setLink(value);
  };

  // Api-call
  const getLink = async (data) => {
    try {
      const shortLink = await baseUrl.get(`shorten?url=${data}`);
      const newLink = shortLink.data.result.short_link;

      setLinkUrl(newLink); //short-url
      setIsLoading(false);
    } catch (err) {
      console.log(`err:${err}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLinkUrl(""); // RESET LINK

    if (checkLink()) {
      setError(""); // RESET ERROR
      getLink(link);
      setIsLoading(!isLoading);
    } else {
      setError(""); // RESET ERROR

      // SET ERROR AFTER 1SEC
      setTimeout(() => {
        setIsLoading(false);
        setError("Invalid Link"); // SET ERROR MSG
      }, 1000);
    }
  };

  return (
    <div>
      <form className="SearchForm" onSubmit={handleSubmit}>
        {darkmode ? (
          <TextField
            className={darkmode ? "dark-label" : ""}
            style={{ marginBottom: "20px" }}
            label="Website Address"
            variant="outlined"
            focused
            value={link}
            onChange={handleChange}
          />
        ) : (
          <TextField
            className={darkmode ? "dark-label" : ""}
            style={{ marginBottom: "20px" }}
            label="Website Address"
            variant="outlined"
            value={link}
            onChange={handleChange}
          />
        )}
        {!isLoading && (
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: "20px" }}
            onClick={handleSubmit}
            className="btn-size"
          >
            Submit
          </Button>
        )}
        {isLoading && <LinearProgress />}
      </form>
      <div>
        {linkUrl && <DisplayLink shortend={linkUrl} />}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

export default Search;
