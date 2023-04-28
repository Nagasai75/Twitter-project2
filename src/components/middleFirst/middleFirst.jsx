import React from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function MiddleFirst() {
    const [value, setValue] = React.useState("one");
    function handleChange(event, newValue) {
      setValue(newValue);
    }
    function handleChange2(event, newValue) {
      setValue(newValue);
    }
  return (
    <div
      style={{
        border: "1px solid  rgb(192, 187, 187)",
        width: "539px",
        borderRadius: "8px",
      }}
    >
      <Box>
        <Tabs value={value} onChange={handleChange2}>
          <Tab value="one" label="Home" />
        </Tabs>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab
            value="one"
            label="For You"
            sx={{ marginRight: "20%", marginLeft: "20%", fontSize: "15px" }}
          />
          <Tab
            value="two"
            label="Following"
            sx={{ fontSize: "15px" }}
          />
        </Tabs>
      </Box>
    </div>
  );
}

export default MiddleFirst