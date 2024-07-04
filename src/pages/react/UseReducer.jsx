import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "setName") {
    return { ...state, name: action.name };
  } else if (action.type === "incAge") {
    return { ...state, age: state.age + 1 };
  } else if (action.type === "decAge") {
    return { ...state, age: state.age - 1 };
  } else if (action.type === "setGender") {
    return { ...state, gender: action.gender };
  } else Error("Unknown action: " + action.type);
};

const initialState = { name: "john", age: 10, gender: "male" };

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeName = (e) => dispatch({ type: "setName", name: e.target.value });
  const handlePlusAge = () => dispatch({ type: "incAge" });
  const handleMinusAge = () => dispatch({ type: "decAge" });
  const handleGender = () => {
    let gender;
    if (state.gender === "male") gender = "female";
    else if (state.gender === "female") gender = "male";
    dispatch({ type: "setGender", gender });
  };
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="size-[300px] bg-white p-1">
        useReducer
        <div>
          <div>
            name: {state.name}; age: {state.age}; gender: {state.gender}
          </div>
          <div>
            name: <input type="text" value={state.name} onChange={handleChangeName} className="border" />
          </div>
          <div>
            <button onClick={handlePlusAge} className="underline mx-2">
              plus age
            </button>
            <button onClick={handleMinusAge} className="underline mx-2">
              minus age
            </button>
            <button onClick={handleGender} className="underline mx-2">
              switch gender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
