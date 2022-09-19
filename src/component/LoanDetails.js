import * as React from 'react';
import Button from '@mui/material/Button';

function LoanDetails() {
  return <Button variant="contained">Hello World</Button>;
}

export default LoanDetails;
async function addLoan() {
  let clinsjToken = await AsyncStorage.getItem('clinsjToken');
  let userId = await AsyncStorage.getItem('userId');
  setspinnervisible(true);
  let data = {
    bankName: choosebank,
    outstandingAmt: parseFloat(amount),
    interestRate: parseFloat(interest.replace('%', '')),
    interestType: isFixed ? 'fixed' : 'floating',
    loanType: 'unsecured',
    term: isFixed ? slidervalue.toString() + 'Y' : '0Y',
    isCoborrowed: false,
  };
  let header = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + clinsjToken,
    },
  };

  await postApit('/loan/create/' + userId, data, header)
    .then(response => {
      setspinnervisible(false);
      setchoosebank('');
      setamount('');
      setinterest('');
      userDetails();
      setisData(true);
      //navigation.navigate('IncomeInformationScreen');
    })
    .catch(error => {
      //navigation.navigate('LoginScreen',{errorFlag:true});
      console.log(error);
    });
}