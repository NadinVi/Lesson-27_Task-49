
export function renderUsers(arr) {
        const container = document.querySelector(".container");

        arr.forEach(item => {
                const usersBox = document.createElement("div");
                const user = document.createElement("div");
                const userName = document.createElement("p");
                const age = document.createElement("p");
                const email = document.createElement("p");
                const country = document.createElement("p");
                const company = document.createElement("p");
                const birthday = document.createElement("p");

                usersBox.classList.add("users_container");
                user.classList.add("user");
                userName.classList.add("user_name");
                userName.innerText = `Name: ${item.name}`;
                age.classList.add("age");
                age.innerText = `Age: ${item.age}`;
                email.classList.add("email");
                email.innerText = `email: ${item.email}`;
                country.classList.add("country");
                country.innerText = `Country: ${item.country}`;
                company.classList.add("company");
                company.innerText = `Company: ${item.company}`;
                birthday.classList.add("birthday");
                birthday.innerText = `Birthday: ${item.birthday}`;


                user.append(userName);
                user.append(age);
                user.append(email);
                user.append(country);
                user.append(company);
                user.append(birthday);
                container.append(user);
                container.append(usersBox);
                //     console.log(container)  
                //     console.log(document)         
        })

};


