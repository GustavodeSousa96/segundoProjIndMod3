import img1 from '../../img/carrossel1.png'
import img2 from '../../img/carrossel2.png';
import img3 from '../../img/carrossel3.png';


const Carrossel = () => {
    return (
    <section className="container-fluid">
     
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img src={img1} class="d-block w-100" alt="..."/>
         </div>
         <div class="carousel-item">
           <img src={img2}  class="d-block w-100" alt="..."/>
         </div>
         <div class="carousel-item">
           <img src={img3}  class="d-block w-100" alt="..."/>
         </div>
       </div>
       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
       </button>
       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
       </button>
     </div>
     
     </section>
       );
     };
    
export default Carrossel;