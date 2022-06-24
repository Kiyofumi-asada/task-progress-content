import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TTask } from '../../../types/table';
import { useDispatch } from 'react-redux';

type TProps = {
  data: TTask;
};
const TableBody: React.FC<TProps> = ({ data }) => {
  const [defaultSelectId, setDefaultSelectId] = useState<number>(-1);
  const workContentsRef = React.useRef<HTMLInputElement>(null);
  const manDayRef = React.useRef<HTMLInputElement>(null);
  const requesterRef = React.useRef<HTMLInputElement>(null);
  const progressRef = React.useRef<HTMLInputElement>(null);
  const noteRef = React.useRef<HTMLInputElement>(null);

  const convertProgress = (progress: number): number => progress * 100;
  const selectedOption = (e: any) => {
    const setId = e;
    setDefaultSelectId(setId);
  };
  const handleSave = (dataId: any) => {
    console.log('v.dataId', dataId);
    console.log('workContentsRef', workContentsRef.current?.value);
    console.log('manDayRef', manDayRef.current?.value);
    console.log('requesterRef', requesterRef.current?.value);
    console.log('progressRef', progressRef.current?.value);
    console.log('noteRef', noteRef.current?.value);
  };
  const handleDelete = () => {
    console.log();
  };
  const isAchieve = (int: number): boolean => 100 <= convertProgress(int);

  console.log(workContentsRef.current);
  return (
    <tbody>
      {data.progressData?.map((v) => (
        <tr key={v.dataId}>
          {v.delete ? null : (
            <>
              {/* 担当者 */}
              <td rowSpan={1} className="flex-none border py-1 text-center text-xs">
                {data.userName}
              </td>
              {/* 案件名 */}
              <td
                className={
                  isAchieve(v.progress) ? 'flex-none border bg-gray-300 py-1 text-xs' : 'flex-none border py-1 text-xs'
                }
              >
                <select
                  className={isAchieve(v.progress) ? ' bg-gray-300' : ''}
                  defaultValue={v.selectedOptionId}
                  onChange={(e): void => selectedOption(e.target.value)}
                >
                  <option value={defaultSelectId}>---</option>
                  {v.options.map((option) => (
                    <option defaultValue={v.selectedOptionId} key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>
              {/* 作業内容 */}
              <td
                className={
                  isAchieve(v.progress)
                    ? 'flex-none border bg-gray-300 px-1 py-1 text-xs'
                    : 'flex-none border px-1 py-1 text-xs'
                }
              >
                {v.workContents}
              </td>
              {/* 人日 */}
              <td
                className={
                  isAchieve(v.progress)
                    ? 'flex-none border bg-gray-300 py-1 text-center text-xs'
                    : 'flex-none border py-1 text-center text-xs'
                }
              >
                {v.manDay}
              </td>
              {/* 依頼者 */}
              <td
                className={
                  isAchieve(v.progress)
                    ? 'flex-none border bg-gray-300 py-1 text-center text-xs'
                    : 'flex-none border py-1 text-center text-xs'
                }
              >
                {v.requester}
              </td>
              {/* 進捗 */}
              <td
                className={
                  isAchieve(v.progress)
                    ? 'flex-none border bg-gray-300 py-1 text-center text-xs'
                    : 'flex-none border py-1 text-center text-xs'
                }
              >
                <div className="flex">
                  <input
                    className={isAchieve(v.progress) ? 'flex-1 bg-gray-300 text-right' : 'flex-1 text-right'}
                    type="text"
                    name="progress"
                    placeholder="0-100"
                    defaultValue={convertProgress(v.progress)}
                    ref={progressRef}
                  />
                  <div className="flex-1">%</div>
                </div>
              </td>
              {/* 備考 */}
              <td
                className={
                  isAchieve(v.progress)
                    ? 'flex-none border bg-gray-300 px-1 py-1 text-xs'
                    : 'flex-none border px-1 py-1 text-xs'
                }
              >
                {v.note}
              </td>
              {/* 削除 */}
              <td
                className={
                  isAchieve(v.progress)
                    ? 'flex-none border bg-gray-300 py-1 text-center text-xs'
                    : 'flex-none border py-1 text-center text-xs'
                }
              >
                <div
                  className={
                    isAchieve(v.progress)
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
          )}
        </tr>
      ))}

      <tr className="border-b-2 border-b-gray-800">
        <td colSpan={9} className="flex-none border py-0 text-center text-lg hover:bg-gray-100">
          <div className=" cursor-pointer">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
