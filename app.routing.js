import { createStackNavigator } from "react-navigation";
import Login from './components/Login';
import Signup from "./components/Signup";
import MainPage from "./components/Main";


// For Routing/ Navigating throught the App Components
const AppNavigator = createStackNavigator(
  {
    //Set Component with pair value: [ keyName: Component Name]
    Login: Login,
    Signup: Signup,
    MainPage: MainPage
  },
  {
    // Set Entry page
    initialRouteName: "Login"
  }
);

export default AppNavigator