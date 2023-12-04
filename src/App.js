import { useState } from 'react';
import './App.css';
import listaImagenes from './data/imagenesData';

function App() {
  const [texto, setTexto] = useState("Escribe aqui");
  const [numeroImg,setNumeroImg] = useState(0);
  const [color, setColor] = useState('black');


  const ingresarTexto = (evento)=>{
      setTexto(evento.target.value);
  }

  const imagenValue = (evento)=>{
    setNumeroImg(evento.target.value);
      }
  
  const cambiarColor = ()=>{
    const colores = ['red','black','white', 'blue', 'green', 'purple', 'orange'];
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    setColor(nuevoColor);
  }    

  const exportar = ()=>{
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas)
  });
  }
  return (
    
    <div className="conteiner">
           <div className="titulo">
            <h1>Realiza tu meme</h1>
          </div>
                  <div className="imagen">
            <p className="primerTexto" style={{ color: color }}>{texto}</p>
            <img src={listaImagenes[numeroImg].url} alt="meme" />
          </div>

        <div className='seleccioneImagen'>
        <label htmlFor="opciones" className="etiqueta">
        Selecciona una opción:
        </label>
        <select id="opciones" name="opciones" onChange={imagenValue} className="selector">
          <option value="0" selected >Mono</option>
          <option value="1">Perro</option>
        </select>

        </div>

      <div className="input">
        <input type="text" id="campoTexto" placeholder="Ingrese su texto" onChange={ingresarTexto}/>
        <button type="button" id="botonEnviar" onClick={exportar}>Crear Meme</button>
      </div>

      <div className='btn'>
        <button className="botonColor" onClick={cambiarColor}>
          Cambiar Color
        </button>
      </div>
    </div>
    
  );
}

export default App;
