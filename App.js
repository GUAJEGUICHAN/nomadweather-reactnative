import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp} >27</Text>
          <Text style={styles.description} >Sunny</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: 'tomato',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    // flex: 1,
    // alignContent: "flex-end",
    // justifyContent: "center"
    fontSize: 68,
    fontWeight: "500"
  },
  weather: {
    flex: 3,
    backgroundColor: "teal",
  },
  day: {
    flex: 1,
    alignContent: "flex-end",
    // justifyContent: "center",
    alignItems: "center",
  },

  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60
  },
});
