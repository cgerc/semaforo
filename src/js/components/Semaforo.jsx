
import React, { useState, useEffect } from "react";



const Semaforo = (props) => {

	const [color, setColor] = useState("red");


	useEffect(() => {
		const interval = setInterval(() => {
			setColor((prevColor) => {
				if (prevColor === 'red') return 'green';
				if (prevColor === 'green') return 'yellow';
				if (prevColor === 'yellow') return 'red';
				return 'red';
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (

		<div className="d-flex flex-column align-items-center mt-5">
			<h1>Semáforo</h1>

			
			<div className="bg-dark" style={{ width: "10px", height: "100px" }}></div>

		
			<div className="bg-dark p-3 rounded" style={{ width: "120px" }}>

				
				<div
					className={`rounded-circle mx-auto mb-2 ${color === "red" ? "bg-danger" : "bg-secondary"}`}
					style={{ width: "80px", height: "80px", cursor: "pointer" }}
					onClick={() => setColor("red")}
				></div>

			
				<div
					className={`rounded-circle mx-auto mb-2 ${color === "yellow" ? "bg-warning" : "bg-secondary"}`}
					style={{ width: "80px", height: "80px", cursor: "pointer" }}
					onClick={() => setColor("yellow")}
				></div>

			
				<div
					className={`rounded-circle mx-auto ${color === "green" ? "bg-success" : "bg-secondary"}`}
					style={{ width: "80px", height: "80px", cursor: "pointer" }}
					onClick={() => setColor("green")}
				></div>

			</div>


		</div>

	);
};



export default Semaforo;