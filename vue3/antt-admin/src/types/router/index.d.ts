export interface IMeta {
  title: string
}

export interface IRoutes {
  path: string,
  name: string,
  component: any,
  meta: IMeta
  children: IRoutes
}