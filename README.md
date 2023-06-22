# Regex Ready

Prebuilt Regex Patterns ready for use. This library is used to recognize patterns.

Please consider following this project's author, Anoch Jeyakanthan, and consider starring the project to show your ❤️ and support.

</br>

# Install
```
$ npm install regex-ready
```
</br>

# Usage

### Regex to match phone numbers
```js
import PhoneNumberRegex from 'regex-ready/regex';

const phoneNumberRegex = PhoneNumberRegex(
    [ 'ca', 'Sri Lanka', '+6' ], // Country code [Optional]
    [ '647', '416' ] // Area code [Optional]
)

phoneNumberRegex.test('+1 647 000 0000') // True
phoneNumberRegex.test('+3 647 000 0000') // False
phoneNumberRegex.test('+1 555 000 0000') // False
phoneNumberRegex.test('+1 647 000 000') // False
```
</br>


### Regex to match emails
```js
import EmailRegex from 'regex-ready/regex';

const emailRegex = EmailRegex(
    [ 'gmail', 'hotmail' ], // Email Provider [Optional]
    [ 'com', 'ca' ] // Top Level Domain [Optional]
)

phoneNumberRegex.test('example@gmail.com') // True
phoneNumberRegex.test('example2@hotmail.ca') // True
phoneNumberRegex.test('example@yahoo.org') // False
```
</br>

### Regex to match links
```js
import UrlRegex from 'regex-ready/regex';

const urlRegex = UrlRegex(
    [ 'github', 'youtube' ], // Domains [Optional]
    [ 'com', 'ca' ], // Top Level Domain [Optional]
    [ 'https' ], // Protocols [Optional]
)

urlRegex.test('https://google.com') // True
urlRegex.test('https://youtube.ca') // True
urlRegex.test('http://google.lk') // False
```
</br>

### Regex to match credit cards
```js
import CreditCardRegex from 'regex-ready/regex';

CreditCardRegex.test('4111111111111111') // True
CreditCardRegex.test('1234567890123456') // False
CreditCardRegex.test('6011000000000012') // True
```

# String Validation
### Validate Date
```js
import ValidateDateRegex from 'regex-ready';

ValidateDateRegex('29th February 2020', 'DD/MM/YYYY') // True - 2020 is a leap year
ValidateDateRegex('01/29/2023', 'MM/DD/YYYY') // True
ValidateDateRegex('November 5th', 'MM/DD') // True
```