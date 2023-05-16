## Introduction.
                                                                                                          
Decentralised result election tallying systems are an important tool for ensuring the accuracy of election results.The use a combination of cryptography and distributed ledgers to protect the data and ensure accuracy. This system also allows for a more transparent result that can be easily audited, ensuring the validity of the election results.

A decentralised result election tallying system can be implemented in a variety of ways. One method is to use a blockchain-based system that allows for secure storage of tallied votes which  prevents tampering. This system would use a distributed ledger to store tallied results and assign unique identifiers to each verifier. 

This system provides a secure, transparent, and accurate way to tally election results. It uses a combination of cryptography and distributed ledgers to protect the data and ensure accuracy. This system also assigns unique identifiers to each verifier ,allowing for a more transparent result that can be easily audited.

## Features.
- Assigns unique identifiers to each verifier - (voter address).
- Allows verifiers to submit the tallied votes of their respective locations.
- Prevents tampering of votes at the local level.
- Auditable results - anyone can get the blockchain data.

## Installation.

1. Download the code from the repository
 -  Git clone -https://github.com/akimanimorningstar/electionfinal.git 
 
2. Install the necessary packages.

Enter into the electionfinal folder - CD electionfinal 

-   Install truffle - npm install -g truffle

-   Install dot env - npm install dotenv --save

-   Install truffle hd wallet provider -   npm install @truffle/hdwallet-provider

If you wish to deploy your own smart contract for testing purposes.Run the following three commands 
   - truffle compile. 
   - truffle migrate.
   - truffle deploy --network alfajores --reset

Enter into the client folder  -  cd client 

Run the following command -  npm install next next-routes web3 semanti-ui-react semantic-ui-css --f

3. Run the setup script.

In the client folder run the following command to start the app 

  - npm run dev.
 
 4. To take the app live please us the following link - https://blog.fleek.co/posts/fleek-nextJS/
 
    NB - The base folder should be client when deploying.

## Usage.
                                                          
1. Confrim that your contract address is on the celo bllockchain.
2. Enter the election results - via the submit page.
3. Submit the results to the blockchain - use your metamask wallet to submit the result.
4. Results are securely stored and tallied - check the raw results and compare to the final tallied result on the homepage.

## Support.

If you encounter any issues while using this system, please feel free to contact me  via email or Discord . I will be more than happy to help you.

Email - Antonyk139@gmail.com

Discord - SlimTony#8450

