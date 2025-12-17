import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Nasreen Ansari";
  const age = 23;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
