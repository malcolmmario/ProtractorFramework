let homepage = function(){

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let actionButton = element(by.model('operator'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNumber.sendKeys(firstNo)
    };
    this.enterSecondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo)
    };
    this.clickAction = function(action){
        var select = element(by.model('operator'));
        select.$('[value='+action+']').click();
    };

    this.clickGo = function(){
        goButton.click();
    };
    this.verifyResult = function(output){
        let result = element(by.cssContainingText('.ng-binding',output));
      expect(result.getText()).toEqual(output);
    };
};

module.exports = new homepage();