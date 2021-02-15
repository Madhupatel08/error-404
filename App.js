import logo from ' ./logo.svg';
import Error from " ./Error";
import './App.css';
import Navbar from  " ./Navbar";
function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route component = {Error}/>
    </Switch>
    </>
  );
};

export default App;
