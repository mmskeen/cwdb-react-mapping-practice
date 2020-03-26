import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function App() {
  const entries = emojipedia.map(e => (
    <Entry key={e.id} name={e.name} emoji={e.emoji} meaning={e.meaning} />
  ));
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{entries}</dl>
    </div>
  );
}

export default App;
