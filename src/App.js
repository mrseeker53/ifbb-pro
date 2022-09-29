import './App.css';
import Activity from './components/Activity/Activity';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div>
      <Header></Header>
      <Activity></Activity>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
