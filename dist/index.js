const findLinePoints = (...args) => {
    // loop through entirety of input to find all lines
    for (let i = 0; i < args.length; i++) {
        let index = i;
        // do not go out of the array
        if (i + 1 === args.length) {
            break;
        }
        // define the points
        let y1 = args[index + 1]['y'];
        let y = args[index]['y'];
        let x1 = args[index + 1]['x'];
        let x = args[index]['x'];
        // calculate the slope of the line
        let m = ((y1 - y) / (x1 - x));
        // y = mx + b in where b is unknown  
        // we can use any of the known points to find b 
        let b = y - m * x;
        // see if there is an intersection and print out the values
        args.filter(item => !((item['x'] === x && item['y'] === y) || (item['x'] === x1 && item['y'] === y1)))
            .map((point) => {
            let intersects = (point.y - y) === m * (point.x - x);
            if (intersects) {
                console.log('(' + 'm = ' + m + ', ' + 'b = ' + b + ')');
            }
        });
    }
};
findLinePoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 });
//# sourceMappingURL=index.js.map