// Structly minimum island problem solution

const minimumIsland = (grid) => {
    const islands = {};
    let counter = 0;
    const visited = {};
    
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const longLat = i.toString() + "," + j.toString();
        if (grid[i][j] === "L") {
          if (Object.keys(visited).includes(longLat)) {
            continue;
          }
          counter+=1;
          islands[counter] = [longLat];
          const location = [i, j];
          visited[longLat] = true;
          const stack = [location];
          while (stack.length > 0) {
            const current = stack.pop();
            const neighbors = [
              [current[0]-1, current[1]],
              [current[0]+1, current[1]],
              [current[0], current[1]-1],
              [current[0], current[1]+1],
            ];
            for (let k = 0; k < neighbors.length; k++) {
              const neighbor = neighbors[k];
              if (neighbor[0] < 0 || neighbor[0] > grid.length-1) {
                continue;
              }
              if (neighbor[1] < 0 || neighbor[1] > grid[i].length-1) {
                continue;
              }
              const stringLocation = neighbor[0].toString() + "," + neighbor[1].toString();
              
              if (grid[neighbor[0]][neighbor[1]] === "L" && !visited[stringLocation]) {
                stack.push(neighbor)
                visited[stringLocation] = true;
                islands[counter].push(stringLocation)
              }
            }
            
          }
        }
      }
    }
    
    const sizes = Object.values(islands).map(island => island.length)
    console.log(sizes)
    return Math.min(...sizes);
};