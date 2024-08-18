import {createDrawerNavigator} from '@react-navigation/drawer';
import SideDrawer from 'components/drawer/SideDrawer';
import {tabs} from 'navigation/routes';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export type RootDrawerParamList = {};

function TabContainer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      {tabs.map(tab => (
        <Drawer.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
        />
      ))}
    </Drawer.Navigator>
  );
}

export default TabContainer;
