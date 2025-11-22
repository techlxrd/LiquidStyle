 (function initLiquidGlass() {
      
            if (document.getElementById('liquid-filter')) return;

      const svgNS = "http://www.w3.org/2000/svg";
      
      const svg = document.createElementNS(svgNS, "svg");
      svg.style.position = "absolute";
      svg.style.width = "0";
      svg.style.height = "0";
      svg.style.pointerEvents = "none";
      svg.style.zIndex = "-1";
     
      svg.innerHTML = `
        <filter id="liquid-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feTurbulence type="turbulence" baseFrequency="0.01 0.02" numOctaves="2" seed="2" result="turbulence" />
          <feGaussianBlur stdDeviation="2" in="SourceGraphic" result="blur" /> 
          <feDisplacementMap in="blur" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" result="distort" />
          <feComposite operator="in" in="distort" in2="SourceGraphic" result="final" />
        </filter>
      `;
      
      document.body.appendChild(svg);
    })();