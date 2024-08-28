import { Header, StickyHeader, Footer, HelpUs } from "../components/MainSections";
import { BlogSection } from "./Home";
export const Services= ()=>{
    return(
        <div className="main-Services">

                <Header />
                <StickyHeader />
                   
               
                <h2>This is the  Services Page</h2>
                <BlogSection />
                <HelpUs />
                <Footer />
        </div>
        
    )
}