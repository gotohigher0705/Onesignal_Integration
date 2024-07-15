import logo from './logo.svg';
import './App.css';
import OneSignal from 'react-onesignal';
import { useEffect, useState } from 'react';

function App() {
	const [initialize, seInitialize] = useState(false);
	useEffect(() => {
		async function runOneSignal() {
			await OneSignal.init({
				appId: process.env.API_KEY,
				allowLocalhostAsSecureOrigin: true,
			});
			OneSignal.Slidedown.promptPush();
		}

    runOneSignal();
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
