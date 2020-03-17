let reg = /^\D(?=\w{5})(?=\w*\d{2})/;

/**
              TEST CASE 

The regex should not match "astronaut"

The regex should not match "banan1"

The regex should match "bana12"

The regex should match "abc123"

The regex should not match "1234"

The regex should not match "8pass99"

The regex should not match "12abcde"

The regex should match "astr1on11aut"
**/
