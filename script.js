// Airtable integration
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'API-KEy';
    const baseId = 'BASE_ID';
    const tableName = 'TABLE_NAME';
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => displayAirtableData(data.records))
    .catch(error => console.error('Error fetching data from Airtable:', error));

    // display data on the website
    function displayAirtableData(records) {
        const airtableDataDiv = document.getElementById('airtable-data');

        records.forEach(record => {
            const recordHtml = `
                <div class="airtable-record">
                    <p>Name: ${record.fields.Name}</p>
                    <p>Description: ${record.fields.Description}</p>

                </div>
            `;
            airtableDataDiv.innerHTML += recordHtml;
        });
    }
});
