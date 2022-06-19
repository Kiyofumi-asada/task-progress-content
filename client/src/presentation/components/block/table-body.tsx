import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TTask } from '../../../types/table';
import { deleteTaskData } from '../../../api';
import { useDispatch } from 'react-redux';

type TProps = {
  data: TTask;
};
const TableBody: React.FC<TProps> = ({ data }) => {
  //TODO: rowSpanを入れた際のmap処理を修正
  const [rowSpan, setRowSpan] = useState<number>(100);
  const dispatch = useDispatch;
  const convertProgressInt2percent = (v: number): number => v * 100;
  const handleDelete = (e: any) => {
    console.log();
    // dispatch(deleteTaskData(1) as any);
  };

  return (
    <tbody>
      {data.progressData?.map((v) => (
        <tr key={v.dataId}>
          {/*deleteがtrueの場合非表示*/}
          {v.delete ? null : (
            <>
              {/* progressが100%の場合グレーアウト*/}
              {convertProgressInt2percent(v.progress) === 100 ? (
                <>
                  <td rowSpan={1} className="flex-none border py-1 text-center text-xs">
                    {data.userName}
                  </td>
                  <td className="flex-none border bg-gray-300 py-1 text-xs"></td>
                  <td className="flex-none border bg-gray-300 px-1 py-1 text-xs">{v.workContents}</td>
                  <td className="flex-none border bg-gray-300 py-1 text-center text-xs">{v.manDay}</td>
                  <td className="flex-none border bg-gray-300 py-1 text-center text-xs">{v.requester}</td>
                  <td className="flex-none border bg-gray-300 py-1 text-center text-xs">
                    {convertProgressInt2percent(v.progress)}%
                  </td>
                  <td className="flex-none border bg-gray-300 px-1 py-1 text-xs">{v.note}</td>
                  <td className="flex-none border bg-gray-300 py-1 text-center text-xs">
                    <div
                      className="cursor-pointer bg-gray-300 px-2 py-1 text-red-600"
                      onClick={(e) => handleDelete(e.target)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                  </td>
                </>
              ) : (
                <>
                  <td rowSpan={1} className="flex-none border py-1 text-center text-xs">
                    {data.userName}
                  </td>
                  <td className="flex-none border py-1 text-xs"></td>
                  <td className="flex-none border px-1 py-1 text-xs">{v.workContents}</td>
                  <td className="flex-none border py-1 text-center text-xs">{v.manDay}</td>
                  <td className="flex-none border py-1 text-center text-xs">{v.requester}</td>
                  <td className="flex-none border py-1 text-center text-xs">
                    {convertProgressInt2percent(v.progress)}%
                  </td>
                  <td className="flex-none border px-1 py-1 text-xs">{v.note}</td>
                  <td className="flex-none border py-1 text-center text-xs">
                    <div className="cursor-pointer px-2 py-1 hover:text-red-600" onClick={(e) => handleDelete(e)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                  </td>
                </>
              )}
              <td rowSpan={1} className="flex-none border px-4 py-1 text-xs"></td>
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
