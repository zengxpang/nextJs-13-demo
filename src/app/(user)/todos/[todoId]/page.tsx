import {notFound} from "next/navigation";


interface ITodoPage {
    params: {
        todoId: string;
    }
}



const fetchTodo = async (todoId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,{next: {
            revalidate:60
        }});
    const todo:ITodo = await res.json();
    return todo;
}

const TodoPage = async ({params:{todoId}}: ITodoPage) => {
    const todo = await fetchTodo(todoId);

    if(!todo.id) {
        return notFound()
    }

    return (
        <div className="p-10 bg-orange-500 border-2 m-2 shadow-lg">
            <p>
                #{todo.id}:{todo.title}
            </p>
            <p>Completed:{todo.completed ? "YES":"NO"}</p>
            <p className={"border-t border-black mt-5 text-right"}>By User:{todo.userId}</p>
        </div>
    );
};

TodoPage.defaultProps = {}

export default TodoPage;

// GenerateStaticParams函数可以与动态路由段结合使用，以便在构建时静态生成路由，
// 而不是在请求时按需生成路由。
export async function generateStaticParams (){
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos:ITodo[]= await res.json();
    const preTodos = todos.splice(0,10)
    return  preTodos.map(todo=>({
        todoId:todo.id.toString()
    }))
}