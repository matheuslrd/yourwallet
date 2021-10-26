import React, { Component } from 'react';
import { GoPencil } from 'react-icons/go';
import { TiDelete } from 'react-icons/ti';
import Button from './Button';

class TableRow extends Component {
  constructor() {
    super();

    this.convertingCurrency = this.convertingCurrency.bind(this);
    this.state = {
      currencyConverted: 0,
      exchange: 'Real',
    };
  }

  componentDidMount() {
    this.convertingCurrency();
  }

  convertingCurrency() {
    const { expense: { currency, exchangeRates } } = this.props;
    const coinSelected = exchangeRates[currency];
    const coinName = coinSelected.name.split('/')[0];
    const coinAsk = Number(coinSelected.ask).toFixed(2);
    this.setState({ currencyConverted: coinAsk, exchange: coinName });
  }

  render() {
    const { expense: { value, description, currency, method, tag } } = this.props;
    const { state: { currencyConverted, exchange } } = this;
    return (
      <>
        <tr className="tr-table">
          <td>
            {value}
          </td>
          <td>
            {description}
          </td>
          <td>
            {currency}
          </td>
          <td>
            {method}
          </td>
          <td>
            {tag}
          </td>
          <td>
            { exchange }
          </td>
          <td>
            { currencyConverted }
          </td>
          <td>
            BRL
          </td>
          <td className="buttons-update-delete">
            <button className="btn-update-delete btn-update">
              <GoPencil size="1.2em" />
            </button>
            <button className="btn-update-delete btn-delete">
              <TiDelete size="1.4em" />
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default TableRow;
