
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Wrestlings from './components/Wrestlings/Wrestlings';

function App() {
  return (
    <div>
      <Header></Header>
      <Wrestlings></Wrestlings>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;
