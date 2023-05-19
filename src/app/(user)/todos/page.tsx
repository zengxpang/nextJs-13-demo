interface ITodo {
}

const Todo = (props: ITodo) => {
    return (
        <div>This is where Todos will be listed...</div>
    );
};

Todo.defaultProps = {}

export default Todo;