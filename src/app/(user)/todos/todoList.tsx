import Link from "next/link";

interface ITodoList {
}



const fetchTodos = async () => {
    const timeout = Math.floor(Math.random() * 5 +1 ) *1000
    await new Promise(resolve => setTimeout(resolve, timeout));
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos:ITodo[] = await res.json();
    return todos;
}

 const TodoList = async (props: ITodoList) => {
    console.log('@@@') // 只执行一次
    const todos =  await fetchTodos();
    return (
        <>
            {todos.map(todo => (
                <p key={todo.id}>
                    <Link href={`/todos/${todo.id}`}>Todo:{todo.id}</Link>
                </p>)
            )}
        </>
    )
};

TodoList.defaultProps = {}

export default TodoList;