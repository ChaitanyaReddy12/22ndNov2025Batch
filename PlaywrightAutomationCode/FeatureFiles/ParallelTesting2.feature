
Feature: Parallel Testing2

    @regression
    Scenario: Verify CrossBrowserTesting in chromium
        Given I launch the browser
        Then verify jazz pharma
        And I close the browser

    @regression
    Scenario: Verify CrossBrowserTesting in firefox
        Given I launch the browser
        Then verify jazz pharma
        And I close the browser

    @regression
    Scenario: Verify CrossBrowserTesting in webkit
        Given I launch the browser
        Then verify jazz pharma
        And I close the browser

    @regression
    Scenario: Verify CrossBrowserTesting in headless
        Given I launch the browser
        Then verify jazz pharma
        And I close the browser