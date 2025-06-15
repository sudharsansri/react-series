export const Content=(props)=>{
    const {name, rating,image,reviewCount} = props.res;
  
    return (
        <div className="card">
           <img src={image} alt="works"/>
           <p>{name}</p>
              <p>{rating} stars</p>
              <p>{reviewCount}₹ 200 for one</p>
        </div>
    );
}
