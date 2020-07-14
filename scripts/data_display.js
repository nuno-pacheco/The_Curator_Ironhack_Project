const api_url = 'https://api.thevirustracker.com/free-api?global=stats';

async function getCovid(){
    const response = await fetch(api_url);
    const {total_cases, total_deaths } = data;

    document.getElementById('tot').textContent = total_cases;
    document.getElementById('death').textContent = total_deaths; 

}
getCovid();