import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { IRegisteredCategory, registeredCategoryState } from "../atoms";

interface IForm {
	categoryKey: string;
	categoryTitle: string;
}

function CreateCategory() {
	const { register, watch, handleSubmit, setValue } = useForm<IForm>();
	const [registeredCategories, setRegisteredCategories] = useRecoilState<
		IRegisteredCategory[]
	>(registeredCategoryState);

	const handleValid = (data: IForm) => {
		data.categoryKey = data.categoryTitle.replace(" ", "_");
		setRegisteredCategories((prevRegisteredCategories) => [
			...prevRegisteredCategories,
			{
				key: data.categoryKey,
				title: data.categoryTitle,
			},
		]);

		setValue("categoryTitle", "");
	};

	return (
		<form onSubmit={handleSubmit(handleValid)}>
			<input
				{...register("categoryTitle", { required: true })}
				placeholder="Write category Key"
			/>
			<button>add</button>
		</form>
	);
}

export default CreateCategory;
