import Required from '@components/required/Required';
import { IButtonProps } from '@interfaces';
import { Button as AntButton } from 'antd';
import { cva } from 'class-variance-authority';

const buttonStyle = cva('button', {
  variants: {
    type: {
      primary: ['bg-blue-500'],
    },
  },
});

const Button = (props: IButtonProps) => {
  const { children, type, className, required } = props;
  return (
    <Required classNameChildren={className} show={required}>
      <AntButton
        {...props}
        className={`${buttonStyle({
          type: type === 'primary' ? 'primary' : null,
        })} ${className}`}
      >
        {children}
      </AntButton>
    </Required>
  );
};

export default Button;
