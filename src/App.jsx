import { ThemeProvider } from 'theming';
import { Layout } from './components';

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
		<ThemeProvider theme={theme}>
			<Layout>
				Routing
			</Layout>
		</ThemeProvider>
	);
}

export default App;
