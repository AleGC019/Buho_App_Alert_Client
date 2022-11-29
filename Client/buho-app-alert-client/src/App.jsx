import classes from './App.module.scss';


import Header2 from './components/Header_page/Header_page';
import Footer from './components/Footer/Footer';

import Welcome from './components/Welcome/Welcome';
import Aboutus from './components/Aboutus/Aboutus';
import User_profile from './components/User_profile/User_profile';
import Maps from './components/Maps/Maps';
import Feed_v2 from './views/FeedView/FeedView';
import NotFoundView_v2 from './views/NotFoundView_v2/NotFoundView_v2';
import AuthView from './views/AuthView/AuthView';
import ContactUs from './components/ContactUs/ContactUs';

import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className = {classes["App"]}>

      <Header2/>


      <main className = {classes["App"]}>

        <Routes>

          <Route index element={<Welcome/>}/>
          <Route path="Feed" element={<Feed_v2/>}/>
          <Route path="aboutus" element={<Aboutus/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
          <Route path="user_profile" element={<User_profile/>}/>
          <Route path="maps" element={<Maps/>}/>
          <Route path="*" element={<NotFoundView_v2/>}/>


          <Route path="auth/*" element={ <AuthView/> }/>


        </Routes>
      </main>

     
      <Footer/>

    </div>
  )
}

export default App;
