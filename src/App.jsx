import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Jumbotron from './components/Jumbotron.jsx';

function App() {

  const listaDeTextos = [
    { id: 1, texto: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur" },
    { id: 2, texto: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 3, texto: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur" },
    { id: 4, texto: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
  ];


  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row justify-content-center mb3'>
          <Jumbotron />
        </div>
        <div className='row '>
          {listaDeTextos.map((item) => (
            <div className='col-12 col-md-6 col-lg-3' key={item.id}>
              <Card Texto={item.texto} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
