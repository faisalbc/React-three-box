import React, { Component} from 'react'; // 
import Box from './components/box'; // to call editable javascript 
import './index.css';

class App extends Component {
    render() {              //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return ( 
            <div className="container">
                <Box name='Faisal' age='28' />
                <Box name='Robin' age='35' />
                <Box name='Rakib' age='15' />
                
            </div>
         );
    }
}
 
export default App;