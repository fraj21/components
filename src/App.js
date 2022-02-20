import './App.css';
import Adress from './Components/Profile/Adress';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto'

function App() {
  return (
    <div className="App">
     
      <ProfilePhoto image=" https://static.vecteezy.com/ti/vecteur-libre/p3/2275847-male-avatar-profil-icone-de-souriant-caucasien-homme-vectoriel.jpg" />
      <FullName fullname="Farjou" />
      <Adress adress="farjou"/>
    </div>
  );
}

export default App;