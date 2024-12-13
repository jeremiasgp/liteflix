import './App.css'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Layout from './components/Layout/Layout';
import Movies from './components/Movies/Movies';
import { LiteflixProvider } from './context/context';

function App() {
  return <LiteflixProvider>
    <Layout>
      <div className="App__main-wrapper">
        <div className="App__main-content">
          <FeaturedMovie />
          <Movies />
        </div>
      </div>
    </Layout>
  </LiteflixProvider>
}

export default App;
