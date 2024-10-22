declare module '@measured/puck' {
    export const Puck: any;
    export const Render: any;
    export interface ComponentConfig<T, U> {
      fields: Record<string, any>;
      render: (props: T) => JSX.Element;
    }
    export interface Data {
      [key: string]: any;
    }
  }
  