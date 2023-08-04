import {Component, ReactNode} from "react";
export class Pager extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div>
        <div className="test">in react</div>
        <style jsx>{`
          .test {
            background-color: red;
          }
        `}</style>
      </div>
    );
  }
}
