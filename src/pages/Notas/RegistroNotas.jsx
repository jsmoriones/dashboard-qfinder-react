import {useState, useContext} from 'react'
import Select from 'react-select';
import Dropzone from 'react-dropzone'
import { useForm, Controller } from "react-hook-form";
import {ContextNotas} from '../../context/notas/ContextNotas';
import './Dropzone.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const RegistroNotas = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [files, setFiles] = useState([]);
  const {listPatient, addNota} = useContext(ContextNotas) 
  const { control, register, handleSubmit, formState: { errors } } = useForm();


  const onDrop = acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
      })));

  };

  const thumbs = files.map(file => (
      <div key={file.name}>
          <img src={file.preview} alt={file.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      </div>
  ));

  const handleChange = (value) => {
    setSelectedOption(value)
  }


  const onSubmit = handleSubmit((values) => {
    const {descripcion, paciente} = values
    console.log(files)
    addNota({...values, contenido: descripcion, paciente: paciente.label, fecha: Date.now(), files})
  });

    return (
        <div className="bg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%] flex flex-col items-center"
        >
        <div className="pt-5 w-[95%]">
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
          <div className="flex gap-3 mb-5 justify-center">
            <p className="text-3xl md:text-4xl font-bold text-center">Agregar Nota Médica</p>
          </div>
        </div>

      <div className="bg-white p-5 mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%] max-w-3xl">
        <div className="flex justify-between mb-14">
          <p className="text-xl md:text-2xl text-moradoOscuro font-bold">Agregar Información de la Nota</p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col md:space-y-7">
            <div className="flex md:space-x-7 flex-wrap md:flex-nowrap gap-y-5 md:space-y-0">
              <div className="w-full">
                <div className="relative z-0">
                  <input
                    type="text"
                    name="titulo"
                    id="floating_standard"
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer"
                    placeholder=" "
                    {...register("titulo", { required: true })} />
                  <label htmlFor="floating_standard" className="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Título *</label>
                </div>          
                {errors.titulo && <span className="text-red-600 text-sm">El campo título es obligatorio</span>}
              </div>
            </div>

            <div className="w-full">
              <label className="text-sm text-[#271E4A] block mb-3" htmlFor="select-patient">Seleccionar Paciente</label>
              <Controller
                name="paciente"
                control={control}
                rules={{required: "Debes seleccionar un paciente"}}
                render={({field}) => (
                  <Select
                    {...field}
                    value={selectedOption}
                    onChange={(value) => {
                      field.onChange(selectedOption);
                      setSelectedOption(value)
                    }}
                    options={listPatient()}
                    isClearable
                    placeholder="Nombre del Paciente"
                  />
                )}
              />
              {errors.paciente && <p className="text-red-600 text-sm">{errors.paciente.message}</p>}
            </div>

            <div className="w-full">
              <textarea
                name="descripcion"
                className="w-full resize-none border-2 border-gray-300 appearance-none p-2 rounded-md"
                rows="3"
                placeholder="Descripción"
                {...register("descripcion", { required: true })}
                ></textarea>
              {errors.descripcion && <span className="text-red-600 text-sm">La Descripción es Obligatoria</span>}
            </div>

            <div className="w-full">
              <Controller
                name="imagen"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => (
                <Dropzone onDrop={onDrop}>
                  {({getRootProps, getInputProps, isDragActive}) => (
                    <section>
                        <div {...getRootProps({
                            className: `dropzone ${isDragActive ? 'dropzone--isActive' : ''}`
                        })}>
                            <input {...getInputProps()} name="imagen" />
                            <p>Arrastra y suelta archivos aquí, o haz clic para seleccionar</p>
                        </div>
                        <div>
                            {thumbs}
                        </div>
                    </section>
                  )}
                </Dropzone>
                )}
              />

              {/*errors.imagen && <p className="text-red-600 text-sm">{errors.imagen.message}</p>*/}
            </div>

            <div className="flex justify-center space-x-20">
              <button type="submit" className="py-2 px-4 bg-[#79CFA6] text-white font-bold text-md rounded-md cursor-pointer">Registrar Nota</button>
            </div>
          </div>
        </form>
      </div>
        </div>
    )
}

export default RegistroNotas