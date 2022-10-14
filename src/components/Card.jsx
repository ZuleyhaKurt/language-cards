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
                <img src={img} alt="" />
                <p className="text-center">{name}</p>
            </div>
            :
            <div className="card w-50" onClick={handleClick}>
                <ul>
                    <li>{options[0]}</li>
                    <li>{ options[1]}</li>
                    <li>{options[2]}</li>
                </ul>
              </div> 
            
  )
}

export default Card