import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SettingsScreen from './screens/SettingsScreen';

// Screens Names
const homeName = "Home";
const detailName = "Details";
const SettingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === detailName) {
                            iconName = focused ? 'list' : 'list-outline'
                        }
                        else if (rn === SettingsName) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />

                    },
                    "tabBarActiveTintColor": "yellow",
                    "tabBarInactiveTintColor": "grey",
                    "tabBarLabelStyle": {
                        "paddingBottom": 10,
                        "fontSize": 10
                    },
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ]
                })}
            // tabBarOptions={{
            //     activeTintColor: 'yellow',
            //     inactiveTintColor: 'grey',
            //     labelStyle: {
            //         paddingBottom: 10,
            //         fontSize: 10,
            //     },
            //     style: {
            //         padding: 10,
            //         height: 70,
            //     },
            // }}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={detailName} component={DetailScreen} />
                <Tab.Screen name={SettingsName} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
