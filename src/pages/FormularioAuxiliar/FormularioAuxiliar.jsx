import React from 'react'

const FormularioAuxiliar = () => {
  return (
    <>
        <div className="bg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]"
        >
            <div className="pt-5 mx-8">
        <div className="flex flex-col md:flex-row justify-between mb-[50px] gap-y-5">
          <p className="text-3xl text-center font-bold">QfindeR</p>
          <div className="flex gap-x-3 self-end">
            <a href="#" className="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
              <i className="fa-regular fa-user text-xl"></i>
            </a>
            <a href="#" className="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
              <i className="fa-regular fa-bell text-xl"></i>
            </a>
          </div>
        </div>
        <div className="flex gap-3 mb-5">
          <p className="text-3xl md:text-4xl font-bold">Turnos Auxiliar</p>
        </div>
      </div>

      <div className="bg-white p-5 mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
        <div className="flex justify-between mb-14">
          <p className="text-xl md:text-2xl text-moradoOscuro font-bold">Agregar Información del Paciente</p>

          <a href="#" className="py-2 px-4 bg-rosa text-white font-bold text-md rounded-md">Lista de Pacientes</a>
        </div>

        <div className="flex flex-col md:space-y-7">
          <div className="flex md:space-x-7 flex-wrap md:flex-nowrap gap-y-5 md:space-y-0">
            <div className="w-full md:w-1/2">
              <div className="relative z-0">
                <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Primero *</label>
              </div>          
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative z-0">
                  <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Segundo *</label>
                </div>
            </div>
          </div>

          <div className="flex md:space-x-7 flex-wrap md:flex-nowrap">
            <div className="w-full md:w-3/6">
              <div className="relative z-0 mt-5 md:mt-0">
                  <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Tercero *</label>
                </div>
            </div>
            <div className="w-full md:w-3/6 flex md:space-x-7 flex-wrap md:flex-nowrap space-y-5 md:space-y-0">
              <div className="w-full md:w-1/2  mt-4 md:mt-0">
                <div className="relative z-0">
                  <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Cuarto *</label>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative z-0">
                  <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Quinto *</label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap md:space-x-7 space-y-5 md:space-y-0">
            <div className="w-full md:w-1/3 mt-5 md:mt-0">
              <div className="relative z-0">
                  <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Sesto *</label>
                </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="relative z-0">
                  <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Septimo *</label>
                </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="relative z-0">
                  <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Octavo *</label>
                </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="relative z-0">
                  <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Noveno *</label>
                </div>
            </div>
          </div>

          <div className="w-full mb-16 mt-5 md:mt-0">
            <div className="relative z-0">
              <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
              <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Decimo *</label>
            </div>
          </div>

          <div className="flex justify-center space-x-20">
            <a href="#" className="py-2 px-4 bg-[#79CFA6] text-white font-bold text-md rounded-md">Subir Hoja de Vida</a>
            <a href="#" className="py-2 px-4 bg-[#CA79C6] text-white font-bold text-md rounded-md">Subir Hoja de Vida</a>
          </div>
        </div>
      </div>
        </div>
    </>
  )
}

export default FormularioAuxiliar