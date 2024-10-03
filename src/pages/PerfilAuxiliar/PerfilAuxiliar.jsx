import React from 'react'

const PerfilAuxiliar = () => {
  return (
    <>
    <div id="cntInformation"
    className="bg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
    <div className="">
      <section className="mx-5 py-7">
        <div className="flex flex-col md:flex-row justify-between mb-[50px] gap-y-5">
          <p className="text-3xl text-center font-bold">QfindeR</p>
          <div className="flex gap-x-3 self-end">
            <a href="#" className="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
              <i className="fa-regular fa-user text-xl"></i>
            </a>
            <a href="#" className="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
              <i className="fa-regular fa-bell text-xl"></i>
            </a>
            <a href="#"
              className="xl:hidden px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] hover:shadow-[0_0_14px_2px_#46a6ff47] grid place-content-center"
              id="btnMenuMobile">
              <i className="fa fa-bars text-xl"></i>
            </a>
          </div>
        </div>
        <div className="flex gap-3 mb-5">
          <i className="fa-solid fa-hands-holding-child text-3xl md:text-4xl"></i>
          <p className="text-3xl md:text-4xl font-bold">Perfil del Auxiliar</p>
        </div>
        <div className="bg-white rounded-md p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <p className="text-2xl md:text-3xl text-moradoOscuro font-bold">Información del Auxiliar</p>
            <div className="flex flex-col md:flex-row gap-x-5 gap-y-3 mt-6 w-full md:w-auto md:mt-0">
              <a href="#"
                className="py-1 px-7 rounded-sm bg-gris text-white transition-all hover:bg-hoverBgEditar block text-center">Editar</a>
              <a href="#"
                className="py-1 px-7 rounded-sm bg-azulCielo text-white transition-all hover:bg-hoverBgGuardar block text-center">Guardar</a>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div
              className="col-span-12 w-[60%] m-auto mq980:m-0 rounded-full mq1185:col-span-3 mq980:col-span-2 mq980:w-auto mq980:rounded-[1.5rem] bg-white shadow-[0_0_14px_2px_#D8D2FCA3]">
              <img src="/public/images/socio.avif" alt="imagen de usuario"
                className="rounded-full mq980:rounded-[1.5rem] h-full object-cover" />
            </div>
            <div
              className="col-span-12 mq1185:col-span-9 mq980:col-span-10 p-6 rounded-[1.5rem] bg-white shadow-[0_0_14px_2px_#D8D2FCA3]">
              <p className="text-moradoOscuro font-bold">Alishon Martinez</p>
              <p className="text-moradoOscuro mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.</p>

              <div className="flex justify-between gap-x-5 mt-6">
                <div className="flex-1">
                  <p className="text-moradoOscuro font-bold">Eps</p>
                  <p>Sanitas</p>
                </div>
                <div className="flex-1">
                  <p className="text-moradoOscuro font-bold">Número de teléfono</p>
                  <p>+91 8548521524</p>
                </div>
                <div>
                  <p className="text-moradoOscuro font-bold">Direccion</p>
                  <p>Calle 3# 3-20</p>
                </div>
                <div>
                  <p className="text-moradoOscuro font-bold">Edad</p>
              <p>19</p>
                </div>
                <div>
                  <p className="text-moradoOscuro font-bold">Correo Electronico</p>
                  <p>Auxiliar@gmail.com</p>
                </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 mq1185:col-span-7 mq1050:col-span-7 p-6 rounded-[1.5rem] bg-white shadow-[0_0_14px_2px_#D8D2FCA3]">
              <div className="relative overflow-x-auto ">
                <p className="text-moradoOscuro font-bold text-xl mb-6">Past Visit History</p>
                <table className="w-full text-center">
                  <thead className="bg-blancoAzul">
                    <tr className="text-center">
                      <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris " >Fecha</th>
                      <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris">Paciente</th>
                      <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris">Acudiente</th>
                      <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris">Estado</th>
                      <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris">Pago</th>
                      <th scope="col" className="py-2 px-5 font-semibold text-sm text-rosaGris">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-blancoAzul border-b-2">
                      <td className="py-4">12 Jan 2022</td>
                      <td className="py-4 text-blue-400 font-semibold">Dr. Jacob Ryan</td>
                      <td className="py-4">Elena Diaz</td>
                      <td className="py-4">
                        <a href="#" className="py-1 px-3 rounded-sm bg-rose-500 text-white">Inactivo</a>
                      </td>
                      <td className="py-4 ">$145</td>
                      <td className="py-4 flex gap-x-5 justify-center">
                        <a href="#"
                          className="p-1 j rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white  ">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="#"
                          className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white ">
                          <i className="fa-solid fa-trash-can"></i>
                        </a>
                      </td>
                    </tr>
                    <tr className="border-blancoAzul border-b-2">
                      <td className="py-4">12 Jan 2022</td>
                      <td className="py-4 text-blue-400 font-semibold">Dr. Jacob Ryan</td>
                      <td className="py-4">Elena Diaz</td>
                      <td className="py-4">
                        <a href="#" className="py-1 px-3 rounded-sm bg-rose-500 text-white">Inactivo</a>
                      </td>
                      <td className="py-4">$145</td>
                      <td className="py-4 flex gap-x-5 justify-center">
                        <a href="#"
                          className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="#"
                          className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                          <i className="fa-solid fa-trash-can"></i>
                        </a>
                      </td>
                    </tr>
                    <tr className="border-blancoAzul border-b-2">
                      <td className="py-4">12 Jan 2022</td>
                      <td className="py-4 text-blue-400 font-semibold">Dr. Jacob Ryan</td>
                      <td className="py-4">Elena Diaz</td>
                      <td className="py-4">
                        <a href="#" className="py-1 px-3 rounded-sm bg-Green text-white">Activo</a>
                      </td>
                      <td className="py-4">$145</td>
                      <td className="py-4 flex gap-x-5 justify-center">
                        <a href="#"
                          className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="#"
                          className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                          <i className="fa-solid fa-trash-can"></i>
                        </a>
                      </td>
                    </tr>
                    <tr className="border-blancoAzul border-b-2">
                      <td className="py-4">12 Jan 2022</td>
                      <td className="py-4 text-blue-400 font-semibold">Dr. Jacob Ryan</td>
                      <td className="py-4">Elena Diaz</td>
                      <td className="py-4">
                        <a href="#" className="py-1 px-3 rounded-sm bg-Green text-white">Activo</a>
                      </td>
                      <td className="py-4">$145</td>
                      <td className="py-4 flex gap-x-5 justify-center">
                        <a href="#"
                          className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="#"
                          className="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                          <i className="fa-solid fa-trash-can"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        
      </section>
    </div>
  </div>
    </>
  )
}

export default PerfilAuxiliar