// import './App.scss';

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span className="text-primary">Home</span>
        <span className="">TV Shows</span>
        <span className="">Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
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
    </>
  );
}

export default App;
