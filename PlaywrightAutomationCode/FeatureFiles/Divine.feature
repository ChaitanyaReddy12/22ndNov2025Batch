
@Ranjith
# Feature is nothing but Scenario or module name
Feature: Login Module or Scenario

@smoke1
# Scenario is nothing but user story/Test case
Scenario: Launch facebook application
Given I launch the browser
Then I launch the facebook
# And I close the browser

@regression 
Scenario: Launch facebook application1
Given I launch the browser
Then I launch the facebook
And I close the browser

# @tagname
@sanity
Scenario: Launch facebook application2
Given I launch the browser
Then I launch the facebook
And I close the browser

