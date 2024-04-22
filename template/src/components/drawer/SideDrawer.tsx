import { DrawerContentComponentProps } from "@react-navigation/drawer"
import { useTheme } from "@react-navigation/native";
import { Button, StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";

function SideDrawer(props: DrawerContentComponentProps) {
  const { colors } = useTheme();
  const { state, navigation } = props;
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.drawer,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: colors.background,
      },
    ]}>
      {state.routes.map((route, index) => {
        const label: string = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'drawerItemPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Button
            key={label}
            // selected={isFocused}
            // icon={isFocused ? selectedIcons[index] : icons[index]}
            title={label}
            onPress={onPress}
          />
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  drawer: {
  },
});

export default SideDrawer