const myComponent = () => {
    const arr = [1, 2, 3, 4, 5]

    return (
        {
            arr.map((val) => {
                return <h1>HELLO WORLD</h1>
            })
        }
    )
}

export default myComponent