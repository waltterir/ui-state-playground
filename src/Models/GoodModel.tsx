import { useReducer } from "react";
import { uiReducer, type UiStatus } from "../state/uiState";
import { StateInspector } from "../state/StateInspector";

const initialState: UiStatus = { status: "idle" };

export const GoodModel = () => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  return (
    <>
      <StateInspector title={"Good Model"}>
        <div>
          {state.status === "idle" && (
            <p>
              Paina <em>"Simulate Request"</em> Aloittaaksesi. Tämä simuloi
              verkkopyyntöä: lataustila, saat sen jälkeen joko onnistumisen tai
              virheen.
            </p>
          )}
          {state.status === "loading" && <p>Loading...</p>}

          {state.status === "success" && <p>Request succeeded!</p>}

          {state.status === "error" && <p>{state.message}</p>}
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

        <button
          onClick={() => {
            dispatch({ type: "submit" });
            setTimeout(() => {
              dispatch({ type: "fail", error: "Request failed." });
            }, 1000);
          }}
        >
          Simulate error
        </button>

        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </StateInspector>
    </>
  );
};
