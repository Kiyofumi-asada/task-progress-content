import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TRequestData, TTaskList } from '../../types/task';
import TableRow from './table-row';
import { postTaskData } from '../../api';
import { addNewRow } from '../helper/table';

type TProps = {
  taskList: TTaskList;
};

const TableBody: React.FC<TProps> = ({ taskList }) => {
  //react,redux
  const dispatch = useDispatch();
  //function
  /**
   * POST Task API call
   */
  const handleCreateNewRow = (taskList: TTaskList) => {
    const body: TRequestData = {
      id: taskList.id,
      userName: taskList.userName,
      task: {
        selectedOptionId: -1,
        workContents: '',
        manDay: 0,
        requester: '',
        progress: 0,
        note: '',
      },
    };
    dispatch(postTaskData(body) as any);
  };

  return (
    <tbody>
      {taskList.task?.map((task, index) => (
        <tr key={task.id}>
          <TableRow taskList={taskList} task={task} index={index} />
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
