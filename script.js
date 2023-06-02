const getdata = async () => {
  try {
    const res = await fetch("https://integration.clear.sale/api/auth/login");
    const data = await res.json();
    const mydata = document.querySelector("#mydata");
    mydata.innerHTML = JSON.stringify(data);
  } catch (error) {}
};

window.addEventListener("load", () => {
  getdata();
});
