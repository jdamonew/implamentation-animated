import Menu from './pages/home';
import MenuPrincipal from './pages/menuTest'
import Second from './pages/secondPage';
import Third from './pages/thirdpage';
import Fourth from './pages/fourthPage';
import Animation from './pages/animation'



import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Menu,
    Principal: MenuPrincipal,
    SecondPage: Second,
    ThirdPage: Third,
    FourthPage: Fourth,
    Animation: Animation, 
    
  })
);

export default Routes;