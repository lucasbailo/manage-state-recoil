import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../seletores"


const useListaDeEventosFiltrados = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventosFiltrados