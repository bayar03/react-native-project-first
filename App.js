import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Prompt from 'react-native-prompt-android';
import { StyleSheet, Text, View, Button, Alert, Image,  TouchableWithoutFeedback, Prompt } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Нажата другая тестовая часть');
  const handleButtonPress = () => Alert.alert("Мэндэ", "Хэрэгтэй бэшэг", [
    {text: "За", onPress: () => console.log('Тиимэ')},
    {text: "Угы", onPress: () => console.log('Угы')}
  ]);
  const handleButtonPress2 = () => Prompt('Мэндэ', 'Хэрэгтэй бэшэг' text => console.log(text));
  // const handleButtonPress2 = () => Alert.prompt("Мэндэ", "Хэрэгтэй бэшэг", text => console.log(text));

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={() => console.log('Нажата текст')}>Привет это учебный проект на{'\n'} 
       Readt Native фреймворк EXPO</Text>
      <Text onPress={handleTextPress}>Привет это учебный проект на Readt Native фреймворк EXPO</Text>
      <Button title={'Жми'} color="red" onPress={handleTextPress} />
      <Button title={'Дарыш'} color="blue" onPress={handleButtonPress} />
      <Button title={'Дара'} color="green" onPress={handleButtonPress2} />
      <Image source={require('./assets/favicon.png')} />
      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <Image source={{
          width: 200,
          height: 200,
          uri: "https://kartinkinaden.ru/uploads/posts/2021-03/1616118913_14-p-baikal-krasivie-foto-15.jpg"
        }} />
      </TouchableWithoutFeedback >
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff'
  },
  text: {
    color: 'red'
  }
});
