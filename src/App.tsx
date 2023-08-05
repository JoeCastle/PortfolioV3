import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from './components/Layout';
import { RouteContainer } from './RouteContainer';
import { BrowserRouter } from 'react-router-dom';

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
