async function getData() {
  const url = " http://api.weatherapi.com/v1/current.json?key=2e8e85ba7b9145bdba583441261302&q=Nagpur&aqi=yes";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    document.getElementById("temp_c").innerHTML = result.current.temp_c
     document.getElementById("temp_f").innerHTML = result.current.temp_f
    document.getElementById("wind_kph").innerHTML = result.current.wind_kph
    document.getElementById("wind_dir").innerHTML = result.current.wind_dir
  } catch (error) {
    console.error(error.message);
  }
}