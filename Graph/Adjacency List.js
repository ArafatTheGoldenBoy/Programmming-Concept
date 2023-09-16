// Create a simple undirected graph with adjacency list

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