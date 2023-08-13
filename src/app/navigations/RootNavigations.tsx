import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import routes from './routes';
import {navigationRef} from '@utils';
import {ScreenList} from './ScreenList';

export type RouteParamsType = any;

export type RootStackParams = {
  [value in ScreenList]: RouteParamsType;
};

const RootStack = createStackNavigator<RootStackParams>();
const {Navigator, Screen} = RootStack;

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName={ScreenList.splash}
        screenOptions={{
          headerShown: false,
        }}
      >
        {routes.map(screenRoute => (
          <Screen
            key={screenRoute.screen}
            name={screenRoute.screen}
            component={screenRoute.component}
            options={{...screenRoute?.options}}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
