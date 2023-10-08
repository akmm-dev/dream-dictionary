


async function getDream() {
    let response = await fetch('DreamDictionary.json');
    let data = await response.json();
    let dreams = data.BlogDetail;
    let dreamsId = data.BlogHeader;
    var matchItem;

    for (let i = 0; i < dreamsId.length; i++) {
        
        document.querySelector('.body').innerHTML +=
            `<div class='dream'>
                <h1>${dreamsId[i].BlogHead}</h1>
                <p>${dreamsId[i].BlogTitle}</p>
            </div>`;    
    }
    let choseDream = document.querySelectorAll('.dream');

    choseDream.forEach((click, i) => {
        click.addEventListener('click', () => {
            
            choseId = dreamsId[i].BlogId;
            document.querySelector('.body').style.display = 'none';
            document.querySelector('.d-body').style.display = 'block';
            document.querySelector('.back').style.display = 'flex';
            document.querySelector('.head').style.display = 'none';
            document.querySelector('.search').style.display = 'flex';

            for (let j = 0; j < dreams.length; j++) { 

                if (dreams[j].BlogId === choseId) { 
                    // console.log("hi");
                    document.querySelector('.d-body').innerHTML +=
                        `<div class="d">${dreams[j].BlogContent}</div>`;
                }
                
                

                
            }
            let dream = document.querySelectorAll('.d'); 
            let search = document.querySelector('#searchBox');

            for (let j = 0; j < dream.length; j++) { 
                
                let match = dream[j].innerHTML;
                search.addEventListener('keyup', () => {
                    // console.log(search.value);
                    if (match.indexOf(search.value) > -1) {
                        dream[j].style.display = '';
                    } else {
                        dream[j].style.display = 'none';
                    }
                })
                
            }
        })
        
    })

}

getDream();

function showHome() {
    document.querySelector('.body').style.display = 'flex';
    document.querySelector('.d-body').style.display = 'none';
    document.querySelector('.back').style.display = 'none';
    document.querySelector('.head').style.display = 'flex';
    document.querySelector('.search').style.display = 'none';
    location.reload();  
}
