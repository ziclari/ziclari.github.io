import React, { useEffect, useState } from 'react';
import proyectosData from './data/proyectos.json';

function Proyectos({nuevoFiltro}) {
  const [proyectos, setProyectos] = useState([]);
  const [orden, setOrden] = useState('descendente'); 
  const idsFavoritos = [1, 6,7];

  useEffect(() => {
      // Simulando una carga asincrónica de datos
      setProyectos(proyectosData.proyectos);
  }, []);
  
  // Función para cambiar el orden al hacer clic en un botón
  const cambiarOrden = (nuevoOrden) => {
    setOrden(nuevoOrden);
  };
  // Función para aplicar el ordenamiento a los proyectos por id
  const ordenarProyectosPorId = () => {
    if (orden === 'descendente') {
      return filtrarProyectos().slice().sort((a, b) => b.id - a.id);
      // Ordena los proyectos de forma descendente (mayor id primero)
    } else {
      return filtrarProyectos().slice().sort((a, b) => a.id - b.id);
      // Ordena los proyectos de forma ascendente (menor id primero)
    }
  };
  
  const filtrarProyectos = () => {
    if (nuevoFiltro === 'todos') {
      return proyectos;
    }
    if(nuevoFiltro ==='destacados'){
      return proyectos.filter(proyecto => idsFavoritos.includes(proyecto.id));
    } else {
      return proyectos.filter(proyecto => proyecto.tecnologias.includes(nuevoFiltro));
      // Filtra los proyectos donde el arreglo de tecnologías incluye el filtro seleccionado
    }
  };
  let proyectosOrdenados = ordenarProyectosPorId();
  return (<>
    <div className="mb-4">
      <button onClick={() => cambiarOrden('descendente')} className={`mr-2 p-2 rounded font-bold ${orden === 'descendente' ? 'bg-amber-500 text-black' : 'bg-stone-900'}`}>Más Recientes</button>
      <button onClick={() => cambiarOrden('ascendente')} className={`mr-2 p-2 rounded font-bold ${orden === 'ascendente' ? 'bg-amber-500 text-black' : 'bg-stone-900 '}`}>Más Antiguos</button>
      <p className='block sm:inline-block sm:float-end p-2 font-semibold  text-stone-600'>{`${proyectosOrdenados.length} ${ (proyectosOrdenados.length)===1? 'proyecto' : 'proyectos'}`} </p>
    </div>
   <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'>
      
      {proyectosOrdenados.map(proyecto => (
        <a href={proyecto.url} target="_blank" rel="noopener noreferrer"  key={proyecto.id} 
        className="bg-black hover:bg-stone-900 rounded-lg overflow-hidden border-2 border-stone-800 hover:border-stone-500
        tansition-border duration-100 ease-in">
          <img className="w-full h-48 object-cover" src={proyecto.imagen} alt={proyecto.nombre} />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2 inline-block capitalize">{proyecto.nombre}</h3>
            <p className="text-stone-500 mb-5">{proyecto.descripcion}</p>
            <p className="text-stone-400">Fecha: {proyecto.fecha}</p>
            <img className='w-8 m-5 inline-block float-right z-index-1 ' src='/images/patas.png' alt='patitas'></img>
            <div className='flex flex-wrap gap-1 overflow-hidden mt-5'>
              {proyecto.tecnologias.map(tecnologia =>(
                <div className={`mr-2 p-2 rounded font-bold bg-stone-800 text-xs sm:text-sm ${ (tecnologia === 'html' || tecnologia === 'css') ? 'uppercase' : 'capitalize'}`}>{tecnologia}</div>
              ))}
            </div>
        </div>
        </a>
      ))
      }
    </div>
  </>
   
  );
}

function App() {
  
  const [filtro,setFiltro] = useState("todos");
  // Función para manejar el cambio de filtro al hacer clic en un botón
  const cambiarFiltro = (tecnologia) => {
    setFiltro(tecnologia);
  };

  
  return (
  <>
    
 <div className="container mx-auto px-10 py-10 border-stone-800 border-x-2">
  <div className="flex flex-col md:flex-row items-start justify-start">
    <div className="m-5 relative top-0 sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto my-6 h-20 w-auto" src="/images/logo2.svg" alt="Imagen de pato"></img>
    <h1 className="text-4xl text-center font-bold">Ziclariv2</h1>
    <div className="p-3 sm:p-5 mt-5 sm:mt-10 flex flex-wrap justify-center sm:justify-items-start items-center gap-3 sm:gap-1 overflow-hidden text-xs sm:text-base">
    <button onClick={() => cambiarFiltro('todos')} className={`mr-2 p-2 rounded font-bold ${filtro === 'todos' ? 'bg-amber-500 text-black' : 'bg-stone-900'}`}>Todos</button>
    <button onClick={() => cambiarFiltro('destacados')} className={`mr-2 p-2 rounded font-bold ${filtro === 'destacados' ? 'bg-amber-500 text-black' : 'bg-stone-900'}`}>Destacados</button>
    </div>
    <div className="flex flex-wrap justify-center sm:justify-items-start items-center gap-3 sm:gap-1 overflow-hidden text-xs sm:text-base">
    <button onClick={() => cambiarFiltro('html')} className={`mr-2 p-2 rounded font-bold ${filtro === 'html' ? 'bg-amber-500 text-black' : 'bg-stone-900'}`}>HTML y CSS</button>
    <button onClick={() => cambiarFiltro('javascript')} className={`mr-2 p-2 rounded font-bold ${filtro === 'javascript' ? 'bg-amber-500 text-black' : 'bg-stone-900'}`}>JavaScript</button>
    <button onClick={() => cambiarFiltro('react')} className={`mr-2 p-2 rounded font-bold ${filtro === 'react' ? 'bg-amber-500 text-black' : 'bg-stone-900'}`}>React</button>
    <button onClick={() => cambiarFiltro('tailwind')} className={`mr-2 p-2 rounded font-bold ${filtro === 'tailwind' ? 'bg-amber-500 text-black' : 'bg-stone-900'}`}>Tailwind</button>
    <button onClick={() => cambiarFiltro('python')} className={`mr-2 p-2 rounded font-bold ${filtro === 'python' ? 'bg-amber-500 text-black' : 'bg-stone-900'}`}>Python</button>
    
    </div>
    </div>
    <div className="mt-8 md:mt-0 md:ml-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight tracking-tight">Galería de Proyectos</h2>
      <Proyectos nuevoFiltro = {filtro} />
    </div>
  </div>
</div>


  </>
  );
}

export default App;
