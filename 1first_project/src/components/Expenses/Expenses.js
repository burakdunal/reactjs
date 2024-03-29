import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // let filterInfoText = "2019, 2021, 2022";

  // if (filteredYear === "2019") {
  //     filterInfoText = "2020, 2021, 2022";
  // } else if (filteredYear === "2021") {
  //     filterInfoText = "2019, 2020, 2022";
  // } else if (filteredYear === "2022") {
  //     filterInfoText = "2019, 2020, 2021";
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <p>Data for years {filterInfoText} is hidden.</p> */}
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
