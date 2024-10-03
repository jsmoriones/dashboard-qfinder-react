import React from 'react'

const TurnosAuxiliar = () => {
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
            <div className="bg-white p-5 mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]p-3">

            <div className="flex justify-end items-center mb-6 gap-x-6">
                <p className="text-lg text-moradoOscuro">Buscar Por:</p>
                <form>
                <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:bg-white dark:text-moradoOscuro dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none min-w-72">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                </form>
                <button className="bg-rosaPastelOpac rounded p-1 px-2 shadow-lg">
                <i className='fas fa-filter text-white'></i>
                </button>
            </div>
            <div className="relative overflow-x-auto">
            <table className="tabla-responsive w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-moradoOscuro uppercase bg-azulMasClaro">
                    <tr>
                    <th></th>
                    <th scope="col" className="px-6 py-2">
                        Fecha
                    </th>
                    <th scope="col" className="px-6 py-2">
                        <a href="#">
                        Auxiliar
                        <i className="fas fa-arrow-down ml-3"></i>
                        </a>
                    </th>
                    <th scope="col" className="px-6 py-2">
                        <a href="#">
                        Paciente
                        <i className="fas fa-arrow-down ml-3"></i>
                        </a>
                    </th>
                    <th scope="col" className="px-6 py-2">
                        <a href="#">
                        Encargado/a
                        <i className="fas fa-arrow-down ml-3"></i>
                        </a>
                    </th>
                    <th scope="col" className="px-6 py-2">
                        <a href="#">
                        Hora-inicio
                        <i className="fas fa-arrow-down ml-3"></i>
                        </a>
                    </th>
                    <th scope="col" className="px-6 py-2">
                        <a href="#">
                        Hora-Salida
                        </a>
                    </th>
                    <th>

                    </th>
                    </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:border-azulMasClaro text-lg">
                    <th scope="row" className="px-6 py-4 font-medium">
                        <div className="flex items-center">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600" />
                        </div>
                    </th>
                    <td title="Fecha" className="px-3 py-2">
                        <p className="text-moradoOscuro font-medium">12 Jun 2024</p>
                    </td>
                    <td title="Auxiliar">
                        <p className="px-3 py-2 font-medium text-azulMarFondo whitespace-nowrap">Daniel Mendez</p>
                    </td>
                    <td title="Paciente" className="px-3 py-2">
                        <p className="bg-rosa text-white text-[16px] text-center inline p-1 rounded">Will Robert</p>
                    </td>
                    <td title="Encargado/a" className="px-3 py-2 text-moradoOscuro font-medium">
                        Enfermero 1
                    </td>
                    <td title="Hora/Inicio" className="px-3 py-2 text-moradoOscuro font-medium">
                        5 Am
                    </td>
                    <td title="Hora/Salida" className="px-3 py-2 text-moradoOscuro font-medium">
                        2 Pm
                    </td>
                    <td className="px-3 py-2 flex gap-x-5">
                        <a href="#" className="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                        <i className="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                        </a>
                        <a href="#" className="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                        <i className="fa-solid fa-trash-can text-moradoOscuro"></i>
                        </a>
                    </td>
                </tr>
                </tbody>

            </table>

            <div className="mt-8 flex justify-between items-center" id="footer-table">
                <p className="text-moradoOscuro font-medium text-lg">8 resultados encontrados: Mostrando página 1 de 1</p>

                <div className="bg-FAFAFA flex items-stretch content-baseline text-[17px] border border-[#D8D2FC]" id="pag">
                <button className="py-3 px-4 border-r border-[#D8D2FC]">Vista Previa</button>
                <a href="#" className="flex items-center justify-center py-3 px-4 border-r border-[#D8D2FC]">1</a>
                <a href="#" className="bg-rosaPastelOpac text-white font-bold flex items-center justify-center py-3 px-4 border-r border-[#D8D2FC]">2</a>
                <a href="#" className="flex items-center justify-center py-3 px-4 border-r border-[#D8D2FC]">3</a>
                <a href="#" className="flex items-center justify-center py-3 px-4 border-r border-[#D8D2FC]">4</a>
                <button className="py-3 px-4">Siguiente</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default TurnosAuxiliar