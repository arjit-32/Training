import './App.css';
import { useState } from 'react'
import Title from './components/Title' 
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showEvents,setShowEvents] = useState(true);
  const [showModal,setShowModal] = useState(false);

  const [events,setEvents] = useState([
    {'title':'Learn React.js', id:1},
    {'title':'Learn MongoDb', id:2},
    {'title':'Learn Express.js', id:3}  
  ])

const handleClick = (id)=>{
    setEvents((prevEvents) => {
    return prevEvents.filter((event)=>{
      return id!==event.id;  
    })
  })
}

const handleModal = () => {
  showModal===false?setShowModal(true):setShowModal(false);
}

return (
    <div className="App">
      <Title titleName="Learning WebDev Events" subtitleName="All the necessary tasks for learning webdev"/>
      {!showEvents && <button onClick={() => setShowEvents(true)}>Show events</button>}
      {showEvents && <button onClick={() => setShowEvents(false)}>Hide events</button>}
      
      {/* Sending events and function to handle events via props */}
      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      <button onClick={handleModal}>show offers</button>

      {/* Children.props, Used a dynamic template for Modal component*/}
      {showModal &&
        <Modal handleModal={handleModal}>
        <h2>Book a Appointment</h2>
        <p>Use code #Arjit at checkout to get 10% Off</p>
      </Modal>}
    
    </div>
  );
}

export default App;