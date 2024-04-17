import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface IRegisteredCategory {
	key: string;
	title: string;
}

export const registeredCategoryState = atom<IRegisteredCategory[]>({
	key: "registeredCategory",
	default: [
		{ key: "TO_DO", title: "To Do" },
		{ key: "DOING", title: "Doing" },
		{ key: "DONE", title: "Done" },
	],
	effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<string>({
	key: "category",
	default: "TO_DO",
});

export interface IToDo {
	text: string;
	id: number;
	category: string;
}

export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const toDos = get(toDoState);
		const category = get(categoryState);

		return toDos.filter((toDo) => toDo.category === category);
	},
});
