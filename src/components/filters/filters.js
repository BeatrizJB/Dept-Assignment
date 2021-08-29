import React from "react";
import "./filters.css";
import { worksFilter, industriesFilter } from "../../data/work-data";

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters__work">
        <label
          className="filters__work--label"
          id="workLabel"
        >
          Show me
        </label>
        <select
          className="filters__work--select"
          id="workFilter"
          name="workFilter"
        >
          {worksFilter.map((item) => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="filters__industries">
        <label
          className="filters__industries--label"
          id="industriesLabel"
        >
          in
        </label>
        <select
          className="filters__industries--select"
          id="industriesFilter"
          name="industriesFilter"
        >
          {industriesFilter.map((item) => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
