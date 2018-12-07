let submitBtn = document.getElementById('submit-btn');
let assigmentTopicField = document.getElementById('assignment-topic');
let assignmentDescriptionField = document.getElementById('description');
let datePicker = document.getElementById('date-picker');
let assignmentLinksField = document.getElementById('assignment-links');

submitBtn.onclick = function(e) {
    e.preventDefault();

    let topic = assigmentTopicField.value;
    let description = assignmentDescriptionField.value;
    let date = datePicker.value;
    let links = assignmentLinksField.value;

    let details = {
        topic,
        description,
        date,
        links
    }

    postAssignmentDetails(details);

}

function postAssignmentDetails(details) {
    if(details.topic !== null && details.description !== null) {
         let uid = sessionStorage.getItem('uid');
        console.log(uid);

        details.uid = uid;

        fetch('api/createassignment', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(details), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
}