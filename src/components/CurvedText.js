/*
Draws text around a circule (the object).
Text is centered at the top of the circle.
Depends on styled-components, but can be adapted for other frameworks.
<CurvedText
  text="I'm curved"
  objectSize={100} // diameter of the circle to wrap the text around
  spacing={12} // padding between the circle and text
  offset={30} // ammount of space for text, make this bigger to stop larger text from being cropped
  overlap={true} // sets the bottom margin to negative so that the text is centered around the object
/>
*/

import React from 'react'
import styled from 'styled-components'

export default ({text, objectSize = 120, spacing = 12, offset = 30, overlap = false}) => {
    const d = objectSize + spacing * 2
    const r = objectSize / 2 + spacing / 2
    const CurvedText = styled.div`
      margin-bottom: ${overlap ? `-${r}px` : '0'};
      width: ${d + offset * 2}px;
      height: ${r + offset}px;
      font-size: 2rem;
      font-weight: bold;

      path {
        fill: transparent;
      }

      text {
        fill: currentColor;
        text-anchor: middle;
      }
    `

    return (
        <CurvedText className="curved-text">
            <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                <path id="curve" d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${d + offset},${r + offset}`}/>
                <text width="500">
                    <textPath xlinkHref="#curve" startOffset="50%">
                        {text}
                    </textPath>
                </text>
            </svg>
        </CurvedText>
    )
}