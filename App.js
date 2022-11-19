import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import TodoItems from './components/TodoItems';
import ItemForm from './components/form';

export default function App() {
  const [items, setItems] = useState([
    {item: "todo 1", key: 1},
    {item: "todo 2", key: 2},
    {item: "todo 3", key: 3},
    {item: "todo 4", key: 4},
    {item: "todo 4", key: 5},
  ]);

  const onPressHandler = (key) => {
    setItems((prevState) => {
      return prevState.filter((item)=>item.key!=key)
    })
  }
  const itemAddHandler = (item) => {
    setItems((prevState) => (
      [{item, key: Math.random().toString()}, ...prevState]
    ))
  }
  return (
    <View style={styles.container}>
      <Header />
      <ItemForm onPressHandler={itemAddHandler}/>
      <TodoItems items={items} onPressHandler={onPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
