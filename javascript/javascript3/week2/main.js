

// 1. Red circle target: x: 20px, y: 300px;
// 2. Blue circle target: x: 400px, y: 300px;
// 3. Green circle target: x: 400px, y: 20px;







function translateOneByOne() {
    moveElement(document.querySelector('ul.marks li:nth-child(1)'), {x: 20, y: 300})
    .then(() => {
        console.log('RED Element has been moved');
        return moveElement(document.querySelector('ul.marks li:nth-child(2)'), {x: 400, y: 300})
    })
    .then(() => {
        console.log('BLUE Element has been moved')
        return moveElement(document.querySelector('ul.marks li:nth-child(3)'), {x: 400, y: 20})
    })
    .then(() => {
        
        console.log('GREEN Element has been moved')
    })
    .catch(err => console.log(err))
    
}
    

    translateOneByOne()



    // translateAllAtOnce
    function translateAllAtOnce () {
        Promise.all([moveElement(document.querySelector('ul.marks li:nth-child(1)'), {x: 20, y: 300}),
        moveElement(document.querySelector('ul.marks li:nth-child(2)'), {x: 400, y: 300}),
        moveElement(document.querySelector('ul.marks li:nth-child(3)'), {x: 400, y: 20})
    ]).then(() => {
        console.log('ALL Elements has been moved')
    })
    .catch(err => console.log(err))}
    

//  translateAllAtOnce()