import { useState } from "react"


import '../App.css';
import '../components/Style-Components.css';
import '../components/Style-Home.css';
import { Link } from "react-router-dom";
import { Header, Footer, HelpUs } from "../components/MainSections"




export const Home = () => {
    return (
        <div className="home-class">

            <Content />
            <HelpUs />
            <Footer />




        </div>
    )
}
// Content Section Starts Here!!

const Content = () => {
    return (
        <div className="content-Section">
            <div className="first-Content">
                <div className="left-content">
                    <p1 style={{ fontFamily: "Century Gothic", fontSize: "40px" }}>we are a <br /><b> Social Media Marketing Agency</b></p1>
                    <h2>Hey friends-</h2>
                    <p>I am <b>Ariho Seth,</b> A programmer, and Director  at <b>ArihoSethAgency, </b>
                        we offer different Sevices that are aimed at growing your Business and elevating it to an unbelivable level </p>
                </div>
                <div className="seth-pic">
                    <img src='./media/myseth.PNG'></img>


                </div>

            </div>

            <div className="work">
                <div className="our-work" >
                    <h2>What we do?</h2>
                    <p> <b>Ariho Seth Agency</b> is a company that helps businesses and individuals to leverage
                        social media platforms to achieve their Marketing and business goals
                        We can provide a wide range of services such as creating and managing social media accounts,
                        content creation, running ad campagains etc...
                    </p>

                </div>



                <div className="moreofUs" >
                    <h2>Want More?</h2>
                    <p>We provide services to help businesses, organisations and individuals promote their products,
                        services or brand on social media platforms.<br />
                        Assist companies in planing and implementing successful social media campagains.
                    </p>
                </div>



                <div className="whyAriho">
                    <h2>Why Choose us?</h2>
                    <p><b>Ariho Seth Agency </b> is a specialised Agency that is aimed at particular tasks in
                        the sector thus increasing expertise in such a field.<br />
                        Over 2 billion people worldwide use social media so
                        We bring you close and in contact to your potential customers through social media.
                    </p>
                </div>

            </div>
        </div>
    )
}


// Blog Section Starts Here!!
export const BlogSection = () => {

    const [blogs, setBlogs] = useState([
        { title: "The Fanciest Apple Product", authour: "Maques Brownlee", id: 1 },
        { title: "How to type lightening fast", authour: "Ali Abdaal", id: 2 },
        { title: "Tips on Productivity! ", authour: "Ariho Seth", id: 3 },
        { title: "The Financial Freedom longed for! ", authour: "Ali Abdaal", id: 4 }

    ])

    return (
        <div className="blog-container">
            {blogs.map((blogs) => {

                return (

                    <div className="blog-box">

                        {blogs.title}<br />
                        Authour: <b>{blogs.authour} </b> <br />
                        <Link to="/About">
                            <center>  <button>View Blog</button> </center>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}