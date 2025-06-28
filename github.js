
async function getUsers() {
    try {
        const response = await fetch(`https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json`);
        const data = await response.json();
        

        const body = document.querySelector('#data');

        body.innerHTML = '';
        
    if (!data) {
        return;
    }


    data.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const name = document.createElement('p');
        name.classList.add('name');
        name.textContent = (`${user.firstName} ${user.lastName}`)

        const email = document.createElement('p');
        email.textContent = (`Email: ${user.email}`)

        const companny = document.createElement('p');
        companny.textContent = (`Company: ${user.compannyName}`)

        const years = document.createElement('p');
        years.textContent = (`Years at the Company: ${user.yearsEmployed}`)


        body.appendChild(card);
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(companny);
        card.appendChild(years);
    });
    } catch (error) {
        console.error(error);
    }
}

 

async function underTen() {
    try {
        const response = await fetch(`https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json`);
        const data = await response.json();
        

        const body = document.querySelector('#data');

        body.innerHTML = '';
        
    if (!data) {
        return;
    }

    const notTenured = data.filter(user => user.yearsEmployed < 10);
    notTenured.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const name = document.createElement('p');
        name.classList.add('name');
        name.textContent = (`${user.firstName} ${user.lastName}`)

        const email = document.createElement('p');
        email.textContent = (`Email: ${user.email}`)

        const companny = document.createElement('p');
        companny.textContent = (`Company: ${user.compannyName}`)

        const years = document.createElement('p');
        years.textContent = (`Years at the Company: ${user.yearsEmployed}`)

        if (user.yearsEmployed >= 10) {
            user.pop();
        }
        body.appendChild(card);
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(companny);
        card.appendChild(years);
    });
    } catch (error) {
        console.error(error);
    }
}
