import "swiper/scss";

import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
import { Outlet } from "react-router-dom";
import Banner from "./components/banner/Banner";
import MoviePage from "./page/MoviePage";
import MovieDetailPage from "./page/MovieDetailPage";
import NotFoundPage from "./page/NotFoundPage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route path="/movies/:movieID" element={<MovieDetailPage></MovieDetailPage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
