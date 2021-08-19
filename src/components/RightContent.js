import React, { useState } from "react";
import "../App.css";
import { Typography, Grid, Box, Avatar } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GamesIcon from "@material-ui/icons/Games";
import { makeStyles } from "@material-ui/core/styles";
import Charts from "./Charts";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import DataUsageRoundedIcon from "@material-ui/icons/DataUsageRounded";
import AllInboxRoundedIcon from "@material-ui/icons/AllInboxRounded";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 500,
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
function RightContent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showData, setShowData] = useState(false);
  const [selectedbutton, setselectedbutton] = useState(-1);

  const handleselectedbutton = (buttonid) => {
    console.log(buttonid);
    setselectedbutton(buttonid);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const showHandler = () => {
    setShowData(true);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Box
            onClick={(e) => {
              showHandler();
              handleselectedbutton(0);
            }}
            style={{
              backgroundColor: selectedbutton === 0 ? "#f4faff" : "",
              border: selectedbutton === 0 ? "1px solid #0073fa" : "",
            }}
            className="RightContentBoxStyle"
          >
            <Grid container spacing={2}>
              <Grid item md={10}>
                <Typography className="cardHeader">
                  Autonomous Transaction
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  flexDirection="row"
                >
                  <Avatar
                    style={{ backgroundColor: "#E2F2FF" }}
                    className="roundedAvatar"
                  >
                    <StorageRoundedIcon className="IconStyle" />
                  </Avatar>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography variant="h6" className="headerText">
                  Create an ADW database
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Box className="subText">3-5 min</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            onClick={(e) => {
              showHandler();
              handleselectedbutton(1);
            }}
            style={{
              backgroundColor: selectedbutton === 1 ? "#f4faff" : "",
              border: selectedbutton === 1 ? "1px solid #0073fa" : "",
            }}
            className="RightContentBoxStyle"
          >
            <Grid container spacing={2}>
              <Grid item md={10}>
                <Typography className="cardHeader">
                  Autonomous Data Warehouse
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  flexDirection="row"
                >
                  <Avatar
                    style={{ backgroundColor: "#E2F2FF" }}
                    className="roundedAvatar"
                  >
                    <GamesIcon className="IconStyle" />
                  </Avatar>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography variant="h6" className="headerText">
                  Create an ADW database
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Box className="subText">3-5 min</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            onClick={(e) => {
              showHandler();
              handleselectedbutton(2);
            }}
            style={{
              backgroundColor: selectedbutton === 2 ? "#f4faff" : "",
              border: selectedbutton === 2 ? "1px solid #0073fa" : "",
            }}
            className="RightContentBoxStyle"
          >
            <Grid container spacing={2}>
              <Grid item md={10}>
                <Typography className="cardHeader"> Object Storage</Typography>
              </Grid>
              <Grid item md={2}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  flexDirection="row"
                >
                  <Avatar
                    style={{ backgroundColor: "#E2F2FF" }}
                    className="roundedAvatar"
                  >
                    <AllInboxRoundedIcon className="IconStyle" />
                  </Avatar>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography variant="h6" className="headerText">
                  Store Data
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Box className="subText">2-8 min</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            onClick={(e) => {
              showHandler();
              handleselectedbutton(3);
            }}
            style={{
              backgroundColor: selectedbutton === 3 ? "#f4faff" : "",
              border: selectedbutton === 3 ? "1px solid #0073fa" : "",
            }}
            className="RightContentBoxStyle"
          >
            <Grid container spacing={2}>
              <Grid item md={10}>
                <Typography className="cardHeader">
                  {" "}
                  Oracle Cloud Dev Kit
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  flexDirection="row"
                >
                  <Avatar
                    style={{ backgroundColor: "#E2F2FF" }}
                    className="roundedAvatar"
                  >
                    <DataUsageRoundedIcon className="IconStyle" />
                  </Avatar>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography variant="h6" className="headerText">
                  Set up an Instance
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Box className="subText">10-15 min</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            onClick={(e) => {
              showHandler();
              handleselectedbutton(4);
            }}
            style={{
              backgroundColor: selectedbutton === 4 ? "#f4faff" : "",
              border: selectedbutton === 4 ? "1px solid #0073fa" : "",
            }}
            className="RightContentBoxStyle"
          >
            <Grid container spacing={2}>
              <Grid item md={10}>
                <Typography className="cardHeader">
                  Oracle Cloud Dev Kit
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  flexDirection="row"
                >
                  <Avatar
                    style={{ backgroundColor: "#E2F2FF" }}
                    className="roundedAvatar"
                  >
                    <AssessmentRoundedIcon className="IconStyle" />
                  </Avatar>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography variant="h6" className="headerText">
                  Custom Image
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Box className="subText">6-10 min</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            onClick={(e) => {
              showHandler();
              handleselectedbutton(5);
            }}
            style={{
              backgroundColor: selectedbutton === 5 ? "#f4faff" : "",
              border: selectedbutton === 5 ? "1px solid #0073fa" : "",
            }}
            className="RightContentBoxStyle"
          >
            <Grid container spacing={2}>
              <Grid item md={10}>
                <Typography className="cardHeader">Search</Typography>
              </Grid>
              <Grid item md={2}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  flexDirection="row"
                >
                 <Avatar
                    style={{ backgroundColor: "#E2F2FF" }}
                    className="roundedAvatar"
                  >
                    <DnsRoundedIcon className="IconStyle" />
                  </Avatar>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography variant="h6" className="headerText">
                  View all my Resources
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Box className="subText">&nbsp;</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {showData && (
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item md={12}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                elevation={0}
                style={{ border: "1px solid #d4e2f5" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Expanded</Typography>
                </AccordionSummary>
                {/* <AccordionDetails style={{ justifyContent: "center" }}> */}
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item md={12}>
                      <Charts />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default RightContent;
