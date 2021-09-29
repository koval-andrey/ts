import React from "react";
import "./Filter.css";

interface Props {
    value: string;
    onChange: (filter: string)=> void;
};

const Filter = ({ value, onChange }: Props) => (
    <div className="Filter">
        <p className="Filter_label"> Filter by content</p>
        <input className="Filter_input"
            type="text"
            value={value}
            onChange={evt => onChange(evt.target.value)}/>
    </div>
);

export default Filter;