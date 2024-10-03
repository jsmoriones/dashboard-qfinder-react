import BarChart from "./graphics/Bar"
import LineChart from "./graphics/Line"

const Home = () => {
  return (
    <section className="bg-white60opac px-10 py-8 basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
      <div className="top flex md:space-x-12 items-center justify-between flex-wrap md:flex-nowrap flex-row-reverse md:flex-row gap-y-9 md:gap-y-0">
        <figure>
          <img src="/images/logo.png" alt="Logo de la Empresa" />
        </figure>
        <div className="bg-white py-4 px-5 rounded-lg shadow-[0_0_9px_0px_#17007329] flex justify-between items-center space-x-5 w-full md:w-auto">
          <figure>
            <img src="/images/abuelos.png" alt="Abuelos" />
          </figure>
          <p className="text-moradoOscuro font-bold">Cuidado compasivo y profesional para el bienestar de tu familiar
            
          </p>

          <button className="bg-rosaPastelOpac p-1 px-7 py-1 text-white shadow-[0_0_14px_2px_#D8D2FCA3] rounded-3xl">Actualizar</button>
        </div>

        <div className="flex gap-x-3 -order-1 md:order-2">
          <a href="#" className="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
            <i className="fa-regular fa-user text-xl"></i>
          </a>
          <a href="#" className="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
            <i className="fa-regular fa-bell text-xl"></i>
          </a>
        </div>
      </div>

      <h3 className="text-3xl md:text-4xl font-bold text-moradoOscuro mt-4">Panel</h3>

      <div className="flex justify-center xl:justify-between items-stretch flex-wrap xl:flex-nowrap space-x-2 space-y-2 xl:space-x-6 mt-8">
        <div className="grid grid-cols-3 w-full md:w-[48.5%] grid-rows-2 items-center bg-white rounded-[40px] xl:rounded-full py-2 px-4 xl:py-4 xl:px-6 shadow-[0_0_14px_2px_#D8D2FCA3] xl:flex-1">
          <figure className="row-span-2 inline col-span-1">
            <img src="/images/hospitaly.png" alt="ilustracion de un hospital" />
          </figure>
          <p className="text-7B7B7B font-light text-lg col-span-2">250</p>
          <p className="font-bold text-moradoOscuro text-lg col-span-2">Servicios Blindados</p>
        </div>

        <div className="grid grid-cols-3 w-full md:w-[48.5%] grid-rows-2 items-center bg-white rounded-[40px] xl:rounded-full py-2 px-4 xl:py-4 xl:px-6 shadow-[0_0_14px_2px_#D8D2FCA3] xl:flex-1">
          <figure className="row-span-2 inline col-span-1">
            <img src="/images/secret.png" alt="ilustracion de un hospital" />
          </figure>
          <p className="text-7B7B7B font-light text-lg col-span-2">70</p>
          <p className="font-bold text-moradoOscuro text-lg col-span-2">Personal Activo</p>
        </div>

        <div className="grid grid-cols-3 w-full md:w-[48.5%] grid-rows-2 items-center bg-white rounded-[40px] xl:rounded-full py-2 px-4 xl:py-4 xl:px-6 shadow-[0_0_14px_2px_#D8D2FCA3] xl:flex-1">
          <figure className="row-span-2 inline col-span-1">
            <img src="/images/temperature.png" alt="ilustracion de un hospital" />
          </figure>
          <p className="text-7B7B7B font-light text-lg col-span-2">300</p>
          <p className="font-bold text-moradoOscuro text-lg col-span-2">Nuevos Pacientes Hoy</p>
        </div>

        <div className="grid grid-cols-3 w-full md:w-[48.5%] grid-rows-2 items-center bg-white rounded-[40px] xl:rounded-full py-2 px-4 xl:py-4 xl:px-6 shadow-[0_0_14px_2px_#D8D2FCA3] xl:flex-1">
          <figure className="row-span-2 inline col-span-1">
            <img src="/images/temperature.png" alt="ilustracion de un hospital" />
          </figure>
          <p className="text-7B7B7B font-light text-lg col-span-2">52</p>
          <p className="font-bold text-moradoOscuro text-lg col-span-2">Pacientes Registrados</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-y-6">
        <div className="w-full flex flex-wrap xl:flex-nowrap xl:gap-x-10 gap-y-5 xl:gap-y-0">

          <div id="contenedor-canvas1" className="bg-white shadow-[0_0_5px_2px_#D8D2FCA3] rounded-3xl px-6 py-5 w-full xl:w-3/6 ">
            <p className="font-bold text-moradoOscuro text-xl">Encuesta Familiar-Acudiente</p>
            <LineChart />
          </div>
          <div id="contenedor-canvas2" className="bg-white shadow-[0_0_5px_2px_#D8D2FCA3] rounded-3xl px-6 py-5 w-full xl:w-3/6 ">
            <p className="font-bold text-moradoOscuro text-xl">Informe de Enfermedades Comunes</p>
            <BarChart />
          </div>
        </div>
        <div className="w-full flex flex-wrap xl:flex-nowrap xl:gap-x-10 gap-y-6 xl:gap-y-0">

          <div className="bg-white shadow-[0_0_5px_2px_#D8D2FCA3] rounded-3xl px-6 py-5 w-full xl:w-4/6">
            <p className="font-bold text-moradoOscuro text-xl mb-8">Turnos Reservados</p>
            


            <table className="w-full">
              <thead className="bg-blancoAzul">
                <tr className="text-left">
                  <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Date</th>
                  <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Doctor</th>
                  <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Treatment</th>
                  <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Charges</th>
                  <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-blancoAzul border-b-2">
                  <td className="py-4 text-center">12 Jan 2022</td>
                  <td className="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                  <td className="py-4 text-center">
                    <a href="#" className="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                  </td>
                  <td className="py-4 text-center">$145</td>
                  <td className="py-4 flex gap-x-5 justify-center">
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </a>
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                      <i className="fa-solid fa-trash-can"></i>
                    </a>
                  </td>
                </tr>
                <tr className="border-blancoAzul border-b-2">
                  <td className="py-4 text-center">12 Jan 2022</td>
                  <td className="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                  <td className="py-4 text-center">
                    <a href="#" className="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                  </td>
                  <td className="py-4 text-center">$145</td>
                  <td className="py-4 flex gap-x-5 justify-center">
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </a>
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                      <i className="fa-solid fa-trash-can"></i>
                    </a>
                  </td>
                </tr>
                <tr className="border-blancoAzul border-b-2">
                  <td className="py-4 text-center">12 Jan 2022</td>
                  <td className="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                  <td className="py-4 text-center">
                    <a href="#" className="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                  </td>
                  <td className="py-4 text-center">$145</td>
                  <td className="py-4 flex gap-x-5 justify-center">
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </a>
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                      <i className="fa-solid fa-trash-can"></i>
                    </a>
                  </td>
                </tr>
                <tr className="border-blancoAzul border-b-2">
                  <td className="py-4 text-center">12 Jan 2022</td>
                  <td className="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                  <td className="py-4 text-center">
                    <a href="#" className="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                  </td>
                  <td className="py-4 text-center">$145</td>
                  <td className="py-4 flex gap-x-5 justify-center">
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </a>
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                      <i className="fa-solid fa-trash-can"></i>
                    </a>
                  </td>
                </tr>
                <tr className="border-blancoAzul border-b-2">
                  <td className="py-4 text-center">12 Jan 2022</td>
                  <td className="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                  <td className="py-4 text-center">
                    <a href="#" className="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                  </td>
                  <td className="py-4 text-center">$145</td>
                  <td className="py-4 flex gap-x-5 justify-center">
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </a>
                    <a href="#" className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                      <i className="fa-solid fa-trash-can"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white shadow-[0_0_5px_2px_#D8D2FCA3] rounded-3xl px-6 py-5 w-full xl:w-2/6">
            <p className="font-bold text-moradoOscuro text-xl mb-8">Personal</p>

            <table className="w-full">
              <thead className="bg-blancoAzul">
                <tr className="text-left">
                  <th scope="col" className="py-2 px-5 font-normal text-lg text-moradoOscuro text-center">#</th>
                  <th scope="col" className="py-2 px-5 font-normal text-lg text-moradoOscuro text-center">Nombre-Auxiliar</th>
                  <th scope="col" className="py-2 px-5 font-normal text-lg text-moradoOscuro text-center">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-blancoAzul border-b-2">
                  <td className="py-4 text-center font-extrabold text-2xl">2</td>
                  <td className="py-4 text-blue-400 font-semibold text-center flex items-center">
                    <figure className="mr-5">
                      <img src="/images/avatar-women.png" width="50" alt="Illustracion del Auxiliar" />
                    </figure>
                    <span className="text-[#3F779B] font-bold text-lg">Dr. Jacob Ryan</span>
                  </td>
                  <td className="py-4 text-center">
                    <a href="#" className="p-1 rounded-md bg-[#79CFA6] shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all text-white">
                      Activo
                    </a>
                  </td>
                </tr>
                <tr className="border-blancoAzul border-b-2">
                  <td className="py-4 text-center font-extrabold text-2xl">3</td>
                  <td className="py-4 text-blue-400 font-semibold text-center flex items-center">
                    <figure className="mr-5">
                      <img src="/images/avatar-women.png" width="50" alt="Illustracion del Auxiliar" />
                    </figure>
                    <span className="text-[#3F779B] font-bold text-lg">Dr. Jacob Ryan</span>
                  </td>
                  <td className="py-4 text-center">
                    <a href="#" className="p-1 rounded-md bg-[#79CFA6] shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all text-white">
                      Activo
                    </a>
                  </td>
                </tr>
                <tr className="border-blancoAzul border-b-2">
                  <td className="py-4 text-center font-extrabold text-2xl">4</td>
                  <td className="py-4 text-blue-400 font-semibold text-center flex items-center">
                    <figure className="mr-5">
                      <img src="/images/avatar-women.png" width="50" alt="Illustracion del Auxiliar" />
                    </figure>
                    <span className="text-[#3F779B] font-bold text-lg">Dr. Jacob Ryan</span>
                  </td>
                  <td className="py-4 text-center">
                    <a href="#" className="p-1 rounded-md bg-[#79CFA6] shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all text-white">
                      Activo
                    </a>
                  </td>
                </tr>
                <tr className="border-blancoAzul border-b-2">
                  <td className="py-4 text-center font-extrabold text-2xl">5</td>
                  <td className="py-4 text-blue-400 font-semibold text-center flex items-center">
                    <figure className="mr-5">
                      <img src="/images/avatar-women.png" width="50" alt="Illustracion del Auxiliar" />
                    </figure>
                    <span className="text-[#3F779B] font-bold text-lg">Dr. Jacob Ryan</span>
                  </td>
                  <td className="py-4 text-center">
                    <a href="#" className="p-1 rounded-md bg-[#79CFA6] shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all text-white">
                      Activo
                    </a>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home