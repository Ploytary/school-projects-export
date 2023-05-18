import './assets/styles/global-styles.scss';
import './assets/fonts/Roboto-Regular.woff';
import { HomePage } from './pages/home';

const home = new HomePage();
document.body.append(home.getElement());
