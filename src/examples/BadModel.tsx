import { useState } from "react";

export const BadModel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <div>
        <h1>
          <em>Bad Model</em>
        </h1>
        <p>
          Paina <em>Start</em> ja katso loadingia. Paina <em>Fail</em> – huomaa,
          että loading jää päälle, vaikka pyyntö epäonnistui.
        </p>
        {loading && <p>Loading...</p>}
        {error && <p>Request failed. Please try again.</p>}
      </div>

      <button onClick={() => setLoading(true)}>Start</button>
      <button onClick={() => setError(true)}>Fail</button>
      <button
        onClick={() => {
          setLoading(false);
          setError(false);
        }}
      >
        Reset
      </button>
    </>
  );
};
