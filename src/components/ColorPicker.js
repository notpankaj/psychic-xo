import React, { useEffect, useState  } from 'react';
import ZenColors ,{ HexColors  } from '../colors';

function ColorPicker() {


    
  const [colorScheme, setColorScheme] = useState(null);
  const [isColorPickerActive, setIsColorPickerActive] = useState(false);

  const [isHexActive,setIsHexActive] = useState(false);  


  useEffect(() => {
    if (colorScheme) {  
      document.querySelector('body').style.backgroundColor = colorScheme;
      localStorage.setItem('colorScheme',colorScheme);
      
    }
  }, [colorScheme]);

  useEffect(()=> {
    setIsHexActive(document.querySelector('body').classList.contains('HEX'));
  });

    return (
        <section className="color__picker__container">
        <div className="color__picker" >
           <span 
             onClick={() => setIsColorPickerActive(!isColorPickerActive)} > 
               {isColorPickerActive ?   <strong>&#8855;</strong> : <strong><i className="fas fa-palette"></i></strong>  }
             </span>
           {isColorPickerActive && <div className="color__schemes" onMouseLeave={()=> setIsColorPickerActive(false)}>
            {
              isHexActive ? 
              HexColors.map( color => {
                return <button key={color.id} onClick={() => { setColorScheme(`${color.color}`); setIsColorPickerActive(false); }} style={{ background: `${color.color}` }} ></button>
              })
              :
              ZenColors.map( color => {
                return <button key={color.id} onClick={() => { setColorScheme(`${color.color}`); setIsColorPickerActive(false); }} style={{ background: `${color.color}` }} ></button>
              })
            }
           </div>}
         </div>
        </section>
   
    )
}

export default ColorPicker
