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
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getDisplayName } from "@mui/utils";

const auth = getAuth();
const user = auth.currentUser;

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BasicCard(props) {
  const [subtasks, setSubTasks] = useState([]);
  const [description, setDescription] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [goal, setGoal] = useState([]);
  const [progress, setProgress] = useState([]);
  const [status, setStatus] = useState([]);
  const [maindescription, setMainDescription] = useState([]);
  const location = useLocation();
  const maintask = location.state;
  const auth = getAuth();
  const user = auth.currentUser;
  const name = user.fullname;
  console.log(user);
  useEffect(() => {
    const viewMainTask = async (mainTaskName, employerName) => {
      let call = "/getMainTaskData/?";
      call = call + "mainTaskName=" + mainTaskName + "&";
      call = call + "employerName=" + employerName;
      let result = await (await fetch(call)).json();
      console.log(result);
      setMainDescription(result.description);
      for (let i = 0; i < result.subtasks.length; i++) {
        setSubTasks(result.subtasks);
      }
      console.log(subtasks);
    };

    viewMainTask(maintask, "adam jerry");
  }, []);

  useEffect(() => {
    console.log(goal);
  }, [goal]);

  useEffect(() => {
    const viewSubTask = async (subTaskName, mainTaskName, employerName) => {
      let call = "/getSubTaskData/?";
      call = call + "subTaskName=" + subTaskName + "&";
      call = call + "mainTaskName=" + mainTaskName + "&";
      call = call + "employerName=" + employerName;
      let result = await (await fetch(call)).json();
      console.log(result);
      //setSubTasks((subtasks) => [...subtasks, result.subTaskName]);
      setDescription((description) => [...description, result.description]);
      setWorkers((workers) => [...workers, result.workers]);
      setGoal((goal) => [...goal, result.goal]);
      setProgress((progress) => [...progress, result.progress]);
      setStatus((status) => [...status, result.status]);
    };
    for (let i = 0; i < subtasks.length; i++) {
      viewSubTask(subtasks[i], maintask, "adam jerry");
    }
  }, [maintask, subtasks]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Task Name
        </Typography>
        <Typography variant="h5" component="div">
          {maintask}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Task Description
        </Typography>
        <Typography variant="h5" component="div">
          {maindescription}
        </Typography>
        <ProgressBar bgcolor={"#1976d2"} completed={60} />
        <div>
          {subtasks.map((task, index) => {
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{task}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div>Task Description: {description[index]}</div>
                    <div>workers allocated: {workers[index]}</div>
                    <div>goal: {goal[index]}</div>
                    <div>
                      {"progress"}
                      <ProgressBar
                        bgcolor={"#6a1b9a"}
                        completed={(progress[index] / goal[index]) * 100}
                      />
                    </div>
                    <div>status: {status[index]}</div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
