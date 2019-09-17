import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import { getPortfolioData } from '../../redux/actions/portfolioReports'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchControlInput from '../common/searchControl'
import CircularProgress from '@material-ui/core/CircularProgress';
import GridMUI from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
import { businessData } from '../data/apiResponseData'

const columns = [
  {
    name: 'account',
    title: 'Account No'
  },
  {
    name: 'accountName',
    title: 'Account Names'
  },
  {
    name: 'currencyName',
    title: 'Currency'
  },
  {
    name: 'amount',
    title: 'Amount'
  },
  {
    name: 'transactionType',
    title: 'Transaction Type'
  },
];

class PortfolioReports extends PureComponent {

  componentDidMount() {
   // this.fetchSearchApiDeatils();
  }

  fetchSearchApiDeatils = async () => {
    //     try {
  //       getShopListRequest(true);
  //       const response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}${apiUrl}${getBusinessShops}`, {
  //         headers: {
  //           Authorization: `Bearer ${apiKey}`
  //         },
  //         params
  //       });
  //       const { data } = response;
  //       const { businesses } = data;
  //       getTopShopsList(data);
  //       const businessReviews = [];
  //       businesses.forEach(business => {
  //         const businessId = business.id;
  //          axios.get(`${'https://cors-anywhere.herokuapp.com/'}${apiUrl}/businesses/${businessId}/reviews`, {
  //           headers: {
  //             Authorization: `Bearer ${apiKey}`
  //           }
  //         }).then((response) => {
  //           const { data } = response;
  //           const review = Object.assign({}, { businessId, ...data});
  //           businessReviews.push(review);
  //           storeBusinessReviews(businessReviews);
  //         });     
  //       });
  //     }
  //     catch(error) {
  //       console.log(`Error in calling API : ${error}`);
  //       getShopListError();
  //       //TODO: Show some alert Toast Messages to User
  //     }
  }

render() {
  const { reportsData, isLoading } = this.props;

  return (
    <Card >
      <CardContent>
        <SearchControlInput />
        {isLoading
          ?  <CircularProgress style={{marginTop: 25}}/> 
          :  <Card>
            <CardContent>
              <Grid 
                rows={businessData.transactions}
                columns={columns} >
                  <SortingState />
                  <PagingState defaultCurrentPage={0} defaultPageSize={10} />
                  <FilteringState defaultFilters={[]} />
                  <IntegratedSorting />
                  <IntegratedPaging />
                  <IntegratedFiltering />
                  <Table />
                  <TableHeaderRow showSortingControls />
                  <TableColumnVisibility />
                  <TableFilterRow rowHeight={10} />
                  <Toolbar />
                  <ColumnChooser />
                  <PagingPanel  pageSizes={[5, 20, 50, 0]} />
              </Grid>
            </CardContent>
          </Card>
        }
       
      </CardContent>
   </Card>
  )
}
}

PortfolioReports.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  reportsData: PropTypes.array.isRequired
};

PortfolioReports.defaultProps = {

};

const mapStateToProps = state => ({
  reportsData: state.portfolioDetailedData.reportsData,
  isLoading: state.portfolioDetailedData.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPortfolioData
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioReports)