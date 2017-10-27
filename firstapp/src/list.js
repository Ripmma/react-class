import React from 'react';
import "./list.css";
import Card from "./card.js";

export default function List() {
	return (
		<div className="list">
			<h3>Examlple List</h3>
			<Card />
			<Card />
			<Card />
		</div>
	)
}