// Module of functions to handle all task functions by the employer
var admin = require("firebase-admin");
const db = admin.firestore();

// Function to create the task and send it to the database
// employerName should be in the format: 'firstname lastname'
createMainTask = (mainTaskName, mainTaskDesc, employerName, workerArray) => {
    let taskData = {
        description: mainTaskDesc,
        workers: workerArray,
        status: 'in progress'
    }

    // send main task to employers > employerName > tasks
    db.collection('employers').doc(employerName).collection('tasks').doc(mainTaskName).set(taskData);
}

createSubTask = (subTaskName, subTaskDesc, goal, mainTaskName, employerName, workerArray) => {
    let taskData = {
        description: subTaskDesc,
        workers: workerArray,
        goal: goal,
        progress: 0,
        status: 'in progress'
    }
    db.collection('employers').doc(employerName).collection('tasks').doc(mainTaskName).collection('subtasks').doc(subTaskName).set(taskData);
}

mainTaskProgress = async (mainTaskName, employerName) => {
    // find progress/per goal of all subtasks and then find the %
    // jiayou
    var subTaskProgress = 0;
    var subTaskCounter = 0;
    const snapshot = await db.collection('employers').doc(employerName).collection('tasks').doc(mainTaskName).collection('subtasks').get();
    snapshot.forEach(doc => {
        if (doc.data().status == 'finished') {
            subTaskProgress += 1;
            subTaskCounter += 1;
        } else {
            subTaskProgress = doc.data().progress / doc.data().goal;
            subTaskCounter += 1;
        };
    });

    let mainTaskProgress = subTaskProgress / subTaskCounter;
    return mainTaskProgress;
}

completeMainTask = async (mainTaskName, employerName) => {
    mainTaskRef = db.collection('employers').doc(employerName).collection('tasks').doc(mainTaskName); 
    // complete all of the subtasks of the main task
    const snapshot = await mainTaskRef.collection('subtasks').get();

    snapshot.forEach(doc => {
        doc.update({
            status: 'finished',
        });
    });

    // complete the main task
    mainTaskRef.update({
        status: 'finished',
    })
    
}
completeSubTask = async (subTaskName, mainTaskName, employerName) => {
    subTaskRef = db.collection('employers').doc(employerName).collection('tasks').doc(mainTaskName).collections('subtasks').doc(subTaskName);
    const snapshot = await subTaskRef.get();
    
    let goalValue = 0;
    snapshot.forEach(doc => {
        goalValue = doc.data().goal;
    });

    subTaskRef.update({
        progress: goalValue,
        status: 'finished'
    });
}

// Function to increase the progress of a subtask
// If new value >= goal, instantly complete the subtask
progressSubTask = (subTaskName, value, mainTaskName, employerName) => {
    subTaskRef = db.collection('employers').doc(employerName).collection('tasks').doc(mainTaskName).collections('subtasks').doc(subTaskName);
// finsih this blyat
    let subTaskProgress = 0;
    let subTaskGoal = 0;
    snapshot.forEach(doc => {
        subTaskProgress = doc.data().progress;
        subTaskGoal = doc.data().goal;
    });

    if ((subTaskProgress + value) >= subTaskGoal) {
        subTaskRef.update({
            progress: goalValue,
            status: 'finished'
        });    
    } else {
        subTaskRef.update({
            progress: FieldValue.increment(value)
        });
    }
}

module.exports = {createMainTask, createSubTask, completeMainTask, completeSubTask, mainTaskProgress, progressSubTask};