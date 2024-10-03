import React from 'react'

const Configuracion = () => {

    function desplegable() {
        const opciones = document.getElementById('opciones');
        // Toggle the visibility of the options div
        if (opciones.classList.contains('hidden')) {
            opciones.classList.remove('hidden');
        } else {
            opciones.classList.add('hidden');
        }
    }

    function desplegable2() {
        const opciones2 = document.getElementById('opciones2');
        // Toggle the visibility of the options div
        if (opciones2.classList.contains('hidden')) {
            opciones2.classList.remove('hidden');
        } else {
            opciones2.classList.add('hidden');
        }
    }

  return (
    <div id="cntInformation"
    className="bg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 transition-all xl:basis-[88%] w-[1236px] h-[921px]">
    <div id="container1">

      <div className="my-[31px] mx-[49px]"><img src="/images/logo.png" /></div>
      <div className="mx-[57px] "><img src="public/images/Group 85.png" alt="" /></div>

      <div className="bg-white  w-[1600px] h-[690px] mx-auto my-[16px] rounded-[46px] flex flex-col" data-id="menu">



        <button onClick={() => desplegable()}
          className="bg-white border shadow-lg flex justify-between w-[1510px] h-[81px] items-center content-center rounded-[47px] p-10 m-auto mt-5">
          <h1 className="text-[24px]">Notificaciones</h1>
          <i className="fa-solid fa-caret-down text-3xl transition-transform" id=""></i>
        </button>

        <div id="opciones" className="text-gray-950 flex-col hidden space-y-4 mt-4 p-4">

          <a href="#"
            className="bg-white border shadow-lg flex justify-between w-[1210px] h-[81px] items-center content-center rounded-[47px] p-10 ml-[330px]">
            <h1 className="text-[24px]">Permitir Notificaciones</h1>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div
                className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
              </div>
            </label>
          </a>

          <button onClick={() => desplegable2()}
            className="bg-white border shadow-lg flex justify-between w-[1210px] h-[81px] items-center content-center rounded-[47px] p-10 ml-[330px]">
            <h1 className="text-[24px]">Recibir Notificaciones</h1>
            <i className="fa-solid fa-caret-down text-3xl transition-transform"></i>
          </button>

          <div id="opciones2" className="text-gray-950 flex-col hidden space-y-4 mt-4 p-4">

            <a href="#"
              className="bg-white border shadow-lg flex justify-between w-[1110px] h-[81px] items-center content-center rounded-[47px] p-10 ml-[410px]">
              <h1 className="text-[24px]">Correo Electronico</h1>
            </a>

            <a href="#"
              className="bg-white border shadow-lg flex justify-between w-[1110px] h-[81px] items-center content-center rounded-[47px] p-10 ml-[410px]">
              <h1 className="text-[24px]">SMS</h1>
            </a>
          </div>
        </div>



        <button onClick="privacidad()"
          className="link_parent bg-white border shadow-lg flex justify-between w-[1510px] h-[81px] items-center content-center rounded-[47px] p-10 m-auto mt-1">
          <h1 className="text-[24px]">privacidad</h1>
          <i className="fa-solid fa-caret-down text-3xl transition-transform"></i>
        </button>

        <button onClick="accesibilidad()"
          className="link_parent bg-white border shadow-lg flex justify-between w-[1510px] h-[81px] items-center content-center rounded-[47px] p-10 m-auto mt-1">
          <h1 className="text-[24px]">Accesibilidad</h1>
          <i className="fa-solid fa-caret-down text-3xl transition-transform"></i>
        </button>

        <button onClick="terminos()"
          className="link_parent bg-white border shadow-lg flex justify-between w-[1510px] h-[81px] items-center content-center rounded-[47px] p-10 m-auto mt-1">
          <h1 className="text-[24px]">Terminos y Condiciones</h1>
          <i className="fa-solid fa-caret-down text-3xl transition-transform"></i>
        </button>
        <button onClick="ayuda()"
          className="link_parent bg-white border shadow-lg flex justify-between w-[1510px] h-[81px] items-center content-center rounded-[47px] p-10 m-auto mt-1">
          <h1 className="text-[24px]">Ayuda y Soporte</h1>
          <i className="fa-solid fa-caret-down text-3xl transition-transform"></i>
        </button>


      </div>
    </div>
  </div>
  )
}

export default Configuracion