let APIURL = '';

switch (window.location.hostname){
    case 'localhost':
    APIURL = 'http://localhost:3000';
    break;

    case 'icd-escapehatchclient.herokuapp.com':
    APIURL ='https://icd-escaptehatch.herokuapp.com'
    break;
}

export default APIURL;