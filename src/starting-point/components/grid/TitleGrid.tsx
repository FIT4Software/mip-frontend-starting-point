import { ITitleGridProps } from '@interfaces';

const TitleGrid = ({ children }: ITitleGridProps) => {
  return <h4 className="uppercase text-primary tracking-wide">{children}</h4>;
};

export default TitleGrid;
