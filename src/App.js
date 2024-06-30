// import './App.scss';

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span className="text-primary">Home</span>
        <span className="">TV Shows</span>
        <span className="">Movies</span>
      </header>
      <section className="banner h-[480px] page-container mb-10">
        <div className="w-full h-full rounded-lg relative">
          <img className="w-full h-full object-cover rounded-lg" alt="" src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/fsmsy/2019_04_27/avengersendgamepostercloseup.jpg.webp"></img>
          <div className="absolute left-5 bottom-5">
            <h2 className="text-white font-bold text-3xl mb-3">Avengers: End game</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md text-white">Aventure</span>
              <span className="py-2 px-4 border border-white rounded-md text-white">Action</span>
              <span className="py-2 px-4 border border-white rounded-md text-white">Aventure</span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white">Watch now</button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize text-white font-bold text-xl mb-4">Now playing</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg bg-slate-800 p-4">
            <img className="w-full h-[250px] object-cover rounded-lg mb-3" src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/fsmsy/2019_04_27/avengersendgamepostercloseup.jpg.webp" alt=""></img>
            <h3 className="text-white font-bold text-xl mb-2">Spiderman: Home coming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 text-white mb-3">
              <span>2017</span>
              <span>4.5</span>
              </div>
              <button className="text-white bg-primary w-full font-bold rounded-lg p-3">Watch now</button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize text-white font-bold text-xl mb-4">Top rated</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg bg-slate-800 p-4">
            <img className="w-full h-[250px] object-cover rounded-lg mb-3" src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/fsmsy/2019_04_27/avengersendgamepostercloseup.jpg.webp" alt=""></img>
            <h3 className="text-white font-bold text-xl mb-2">Spiderman: Home coming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 text-white mb-3">
              <span>2017</span>
              <span>4.5</span>
              </div>
              <button className="text-white bg-primary w-full font-bold rounded-lg p-3">Watch now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
