// main function for emulating IE11's "change" event:

function onRangeChange(rangeInputElmt, listener) {

    var inputEvtHasNeverFired = true;
  
    var rangeValue = {current: undefined, mostRecent: undefined};
    
    rangeInputElmt.addEventListener("input", function(evt) {
      inputEvtHasNeverFired = false;
      rangeValue.current = evt.target.value;
      if (rangeValue.current !== rangeValue.mostRecent) {
        listener(evt);
      }
      rangeValue.mostRecent = rangeValue.current;
    });
  
    rangeInputElmt.addEventListener("change", function(evt) {
      if (inputEvtHasNeverFired) {
        listener(evt);
      }
    }); 
  
  }
  
  // example usage:
  
  var myRangeInputElmt = document.querySelector("input"          );
  var myRangeValPar    = document.querySelector("#rangeValPar"   );
  var myNumChgEvtsCell = document.querySelector("#numChgEvtsCell");
  var myNumInpEvtsCell = document.querySelector("#numInpEvtsCell");
  var myNumCusEvtsCell = document.querySelector("#numCusEvtsCell");
  
  var myNumEvts = {input: 0, change: 0, custom: 0};
  
  var myUpdate = function() {
    myNumChgEvtsCell.innerHTML = myNumEvts["change"];
    myNumInpEvtsCell.innerHTML = myNumEvts["input" ];
    myNumCusEvtsCell.innerHTML = myNumEvts["custom"];
  };
  
  ["input", "change"].forEach(function(myEvtType) {
    myRangeInputElmt.addEventListener(myEvtType,  function() {
      myNumEvts[myEvtType] += 1;
      myUpdate();
    });
  });
  
  var myListener = function(myEvt) {
    myNumEvts["custom"] += 1;
    myRangeValPar.innerHTML = "range value: " + myEvt.target.value;
    myUpdate();
  };
  
  onRangeChange(myRangeInputElmt, myListener);