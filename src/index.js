import ReactDOM from 'react-dom';
import App from './App';  
import store from '@redux/store.js'
import { Provider } from 'react-redux'
import '@styles/global.css'
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
); 
