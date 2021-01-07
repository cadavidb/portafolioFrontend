
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
console.log(state)







    return (
        <>


        {(!state[0]?<div classNameName="spinner-border text-primary" role="status">
               <span className="visually-hidden">Loading...</span>
             </div>:
        state.map(data=>{

          const {image,descripcion,name,github,deploy}= data;
            return (
                <div className="accordion accordion-flush" id="accordionFlushExample" key={name}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        {name}
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{descripcion}</div>
            
            

            {
                (image&&github&&deploy?<>
                <img src={image} key={name} alt={name} id="imgs_proyecto"/>
                <a className="btn btn-success" href={deploy}>sitio web</a>
                <a className="btn btn-primary" href={github} >Ver codigo Fuente <img id="icon" alt="icon" src="https://www.flaticon.es/svg/static/icons/svg/25/25231.svg"/></a>
                </> :

                <a className="btn btn-primary" href={github} >Ver codigo Fuente <img id="icon" alt="icon" src="https://www.flaticon.es/svg/static/icons/svg/25/25231.svg"/></a>)
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
