import logo from './logo.svg';
import './App.css';
import './componet/task1/hello.css'
import My from './componet/task1/hello'
import Fo from './componet/task1/form'
import Hello from './componet/task1/world'
import Card from './componet/task1/card';
import 'bootstrap/dist/css/bootstrap.css';
import  'bootstrap/dist/js/bootstrap'
import League from './componet/task1/league'
import Social from './componet/task1/social';
import Menu from './componet/task1/menu';
import Login from './componet/task1/login/login'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Noti from './componet/task1/notifi'
import Tech from './componet/task1/technology/tech'
import Count, { Counter } from './componet/task1/Hooks/hook'
import veg,{Fruit} from './componet/task1/fruit/fruit'
import Foot, { Back } from './componet/task1/feedback/feed'
import Feet, { Result } from './componet/task1/feedback/Result'


function App() {
  return (
         <>
         {/* <Counter/> */}
         {/* <Fruit/> */}
         {/* <Feed/>
         <Result/> */}
       <BrowserRouter>
         <Routes>
            <Route path='/' element={[<Menu/>,<Hello/>]}/>
            <Route path='/card' element={[<Menu/>,<Card/>]}/>
            <Route path='/League' element={[<Menu/>,<League/>]}/>
            <Route path='/social' element={[<Menu/>,<Social/>]}/>
            <Route path='/Noti'  element={[<Menu/>,<Noti/>]}/>
            <Route path= '/Login' element={[<Menu/>,<Login/>]}/> 
             <Route path='/Tech'   element={[<Menu/>,<Tech/>]}/>
            <Route path='/Back'   element={[<Menu/>,<Back/>]}/>
            <Route path='/Result'   element={[<Menu/>,<Result/>]}/>
            <Route path='/Fruit'   element={[<Menu/>,<Fruit/>]}/>
          
         </Routes>
  
         </BrowserRouter>      





         </>
         
  );
}

export default App;
