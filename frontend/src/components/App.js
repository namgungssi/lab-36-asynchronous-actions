import '../style/main.scss';
import React from 'react';
import {Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Uniforms from './Uniform/Uniform'



class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header appTitle="Inventory" />
          <main>
            <Route exact path='/' component={Costumes} />
          </main>

          <Footer>
            <p>Code Fellows 401 2018</p>
          </Footer>
      </div>
    )
  }
}



export default App;
