// SPDX-License-Identifier: MIT
pragma solidity ^0.4.24;


contract Tally {

    // Struct of the Observers 
    struct Verifier {
        address voterAdress;
        string  state;
        string county;
        string  city;
        string pollingId;
        string pollingName;
        uint cand1;
        uint cand2;}  

     // List of all the Variables we will need 
    Verifier[] public verifiersList;
    mapping (address => bool) public admins; //  incharge of a city 
    mapping (address => bool) public owners; // incharge of a county  
    mapping (address => bool) public verifiers; // incharge of a polling booth 
    mapping (address => bool) public superOwner; // incharge of the whole election.
    uint public cand1Count; // President Joe Biden total votes 
    uint public cand2Count; // Donald Trump total votes.
    uint public sum;


    // We need to restrict users according to their roles. e.g city, county , polling booth e.t.c
    modifier restricted(){
      bool isAdmin = admins[msg.sender];
      require(isAdmin);
      _;}
      modifier owner(){
      bool isOwner = owners[msg.sender];
      require(isOwner);
      _;}

    modifier voterOnly (){
    bool isVoter = verifiers[msg.sender];
    require(isVoter);
    _;}
    modifier superOnly (){
    bool isSuperOwner = superOwner[msg.sender];
    require(isSuperOwner);
    _;}
     //constructor argument  for the smart contractor making the owner incharge of the whole election.
    constructor() public{
    superOwner[msg.sender] = true;
    admins[msg.sender] = true;
    owners[msg.sender] = true;
    verifiers[msg.sender] = true;}
    
    // allowing observers incharge of states to add county observers.
    function addAdmin(address admin) public owner superOnly {
      admins[admin] = true;
      verifiers[admin] = true;}
   // they can also remove admins 
    function removeAdmin(address admin) public owner superOnly  {
     admins[admin] = false;}

// allowing observers incharge of counties to add observers of each city.
    function addOwners(address ownerz) public superOnly {
      owners[ownerz] = true;
      admins[ownerz] = true;
      verifiers[ownerz] = true;}

// they can also remove owners 
    function removeOwner(address ownerz) public superOnly  {
     owners[ownerz] = false;}

// allowing observers incharge of cities to add minor observers for the polling booths.
    function addVerifier(address verify) public restricted owner superOnly {
     verifiers[verify] = true;}
 // they can also remove verifiers from list
    function removeVerifier(address verify) public restricted owner superOnly {
     verifiers[verify] = false;}


    // allowing our observers to submit the tallied results of their respective tallying booths.
    function createRequest(string state , string county ,string city,
    string pollingId,string pollingName,
    uint cand1, uint cand2 )
    public  voterOnly {
      Verifier memory newRequest = Verifier({
        state : state, 
        county: county, 
        city : city,
        pollingId : pollingId ,
        pollingName:  pollingName,
        cand1 : cand1,
        cand2 : cand2,
        voterAdress : msg.sender
      });
      verifiersList.push(newRequest);
      cand1Count = cand1 + cand1Count;
      cand2Count = cand2 + cand2Count;

      sum = cand1Count + cand2Count;
      
      }
      
      // Getting a list of all results that have been submitted 
      function getRequestCount() public view returns(uint){
        return verifiersList.length;}

      // Getting sum of all published results.
      function getFinalResults() public view returns (uint, uint , uint){
        return (
          cand1Count,
          cand2Count,
          sum 
        );
      }

}