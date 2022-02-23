import App from './App.js';
import Profile from './Profile.js';
import FindRandomFriend from './FindRandomFriend.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function Router(){
    return(
    <BrowserRouter>    
        <Routes>
            <Route path="/" element={ <App /> } />
            <Route path="/profile" element={ <Profile/> } />
            <Route path="/findrandomfriend" element={ <FindRandomFriend/> } />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;