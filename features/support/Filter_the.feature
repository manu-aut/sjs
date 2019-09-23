Feature: Filter the list find items of interest


    Scenario Outline: Viewing <applied filter> items only

        Given that juancho a todo list containing  Write some code, Walk the dog
        And he completes write some code
        When he filters his list to show only <applied filter> task
        Then his todo list should contain <expected result>

        Examples:
            | Active         | Walk the dog    |
            | applied filter | expected result |















