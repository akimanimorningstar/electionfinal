import web3 from "./web3"
import contractDefinition from '../../build/contracts/Tally.json';


const getContractInstance = async (web3, contractDefinition) =>{

  const networkId = await web3.eth.net.getId();
  //const address = '0x95072c8fDd60851602a0056c80C8128Cf91F0d94';
  const deployedAddress = contractDefinition.networks[networkId].address
  const instance = new web3.eth.Contract(
    contractDefinition.abi,
    deployedAddress);
  return instance
}
export default getContractInstance
