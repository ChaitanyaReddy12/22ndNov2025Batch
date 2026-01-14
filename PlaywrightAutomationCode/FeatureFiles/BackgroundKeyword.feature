
Feature: Background Keyword

    Background: common steps
        Given I launch the browser
        Then I launch the test automation practice

    @regression
    Scenario: Verify Playwright Locators
        And I Verify Playwright Locators
        And I close the browser

    @regression
    Scenario: Verify xpath and css selectors
        And I Verify xpath and css selectors
        And I close the browser

    @regression
    Scenario: Verify xpath methods
        And I Verify xpath methods
        And I close the browser

    @regression
    Scenario: Verify xpath relative xpath
        And I Verify xpath relative Axes
        And I close the browser