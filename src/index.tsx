import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './styles/theme.scss';
import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

export { Button } from './components/Button/Button';
export { ShoppingCardComponent } from './components/ShoppingCard/ShoppingCard';


