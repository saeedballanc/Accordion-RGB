

import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';


 






function App(){



   
  const [list , setList] = useState([

    {
      question: 'Orange',
      answer: 'warmth, energy, happiness, enthusiasy',
      color: '#e17055',
      shadowtoggle: '0 0 15px 5px #e17055, 0 0 45px 10px #e17055, 0 0 100px 18px #e17055, 0px 0px 95px 15px #e17055',
      shadow: '0 0 15px 2px #e17055, 0 0 45px 3px #e17055, 0 0 2px 0 #e17055, 0 0 95px 1px #e17055' 
    },
    {
      question: 'Yellow',
      answer: 'sunshine, happiness, joy, intellect, caution',
      color: '#f5cd79',
      shadowtoggle: '0 0 15px 5px #f5cd79, 0 0 45px 10px #f5cd79, 0 0 100px 18px #f5cd79, 0 0 95px 15px #f5cd79',
      shadow: '0 0 15px 2px #f5cd79, 0 0 45px 3px #f5cd79, 0 0 2px 0 #f5cd79, 0 0 95px 1px #f5cd79' 
    },
    {
      question: 'Purple',
      answer: 'royalty, luxury, creativity, mystery',
      color: '#6c5ce7',
      shadowtoggle: '0 0 15px 5px #6c5ce7, 0 0 45px 10px #6c5ce7, 0 0 100px 18px #6c5ce7, 0 0 95px 15px #6c5ce7',
      shadow: '0 0 15px 2px #6c5ce7, 0 0 45px 3px #6c5ce7, 0 0 2px 0 #6c5ce7, 0 0 95px 1px #6c5ce7' 
    },
    {
      question: 'Blue',
      answer: 'calmnees, trust, loyalty, wisdon, mystery',
      color: '#17c0eb',
      shadowtoggle: '0 0 15px 5px #17c0eb, 0 0 45px 10px #17c0eb, 0 0 100px 18px #17c0eb, 0 0 95px 15px #17c0eb',
      shadow: '0 0 15px 2px #17c0eb, 0 0 45px 3px #17c0eb, 0 0 2px 0 #17c0eb, 0 0 95px 1px #17c0eb' 
    },
    {
      question: 'Pink',
      answer: 'innocence, fesininity, compassion, love',
      color: '#e84393',
      shadowtoggle: '0 0 15px 5px #e84393, 0 0 45px 10px #e84393, 0 0 100px 18px #e84393, 0 0 180px 15px #e84393',
      shadow: '0 0 15px 2px #e84393, 0 0 45px 3px #e84393, 0 0 2px 0 #e84393, 0 0 95px 1px #e84393' 
    },
    {
      question: 'Green',
      answer: 'nature, growth, health, harnony, money',
      color: '#C4E538',
      shadowtoggle: '0 0 15px 5px #C4E538, 0 0 45px 10px #C4E538, 0 0 100px 18px #C4E538, 0 0 180px 15px #C4E538',
      shadow: '0 0 15px 2px #C4E538, 0 0 45px 3px #C4E538, 0 0 2px 0 #C4E538, 0 0 95px 1px #C4E538' 
    },

  ]);



   return<>
   
      

   <div className='bg-[#000000] h-screen flex
       justify-center item-center'>

         <div className='list'>

            {
              list.map((item , key)=>{

                 return<>
                 
                     <Accordion key={key} datas={item}/>

                 </>

              })
            }
         </div>

       </div>



   </>
   
}



export default App;