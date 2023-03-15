import Profile from "./componens/Profile/Profile";
import user from "./Data/user.json";
import Statistics from "./componens/Statistics/Statistics";
import data from "./Data/data.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

    </div>
  );
}

export default App;
