import React from "react";
import classes from './ShowResult.module.css';

const ShowResult = (props) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return (
        <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {props.items.map(result => (
            <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.savingsEndOfYear)}</td>
                <td>{formatter.format(result.yearlyInterest) }</td>
                <td>{formatter.format(result.savingsEndOfYear - result.initialInvestment - result.yearlyContribution * result.year)}</td>
                <td>{formatter.format(result.initialInvestment + result.yearlyContribution * result.year)}</td>
            </tr>
        ))}
        </tbody>
      </table>
    );
};

export default ShowResult;