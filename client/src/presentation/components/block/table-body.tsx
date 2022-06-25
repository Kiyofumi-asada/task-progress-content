import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TTaskList } from '../../../types/table';
import { useDispatch } from 'react-redux';
import TableRow from './table-row';

type TProps = {
  dataList: TTaskList;
};

const TableBody: React.FC<TProps> = ({ dataList }) => {
  return (
    <tbody>
      {dataList.progressData?.map((data, idx) => (
        <tr key={data.dataId}>
          <TableRow dataList={dataList} data={data} idx={idx} />
        </tr>
      ))}

      <tr className="border-b-2 border-b-gray-800">
        <td colSpan={9} className="flex-none border py-0 text-center text-lg hover:bg-gray-100">
          <div className=" cursor-pointer">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
