
import React, { useState } from "react";


//create your first component
const Home = (props) => {
	
	const [ color, setColor ] = useState("red");
	const [light , setLight]= useState (true)


	return (
	
		<div className="d-flex flex-column align-items-center mt-5">
			<h1>Semáforo</h1>
			
			{/* Poste del semáforo */}
			<div className="bg-dark" style={{width: "10px", height: "100px"}}></div>
			
			{/* Caja del semáforo */}
			<div className="bg-dark p-3 rounded" style={{width: "120px"}}>
				
				{/* Luz roja */}
				<div 
					className={`rounded-circle mx-auto mb-2 ${color === "red" ? "bg-danger" : "bg-secondary"}`}
					style={{width: "80px", height: "80px", cursor: "pointer"}}
					onClick={() => setColor("red")}
				></div>
				
				{/* Luz amarilla */}
				<div 
					className={`rounded-circle mx-auto mb-2 ${color === "yellow" ? "bg-warning" : "bg-secondary"}`}
					style={{width: "80px", height: "80px", cursor: "pointer"}}
					onClick={() => setColor("yellow")}
				></div>
				
				{/* Luz verde */}
				<div 
					className={`rounded-circle mx-auto ${color === "green" ? "bg-success" : "bg-secondary"}`}
					style={{width: "80px", height: "80px", cursor: "pointer"}}
					onClick={() => setColor("green")}
				></div>
				
			</div>
		</div>
	);
};



export default Home;