import 'bootstrap/scss/bootstrap.scss';
import 'primeicons/primeicons.css';
import PrimeReact from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './styles/theme.scss';

PrimeReact.ripple = true;

export { Button } from './components/Button/Button';
export { ShoppingCard } from './components/ShoppingCard/ShoppingCard';
export { ShoppingCardProduct } from './components/ShoppingCard/ShoppingCardProduct/ShoppingCardProduct';
export { ShoppingCardTotal } from './components/ShoppingCard/ShoppingCardTotal/ShoppingCardTotal';
export { Table } from './components/Table/Table';

