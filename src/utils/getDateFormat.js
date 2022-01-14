export const getDate = (year) => {
  let date;
  if (!year) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    date = yyyy + '-' + mm + '-' + dd;
  } else {
    date = year + '-01-01';
  }
  return date
}
