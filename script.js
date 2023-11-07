function calculateTip() {
  let billAmount = parseInt(document.getElementById("billAmount").value);
  let serviceQuality = parseFloat(
    document.getElementById("serviceQuality").value
  );
  let tip = document.getElementById("tip");
  let numPeople = parseInt(document.getElementById("totalPeople").value);

  var total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  tip.innerHTML = total
}
