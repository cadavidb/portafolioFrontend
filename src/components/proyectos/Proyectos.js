
import {useEffect,useState} from 'react'
import './estilo.css'
const axios =require('axios');
export const Proyectos = () => {
  const pos=['One','Two','Three','Four','Five','Six']



     const [state, setstate] = useState({})

    useEffect(() => {

        axios.get('https://portafoliobrayanc.herokuapp.com/proyectos')
        .then(data=>{
            setstate(data.data)

        })

        
    }, [])

    const HandleClick=(link)=>{

      window.open(link)
    }








    return (
        <>


        {(!state[0]?<div className="spinner-border text-primary" role="status">
               <span className="visually-hidden">Loading...</span>
             </div>:
        state.map((value,i)=>{
         

          const {image,descripcion,name,github,deploy}= value;
            return (
                <div className="accordion accordion-flush" id="accordionFlushExample" key={name}>
  <div className="accordion-item">
    <h2 className="accordion-header" id={`flush-heading${pos[i]}`}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${pos[i]}`} aria-expanded="false" aria-controls={`flush-collapse${pos[i]}`}>
        {name}
      </button>
    </h2>
    <div id={`flush-collapse${pos[i]}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${pos[i]}`} data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" id="descripcion">{descripcion}</div>
            
            

            {
             
                (image&&github&&deploy?<div id="box">
                <img src={image} key={name} alt={name} id="imgs_proyecto"/>
            <button type="button" className="btn btn-link" onClick={()=>{
              HandleClick(deploy)
            }}>{deploy}</button>

             <button type="button" className="btn btn-link" onClick={()=>{
              HandleClick(github) }}>
              <img id="icon" alt="icon" src="https://www.flaticon.es/svg/static/icons/svg/25/25231.svg"/></button>
                
                </div> :
                <div id="code">


<button type="button" className="btn btn-link" onClick={()=>{
  HandleClick(github)
}}><img id="icon" alt="icon" src="https://www.flaticon.es/svg/static/icons/svg/25/25231.svg"/></button>



                </div>  


)
            }
    </div>
  </div>
  </div>

            )


            






        })
          
          
          
          
          
          
          
          )  



        }


        
      </>
    
      
    )
}
