import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import Header from './components/Header';
import StarGamesScreen from './screens/StarGamesScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';

export default function App() {

  const [userNumber, setUserNumber] = useState()

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StarGamesScreen onStartGame={handleStartGame}/>
  if (userNumber) {
    content = <GameScreen/>
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
