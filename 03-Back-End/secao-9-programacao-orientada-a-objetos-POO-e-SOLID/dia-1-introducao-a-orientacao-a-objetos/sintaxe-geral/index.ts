class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor (
    brand: string,
    size: number,
    resolution: string,
    connections: string[],
  ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn () {
    console.log(`TV ${this.brand}, ${this.size}, resolution: ${this.resolution} \n\
    available connections: ${this.connections}`);
  };

  
}
const tv1 = new Tv('Samsung', 55, '4K', ['HDMI', 'USB', 'VGA']);
tv1.turnOn();