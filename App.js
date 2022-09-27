import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryItem from './source/Components/CategoryItem';
import Header from './source/Components/Header';
import Search from './source/Components/Search';

export default function App() {
  return (
    <View >
      <Header />
      <Search />
      <CategoryItem />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
