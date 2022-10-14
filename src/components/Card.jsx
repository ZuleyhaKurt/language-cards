import { useState } from "react"
const Card = (data) => {
    const { name, img, options } = data
    

    const [click, setClick] = useState(true)
    const handleClick = () => {
      setClick(!click)
  }
  
    return (
       click ?
            <div className="box1" onClick={handleClick}>
                <img src={img} alt="" />
                <p className="name"><b>{name}</b></p>
            </div>
            :
            <div className="box1" onClick={handleClick}>
                <ul className="options">
                    <li>{options[0]}</li>
                    <li>{options[1]}</li>
                    <li>{options[2]}</li>
                </ul>
              </div> 
            
  )
}

export default Card