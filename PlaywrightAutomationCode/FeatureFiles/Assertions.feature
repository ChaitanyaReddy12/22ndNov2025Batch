
Feature: Assertions

    @regression
    Scenario: Verify Playwright Hard Assertion
        Given I launch the browser1
        Then I launch the amazon application
        And I Verify Playwright Hard Assertion
        And I close the browser1

    @regression
    Scenario: Verify Playwright Soft Assertion
        Given I launch the browser1
        Then I launch the amazon application
        And I Verify Playwright Soft Assertion
        And I close the browser1

    @regression
    Scenario: Verify Playwright filters
        Given I launch the browser
        And I Verify Playwright filters
        And I close the browser

    @regression
    Scenario: Verify Playwright simple alert
        Given I launch the browser
        And I Verify Playwright simple alert
        And I close the browser

    @regression
    Scenario: Verify Playwright confirmation alert
        Given I launch the browser
        And I Verify Playwright confirmation alert
        And I close the browser

    @regression
    Scenario: Verify Playwright confirmation alert2
        Given I launch the browser
        And I Verify Playwright confirmation alert2
        And I close the browser

    @regression
    Scenario: Verify Playwright prompt alert
        Given I launch the browser
        And I Verify Playwright prompt alert
        And I close the browser

    @regression
    Scenario: Verify Playwright prompt alert2
        Given I launch the browser
        And I Verify Playwright prompt alert2
        And I close the browser

    @regression
    Scenario: Verify Playwright prompt alert3
        Given I launch the browser
        And I Verify Playwright prompt alert3
        And I close the browser

    @regression
    Scenario: Verify Playwright file upload
        Given I launch the browser
        Then I launch the test automation practice
        And I Verify Playwright file upload
        And I close the browser

    @regression
    Scenario: Verify Playwright frames
        Given I launch the browser
        And I Verify Playwright frames
        And I close the browser

    @regression
    Scenario: Verify Playwright waits
        Given I launch the browser
        And I Verify Playwright waits
        And I close the browser

    @regression
    Scenario: Verify Playwright windows handling
        Given I verify windows handling
And I close the browser