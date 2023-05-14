import './assets/styles/global-styles.scss';
import { HomePage } from './pages/home';

const home = new HomePage();
document.body.append(home.getElement());
