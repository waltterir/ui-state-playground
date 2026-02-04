import { useReducer, useState } from "react";
import { uiReducer, type UiStatus } from "../state/uiState";

const initialState: UiStatus = { status: "idle" };

export const GoodModel = () => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  return (
    <>
      <div>
        <h1 id="badModel">
          <em>Good Model</em>
        </h1>
        {state.status === "idle" && (
          <p>
            Paina <em>"Simulate Request"</em> Aloittaaksesi. Tämä simuloi
            verkkopyyntöä: lataustila, saat sen jälkeen joko onnistumisen tai
            virheen.
          </p>
        )}
        {state.status === "loading" && <p>Loading...</p>}

        {state.status === "success" && <p>Request succeeded!</p>}

        {state.status === "error" && <p>Request failed. Please try again.</p>}
      </div>

      <button
        onClick={() => {
          dispatch({ type: "submit" });
          setTimeout(() => {
            dispatch({ type: "success", payload: 1000 });
          }, 1000);
        }}
      >
        Simulate request
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
