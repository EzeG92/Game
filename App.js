import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StarGamesScreen from './screens/StarGamesScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import ResultScreen from './screens/ResultScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [winOrLose, setwinOrLose] = useState(false)
  const [result, setResult] = useState('')

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const handleFinishGame = (selection, number) => {
    if (
      (selection === 'lower' && userNumber < number) ||
      (selection === 'greater' && userNumber > number)
    ) {
      setResult('felicitaciones')
    } else {
      setResult('lo siento')
    }
    setwinOrLose(true)
  };

  let content = <StarGamesScreen onStartGame={handleStartGame} />

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result}/>
  } else  if(userNumber){
    content = <GameScreen handleResult={handleFinishGame}/>
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
