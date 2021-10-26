import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeadersTable from './HeadersTable';
import TableRow from './TableRow';
import { connect } from 'react-redux';

class Table extends Component {
  mapTablesInf() {
    const { expenses } = this.props;
    return expenses.map((expense) => <TableRow expense={ expense } /> )
  }

  render() {
   
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <HeadersTable />
            </tr>
          </thead>
          <tbody>
            { this.mapTablesInf() }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expense: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    description: PropTypes.string,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape({}).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
