import React, {Component} from 'react'; 

export default class LandingPage extends Component {
    constructor(props){
        super(props); 
    }
    
    render(){
        return (
            <div className="landing">
                <div className="landing-container">
                    <div className="landing-container-top">
                        <h2 className="landing-container-top-title">Diffusion</h2>
                        <h2 className="landing-container-top-slogan">One Platform to Subscribe to Life.</h2>
                    </div>
                    <div className="landing-container-mission">
                        <h2 className="landing-container-mission-title">Mission</h2>
                        <h2 className="landing-container-mission-main">
                            We've come a long way with subscriptions for every application from movie streaming to grocery delivery. The purpose of a subscription is to be mutually beneficial. That is, the individual should be rewarded for a continuous interest in the use of some product and the company secures a steady income per person. Diffusion aims to allow a person to subscribe to a plan that captures all of the habitual aspects of an individual's life from haircuts and beauty salon visits to meals and memberships. An individual will be able to easily modify and maintian a personalized subscription all in one, easy to use, interface. </h2>
                    </div>
                    <div className="landing-container-benefits">
                        <h2 className="landing-container-benefits-individuals">Benefits to Individuals</h2>
                        <h2 className="landing-container-benefits-individuals-main">
                            Individuals subscribe to so many different platforms without one hub to combine the localized services individuals use each day, week, month, or year. This platform also allows even your local barbershop to create subscriptions for their customers at discounted rates. Combine more services in your customized subscription for an even better rate.
                        </h2>
                        <h2 className="landing-container-benefits-companies">Benefits to Companies</h2>
                        <h2 className="landing-container-benefits-companies-main">
                            One of the primary things companies struggle with is maintaining a customer. Not only is the cost to acquire a customer enormous, but maintaining a customer is a whole different ball game. One means of doing so is rewarding those loyal to you with slight discuont on your goods/services. You can custom build your own subscription plans to best suit your business needs and get data regarding all of your subscribers in real time on our web application. 
                        </h2>
                    </div>
                    <div className="landing-container-bottom">
                    </div>
                </div>
            </div>
        )
    }
}