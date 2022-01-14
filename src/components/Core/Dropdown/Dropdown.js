import React, { useState } from 'react'
import "./Dropdown.css"

const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(props.placeholder);
  const handleSelection = function (data) {
    props.handleFilter({ "name": props.type, "value": data.name, "id": data.id })
    if (data.name) {
      setSelected(data.name);
    }
    setIsActive(false);
  };
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <div className="selector main" style={{ width: props.width }} data-testid={props.label} onClick={() => setIsActive(!isActive)}>
        {selected}
      </div>
      {isActive && (
        <div className="backdrop" onClick={(e) => handleSelection(e.target.dataset)}>
          {props.data.map((item) => {
            return (
              <div className="selector" style={{ width: props.width }} key={item.id} data-name={item.name} data-id={item.id}>
                {item.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};


export default Dropdown
