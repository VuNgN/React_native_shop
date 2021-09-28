import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import category from './screens/category';
import categories from './screens/categories';
import cart from './screens/cart';
import Home from './screens/home';
import Setting from './screens/setting';
import homeActiveIcon from './assets/homeActive.png';
import cartActiveIcon from './assets/shopping-cartActive.png';
import orderActiveIcon from './assets/shopping-bagActive.png';
import settingActiveIcon from './assets/cogwheelActive.png';
import homeIcon from './assets/home.png';
import cartIcon from './assets/shopping-cart.png';
import orderIcon from './assets/shopping-bag.png';
import settingIcon from './assets/cogwheel.png';
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
         },
      }}>
        <Tab.Screen 
            name="Home" 
            children={() => <HomeStackScreen isDarkMode={isDarkMode} />}
            options={ 
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
            // component={() => <CartStackScreen isDarkMode={isDarkMode} />} 
            children={() => <CartStackScreen isDarkMode={isDarkMode} />}
            options={
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
