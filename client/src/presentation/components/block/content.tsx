import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableHeader from './table-header';
import TableBody from './table-body';
import { headerData } from '../../helper/table';
import { selectTaskList } from '../../../redux/slice';
import { fetchTaskList } from '../../../api';

const Content: React.FC = () => {
  //react,redux
  const dispatch = useDispatch();
  const taskDataList = useSelector(selectTaskList);
  //dispatch
  /**
   * get api call
   */
  useEffect(() => {
    dispatch(fetchTaskList() as any);
  }, [dispatch]);

  return (
    <div className="flex h-screen w-screen text-gray-800">
      <div className="flex flex-grow">
        <div className="flex min-w-full flex-col overflow-x-auto overflow-y-auto">
          <table className="group table-fixed">
            <TableHeader headerData={headerData} dataList={taskDataList} />
            {/* TODO:taskDataList.length が0ならデーター作成ボタン */}
            {taskDataList.map((dataList) => (
              <TableBody key={dataList.userId} dataList={dataList} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content;
