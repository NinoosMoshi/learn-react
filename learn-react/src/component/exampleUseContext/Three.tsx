import { useContext } from "react"
import { Ninoos } from "./NinoosContext"


export default function Three() {

    const valueMessage = useContext(Ninoos)

    return (
        <div className="three">
            <h2>component Three</h2>
            {valueMessage}
        </div>
    )
}
