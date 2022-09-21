fetch('package.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
let data;

  let fromName = document.getElementById('fromName');
  let toName = document.getElementById('toName');
  let fromBank = document.getElementById('fromBank');
  let toBank = document.getElementById('toBank');
  let fromAcc = document.getElementById('fromAcc');
  let toAcc = document.getElementById('toAcc');
  let date = document.getElementById('date');
  let transaction = document.getElementById('transaction');
  let payment = document.getElementById('payment');
  let transaction_id = document.getElementById('transaction_id');

function appendData(data){
    fromName.innerHTML = data.senderDetails.sender;
    toName.innerHTML = data.recieverDetails.reciever;
    fromBank.innerHTML = `${data.senderDetails.bank}, ${data.senderDetails.IFSC}`;
    toBank.innerHTML = data.recieverDetails.wallet;
    fromAcc.innerHTML = `A/c No. ${data.senderDetails.accountno}`
    toAcc.innerHTML = `Ref No. ${data.recieverDetails.referenceno}`
    date.innerHTML = data.transactiondate
    transaction.innerHTML = `&#8377; ${data.transactionamount}`;
    payment.innerHTML = `Payment Method : ${data.paymentmethod}`;
    transaction_id.innerHTML = `Transaction ID : ${data.transactionId}`;
}