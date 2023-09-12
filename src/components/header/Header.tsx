import Button from '@components/button/Button';
import { IHeaderProps } from '@interfaces';
import { Anchor, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { setOpenSideBar, useAppDispatch, useAppSelector } from '@store';
import { useScreenSize } from '@components/utils/useScreenSize';

const Header = ({ children, tabs, title, ...rest }: IHeaderProps) => {
  const screenSize = useScreenSize();
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.SideBar);
  return (
    <>
      <div className="sticky w-full top-2 mt-2 z-50">
        <div className="shadow-md flex justify-between w-full h-8 bg-background gap-2 rounded">
          <Anchor
            affix
            replace
            className="text-xs h-full w-full overflow-x-auto border-none pt-[6px] ml-2"
            items={tabs}
            direction="horizontal"
          />
          <Button
            icon={<MenuOutlined />}
            className="rounded-none rounded-tr rounded-br"
            type="primary"
            onClick={() => dispatch(setOpenSideBar())}
          />
        </div>
      </div>
      <Drawer
        placement={screenSize.width > 768 ? 'right' : 'top'}
        closable={true}
        onClose={() => dispatch(setOpenSideBar())}
        open={open}
        keyboard={true}
        title={
          <div className="flex w-full items-center justify-between gap-2">
            {title}
            <CloseOutlined
              onClick={() => dispatch(setOpenSideBar())}
              className="text-neutral-500"
            />
          </div>
        }
        {...rest}
        closeIcon={''}
      >
        {children}
      </Drawer>
    </>
  );
};

export default Header;
