let homepage = require('../pages/homepage');
describe('Demo Calculator tests',function(){

    it('addition test', function(){

      homepage.get('http://juliemr.github.io/protractor-demo/');

      homepage.enterFirstNumber('4');
      homepage.clickAction("ADDITION");
      homepage.enterSecondNumber('4');
      homepage.clickGo();
      homepage.verifyResult('8');

      browser.sleep(3000);
    });

    it('Subtraction test', function(){

      homepage.get('http://juliemr.github.io/protractor-demo/');

      homepage.enterFirstNumber('4');

      homepage.clickAction("SUBTRACTION");

      homepage.enterSecondNumber('3');
      homepage.clickGo();
      homepage.verifyResult('1');

      browser.sleep(2000);
    });

    it('Multiplication test', function(){

      homepage.get('http://juliemr.github.io/protractor-demo/');

      homepage.enterFirstNumber('4');

      homepage.clickAction("MULTIPLICATION");

      homepage.enterSecondNumber('5');
      homepage.clickGo();
      homepage.verifyResult('20');

      browser.sleep(2000);
    });
  });
  