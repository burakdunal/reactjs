const txnIdGenerator = (op) => {
  const currentDate = new Date();
  const timestamp = Date.now();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const twoDigitMonth = (month < 10 ? '0' : '') + month;
  const day = currentDate.getDate();
  const twoDigitDay = (day < 10 ? '0' : '') + day;
  const date = year + twoDigitMonth + twoDigitDay;
  const timestampString = timestamp.toString().slice(-7);
  let txn_id;
  if (op === "txn") {
    txn_id = "txn_10"+date+timestampString;
  } else {
    txn_id = "prod_"+op+"_10"+date+timestampString;
  }
  return txn_id;
}

export default txnIdGenerator;