import {createContext, useReducer, useEffect} from 'react';
import {produce} from 'immer';
import {BDNOTAS} from '../../notas_list';

const ContextNotas = createContext();

const initialState = {
	notas: JSON.parse(localStorage.getItem("notas")) || BDNOTAS
}

const ActionNotas = produce((state, action) => {
	switch(action.type){
		case "LISTA_USUARIOS":
			return state
			break;
		case "GET_NOTA":
			return state.notas.filter(nota => nota.id === action.payload)
			break;
		case "ADD_NOTA":
			return {
				notas: [action.payload, ...state.notas]
			}
			break;
		default:
			return state;
			break;
	}
})

const StateNotas = ({children}) => {
	const [state, dispatch] = useReducer(ActionNotas, initialState);

	useEffect(() => {
        localStorage.setItem("notas", JSON.stringify(state.notas));
    }, [state.notas]);

	const getNota = (id) => {
		dispatch({
			type: "GET_NOTA",
			payload: id
		});
	}

	const listPatient = () => {
		return state.notas.map((nota, index) => {
			return {value: index, label: nota.paciente}
		})
	}

	const addNota = (data) => {
		console.log("Desde ContextNota: ", data)
		dispatch({
			type: "ADD_NOTA",
			payload: data
		})
	}

	return(
		<ContextNotas.Provider
			value={{
				notas: state.notas,
				getNota,
				listPatient,
				addNota
			}}
		>
			{children}
		</ContextNotas.Provider>
	)
}

export {ContextNotas};
export default StateNotas;