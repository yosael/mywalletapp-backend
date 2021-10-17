module.exports.CATEGORIES = [
    { categoryName: 1, description: 'A categoryName' },
    { categoryName: 2, description: 'Another categoryName' },
    { categoryName: 3, description: 'Yet Another categoryName' },
    { categoryName: 4, description: 'Is This A categoryName?' },
    { categoryName: 5, description: 'I Have Enough Categories' },
    { categoryName: 6, description: 'Will This Be The Last categoryName?' }
  ];



module.exports.ACCOUNTS = [
    {accountId: 1, accountName:'General',type: 1 , userId:1 , currentBalance:2000,currency:'USD'},
    {accountId: 2, accountName:'Cash Flow',type: 2, userId:1, currentBalance:2000,currency:'USD'},
    {accountId: 3, accountName:'My Savings',type: 3, userId:1, currentBalance:2000,currency:'USD'}
];

module.exports.ACCOUNT_TYPES = [
    {typeId: 1, typeName: 'General Account' },
    {typeId: 2, typeName: 'Cash' },
    {typeId: 3, typeName: 'Savings' },
    {typeId: 4, typeName: 'Investment' },
    {typeId: 5, typeName: 'Credit Card' }
];


module.exports.INCOMES = [

    {incomeId:1,accoundId: 1,amount: 400, currency: 'USD',categoryId:1,date:new Date(),time: new Date().getTime(),note: ''}
]