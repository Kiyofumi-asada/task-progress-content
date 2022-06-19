import React from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';
import { headerData } from '../../helper/table-header';

const Content: React.FC = () => {
  return (
    <div className="flex h-screen w-screen text-gray-700">
      <div className="flex flex-grow ">
        <div className="flex min-w-full flex-col overflow-x-auto overflow-y-auto ">
          <table className="group table-fixed ">
            <TableHeader headerData={headerData} />
            <TableBody />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content;
