import { Header, StickyHeader, Footer, HelpUs } from "../components/MainSections";

export const Services= ()=>{
    return(
        <div className="main-Services">

                <Header />
                <StickyHeader />
                   
               
               
                


                <ServiceContent />
                <HelpUs />
                <Footer />
        </div>
        
    )
}

const ServiceContent=()=>{

    return(
        <div className="why-socialMedia">

                            <h2>Why social Media Marketing?</h2>
                        <h3>Brand Awareness</h3> 
                            <p>Creating brand awareness increases market share and shortens the sales process which positions a brand 
                            as a leader in its sector
                            By establishing a strong presence on popular social media platforms, businesses can reach a wider audience and 
                            introduce their brand to potential clients.</p>
                        <div className="webTraffic" style={{backgroundImage:"URL('./media/web trafic.JPG')"}}>
                        <h3>Drive Website Traffic</h3> 
                        </div>
                        
                            <p>We serve as valuable channels for driving traffic to your website or landing pages. By optimizing your socialmedia 
                                platforms with clear call to action and compelling descriptions.
                                By running targeted ad campagainsto promote specific products and servises to your audience
                            </p>

                        <h3>Generate Leads and Sales</h3>
                            <p> Social Media Management can directly contribbute to lead generation and sales by capturing the intrests of potential 
                                clients and guiding them through the purchace journey</p>

                 </div>
    )
}