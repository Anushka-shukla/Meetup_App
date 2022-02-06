import { Routes, Route } from "react-router-dom";
import AllMeetUpsPage from './pages/AllMeetUps'
import FavouritesPage from './pages/Favourites';
import NewMeetUpsPage from './pages/NewMeetUps';
// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {


  return (
    <Layout>
      {/* <MainNavigation/> */}
  
      <Routes>

        <Route path='/' exact element={<AllMeetUpsPage />} />


        <Route path='/new-meetup' element={<NewMeetUpsPage />} />


        <Route path='/favourites' element={<FavouritesPage />} />

      </Routes>

    </Layout >
  );
}

export default App;

