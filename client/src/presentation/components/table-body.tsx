import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TRequestData, TTaskList } from '../../types';
import TableRow from './table-row';
import { postTaskData } from '../../api';
import { initialCreateNewRow } from '../helper/table';

type TProps = {
  taskList: TTaskList;
};

const TableBody: React.FC<TProps> = ({ taskList }) => {
  //react,redux
  const dispatch = useDispatch();
  //function
  /**
   * post api call
   */
  const handleCreateNewRow = (taskList: TTaskList) => {
    const body: TRequestData = {
      ...initialCreateNewRow,
      id: taskList.id,
      userName: taskList.userName,
    };
    dispatch(postTaskData(body) as any);
  };

  return (
    <tbody>
      {taskList.task?.map((task, idx) => (
        <tr key={task.taskId}>
          <TableRow taskList={taskList} task={task} idx={idx} />
        </tr>
      ))}
      <tr className="border-b-2 border-b-gray-800">
        <td colSpan={9} className="flex-none border text-center hover:bg-gray-100">
          <div className="cursor-pointer" onClick={() => handleCreateNewRow(taskList)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
