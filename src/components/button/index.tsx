import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  textColor?: string;
  hoverColor?: string;
  width?: string;
  height?: string;
  textSize?: string;
  arrowSize?: string;
  disabled?: boolean;
  rtl?: boolean;
}

export default function Button({
  text = "",
  onClick,
  className = "",
  textColor = "text-white",
  hoverColor = "hover:text-amber-500",
  width = "w-[130px]",
  height = "h-[60px] min-h-[60px]",
  textSize = "text-[13px]",
  arrowSize = "w-6 h-6",
  disabled = false,
  rtl = false
}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`group/parent ${textColor} ${hoverColor} ${width} ${height} relative flex items-center justify-center transition-colors duration-300 max-sm:scale-75 max-xs:scale-[.69] ${rtl ? 'rtl:rotate-180' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      <p className={`${textSize} ${rtl ? 'rtl:rotate-180' : ''} font-medium z-10`}>
        {text}
      </p>
      
      {/* Border Frame */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="130" 
          height="61" 
          viewBox="0 0 201 61" 
          fill="none"
          className="w-full h-full"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M1.45605 1.41626H199.456V14.0148H200.456V1.41626V0.41626H199.456H1.45605H0.456055V1.41626V59.4163V60.4163H1.45605H199.456H200.456V59.4163V46.8176H199.456V59.4163H1.45605V1.41626Z" 
            className="fill-white group-hover/parent:fill-amber-500 transition-colors duration-300"
          />
        </svg>
      </div>
      
      {/* Arrow Icon */}
      <div className={`z-30 absolute -right-6 transition-all duration-300 top-1/2 -translate-y-1/2 flex items-center ${disabled ? '' : 'group-hover/parent:-right-8'}`}>
        <ArrowRight 
          className={`${arrowSize} stroke-white group-hover/parent:stroke-amber-500 transition-colors duration-300`}
          strokeWidth={1.5}
        />
      </div>
    </button>
  );
}