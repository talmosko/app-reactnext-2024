import React from "react";
import { createContext, useContext } from "react";

export const FormContext = createContext([]);

function Form() {
  const [state, setState] = useContext(FormContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  }
  return (
    <div>
      <label htmlFor="input" className="block font-medium text-gray-700">
        Type Something
      </label>
      <input
        id="input"
        name="input"
        autoComplete="off"
        onChange={handleChange}
        value={state.input || ""}
        className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full"
      />
    </div>
  );
}

export default Form;
