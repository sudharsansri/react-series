export const Content=({res,items})=>{
    const {name, rating,image,reviewCount} = res;
   
  
    return (
        <div className="card">
           <img src={image} alt="works"/>
           <p>{name}</p>
              <p>{rating} stars</p>
              <p>{reviewCount}₹ 200 for one</p>
        </div>
    );
}
