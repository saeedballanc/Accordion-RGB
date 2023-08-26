

 import { useState } from "react";
 import '../App.css';






 const Accordion = (props)=> {



  const [item , setItem] = useState(props.datas);




  const handleToggleActive = ()=>{

       
       let newActive = item.active === 1 ? 0 : 1;

       setItem({...item , active: newActive});

  };





    return<>
    


        
        <div className={`backdrop-blur-sm bg-opacity-50 p-5
             text-white m-4 contain border-r-[#262626] rounded-2xl w-[310px] duration-500
             group ${item.active === 1 ? 'is-active' : ''} `}>

             

               <div className='gugugaga duration-500 group-[.is-active]:h-[170px]'
                    style={{zIndex:'', boxShadow:`${item.active === 1 ? item.shadowtoggle : item.shadow}`,
                      background:`${item.color}`}}></div>


 
         <div className='flex item-center duration-500'>


                <div className='w-full question group-[.is-active]:font-bold'>{item.question}</div>




                <div className='text-3xl rotate-50 duration-500 group-[.is-active]:rotate-[90deg]
                                                              cursor-pointer  font-semibold mx-1'

                    onClick={handleToggleActive}>  {item.active === 1 ? '>' : '>'}</div>

        </div>





        <div className='overflow-hidden opacity-[0] h-12 duration-500 answer
               group-[.is-active]:opacity-[1] group-[.is-active]:ml-20 mt-8'>

                {item.answer}

        </div>


        
    </div>


    </>
 }





 export default Accordion;