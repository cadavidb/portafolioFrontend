import {useEffect,useState} from 'react'
const axios =require('axios');
export const Proyectos = () => {



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


        {(!state[0]?console.log('cargando'):
        state.map(data=>{
            return (
                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        {data.name}
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
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
