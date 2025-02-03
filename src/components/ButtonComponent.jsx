
import { Button } from './ui/button'

const ButtonComponent = ({
    title,
    preAppend,
    buttonStyle,
    append,
    icon,
    ...prop
}) => {
  return (
    <Button className={`font-bold p-3 w-full h-[45px] flex items-center space-x-2 text-center ${buttonStyle}`} {...prop}>
      {append}
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="w-5 h-5 mr-2"
        />
      )}
     {title}
     {preAppend}
    </Button>
  )
}

export default ButtonComponent