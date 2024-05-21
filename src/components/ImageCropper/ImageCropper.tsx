import { FC, useRef, useState } from 'react';
import { MdDeleteOutline, MdOutlineModeEdit } from 'react-icons/md';
import CropperModal from './CropperModal';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCV } from '../../redux/slices/CVSlice';

const ImageCropper: FC = () => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const [src, setSrc] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
    setModalOpen(true);
  };

  const onClickDelete = () => {
    dispatch(setCV({ ...CV, avatarUrl: '' }));
  };

  const onCLickEdit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      <CropperModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        src={src}
        setSrc={setSrc}
      />
      {CV.avatarUrl ? (
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16 rounded-full"
            src={CV.avatarUrl}
            alt="user's avatar preview"
          />
          <div>
            <button
              onClick={onCLickEdit}
              className="flex items-center gap-1 hover:text-primary-blue mb-1"
            >
              <MdOutlineModeEdit size={20} />
              Edit
            </button>
            <button
              onClick={onClickDelete}
              className="flex items-center gap-1 hover:text-red-500"
            >
              <MdDeleteOutline size={20} />
              Delete
            </button>
          </div>
        </div>
      ) : (
        <label className="inline-flex items-center gap-4">
          <svg
            className="w-16 h-16 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
          <span
            aria-label="button"
            className="rounded-md cursor-pointer bg-white px-2.5 py-1.5 text-sm text-primary-blue shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Upload Photo
          </span>
          <input
            className="hidden"
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleImgChange}
          />
        </label>
      )}
    </>
  );
};

export default ImageCropper;
