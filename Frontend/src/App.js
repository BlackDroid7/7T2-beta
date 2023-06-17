import AddMeetup from "./pages/AddMeetup";
import FavouritesPage from "./pages/Favourites";
import AllMeetupPage from "./pages/MeetupsAll";
import { Route, Routes } from "react-router-dom";
import ReportsPage from "./pages/Reports";
import MainLayout from "./components/layouts/MainLayout";
const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<AllMeetupPage />}></Route>
        <Route path="/addmeetup" element={<AddMeetup />}></Route>
        <Route path="/favourites" element={<FavouritesPage />}></Route>
        <Route path="/reports" element={<ReportsPage />}></Route>
      </Routes>
    </MainLayout>
  );
};

export default App;
