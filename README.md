# price-notification
Receive notifications regarding the price

#Quick Start
Clone the repository.

Paste the necessary information in the example.env file.

EMAIL_USERNAME=username.email@yahoo.com

EMAIL_PASSWORD=emailPassword

TO_EMAIL=receiving.email@yahoo.com

Change the name of the example.env file to .env file.

Run the script. Default tokens are Bitcoin, Ethereum, Fantom, and UniDex.

#Additional Modifications
In main.js
  Change "tokens" constant with desired tokens. Must match the coinID on coingecko.
  Change "vsCurrency" constant with desired currency.
  
Example modification to receive information on Uni using Euro as the base currency.
    const tokens = ['Uni']
    const vsCurrency = ['euro']
