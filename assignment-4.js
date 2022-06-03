//problem-1
let ana = 1;
let convertedVori = anaToVori(ana);

function anaToVori(ana) {
    let vori;
    //1 ana = 0.0625 vori
    vori = ana * 0.0625;
    return vori;
}
console.log(convertedVori);

//problem-2
let totalCost = pandaCost(0, 2, 2);

function pandaCost(singaraPiece, somuchaPiece, jilapiPiece) {
    let totalSingara, totalSomucha, totalJilapi, grandTotal;
    let singaraPrice, somuchaPrice, jilapiPrice;
    singaraPrice = 7;
    somuchaPrice = 10;
    jilapiPrice = 15;
    if (singaraPiece >= 0 && somuchaPiece >= 0 && jilapiPiece >= 0) {
        totalSingara = singaraPiece * singaraPrice;
        totalSomucha = somuchaPiece * somuchaPrice;
        totalJilapi = jilapiPiece * jilapiPrice;
        grandTotal = totalSingara + totalSomucha + totalJilapi;
        return grandTotal;
    } else {
        return "Please give an expected value ";
    }

}
console.log(totalCost);

//problem-3
let member = 150;
let budget = picnicBudget(member);

function picnicBudget(member) {
    let cost = 0;
    if (member <= 100) {
        //for all of them the cost stays same for each person
        cost = member * 5000;
    } else if (member > 100 && member <= 200) {
        //here for first 100 people it will run a loop to count the costs of 100 of them
        for (let memberCount = 1; memberCount <= 100; memberCount++) {
            cost = cost + 5000;
        }
        //for 101 to rest of the people which is mentioned in the member variable the loop will make a cycle there. and 4000 for each of them
        for (let memberCount = 101; memberCount <= member; memberCount++) {
            cost = cost + 4000;
        }
    } else if (member > 200) {
        //in this case for first 100 cost will be 5000 each so a loop will repeat equal 100 times
        for (let memberCount = 1; memberCount <= 100; memberCount++) {
            cost = cost + 5000;
        }
        //here from 101 to 200 each person 4000
        for (let memberCount = 101; memberCount <= 200; memberCount++) {
            cost = cost + 4000;
        }
        //here from 201 to the rest it will be 3000 each
        for (let memberCount = 201; memberCount <= member; memberCount++) {
            cost = cost + 3000;
        }
    } else {
        console.log("Unmatched Requirements")
    }
    return cost;
}
console.log(budget);


//problem-4
let friendName = ["jodu", "modhu", "hablu", "kablu", "lablu", "dhablu", "dablu", "ram"];
let oddName = oddFriend(friendName);

function oddFriend(friendName) {
    for (let i = 0; i < friendName.length; i++) {
        //if index length is not divisible by 2 then its not a even number. it will be definitely an odd number
        if (friendName[i].length % 2 != 0) {
            return friendName[i];
            break;
        }
    }
}
console.log(oddName);