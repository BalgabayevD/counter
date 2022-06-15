// Я

const banknotKinds = [50, 100, 500, 1000, 5000];

function getMoney(amount) {
    let localAmount = amount;
    const revList = banknotKinds.reverse();
    const banknots = [];

    for (let i = 0; i < revList.length; i++) {
        const item = { banknote: revList[i], count: 0 }

        if (localAmount >= revList[i]) {
            item.count =  Math.floor( localAmount / revList[i] );
            localAmount = localAmount % revList[i];
        }

        if (item.count > 0) banknots.push(item);
    }

    return banknots;
}

console.log(getMoney(950));
