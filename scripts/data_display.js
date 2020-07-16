/*const api_url = 'https://api.thevirustracker.com/free-api?global=stats';
async function getCovid(){
    const response = await axios.get(api_url);
  //console.log(response.data)
  const {total_cases, total_deaths } = data;
  document.getElementById('tot').textContent = total_cases;
  document.getElementById('death').textContent = total_deaths;


}
  //getCovid();
*/

  // Random WHO advices get it from the oficial site
var adviceCovid = [
  "Regularly and thoroughly clean your hands...",
  "Maintain at least 1 metre (3 feet) distance between yourself and others.",
  "Avoid going to crowded places.",
  "Avoid touching eyes, nose and mouth.",
  "Stay home and self-isolate even with minor symptoms..."
];

var randomAdvice = adviceCovid[Math.floor(Math.random()*adviceCovid.length)];



