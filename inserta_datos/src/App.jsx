const persona = {
nombre:'Maria Fernanda Perez Jimenez', 
edad: 21,
profesion: 'Estudiante',
pasatiempos: ['Ver series',
'Programar',
'Leer',
'Ir al gym'],
fechanacimiento: '21/10/2002',
lugardenacimiento: 'Tuxtepec, Oaxaca',
signo: 'Libra'
}
function App() {
  return (
    <div>
      <h1>Información personal</h1>
      <hr/>
      <ul>
        <li>Nombre completo: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Profesión: {persona.profesion}</li>
        <li>Fecha de nacimiento: {persona.fechanacimiento}</li>
        <li>Lugar de nacimiento {persona.lugardenacimiento}</li>
        <li>Signo sodiacal: {persona.signo}</li>
        <li>Pasatiempos: 
          <ul>
              {persona.pasatiempos.map((pasatiempo)=>{
                return <li key={pasatiempo}>{pasatiempo}</li>
              })

               }
          </ul>
        </li>
      </ul>

    </div>
  )
}

export default App
