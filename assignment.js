// Problem-1: converting kilometer to meter.
function kilometerToMeter(km){
    //1km=1000m//
   var meter = km*1000;
    return meter;
}
var result = kilometerToMeter(8);
console.log(result);
// Problem-1: Solved.

// Problem-2: products cost calculating.
function budgetCalculator(watch,mobile,laptop){
  //per watch=50//per mobile=100//per laptop=500//
    var addingPrice= watch*50 +mobile*100 +laptop*500;
    return addingPrice;
}
var totalPrice = budgetCalculator(8,6,11);
console.log(totalPrice);
// Problem-2: Solved.

// Problem-3: hotel cost calculating.
function hotelCost(day){
       var cost=0;//when day is 0.
    if( day <=10){
     var cost=day*100;
    }
    else if(day<= 20){
        var first10DaysCost=10*100;
        var remainingDays= day-10;
        var second10DaysCost=remainingDays*80;
        var cost= first10DaysCost +second10DaysCost;
    }
    else{
        var first10DaysCost=10*100;
        var second10DaysCost=10*80;
        var remainingDays= day-20;
        var lastDaysCost=remainingDays*50;
        var cost=first10DaysCost+ second10DaysCost+lastDaysCost;

    }
    return cost;
}
var totalcost=hotelCost(31);
console.log(totalcost);
// Problem-3: Solved.

// Problem-4:big name finding.
function megaFriend(names){
  var bigName=" ";
  for (i=0; i<names.length; i++){
      var element=names[i];
      if (element.length>bigName.length){
          bigName=names[i];
      }
  }
  return bigName;
}
var  names=['Ruhul', 'Shakil', 'Billal Farabi','shantos','monjil'];
var largeName=megaFriend(names);
console.log(largeName);
// Problem-4: Solved.