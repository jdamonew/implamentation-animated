import Menu from './pages/home';
import Second from './pages/secondPage';
import Animation from './pages/animation'


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Menu,
    SecondPage: Second,
    Animation: Animation, 
    
  })
);

export default Routes;