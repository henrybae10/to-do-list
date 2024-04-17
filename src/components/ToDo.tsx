import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, registeredCategoryState, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
	const setToDos = useSetRecoilState(toDoState);
	const registeredCategories = useRecoilValue(registeredCategoryState);

	const onClick = (newCategory: string) => {
		setToDos((prevToDos) => {
			const tartgetIndex = prevToDos.findIndex((todo) => todo.id === id);
			const newToDo = { text: text, id: id, category: newCategory };

			return [
				...prevToDos.slice(0, tartgetIndex),
				newToDo,
				...prevToDos.slice(tartgetIndex + 1),
			];
		});
	};

	return (
		<li>
			<span>{text}</span>
			{registeredCategories.map(
				(registeredCategory) =>
					category !== registeredCategory.key && (
						<button onClick={() => onClick(registeredCategory.key)}>
							{registeredCategory.title}
						</button>
					)
			)}
		</li>
	);
}

export default ToDo;
