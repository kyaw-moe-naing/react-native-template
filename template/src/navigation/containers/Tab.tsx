import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from 'components/tab/BottomTab';
import {tabs} from 'navigation/routes';

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {};

function TabContainer() {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      {tabs.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}

export default TabContainer;
