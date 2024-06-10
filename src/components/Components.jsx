import { useState } from "react";
import HeavyComponent from "./HeavyComponent";
import Form, { FormContext } from "./Form";

export function Heavy() {
  const [state, setState] = useState({});

  return (
    <FormContext.Provider value={[state, setState]}>
      <div className="space-y-4">
        <Form />
        <hr className="border-gray-300" />
        <HeavyComponent />
      </div>
    </FormContext.Provider>
  );
}

export function WithWrapper() {
  return (
    <ContextWrapper>
      <div className="space-y-4">
        <Form />
        <hr className="border-gray-300" />
        <HeavyComponent />
      </div>
    </ContextWrapper>
  );
}

export function WithChildren({ form, heavyComponent }) {
  const [state, setState] = useState({});

  return (
    <FormContext.Provider value={[state, setState]}>
      <div className="space-y-4">
        {form}
        <hr className="border-gray-300" />
        {heavyComponent}
      </div>
    </FormContext.Provider>
  );
}
function ContextWrapper({ children }) {
  const [state, setState] = useState({});

  return (
    <FormContext.Provider value={[state, setState]}>
      {children}
    </FormContext.Provider>
  );
}
