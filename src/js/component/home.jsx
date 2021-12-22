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
			<h2 className="fst-italic text-white-50 bg-dark">To-do list</h2>
			<div className="row g-3 align-items-center">
				<div className="col-10">
					<input
						className="form-control"
						type="text"
						onChange={e => setTask(e.target.value)}
						value={task}
					/>
				</div>
				<div className="col-2">
					<button
						className="btn btn-outline-dark w-100"
						onClick={agregartask}>
						Add Task
					</button>
				</div>
			</div>

			<ul>
				{todo.map((item, index) => (
					<li className="text-secondary" key={index}>
						{item}{" "}
						<span onClick={() => eliminartask(index)}>
							<i class="far fa-trash-alt"></i>
						</span>
					</li>
				))}
			</ul>
			{todo.length > 0 && (
				<span className="text-secondary">
					tareas por hacer: {todo.length}
				</span>
			)}
			{todo.length == 0 && (
				<span className="text-secondary">No hay tareas por hacer</span>
			)}
		</div>
	);
};

export default Home;
