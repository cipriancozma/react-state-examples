import { useReducer } from "react";
import "./App.css";
import Footer from "./components/Footer";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";
import AppContext from "./AppContext";
import DispatchContext from "./DispatchContext";
import MemoizedExtraFooter from "./components/ExtraFooterTest";

function reducerFunction(state, action) {
    switch (action.type) {
        case "INCREMENT_LIKES":
            return {
              ...state,
              likeCount: state.likeCount + 1
            }
        case "CHANGE_SIZE":
          return {
            ...state,
            size: action.value
          }
        case "CHANGE_COLOR":
          return {
            ...state,
            color: action.value
          }
        case "CHANGE_COLOR_SIZE":
          return {
            ...state,
            color: action.value.color,
            size: action.value.size
          }
        default:
          return {
            ...state
          }
    }
}

const initialState = {
  size: 25,
  color: "green",
  likeCount: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>
        <div className="grid-parent">
          <div className="header">
            <h1>Welcome To Our App</h1>
            <p>
              The current size is {state.size} and the current color is {state.color}.
            </p>
            <p>
              This page has been liked <strong>{state.likeCount}</strong> times.
            </p>
          </div>
          <Sidebar />
          <MainArea />
          <Footer />
          <MemoizedExtraFooter />
        </div>
      </AppContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
