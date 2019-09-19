import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/HighlightOffSharp';
import { toggleTransactionModal } from '../../redux/actions/transactionsList';
import IconButton from '@material-ui/core/IconButton';

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
      padding: 30,
      width: '25rem',
      height: '10.5rem'
    },
    labelContainer: {
      marginTop: 5
    },
    headerLabel: {
      fontSize: 16,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    valueLabel: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    modalCloseBtn: {
      position: 'relative',
      bottom: 29,
      left: 78
    }
  }));

const TransactionDetails = ({rowDetails, isModalOpen}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(isModalOpen);
    const dispatch = useDispatch();

    const handleClose = (e) => {
      e.preventDefault()
        setOpen(!isModalOpen);
        dispatch(toggleTransactionModal(!isModalOpen))
      };

  return (
      <Modal
        aria-labelledby="Transaction Details"
        aria-describedby="Transaction Details"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
       <Paper className={classes.paper}>
         <div className={classes.modalTitle}>Transaction Details For: {rowDetails.account}
           <IconButton  aria-label="delete" onClick={handleClose} className={classes.modalCloseBtn}>
                <DeleteIcon />
            </IconButton>
           </div>
          <Divider />
         <div className={classes.labelContainer}>
           <span className={classes.headerLabel}>Account No:</span>
           <span className={classes.valueLabel}>{rowDetails.account}</span>
          </div>
          <div className={classes.labelContainer}>
           <span className={classes.headerLabel}>Account Name:</span>
           <span className={classes.valueLabel}>{rowDetails.accountName}</span>
          </div>
          <div className={classes.labelContainer}>
           <span className={classes.headerLabel}>Currency Code:</span>
           <span className={classes.valueLabel}>{rowDetails.currencyCode}</span>
          </div>
          <div className={classes.labelContainer}>
           <span className={classes.headerLabel}>Amount:</span>
           <span className={classes.valueLabel}>{rowDetails.amount}</span>
          </div>
          <div className={classes.labelContainer}>
           <span className={classes.headerLabel}>Transaction Type:</span>
           <span className={classes.valueLabel}>{rowDetails.transactionType}</span>
          </div>
              </Paper>
      </Modal>
  )
}

TransactionDetails.propTypes = {
    rowDetails: PropTypes.object.isRequired
}
export default React.memo(TransactionDetails)

