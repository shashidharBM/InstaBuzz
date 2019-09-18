import React from 'react';
import PropTypes from 'prop-types';
import ReactExport from 'react-data-export';
import SaveAlt from '@material-ui/icons/SaveAlt';
import IconButton from '@material-ui/core/IconButton';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const TransactionsListExport = ({
    rawData,
    tableCols
}) => {
    return(
        <ExcelFile element={<IconButton aria-label='Export'>
            <SaveAlt />
        </IconButton>}>
                <ExcelSheet data={rawData} name="TRANSACTIONS_LIST_DATA">
                   {tableCols.map((column, key) => <ExcelColumn label={column.title} value={column.name} key={key} />)}
                </ExcelSheet>
            </ExcelFile>
    );
}

TransactionsListExport.propTypes = {
    rawData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    tableCols: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

TransactionsListExport.defaultProps = {
    
}

export default React.memo(TransactionsListExport)
