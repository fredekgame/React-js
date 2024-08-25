export const Product = ({ name, imgUrl, price }) => {
    return (
      <>
        <h2>{name}</h2>
        <img src={imgUrl} alt="Tacos With Lime" width="640" />
        <p>Price: {price} credits</p>
      </>
    )
   }   