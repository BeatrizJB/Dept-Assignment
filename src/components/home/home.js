import React from "react"
import Clients from "../clients/clients"
import Works from "../works/works"
import Filters from "../filters/filters"
import Form from "../form/form"
import { testemonial, worksInfo } from "../../data/work-data"
import { clientsIntro, clientsLogo} from "../../data/clients-data"

const Home = () => {
    return(
        <section>
            <Filters />
            <Works worksInfo={worksInfo} testemonial={testemonial} />
            <Clients clientsIntro={clientsIntro} clientsLogo={clientsLogo}/>
            <Form />
        </section>
    )
} 

export default Home