$(document).ready(function () {
  $(".input-group-append").click(() => {
    const city = $("#searchbox").val();

    $.ajax(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=482c20fbe077c6b01ea43da01d00e4d7&units=metric`
    ).done(function ({ main, weather, name, sys, wind }) {
      $(".current-temp").html(`${main.temp}&deg;C`);
      $(".weather-desc").html(weather[0].description);
      $(".location").html(`${name}, ${sys.country}`);
      $(".weather-main").html(weather[0].main);
      $(".max-min").html(`${main.temp_max}&deg;/${main.temp_min}&deg; C`);
      $(".pressure").html(`${main.pressure}mb`);
      $(".humidity").html(`${main.humidity}%`);
      $(".wind-speed").html(`${wind.speed} m/s`);
      $(".wind-deg").html(`${wind.deg}&deg; Wind`);
    });
  });
});
