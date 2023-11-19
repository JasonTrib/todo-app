import React from 'react';
import Content from './Content';
import Toolbar from './Toolbar';

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="flex w-screen max-w-lg flex-col gap-y-4 rounded bg-slate-700 p-3">{children}</div>;
};

Container.Toolbar = Toolbar;
Container.Content = Content;

export default Container;
