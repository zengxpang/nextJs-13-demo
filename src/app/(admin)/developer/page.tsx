interface IDeveloper {
}

const page = (props: IDeveloper) => {
    return (
        <>
            <div className='w-32 h-32 bg-orange-500 m-2 text-center'>text</div>
            <div className="menu">首页</div>
            <div className="w-32 h-32 bg-blue-500 dark:bg-green-500">暗黑模式</div>
        </>
    );
};

page.defaultProps = {}

export default page;