
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Container, Grid } from '@mui/material';

import { useRefMounted } from '@/hooks/useRefMounted';
import { useRouter } from 'next/router';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailEmployeePopup() {
  const router = useRouter();
  const isMountedRef = useRefMounted();
  const getAllData = React.useCallback(async () => {
    try {

    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    getAllData();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>


      {<Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size="large"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 4, flex: 1 }} variant="h2" component="div">
              餐厅座位详情界面
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              size="large"
            >
              关闭
            </Button>
          </Toolbar>
        </AppBar>
        <iframe src="/static/CanteenSim/index.html" allowFullScreen={true} scrolling='no'
          style={{
            height: "100vh",
            width: "100vw",
            border: "none"
          }} />
      </Dialog>}
    </div>
  );
}
