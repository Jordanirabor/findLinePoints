//Wrote two solutions to this problem, this is the first...
const findLinePoints = (...args): void => {
    // loop through the input to find all lines
    for (let i: number = 0; i < args.length; i++) {

        let index: number = i;

        // do not go out of the array
        if (i + 1 === args.length) {
            break;
        }

        // define the points
        let y1: number = args[index + 1]['y'];
        let y: number = args[index]['y'];
        let x1: number = args[index + 1]['x'];
        let x: number = args[index]['x'];

        // calculate the slope of the line
        let m: number = ((y1 - y) / (x1 - x));

        // y = mx + b in where b is unknown  
        // we can use any of the known points to find b 
        let b: number = y - m * x;

        // see if there is an intersection and print out the values
        args.filter(item => !((item['x'] === x && item['y'] === y) || (item['x'] === x1 && item['y'] === y1)))
            .map((point: { x: number, y: number }): void => {

                let intersects: boolean = (point.y - y) === m * (point.x - x);

                if (intersects) {
                    console.log('(' + 'm = ' + m + ', ' + 'b = ' + b + ')');
                }
            })
    }
}


// This is the second, I personally prefer the first, because this one doesn't check all slopes.

// const findLinePoints = (first: { x: number, y: number }, second: { x: number, y: number }, ...args): void => {
//     let m: number = ((second.y - first.y) / (second.x - first.x));

//     // y = mx + b in where b is unknown  
//     // we can use any of the known points to find b 
//     let x: number = first.x;
//     let y: number = first.y;
//     let b: number = y - m * x;

//     // the number of points on the line
//     let count: number = 2;

//     args.map((item: { x: number, y: number }): void => {
//         let intersects: boolean = (item.y - first.y) === m * (item.x - first.x);

//         if (intersects) {
//             count += 1;
//             console.log('This line has ' + count + ' points with the values (' + 'm = ' + m + ', ' + 'b = ' + b + ')');
//         }
//     })

//     if (count === 2) {
//         console.log('Sorry, the input set might have a line with 2 or less points');
//     }
// }

findLinePoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 });
