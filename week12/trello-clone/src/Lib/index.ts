const root = document.getElementById('root') as HTMLElement;
interface State {
  text: string
  description: string
  comments?: string[]
}
type Property = keyof State;

export { root };
export type { State, Property };
