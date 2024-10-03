import React from 'react'

const Notas = () => {
  return (
    <div id="asideMenu1" className="bbg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
        <div className="text-moradoOscuro text-[48px] font-medium py-20 mx-16">Registro de notas
          <div className="bg-white w-[1550px] h-[700px] mt-6 rounded-[47px]">
            <div className="bg-azulito w-[900px] h-[48px] relative top-9 mx-9 rounded-[18px]">
              <input type="text" placeholder="Nota..." className="text-[20px] absolute py-2 mx-6" />
              <input type="date" className="text-[20px] absolute left-[720px] py-2 " />
              <button id="btnEliminarNota" className="bg-rosaPastelOpac rounded-[10px] relative left-[1240px] w-[183px] h-[40px] text-[20px] bottom-[20px]">Eliminar esta nota</button>
            </div>
            <div id="contenedorNota" className="bg-white mt-[60px] w-[1458px] h-[561px] relative left-9 drop-shadow-md rounded-[8px]">
              <textarea id="notaContenido" className="w-full h-full p-4 text-[30px]" placeholder="Escribe tu nota aquí..."></textarea>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Notas