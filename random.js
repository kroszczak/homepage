
const activity = async () => {
  const api_call  = await fetch("http://www.boredapi.com/api/activity/");
  const response = await api_call.json();
  
  console.log(response);
  document.querySelector('#activity').innerHTML += `<p>${response.activity}</p>`;
}

activity();