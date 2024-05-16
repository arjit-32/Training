
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './TodoSelectorAtom';

function TodoSelectorApp() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3} />
  </RecoilRoot>
}

function Todo({id}) {
//    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

// Better we make use of useRecoilStateLoadable as Todos are coming from an actual server
    const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

    if(todo.state === "loading") {
        return <div> Loading .. </div>
    } else if(todo.state === "hasError"){
        return <div> Error </div>
    }

    return (
        <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
        </>
    )
}

export default TodoSelectorApp