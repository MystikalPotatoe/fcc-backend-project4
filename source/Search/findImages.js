import axios from 'axios';

const apikey = 'key=AIzaSyCLpKB2P2b-H5MWRp53O6VvEjP73gWALkQ';

const searchID = 'cx=010194122167841651400:6a7utmilajk';

const searchType = 'searchType=image';

const baseURL = 'https://www.googleapis.com/customsearch/v1';

const testSearchCriteria = 'q=Cats';

const totalURL = `${baseURL}?${testSearchCriteria}&${searchType}&${searchID}&${apikey}&start=11`;

axios.get(totalURL)
    .then((result) => {
        console.log(result.data.queries.nextPage);
    })
    .catch((err) => {
        console.log(`There was an error: ${err}`);
    });
