import React from 'react';
import { useHistory } from 'react-router';

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  let history = useHistory();
  return (
    <tr>
      <td>
        <img src="" alt="" />
      </td>
      <td>Nombre artista</td>
      <td>Cancion</td>
      <td>
        <button
          onClick={() => {
            history.push(`/canciones/${id}`);
          }}
        >
          Ver
        </button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
