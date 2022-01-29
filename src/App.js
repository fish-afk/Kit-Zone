import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

const foo = (state) => {
  return state + 1;
}
function App() {
  return (
    <div className="App">
      <div className='feed1'>
      <button className='btn btn-primary buttons-group'>button</button>
      <h1 className='badge badge-primary'>hello there!</h1>
      <button>kjshfjhsf</button>
      <h1>{foo(2)}</h1>
      </div>
    </div>
  );
}



export default App;
