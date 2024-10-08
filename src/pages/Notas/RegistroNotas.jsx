import React from 'react'

const RegistroNotas = () => {
  return (
    <>
    <div id="cntInformation"
    className="bg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
    <main className="flex-1 p-8 md:flex-row">
      <section className="bg-gris2 p-8 w-full h-auto md:h-[750px] rounded-lg shadow-lg   size-full">
        <img alt="Logo" className="h-10" height="50" src="/public/images/logo.png" width="size-full" />

        <div className="flex justify-end py-4 space-x-4">
          <i className="fas fa-user-circle text-2xl text-gray-700">
          </i>
          <i className="fas fa-bell text-2xl text-gray-700">
          </i>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Registro de notas
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
            CREAR NUEVA NOTA
          </button>
        </div>

        <div className="bg-white p-4 rounded-3xl  shadow-inner">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <input className="p-2 border rounded-md md:w-auto shadow-sm" placeholder="Buscar notas" type="text" />
            <button className="p-2 bg-purple-500 text-white rounded-md shadow-md">
              <i className="fas fa-filter">
              </i>
            </button>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 text-center p-2 bg-white ">
            <div className="bg-gris2 p-4 rounded-2xl shadow-md ">
              Nota 1
            </div>
            <div className="bg-gris2 p-4 rounded-2xl shadow-md">
              Nota 2
            </div>
            <div className="bg-gris2 p-4 rounded-2xl shadow-md">
              Nota 3
            </div>
            <div className="bg-gris2 p-4 rounded-2xl shadow-md">
              Nota 4
            </div>
            <div className="bg-gris2 p-4 rounded-2xl shadow-md">
              Nota 5
            </div>
            <div className="bg-gris2 p-4 rounded-2xl shadow-md">
              Nota 6
            </div>
            <div className="bg-gris2 p-4 rounded-2xl shadow-md">
              Nota 7
            </div>
            <div className="bg-gris2 p-4 rounded-2xl shadow-md">
              Nota 8
            </div>
            <div className="bg-gris2 p-4 rounded-2xl shadow-md">
              Nota 9
            </div>
            <div className="bg-gris2 p-4 rounded-2xl shadow-md">
              Nota 10
            </div>
          </section>
        </div>
      </section>
    </main>


  </div>
    </>
  )
}

export default RegistroNotas