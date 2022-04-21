import { Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import "./errorPage.css";
const ErrorPage = () => {
    const [ eyesPosition, setEyesPosition ] = useState()
    const { innerWidth, innerHeight } = window
    const [windowDimensions, setWindowDimensions] = useState({
        width: innerWidth,
        height: innerHeight,
    });

      useEffect(() => {
        function handleResize() {
          setWindowDimensions({
              width: innerWidth,
              height: innerHeight
          });
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    let { width, height } = windowDimensions;
    let mouseY=0;
    let mouseX=0;
    const handleMouseMove = (e) => {
        mouseY = e.clientY;
        let yAxis = (height/2-mouseY)/height*300; 
        //horizontalAxis
        mouseX = e.clientX / width;
        let xAxis = mouseX * 100 - 100;
        
        setEyesPosition({ 'transform': 'translate('+ xAxis +'%,-'+ yAxis +'%)' }); 
    }


    return (
        <div id="error_container" onMouseMove={handleMouseMove}>
            <div class="box">
                <div class="box__ghost">
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>

                    <div class="box__ghost-container">
                        <div class="box__ghost-eyes" style={eyesPosition}>
                            <div class="box__eye-left"></div>
                            <div class="box__eye-right"></div>
                        </div>
                        <div class="box__ghost-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="box__ghost-shadow"></div>
                </div>

                <div class="box__description">
                    <div class="box__description-container">
                        <div class="box__description-title">Whoops!</div>
                        <div class="box__description-text">It seems like we couldn't find the page you were looking for</div>
                    </div>

                    <Link to={"/"} class="box__button">Go back</Link>

                </div>

            </div>
        </div>
    )
}

export default ErrorPage;