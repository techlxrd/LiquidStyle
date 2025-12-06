function isAppleDevice() {
    const ua = navigator.userAgent;
   
    const isIOS = /iPhone|iPad|iPod/.test(ua) && !window.MSStream;
    
    
    
    return isIOS;
}

(function initLiquidGlass() {
    const TARGET_CLASS_SELECTOR = '.liquid-glass';

    if (isAppleDevice()) {
        console.log("Liquid Glass: Apple device detected. Injecting CSS blur fallback styles.");

        const elements = document.querySelectorAll(TARGET_CLASS_SELECTOR);

        elements.forEach(el => {
           
            
            const blurStyles = `
                background: rgba(255, 255, 255, 0.13) !important;
                backdrop-filter: blur(7px) saturate(180%)!important;
                -webkit-backdrop-filter: blur(7px) saturate(180%)!important;
                border: 1px solid rgba(255, 255, 255, 0.25)!important;
                box-shadow:
                    0px 0px 0px 2px rgba(255, 255, 255, 0.05) inset,
                    0px 0px 100px 10px rgba(255, 255, 255, 0.05) inset,
                    0 0.5px 0px rgba(255, 255, 255, 0.525) inset !important;
                
                filter: none !important; 
            `;
            
            
            el.style.cssText += blurStyles.trim();
        });

       
        return;
    }

   

    const SVG_FILTER_ID = 'liquid-filter';

    
    if (document.getElementById(SVG_FILTER_ID)) return;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");

    svg.style.position = "absolute";
    svg.style.top = "-10000px";
    svg.style.left = "-10000px";
    svg.style.width = "1px";
    svg.style.height = "1px";
    svg.style.overflow = "hidden";

    svg.innerHTML = `
      <filter id="${SVG_FILTER_ID}" x="-50%" y="-50%" width="200%" height="200%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">

        <feTurbulence type="turbulence" baseFrequency="0.01 0.02" numOctaves="2" seed="2" result="turbulence" stitchTiles="noStitch" />

        <feGaussianBlur stdDeviation="2" in="SourceGraphic" result="blur" />

        <feDisplacementMap in="blur" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" result="final" />

        </filter>
    `;

    document.body.appendChild(svg);

})();