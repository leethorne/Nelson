const cheerioAdv = require('cheerio-advanced-selectors');
const cheerio = cheerioAdv.wrap(require('cheerio'));
const axios = require('axios');

function Resource (id, title, link, description) {
    this.id = id;
    this.title = title;
    this.link = link;
    this.description = description;
}

var resourceArr = [];
var id = 0;

function scrape (req, res) {
    axios.get('https://www.bullybust.org/resources/key-resources')
    .then(function(response) {
        console.log(response.data)
        const $ = cheerio.load(response.data)

        // console.log(" logging $: ", $)


        var title$ = $('.resource')
            console.log("title$: ", title$.attribs)

            res.json(response)

    })
    .catch(function (error) {
        res.json(error)
    })
}

module.exports = { scrape }