function StepOne({ formData, dispatch }) {
  return (
    <>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value,
          })
        }
      />

      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
        Next
      </button>
    </>
  );
}

export default StepOne;
