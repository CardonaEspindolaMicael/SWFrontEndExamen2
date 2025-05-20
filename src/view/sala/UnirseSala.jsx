import React, { useState } from 'react'

export const UnirseSala = () => {
  const [codigoInvitacion, setCodigoInvitacion] = useState('');
  const [ciUsuario, setCiUsuario] = useState('');

  const unirseSala = async () => {
    const token = localStorage.getItem('_auth');
    const response = await fetch('http://localhost:8080/salas/usuario-sala', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ codigo_invitacion: codigoInvitacion, ci_usuario: ciUsuario })
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Unido a la sala con éxito");
    } else {
      console.error(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={unirseSala}>
        <input 
          type="text" 
          placeholder="Código de invitación" 
          value={codigoInvitacion} 
          onChange={(e) => setCodigoInvitacion(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="CI de usuario" 
          value={ciUsuario} 
          onChange={(e) => setCiUsuario(e.target.value)} 
        />
        <button type="submit">Unirse a la sala</button>
      </form>
    </div>
  );
};
