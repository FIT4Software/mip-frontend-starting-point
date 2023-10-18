import { ITitleGridProps } from '@sp-interfaces';

const TitleGrid = ({ children }: ITitleGridProps) => {
  return <h4 className="uppercase font-semibold text-primary ">{children}</h4>;
};

export default TitleGrid;
