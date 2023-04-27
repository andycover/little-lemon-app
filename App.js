//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import a local component here
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonWelcome from './components/LittleLemonWelcome';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <LittleLemonHeader />
      <LoginScreen />
    </View>
    <View style={styles.footerContainer}>
      <LittleLemonFooter />
    </View>
    </>
  );
}


/* export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <MenuItems />     
      <LittleLemonFooter />
    </View>
  );
} */

//Color values: #EE9972, #333333, #EDEFEE, black and white.
/* export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <StatusBar style="auto" />
      <LittleLemonFooter />
    </View>
  );
} */

/* export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <LittleLemonWelcome />     
      <LittleLemonFooter />
    </View>
  );
} */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa',
    //backgroundColor: '#495E57',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
}); */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  footerContainer: {backgroundColor: '#333333'},
});