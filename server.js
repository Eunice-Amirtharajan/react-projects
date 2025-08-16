const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/api/restaurants/list/v5', async (req, res) => {
    try {
        const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5', {
            params: req.query,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': 'https://www.swiggy.com',
                'Referer': 'https://www.swiggy.com/'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Proxy Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
