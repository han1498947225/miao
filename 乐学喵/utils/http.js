const commonUrl = "https://www.lexuemiao.com/api"

const get = (url, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${commonUrl}${url}`,
            success(res) {
                resolve(res.data)
            },
            method: 'GET',
            data: data,
            fail(err) {
                reject(err)
            },
            complete() {

            }
        })
    })
}
const post = (url, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${commonUrl}${url}`,
            success(res) {
                resolve(res.data)
            },
            method: 'POST',
            data: data,
            fail(err) {
                reject(err)
            },
            complete() {

            }
        })
    })
}



export {
    get,
    post
}