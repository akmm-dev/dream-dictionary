

async function getDream() {
    let response = await fetch('DreamDictionary.json');
    let data = await response.json();
    let dreams = data.BlogDetail;
    let dreamsId = data.BlogHeader;
    

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

            for (let j = 0; j < dreams.length; j++) { 

                if (dreams[j].BlogId === choseId) { 
                    console.log("hi");
                    document.querySelector('.d-body').innerHTML +=
                        `<div class="d">${dreams[j].BlogContent}</div>`;
                    
                }
            }
        })
    })
}

getDream();

function showHome() {
    document.querySelector('.body').style.display = 'flex';
    document.querySelector('.d-body').style.display = 'none';
    document.querySelector('.back').style.display = 'none';
    
}
