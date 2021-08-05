let dates = []
let names = []
function save(date, name) {
    names = localStorage.getItem(date)
    if (names && names.length > 0) {
        names = JSON.parse(localStorage.getItem(date));
    } else {
        names = []
    }
    if (!dates.includes(date) && date.length > 1) {
        dates.push(date);
        localStorage.setItem(date, JSON.stringify(names))
    }
    if (!names.includes(name) && dates.includes(date) && name.length > 1) {
        names.push(name);
        localStorage.setItem(date, JSON.stringify(names))
    }

    showData(names)
}

function showData(data) {
    let list = '';
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        list += `<li>${element}</li>`  
    }
    document.getElementById('list').innerHTML = list;
}
        // let dates = [];
        // let names = [];

        // function save(date, name) {
        //     // console.log(date, name);

        //     names = localStorage.getItem(date);

        //     if (names && names.length > 0) {
        //         names = JSON.parse(localStorage.getItem(date));
        //     } else {
        //         names = [];
        //     }

        //     if (!dates.includes(date) && date.length > 1) {
        //         dates.push(date);
        //         localStorage.setItem(date, JSON.stringify(names));
        //     }

        //     if (!names.includes(name) && dates.includes(date) && name.length > 1) {
        //         names.push(name);
        //         localStorage.setItem(date, JSON.stringify(names));
        //     }
        //     // localStorage.setItem('na', 'TA')
        //     // const hi = localStorage.getItem('na')
        //     // document.write(hi);
        //     show(names);
        // }
       