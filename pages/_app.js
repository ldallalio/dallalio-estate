import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import {SearchProvider} from '../context/SearchContext'

function MyApp({ Component, pageProps }) {
	return <SearchProvider>
		<Component {...pageProps} />;
	</SearchProvider>
}

export default MyApp;
