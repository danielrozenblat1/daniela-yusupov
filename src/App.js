
import './App.css';
import ByMe from './components/ByMe/ByMe';
import AboutMe from './components/me/Me';
import NavBarNew from './components/NewNav/NavBarNew';
import Works from './components/recommends/Works';
import Timeline from './components/steps/Steps';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>

  <FirstScreen/>
<SecondScreen/>
<AboutMe/>
<Timeline/>
<ThirdScreen/>
<ByMe/>
  </>
}

export default App;
