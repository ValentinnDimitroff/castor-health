import { ThemeProvider } from 'react-jss'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import { Layout } from './components'
import { theme } from './theme'
import { store } from './store'
import Routes from './Routes'

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Layout>
						<Routes />
					</Layout>
				</ThemeProvider>
			</Provider>
		</Router>
	);
}

export default App;
