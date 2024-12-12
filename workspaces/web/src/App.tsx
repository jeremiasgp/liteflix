import './App.css'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Layout from './components/Layout/Layout';
import Movies from './components/Movies/Movies';

function App() {
  
  const bgImage = 'https://image.tmdb.org/t/p/original/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg';

  if(false) {
    return <Layout><div className='flex items-center justify-center text-white text-4'>LOADING</div></Layout>;
  }

  return <Layout bgImage={bgImage}>
    <div className="App__main-wrapper">
      <div className="App__main-content">
        <FeaturedMovie />
        <Movies />
      </div>
    </div>
  </Layout>
}

export default App;
