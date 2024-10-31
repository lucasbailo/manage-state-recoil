import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { filtroDeEventos } from '../../state/atom';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { IFiltroStatus } from '../../interfaces/IFiltroStatus';

const Filtro: React.FC = () => {

  const [data, setData] = useState('')
  const [status, setStatus] = useState<IFiltroStatus>("Ambos");

  const setFiltroDeEvento = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos)

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filtro: IFiltroDeEventos = {
      status,
    };
    data ? (filtro.data = new Date(data)) : (filtro.data = null);

    setFiltroDeEvento(filtro);
  };

  const opcoesFiltro = ["Ambos", "Completos", "Incompletos"];

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtros</h3>
      <label htmlFor="data">Por data</label>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />
      <label htmlFor="status">Por status</label>
      <select
        name="status"
        id="filtro-status"
        className={style.input}
        onChange={(event) => setStatus(event.target.value as IFiltroStatus)}
      >
        {opcoesFiltro.map((opcao, index) => (
          <option key={index} value={opcao}>
            {opcao}
          </option>
        ))}
      </select>

      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro