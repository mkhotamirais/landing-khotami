import { Button } from "../../../components/Buttons";
import Todo1 from "./todo1/Todo1";
import Todo2 from "./todo2/Todo2";
import Todo3 from "./todo3/Todo3";
import Todo4 from "./todo4/Todo4";

const todoMenu = [
  { label: "Todo1", description: "deskripsi todo1", content: <Todo1 /> },
  { label: "Todo2", description: "deskripsi todo2", content: <Todo2 /> },
  { label: "Todo3", description: "deskripsi todo3", content: <Todo3 /> },
  { label: "Todo4", description: "deskripsi todo4", content: <Todo4 /> },
];

export default function Todo() {
  return (
    <section className="min-h-screen w-full bg-gray-50 px-3 sm:px-20 md:px-36 lg:px-56 flex justify-center">
      <div className="bg-white w-full">
        <div className="flex gap-2 items-center bg-gray-100 py-3 justify-center sticky top-0">
          {todoMenu.map((item, i) => (
            <Button key={i} className2="p-2">
              {item.label}
            </Button>
          ))}
        </div>
        <div className="rounded p-4 m-4">
          <Todo1 />
          {/* <Todo2 />
          <Todo3 />
          <Todo4 /> */}
        </div>
      </div>
    </section>
  );
}
