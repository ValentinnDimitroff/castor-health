import { ThemeProvider } from 'react-jss'
import { BrowserRouter as Router } from "react-router-dom"
import { Layout } from './components'
import { theme } from './theme'
import Routes from './Routes'

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Layout>
					<Routes />
				</Layout>
			</ThemeProvider>
		</Router>
	);
}

export default App;
