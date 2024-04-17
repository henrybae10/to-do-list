import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
	toDo: string;
}

function CreateToDo() {
	const { register, watch, handleSubmit, setValue } = useForm<IForm>();
	const setToDos = useSetRecoilState(toDoState);
	const category = useRecoilValue(categoryState);

	const handleValid = (data: IForm) => {
		setToDos((prevToDos) => [
			{
				text: data.toDo,
				id: Date.now(),
				category: category,
			},
			...prevToDos,
		]);
		setValue("toDo", "");
	};

	return (
		<form onSubmit={handleSubmit(handleValid)}>
			<input
				{...register("toDo", { required: true })}
				placeholder="Write todo"
			/>
			<button>add</button>
		</form>
	);
}

export default CreateToDo;
