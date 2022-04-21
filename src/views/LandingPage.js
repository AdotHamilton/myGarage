import React from 'react'
import PorcheImg from "../media/porsche.jpg"
import Header from '../components/Header';
import './index.css';
const LandingPage = () => {
    const headerLinks = [
        {
           url: "/",
           label: "Home"
       },
       {
           url: "/#about_us",
           label: "About Us"
       },
       {
           url: "/#pricing",
           label: "Pricing"
       },
       {
           url:"/login",
           label:"Login"
       }
   ]
    return (
    <div>
        <section id="hero_container">
            <Header links={headerLinks} />
            <div id="hero_image"></div>
            <div id="content">
                <h1 id="hero_header">Connecting Individuals in the Automotive Community</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ex excepturi laboriosam tenetur, perferendis praesentium itaque unde, doloribus rerum perspiciatis ad asperiores hic officiis nemo ipsa odio, alias nobis rem?</p>
                <a href="/register" id="hero_action">Join Now!</a>
            </div>
            <div id="content_bottom">
                <h1>Learn More!</h1>
                <a href="#features" id="pointer">&#709;</a>
            </div>

        </section>
        <section id="features">
            <h1>Features</h1>
            <div id="features_grid">
                <div className="features_tile">
                    <div>
                        <h3>Find and Host Events</h3>
                        <p>Looking for a group to cruise with, but dont know where to look? Want to start your own?<br /><strong> No Problem!</strong>
                            <br /> myGarage provides public boards to find local meeting dates and locations <i>powered by Google Maps</i></p>
                    </div>

                </div>
                <div className="features_tile">
                    <h3>Connect with Other Owners of Your Vehicle</h3>
                    <p>Reach out and recieve expert advice for DIY maintainence, parts installation, tricks of the trade, and niche info on your vehicle.</p>
                </div>
                <div className="features_tile">
                    <h3>Find the Best Local Automotive services</h3>
                    <p>Accidents happen, but we can help you find the best body repair, at the best price. <br /><br /> Looking for tint? Vinyl Wrap? We got you covered. <br /><br /> Get connected with the best local tuners and performance shops for your vehicle.</p>
                </div>
                <div className="features_tile">
                    <h3>Find Market Value Data for Your Car</h3>
                    <p>Wondering how much you can get for your car? Can't decide on trade-in, or private sale? Want to get updated auction data from across the country?<br /> <strong> We can help!</strong></p>
                </div>
                <div className="features_tile">
                    <h3>Insurance and Service History</h3>
                    <p>Want to buy a car, but the owner wont disclose the vehicle's history? If you can get the VIN # we can help you get info on title status, prior salvage, rear-end collisions, engine replacement, and regular maintenance.</p>
                </div>
                <div className="features_tile">
                    <h3>Cant Decide what Color Would Look Best?</h3>
                    <p>Just provide us with the Year, Make, and Model of your vehicle, your desired color, and get inspiration immediately!</p>
                </div>
            </div>
        </section>
        <section id="about_us">
            <h1>About us</h1>
            <div id="about">
                <div className="about_content">
                    <div>
                        <h2>A networking and media platform <strong>For Enthusiasts, by Enthusiasts.</strong></h2>
                        <p>We understand the headaches involved when looking for the right shop to take <strong>your vehicle.</strong><br /> The best prices can often be found with local businesses, and not the dealer. Find qualified Technicians and shops that specialize in the service you're looking for.</p>
                    </div>
                    
                    <img src={PorcheImg} alt="Porsche" />
                </div>
                <div className="about_content" id="video_container">

                <div>
                    <h2>Our goal is to centralize the space for automotive culture.</h2>
                    <p> To connect enthusiasts with eachother, and build the local automotive community in every town. Our goal is to unify the collective knowledge of the community, from experienced mechanics, to DIY masters, so you don't have to go scrubbing through ten-year-old forum posts and miscellaneous car groups, to find the info you need. myGarage is a one stop shop for everything automotive.

                    </p>
                </div>
                <div>
                    <iframe id="player" width="560" height="315" src="https://www.youtube.com/embed/8O6QukfEDtQ?&start=15" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </div>

                </div>

            </div>

        </section>
        <section id="pricing">
            <h1>Pricing</h1>
            <p>Just want to interact and stay in touch with the community? <br />Good News! myGarage is 100% <strong>FREE</strong> to the individual and the business. </p>
            <p>We do, however, offer different pricing packages for businesses who wish to advertise their services</p>
            <div id="pricing_table_container">
                <table>
                    <tbody>
                        <tr id="table_head">
                            <th>Payment Tier</th>
                            <th>Features</th>
                            <th>Price</th>
                        </tr>       
                        <tr>
                            <th>Free</th>
                            <td>Create posts and manage page</td>
                            <td>Free!</td>
                        </tr>
                        <tr>
                            <th>Basic</th>
                            <td>Advertise services and boost community engagement</td>
                            <td>5$/mo</td>
                        </tr>
                        <tr>
                            <th>Premium</th>
                            <td>Get bumped to the top of the list with 3 AdBoosts/mo</td>
                            <td>15$/mo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="back_to_top">
                <p>Back to top?</p>
                <a href="#hero_container" id="pointer">&#708;</a>
            </div>
        </section>
    </div>
  )
}

export default LandingPage