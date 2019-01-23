import { createAppContainer } from "react-navigation";
import AppNavigator from "./app.routing";

const AppContainer = createAppContainer(AppNavigator);
export default createAppContainer(AppNavigator);
import * as firebase from "firebase";




var config = {
  apiKey: "AIzaSyAfREICejU4U5EPwN9wEzziqT4a4lbsHkg",
  authDomain: "rndemo-rndm1.firebaseapp.com",
  databaseURL: "https://rndemo-rndm1.firebaseio.com",
  projectId: "rndemo-rndm1",
  storageBucket: "rndemo-rndm1.appspot.com",
  messagingSenderId: "625687030854"
};
firebase.initializeApp(config);