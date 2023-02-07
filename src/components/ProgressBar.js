import React, { useEffect, useState } from "react";

export default function ProgressBar() {
    const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 80 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 50)
		}
	},[filled, isRunning])
  console.log(isRunning);
    return (
        <div>
        <div className="progressbar">
            <div style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "#a66cff",
                transition:"width 0.5s"
            }}></div>
            <span className="progressPercent">{ Math.floor(filled/10) }/10</span>
        </div>
        <button className="btn" onClick={() => {setIsRunning(true)}}>Run</button>
  </div>
    );
}
