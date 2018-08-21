import React from 'react';
import ReactDOM from 'react-dom';
//REDUX
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
//STYLES
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

const Root = () => (
	<Provider store={createStore(reducers)}>
		<App/>
	</Provider>
	);


ReactDOM.render(<Root />, document.getElementById('root'));

