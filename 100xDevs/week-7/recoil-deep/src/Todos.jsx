
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './todoatoms';

function TodoApp() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={3} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <br />
        <button onClick={()=>{

            setTodo({ 
                id: 2,
                title: "changed",
                description: "also changed"
            })
        }}>Change a atom</button>
    </>
  )
}

export default TodoApp