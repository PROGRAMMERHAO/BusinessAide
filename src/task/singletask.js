import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ProgressBar from "./progressbar";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Task Description
        </Typography>
        <Typography variant="h5" component="div">
          Send Fax
        </Typography>
        <ProgressBar bgcolor={"#1976d2"} completed={60} />
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Subtask 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div>Task Description: </div>
                <div>workers allocated: </div>
                <div>progress: </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Subtask 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div>Task Description: </div>
                <div>workers allocated: Adam, Blake</div>
                <div>progress:</div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
