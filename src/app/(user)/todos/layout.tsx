import TodoList from "./todoList";

const RootLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <main className='flex'>
            <div>
                {/*@ts-ignore*/}
                <TodoList/>
            </div>
            <div className={'flex-1'}>{children}</div>
        </main>
    );
};

RootLayout.defaultProps = {}

export default RootLayout;