const queryMember = async (id) => {
  const options = {
    method: "POST",
    mode: "cors",
    headers: new Headers({
      "content-type": "application/json",
    }),
  };

  const body = {
    action: "QUERY",
    payload: {
      id: id,
    },
  };

  options.body = JSON.stringify(body);

  let value = 0;

  try {
    let response = await fetch("http://localhost:9000/example", options);
    response = await response.json();
    value = await response.value;
  } catch (error) {
    console.error(error);
  }

  return value;
};

export default queryMember;
