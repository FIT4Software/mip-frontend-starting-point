import { IPropsRequired } from 'starting-point/interfaces';
import getSizeClassName from '@components/utils/getSizeClassName';

const Required = ({ children, show, classNameChildren }: IPropsRequired) => {
  const heightAndWidth = getSizeClassName(classNameChildren);
  return (
    <div className={`flex gap-2 items-center ${heightAndWidth}`}>
      {children}
      {show && <span className="font-bold text-error">*</span>}
    </div>
  );
};

export default Required;
