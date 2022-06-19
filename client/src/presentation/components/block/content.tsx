import React, { useEffect } from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';
import { headerData } from '../../helper/table';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskList } from '../../../redux/slice';
import { fetchTaskList } from '../../../api';

const Content: React.FC = () => {
  const taskDataList = useSelector(selectTaskList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskList() as any);
  }, [dispatch]);

  return (
    <div className="flex h-screen w-screen text-gray-800">
      <div className="flex flex-grow">
        <div className="flex min-w-full flex-col overflow-x-auto overflow-y-auto">
          <table className="group table-fixed">
            <TableHeader headerData={headerData} dataList={taskDataList} />
            {taskDataList.map((data) => (
              <TableBody key={data.userId} data={data} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content;
