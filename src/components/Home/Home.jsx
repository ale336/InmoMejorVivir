import React from 'react'

const Home = () => {
  
    return (
    
        <section className='galeria'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img src="images/unidad1.1.jpg" className='item-galeria' alt='casa1'></img>
                    </div>
                    <div className='col'>
                        <img src="images/unidad2.1.jpg" className='item-galeria' alt='casa2'></img>
                    </div>
                    <div className='col'>
                        <img src="images/unidad3.1.jpg" className='item-galeria' alt='casa3'></img>
                    </div>
                </div>
            </div>
        </section>
        
  )
}

export default Home;