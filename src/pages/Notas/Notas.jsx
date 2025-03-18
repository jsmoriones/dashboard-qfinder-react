import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ContextNotas} from '../../context/notas/ContextNotas';

const Notas = () => {
  const params = useParams();
  console.log(params.id)
  const {} = useContext(ContextNotas);

  return (
    <div className="bg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]"
        >
            <div className="pt-5 mx-8">
        <div className="flex flex-col md:flex-row justify-between mb-[25px] gap-y-5">
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
        <div className="flex gap-3 mb-4">
          <p className="text-3xl md:text-4xl font-bold">Detalle de la Nota</p>
        </div>
      </div>

      <div className="bg-white p-5 mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
        <div className="flex flex-col justify-between items-start mb-14">

          <div className="w-3/5 mx-auto flex flex-col">
            <div className="w-full flex items-center">
              <div className="w-2/6">
                <img src="/images/socio.avif" className="block mx-auto rounded-full w-5/6" />
              </div>
              <div className="w-4/6">
                <p className="text-2xl font-bold">Juan Sebastian Moriones Moncayo</p>
                <p className="text-lg font-normal"><span className="font-bold">EPS: </span> Nueva EPS</p>
                <p className="text-lg font-normal"><span className="font-bold">Identificación: </span> 74545646546</p>
              </div>
            </div>

            <p className="w-full text-2xl font-bold uppercase mt-5">información de la Nota</p>

            <div className="w-full mt-5">
              <p className="text-lg font-normal"><span className="font-bold">Título: </span>Se recupero el Paciente</p>
              <p className="text-lg font-normal"><span className="font-bold">Descripción: </span>El paciente tuvo una recaida y fue pasado a urgencias del hospital san jose se le hizo un seguimiento continuamente fue enviado a su casa y ha estado en reposo</p>
              <p className="text-lg font-normal"><span className="font-bold">Fecha: </span>10 de Marzo de 2025</p>
            </div>

            <div className="flex gap-x-3 mt-10">
              <a href="#" className="py-2 px-4 bg-hoverBgGuardar text-white font-bold text-md rounded-md">Editar</a>
              <a href="#" className="py-2 px-4 bg-rosa text-white font-bold text-md rounded-md">Eliminar</a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:space-y-7">

        </div>
      </div>
        </div>
  )
}

export default Notas