import app from '../routes/group.routes'

describe('GET /', () => {
    test('should respond with status 200', async () => { 
        const response = await request(app).get('/').send()
        expect(response.status).toBe(200)
     })
})