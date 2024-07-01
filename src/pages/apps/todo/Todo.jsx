import { useState } from "react";
import { Button } from "../../../components/Buttons";
import Todo1 from "./todo1/Todo1";
import Todo2 from "./todo2/Todo2";
import TodoProvider from "./todo2/Todo2Provider";
import Todo3 from "./todo3/Todo3";
import Todo4 from "./todo4/Todo4";

const todoMenu = [
  {
    label: "Todo1",
    description:
      "The first todo list app only uses the useState and useEffect hooks and relies solely on props for data transmission between parent and child components, and the notifications are implemented manually.",
    content: <Todo1 />,
  },
  {
    label: "Todo2",
    description:
      "The second todo list app uses the useState, useEffect, useContext, and useReducer hooks for data management and state management, and the notifications are implemented using the Notistack library.",
    content: (
      <TodoProvider>
        <Todo2 />
      </TodoProvider>
    ),
  },
  {
    label: "Todo3",
    description:
      "The third to-do list project uses the Redux library for state management, allowing for centralized data and easier access to each state, and the notifications are implemented using the react-hot-toast library",
    content: <Todo3 />,
  },
  { label: "Todo4", description: "deskripsi todo4", content: <Todo4 /> },
];

export default function Todo() {
  const [active, setActive] = useState("Todo1");

  return (
    <section className="min-h-screen w-full bg-gray-50 px-3 sm:px-20 md:px-36 lg:px-56 flex justify-center">
      <div className="bg-white w-full">
        <div className="flex gap-2 items-center bg-gray-100 py-3 justify-center sticky top-0">
          {todoMenu.map((item, i) => (
            <Button
              onClick={() => setActive(item.label)}
              key={i}
              className2={`${active === item.label ? "border border-cyan-500" : ""} p-2`}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div className="p-4 m-4 rounded-xl shadow-xl font-mulish">
          {todoMenu.map((item, i) => (
            <div key={i} className={`${active === item.label ? "block" : "hidden"} flex flex-col gap-3`}>
              <div className="font-spaceMono text-xl">{item.label}</div>
              <div className="font-mulish">{item.description}</div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
