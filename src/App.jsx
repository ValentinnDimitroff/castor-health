import { ThemeProvider } from 'react-jss'
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from './components';
import Routes from './Routes';

const theme = {
	colors: {
		primary: {
			light: '#5FAFFF',
			main: '#3779ED',
			dark: '#3070CE',
		},
		error: {
			light: '#FF8080',
			main: '#DC143C',
			dark: '#BB022E',
		},
		success: {
			light: '#A5FFC6',
			main: '#2CD06C',
			dark: '#28BC5F',
		}
	},
	font: {
		heading: {
			// TODO
		}
	},
	spacing: (val) => `${val * 8}px`
}

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
