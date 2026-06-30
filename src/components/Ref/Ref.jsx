import { useRef } from 'react'

const Ref = () => {

    const userName = useRef(0)

    function name() {
        userName.current++
        console.log(userName.current)
    }
    return (
        <div>
            <input
                type="text" placeholder="userName" />
            <button type="button" onClick={name}>Click me</button>
        </div>
    )
}

export default Ref 
