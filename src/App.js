// import logo from './logo.svg';
import ProfileMap from './components/ProfileMap';
import user from './json/user.json';
import './App.css';

function App() {
  return (
    <div>
      <ProfileMap item={user} />
    </div>
  );
}

export default App;
