import { useEffect, useState } from 'react'

const Effect = () => {

    const [count, setcount] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(() => { console.log(count, show) }, [count, show])

    useEffect(() => {
        const refContainer = document.getElementById('refContainer')
        console.log(refContainer);
    }, [show])

    return (
        <div id="refContainer">
            <p>You clicked {count} times</p>
            <button onClick={() => setcount(count + 1)}>
                Click me
            </button>
            <div><button onClick={() => setShow(!show)}>
                change
            </button></div>
        </div>
    )
}

export default Effect
