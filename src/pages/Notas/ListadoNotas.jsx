import {useContext} from 'react'
import {Link} from 'react-router-dom';
import {ContextNotas} from '../../context/notas/ContextNotas';
import {maxCharacter} from "../../utils/";

const ListadoNotas = () => {

	const {notas} = useContext(ContextNotas);

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
                <p className="text-3xl md:text-4xl font-bold">Listado de Notas</p>
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
	                    <th scope="col" className="px-6 py-2">
	                        ID
	                    </th>
	                    <th scope="col" className="px-6 py-2">
	                        <a href="#">
	                        Titulo
	                        <i className="fas fa-arrow-down ml-3"></i>
	                        </a>
	                    </th>
	                    <th scope="col" className="px-6 py-2 flex justify-center">
	                        <a href="#">
	                        Paciente
	                        <i className="fas fa-arrow-down ml-3"></i>
	                        </a>
	                    </th>
	                    <th scope="col" className="px-6 py-2">
	                        <a href="#">
	                        Contenido
	                        <i className="fas fa-arrow-down ml-3"></i>
	                        </a>
	                    </th>
	                    <th scope="col" className="px-6 py-2">
	                        <a href="#">
	                        Fecha
	                        <i className="fas fa-arrow-down ml-3"></i>
	                        </a>
	                    </th>
	                    <th>

	                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notas.map((nota, index) => (

                        <tr key={index} className="bg-white border-b dark:border-azulMasClaro text-lg">
                            <td title="Fecha" className="px-3 py-2">
                                <p className="text-moradoOscuro font-medium">{nota.id}</p>
                            </td>
                            <td title="Auxiliar">
                                <p className="px-3 py-2 font-medium text-azulMarFondo whitespace-nowrap">{maxCharacter(nota.titulo)}</p>
                            </td>
                            <td title="Paciente" className="px-3 py-2 flex justify-center">
                                <p className="bg-rosa text-white text-[16px] text-center p-1 rounded min-w-32 inline-block">{nota.paciente}</p>
                            </td>
                            <td title="Encargado/a" className="px-3 py-2 text-moradoOscuro font-medium">
                                {maxCharacter(nota.contenido)}
                            </td>
                            <td title="Hora/Inicio" className="px-3 py-2 text-moradoOscuro font-medium">
                                { nota.fecha || maxCharacter(nota.fecha)}
                            </td>
                            <td className="px-3 py-2 flex gap-x-5">
                                <Link to={`/notas/${nota.id}`} className="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                                    <i class="fa-solid fa-eye text-moradoOscuro"></i>
                                </Link>
                            </td>
                        </tr>
                        ))
                    }
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

export default ListadoNotas