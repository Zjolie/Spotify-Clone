import React from 'react';

import { Container } from 'react-bootstrap';

const AUTH_URL =
"https://accounts.spotify.com/authorize?client_id=1270b5698aed42ed830a1ae2ec10e083&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
//redirecting here allows us to get authorization.  API is going to ask us questions and the answers are within parameter and scope

export default function Login() {
    return (
<Container 
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh" }}>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login with Spotify
      </a>
</Container>
    )
}
