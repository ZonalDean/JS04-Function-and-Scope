// const showModal = alert;
// showModal("Execute modal"); // shows string because () are added after show modal

const showModal = alert();
showModal("Execute modal"); // shows nothing because the string is outside of alert()