import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {
    loginClicked() {
        this.props.dispatch({ type: 'LOGIN' })
    }
    render() {
        return (
            <div>
                <div>login</div>
                <button onClick={loginClicked}>login</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)