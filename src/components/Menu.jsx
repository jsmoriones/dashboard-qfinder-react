import { NavLink } from "react-router-dom";

const Menu = () => {

  const linkStyle = "linkMenu text-2xl text-gray-600 mx-auto rounded-full hover:transition w-[50px] h-[50px] grid place-content-center hover:bg-white"
  const inActive = "linkMenu text-2xl text-gray-600 mx-auto rounded-full hover:transition w-[50px] h-[50px] grid place-content-center bg-white"

  return (
    <aside id="aside" className="bg-white xl:bg-white60opac shadow-lg xl:shadow-none transition-all w-[100px] fixed xl:relative  bottom-0 top-0 h-auto min-h-screen z-10 xl:z-0 -left-full xl:left-0 justify-center items-center">
      <div className="overflow-x-hidden overflow-y-scroll max-h-screen px-4 py-4">
        <button id="menuDesktop" className="hidden xl:block absolute right-[-15px] top-10 bg-white w-[30px] h-[30px] rounded-full hover:shadow-lg">
          <i className="fas fa-arrow-right iconArrow" id="iconAsideDesktop"></i>
        </button>
        <div className="avatar mb-10">
          <div className="avatar-img bg-white rounded-full w-[64px] h-[64px] flex justify-center items-center mx-auto">
            <img src="/images/avatar.png" alt="Imagen de avatar" className="max-w-[50px]" />
          </div>
          <p className="text-sm text-center font-semibold">Sarah Smith</p>
        </div>
        <nav id="menu"  className="flex flex-col gap-y-3">
          <NavLink to="/" id="botonHome" className={({isActive}) => isActive ? inActive : linkStyle}>
            <img src="/images/dashboard-icon.png" />
          </NavLink>
          <NavLink to="/perfil-paciente" id="boton1" className={({isActive}) => isActive ? inActive : linkStyle}>
            <i className="fa-regular fa-circle-user"></i>
            <span className="text-link hidden text-base">Fuck Society 19</span>
          </NavLink>
          <NavLink to="/formulario-auxiliar" id="boton2" className={({isActive}) => isActive ? inActive : linkStyle}>
            <i className="fa-solid fa-hands-holding-child"></i>
            <span className="text-link hidden text-base">Fuck Society 1</span>
          </NavLink>
          <NavLink to="/turnos-auxiliar" id="boton2" className={({isActive}) => isActive ? inActive : linkStyle}>
            <i className="fa-solid fa-user-doctor"></i>
            <span className="text-link hidden text-base">Fuck Society 1</span>
          </NavLink>
          <a id="boton4" href="#" className="linkMenu text-2xl text-gray-600 mx-auto rounded-full hover:transition w-[50px] h-[50px] grid place-content-center hover:bg-white ">
            <i className="fa-regular fa-file-lines"></i>
            <span className="text-link hidden text-base">Fuck Society 1</span>
          </a>
          <a id="boton5" href="#" className="linkMenu text-2xl text-gray-600 mx-auto rounded-full hover:transition w-[50px] h-[50px] grid place-content-center hover:bg-white ">
            <i className="fa-solid fa-barcode"></i>
            <span className="text-link hidden text-base">Fuck Society 1</span>
          </a>
          <a id="boton6" href="#" className="linkMenu text-2xl text-gray-600 mx-auto rounded-full hover:transition w-[50px] h-[50px] grid place-content-center hover:bg-white ">
            <i className="fa-solid fa-qrcode"></i>
            <span className="text-link hidden text-base">Fuck Society 1</span>
          </a>
          <a id="boton7" href="#" className="linkMenu text-2xl text-gray-600 mx-auto rounded-full hover:transition w-[50px] h-[50px] grid place-content-center hover:bg-white ">
            <i className="fa-regular fa-clock"></i>
            <span className="text-link hidden text-base">Fuck Society 1</span>
          </a>
          <a id="boton8" href="#" className="linkMenu text-2xl text-gray-600 mx-auto rounded-full hover:transition w-[50px] h-[50px] grid place-content-center hover:bg-white ">
            <i className="fa-regular fa-comments"></i>
            <span className="text-link hidden text-base">Fuck Society 1</span>
          </a>
          <a id="boton9" href="#" className="linkMenu text-2xl text-gray-600 mx-auto rounded-full hover:transition w-[50px] h-[50px] grid place-content-center hover:bg-white ">
            <i className="fa-solid fa-sliders"></i>
            <span className="text-link hidden text-base">Fuck Society 1</span>
          </a>
        </nav>
        <div className="mt-14">
          <a href="login.html" className="linkMenu text-2xl text-gray-600 mx-auto rounded-full hover:transition w-[50px] h-[50px] grid place-content-center hover:bg-white ">
            <i className="fa-solid fa-power-off"></i>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Menu