import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export default function Portfolio({ismode}) {

    return(
        <div>
            <Home ismode={ismode}/>
            <About ismode={ismode}/>
            <Projects ismode={ismode} />
            <Skills ismode={ismode} />
            <Contact ismode={ismode} />
            
        </div>

    );
}