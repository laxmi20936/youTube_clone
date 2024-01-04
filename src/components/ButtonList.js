import Button from "./Button"
const ButtonList = () => {
    const btnArr = ["All", "Music", "Lives", "ComputerScience", "T-series", "Mixes"]
    return (
        <div className="flex">
            {
                btnArr.map((btn, index) => <Button  key= {index} name={btn}/>)
            }
          
        </div>
    )
}

export default ButtonList