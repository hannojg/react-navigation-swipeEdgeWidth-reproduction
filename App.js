import * as React from 'react';
import {Button, Dimensions, TextInput, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        style={{
          width: 300,
          height: 40,
          backgroundColor: 'yellow',
          borderBottomWidth: 1,
          alignSelf: 'center',
        }}
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  console.log(Dimensions.get('window'));
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        swipeEdgeWidth: 500,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
