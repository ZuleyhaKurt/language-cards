import { useState } from "react"
const Card = (data) => {
    const { name, img, options } = data
    

    const [click, setClick] = useState(true)
    const handleClick = () => {
      setClick(!click)
  }
  
    return (
       click ?
      <div className="card w-50" onClick={handleClick}>
          <p>{name}</p>
          <img src={img} alt="" />
            </div>
            :
            <div className="card w-50" onClick={handleClick}>
            <p>{name}</p>
                <p>{options}</p>
              </div> 
            
  )
}

export default Card