import { MutableRefObject } from 'react';
import { IGridProps } from 'starting-point/interfaces';
import { Table } from 'antd';
import Logic from './Logic';
import getSizeClassName from '@components/utils/getSizeClassName';

const Grid = <T extends object>(props: IGridProps<T>) => {
  const { scroll, refContainer } = Logic();
  return (
    <div
      className={`w-full bg-background rounded relative overflow-auto ${getSizeClassName(
        props.className
      )}`}
      ref={refContainer as MutableRefObject<HTMLDivElement>}
    >
      <Table
        size="small"
        className={`w-full h-full shadow-md ${props.className}`}
        scroll={{ y: scroll }}
        {...props}
      />
    </div>
  );
};

export default Grid;
