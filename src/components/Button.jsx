
const Button = ({onClick ,style ,title}) => {
  return (
    <div onClick={onClick} className={`${style}   `}> 
        {title}
    </div>
  )
}

export default Button