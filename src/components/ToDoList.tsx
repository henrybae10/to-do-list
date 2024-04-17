import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, registeredCategoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import styled from "styled-components";
import CreateCategory from "./CreateCategory";

function ToDoList() {
	const toDos = useRecoilValue(toDoSelector);
	const registeredCategories = useRecoilValue(registeredCategoryState);
	const [category, setCategory] = useRecoilState(categoryState);

	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value);
	};

	return (
		<>
			<div>
				<h1>To Dos</h1>
				<hr />
				<select value={category} onInput={onInput}>
					{registeredCategories.map((registeredCategory) => (
						<option value={registeredCategory.key}>
							{registeredCategory.title}
						</option>
					))}
				</select>
				<CreateCategory />
				<CreateToDo />
				<ul>
					{toDos.map((toDo) => (
						<ToDo key={toDo.id} {...toDo} />
					))}
				</ul>
			</div>
		</>
	);
}

// input이 더 생기면 아래 코드가 더 늘어남. 각각에 대한 에러도 처리해야 함.
// 이게 불편해서 react-hook-form이 생김
/* function ToDoList() {
	const [toDo, setToDo] = useState("");
	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setToDo(value);
	};
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(toDo);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					placeholder="Write todo"
				/>
				<button>add</button>
			</form>
		</div>
	);
} */

export default ToDoList;
