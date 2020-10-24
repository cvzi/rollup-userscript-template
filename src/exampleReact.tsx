import * as React from 'react'

interface ISomeListProps {
  name?: string;
}

interface ISomeListState {
}

class SomeList extends React.Component<ISomeListProps, ISomeListState> {
  constructor (props: ISomeListProps) {
      super(props)
  }
  render() {
    return (
      <div className="some-list">
        <h1>This is a list for {this.props.name}</h1>
        <ul>
          <li>plain javascript</li>
          <li>typescript</li>
          <li>react</li>
          <li>JSX/TSX</li>
        </ul>
      </div>
    )
  }
}


export default SomeList