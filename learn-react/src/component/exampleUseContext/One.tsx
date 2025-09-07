
import { Ninoos } from "./NinoosContext";
import Two from "./Two";

export default function One() {

    const message = "from One";

    return (
        <div className="one">
            <h2>component One</h2>

            <Ninoos.Provider value={message}>
                <Two />
            </Ninoos.Provider>

        </div>
    )
}
