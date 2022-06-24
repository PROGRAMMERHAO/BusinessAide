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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <Grid
      container
      rowSpacing={1}
      columns={12}
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}
    >
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Add New Task Here
            </Typography>

            <Typography variant="body2">
              <Button variant="contained">Add Task</Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Current Task
            </Typography>
            <Typography variant="h5" component="div">
              Send Fax
            </Typography>
            <Typography variant="body2">
              <ProgressBar bgcolor={"#6a1b9a"} completed={60} />
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to="/task/singletask"
              style={{ textDecoration: "none", color: "blue" }}
            >
              View Task
            </Link>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Current Task
            </Typography>
            <Typography variant="h5" component="div">
              Send Fax
            </Typography>
            <Typography variant="body2">
              <ProgressBar bgcolor={"#6a1b9a"} completed={60} />
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to="/task/singletask"
              style={{ textDecoration: "none", color: "blue" }}
            >
              View Task
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default function OutlinedCard() {
  const [firstName, setfirstName] = React.useState(null);
  const [lastName, setlastName] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setfirstName(data.firstName);
        setlastName(data.lastName);
      });
  }, []);
  return (
    <div>
      <h1>Task Page</h1>
      <Box sx={{ minWidth: 275 }}>{card}</Box>
    </div>
  );
}
