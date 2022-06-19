import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { hover } from '@testing-library/user-event/dist/hover';

const TableBody: React.FC = () => {
  //TODO: 行の数に合わせてStateを変える
  const [rowSpan, setRowSpan] = useState<number>(100);

  return (
    <tbody>
      {/* 入力欄 */}
      <tr>
        <td rowSpan={rowSpan} className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs">
          <select></select>
        </td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs">
          <div className="cursor-pointer hover:text-red-600">
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </td>
        <td rowSpan={rowSpan} className="flex-none border px-4 py-2 text-xs"></td>
      </tr>

      {/* 行追加 */}
      <tr>
        <td colSpan={7} className="flex-none border py-0 text-center text-lg hover:bg-gray-100">
          <div className=" cursor-pointer">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </td>
      </tr>

      {/* 入力欄 */}
      <tr>
        <td className="flex-none border px-4 py-2 text-xs">
          <select></select>
        </td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs"></td>
        <td className="flex-none border px-4 py-2 text-xs">
          <div className="cursor-pointer hover:text-red-600">
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </td>
      </tr>
      {/* end */}
    </tbody>
  );
};

export default TableBody;
