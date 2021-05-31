console.log(`Service worker loaded`)

self.addEventListener('push', e=>{
    const data = e.data.json()
    console.log(`PUSH recieved`)
    self.registration.showNotification(data.title, {
        body: 'notified'
    })
})