import "./styles.css";

import React, { useState } from "react";
import Select from "react-select";
import PitchComponent from "./components/pitch";
import Formation from "./components/formation";
import Playerpool from "./components/playerpool";

const formations = [
  { value: "4-4-2", label: "4-4-2" },
  { value: "4-3-3", label: "4-3-3" },
  { value: "4-5-1", label: "4-5-1" },
  { value: "3-5-2", label: "3-5-2" },
  { value: "4-2-3-1", label: "4-2-3-1" }
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState({
    value: "4-4-2",
    label: "4-4-2"
  });
  var formation = selectedOption.value;

  return (
    <div className="App">
      <div className="formationSection">
        <div className="formationSelector">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={formations}
          />
        </div>
        <div>
          <div className="formationOverlay">
            <Formation formation={formation} />
          </div>
          <div className="pitchBackground">
            <PitchComponent />
          </div>
        </div>
      </div>
      <Playerpool />
    </div>
  );
}
