
import Nav_bar from './Components/Nav_bar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Home/Main';
import Categories from './Components/Categories/Categories';
import Images from './Components/Images/Images';
import { useState } from 'react';


function App() {

  const [results, setResults] = useState([]);
  return (
    <div className="App">

      <Nav_bar setData={setResults} />
      <div>hello</div>
      <Categories />
      <Main setData={setResults} />
      {/* <div className="row pb-5"> */}
      {/* <div className="row   pb-5"> */}
        <Images Data={results} />
      {/* </div> */}


    </div>
  );
}

export default App;
