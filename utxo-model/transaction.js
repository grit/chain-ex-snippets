class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }
  execute() {
    let inputValue = 0;
    this.inputUTXOs.forEach(iUTXO => {
      if (iUTXO.spent) {
        throw new Error('iUTXO is spent!');
      }
      inputValue += iUTXO.amount;
    });

    let outputValue = this.outputUTXOs.reduce((prev, curr) => {
      return prev + curr.amount;
    }, 0);

    if (inputValue < outputValue) {
      throw new Error('Insufficient input!');
    }
    this.inputUTXOs.forEach(iUTXO => {
      iUTXO.spent = true;
    });
    this.fee = inputValue - outputValue;
  }
}

module.exports = Transaction;
