import { useReducer} from "react";
import { uiReducer, type UiStatus} from "../state/uiState";


const initialState: UiStatus = {status: "idle"};


export const ShowExample = () => {
    const [state, dispatch] = useReducer(uiReducer, initialState);
    return (
        <>
            <div>{state.status === "idle" && (
                <p>
                    Paina <em>"Simulate Request"</em> Aloittaaksesi.
                    Tämä simuloi verkkopyyntöä: lataustila, saat sen jälkeen joko onnistumisen tai virheen.
                </p>
            )} 
                {state.status === "loading" && (
                    <p>
                        Loading...
                    </p>
                )}
            </div>

            <button onClick={() => dispatch({type: "submit"})}>Simulate request</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
           
        </>
    );
}