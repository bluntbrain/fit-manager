import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../screens/UserOnboardingAndAuth/Login';
import Registration from '../screens/UserOnboardingAndAuth/Registration';
import AddMember from '../screens/MemberManagement/AddMember';
import ViewMember from '../screens/MemberManagement/ViewMember';
import MemberList from '../screens/MemberManagement/MemberList';
import Dashboard from '../screens/Dashboard/Dashboard';
import ViewProfile from '../screens/UserSettingsAndProfile/ViewProfile';
import {RouteNames} from './RouteName';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName={RouteNames.Login}>
    <Stack.Screen
      name={RouteNames.Login}
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={RouteNames.Registration}
      component={Registration}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const MemberManagementStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteNames.MemberList}
      component={MemberList}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={RouteNames.AddMember}
      component={AddMember}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={RouteNames.ViewMember}
      component={ViewMember}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const UserProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteNames.ViewProfile}
      component={ViewProfile}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const BottomTabNav = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={RouteNames.Dashboard}
      component={Dashboard}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name={RouteNames.Members}
      component={MemberManagementStack}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name={RouteNames.Profile}
      component={UserProfileStack}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

const AppStack = () => (
  <Stack.Navigator initialRouteName={RouteNames.Auth}>
    <Stack.Screen
      name={RouteNames.Auth}
      component={AuthStack}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={RouteNames.MainApp}
      component={BottomTabNav}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AppStack;
