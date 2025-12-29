import { useReducer } from "react";
import { formReducer, initialState } from "./reducer/formReducer";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  if (state.isSubmitted) {
    return <h2>Form submitted successfully ✅</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Step {state.step} of 3</h3>

      {state.step === 1 && (
        <StepOne formData={state.formData} dispatch={dispatch} />
      )}

      {state.step === 2 && (
        <StepTwo formData={state.formData} dispatch={dispatch} />
      )}

      {state.step === 3 && (
        <StepThree formData={state.formData} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
