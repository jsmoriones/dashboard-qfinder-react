import React from 'react'


//const formularioLogin = document.querySelector("#formularioLogin");

const Login = () => {

  const handleSubmit = () => {
    //Validacion de formulario
    /*let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( !validEmail.test(formularioLogin.email.value) ){
        alert('El email es invalido');
        return true;
    }else if(formularioLogin.password.value.length <= 6){
        alert('La contraseña debe tener mas de seis caracteres');
        return true;
    }else{
        //Verificar que datos quemados (Datos escritos) sean validos

        if(formularioLogin.email.value === "qfinder@hotmail.com" && formularioLogin.password.value === "admin123"){
            alert("Redirigiendo...")
            window.location.href="/";
        }else{
            alert("El usuario No existe")
        }
    }*/
  }

  return (
    <section className="bg-gradient-to-br from-azulTenueFuerte via-azulMasClaro to-azulMasClaro bg-no-repeat flex h-full min-h-screen">
      <div id="contenedor" className="bg-white60opac basis-[80%] mx-auto my-11 rounded-lg transition-all">
        <div className="content flex m-12">
          <div className="form-container bg-white rounded-s-2xl shadow-xl w-5/12 p-12 flex flex-col justify-center items-center gap-y-8 h-screen">
              <figure>
                  <img src="/images/logo.png" alt="" />
              </figure>
              <h1 className="text-moradoOscuro text-4xl font-bold">Inicio de Sesión</h1>

              <form id="formularioLogin" action="#" className="w-full flex flex-col gap-y-8">
                  <div className="relative z-0">
                      <input type="email" name="email" id="email floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                      <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Correo Electrónico *</label>
                  </div>
                  <div className="relative z-0">
                      <input type="password" name="password" id="password floating_standard" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                      <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Contraseña *</label>
                  </div>
              </form>

              <div className="flex flex-col items-center gap-y-4">
                  <a href="recoverPassword.html" className="text-[#271E4A] text-xl underline hover:no-underline">¿Olvido la contraseña?</a>
                  <a href="#" className="text-[#271E4A] text-xl underline hover:no-underline">Registrarse</a>
              </div>

              <button type="submit" id="submitForm" className="bg-[#4B9AF6] border-[#1279E2] border-2 text-white text-2xl py-2 px-16 rounded-xl transition-all hover:bg-[#3b78be] active:transform active:scale-105" onClick={handleSubmit()}>Ingresar</button>
          </div>
          <div className="bg-image rounded-e-2xl shadow-xl w-7/12 bg-cldescarga bg-cover bg-no-repeat">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Login