import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TRequestData, TTaskList } from '../../../types/table';
import TableRow from './table-row';
import { postTaskData } from '../../../api';
import { initialCreateNewRowData } from '../../helper/table';

type TProps = {
  dataList: TTaskList;
};

const TableBody: React.FC<TProps> = ({ dataList }) => {
  //react,redux
  const dispatch = useDispatch();
  //function
  /**
   * post api call
   */
  const handleCreateNewRow = (dataList: TTaskList) => {
    const body: TRequestData = {
      ...initialCreateNewRowData,
      userId: dataList.userId,
      userName: dataList.userName,
    };
    dispatch(postTaskData(body) as any);
  };

  return (
    <tbody>
      {dataList.progressData?.map((data, idx) => (
        <tr key={data.dataId}>
          <TableRow dataList={dataList} data={data} idx={idx} />
        </tr>
      ))}
      <tr className="border-b-2 border-b-gray-800">
        <td colSpan={9} className="flex-none border py-0 text-center text-lg hover:bg-gray-100">
          <div className=" cursor-pointer" onClick={() => handleCreateNewRow(dataList)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
