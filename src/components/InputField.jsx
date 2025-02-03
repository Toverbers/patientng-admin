import { Container } from "postcss";


const InputField = ({
  id,
  title,
  type,
  icon,
  suffixIcon,
  placeholder,
  required,
  onChange,
  value,
  isDisabled,
  errorMessage,
  containerStyle,
  ...props
}) => {
  return (
    <div className="w-full">
      {title && (
        <p className="text-[#252525] text-[14px] font-medium">{title}</p>
      )}
      <div className={`mb-5 relative w-full ${containerStyle}`}>
        {icon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img src={icon}  className="h-[20px] w-[20px]" alt="icon" />
          </div>
        )}
        <input
          type={type}
          id={id}
          className={
            "py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#27B973] focus:border-[#27B973] block w-full p-2.5 placeholder-[#68727D] text-[16px]" +
            (isDisabled
              ? " cursor-not-allowed bg-[#DEDEDE] text-[#808080]"
              : "") +
            (icon && " ps-12")
          }
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value}
          disabled={isDisabled}
          readOnly={isDisabled}
          {...props}
        />

        {suffixIcon && (
          <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
            <img src={suffixIcon} className="h-[20px] w-[20px]"  alt="icon" />
          </div>
        )}

        {/* {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )} */}
      </div>
    </div>
  );
};

export default InputField;
