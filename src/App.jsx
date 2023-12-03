import './app.scss'
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Test from './test';


const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'>Parallax</section>
    <section>Service</section>
    <section id='Portfolio'>Parallax</section>
    <section>Portfolio1</section>
    <section  id='About'>Portfoloio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>contact</section>
  

  </div>;
};

export default App;