import classNames from 'classnames';

const Button = ({
   noPointerEvents = false,
   children,
   type,
   htmlType = 'button',
   as = 'button',
   round = true,
   loading = false,
   className,
   size = 'md',
   ...props
 }) => {
  const CustomTag = as;
  let sizeClasses;
  let colorClasses;
  let styleClasses = '';
  let loadingClasses = '';

  switch (size) {
    case 'xs':
      sizeClasses = 'h-7 px-3 text-xs';
      break;
    case 'sm':
      sizeClasses = 'h-9 px-4 text-sm';
      break;
    case 'md':
      sizeClasses = 'h-10 px-6 text-sm';
      break;
    case 'lg':
      sizeClasses = 'h-12 px-8 text-md';
      break;
    case 'xl':
      sizeClasses = 'h-14 px-7 text-lg';
      break;
    case 'icon':
      sizeClasses = 'h-8 pr-6 pl-4 text-sm';
      break;
    default:
      sizeClasses = 'h-10 px-5 text-sm';
  }

  switch (type) {
    case 'primary':
      colorClasses = 'text-white bg-brandBlue hover:bg-brandBlue/80 disabled:bg-gray-400';
      break;
    case 'primaryReverse':
      colorClasses =
        'text-brandBlue bg-white hover:bg-brandBlue/80 hover:text-white border border-brandBlue disabled:bg-gray-200 disabled:border-0 disabled:text-gray-500';
      break;
    case 'primaryDark':
      colorClasses = 'text-white bg-gray-700 hover:bg-gray-700/80';
      break;
    case 'secondary':
      colorClasses = 'text-gray-500 bg-gray-200 hover:bg-gray-300/80';
      break;
    case 'red':
      colorClasses = 'text-white bg-red-600 hover:bg-red-600/80';
      break;
    case 'secondaryText':
      colorClasses = 'text-gray-500 bg-transparent hover:bg-gray-200';
      break;
    case 'overlayText':
      colorClasses = 'text-gray-800 bg-transparent hover:bg-black/20';
      break;
    case 'light':
      colorClasses = 'text-white border-lightBlue bg-lightBlue hover:bg-lightBlue/80 hover:text-white';
      break;
    case 'rose':
      colorClasses = 'text-slate-400 border-2 border-transparent hover:bg-slate-100 hover:text-rose-500';
      break;
    case 'gray':
      colorClasses = 'text-white bg-gray-700 hover:bg-gray-700';
      break;
    case 'magenta':
      colorClasses = 'bg-brandMagenta text-white hover:bg-brandMagenta/80';
      break;
    case 'transparent':
      colorClasses = 'text-slate-500 border-2 border-transparent hover:bg-slate-100 hover:text-slate-500';
      break;
    default:
      colorClasses = '';
  }

  if (type !== 'unStyled') {
    styleClasses = classNames(
      {
        'rounded-full': round,
        rounded: !round,
      },
      'font-bold',
      'focus:outline-none focus:ring-none',
      sizeClasses,
      colorClasses,
    );
  }

  if (loading) {
    loadingClasses = 'opacity-60 cursor-wait';
  }

  return (
    <CustomTag
      className={classNames(
        className,
        'inline-flex justify-center items-center disabled:opacity-60 disabled:cursor-not-allowed',
        'transition-colors',
        styleClasses,
        loadingClasses,
      )}
      type={as === 'button' ? htmlType : undefined}
      style={noPointerEvents ? { pointerEvents: 'none' } : {}}
      {...props}
    >
      {children}
    </CustomTag>
  );
};

export default Button
