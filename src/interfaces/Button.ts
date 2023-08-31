import { Button, ButtonProps } from 'antd';
import { type VariantProps } from 'class-variance-authority';
interface IButtonProps extends ButtonProps, VariantProps<typeof Button> {
  children: string;
  required?: boolean;
}

export type { IButtonProps };
