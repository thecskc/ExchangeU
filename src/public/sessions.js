let submitBtn = document.getElementById('submit-btn');
let assigmentTopicField = document.getElementById('assignment-topic');
let assignmentDescriptionField = document.getElementById('description');

submitBtn.onclick = function(e) {
    e.preventDefault();

    let topic = assigmentTopicField.value;
    let description = assignmentDescriptionField.value;

    postAssignmentDetails(topic, description);

}

function postAssignmentDetails(topic, description) {
    if(topic !== null && description !== null) {
         let uid = sessionStorage.getItem('uid');
        console.log(uid);

        let body = {
            topic,
            description,
            uid
        };

        fetch('api/createassignment', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(body), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
}