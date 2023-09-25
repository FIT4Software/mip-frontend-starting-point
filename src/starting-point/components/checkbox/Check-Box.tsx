import { IPropsCheckBox } from 'starting-point/interfaces';
import Required from '@components/required/Required';
import { Checkbox as AntCheckBox } from 'antd';

const CheckBox = (props: IPropsCheckBox) => {
  const { required, className } = props;
  return (
    <Required show={required} classNameChildren={className}>
      <AntCheckBox {...props} />
    </Required>
  );
};

export default CheckBox;
