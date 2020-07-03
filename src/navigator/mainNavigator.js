import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps74009Navigator from '../features/Maps74009/navigator';
import Settings74011Navigator from '../features/Settings74011/navigator';
import NotificationList74010Navigator from '../features/NotificationList74010/navigator';
import Settings74026Navigator from '../features/Settings74026/navigator';
import ArticleList73990Navigator from '../features/ArticleList73990/navigator';
import ArticleList73991Navigator from '../features/ArticleList73991/navigator';
import ArticleList73992Navigator from '../features/ArticleList73992/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps74009: { screen: Maps74009Navigator },
Settings74011: { screen: Settings74011Navigator },
NotificationList74010: { screen: NotificationList74010Navigator },
Settings74026: { screen: Settings74026Navigator },
ArticleList73990: { screen: ArticleList73990Navigator },
ArticleList73991: { screen: ArticleList73991Navigator },
ArticleList73992: { screen: ArticleList73992Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
