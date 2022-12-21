(()=>{async function e(e,t=null,o=null){let n;n=null!==t&&null!==o?await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${o}&appid=32de6d105d017e55c7030daf2682885c`,{mode:"cors"}):await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=32de6d105d017e55c7030daf2682885c`,{mode:"cors"});const i=await n.json();if(console.log(i),n.ok){const e=function(e){let t={};return t.coord=e.coord,t.temp=e.main.temp,t.feels_like=e.main.feels_like,t.humidity=e.main.humidity,t.wind=e.wind.speed,t.countryCode=e.sys.country,t.city=e.name,t.logo=e.weather[0].icon,t.mainDescription=e.weather[0].main,t.detailDescription=e.weather[0].description,t.timezone=e.timezone,t}(i);console.log(e),function(e){document.querySelector(".logo img").src=`http://openweathermap.org/img/wn/${e.logo}@2x.png`,document.querySelector(".temp").textContent=parseInt(e.temp)-273+"℃",document.querySelector(".description").textContent=`${e.mainDescription} | ${e.detailDescription}`,document.querySelector(".feels-like-temp").textContent=`Feels Like: ${parseInt(e.feels_like)-273}℃`,document.querySelector(".humidity").textContent=`Humidity: ${e.humidity}%`,document.querySelector(".wind").textContent=`Wind: ${e.wind} km/h`,document.querySelector(".city").textContent=`${e.city}, ${e.countryCode}`;const t=function(e){const t=(new Date).getTime(),o=new Date(t+1e3*e),n=new Date(o.toISOString().slice(0,-1));return[n.toDateString(),n.toLocaleTimeString()]}(e.timezone);console.log(t),document.querySelector(".date-and-time").textContent=`${t[0]}, ${t[1]}`,document.querySelectorAll("#hide").forEach((e=>{e.removeAttribute("id")}))}(e)}else document.querySelector(".errorMessage").removeAttribute("id")}navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e(null,t.coords.latitude,t.coords.longitude)})):alert("Geolocation is not supported by this browser."),document.querySelector("form").onsubmit=t=>{t.preventDefault(),document.querySelector(".errorMessage").setAttribute("id","hideMessage"),e(document.querySelector("form input").value)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIlxuZnVuY3Rpb24gZ2V0RGF0ZUFuZFRpbWUodGltZXpvbmUpIHtcbiAgICBjb25zdCB4ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKHgrdGltZXpvbmUqMTAwMCk7XG4gICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgLTEpKTtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZVRpbWUudG9EYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IGRhdGVUaW1lLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIHJldHVybiBbIGRhdGVTdHJpbmcsIHRpbWVTdHJpbmcgXTtcbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSkge1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvIGltZycpO1xuICAgIGxvZ28uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5sb2dvfUAyeC5wbmdgO1xuXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KGRhdGEudGVtcCkgLSAyNzN94oSDYDtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhLm1haW5EZXNjcmlwdGlvbn0gfCAke2RhdGEuZGV0YWlsRGVzY3JpcHRpb259YDtcblxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlLXRlbXAnKTtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtwYXJzZUludChkYXRhLmZlZWxzX2xpa2UpIC0gMjczfeKEg2A7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEuaHVtaWRpdHl9JWA7XG5cbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7ZGF0YS53aW5kfSBrbS9oYDtcblxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHl9LCAke2RhdGEuY291bnRyeUNvZGV9YDtcblxuICAgIGNvbnN0IGRhdGVBbmRUaW1lU3RyaW5ncyA9IGdldERhdGVBbmRUaW1lKGRhdGEudGltZXpvbmUpO1xuICAgIGNvbnNvbGUubG9nKGRhdGVBbmRUaW1lU3RyaW5ncyk7XG4gICAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1hbmQtdGltZScpO1xuICAgIGRhdGVBbmRUaW1lLnRleHRDb250ZW50ID0gYCR7ZGF0ZUFuZFRpbWVTdHJpbmdzWzBdfSwgJHtkYXRlQW5kVGltZVN0cmluZ3NbMV19YDtcblxuICAgIC8vIHNob3cgdGhlIGh0bWwgZWxlbWVudFxuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaGlkZScpO1xuICAgIHJlc3VsdHMuZm9yRWFjaChyZXN1bHQgPT4ge1xuICAgICAgICByZXN1bHQucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRhKHdlYXRoZXJPYmplY3QpIHtcbiAgICBsZXQgbmVjZXNzYXJ5RGF0YXMgPSB7fTtcbiAgICBuZWNlc3NhcnlEYXRhcy5jb29yZCA9IHdlYXRoZXJPYmplY3QuY29vcmQ7XG4gICAgbmVjZXNzYXJ5RGF0YXMudGVtcCA9IHdlYXRoZXJPYmplY3QubWFpbi50ZW1wO1xuICAgIG5lY2Vzc2FyeURhdGFzLmZlZWxzX2xpa2UgPSB3ZWF0aGVyT2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcbiAgICBuZWNlc3NhcnlEYXRhcy5odW1pZGl0eSA9IHdlYXRoZXJPYmplY3QubWFpbi5odW1pZGl0eTtcbiAgICBuZWNlc3NhcnlEYXRhcy53aW5kID0gd2VhdGhlck9iamVjdC53aW5kLnNwZWVkO1xuICAgIG5lY2Vzc2FyeURhdGFzLmNvdW50cnlDb2RlID0gd2VhdGhlck9iamVjdC5zeXMuY291bnRyeTtcbiAgICBuZWNlc3NhcnlEYXRhcy5jaXR5ID0gd2VhdGhlck9iamVjdC5uYW1lO1xuICAgIG5lY2Vzc2FyeURhdGFzLmxvZ28gPSB3ZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uaWNvbjtcbiAgICBuZWNlc3NhcnlEYXRhcy5tYWluRGVzY3JpcHRpb24gPSB3ZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0ubWFpbjtcbiAgICBuZWNlc3NhcnlEYXRhcy5kZXRhaWxEZXNjcmlwdGlvbiA9IHdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBuZWNlc3NhcnlEYXRhcy50aW1lem9uZSA9IHdlYXRoZXJPYmplY3QudGltZXpvbmU7XG4gICAgcmV0dXJuIG5lY2Vzc2FyeURhdGFzO1xufVxuXG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIGxhdD1udWxsLCBsb249bnVsbCkge1xuICAgIGxldCByZXNwb25zZTtcbiAgICBpZiAobGF0ICE9PSBudWxsICYmIGxvbiAhPT0gbnVsbCkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9MzJkZTZkMTA1ZDAxN2U1NWM3MDMwZGFmMjY4Mjg4NWNgLCB7IG1vZGU6IFwiY29yc1wifSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPTMyZGU2ZDEwNWQwMTdlNTVjNzAzMGRhZjI2ODI4ODVjYCwgeyBtb2RlOiBcImNvcnNcIn0pO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBleHRyYWN0ZWREYXRhID0gZXh0cmFjdERhdGEoZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4dHJhY3RlZERhdGEpO1xuICAgICAgICBkaXNwbGF5V2VhdGhlckRhdGEoZXh0cmFjdGVkRGF0YSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JNZXNzYWdlJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzaG93UG9zaXRpb24pO1xuICAgIH0gZWxzZSB7IFxuICAgICAgICBhbGVydChcIkdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLlwiKTtcbiAgICB9XG59XG5cbiAgXG5mdW5jdGlvbiBzaG93UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCBsYXQgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XG4gICAgY29uc3QgbG9uID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcbiAgICBnZXRXZWF0aGVyRGF0YShudWxsLCBsYXQsIGxvbik7XG59XG5cblxuLy8gTUFJTlxuZ2V0TG9jYXRpb24oKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JNZXNzYWdlJyk7XG4gICAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZU1lc3NhZ2UnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gaW5wdXQnKTtcbiAgICBnZXRXZWF0aGVyRGF0YShpbnB1dC52YWx1ZSk7XG59OyJdLCJuYW1lcyI6WyJhc3luYyIsImdldFdlYXRoZXJEYXRhIiwibG9jYXRpb24iLCJsYXQiLCJsb24iLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9rIiwiZXh0cmFjdGVkRGF0YSIsIndlYXRoZXJPYmplY3QiLCJuZWNlc3NhcnlEYXRhcyIsImNvb3JkIiwidGVtcCIsIm1haW4iLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJ3aW5kIiwic3BlZWQiLCJjb3VudHJ5Q29kZSIsInN5cyIsImNvdW50cnkiLCJjaXR5IiwibmFtZSIsImxvZ28iLCJ3ZWF0aGVyIiwiaWNvbiIsIm1haW5EZXNjcmlwdGlvbiIsImRldGFpbERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJ0aW1lem9uZSIsImV4dHJhY3REYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwidGV4dENvbnRlbnQiLCJwYXJzZUludCIsImRhdGVBbmRUaW1lU3RyaW5ncyIsIngiLCJEYXRlIiwiZ2V0VGltZSIsImQiLCJkYXRlVGltZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJ0b0RhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJnZXREYXRlQW5kVGltZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVzdWx0IiwicmVtb3ZlQXR0cmlidXRlIiwiZGlzcGxheVdlYXRoZXJEYXRhIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiYWxlcnQiLCJvbnN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEF0dHJpYnV0ZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==