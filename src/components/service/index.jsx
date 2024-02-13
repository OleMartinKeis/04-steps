import React from "react";

function Service({ children, percentage, onSelect }) {
    return (
        <div>
            <label>{children}</label>
            <select
                value={percentage}
                onChange={(e) => onSelect(Number(e.target.value))}
            >
                <option value="0">Disatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

export default Service;
