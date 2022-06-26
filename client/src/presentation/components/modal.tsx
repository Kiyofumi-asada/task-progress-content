import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTaskData } from '../../api';
import { TRequestData } from '../../types/table';
import { initialCreateNewUser } from '../helper/table';

type TProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<TProps> = ({ setIsModalOpen }) => {
  //react,redux
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>('');
  //variable
  const userNameRef = React.useRef<HTMLInputElement>(null);
  const isDisabled = inputText.length ? false : true;
  //function
  const handleCreateNewUser = () => {
    const body: TRequestData = {
      ...initialCreateNewUser,
      userName: userNameRef.current?.value ?? '',
    };
    dispatch(postTaskData(body) as any);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-sm">
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            <div className="flex items-center">
              <div className="container mx-auto">
                <div
                  className="font- float-right mr-5 mt-3 cursor-pointer text-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✖️
                </div>
                <div className="mx-2 my-auto max-w-md">
                  <div className="m-20">
                    <form action="" className="">
                      <div className="mb-6">
                        <input
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                          type="text"
                          name="title"
                          id="url"
                          placeholder="担当者名"
                          value={inputText}
                          onChange={(e) => {
                            setInputText(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-2">
                        <button
                          type="button"
                          className={
                            isDisabled
                              ? 'float-right mb-8 ml-4 mt-3 rounded bg-gray-400 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none focus:outline-none'
                              : 'float-right mb-8 ml-4 mt-3 rounded bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:bg-blue-700 hover:shadow-lg focus:outline-none'
                          }
                          disabled={isDisabled}
                          onClick={handleCreateNewUser}
                        >
                          保存
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default Modal;
