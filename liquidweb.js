(function initLiquidGlass() {
    if (document.getElementById('liquid-filter')) return;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    
    svg.style.position = "absolute";
    svg.style.top = "-10000px";
    svg.style.left = "-10000px";
    svg.style.width = "1px";
    svg.style.height = "1px";
    svg.style.overflow = "hidden";

    svg.innerHTML = `
      <filter id="liquid-filter" x="-50%" y="-50%" width="200%" height="200%" 
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