import React, { useState } from "react";
import Friend from "../service/friend";
import Service from "../service";
import Total from "./total";
import BillInput from "./billInput";
import Reset from "../reset";

function Bill() {
    const [bill, setBill] = useState("");
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    const tip = bill * ((percentage1 + percentage2) / 2 / 100);

    function handleReset() {
        setBill("");
        setPercentage1(0);
        setPercentage2(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <Service percentage={percentage1} onSelect={setPercentage1}>
                How did you like the service
            </Service>
            <Service percentage={percentage2} onSelect={setPercentage2}>
                How did your friend like the service
            </Service>
            <Reset onReset={handleReset} />
            <Total bill={bill} tip={tip} />
        </div>
    );
}

export default Bill;
