import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePage from './screens/homepage';
import FocusPage from './screens/focus';
import ConsciousPage from './screens/conscious';
import DamagePage from './screens/damage';
import PulsePage from './screens/pulse';
import AmbulancePage from './screens/ambulance';
const mainNavigator = createStackNavigator({
  HomePage: HomePage,
  FocusPage: FocusPage,
  DamagePage:DamagePage,
  ConsciousPage: ConsciousPage,
  PulsePage: PulsePage,
  AmbulancePage: AmbulancePage


})
const App = createAppContainer(mainNavigator);
export default App;