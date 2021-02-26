import React from 'react'




const LoginForm = (props) => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }

    return (
        <div className="login">
            <form onSubmit={e => props.handle_login(e, username, password)}>
                <label htmlFor="username">Username</label>
                <input autoFocus type="text" value={username} onChange={(e) => setUsername(e.target.value)} />


                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <input type="submit" disabled={!validateForm()}>
                    
                </input>

            </form>
        </div>
    )
}
export default LoginForm

