import { IButtonProps } from '@interfaces';
import { Button as AntButton } from 'antd';
import { cva } from 'class-variance-authority';

const buttonStyle = cva('button', {
  variants: {
    type: {
      primary: ['bg-blue-500'],
    },
    required: {
      yes: ['pr-5', 'relative', 'border-2'],
    },
  },
});

const Button = (props: IButtonProps) => {
  const { children, required, type, className } = props;
  return (
    <>
      <AntButton
        {...props}
        className={`${buttonStyle({
          type: type === 'primary' ? 'primary' : null,
          required: required ? 'yes' : null,
        })} ${className}`}
      >
        {children}
      </AntButton>
      {required && (
        <span className="absolute text-red-500 font-bold  top-4 right-4">
          *
        </span>
      )}
    </>
  );
};

export default Button;
