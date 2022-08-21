import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TTask, TRequestData, TTaskList } from '../../types/task';
import { deleteTaskData, fetchTaskList, putTaskData } from '../../api';

type TProps = {
  taskList: TTaskList;
  task: TTask;
  index: number;
};

const TableRow: React.FC<TProps> = ({ taskList, task, index }) => {
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
    setProgressState(task.progress);
    setNoteState(task.note);
  }, []);

  //variable
  const noSelectedNumber = -1;
  const rowSpanCount = taskList.task?.length ? taskList.task?.length + 1 : 1;
  const isFirstIndex = index === 0;
  let isChangedData = false;
  if (
    workContentsState !== task.workContents ||
    manDayState !== task.manDay ||
    requesterState !== task.requester ||
    progressState !== task.progress ||
    noteState !== task.note
  ) {
    isChangedData = true;
  } else {
    isChangedData = false;
  }
  //function
  const isAchieve = (int: number | string): boolean => 100 <= Number(int);

  //dispatch
  /**
   * PUT Task API call
   */
  const putBody: TRequestData = {
    id: taskList.id,
    userName: taskList.userName,
    task: {
      id: task.id,
      selectedOptionId: task.selectedOptionId,
      workContents: workContentsState ?? '',
      manDay: Number(manDayState) ?? 0,
      requester: requesterState ?? '',
      progress: Number(progressState) ?? 0,
      note: noteState ?? '',
    },
  };

  //入力後EnterKeyをクリック
  const onEnterClick2put = async (e: any) => {
    if (e.keyCode === 13) {
      if (!isChangedData) return;
      console.log('enter');
      await dispatch(putTaskData(putBody) as any);
      await e.target.blur();
    }
  };
  //入力後inputからフォーカスを外す
  const onBlur2put = async () => {
    if (!isChangedData) return;
    await dispatch(putTaskData(putBody) as any);
    await setProgressOnFocus(false);
  };
  //selectBoxを変更
  const selectedOption2put = (selectedId: any) => {
    const putBody4selectBox = {
      ...putBody,
      task: {
        id: task.id,
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
   * DELETE Task API call
   */
  const handleDelete = async () => {
    let isNoChange = false;
    //taskが空となった場合デフォルトデータ1行が作成される
    //不要なデータ削除・再作成を回避するため、taskのlengthが1以下かつデフォルトデータから未変更の場合DeleteApiは呼ばない
    if (
      taskList.task &&
      taskList.task?.length <= 1 &&
      Number(task.selectedOptionId) === -1 &&
      workContentsState === '' &&
      Number(manDayState) === 0 &&
      requesterState === '' &&
      Number(progressState) === 0 &&
      noteState === ''
    ) {
      isNoChange = true;
    }
    if (isNoChange) return;
    await dispatch(deleteTaskData(task.id) as any);
    await dispatch(fetchTaskList() as any);
  };

  return (
    <>
      {/* 担当者 */}
      {isFirstIndex ? (
        <>
          <td rowSpan={rowSpanCount} className="flex-none border py-0 text-center text-xs">
            {taskList.userName}
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
