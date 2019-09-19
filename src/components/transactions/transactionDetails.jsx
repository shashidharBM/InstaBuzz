import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const TransactionDetails = ({rowDetails, isOpen}) => {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
    console.log(rowDetails);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       <Typography variant="subtitle2" gutterBottom>
          Account No:
        </Typography>
        <Typography variant="subtitle1" component="h2">
          Account No:
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
            Account Name:
        </Typography>
        <Typography variant="subtitle1" component="h2">
          Account No:
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
            Currency Code:
        </Typography>
        <Typography variant="subtitle1" component="h2">
          Account No:
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
            Amount:
        </Typography>
        <Typography variant="subtitle1" component="h2">
          Account No:
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Transaction Type:
        </Typography>
        <Typography variant="subtitle1" component="h2">
          Account No:
        </Typography>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transiton-group animates me.</p>
          </div>
        </Fade>
      </Modal>
  )
}

TransactionDetails.propTypes = {
    rowDetails: PropTypes.object.isRequired
}
export default React.memo(TransactionDetails)

