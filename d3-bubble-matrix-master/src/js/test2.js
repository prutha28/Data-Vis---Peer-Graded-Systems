let data = {
  columns: ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9'],
  rows: [{ name: 'artifact1', values: [0.3, 0.54, 0.99, 0.3, 0.2, 0.6, 0.7, 0.55, 0.3]},
        { name: 'artifact2', values: [0.5 , 0.6, 0.7, 0.8, 0.5, 0.6, 0.7, 0.34, 0.98]},
        { name: 'artifact3', values: [0.99 ,0.2, 0.3, 0.4, 0.7, 0.7, 0.8, 0.5, 0.6]},
        { name: 'artifact4', values: [0.94 ,0.07, 0.27, 0.9, 0.5, 0.7, 0.7, 0.3, 0.56]},
        { name: 'artifact5', values: [0.94 ,0.07, 0.27, 0.9, 0.5, 0.88, 0.7, 0.3, 0.4]},
        { name: 'artifact6', values: [0.94 ,0.07, 0.27, 0.9, 0.5, 0.75, 0.88, 0.4, 0.5]},
        { name: 'artifact7', values: [0.94 ,0.07, 0.27, 0.9, 0.5, 0.94, 0.68, 0.45, 0.34]}]
};

let config = {
  // root: d3.select('#bubble'),
  selector: '#bubble',
  onClick: val => alert(`Value ${val}`),
  hideRightTitle: true,
  hideBottomTitle: true
};

let matrix = new BubbleMatrix(config);

// Draw the bubble matrix.
matrix.draw(data);
