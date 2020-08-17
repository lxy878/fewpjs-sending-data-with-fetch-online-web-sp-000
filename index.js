function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    document.body.innerHTML = json.id;
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    document.body.innerHTML = error.message;
  });

};
