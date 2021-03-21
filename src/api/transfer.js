const transfer = async (from, to, amount) => {
  amount = typeof amount == "string" ? parseInt(amount) : amount;

  const options = {
    method: "POST",
    mode: "cors",
    headers: new Headers({
      "content-type": "application/json",
    }),
  };

  const body = {
    action: "TRANSFER",
    payload: {
      id_1: from,
      id_2: to,
      amount: amount,
    },
  };

  options.body = JSON.stringify(body);

  try {
    await fetch("http://localhost:9000/example", options);
  } catch (error) {
    console.error(error);
  }
};

export default transfer;
