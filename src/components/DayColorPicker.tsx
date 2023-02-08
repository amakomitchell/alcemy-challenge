import React, { FC } from 'react';
import { Box, Popover, Typography } from '@mui/material';
import { SketchPicker } from 'react-color';

type Props = {
  label: string;
  color: string;
  onColorChange: (color: string) => void;
};

export const DayColorPicker: FC<Props> = ({ label, color, onColorChange }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopOver = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  const id = openPop ? 'simple-popover' : undefined;
  return (
    <Box display="flex" alignItems="center" mb={4}>
      <Typography flex={1}>{label}</Typography>
      <Box>
        <Box width={50} height={20} onClick={handleClick} bgcolor={color}></Box>
        <Popover
          id={id}
          open={openPop}
          anchorEl={anchorEl}
          onClose={handleClosePopOver}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <SketchPicker
              color={color}
              onChange={({ hex }) => onColorChange(hex)}
            />
          </Box>
        </Popover>
      </Box>
    </Box>
  );
};
