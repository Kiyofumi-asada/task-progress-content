import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TProgressData, TTaskList } from '../../../types/table';
import { useDispatch } from 'react-redux';

type TProps = {
  dataList: TTaskList;
  data: TProgressData;
};
const TableRow: React.FC<TProps> = ({ dataList, data }) => {
  const [defaultSelectId, setDefaultSelectId] = useState<number>(-1);
  const [progressOnFocus, setProgressOnFocus] = useState<boolean>(false);
  const workContentsRef = React.useRef<HTMLInputElement>(null);
  const manDayRef = React.useRef<HTMLInputElement>(null);
  const requesterRef = React.useRef<HTMLInputElement>(null);
  const progressRef = React.useRef<HTMLInputElement>(null);
  const noteRef = React.useRef<HTMLInputElement>(null);

  const convertProgress = (progress: number): number => progress * 100;
  const isAchieve = (int: number): boolean => 100 <= convertProgress(int);

  const selectedOption = (id: string) => {
    const setId = Number(id);
    setDefaultSelectId(setId);
  };

  const handleSave = () => {
    console.log('workContentsRef', workContentsRef.current?.value);
    console.log('manDayRef', manDayRef.current?.value);
    console.log('requesterRef', requesterRef.current?.value);
    console.log('progressRef', progressRef.current?.value);
    console.log('noteRef', noteRef.current?.value);
  };
  const handleDelete = () => {
    return;
  };

  console.log(data);
  return (
    <>
      {/* 担当者 */}
      <td rowSpan={1} className="flex-none border py-1 text-center text-xs">
        {dataList.userName}
      </td>
      {/* 案件名 */}
      <td
        className={
          isAchieve(data.progress) ? 'flex-none border bg-gray-300 py-1 text-xs' : 'flex-none border py-1 text-xs'
        }
      >
        <select
          className={
            isAchieve(data.progress)
              ? 'h-8 w-full cursor-pointer bg-gray-300 text-center'
              : 'h-8 w-full cursor-pointer text-center'
          }
          defaultValue={data.selectedOptionId}
          onChange={(e): void => selectedOption(e.target.value)}
        >
          <option value={defaultSelectId}>---</option>
          {data.options.map((option) => (
            <option defaultValue={data.selectedOptionId} key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </td>
      {/* 作業内容 */}
      <td
        className={
          isAchieve(data.progress)
            ? 'flex-none border bg-gray-300 px-1 py-1 text-xs'
            : 'flex-none border px-1 py-1 text-xs'
        }
      >
        <input
          className={isAchieve(data.progress) ? 'h-8 w-full cursor-pointer bg-gray-300' : 'h-8 w-full cursor-pointer'}
          type="text"
          name="workContents"
          id="workContents"
          placeholder=""
          ref={workContentsRef}
          defaultValue={data.workContents}
        />
      </td>
      {/* 人日 */}
      <td
        className={
          isAchieve(data.progress)
            ? 'flex-none border bg-gray-300 py-1 text-center text-xs'
            : 'flex-none border py-1 text-center text-xs'
        }
      >
        <input
          className={
            isAchieve(data.progress)
              ? 'h-8 w-full cursor-pointer bg-gray-300 text-center'
              : 'h-8 w-full cursor-pointer text-center'
          }
          type="text"
          name="manDay"
          id="manDay"
          placeholder=""
          ref={manDayRef}
          defaultValue={data.manDay}
        />
      </td>
      {/* 依頼者 */}
      <td
        className={
          isAchieve(data.progress)
            ? 'flex-none border bg-gray-300 py-1 text-center text-center text-xs'
            : 'flex-none border py-1 text-center text-xs'
        }
      >
        <input
          className={
            isAchieve(data.progress)
              ? 'h-8 w-full cursor-pointer bg-gray-300 text-center'
              : 'h-8 w-full cursor-pointer text-center'
          }
          type="text"
          name="requester"
          id="requester"
          placeholder=""
          ref={requesterRef}
          defaultValue={data.requester}
        />
      </td>
      {/* 進捗 */}
      <td
        className={
          isAchieve(data.progress)
            ? 'flex-none border bg-gray-300 py-1 text-center text-xs'
            : 'flex-none border py-1 text-center text-xs'
        }
      >
        <div className="flex">
          <input
            className={
              isAchieve(data.progress)
                ? 'h-8 w-full flex-1 cursor-pointer bg-gray-300 text-center'
                : 'h-8 w-full flex-1 cursor-pointer text-center'
            }
            type="text"
            name="progress"
            placeholder="0-100"
            defaultValue={convertProgress(data.progress)}
            ref={progressRef}
            onFocus={() => setProgressOnFocus(true)}
            onBlur={() => setProgressOnFocus(false)}
          />
          {progressOnFocus ? null : <div className="flex-2 leading-8">%</div>}
        </div>
      </td>
      {/* 備考 */}
      <td
        className={
          isAchieve(data.progress)
            ? 'flex-none border bg-gray-300 px-1 py-1 text-xs'
            : 'flex-none border px-1 py-1 text-xs'
        }
      >
        <input
          className={isAchieve(data.progress) ? 'h-8 w-full cursor-pointer bg-gray-300' : 'h-8 w-full cursor-pointer'}
          type="text"
          name="note"
          id="note"
          placeholder=""
          ref={noteRef}
          defaultValue={data.note}
        />
      </td>
      {/* 削除 */}
      <td
        className={
          isAchieve(data.progress)
            ? 'flex-none border bg-gray-300 py-1 text-center text-xs'
            : 'flex-none border py-1 text-center text-xs'
        }
      >
        <div
          className={
            isAchieve(data.progress)
              ? 'cursor-pointer bg-gray-300 px-2 py-1 hover:text-red-600'
              : 'cursor-pointer px-2 py-1 hover:text-red-600'
          }
          onClick={() => handleDelete()}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </td>
      {/* 保存 */}
      <td rowSpan={1} className="flex-none border px-4 py-1 text-xs">
        <div className="cursor-pointer" onClick={handleSave}>
          保
        </div>
      </td>
    </>
  );
};

export default TableRow;
