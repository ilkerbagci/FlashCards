import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Constants from 'expo-constants'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Entypo } from '@expo/vector-icons'
import reducer from './reducers'
import { appMainColor, white } from './utils/color'
import AddDeck from './components/AddDeck'
import DeckList from './components/DeckList'
import DeckItem from './components/DeckItem'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helper'

const AppStatusBar = ({ backgroundColor, ...props }) => (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
)

const Tabs = createBottomTabNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'List',
                tabBarIcon: () => (
                    <Entypo name='list' size={30} color={appMainColor} />
                )
            }
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                tabBarLabel: 'Add',
                tabBarIcon: () => (
                    <Entypo name='add-to-list' size={30} color={appMainColor} />
                )
            }
        }
    },
    {
        navigationOptions: {
            headerShown: false
        },
        tabBarOptions: {
            activeTintColor: appMainColor,
            style: {
                height: 60,
                backgroundColor: white,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 3,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            },
            labelStyle: {
                paddingTop: 3,
                fontSize: 14,
                fontWeight: 'bold'
            }
        }
    }
)

const MainNavigator = createStackNavigator(
    {
        Home: Tabs,
        DeckItem: DeckItem,
        DeckDetail: DeckDetail,
        AddCard: AddCard,
        Quiz: Quiz
    },
    {
        initialRouteName: 'Home'
    }
)

const AppContainer = createAppContainer(MainNavigator)

class App extends Component {
    componentDidMount() {
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{ flex: 1 }}>
                    <AppStatusBar backgroundColor={appMainColor} barStyle='light-content' />
                    <AppContainer />
                </View>
            </Provider>
        )
    }
}

export default App
