import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen106646Navigator from '../features/BlankScreen106646/navigator';
import BlankScreen96639Navigator from '../features/BlankScreen96639/navigator';
import BlankScreen86635Navigator from '../features/BlankScreen86635/navigator';
import BlankScreen76535Navigator from '../features/BlankScreen76535/navigator';
import BlankScreen65985Navigator from '../features/BlankScreen65985/navigator';
import BlankScreen55975Navigator from '../features/BlankScreen55975/navigator';
import BlankScreen45659Navigator from '../features/BlankScreen45659/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen106646: { screen: BlankScreen106646Navigator },
BlankScreen96639: { screen: BlankScreen96639Navigator },
BlankScreen86635: { screen: BlankScreen86635Navigator },
BlankScreen76535: { screen: BlankScreen76535Navigator },
BlankScreen65985: { screen: BlankScreen65985Navigator },
BlankScreen55975: { screen: BlankScreen55975Navigator },
BlankScreen45659: { screen: BlankScreen45659Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
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
