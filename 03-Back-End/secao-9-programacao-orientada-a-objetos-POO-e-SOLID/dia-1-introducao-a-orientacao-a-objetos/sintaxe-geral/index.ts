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
}