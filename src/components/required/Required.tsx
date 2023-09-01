import { IPropsRequired } from '@interfaces';

const Required = ({ children, show, classNameChildren }: IPropsRequired) => {
  const heightAndWidth = classNameChildren
    ?.match(/(\w*-[hw]-\w*)|(\w*[hw]-\w*)/g)
    ?.join(' ');

  return (
    <div className={`flex gap-2 items-center ${heightAndWidth}`}>
      {children}
      {show && <span className="font-bold text-red-500">*</span>}
    </div>
  );
};

export default Required;
