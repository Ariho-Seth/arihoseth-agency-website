import { Header, StickyHeader, Footer, HelpUs } from "../components/MainSections";
import { BlogSection } from "./Home";

export const About= ()=>{
    return(
            <div className="main-About">
                <Header />
                <StickyHeader>
                     <h2>This is the About page</h2>
                </StickyHeader>
               
                <BlogSection />
                <HelpUs />
                <Footer />
       
            </div>
        
    )
}