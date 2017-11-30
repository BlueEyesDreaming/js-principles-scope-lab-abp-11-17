var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bad person';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'other person';
}

let favoriteCustomer = 'me';

function attemptTwoFavoriteCustomers() {
  favoriteCustomer = 'not me';
}
