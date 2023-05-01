<section className="w-full h-screen bg-center bg-cover bg-rain">
      <div className="flex flex-col">
        <div className="flex justify-center px-8 py-8">
            <input type="text" className="rounded-3xl p-4 focus:outline-none" value={location} onKeyPress={searchLocation} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' />
        </div>

      {/* {data.name != undefined &&  */}
        <div className="space-y-4">
          <div className="flex flex-row justify-center text-left">
          {/* <p className="text-2xl font-normal text-left w-48">{data.name}</p> */}
          <p className="text-2xl font-normal text-left w-48">İzmir</p>
          </div>
          <div className="flex flex-row justify-center text-left">
            {/* {data.main ? <img src={iconUrlFromCode(data.weather[0].icon)} alt="" className="w-40" /> : null} */}
            {/* { data.main ? <p className="text-9xl font-semibold">{data.main.temp.toFixed()}°C</p> : null} */}
            <img src="https://placehold.co/100x100" alt="" className="w-20" />
            <p className="text-7xl font-bold">15°C</p>
          </div>
        </div>
      {/* } */}

        <div className="flex">
          {/* { data.main ? <span className="-rotate-90 text-2xl font-bold ">{ data.weather[0].main }</span> : null } */}
          <span className="-rotate-90 text-2xl font-bold ">Bulutlu</span>
        </div>

      {/* {data.main != undefined &&  */}
      <div>
        <div className="flex flex-row justify-center items-center absolute bottom-4 inset-x-0">
        <div className="flex flex-row space-x-10 py-6 px-6 justify-center bg-white rounded-xl bg-opacity-40">
            <div className="flex flex-col items-center">
              {data.main ? <p className="font-semibold text-xl">{data.main.feels_like.toFixed()} C°</p> : null }
              <p className="text-2xl font-semibold text-center ">Hissedilen</p>
            </div>
            <div className="flex flex-col items-center">
              {data.main ? <p className="font-semibold text-xl">{data.main.humidity} %</p> : null }
              <p className="text-2xl font-semibold text-center ">Nem</p>
            </div>
            <div className="flex flex-col items-center">
              {data.main ? <p className="font-semibold text-xl">{data.wind.speed.toFixed()}h/km</p> : null }
              <p className="text-2xl font-semibold text-center ">Rüzgar</p>
            </div>
        </div>
        </div>
      </div>
      {/* }  */}
      </div>
    </section>