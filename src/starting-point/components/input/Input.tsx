import { Input as AntInput } from 'antd';
import { IPropsInput } from '@interfaces';

const Input = (props: IPropsInput) => {
  return <AntInput {...props} />;
};

export default Input;
