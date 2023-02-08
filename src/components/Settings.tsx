import React, { useContext } from 'react';
import { Box, Button, Modal, Popover } from '@mui/material';
import { DayColorPicker } from './DayColorPicker';
import SettingsContext from '../context/settings-context';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Settings = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { value: colorSettings, updateColor } = useContext(SettingsContext);

  return (
    <Box>
      <Button onClick={handleOpen}>Settings</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DayColorPicker
            label="2 Days"
            color={colorSettings['2d']}
            onColorChange={(color) => updateColor('2d', color)}
          />
          <DayColorPicker
            label="7 Days"
            color={colorSettings['7d']}
            onColorChange={(color) => updateColor('7d', color)}
          />
          <DayColorPicker
            label="28 Days"
            color={colorSettings['28d']}
            onColorChange={(color) => updateColor('28d', color)}
          />
        </Box>
      </Modal>
    </Box>
  );
};
