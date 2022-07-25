// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {
  // testing "Add"
  test.describe(version + ': Add', () => {

    // testing "Add" function with natural numbers (1)
    test('Adding 2 and 3 results in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });


    // testing "Add" function with decimal numbers (2)
    test('Adding 2.1 and 3.1 results in 5.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.1');
      await page.locator('#number2Field').type('3.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5.2');
    });

    // testing "Add" function with decimal numbers where "integers only" is checked (3)
    test('Adding 2.1 and 3.1 results in 5 when "Integers only" box is checked', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.1');
      await page.locator('#number2Field').type('3.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      
      await page.locator('#integerSelect').check();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });

    // testing "Add" function with one negaltive number and calculating a natural number (4)
    test('Adding -2 and 3 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });

    // testing "Add" function with one negaltive number and calculating a negative number (5)
    test('Adding 2 and -3 results in -1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    });

    // testing "Add" function with both negative numbers (6)
    test('Adding -2 and -3 results in -5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
    });

    // testing "Add" function with '0' (7)
    test('Adding 0 and 0 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });

    // testing "Add" function with 'A' (8)
    test('Adding A and A results in error message and empty "Answer" field', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('A');
      await page.locator('#number2Field').type('A');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    // testing "Add" function with negative and decimal numbers (9)
    test('Adding -2 and 3.2 results in 1.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1.2');
    });
  });

  // testing "Subtract"
  test.describe(version + ': Subtract', () => {
    
    //testing "Subtract" function with natural numbers (1)
    // Only Build 7, 8 and 9 failed
    test('Subtracting 2 from 3 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });

    //testing "Subtract" function with natural numbers resulting in negative number (2)
    // Only Build 7, 8 and 9 failed
    test('Subtracting 3 from 2 results in -1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    });

    // testing "Subtract" function with decimal numbers (3)
    // Only Build 4, 7, 8 and 9 failed
    test('Subtracting 2.1 from 3.2 results in 1.1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3.2');
      await page.locator('#number2Field').type('2.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1.1');
    });

    // testing "Subtract" function with decimal numbers (4)
    // All Builds failed, including Prototype
    test('Subtracting 2.3 from 3.2 results in 0.9', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3.2');
      await page.locator('#number2Field').type('2.3');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();

  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0.9');
    });

    // testing "Subtract" function with one negaltive number and calculating a natural number (5)
    // Only Build 7, 8 and 9 failed
    test('Subtracting -2 from 3 results in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });

    // testing "Subtract" function with '0' (6)
    // Only Build 9 failed
    test('Subtracting 0 from 0 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });

    // testing "Subtract" function with both negative numbers (7)
    // Only Build 7, 8 and 9 failed
    test('Subtract -3 from -2 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });

    // testing "Subtract" function with 'A' (8)
    // Only Build 1 and 9 failed
    test('Subtracting A and A results in error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('A');
      await page.locator('#number2Field').type('A');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });


  });

  // testing "Multiply"
  test.describe(version + ': Multiply', () => {
    
    // testing "Multiply" function with natural numbers
    // Only Build 7 and 9 failed
    test('Multiplying 2 and 3 results in 6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    });

    // testing "Multiply" function with one negaltive number and calculating a negaltive number (2)
    // Only Build 7 and 9 failed
    test('Multiplying 2 and -3 results in -6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
    });

    // testing "Multiply" function with two negaltive number and calculating a natural number (3)
    // Only Build 7 and 9 failed
    test('Multiplying -2 and -3 results in 6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    });

    // testing "Multiply" function with decimal numbers (4)
    // Unable to test though everything should be correct
    test('Multiplying 2.4 and 3.2 results in 7.68', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.4');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('7.68');
    });


    // testing "Multiply" function with decimal numbers where "integers only" is checked (5)
    // Unable to test though everything should be correct
    test('Multiplying 2.4 and 3.2 results in 7.68', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.4');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await page.locator('#integerSelect').check();

      await expect(page.locator('#numberAnswerField')).toHaveValue('7.68');
    });

    // testing "Multiply" function with '0' (6)
    // Only Build 9 faled
    test('Multiplying 0 and 1 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });

    // testing "Multiply" function with 'Letters' (7)
    // Only Build 9 faled
    test('Multiplying A and A results in error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('A');
      await page.locator('#number2Field').type('A');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });

  // testing "Divide"
  test.describe(version + ': Divide', () => {
    
    // testing "Divide" function with natural numbers (1)
    // Only Build 7, 8 and 9 faled
    test('Dividing 6 by 3 results in 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    });

    // testing "Divide" function with one negaltive number and calculating a negaltive number (2)
    // Only Build 7, 8 and 9 faled
    test('Dividing 6 by -3 results in -2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
    });

    // testing "Divide" function with decimal numbers (4)
    // Unable to test though everything should be correct
    test('Dividing 6.5 by 5.2 results in 1.25', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.5');
      await page.locator('#number2Field').type('5.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1.25');
    });


    // testing "Divide" function with decimal numbers where "integers only" is checked (5)
    // Unable to test though everything should be correct
    test('Dividing 6.5 by 5.2 results in 1.25', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.5');
      await page.locator('#number2Field').type('5.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await page.locator('#integerSelect').check();

      await expect(page.locator('#numberAnswerField')).toHaveValue('1.25');
    });

    // testing "Divide" function with '0' (6)
    // Only Build 6, 8 and 9 faled
    test('Dividing 5 by 0 results in error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    // testing "Divide" function with 'Letters' (7)
    // Only Build 1 and 9 faled
    test('Dividing A by A results in error message and empty "Answer" field', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('A');
      await page.locator('#number2Field').type('A');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });

  // testing "Concatenate"
  test.describe(version + ': Concatenate', () => {

    // testing "Concatenate" function with natural numbers (1)
    // Only Build 2, 7, 8 and 9 faled
    test('Concatenating 6 and 3 results in 63', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('63');
    });

    // testing "Concatenate" function with negaltive numbers (2)
    // Only Build 2, 7, 8 and 9 faled
    test('Concatenating -6 and -3 results in -6-3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-6-3');
    });

    // testing "Concatenate" function with decimal numbers (5)
    // Only Build 2, 7, 8 and 9 faled
    test('Concatenating 6.5 and 5.2 results in 6.55.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.5');
      await page.locator('#number2Field').type('5.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('6.55.2');
    });


    // testing "Concatenate" function with 'Letters' (6)
    // no need as system treats the inputs as strings if chosen to concatonate input
    /*
    test('Concatenating A and B results in error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('A');
      await page.locator('#number2Field').type('B');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
    */
  });

});