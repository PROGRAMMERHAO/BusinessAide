import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProgressBar from "./progressbar";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Link } from "react-router-dom";
import CreateTask from "./createtask";
import CreateSubtask from "./createsubtask";
import TaskDataService from "./taskserver";
import { useState } from "react";
import { useEffect } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function OutlinedCard() {
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState([]);
  useEffect(() => {
    const displayTask = async (employerName) => {
      let call = "/displayTask/?";
      call = call + "employerName=" + employerName;
      let result = await (await fetch(call)).json();
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        setTasks((tasks) => [...tasks, result[i]]);
      }
      console.log(tasks);
    };

    displayTask("adam jerry");
  }, []);
  useEffect(() => {
    const mainTaskProgress = async (mainTaskName, employerName) => {
      let call = "/mainTaskProgress/?";
      call = call + "mainTaskName=" + mainTaskName + "&";
      call = call + "employerName=" + employerName;
      let result = await (await fetch(call)).json();
      console.log(result);

      setProgress((progress) => [...progress, result]);
    };
    for (let i = 0; i < tasks.length; i++) {
      mainTaskProgress(tasks[i], "adam jerry");
      console.log(progress);
    }
  }, []);
  //useEffect(() => {
  //console.log(progress);
  //}, [progress]);

  return (
    <div>
      <h1>Task Page</h1>

      <Grid
        container
        rowSpacing={20}
        columns={12}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      >
        {tasks.map((doc) => {
          return (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 20 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Current Task
                  </Typography>
                  <Typography variant="h5" component="div">
                    {progress}
                  </Typography>
                  <Typography variant="body2">
                    <ProgressBar bgcolor={"#6a1b9a"} completed={60} />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    to="/task/singletask"
                    state={doc}
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    View Task
                  </Link>
                  <span style={{ color: "white" }}>hahahaha</span>
                  <CreateSubtask maintask={doc}></CreateSubtask>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
