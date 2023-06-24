import { useEffect, useReducer } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

const initialState = {
  questions: [],
  status: "loading",
  // loading, error, ready, active, finished
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8001/questions")
      .then((res) => res.json)
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
}

export default App;
