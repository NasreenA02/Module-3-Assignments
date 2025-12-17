import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <h1>Message Cards</h1>

      <MessageCard
        title="Welcome"
        message="This is the first message card."
      />

      <MessageCard
        title="Reminder"
        message="Don't forget to submit your assignment."
      />

      <MessageCard
        title="Success"
        message="You are learning React props!"
      />

      <MessageCard
        title="Motivation"
        message="Keep coding, you're doing great"
      />
    </div>
  );
}

export default App;
