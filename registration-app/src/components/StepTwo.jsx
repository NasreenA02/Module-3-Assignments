function StepTwo({ formData, dispatch }) {
  return (
    <>
      <input
        placeholder="Username"
        value={formData.username}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "username",
            value: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "password",
            value: e.target.value,
          })
        }
      />

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>
      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
        Next
      </button>
    </>
  );
}

export default StepTwo;
