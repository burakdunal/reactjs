import React, {useState} from 'react';
import InputForm from './components/InputForm/InputForm';
import ShowResult from './components/ShowResult/ShowResult';
import Header from './components/Header/Header';
import axios from "axios";
import ShowList from './components/ShowList/ShowList';

function App() {
  const [calculatedData, setCalculatedData] = useState("");
  const [fetchedData, setFetchedData] = useState("");
  const calculateHandler = (userInput) => {

    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const initialInvestment = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // let totalInterest = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      // totalInterest += yearlyInterest;
      // const investedCapital = currentSavings - totalInterest;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        // totalInterest: totalInterest,
        yearlyContribution: yearlyContribution,
        // investedCapital: investedCapital
        initialInvestment: initialInvestment
      });
    };

    setCalculatedData(yearlyData);
  };

  const showBackendList = async() => {
    try{
        const response = await axios.get("http://localhost:3500/api/user/");
        console.log(response.data.title);
        const blogs = response.data.blogs;
        console.log(blogs);
        setFetchedData(blogs);
    }
    catch(err){
        console.log(err);
    };
  };
  
  return (
    <div>
      <Header />
      <InputForm onCalculateData={calculateHandler} onShowList={showBackendList} />
      {!calculatedData.length > 0 && !fetchedData.length > 0 && <p style={{ textAlign: 'center' }}>No calculated data in here. Please fill the form.</p>}
      {calculatedData.length > 0 && <ShowResult items={calculatedData} />}
      {fetchedData.length > 0 && <ShowList blogs={fetchedData} />}
    </div>
  );
}

export default App;
