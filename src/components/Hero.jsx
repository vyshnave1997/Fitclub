import React from "react";

import './Hero.css';

import Header from "./Header";
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/*best ads section starts */}
                {/*best ads section ends 
                <div className="the-best-ad">
                    <motion.div initial={{ left: mobile? "160px":'238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>The best fitness club in the town</span>
                </div>
                {/*best ads section ends */}


                {/*hero title section starts */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape</span>
                        <span> Your</span>
                    </div>
                    <div className=""><span>Ideal body</span></div>
                    <div className=""><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
                </div>


                {/*hero title section ends */}

                {/*hero figures section starts */}
                <div className="figures">
                    <div>
                        <span><NumberCounter end={140} start={100} delay={4} className="increment" preFix="+" postFix=""/></span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={900} delay={4} className="increment" preFix="+" postFix=""/></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={1} delay={4} className="increment" preFix="+" postFix=""/></span>
                        <span>fitness progress</span>
                    </div>
                </div>
                {/*heri figures section ends */}

                {/*hero button section starts */}
                <div className="hero-buttons">
                    <button type="button" className="btn">Get started</button>
                    <button type="button" className="btn">Learn More</button>
                </div>


                {/*hero button section ends */}
                {/*hero right section starts */}

            </div>
            <div className="right-h">
                <button type="button" className="btn btn-j">Join Now</button>
                <motion.div initial={{ right: '-1rem' }}
                    whileInView={{ right: '3rem' }}
                    transition={{ ...transition, type: 'tween' }} className="heart-rate">
                    <img src={Heart} alt=""></img>
                    <span>Heart Rate</span><div className="Heart-rate-t2"><span className="text">116 bpm</span></div>
                </motion.div>


                <img src={hero_image} alt="" className="hero-image"></img>
                <motion.img 
                initial={{right: '11rem'}}
                whileInView={{ right: '20rem' }}
                transition={transition}
                src={hero_image_back} alt="" className="hero-image-back"></motion.img>
                <motion.div 
                initial={{right: '37rem'}}
                whileInView={{ right: '28rem'}}
                transition={transition}
                className="calories">
                    <img src={Calories} alt="" className="" />
                    <div><span>Calories Burned</span><span>220 kacl</span></div>

                </motion.div>
            </div>
            {/*hero right section ends */}

        </div>
    )
}

export default Hero;