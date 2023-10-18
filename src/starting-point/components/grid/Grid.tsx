import { MutableRefObject } from 'react';
import { IGridProps } from '@sp-interfaces';
import { Table } from 'antd';
import Logic from './Logic';
import TitleGrid from './TitleGrid';

const Grid = <T extends object>({
  className,
  columns,
  title,
  autoFitWidth,
  subtitle,
  ...rest
}: IGridProps<T>) => {
  const { refContainer } = Logic(!!title);
  return (
    <div
      className={`w-full h-full bg-background rounded relative px-5 pt-4`}
      ref={refContainer as MutableRefObject<HTMLDivElement>}
    >
      <TitleGrid>{subtitle}</TitleGrid>
      <Table
        size="small"
        className={`${className} border rounded-sm mt-2 pb-8`}
        // scroll={{ y: scroll }}
        style={{ height: '100%', width: '100%', overflow: 'auto' }}
        columns={
          autoFitWidth
            ? columns?.map((c) => ({ ...c, width: undefined }))
            : columns
        }
        title={title}
        {...rest}
      />
    </div>
  );
};

export default Grid;
