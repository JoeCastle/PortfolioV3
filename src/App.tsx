import { Layout } from './components/Layout';
import { RouteContainer } from './RouteContainer';
import { BrowserRouter } from 'react-router-dom';

/**
 * Root application component.
 * @returns The top-level layout and router container.
 */
function App() {
    return (
        <Layout>
            <BrowserRouter>
                <RouteContainer />
            </BrowserRouter>
        </Layout>
    );
}

export default App;
