import "./styles.css";
import { useReducer, useState } from "react";
import { Button, TextField } from "@mui/material";
import BasicCard from "./components/basicCard";
import Helper from "../utils/helper";

/** Instructions
   0. Fork this codesandbox and sync it with your github 
   1. import users data from data.ts
   1.1. Utilize TypeScript in your implementation
   2. On load:
   2.1. Filter the users data array to only include users where age >= 18
   2.2. Map the users data array to only include username, address, age and companyName
   2.3. Add a new ID to each user object, which should consist of a randomized sequence (6 characters) of the following: {ABCDEF123456}
   2.4. Sort the array (asc) by age, then by companyName
   2.5. Dispatch the data to the local users state
   3. Display the users' properties using a loop in the tsx, preferably in a styled "Card" form
   3.1. Add a "remove" button to each card - this should remove the user from the state
   3.2. Store the removed users in a new state instance
   3.3. Using the second input, add a method to search for a user's username with the onChange event
   3.4. The removed users should also be found if the input is being used to search for a username
   3.5. In the case where a removed user is shown during a search, there should be a "restore" button, which would insert the removed user back into the users array
   4. Extend the reducer:
   4.1. Count must always be >= 0, in all cases
   4.2. Add a case to increment count with a random number, between 1 and 10
   4.3. Add a case to increment to the nearest odd number, if already odd - increment to next odd
   4.4. Add a case to decrease the count by the input of the first textfield
   4.5. Add a case to reset the count
   4.6. Add buttons to said cases
   4.7. Add styling using MUI
   5. Provide the link to your forked repo with your answers
   */

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementRandomly":
      return { count: Math.floor(Math.random() * 10) + state.count };
    case "decrementByInput":
      return { count: state.count - action.value };
    case "incrementToOdd":
      return {
        count: state.count % 2 == 0 ? state.count + 1 : state.count + 2,
      };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

export default function App() {
  const [numberInput, setNumberInput] = useState(0);
  const [countState, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="App">
      <BasicCard></BasicCard>
      <p style={{ marginBottom: 0 }}>Count: {countState.count}</p>
      <TextField
        defaultValue={numberInput}
        type="number"
        onChange={(e) => {
          setNumberInput(e.target.value);
        }}
        style={{ display: "block" }}
      />
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "incrementRandomly" })}
      >
        increment randomly
      </Button>
      <Button
        variant="contained"
        onClick={() =>
          dispatch({ type: "decrementByInput", value: numberInput })
        }
      >
        decrement input
      </Button>
      <Button variant="contained" onClick={() => dispatch({ type: "reset" })}>
        reset
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "incrementToOdd" })}
      >
        Increment by Odd
      </Button>
    </div>
  );
}
