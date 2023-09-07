import { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initDataBase } from './db/Database';
import { AddContacts } from './components/AddContacts';
import { ListContacts } from './components/ListContacts';

initDataBase()

export default function App() {
  
  const [listRefreshKey, setListRefreshKey] = useState<number>(0)

  const refreshContactList = () => {
    setListRefreshKey((prevKey) => prevKey + 1)
  }
  
  return (
    <View style={styles.container} >
      <AddContacts onRefreshList = {refreshContactList} />
      <ListContacts key={listRefreshKey} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
});
