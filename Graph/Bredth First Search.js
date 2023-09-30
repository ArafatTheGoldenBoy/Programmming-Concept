// Travarse through the map using Bredth First Search

const city = 'DHAKA SYLET CHITTAGANG CUMILLA'.split(' ');

const roads = [
    ['DHAKA', 'CUMILLA'],
    ['DHAKA', 'SYLET'],
    ['CUMILLA', 'CHITTAGANG'],
    ['SYLET', 'CUMILLA'],
];
const adjacencyList = new Map();

function addNode(city) {
    adjacencyList.set(city, []);
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

city.forEach(addNode);

roads.forEach(road => addEdge(...road))

console.log(adjacencyList);

console.log('********************************************');

function bfs(start) {
    const queue = [start];
    const visited = new Set()
    while (queue.length > 0) {
        const city = queue.shift()
        const destinations = adjacencyList.get(city)
        for (const destination of destinations) {

            if (destination === 'SYLET') {
                console.log('found it');
            }
            if (!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination)
                console.log(destination);
            }
        }
    }
}
bfs('DHAKA')