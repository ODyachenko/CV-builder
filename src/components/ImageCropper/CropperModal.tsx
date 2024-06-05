import { useState, useRef, FC } from 'react';
import { Modal, Box, Slider, Button } from '@mui/material';
import AvatarEditor from 'react-avatar-editor';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCV } from '../../redux/slices/CVSlice';

const boxStyle = {
  width: '500px',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: '#fff',
  borderRadius: '10px',
  p: 4,
};
const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

type CropperModalProps = {
  src: string;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  setSrc: (value: string) => void;
};

const CropperModal: FC<CropperModalProps> = ({
  src,
  setSrc,
  modalOpen,
  setModalOpen,
}) => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const [slideValue, setSlideValue] = useState<number | number[]>(10);
  const cropRef = useRef<InstanceType<typeof AvatarEditor>>(null);
  const dispatch = useAppDispatch();

  const handleSave = async () => {
    if (cropRef.current) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      dispatch(setCV({ ...CV, avatarUrl: URL.createObjectURL(blob) }));
      setModalOpen(false);
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    event;
    setSlideValue(newValue);
  };

  const onCLickCancel = () => {
    setSrc('');
    setModalOpen(false);
  };

  return (
    <Modal sx={modalStyle} open={modalOpen}>
      <Box sx={boxStyle}>
        <AvatarEditor
          ref={cropRef}
          image={src}
          style={{ width: '100%', height: '100%', margin: '0 0 20px 0' }}
          border={50}
          borderRadius={150}
          color={[0, 0, 0, 0.72]}
          scale={Number(slideValue) / 10}
          rotate={0}
        />
        <Slider
          min={10}
          max={50}
          sx={{
            margin: '0 auto',
            width: '80%',
            color: '#1a91f0',
          }}
          size="medium"
          defaultValue={slideValue}
          value={slideValue}
          onChange={handleChange}
        />
        <Box
          sx={{
            display: 'flex',
            padding: '10px',
            border: '3px solid white',
          }}
        >
          <Button
            size="small"
            sx={{ marginRight: '10px', color: 'red', borderColor: 'red' }}
            variant="outlined"
            onClick={onCLickCancel}
          >
            cancel
          </Button>
          <Button
            sx={{ background: '#1a91f0' }}
            size="small"
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CropperModal;
