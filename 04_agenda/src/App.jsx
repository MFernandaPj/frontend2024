import ListItem from './ListItem.jsx'
const agenda =[

  {
    name: 'Maria Fernanda Perez Jimenez',
    email: 'isc20350306@gmail.com'
  },
  {
    name: 'Arizbeth Becerra Gonzalez',
    email: 'isc20350254@gmail.com'
  },
  
]


function App() {

  return (
    <div>
     <h1>Agenda</h1>
     <hr />
    <ul>
      
      {
         agenda.map((agendas)=>(
          <ListItem
          key={agendas.name}
          name={agendas.name}
          email={agendas.email}
          />
         ))
      }
    </ul>
    </div>
  )
}

export default App
