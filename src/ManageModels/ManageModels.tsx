import { GoodModel } from "../Models/GoodModel";
import { BadModel } from "../Models/BadModel";
import { useState } from "react";

export const ShowModels = () => {
  const [activeModel, setActiveModel] = useState("");
  return (
    <>
      <div className="PageWrap">
        <div className="modelSelector">
          <button onClick={() => setActiveModel("good")}>
            Show Good Model
          </button>
          <button onClick={() => setActiveModel("bad")}>Show Bad Model</button>
        </div>

        <div>
          {activeModel === "good" ? (
            <GoodModel />
          ) : activeModel === "bad" ? (
            <BadModel />
          ) : (
            <p className="hint">
              <em>Valitse malli yllä.</em>
            </p>
          )}
        </div>
      </div>
    </>
  );
};
