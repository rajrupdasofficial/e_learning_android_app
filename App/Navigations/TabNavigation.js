import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import LeaderBoard from '../Screen/LeaderBoard';
import MyCourse from '../Screen/MyCourse';
import Profile from '../Screen/Profile';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="home" size={24} color="black" />
        )
      }}
       />
      <Tab.Screen name='My Course' component={MyCourse}
      options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="bookmarks" size={24} color="black" />
        )
      }}
      />
      <Tab.Screen name="Leader Board" component={LeaderBoard} 
      options={{
        tabBarIcon:({color,size})=>(
          <MaterialIcons name="leaderboard" size={24} color="black" />
        )
      }}
      />
      <Tab.Screen name='Profile' component={Profile}
      options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="person-circle-outline" size={24} color="black" />
        )
      }}
      />
    </Tab.Navigator>
  );
}