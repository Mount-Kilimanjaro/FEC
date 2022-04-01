export default function formatDate(str) {
  var formatted = new Date(str).toString().slice(4)
  return formatted.slice(0, 11);

}

