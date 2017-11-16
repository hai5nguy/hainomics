import React from 'react'

class Test extends React.Component {
    render() {
        return (
            <div>
                <div>test</div>
                <div>params: {this.props.match.params.foo}</div>
            </div>
        )
    }
}

export default Test