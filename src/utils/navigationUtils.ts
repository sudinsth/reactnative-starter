import {
  StackActions,
  TabActions,
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';

import {
  RootStackParams,
  RouteParamsType,
} from '@app/navigations/RootNavigations';

export const navigationRef = createNavigationContainerRef<RootStackParams>();

export const navigate = (
  name: keyof RootStackParams,
  params?: RouteParamsType,
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const navigationReset = (
  name: keyof RootStackParams,
  params?: RouteParamsType,
) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name: name, params: params}],
    });
  }
};

export const navigationReplace = (
  name: keyof RootStackParams,
  params?: RouteParamsType,
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
};

export const navigationGoBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const navigationPush = (
  screenName: keyof RootStackParams,
  params: RouteParamsType,
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(screenName, params));
  }
};

export const navigationJumpTo = (
  screenName: string,
  params?: RouteParamsType,
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(TabActions.jumpTo(screenName, params));
  }
};
