import { forwardRef, ReactElement } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

type MainButtonProps = {
  text: string;
  form?: string;
  isLoading?: boolean;
  action?: () => void;
  submitted?: boolean;
  disabled?: boolean;
  width?: 'full-width' | string;
  loadingText?: string;
  variant?: 'primary' | 'secondary';
  classes?: string;
  iconRoute?: string;
  rightIconRoute?: string;
  rightIconClass?: string;
  iconComponent?: ReactElement;
  size?: 'small' | 'normal' | 'large';
};

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      text,
      isLoading = false,
      form,
      action,
      disabled = false,
      submitted,
      width,
      loadingText = 'Aguarde...',
      variant = 'primary',
      classes,
      iconRoute,
      rightIconRoute,
      rightIconClass = 'w-[24px] h-[24px]',
      iconComponent,
      size = 'normal'
    },
    ref
  ) => {
    const propWidth =
      width === 'full-width' ? 'w-full' : width ? width : 'w-[80px]';

    const isSecondaryVariant = variant !== 'primary';

    const sizeHeight =
      size === 'normal' ? 'h-[40px]' : size === 'large' ? 'h-[48px]' : 'h-[32]';

    const variantHover =
      variant === 'primary' ? 'hover:bg-primary' : 'hover:bg-secondary';

    return !isLoading ? (
      <Button
        form={form}
        className={`${
          isSecondaryVariant
            ? 'text-primary bg-secondary'
            : 'bg-primary text-white'
        } shadow-xl ${propWidth} md:${propWidth} px-4 select-none font-bold rounded-[8px] hover:opacity-90 ${variantHover} ${sizeHeight} ${classes}`}
        onClick={!disabled ? action : () => undefined}
        type={submitted ? 'submit' : 'button'}
        ref={ref}
        disabled={disabled}
      >
        {iconRoute && <img src={iconRoute} alt='left button icon' />}
        {iconRoute && <span>&nbsp;</span>}
        {iconComponent}
        {iconComponent && <span>&nbsp;</span>}
        {text}
        {rightIconRoute && <span>&nbsp;</span>}
        {rightIconRoute && (
          <img
            src={rightIconRoute}
            alt='right button icon'
            className={rightIconClass}
          />
        )}
      </Button>
    ) : (
      <Button
        className={`bg-primary text-white ${propWidth} md:${propWidth} select-none rounded-md cursor-not-allowed ${sizeHeight} ${
          classes ? classes : ''
        }`}
        ref={ref}
        disabled
      >
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
        {loadingText}
      </Button>
    );
  }
);

MainButton.displayName = 'MainButton';

export default MainButton;
