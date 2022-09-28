
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Homepage from './pages/index';
import Om from './pages/about';
import Feilside from './pages/404';
import Login from './pages/Login';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Homepage />}> 
//         <Route path="/About" element={<About />} />  
        
//         </Route>
          
      
//       </Routes>
//     </BrowserRouter>
//   );
// }

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
//export default App;


function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/om" element={<Om/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Feilside/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;