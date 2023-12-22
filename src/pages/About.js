import React from "react";
import Navbar from '../components/Navbar';
import me from './me.jpg';

export default function About() {


    return (
        <div className="About">
            <Navbar />



            <div className='about-card'>

                <h1>About</h1>
                <div className='tex'>
                    <p className="p1">Hello, I am Dame Teferi, a passionate student of software engineering at Dire Dawa University, specializing in frontend development. I am dedicated to creating visually appealing and user-friendly interfaces that enhance the user experience. I am constantly seeking out the best ideas and innovative solutions to create engaging and efficient designs. I am excited to continue learning and growing in this field as I work towards becoming a top-notch frontend developer.
                   
                    </p>
                </div>

     <div> 
     <img  src={me} alt="" />
     </div>
                




                <div className='tex2'>
                    <p className="p2">  I am constantly honing my skills and pushing the boundaries of what is possible in frontend development. I love the challenge of finding unique and creative solutions to design problems, and I am always eager to explore new technologies and techniques to improve my work.

                        I believe that a great frontend developer not only has strong technical skills but also a keen eye for design and a deep understanding of user behavior. I strive to create seamless and intuitive interfaces that not only look great but also provide a smooth and enjoyable user experience.

                    </p>
                </div>


            </div>
        </div>
    )
}
