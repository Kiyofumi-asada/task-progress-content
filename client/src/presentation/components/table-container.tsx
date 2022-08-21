import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableHeader from './table-header';
import TableBody from './table-body';
import { headerData } from '../helper/table';
import { selectTaskList } from '../../redux/slice';
import { fetchTaskList } from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateUser from './create-user';

const TableContainer: React.FC = () => {
  //react,redux
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const userTaskList = useSelector(selectTaskList);

  //function
  const modalOpen = () => {
    setIsModalOpen(true);
  };
  //dispatch
  /**
   * GET Task API call
   */
  useEffect(() => {
    dispatch(fetchTaskList() as any);
  }, [dispatch]);

  return (
    <div className="flex h-screen w-screen text-gray-800">
      <div className="flex flex-grow">
        <div className="flex min-w-full flex-col overflow-x-auto overflow-y-auto">
          <table className="group table-fixed">
            <TableHeader headerData={headerData} taskList={userTaskList} />
            {userTaskList.map((taskList) => (
              <TableBody key={taskList.id} taskList={taskList} />
            ))}
          </table>
          <div
            className="m-1.5 h-6 w-6 cursor-pointer rounded-sm bg-slate-700 text-center text-white hover:bg-slate-900 "
            onClick={modalOpen}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
          {isModalOpen ? <CreateUser setIsModalOpen={setIsModalOpen} /> : null}
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
