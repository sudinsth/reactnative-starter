import {ScreenList} from './ScreenList';
import {RootStackParams} from './RootNavigations';

import {SplashScreen, TestScreen} from '@app/screens';

type RouteType = {
  screen: keyof RootStackParams;
  component: () => JSX.Element;
  options?: any;
};

const routes: RouteType[] = [
  {screen: ScreenList.splash, component: SplashScreen},
  {screen: ScreenList.test, component: TestScreen},
];

export default routes;
