let APIURL = '';

switch (window.location.hostname){
    case 'localhost':
    APIURL = 'http://localhost:3000';
    break;

    case 'icd-escaptehatchclient.herokuapp.com':
    APIURL ='https://icd-escapehatch.herokuapp.com'
    break;
}

export default APIURL;