import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from './screens/home';
import category from './screens/category';
import categories from './screens/categories';
import cart from './screens/cart';
import Setting from './screens/setting';
import homeIcon from './assets/home.png';
import homeActiveIcon from './assets/homeActive.png';
import homeDarkMode from './assets/homeDarkMode.png';
import homeActiveDarkMode from './assets/homeActiveDarkMode.png';
import orderIcon from './assets/shopping-bag.png';
import orderActiveIcon from './assets/shopping-bagActive.png';
import orderDarkMode from './assets/shopping-bagDarkMode.png';
import orderActiveDarkMode from './assets/shopping-bagActiveDarkMode.png';
import cartIcon from './assets/shopping-cart.png';
import cartActiveIcon from './assets/shopping-cartActive.png';
import cartDarkMode from './assets/shopping-cartDarkMode.png';
import cartActiveDarkMode from './assets/shopping-cartActiveDarkMode.png';
import settingIcon from './assets/cogwheel.png';
import settingActiveIcon from './assets/cogwheelActive.png';
import settingDarkMode from './assets/cogwheelDarkMode.png';
import settingActiveDarkMode from './assets/cogwheelActiveDarkMode.png';
import { MyContext } from './components/context/appContext';

const homeStack = createNativeStackNavigator();

const HomeStackScreen = ({isDarkMode}) => 
    <homeStack.Navigator screenOptions={{ 
            headerShown: false,  
        }}>
        <homeStack.Screen name="categories" component={Home} options={{ 
            title: 'My home', 
            headerStyle: {
                backgroundColor: isDarkMode ? '#202020' : '#fff',
            }, 
            headerTintColor: isDarkMode ? '#fff': '#000', }} />
    </homeStack.Navigator>


const cartStack = createNativeStackNavigator();

const CartStackScreen = ({isDarkMode}) => 
    <cartStack.Navigator>
        <cartStack.Screen name="categories" component={cart} options={{ 
            title: 'My cart',
            headerStyle: {
                backgroundColor: isDarkMode ? '#202020' : '#fff',
            }, 
            headerTintColor: isDarkMode ? '#fff': '#000',
        }} 
        />
    </cartStack.Navigator>


const shopStack = createNativeStackNavigator();

const ShopStackScreen = ({isDarkMode}) => 
    <shopStack.Navigator>
        <shopStack.Screen name="categories" component={categories} options={{ 
            title: 'Shoping',
            headerStyle: {
                backgroundColor: isDarkMode ? '#202020' : '#fff',
            }, 
            headerTintColor: isDarkMode ? '#fff': '#000', }} />
        <shopStack.Screen name="category" component={category} options={{ 
            title: 'category',
            headerStyle: {
                backgroundColor: isDarkMode ? '#202020' : '#fff',
            }, 
            headerTintColor: isDarkMode ? '#fff': '#000', }} />
    </shopStack.Navigator>



const settingsStack = createNativeStackNavigator();

const SettingsStackScreen = ({isDarkMode}) => 
    <settingsStack.Navigator>
        <settingsStack.Screen name="categories" component={Setting} options={{ 
            title: 'My setting',
            headerStyle: {
                backgroundColor: isDarkMode ? '#202020' : '#fff',
            }, 
            headerTintColor: isDarkMode ? '#fff': '#000', }} />
    </settingsStack.Navigator>


const Tab = createBottomTabNavigator();

const bottomTab = ( cart, isDarkMode ) => 
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: isDarkMode ? '#202020' : '#fff'
         },
      }}>
        <Tab.Screen 
            name="Home" 
            children={() => <HomeStackScreen isDarkMode={isDarkMode} />}
            options={
                isDarkMode ? {
                    tabBarIcon: ({ focused }) =>
                        focused ?
                            <Image source={homeActiveDarkMode} style={{ height: 25, width: 25, }} />
                            : <Image source={homeDarkMode} style={{ height: 25, width: 25, }} />
                    ,
                    tabBarActiveTintColor: '#fff'
                }
                :
                {
                  tabBarIcon:({ focused }) => 
                    focused ?
                    <Image source={ homeActiveIcon } style={{height:25, width:25,}} />
                    : <Image source={ homeIcon } style={{height:25, width:25,}} />
                  ,
                  tabBarActiveTintColor: '#000'
                }
            } 
        />
        <Tab.Screen 
            name="Shop" 
            children={() => <ShopStackScreen isDarkMode={isDarkMode} />}
            options={
                isDarkMode ?
                {
                    tabBarIcon:({ focused }) => 
                      focused ?
                      <Image source={ orderActiveDarkMode } style={{height:25, width:25,}} />
                      : <Image source={ orderDarkMode } style={{height:25, width:25,}} />,
                    tabBarActiveTintColor: '#fff'
                }
                :
                {
                    tabBarIcon:({ focused }) => 
                      focused ?
                      <Image source={ orderActiveIcon } style={{height:25, width:25,}} />
                      : <Image source={ orderIcon } style={{height:25, width:25,}} />,
                    tabBarActiveTintColor: '#000'
                }
            } 
        />
        <Tab.Screen 
            name="Cart" 
            children={() => <CartStackScreen isDarkMode={isDarkMode} />}
            options={
                isDarkMode ?
                {
                    tabBarIcon:({ focused }) => 
                    focused ?
                    <Image source={ cartActiveDarkMode } style={{height:25, width:25,}} />
                    : <Image source={ cartDarkMode } style={{height:25, width:25,}} />,
                    tabBarActiveTintColor: '#fff',
                    tabBarBadge: cart.length,
                    tabBarBadgeStyle: { backgroundColor: '#00FFEA', color: '#000' }
                }
                :
                {
                    tabBarIcon:({ focused }) => 
                    focused ?
                    <Image source={ cartActiveIcon } style={{height:25, width:25,}} />
                    : <Image source={ cartIcon } style={{height:25, width:25,}} />,
                    tabBarActiveTintColor: '#000',
                    tabBarBadge: cart.length,
                    tabBarBadgeStyle: { backgroundColor: '#00FFEA', color: '#000' }
                }
            }         
        />
        <Tab.Screen 
            name="Settings" 
            children={() => <SettingsStackScreen isDarkMode={isDarkMode} />}
            options={
                isDarkMode ? 
                {
                    tabBarIcon:({ focused }) => 
                    focused ?
                    <Image source={ settingActiveDarkMode } style={{height:25, width:25,}} />
                    : <Image source={ settingDarkMode } style={{height:25, width:25,}} />,
                    tabBarActiveTintColor: '#fff'
                }
                :
                {
                    tabBarIcon:({ focused }) => 
                    focused ?
                    <Image source={ settingActiveIcon } style={{height:25, width:25,}} />
                    : <Image source={ settingIcon } style={{height:25, width:25,}} />,
                    tabBarActiveTintColor: '#000'
                }
            } 
            />
    </Tab.Navigator>


export default function MyStack() {
    const { cart, isDarkMode } = useContext( MyContext );
    return (
        bottomTab( cart, isDarkMode )
    );
}
