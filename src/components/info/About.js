import React, { useState, useEffect } from 'react'

const  axios= require('axios');
export const About = () => {

    const [info, setinfo] = useState({})

    const {name,profession,about_me,photo,skills}=info;


    useEffect(() => {
        axios.get('https://portafoliobrayanc.herokuapp.com/about')
        .then(data=>{
           setinfo(data.data[0])
        })
    }, [])
    



    return (


      <>











        <div className="container">
  <div className="row">
    <div className="col">
    {
              (!photo? <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>:



<div className="card" style={{width:'18rem'}}>
  <img className="card-img-top" src={photo} alt={photo}/>
  <div className="card-body">
    <p className="card-text">
      naci en el departamento del cesar, municipio de aguachica un 12 de diciembre del año 1997.
      Desde muy niño demostre un gran interes por la computacion. con el pasar del tiempo descubri
      el maravilloso mundo de la programacion. desde ese dia, feliz no he parado de aprender...
       

    </p>
  </div>
</div>

            
            
            
            )
         }
    </div>
    <div className="col">
    {
               (!skills?<div className="spinner-border text-primary" role="status">
               <span className="visually-hidden">Loading...</span>
             </div>:<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">¡Hola!</h1>
    <p className="lead">Mi nombre es {name} soy {profession} con experiencia en </p>
    <img src="https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg" className="img-fluid" alt={photo}></img>
    
    <p className="lead">Tengo excelentes habilidades en {skills.map(s=><span className="lead" key={s}>{s} </span>)}</p>
   <p className="lead"> Mi objetivo principal es lograr crear aplicaciones web de alta calidad y trabajar con la mayor responsabilidad y eficiencia posible.</p>
   <p className="lead"> Estoy constantemente aprendiendo nuevas cosas, por lo que me considero un autodidacta de corazón con el fin de estar ganando más experiencia en el desarrollo de las tecnologías.</p>
  </div>
</div> )
           }
    </div>
  </div>
  </div>







  <footer className="bg-light text-center text-lg-start">
  
  <div className="text-center p-3" >
    © 2020
    <a className="text-dark" href="https://github.com/cadavidb">Brayan Cadavid</a>
  </div>
  
</footer>


</>
    )
}
