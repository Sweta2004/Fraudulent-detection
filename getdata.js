const getdata = async () => {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    const mydata = document.querySelector("#mydata");
    mydata.innerHTML = JSON.stringify(data);
  } catch (error) {}
};
window.addEventListener("load", () => {
  getdata();
});
