import { useState } from "react";
import Form from "./components/Form";
import HeavyComponent from "./components/HeavyComponent";
import RenderingSelection from "./components/RenderingSelection";
import Card from "./components/Card";
import { Heavy, WithChildren, WithWrapper } from "./components/Components";

const apps = {
  slow: <Heavy />,
  "surprise 1": <WithWrapper />,
  "surprise 2": (
    <WithChildren form={<Form />} heavyComponent={<HeavyComponent />} />
  ),
};

export default function App() {
  const [comp, setComp] = useState("slow");

  function handleChange(e) {
    setComp(e.target.value);
  }

  return (
    <div className="flex flex-col max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md gap-6">
      <RenderingSelection comp={comp} handleChange={handleChange} />
      <Card>{apps[comp]}</Card>
    </div>
  );
}
