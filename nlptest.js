// let topics = nlp(userMessage.split(',')).topics().json();
// console.log('topics', topics)
const nlp = require('compromise')
nlp.extend(require('compromise-dates'))
nlp.extend(require('compromise-numbers'))

let requestDate = null;
let dropOffArray = [];
let passengerCount = null;

let userMessage = `Hey Leon, are you available to take me to Walmart, and Costco?`
doNLP(userMessage);


async function doNLP() {
    console.log('\ninside doNLP')
    if(!requestDate) {
        let datesAvailable = nlp(userMessage).dates();
        if(datesAvailable.list.length>0) {
            console.log('request date is given')
            requestDate = nlp(userMessage).dates().json(0).start;
        }
    }

    if(dropOffArray.length===0) {
        let orgs = nlp(userMessage.split(',')).organizations().json();
        for(let org of orgs) {
            dropOffArray.push(org.text);
        }

        let places = nlp(userMessage.split(',')).places().json();
        for(let place of places) {
            dropOffArray.push(place.text);
        }
    }

    if(!passengerCount) {
        let passengersAvailable = nlp(userMessage).numbers();
        if(passengersAvailable.list.length > 0) {
            console.log('passenger count is given')
            passengerCount = passengerCount.json(0).number;
        } else {
            passengerCount = 1;
        }
    }

    console.log('post NLP')
    console.log('dropOffArray', dropOffArray, dropOffArray.length);
    console.log('passengerCount', passengerCount);
    console.log('requestDate', requestDate);

    //send response
    //doNLP again until date and places are filled

    let responseMessage;
    if(!requestDate) {
        responseMessage = `At what time would you like me to pick you up?`
        //send message
    }
    if(dropOffArray.length===0) {
        responseMessage = `Where would you like to go?`
    }

    if(!requestDate || dropOffArray.length===0 || !passengerCount) {
        //get user message
        userMessage = `Tomorrow at 9 pm`
        await doNLP(userMessage);
    }
}


