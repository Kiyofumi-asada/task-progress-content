import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TDeleteRequestData, TTask, TRequestData, TTaskList } from '../../types/table';
import { deleteTaskData, putTaskData } from '../../api';

type TProps = {
  dataList: TTaskList;
  task: TTask;
  idx: number;
};

const TableRow: React.FC<TProps> = ({ dataList, task, idx }) => {
  //react,redux
  const dispatch = useDispatch();
  const [progressOnFocus, setProgressOnFocus] = useState<boolean>(false);
  const [workContentsState, setWorkContentsState] = useState<string>('');
  const [manDayState, setManDayState] = useState<string | number>('');
  const [requesterState, setRequesterState] = useState<string>('');
  const [progressState, setProgressState] = useState<string | number>('');
  const [noteState, setNoteState] = useState<string>('');
  useEffect(() => {
    setWorkContentsState(task.workContents);
    setManDayState(task.manDay);
    setRequesterState(task.requester);
    setProgressState(convertProgress(task.progress));
    setNoteState(task.note);
  }, []);
  //variable
  const noSelectedNumber = -1;
  const rowSpanCount = dataList.task?.length ? dataList.task?.length + 1 : 1;
  const isFirstIdx = idx === 0;
  //function
  const convertProgress = (progress: number | string): number => Number(progress) * 100;
  const isAchieve = (int: number | string): boolean => 100 <= convertProgress(Number(int));

  //dispatch
  /**
   * put api call
   */
  const putBody: TRequestData = {
    userId: dataList.id,
    userName: dataList.userName,
    task: {
      taskId: task.taskId,
      selectedOptionId: task.selectedOptionId,
      workContents: workContentsState ?? '',
      manDay: Number(manDayState) ?? 0,
      requester: requesterState ?? '',
      progress: Number(progressState) ?? 0,
      note: noteState ?? '',
    },
  };
  //enterKey(keycode13)をクリックした場合
  const onEnterClick2put = (e: any) => {
    if (e.keyCode === 13) {
      //フォーカスを外す
      e.target.blur();
      dispatch(putTaskData(putBody) as any);
    }
  };
  //inputからフォーカスを外した場合
  const onBlur2put = () => {
    dispatch(putTaskData(putBody) as any);
    setProgressOnFocus(false);
  };
  //selectBoxを選択した場合
  const selectedOption2put = (selectedId: any) => {
    const putBody4selectBox = {
      ...putBody,
      task: {
        dataId: task.taskId,
        selectedOptionId: Number(selectedId),
        workContents: workContentsState ?? '',
        manDay: Number(manDayState) ?? 0,
        requester: requesterState ?? '',
        progress: Number(progressState) ?? 0,
        note: noteState ?? '',
      },
    };
    dispatch(putTaskData(putBody4selectBox) as any);
  };
  /**
   * delete api call
   */
  const handleDelete = () => {
    const params: TDeleteRequestData = { userId: dataList.id, dataId: task.taskId };
    dispatch(deleteTaskData(params) as any);
  };

  return (
    <>
      {/* 担当者 */}
      {isFirstIdx ? (
        <>
          <td rowSpan={rowSpanCount} className="flex-none border py-0 text-center text-xs">
            {dataList.userName}
          </td>
        </>
      ) : null}
      {/* 案件名 */}
      <td
        className={
          isAchieve(task.progress) ? 'flex-none border bg-gray-300 py-0 text-xs' : 'flex-none border py-0 text-xs'
        }
      >
        <select
          className={isAchieve(task.progress) ? 'h-8 w-full bg-gray-300 text-center' : 'h-8 w-full text-center'}
          defaultValue={task.selectedOptionId}
          onChange={(e) => selectedOption2put(e.target.value)}
        >
          <option value={noSelectedNumber}>---</option>
          {task.projects.map((option) => (
            <option defaultValue={task.selectedOptionId} key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </td>
      {/* 作業内容 */}
      <td
        className={
          isAchieve(task.progress)
            ? 'flex-none border bg-gray-300 px-1 py-0 text-xs'
            : 'flex-none border px-1 py-0 text-xs'
        }
      >
        <input
          className={isAchieve(task.progress) ? 'h-8 w-full bg-gray-300' : 'h-8 w-full'}
          type="text"
          name="workContents"
          id="workContents"
          placeholder=""
          value={workContentsState}
          onBlur={onBlur2put}
          onKeyDown={(e) => onEnterClick2put(e)}
          onChange={(e) => setWorkContentsState(e.target.value)}
        />
      </td>
      {/* 人日 */}
      <td
        className={
          isAchieve(task.progress)
            ? 'flex-none border bg-gray-300 py-0 text-center text-xs'
            : 'flex-none border py-0 text-center text-xs'
        }
      >
        <input
          className={isAchieve(task.progress) ? 'h-8 w-full bg-gray-300 text-center' : 'h-8 w-full text-center'}
          type="text"
          name="manDay"
          id="manDay"
          placeholder=""
          value={manDayState}
          onBlur={onBlur2put}
          onKeyDown={(e) => onEnterClick2put(e)}
          onChange={(e) => setManDayState(e.target.value)}
          maxLength={3}
          required
        />
      </td>
      {/* 依頼者 */}
      <td
        className={
          isAchieve(task.progress)
            ? 'flex-none border bg-gray-300 text-center text-center text-xs'
            : 'flex-none border text-center text-xs'
        }
      >
        <input
          className={isAchieve(task.progress) ? 'h-8 w-full bg-gray-300 text-center' : 'h-8 w-full text-center'}
          type="text"
          name="requester"
          id="requester"
          placeholder=""
          value={requesterState}
          onBlur={onBlur2put}
          onKeyDown={(e) => onEnterClick2put(e)}
          onChange={(e) => setRequesterState(e.target.value)}
        />
      </td>
      {/* 進捗 */}
      <td
        className={
          isAchieve(task.progress)
            ? 'flex-none border bg-gray-300 text-center text-xs'
            : 'flex-none border text-center text-xs'
        }
      >
        <div className="flex">
          <input
            className={
              isAchieve(task.progress) ? 'h-8 w-full flex-1 bg-gray-300 text-center' : 'h-8 w-full flex-1 text-center'
            }
            type="text"
            name="progress"
            placeholder="0-100"
            value={progressState}
            onChange={(e) => setProgressState(e.target.value)}
            onFocus={() => setProgressOnFocus(true)}
            onBlur={onBlur2put}
            onKeyDown={(e) => onEnterClick2put(e)}
          />
          {progressOnFocus ? null : <div className="flex-2 leading-8">%</div>}
        </div>
      </td>
      {/* 備考 */}
      <td
        className={
          isAchieve(task.progress) ? 'flex-none border bg-gray-300 px-1 text-xs' : 'flex-none border px-1 text-xs'
        }
      >
        <input
          className={isAchieve(task.progress) ? 'h-8 w-full bg-gray-300' : 'h-8 w-full'}
          type="text"
          name="note"
          id="note"
          placeholder=""
          value={noteState}
          onBlur={onBlur2put}
          onKeyDown={(e) => onEnterClick2put(e)}
          onChange={(e) => setNoteState(e.target.value)}
        />
      </td>
      {/* 削除 */}
      <td
        className={
          isAchieve(task.progress)
            ? 'flex-none border bg-gray-300 text-center text-xs'
            : 'flex-none border text-center text-xs'
        }
      >
        <div
          className={
            isAchieve(task.progress)
              ? 'cursor-pointer bg-gray-300 px-2 hover:text-red-600'
              : 'cursor-pointer px-2 hover:text-red-600'
          }
          onClick={() => handleDelete()}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </td>
    </>
  );
};

export default TableRow;
