
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import TodoApp from './Todos'
import TodoSelectorApp from './TodoSelector';

function App() {
  
  return <>
    <TodoSelectorApp />
  </>
  
  
  // ATOM FAMILY
  // return <>
  //   <TodoApp />
  // </>

  // Notification APP
  // return <RecoilRoot>
  //   <MainApp />
  // </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App