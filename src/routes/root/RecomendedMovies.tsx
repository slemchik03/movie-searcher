const RecomendedMovies = () => {
  return (
    <div className="grid grid-flow-row text-white pt-10">
      <h2 className="text-[24px] xl:text-[32px]">Explore new movies</h2>
      <p className="pb-6 text-[#868686]">What are you gonna see today?</p>
      <div className="relative h-[400px] max-w-[1170px] grid grid-flow-row justify-start items-end">
        <div className="absolute w-full h-full top-0 left-0">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/movie.png"
          />
        </div>
        <div className="z-10 pl-4 py-4 md:pl-8 md:py-6 xl:max-w-[550px]">
          <h1 className="text-[26px] xl:text-[36px] pb-4">Weather With You</h1>
          <p className="text-[14px] md:text-[16px]">
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis.
          </p>
        </div>
        {/* Black image filter */}
        <div className="absolute w-full h-full top-0 left-0 bg-black z-5 bg-opacity-50 rounded-3xl"></div>
      </div>
    </div>
  );
};

export default RecomendedMovies;
