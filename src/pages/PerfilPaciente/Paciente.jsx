import React from 'react'

const Paciente = () => {
  return (
    <>
        <div className="bg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
        <section className="mx-5 py-7">
          <p className="text-3xl font-bold">QfindeR</p>
          <div className="flex  py-4 justify-between">
            <div className="flex">
              <i className="fa-solid fa-hands-holding-child text-3xl md:text-4xl"></i>
              <p className="text-3xl md:text-4xl font-bold px-2">Pacientes</p>
  
            </div>
            
            <div className="relative">
              <i className="fa-solid fa-magnifying-glass absolute right-3 top-2"></i>
              <input type="text" value="" className="rounded-full shadow-[0_0_14px_2px_#D8D2FCA3] text-md py-1 px-4 pr-8 hover:border-gris border-2" />
            </div>
          </div>

          <div className="bg-white rounded-md p-6 space-y-4 lg:grid grid-cols-2 gap-4 lg:space-y-0">
<a href="#"  id="botonPerfil">
            <div className="bg-white rounded-[40px] shadow-[0_0_14px_2px_#D8D2FCA3] p-2 px-9 flex items-center hover:border-gris border-2">
              <img className="w-[80px] h-[80px] shadow-md rounded-3xl" src="/public/images/socio.avif" alt="" />
              <div className="px-4 m-1">
                <p className="font-semibold text-[18px]">Marcos Andres Meneses Ortega</p>
                <p>Enfermedad: <span className="font-semibold">Alzheimer</span></p>
                <p>Acudiente: <span className="font-semibold">Martha Rodriguez</span></p>
              </div>
            </div>
   </a>
            
            <div className="bg-white rounded-[40px] shadow-[0_0_14px_2px_#D8D2FCA3] p-2 px-9 flex items-center">
              <img className="w-[80px] h-[80px] shadow-md rounded-3xl" src="/public/images/socio.avif" alt="" />
              <div className="px-4 m-1">
                <p className="font-semibold text-[18px]">Marcos Andres Meneses Ortega</p>
                <p>Enfermedad: <span className="font-semibold">Alzheimer</span></p>
                <p>Acudiente: <span className="font-semibold">Martha Rodriguez</span></p>
              </div>
            </div>

            <div className="bg-white rounded-[40px] shadow-[0_0_14px_2px_#D8D2FCA3] p-2 px-9 flex items-center
            hover:border-gris border-2">
              <img className="w-[80px] h-[80px] shadow-md rounded-3xl" src="/public/images/socio.avif" alt="" />
              <div className="px-4 m-1">
                <p className="font-semibold text-[18px]">Marcos Andres Meneses Ortega</p>
                <p>Enfermedad: <span className="font-semibold">Alzheimer</span></p>
                <p>Acudiente: <span className="font-semibold">Martha Rodriguez</span></p>
              </div>
            </div>
           
          </div>
        </section>
        </div>
    </>
  )
}

export default Paciente