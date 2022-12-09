// 在全局上给Window接口扩展这个属性
interface Window {
  Person: (n: string) => void;
  myName: string;
}