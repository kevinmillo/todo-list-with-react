import { element } from "prop-types";
import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [todo, setTodo] = useState([]);
	const agregartask = () => {
		if (task !== "") {
			setTodo([...todo, task]);
			setTask("");
		}
	};
	const eliminartask = index => {
		console.log(index);
		let todofiltrados = todo.filter((element, i) => {
			if (index !== i) {
				return element;
			}
		});
		setTodo(todofiltrados);
		//estilo
	};

	return (
		<div className="container">
			<h2>todos</h2>
			<div class="row g-3 align-items-center">
				<div class="col-8">
					<input
						className="form-control"
						type="text"
						onChange={e => setTask(e.target.value)}
						value={task}
					/>
				</div>
				<div class="col-4">
					<button
						className="btn btn-outline-dark w-100"
						onClick={agregartask}>
						add
					</button>
				</div>
			</div>

			<ul>
				{todo.map((item, index) => (
					<li key={index}>
						{item}{" "}
						<span onClick={() => eliminartask(index)}>x</span>
					</li>
				))}
			</ul>
			{todo.length > 0 && <span>tareas por hacer: {todo.length}</span>}
			{todo.length == 0 && <span>No hay tareas por hacer</span>}
		</div>
	);
};

export default Home;
