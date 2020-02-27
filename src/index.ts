const findLinePoints = (...args): void => {
    // loop through entirety of input to find all lines
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

findLinePoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 });
