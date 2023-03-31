const expreess = require("express");
const app = expreess();
const bodyParser = require("body-parser");
const { channel } = require("diagnostics_channel");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    const axios = require('axios');

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://tvs.embedsite.xyz/live1.php',
        headers: {
            'Connection': ' keep-alive',
            'Upgrade-Insecure-Requests': ' 1',
            'User-Agent': ' Mozilla/5.0 (Linux; Android 11; WIKO T50) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
            'Accept': ' text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Referer': ' http://bdixtv.serverbd247.com/',
            'Accept-Encoding': ' gzip, deflate',
            'Accept-Language': ' bn,en-US;q=0.9,en;q=0.8'
        }
    };

    axios.request(config)
        .then((response) => {
            var url = response.data.slice(707, 904);
            const axios = require('axios');

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: url,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    res.json(
                        {
                            "Frist_Url": url,
                            "Second_Url": "http://tvs.embedsite.xyz:1936/live/live2_720p/" + response.data.slice(112,-1)
                        }
                    )
                })
                .catch((error) => {
                    res.send(error);
                });
        })
        .catch((error) => {
            res.send(error);
        });
})
app.listen(3000, () => {
    console.log("server running");
})