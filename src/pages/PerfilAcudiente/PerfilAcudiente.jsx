import React from 'react'

const PerfilAcudiente = () => {
  return (
    <>
        <div id="cntInformation" className="bg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
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
                <a href="#" className="xl:hidden px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] hover:shadow-[0_0_14px_2px_#46a6ff47] grid place-content-center" id="btnMenuMobile">
                  <i className="fa fa-bars text-xl"></i>
                </a>
              </div>
            </div>
            <div className="flex gap-3 mb-5">
              <i className="fa-solid fa-hands-holding-child text-3xl md:text-4xl"></i>
              <p className="text-3xl md:text-4xl font-bold">Perfil del Acuediente</p>
            </div>
            <div className="bg-white rounded-md p-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                  <p className="text-2xl md:text-3xl text-moradoOscuro font-bold">Información del acudiente de:
                    <span className="font-semibold">
                      Marcos Andres Meneses Ortega
                    </span>
                  </p>
                  <div className="flex flex-col md:flex-row gap-x-5 gap-y-3 mt-6 w-full md:w-auto md:mt-0">
                    <a href="#" className="py-1 px-7 rounded-sm bg-gris text-white transition-all hover:bg-hoverBgEditar block text-center">Editar</a>
                    <a href="#" className="py-1 px-7 rounded-sm bg-azulCielo text-white transition-all hover:bg-hoverBgGuardar block text-center">Guardar</a>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 w-[60%] m-auto mq980:m-0 rounded-full mq1185:col-span-3 mq980:col-span-2 mq980:w-auto mq980:rounded-[1.5rem] bg-white shadow-[0_0_14px_2px_#D8D2FCA3]">
                    <img src="/public/images/socio.avif" alt="imagen de usuario" className="rounded-full mq980:rounded-[1.5rem] h-full object-cover" />
                  </div>
                  <div className="col-span-12 mq1185:col-span-9 mq980:col-span-10 p-6 rounded-[1.5rem] bg-white shadow-[0_0_14px_2px_#D8D2FCA3]">
                    <p className="text-moradoOscuro font-bold">Camilo Hernandez</p>
                    <br />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="flex-1">
                        <p className="text-moradoOscuro font-bold">CC:</p>
                        <p>1234567889</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-moradoOscuro font-bold">Número de teléfono</p>
                        <p>+91 8548521524</p>
                      </div>
                      <div>
                        <p className="text-moradoOscuro font-bold">Dirección:</p>
                        <p>345, Sarju Appt., Mota Varacha, Surat Gujarat, India.</p>
                      </div>
                      <div>
                        <p className="text-moradoOscuro font-bold">Correo electronico:</p>
                        <p>1234567889@gmail.com</p>
                      </div>
                     <div>
                        <p className="text-moradoOscuro font-bold">Vinculo familiar con el paciente:</p>
                        <p>Hijo</p>
                      </div>
                      <div>
                        <label className="text-moradoOscuro font-bold">Género </label>
                        <select className="w-full border-gray-200 border-2">
                          <option>Activo</option>
                          <option>Inactivo</option>
                        </select>
                      </div>
                    </div>
                  </div>
                
                </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PerfilAcudiente