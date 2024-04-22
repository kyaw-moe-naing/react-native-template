import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from 'navigation/routes';
import { AppDarkTheme, AppLightTheme } from 'navigation/theme';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {};

function AppContainer() {
  const { dark } = useTheme();

  return (
    <NavigationContainer theme={dark ? AppDarkTheme : AppLightTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              presentation: route.presentation,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
