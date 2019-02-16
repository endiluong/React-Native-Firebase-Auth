import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
  Dimensions
} from "react-native";
import styles from "./../styles";

// FIREBASE
import * as firebase from "firebase";
//Vendor
import Loading from "react-native-loader-overlay";



//STATE
state = { email: "", password: "", errorMessage: null };
//

class Signup extends React.Component {
  // STATE
  state = {
    title: "Sign Up to Firebase"
  };
  async signup(email, pass) {
    this.loading = Loading.show({
      color: "orange",
      size: 20,
      overlayColor: "rgba(0,0,0,0.5)",
      closeOnTouch: false,
       loadingType: "Bars" // 'Bubbles', 'DoubleBounce', 'Bars', 'Pulse', 'Spinner'
    });

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);

      this.navigator("Login");
      Loading.hide(this.loading);
      ToastAndroid.show("Account Created ! To Login Page", ToastAndroid.LONG);

      // Navigate to the Home page, the user is auto logged in
    } catch (error) {
      Loading.hide(this.loading);
      ToastAndroid.show(error.toString(), ToastAndroid.LONG);
    }
  }

  // Option
  static navigationOptions = ({ navigation }) => ({
    // Receive title from the navigate Activity or can be mannualy setup :
    //
    //Header Go Back Btn Color
    headerTintColor: "orange",
    //
    title: "Sign Up",
    //Edit Header Tittle
    headerTitleStyle: {
      color: "white",
      textAlign: "center",
      alignSelf: "center"
    },
    // Edit Header
    headerStyle: {
      backgroundColor: "black"
    }
  });
  //Home Screen
  render() {
    const remote =
      "https://www.hoasted.com/wp-content/uploads/2015/05/Gradient-blue-1-600x398.jpg";
    return (
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Image style={{ flex: 1 }} source={{ uri: remote }} />
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{this.state.title}</Text>
        </View>

        <View stylee={styles.innputBox}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="orange"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            secureTextEntry = {
              true
            }
            placeholderTextColor="orange"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={async () => {
                await this.signup(this.state.email, this.state.password);
              }}
              style={styles.buttonText}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonReg}
            onPress={() => this.navigator("Login")}
          >
            <Text style={styles.buttonText}> To Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  /**
   * BUSINESS METHOD
   */
  SignUp() {}

  navigator(link) {
    const navigator = this.props.navigation.navigate(link);
  }
  /**
   *
   */
}

export default Signup;
