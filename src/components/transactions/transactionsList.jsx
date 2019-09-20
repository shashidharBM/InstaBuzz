import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import {
  ColumnChooser,
  Grid,
  PagingPanel,
  Table,
  TableColumnVisibility,
  TableFilterRow,
  TableHeaderRow,
  Toolbar
} from '@devexpress/dx-react-grid-material-ui';
import {
  FilteringState,
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedSorting,
  PagingState,
  SortingState
} from '@devexpress/dx-react-grid';
import { Template, TemplatePlaceholder } from '@devexpress/dx-react-core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TransactionsListExport from '../export-data/transactionsListExport';
import { getTransactionsList, toggleTransactionModal } from '../../redux/actions/transactionsList';
import TransactionDetails from './transactionDetails';

const useStyles = makeStyles(theme => ({
  link: {
   color: 'blue',
   cursor: 'pointer',
   '&:hover': {
     textDecoration: 'underline'
   }
  },
}));

const columns = [
  {
    name: 'account',
    title: 'ACCOUNT NO',
    isLink: true,
  },
  {
    name: 'accountName',
    title: 'ACCOUNT NAME'
  },
  {
    name: 'currencyName',
    title: 'CURRENCY'
  },
  {
    name: 'currencyCode',
    title: 'CURRENCY CODE'
  },
  {
    name: 'currencySymbol',
    title: 'SYMBOL'
  },
  {
    name: 'amount',
    title: 'AMOUNT'
  },
  {
    name: 'transactionType',
    title: 'TRANSACTION TYPE'
  },
  {
    name: 'mask',
    title: 'MASK'
  },
  {
    name: 'iban',
    title: 'IBAN'
  },
  {
    name: 'bic',
    title: 'BIC'
  }
];


class TransactionsList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      filters: {},
      hiddenColumnNames: ['mask', 'iban', 'bic', 'currencyCode', 'currencySymbol' ],
      transactionDetails: {},
      isOpen: false
    }
  }

  componentDidMount() {
    const { getTransactionsList } = this.props;
      getTransactionsList();
  }

  filterID = null;
  filteredRows (filters) {
    const { transactionsData } = this.props

    if(_.isEmpty(filters))
        return transactionsData

    return _.filter(transactionsData, (item) => {
        let filterCheck = false
        _.each(filters, (value, filter) => {
            filterCheck = _.includes(String(item[filter]).toLowerCase(), value.toLowerCase())
            if (!filterCheck)
                return false
        })
        return filterCheck
    })
}
onFilterChange = (filters) => {
    clearTimeout(this.filterID)
    let filterObj = {}
    filters.forEach(fltr => filterObj[fltr.columnName] = fltr.value)
    this.filterID = setTimeout(() => {
        this.setState({filters: filterObj})
    }, 300)
}

showHideManageColumns = (hiddenColumnNames) => {
  this.setState({hiddenColumnNames: hiddenColumnNames});
}
 
transactionModalPopup = ({...others}) => {
  const { row } = {...others}
  const { toggleTransactionModal, isModalOpen } = this.props;
  this.setState({ transactionDetails: row });
  toggleTransactionModal(!isModalOpen);
}

 customTableCell = ({column, value, ...others}) => {
  const classes = useStyles();
  if (column.name === 'account' && column.isLink) {
    return <Table.Cell column={column} value={value} {...others} 
          onClick={() => { this.transactionModalPopup({...others})}} className={classes.link} />
  }
  else {
    return <Table.Cell column={column} value={value} {...others} />
  }
}

render() {
  const { transactionsData, isLoading, isModalOpen } = this.props;

  return (
    <Card >
      <CardContent>
        {isLoading
          ?  <CircularProgress style={{marginTop: 25}}/> 
          :  <Card>
            <CardContent>
              <Grid 
                rows={this.filteredRows(this.state.filters)}
                columns={columns} >
                  <SortingState />
                  <PagingState defaultCurrentPage={0} defaultPageSize={10} />
                  <FilteringState defaultFilters={[]} onFiltersChange={this.onFilterChange.bind(this)} />
                  <IntegratedSorting />
                  <IntegratedPaging />
                  <IntegratedFiltering />
                  <Table cellComponent={this.customTableCell} />
                  <TableHeaderRow showSortingControls />
                  <TableColumnVisibility  hiddenColumnNames={this.state.hiddenColumnNames}
                            onHiddenColumnNamesChange={this.showHideManageColumns} />
                  <TableFilterRow rowHeight={10} />
                  <Toolbar />
                  <Template name="toolbarContent">
                    <TemplatePlaceholder />
                    <FormGroup row>
                      <FormControlLabel control={<TransactionsListExport
                          rawData={transactionsData}
                          tableCols={columns}
                      />}  label = "Export"/>
                      </FormGroup>
                    </Template>
                  <ColumnChooser />
                  <PagingPanel  pageSizes={[5, 20, 50, 0]} />
              </Grid>
            </CardContent>
          </Card>
        }
       {
         isModalOpen && <TransactionDetails  rowDetails={this.state.transactionDetails} isModalOpen={isModalOpen} />
       }
      </CardContent>
   </Card>
  )
}
}

TransactionsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  transactionsData: PropTypes.array.isRequired,
  isModalOpen: PropTypes.bool.isRequired
};

TransactionsList.defaultProps = {

};

const mapStateToProps = state => ({
  transactionsData: state.transactionsList.transactionsData,
  isLoading: state.transactionsList.isLoading,
  isModalOpen: state.transactionsList.isOpen
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTransactionsList,
  toggleTransactionModal
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsList)
