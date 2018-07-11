pragma solidity ^0.4.4;

contract ScoreStore {
    mapping(string => int) personScores;

    function AddPersonScore(string name, int score) public {
        assert(personScores[name] <= 0);
        personScores[name] = score;
    }

    function GetScore(string name) public view returns (int){
        return personScores[name];
    }
}