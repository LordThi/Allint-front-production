// == Import
import reactLogo from './react-logo.svg';
import './styles.css';


// Components

import Home from 'src/components/Home';
import Product from 'src/components/Product';
import Search from 'src/components/Search';
import Results from 'src/components/Results';
import Header from '../Header';
import Footer from '../Footer';
import Error from '../Error'; 
import ProfileForm from '../ProfileForm';
import LoginForm from '../LoginForm';

      

// == App
function App() {
  return (
    <div className="app">
      
      <Header />
      <Search />
      <Results />
      <Product />
      <Footer /> 
      <LoginForm />
      <ProfileForm />


  </div>
)
  };

// == Export
export default App;
