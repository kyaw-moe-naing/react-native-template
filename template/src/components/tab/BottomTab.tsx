import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Button, StyleSheet, View} from 'react-native';
// import {ReactElement} from 'react';
import {useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function BottomTabBar(props: BottomTabBarProps) {
  const {colors} = useTheme();
  const {state, navigation} = props;
  const insets = useSafeAreaInsets();

  // const icons: ReactElement[] = [];
  // const selectedIcons: ReactElement[] = [];

  return (
    <View
      style={[
        styles.tab,
        {
          height: insets.bottom,
          backgroundColor: colors.background,
          borderTopColor: colors.card,
          paddingBottom: insets.bottom,
        },
      ]}>
      {state.routes.map((route, index) => {
        const label: string = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
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
  );
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    borderTopWidth: 1,
  },
});

export default BottomTabBar;
