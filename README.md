# price-notification
Receive notifications regarding the price

# Quick Start
Clone the repository.

Run yarn in the terminal. (may need to install yarn separately)

Paste the necessary information in the example.env file. **From email must be gmail for quick start. See Additional Modifications for further details.**

EMAIL_USERNAME=username.email@gmail.com

EMAIL_PASSWORD=emailPassword

TO_EMAIL=receiving.email@gmail.com

Change the name of the example.env file to .env file.

Run the script. Default tokens are Bitcoin, Ethereum, Fantom, and UniDex.

# Additional Modifications
In main.js
  
  Change "tokens" constant with desired tokens. Must match the coinID on coingecko.
  
  Change "vsCurrency" constant with desired currency.
  
Example modification to receive information on Uni using Euro as the base currency.
    
    const tokens = ['uni']
    
    const vsCurrency = ['euro']
