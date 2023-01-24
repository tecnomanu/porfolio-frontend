const token = '023582ae18f5fc2e968855f9ef7dd535de02fe5b2a2420ff3d8e1da7284af09f4ba57e561c3b383a55da2a8e8b9820096c3e1bb8a90a5b53feb9ee3370cf6905d6da4e35759e2915c94b51f53b5f7646a9d033a1c0e93356a3307a7282b32c1fe9caf015cbe7596c4477fb834faae389aa288c8f7175b0259d3c9e1e931d4674';
export const APISettings = {
    headers: new Headers({
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ token,
    }),
    baseURL: 'http://localhost:1337',
}