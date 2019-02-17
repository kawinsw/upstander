import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePage from './screens/homepage';
import CancelPage from './screens/cancel';

const mainNavigator = createStackNavigator({
  HomePage: HomePage,
  CancelPage: CancelPage

})
const App = createAppContainer(mainNavigator);
export default App;