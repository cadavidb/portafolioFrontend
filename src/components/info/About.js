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


        <div classNameName="container">
  <div classNameName="row">
    <div classNameName="col">
    {
              (!photo? <div classNameName="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>:<img alt="perfil" src={photo} id="perfil"/>)
         }
    </div>
    <div classNameName="col">
    {
               (!skills?<div classNameName="spinner-border text-primary" role="status">
               <span className="visually-hidden">Loading...</span>
             </div>:<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">¡Hola!</h1>
    <p className="lead">Mi nombre es {name} soy {profession} con experiencia en {skills.map(skill=><span>{skill} ,</span>)}
   </p>
   <p className="lead"> Mi objetivo principal es lograr crear aplicaciones web de alta calidad y trabajar con la mayor responsabilidad y eficiencia posible.</p>
   <p className="lead"> Estoy constantemente aprendiendo nuevas cosas, por lo que me considero un autodidacta de corazón con el fin de estar ganando más experiencia en el desarrollo de las tecnologías.</p>
  </div>
</div> )
           }
    </div>
  </div>
  </div>








        // <div>
        //   {
        //       (!photo? <h1>loading</h1>:<img alt="perfil" src={photo}/>)
        //   }
        //   {
        //       (!skills?<h1>loading informacion</h1>: <p> Hola! Mi nombre es {name} {profession} {about_me} tengo muchas habilidades entre las cuales estan {skills.map(e=>{
        //         return <li>{e}</li>
        //     })}  Estoy constantemente aprendiendo nuevas cosas, por lo que me considero un autodidacta de corazón con el fin de estar ganando más experiencia en el desarrollo de las tecnologías.</p>)
        //   }


       
    
         
        // </div>
    )
}
