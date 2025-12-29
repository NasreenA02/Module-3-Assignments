function StepThree({ formData, dispatch }) {
  return (
    <>
      <h4>Review Details</h4>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Username: {formData.username}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>
      <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
        Submit
      </button>
    </>
  );
}

export default StepThree;
