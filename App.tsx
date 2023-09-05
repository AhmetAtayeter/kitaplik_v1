import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import auth from "@react-native-firebase/auth"
import Login from "./src/pages/Login/Login";
import Sign from "./src/pages/Sign/Sign";
import Main from "./src/pages/Main/Main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home/Home";
import Search from "./src/pages/Search/Search";
import Profile from "./src/pages/Profile/Profile";
import { faHouse, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "./src/styles/colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const App = () => {

  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        // screenOptions={{headerShown: false}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'ProfilePage') {
              return <FontAwesomeIcon icon={faUser} size={25} color={color} />
            } else if (route.name === 'HomePage') {
              return <FontAwesomeIcon icon={faHouse} size={25} color={color} />
            } else if (route.name === 'SearchPage')
              return <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color={color} />
          },
          tabBarActiveTintColor: colors.lightblue,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarShowLabel: false
          
        })}
      >
        <Tab.Screen name="HomePage" component={Home} />
        <Tab.Screen name="SearchPage" component={Search} />
        <Tab.Screen name="ProfilePage" component={Profile} />
      </Tab.Navigator>
    );
  };

  const [userSession, setUserSession] = useState()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
        <Stack.Screen name="MainPage" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App