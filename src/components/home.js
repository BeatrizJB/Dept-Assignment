import React from "react"
import Clients from "./clients"
import Works from "./works"
import Form from "./form"
import { testemonial, worksInfo } from "../data/work-data"
import { clientsIntro, clientsLogo} from "../data/clients-data"

const Home = () => {
    return(
        <section>
            <Works worksInfo={worksInfo} testemonial={testemonial} />
            <Clients clientsIntro={clientsIntro} clientsLogo={clientsLogo}/>
            <Form />
        </section>
    )
} 

export default Home