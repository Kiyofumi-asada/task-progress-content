import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableHeader from './table-header';
import TableBody from './table-body';
import { headerData } from '../helper/table';
import { selectTaskList } from '../../redux/slice';
import { fetchTaskList } from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from './modal';

const Content: React.FC = () => {
  //react,redux
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const taskDataList = useSelector(selectTaskList);

  //function
  const modalOpen = () => {
    setIsModalOpen(true);
  };
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
            {taskDataList.map((dataList) => (
              <TableBody key={dataList.userId} dataList={dataList} />
            ))}
          </table>
          <div
            className="m-1.5 h-6 w-6 cursor-pointer rounded-sm bg-slate-700 text-center text-white hover:bg-slate-900 "
            onClick={modalOpen}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
          {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Content;
