import React, { useState } from "react";

function SaveNewWorkout({ exerciseList, user, exercises, alert }) {
    const [workouts, setWorkouts] = useState([])
    const [saved, setSaved] = useState(false);
    let success = "Your workout was saved!"
    let noName="You didn't enter a name"
    let workoutArr = [];

   exerciseList.map(ex => {
     exercises.filter(exercise => {
         if (exercise.name === ex.key) {
             workoutArr.push(exercise)
         }
 })
})
    function handleSave(e) {
       let workoutName = e.target.parentElement.firstChild.nextSibling.value;
       if (workoutName === "") {
           setSaved(false)
           alert.error(noName)
       }
       else {
       let workout = {
        "title": workoutName,
        "workout": workoutArr, 
       }
        fetch (`http://localhost:3000/users/${user.id}`, {
                        method: "PATCH",
                        headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      "workouts": [...user.workouts, workout]
                    }),
                })
                .then((r) => r.json())
                .then((workout) => setWorkouts([...workouts, workout]))
                setSaved(true);
                alert.success(success)
            }
    }
    return (
        <div>
                When your workout is complete, save it here:  
                <input type="text" id="workoutname" placeholder="Workout Name">
                </input>
                <button onClick={handleSave}>Submit </button>   
                {/* {saved === true ? <Dashboard theText={success} /> : null}  */}
        </div>
    )
}
export default SaveNewWorkout;